import 'dart:async';
import 'package:flutter/material.dart';
import '../../tokens/cometchat_tokens.dart';

/// CometChatToast — A transient notification pill.
/// Dark background, white text, auto-dismisses after duration.
class CometChatToast extends StatefulWidget {
  const CometChatToast({
    super.key,
    required this.message,
    this.duration = const Duration(milliseconds: 3000),
    this.onClose,
  });

  final String message;
  final Duration duration;
  final VoidCallback? onClose;

  @override
  State<CometChatToast> createState() => _CometChatToastState();
}

class _CometChatToastState extends State<CometChatToast> {
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _startTimer();
  }

  @override
  void didUpdateWidget(CometChatToast oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.duration != widget.duration) {
      _timer?.cancel();
      _startTimer();
    }
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  void _startTimer() {
    if (widget.duration > Duration.zero) {
      _timer = Timer(widget.duration, () {
        if (mounted) widget.onClose?.call();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final tokens =
        Theme.of(context).extension<CometChatTokens>() ?? CometChatTokens.light();

    return Semantics(
      liveRegion: true,
      label: widget.message,
      child: Container(
        padding: const EdgeInsets.all(CometChatTokens.spacing2),
        decoration: BoxDecoration(
          color: tokens.staticBlack,
          borderRadius: BorderRadius.circular(CometChatTokens.radius1),
          boxShadow: const [
            BoxShadow(
              color: Color(0x140A0D12),
              blurRadius: 8,
              offset: Offset(0, 12),
            ),
            BoxShadow(
              color: Color(0x080A0D12),
              blurRadius: 3,
              offset: Offset(0, 4),
            ),
            BoxShadow(
              color: Color(0x0A0A0D12),
              blurRadius: 1,
              offset: Offset(0, 2),
            ),
          ],
        ),
        child: Text(
          widget.message,
          textAlign: TextAlign.center,
          style: TextStyle(
            fontFamily: tokens.fontFamily,
            fontSize: 12,
            fontWeight: FontWeight.w400,
            height: 1.5,
            color: tokens.staticWhite,
          ),
        ),
      ),
    );
  }
}

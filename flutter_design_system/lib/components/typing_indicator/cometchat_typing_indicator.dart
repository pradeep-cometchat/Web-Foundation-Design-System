import 'package:flutter/material.dart';
import '../../tokens/cometchat_tokens.dart';

/// Activity type being performed.
enum TypingActivity { typing, recording, uploading }

/// Context: single (no name), group (one name), multiple (count).
enum TypingContext { single, group, multiple }

/// CometChatTypingIndicator — Animated dots with contextual text.
class CometChatTypingIndicator extends StatefulWidget {
  const CometChatTypingIndicator({
    super.key,
    this.activity = TypingActivity.typing,
    this.typingContext = TypingContext.single,
    this.userName = 'John',
    this.count = 2,
  });

  final TypingActivity activity;
  final TypingContext typingContext;
  final String userName;
  final int count;

  @override
  State<CometChatTypingIndicator> createState() => _CometChatTypingIndicatorState();
}

class _CometChatTypingIndicatorState extends State<CometChatTypingIndicator>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1400),
    )..repeat();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  String _getActivityText() {
    final verb = switch (widget.activity) {
      TypingActivity.typing => 'typing',
      TypingActivity.recording => 'recording',
      TypingActivity.uploading => 'uploading',
    };

    return switch (widget.typingContext) {
      TypingContext.single => verb[0].toUpperCase() + verb.substring(1),
      TypingContext.group => '${widget.userName} is $verb',
      TypingContext.multiple => '${widget.count} people are $verb',
    };
  }

  @override
  Widget build(BuildContext context) {
    final tokens =
        Theme.of(context).extension<CometChatTokens>() ?? CometChatTokens.light();
    final text = _getActivityText();

    return Semantics(
      liveRegion: true,
      label: text,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Dots
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              _AnimatedDot(controller: _controller, delay: 0.0, color: tokens.primaryColor),
              const SizedBox(width: CometChatTokens.spacing),
              _AnimatedDot(controller: _controller, delay: 0.14, color: tokens.primaryColor),
              const SizedBox(width: CometChatTokens.spacing),
              _AnimatedDot(controller: _controller, delay: 0.28, color: tokens.primaryColor),
            ],
          ),
          const SizedBox(width: CometChatTokens.spacing1),
          // Text
          Text(
            text,
            style: TextStyle(
              fontFamily: tokens.fontFamily,
              fontSize: 12,
              fontWeight: FontWeight.w400,
              height: 1.5,
              color: tokens.primaryColor,
            ),
          ),
        ],
      ),
    );
  }
}

/// A single animated dot that scales and fades.
class _AnimatedDot extends StatelessWidget {
  const _AnimatedDot({
    required this.controller,
    required this.delay,
    required this.color,
  });

  final AnimationController controller;
  final double delay;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: controller,
      builder: (context, child) {
        // Calculate phase: each dot has a staggered bounce
        final t = (controller.value - delay) % 1.0;
        // Bounce at 40% of cycle, rest at 0%/80%/100%
        final double scale;
        final double opacity;
        if (t < 0.4) {
          // 0 -> 0.4: scale up from 0.6 to 1.0
          final progress = t / 0.4;
          scale = 0.6 + 0.4 * progress;
          opacity = 0.4 + 0.6 * progress;
        } else if (t < 0.8) {
          // 0.4 -> 0.8: scale down from 1.0 to 0.6
          final progress = (t - 0.4) / 0.4;
          scale = 1.0 - 0.4 * progress;
          opacity = 1.0 - 0.6 * progress;
        } else {
          scale = 0.6;
          opacity = 0.4;
        }

        return Transform.scale(
          scale: scale,
          child: Opacity(
            opacity: opacity,
            child: child,
          ),
        );
      },
      child: Container(
        width: 4,
        height: 4,
        decoration: BoxDecoration(
          color: color,
          shape: BoxShape.circle,
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import '../../tokens/cometchat_tokens.dart';

/// CometChatSearchBar — Pill-shaped search input with icon and clear button.
/// Supports controlled and uncontrolled modes.
class CometChatSearchBar extends StatefulWidget {
  const CometChatSearchBar({
    super.key,
    this.placeholder = 'Search',
    this.value,
    this.onChange,
    this.onClear,
    this.showClear = true,
  });

  /// Placeholder text. Default: "Search"
  final String placeholder;

  /// Controlled value. If null, uses internal state.
  final String? value;

  /// Callback when value changes.
  final ValueChanged<String>? onChange;

  /// Callback when the input is cleared.
  final VoidCallback? onClear;

  /// Whether to show the clear button when input has value. Default: true
  final bool showClear;

  @override
  State<CometChatSearchBar> createState() => _CometChatSearchBarState();
}

class _CometChatSearchBarState extends State<CometChatSearchBar> {
  late TextEditingController _controller;
  bool _focused = false;
  bool _hovered = false;

  @override
  void initState() {
    super.initState();
    _controller = TextEditingController(text: widget.value ?? '');
    _controller.addListener(_onInternalChange);
  }

  @override
  void didUpdateWidget(CometChatSearchBar oldWidget) {
    super.didUpdateWidget(oldWidget);
    // Sync controlled value
    if (widget.value != null && widget.value != _controller.text) {
      _controller.text = widget.value!;
    }
  }

  @override
  void dispose() {
    _controller.removeListener(_onInternalChange);
    _controller.dispose();
    super.dispose();
  }

  void _onInternalChange() {
    setState(() {}); // Rebuild to show/hide clear button
    widget.onChange?.call(_controller.text);
  }

  void _handleClear() {
    _controller.clear();
    widget.onChange?.call('');
    widget.onClear?.call();
  }

  @override
  Widget build(BuildContext context) {
    final tokens =
        Theme.of(context).extension<CometChatTokens>() ?? CometChatTokens.light();

    final hasValue = _controller.text.isNotEmpty;
    final showClearBtn = widget.showClear && hasValue;

    final bgColor = (_focused || _hovered)
        ? tokens.backgroundColor03
        : tokens.backgroundColor04;
    final borderColor = _hovered ? tokens.borderColorDark : tokens.borderColorDefault;

    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: Container(
        height: 40,
        padding: const EdgeInsets.symmetric(
          horizontal: CometChatTokens.spacing3,
          vertical: CometChatTokens.spacing2,
        ),
        decoration: BoxDecoration(
          color: bgColor,
          border: Border.all(color: borderColor),
          borderRadius: BorderRadius.circular(CometChatTokens.radiusMax),
        ),
        child: Row(
          children: [
            // Search icon
            SizedBox(
              width: 24,
              height: 24,
              child: Center(
                child: Icon(
                  Icons.search,
                  size: 18,
                  color: tokens.textColorTertiary,
                ),
              ),
            ),
            const SizedBox(width: CometChatTokens.spacing1),
            // Input
            Expanded(
              child: Focus(
                onFocusChange: (focused) => setState(() => _focused = focused),
                child: TextField(
                  controller: _controller,
                  style: TextStyle(
                    fontFamily: tokens.fontFamily,
                    fontSize: 16,
                    fontWeight: FontWeight.w400,
                    height: 20 / 16,
                    color: tokens.textColorPrimary,
                  ),
                  decoration: InputDecoration(
                    hintText: widget.placeholder,
                    hintStyle: TextStyle(
                      fontFamily: tokens.fontFamily,
                      fontSize: 16,
                      fontWeight: FontWeight.w400,
                      color: tokens.textColorTertiary,
                    ),
                    border: InputBorder.none,
                    isDense: true,
                    contentPadding: EdgeInsets.zero,
                  ),
                ),
              ),
            ),
            // Clear button
            if (showClearBtn)
              Padding(
                padding: const EdgeInsets.only(left: CometChatTokens.spacing1),
                child: _ClearButton(
                  onTap: _handleClear,
                  iconColor: tokens.textColorTertiary,
                  hoverColor: tokens.backgroundColor04,
                ),
              ),
          ],
        ),
      ),
    );
  }
}

class _ClearButton extends StatefulWidget {
  const _ClearButton({
    required this.onTap,
    required this.iconColor,
    required this.hoverColor,
  });

  final VoidCallback onTap;
  final Color iconColor;
  final Color hoverColor;

  @override
  State<_ClearButton> createState() => _ClearButtonState();
}

class _ClearButtonState extends State<_ClearButton> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: Semantics(
          button: true,
          label: 'Clear search',
          child: Container(
            width: 20,
            height: 20,
            decoration: BoxDecoration(
              color: _hovered ? widget.hoverColor : Colors.transparent,
              shape: BoxShape.circle,
            ),
            child: Center(
              child: Icon(
                Icons.close,
                size: 12,
                color: widget.iconColor,
              ),
            ),
          ),
        ),
      ),
    );
  }
}

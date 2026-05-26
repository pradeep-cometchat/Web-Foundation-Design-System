import 'package:flutter/material.dart';
import '../../tokens/cometchat_tokens.dart';

enum CheckboxType { checkbox, radio }
enum CheckboxSize { sm, md }

/// CometChatCheckbox — Selection control supporting checkbox and radio types.
class CometChatCheckbox extends StatefulWidget {
  const CometChatCheckbox({
    super.key,
    this.checked = false,
    this.indeterminate = false,
    this.onChange,
    this.type = CheckboxType.checkbox,
    this.size = CheckboxSize.md,
    this.label,
    this.description,
    this.disabled = false,
  });

  final bool checked;
  final bool indeterminate;
  final ValueChanged<bool>? onChange;
  final CheckboxType type;
  final CheckboxSize size;
  final String? label;
  final String? description;
  final bool disabled;

  @override
  State<CometChatCheckbox> createState() => _CometChatCheckboxState();
}

class _CometChatCheckboxState extends State<CometChatCheckbox> {
  bool _hovered = false;

  double get _boxSize => widget.size == CheckboxSize.sm ? 16.0 : 20.0;

  void _handleTap() {
    if (!widget.disabled) {
      widget.onChange?.call(!widget.checked);
    }
  }

  @override
  Widget build(BuildContext context) {
    final tokens = Theme.of(context).extension<CometChatTokens>() ?? CometChatTokens.light();
    final isChecked = widget.checked || widget.indeterminate;

    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: GestureDetector(
        onTap: _handleTap,
        child: Opacity(
          opacity: widget.disabled ? 0.7 : 1.0,
          child: Row(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Box
              Container(
                width: _boxSize,
                height: _boxSize,
                decoration: BoxDecoration(
                  color: isChecked
                      ? (widget.disabled ? tokens.backgroundColor04 : tokens.primaryColor)
                      : Colors.transparent,
                  borderRadius: widget.type == CheckboxType.radio
                      ? BorderRadius.circular(CometChatTokens.radiusMax)
                      : BorderRadius.circular(widget.size == CheckboxSize.sm ? CometChatTokens.radius1 : 6.0),
                  border: Border.all(
                    color: isChecked
                        ? (widget.disabled ? tokens.borderColorDark : tokens.primaryColor)
                        : (_hovered ? tokens.primaryColor : tokens.borderColorDark),
                    width: 1.5,
                  ),
                ),
                child: isChecked
                    ? Center(child: _buildIcon(tokens))
                    : null,
              ),
              // Label + description
              if (widget.label != null || widget.description != null)
                Padding(
                  padding: const EdgeInsets.only(left: CometChatTokens.spacing3),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      if (widget.label != null)
                        Text(
                          widget.label!,
                          style: TextStyle(
                            fontFamily: tokens.fontFamily,
                            fontSize: 16,
                            fontWeight: FontWeight.w500,
                            color: tokens.textColorSecondary,
                            height: 1.5,
                          ),
                        ),
                      if (widget.description != null)
                        Text(
                          widget.description!,
                          style: TextStyle(
                            fontFamily: tokens.fontFamily,
                            fontSize: 14,
                            fontWeight: FontWeight.w400,
                            color: tokens.textColorTertiary,
                            height: 1.43,
                          ),
                        ),
                    ],
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildIcon(CometChatTokens tokens) {
    final iconSize = widget.size == CheckboxSize.sm ? 10.0 : 12.0;
    final color = widget.disabled ? tokens.textColorTertiary : tokens.staticWhite;

    if (widget.type == CheckboxType.radio) {
      final dotSize = widget.size == CheckboxSize.sm ? 6.0 : 8.0;
      return Container(
        width: dotSize,
        height: dotSize,
        decoration: BoxDecoration(color: color, shape: BoxShape.circle),
      );
    }

    if (widget.indeterminate) {
      return Icon(Icons.remove, size: iconSize, color: color);
    }

    return Icon(Icons.check, size: iconSize, color: color);
  }
}

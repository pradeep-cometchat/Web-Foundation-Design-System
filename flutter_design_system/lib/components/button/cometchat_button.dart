import 'package:flutter/material.dart';
import '../../tokens/cometchat_tokens.dart';

enum ButtonVariant {
  primary,
  secondary,
  tertiary,
  linkColor,
  linkGray,
  destructivePrimary,
  destructiveSecondary,
  destructiveTertiary,
  destructiveLink,
}

enum ButtonSize { sm, md, lg, xl }

/// CometChatButton — Primary interactive element with 9 variants × 4 sizes.
class CometChatButton extends StatefulWidget {
  const CometChatButton({
    super.key,
    this.variant = ButtonVariant.primary,
    this.size = ButtonSize.md,
    this.label,
    this.loading = false,
    this.iconLeft,
    this.iconRight,
    this.iconOnly = false,
    this.fullWidth = false,
    this.disabled = false,
    this.onPressed,
  });

  final ButtonVariant variant;
  final ButtonSize size;
  final String? label;
  final bool loading;
  final IconData? iconLeft;
  final IconData? iconRight;
  final bool iconOnly;
  final bool fullWidth;
  final bool disabled;
  final VoidCallback? onPressed;

  @override
  State<CometChatButton> createState() => _CometChatButtonState();
}

class _CometChatButtonState extends State<CometChatButton> {
  bool _hovered = false;

  double get _height => switch (widget.size) {
    ButtonSize.sm => 36.0,
    ButtonSize.md => 40.0,
    ButtonSize.lg => 44.0,
    ButtonSize.xl => 48.0,
  };

  double get _fontSize => switch (widget.size) {
    ButtonSize.sm || ButtonSize.md => 14.0,
    ButtonSize.lg || ButtonSize.xl => 16.0,
  };

  double get _iconSize => switch (widget.size) {
    ButtonSize.sm || ButtonSize.md => 20.0,
    ButtonSize.lg || ButtonSize.xl => 24.0,
  };

  EdgeInsets get _padding => switch (widget.size) {
    ButtonSize.sm => const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
    ButtonSize.md => const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
    ButtonSize.lg => const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
    ButtonSize.xl => const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
  };

  @override
  Widget build(BuildContext context) {
    final tokens = Theme.of(context).extension<CometChatTokens>() ?? CometChatTokens.light();
    final isDisabled = widget.disabled || widget.loading;
    final colors = _getColors(tokens, isDisabled);

    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: GestureDetector(
        onTap: isDisabled ? null : widget.onPressed,
        child: Semantics(
          button: true,
          enabled: !isDisabled,
          label: widget.iconOnly ? widget.label : null,
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 120),
            height: widget.iconOnly ? _height : _height,
            width: widget.iconOnly ? _height : (widget.fullWidth ? double.infinity : null),
            padding: widget.iconOnly ? EdgeInsets.zero : _padding,
            decoration: BoxDecoration(
              color: _hovered && !isDisabled ? colors.hoverBg : colors.bg,
              borderRadius: BorderRadius.circular(CometChatTokens.radius2),
              border: colors.borderColor != null
                  ? Border.all(color: colors.borderColor!)
                  : null,
              boxShadow: colors.hasShadow
                  ? const [BoxShadow(color: Color(0x0D0A0D12), blurRadius: 2, offset: Offset(0, 1))]
                  : null,
            ),
            child: Row(
              mainAxisSize: widget.fullWidth ? MainAxisSize.max : MainAxisSize.min,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (widget.loading)
                  SizedBox(
                    width: 16,
                    height: 16,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      color: colors.fg,
                    ),
                  )
                else ...[
                  if (widget.iconLeft != null)
                    Padding(
                      padding: EdgeInsets.only(right: widget.iconOnly ? 0 : 4),
                      child: Icon(widget.iconLeft, size: _iconSize, color: colors.fg),
                    ),
                  if (!widget.iconOnly && widget.label != null)
                    Text(
                      widget.label!,
                      style: TextStyle(
                        fontFamily: tokens.fontFamily,
                        fontSize: _fontSize,
                        fontWeight: FontWeight.w600,
                        color: colors.fg,
                      ),
                    ),
                  if (widget.iconRight != null)
                    Padding(
                      padding: EdgeInsets.only(left: widget.iconOnly ? 0 : 4),
                      child: Icon(widget.iconRight, size: _iconSize, color: colors.fg),
                    ),
                ],
              ],
            ),
          ),
        ),
      ),
    );
  }

  _ButtonColors _getColors(CometChatTokens tokens, bool isDisabled) {
    if (isDisabled) {
      return _ButtonColors(
        bg: tokens.backgroundColor04,
        hoverBg: tokens.backgroundColor04,
        fg: tokens.textColorTertiary,
        borderColor: tokens.borderColorDefault,
        hasShadow: false,
      );
    }

    return switch (widget.variant) {
      ButtonVariant.primary => _ButtonColors(
        bg: tokens.primaryButtonBackground,
        hoverBg: const Color(0xFF5A45C0),
        fg: tokens.primaryButtonText,
        hasShadow: true,
      ),
      ButtonVariant.secondary => _ButtonColors(
        bg: Colors.transparent,
        hoverBg: tokens.backgroundColor02,
        fg: tokens.textColorPrimary,
        borderColor: tokens.borderColorDark,
        hasShadow: true,
      ),
      ButtonVariant.tertiary => _ButtonColors(
        bg: Colors.transparent,
        hoverBg: tokens.backgroundColor02,
        fg: tokens.textColorSecondary,
      ),
      ButtonVariant.linkColor => _ButtonColors(
        bg: Colors.transparent,
        hoverBg: Colors.transparent,
        fg: tokens.primaryColor,
      ),
      ButtonVariant.linkGray => _ButtonColors(
        bg: Colors.transparent,
        hoverBg: Colors.transparent,
        fg: tokens.textColorSecondary,
      ),
      ButtonVariant.destructivePrimary => _ButtonColors(
        bg: tokens.errorColor,
        hoverBg: tokens.errorColor,
        fg: tokens.staticWhite,
        hasShadow: true,
      ),
      ButtonVariant.destructiveSecondary => _ButtonColors(
        bg: Colors.transparent,
        hoverBg: const Color(0x1AF97066),
        fg: tokens.errorColor,
        borderColor: tokens.errorColor,
        hasShadow: true,
      ),
      ButtonVariant.destructiveTertiary => _ButtonColors(
        bg: Colors.transparent,
        hoverBg: const Color(0x1AF97066),
        fg: tokens.errorColor,
      ),
      ButtonVariant.destructiveLink => _ButtonColors(
        bg: Colors.transparent,
        hoverBg: Colors.transparent,
        fg: tokens.errorColor,
      ),
    };
  }
}

class _ButtonColors {
  const _ButtonColors({
    required this.bg,
    required this.hoverBg,
    required this.fg,
    this.borderColor,
    this.hasShadow = false,
  });
  final Color bg;
  final Color hoverBg;
  final Color fg;
  final Color? borderColor;
  final bool hasShadow;
}

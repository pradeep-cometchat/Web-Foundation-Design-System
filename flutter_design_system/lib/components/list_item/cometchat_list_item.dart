import 'package:flutter/material.dart';
import '../../tokens/cometchat_tokens.dart';

/// CometChatListItem — Versatile list row with avatar, title, subtitle, trailing.
class CometChatListItem extends StatefulWidget {
  const CometChatListItem({
    super.key,
    this.avatarUrl,
    this.initials,
    this.statusColor,
    required this.title,
    this.subtitle,
    this.subtitleIcon,
    this.trailingText,
    this.trailingWidget,
    this.selected = false,
    this.onTap,
  });

  final String? avatarUrl;
  final String? initials;
  final Color? statusColor;
  final String title;
  final String? subtitle;
  final IconData? subtitleIcon;
  final String? trailingText;
  final Widget? trailingWidget;
  final bool selected;
  final VoidCallback? onTap;

  @override
  State<CometChatListItem> createState() => _CometChatListItemState();
}

class _CometChatListItemState extends State<CometChatListItem> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    final tokens = Theme.of(context).extension<CometChatTokens>() ?? CometChatTokens.light();

    final bgColor = widget.selected
        ? const Color(0xFFF0EDFC)
        : _hovered
            ? tokens.backgroundColor02
            : tokens.backgroundColor01;

    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(
            horizontal: CometChatTokens.spacing4,
            vertical: CometChatTokens.spacing2,
          ),
          decoration: BoxDecoration(
            color: bgColor,
            borderRadius: BorderRadius.circular(CometChatTokens.radius2),
          ),
          constraints: const BoxConstraints(minHeight: 56),
          child: Row(
            children: [
              // Avatar
              _Avatar(
                url: widget.avatarUrl,
                initials: widget.initials ?? widget.title[0],
                statusColor: widget.statusColor,
                primaryColor: tokens.primaryColor,
              ),
              const SizedBox(width: CometChatTokens.spacing3),
              // Content
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      widget.title,
                      style: TextStyle(
                        fontFamily: tokens.fontFamily,
                        fontSize: 14,
                        fontWeight: FontWeight.w500,
                        color: tokens.textColorPrimary,
                        height: 1.43,
                      ),
                      overflow: TextOverflow.ellipsis,
                      maxLines: 1,
                    ),
                    if (widget.subtitle != null)
                      Row(
                        children: [
                          if (widget.subtitleIcon != null)
                            Padding(
                              padding: const EdgeInsets.only(right: CometChatTokens.spacing1),
                              child: Icon(widget.subtitleIcon, size: 14, color: tokens.textColorTertiary),
                            ),
                          Expanded(
                            child: Text(
                              widget.subtitle!,
                              style: TextStyle(
                                fontFamily: tokens.fontFamily,
                                fontSize: 12,
                                color: tokens.textColorSecondary,
                                height: 1.5,
                              ),
                              overflow: TextOverflow.ellipsis,
                              maxLines: 1,
                            ),
                          ),
                        ],
                      ),
                  ],
                ),
              ),
              // Trailing
              if (widget.trailingText != null || widget.trailingWidget != null)
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    if (widget.trailingText != null)
                      Text(
                        widget.trailingText!,
                        style: TextStyle(
                          fontFamily: tokens.fontFamily,
                          fontSize: 10,
                          color: tokens.textColorTertiary,
                          height: 1.6,
                        ),
                      ),
                    if (widget.trailingWidget != null) widget.trailingWidget!,
                  ],
                ),
            ],
          ),
        ),
      ),
    );
  }
}

class _Avatar extends StatelessWidget {
  const _Avatar({
    required this.url,
    required this.initials,
    required this.statusColor,
    required this.primaryColor,
  });

  final String? url;
  final String initials;
  final Color? statusColor;
  final Color primaryColor;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 40,
      height: 40,
      child: Stack(
        children: [
          Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(
              color: primaryColor.withValues(alpha: 0.15),
              shape: BoxShape.circle,
            ),
            child: url != null
                ? ClipOval(child: Image.network(url!, fit: BoxFit.cover, width: 40, height: 40))
                : Center(
                    child: Text(
                      initials.toUpperCase(),
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w600,
                        color: primaryColor,
                      ),
                    ),
                  ),
          ),
          if (statusColor != null)
            Positioned(
              right: 0,
              bottom: 0,
              child: Container(
                width: 10,
                height: 10,
                decoration: BoxDecoration(
                  color: statusColor,
                  shape: BoxShape.circle,
                  border: Border.all(color: Colors.white, width: 2),
                ),
              ),
            ),
        ],
      ),
    );
  }
}

import 'package:flutter/material.dart';
import '../../tokens/cometchat_tokens.dart';

/// A message in the thread.
class ThreadMessage {
  const ThreadMessage({
    required this.text,
    required this.time,
    required this.isSent,
    this.isRead = false,
  });
  final String text;
  final String time;
  final bool isSent;
  final bool isRead;
}

/// CometChatThreadView — Complete threaded conversation panel.
class CometChatThreadView extends StatelessWidget {
  const CometChatThreadView({
    super.key,
    this.title = 'Thread',
    required this.parentMessage,
    required this.replies,
    this.dateLabel = 'Today',
    this.composerPlaceholder = 'Type your message...',
    this.onClose,
  });

  final String title;
  final ThreadMessage parentMessage;
  final List<ThreadMessage> replies;
  final String dateLabel;
  final String composerPlaceholder;
  final VoidCallback? onClose;

  @override
  Widget build(BuildContext context) {
    final tokens = Theme.of(context).extension<CometChatTokens>() ?? CometChatTokens.light();

    return Container(
      width: 420,
      decoration: BoxDecoration(
        color: tokens.backgroundColor01,
        border: Border.all(color: tokens.borderColorLight),
      ),
      child: Column(
        children: [
          // Header
          _ThreadHeader(title: title, tokens: tokens, onClose: onClose),
          // Chat area
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.only(top: CometChatTokens.spacing3),
              child: Column(
                children: [
                  // Date chip
                  _DateChip(label: dateLabel, tokens: tokens),
                  const SizedBox(height: 8),
                  // Parent message
                  _MessageBubble(message: parentMessage, tokens: tokens),
                  // Reply separator
                  if (replies.isNotEmpty)
                    _ReplySeparator(count: replies.length, tokens: tokens),
                  // Replies
                  for (final reply in replies)
                    _MessageBubble(message: reply, tokens: tokens),
                ],
              ),
            ),
          ),
          // Composer
          _Composer(placeholder: composerPlaceholder, tokens: tokens),
        ],
      ),
    );
  }
}

class _ThreadHeader extends StatelessWidget {
  const _ThreadHeader({required this.title, required this.tokens, required this.onClose});
  final String title;
  final CometChatTokens tokens;
  final VoidCallback? onClose;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 64,
      padding: const EdgeInsets.symmetric(horizontal: CometChatTokens.spacing4),
      decoration: BoxDecoration(
        color: tokens.backgroundColor01,
        border: Border(bottom: BorderSide(color: tokens.borderColorLight)),
      ),
      child: Row(
        children: [
          Expanded(
            child: Text(title, style: TextStyle(fontFamily: tokens.fontFamily, fontSize: 20, fontWeight: FontWeight.w700, color: tokens.textColorPrimary)),
          ),
          GestureDetector(onTap: onClose, child: Icon(Icons.close, size: 14, color: tokens.textColorPrimary)),
          const SizedBox(width: 16),
          Icon(Icons.info_outline, size: 20, color: tokens.textColorPrimary),
        ],
      ),
    );
  }
}

class _DateChip extends StatelessWidget {
  const _DateChip({required this.label, required this.tokens});
  final String label;
  final CometChatTokens tokens;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: CometChatTokens.spacing2, vertical: CometChatTokens.spacing1),
      decoration: BoxDecoration(
        color: tokens.backgroundColor02,
        border: Border.all(color: tokens.borderColorDark),
        borderRadius: BorderRadius.circular(CometChatTokens.radius1),
      ),
      child: Text(label, style: TextStyle(fontFamily: tokens.fontFamily, fontSize: 12, fontWeight: FontWeight.w500, color: tokens.textColorPrimary)),
    );
  }
}

class _MessageBubble extends StatelessWidget {
  const _MessageBubble({required this.message, required this.tokens});
  final ThreadMessage message;
  final CometChatTokens tokens;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: CometChatTokens.spacing4, vertical: CometChatTokens.spacing2),
      child: Align(
        alignment: message.isSent ? Alignment.centerRight : Alignment.centerLeft,
        child: Container(
          constraints: const BoxConstraints(maxWidth: 300),
          padding: const EdgeInsets.fromLTRB(12, 12, 12, 4),
          decoration: BoxDecoration(
            color: message.isSent ? tokens.primaryColor : tokens.backgroundColor03,
            borderRadius: BorderRadius.circular(CometChatTokens.radius3),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(
                message.text,
                style: TextStyle(
                  fontFamily: tokens.fontFamily,
                  fontSize: 14,
                  fontWeight: FontWeight.w400,
                  height: 1.43,
                  color: message.isSent ? tokens.staticWhite : tokens.textColorPrimary,
                ),
              ),
              const SizedBox(height: 4),
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    message.time,
                    style: TextStyle(
                      fontFamily: tokens.fontFamily,
                      fontSize: 10,
                      color: message.isSent ? tokens.staticWhite.withValues(alpha: 0.7) : tokens.textColorTertiary,
                    ),
                  ),
                  if (message.isSent && message.isRead) ...[
                    const SizedBox(width: 4),
                    Icon(Icons.done_all, size: 14, color: const Color(0xFF56E8A7)),
                  ],
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _ReplySeparator extends StatelessWidget {
  const _ReplySeparator({required this.count, required this.tokens});
  final int count;
  final CometChatTokens tokens;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: CometChatTokens.spacing5, vertical: CometChatTokens.spacing1),
      child: Row(
        children: [
          Text(
            '$count ${count == 1 ? 'reply' : 'replies'}',
            style: TextStyle(fontFamily: tokens.fontFamily, fontSize: 14, color: tokens.textColorSecondary),
          ),
          const SizedBox(width: 8),
          Expanded(child: Container(height: 1, color: tokens.backgroundColor04)),
        ],
      ),
    );
  }
}

class _Composer extends StatelessWidget {
  const _Composer({required this.placeholder, required this.tokens});
  final String placeholder;
  final CometChatTokens tokens;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(CometChatTokens.spacing2),
      child: Container(
        decoration: BoxDecoration(
          color: tokens.backgroundColor01,
          border: Border.all(color: tokens.borderColorLight),
          borderRadius: BorderRadius.circular(CometChatTokens.radius2),
        ),
        child: Column(
          children: [
            // Input
            Padding(
              padding: const EdgeInsets.all(CometChatTokens.spacing3),
              child: TextField(
                decoration: InputDecoration(
                  hintText: placeholder,
                  hintStyle: TextStyle(color: tokens.textColorSecondary, fontSize: 14),
                  border: InputBorder.none,
                  isDense: true,
                  contentPadding: EdgeInsets.zero,
                ),
                style: TextStyle(fontFamily: tokens.fontFamily, fontSize: 14, color: tokens.textColorPrimary),
              ),
            ),
            // Divider
            Container(height: 1, color: tokens.backgroundColor03),
            // Toolbar
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: CometChatTokens.spacing3, vertical: CometChatTokens.spacing2),
              child: Row(
                children: [
                  Icon(Icons.add_circle_outline, size: 20, color: tokens.textColorTertiary),
                  const SizedBox(width: 16),
                  Icon(Icons.mic_none, size: 20, color: tokens.textColorTertiary),
                  const SizedBox(width: 16),
                  Icon(Icons.emoji_emotions_outlined, size: 20, color: tokens.textColorTertiary),
                  const SizedBox(width: 16),
                  Text('Aa', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500, color: tokens.textColorTertiary)),
                  const Spacer(),
                  Container(
                    width: 32,
                    height: 32,
                    decoration: BoxDecoration(
                      color: tokens.backgroundColor04,
                      shape: BoxShape.circle,
                    ),
                    child: Icon(Icons.send, size: 16, color: tokens.textColorTertiary),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

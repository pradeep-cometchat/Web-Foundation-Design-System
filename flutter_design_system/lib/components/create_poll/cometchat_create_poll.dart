import 'package:flutter/material.dart';
import '../../tokens/cometchat_tokens.dart';

/// CometChatCreatePoll — Full poll creation dialog with dynamic options.
class CometChatCreatePoll extends StatefulWidget {
  const CometChatCreatePoll({
    super.key,
    this.onClose,
    this.onCreate,
    this.maxOptions = 12,
  });

  final VoidCallback? onClose;
  final void Function(String question, List<String> options)? onCreate;
  final int maxOptions;

  @override
  State<CometChatCreatePoll> createState() => _CometChatCreatePollState();
}

class _CometChatCreatePollState extends State<CometChatCreatePoll> {
  final _questionController = TextEditingController();
  final List<TextEditingController> _optionControllers = [
    TextEditingController(),
    TextEditingController(),
  ];
  String? _error;

  @override
  void dispose() {
    _questionController.dispose();
    for (final c in _optionControllers) {
      c.dispose();
    }
    super.dispose();
  }

  void _addOption() {
    if (_optionControllers.length >= widget.maxOptions) {
      setState(() => _error = "You've reached the limit. Max ${widget.maxOptions} options.");
      return;
    }
    setState(() {
      _optionControllers.add(TextEditingController());
      _error = null;
    });
  }

  void _removeOption(int index) {
    if (_optionControllers.length <= 2) return;
    setState(() {
      _optionControllers[index].dispose();
      _optionControllers.removeAt(index);
      _error = null;
    });
  }

  bool get _canCreate {
    final hasQuestion = _questionController.text.trim().isNotEmpty;
    final filledOptions = _optionControllers.where((c) => c.text.trim().isNotEmpty).length;
    return hasQuestion && filledOptions >= 2;
  }

  void _handleCreate() {
    if (!_canCreate) {
      setState(() => _error = 'Please fill in all required fields.');
      return;
    }
    final options = _optionControllers
        .map((c) => c.text.trim())
        .where((t) => t.isNotEmpty)
        .toList();
    widget.onCreate?.call(_questionController.text.trim(), options);
  }

  @override
  Widget build(BuildContext context) {
    final tokens = Theme.of(context).extension<CometChatTokens>() ?? CometChatTokens.light();

    return Container(
      width: 420,
      decoration: BoxDecoration(
        color: tokens.backgroundColor01,
        border: Border.all(color: tokens.borderColorLight),
        borderRadius: BorderRadius.circular(CometChatTokens.radius5),
        boxShadow: CometChatTokens.shadowLg,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Header
          _Header(tokens: tokens, onClose: widget.onClose),
          // Body
          Flexible(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(CometChatTokens.spacing4),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Question
                  Text('Question', style: TextStyle(fontFamily: tokens.fontFamily, fontSize: 16, fontWeight: FontWeight.w500, color: tokens.textColorPrimary)),
                  const SizedBox(height: CometChatTokens.spacing3),
                  TextField(
                    controller: _questionController,
                    onChanged: (_) => setState(() {}),
                    decoration: InputDecoration(
                      hintText: 'Ask a question',
                      hintStyle: TextStyle(color: tokens.textColorTertiary),
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(CometChatTokens.radius2), borderSide: BorderSide(color: tokens.borderColorDefault)),
                      enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(CometChatTokens.radius2), borderSide: BorderSide(color: tokens.borderColorDefault)),
                      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                    ),
                    style: TextStyle(fontFamily: tokens.fontFamily, fontSize: 14, color: tokens.textColorPrimary),
                  ),
                  const SizedBox(height: CometChatTokens.spacing5),
                  // Options
                  for (int i = 0; i < _optionControllers.length; i++)
                    Padding(
                      padding: const EdgeInsets.only(bottom: CometChatTokens.spacing3),
                      child: _OptionRow(
                        controller: _optionControllers[i],
                        onRemove: _optionControllers.length > 2 ? () => _removeOption(i) : null,
                        tokens: tokens,
                        onChanged: () => setState(() {}),
                      ),
                    ),
                  // Add option
                  if (_optionControllers.length < widget.maxOptions)
                    GestureDetector(
                      onTap: _addOption,
                      child: Row(
                        children: [
                          Icon(Icons.add_circle_outline, size: 20, color: tokens.primaryColor),
                          const SizedBox(width: 8),
                          Text('Add an option', style: TextStyle(fontFamily: tokens.fontFamily, fontSize: 14, fontWeight: FontWeight.w500, color: tokens.primaryColor)),
                        ],
                      ),
                    ),
                ],
              ),
            ),
          ),
          // Footer
          _Footer(
            tokens: tokens,
            error: _error,
            canCreate: _canCreate,
            onCancel: widget.onClose,
            onCreate: _handleCreate,
          ),
        ],
      ),
    );
  }
}

class _Header extends StatelessWidget {
  const _Header({required this.tokens, required this.onClose});
  final CometChatTokens tokens;
  final VoidCallback? onClose;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 64,
      padding: const EdgeInsets.symmetric(horizontal: CometChatTokens.spacing4),
      decoration: BoxDecoration(border: Border(bottom: BorderSide(color: tokens.borderColorLight))),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text('Create Poll', style: TextStyle(fontFamily: tokens.fontFamily, fontSize: 20, fontWeight: FontWeight.w700, color: tokens.textColorPrimary)),
          GestureDetector(
            onTap: onClose,
            child: Icon(Icons.close, size: 24, color: tokens.textColorPrimary),
          ),
        ],
      ),
    );
  }
}

class _OptionRow extends StatelessWidget {
  const _OptionRow({required this.controller, required this.onRemove, required this.tokens, required this.onChanged});
  final TextEditingController controller;
  final VoidCallback? onRemove;
  final CometChatTokens tokens;
  final VoidCallback onChanged;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(Icons.drag_handle, size: 20, color: tokens.textColorSecondary),
        const SizedBox(width: 8),
        Expanded(
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            decoration: BoxDecoration(
              border: Border.all(color: tokens.borderColorDark),
              borderRadius: BorderRadius.circular(CometChatTokens.radius2),
            ),
            child: TextField(
              controller: controller,
              onChanged: (_) => onChanged(),
              decoration: InputDecoration(
                hintText: 'Option',
                hintStyle: TextStyle(color: tokens.textColorTertiary),
                border: InputBorder.none,
                isDense: true,
                contentPadding: EdgeInsets.zero,
              ),
              style: TextStyle(fontFamily: tokens.fontFamily, fontSize: 14, color: tokens.textColorPrimary),
            ),
          ),
        ),
        const SizedBox(width: 8),
        if (onRemove != null)
          GestureDetector(
            onTap: onRemove,
            child: Icon(Icons.close, size: 20, color: tokens.textColorSecondary),
          ),
      ],
    );
  }
}

class _Footer extends StatelessWidget {
  const _Footer({required this.tokens, required this.error, required this.canCreate, required this.onCancel, required this.onCreate});
  final CometChatTokens tokens;
  final String? error;
  final bool canCreate;
  final VoidCallback? onCancel;
  final VoidCallback onCreate;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(CometChatTokens.spacing4),
      decoration: BoxDecoration(border: Border(top: BorderSide(color: tokens.borderColorLight))),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (error != null)
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(8),
              margin: const EdgeInsets.only(bottom: 12),
              decoration: BoxDecoration(
                color: const Color(0xFFFEF3F2),
                borderRadius: BorderRadius.circular(CometChatTokens.radius2),
              ),
              child: Row(
                children: [
                  Icon(Icons.error, size: 20, color: tokens.errorColor),
                  const SizedBox(width: 8),
                  Expanded(child: Text(error!, style: TextStyle(fontSize: 14, color: tokens.errorColor))),
                ],
              ),
            ),
          Row(
            children: [
              Expanded(
                child: GestureDetector(
                  onTap: onCancel,
                  child: Container(
                    height: 44,
                    decoration: BoxDecoration(
                      border: Border.all(color: tokens.borderColorDark),
                      borderRadius: BorderRadius.circular(CometChatTokens.radius2),
                    ),
                    child: Center(child: Text('Cancel', style: TextStyle(fontFamily: tokens.fontFamily, fontSize: 14, fontWeight: FontWeight.w500, color: tokens.textColorPrimary))),
                  ),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: GestureDetector(
                  onTap: canCreate ? onCreate : null,
                  child: Container(
                    height: 44,
                    decoration: BoxDecoration(
                      color: canCreate ? tokens.primaryButtonBackground : tokens.backgroundColor04,
                      borderRadius: BorderRadius.circular(CometChatTokens.radius2),
                    ),
                    child: Center(child: Text('Create', style: TextStyle(fontFamily: tokens.fontFamily, fontSize: 14, fontWeight: FontWeight.w500, color: canCreate ? tokens.primaryButtonText : tokens.textColorTertiary))),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

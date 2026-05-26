import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'story_registry.dart';

class DesignSystemApp extends StatefulWidget {
  const DesignSystemApp({super.key});

  @override
  State<DesignSystemApp> createState() => _DesignSystemAppState();
}

class _DesignSystemAppState extends State<DesignSystemApp> {
  int _selectedComponent = 0;
  int _selectedStory = 0;
  Map<String, dynamic> _currentArgs = {};
  Set<int> _expandedComponents = {0};

  @override
  void initState() {
    super.initState();
    _syncArgs();
  }

  void _syncArgs() {
    final story = componentRegistry[_selectedComponent].stories[_selectedStory];
    _currentArgs = Map.from(story.defaultArgs ?? {});
  }

  @override
  Widget build(BuildContext context) {
    final component = componentRegistry[_selectedComponent];
    final story = component.stories[_selectedStory];

    return Scaffold(
      body: Row(
        children: [
          // ─── Sidebar ───
          _Sidebar(
            selectedComponent: _selectedComponent,
            selectedStory: _selectedStory,
            expandedComponents: _expandedComponents,
            onSelect: (compIdx, storyIdx) {
              setState(() {
                _selectedComponent = compIdx;
                _selectedStory = storyIdx;
                _expandedComponents.add(compIdx);
                _syncArgs();
              });
            },
            onToggleExpand: (compIdx) {
              setState(() {
                if (_expandedComponents.contains(compIdx)) {
                  _expandedComponents.remove(compIdx);
                } else {
                  _expandedComponents.add(compIdx);
                }
              });
            },
          ),
          // ─── Main Content ───
          Expanded(
            child: Column(
              children: [
                _TopBar(
                  componentName: component.name,
                  storyName: story.name,
                ),
                // Preview / Code area
                Expanded(
                  child: _buildContent(story),
                ),
                // Controls panel (bottom)
                if (story.type == StoryType.preview || story.type == StoryType.playground)
                  _ControlsPanel(
                    controls: component.controls,
                    args: _currentArgs,
                    onChanged: (key, value) {
                      setState(() {
                        _currentArgs[key] = value;
                      });
                    },
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildContent(Story story) {
    switch (story.type) {
      case StoryType.preview:
        final open = _currentArgs['open'] as bool? ?? true;
        if (!open) {
          return const _PreviewPanel(child: SizedBox.shrink());
        }
        return _PreviewPanel(child: story.builder!(_currentArgs));
      case StoryType.states:
        return _PreviewPanel(child: story.builder!(_currentArgs));
      case StoryType.code:
        return _CodePanel(code: story.code ?? '');
      case StoryType.usage:
        return _UsagePanel(code: story.code ?? '');
      case StoryType.playground:
        final open = _currentArgs['open'] as bool? ?? true;
        if (!open) {
          return const _PreviewPanel(child: SizedBox.shrink());
        }
        return _PlaygroundPanel(
          child: story.builder!(_currentArgs),
          args: _currentArgs,
        );
    }
  }
}

// ─── Preview Panel ───
class _PreviewPanel extends StatelessWidget {
  const _PreviewPanel({required this.child});
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFFF8F8F8),
      child: Center(child: child),
    );
  }
}

// ─── Code Panel ───
class _CodePanel extends StatelessWidget {
  const _CodePanel({required this.code});
  final String code;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFF1E1E1E),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Header
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            decoration: const BoxDecoration(
              border: Border(bottom: BorderSide(color: Color(0xFF333333))),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text(
                  'COMETCHAT_TOAST.DART',
                  style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Color(0xFF888888), letterSpacing: 0.8),
                ),
                MouseRegion(
                  cursor: SystemMouseCursors.click,
                  child: GestureDetector(
                    onTap: () {
                      Clipboard.setData(ClipboardData(text: code));
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Copied to clipboard'), duration: Duration(seconds: 1)),
                      );
                    },
                    child: const Text('Copy', style: TextStyle(fontSize: 12, color: Color(0xFF6852D6), fontWeight: FontWeight.w500)),
                  ),
                ),
              ],
            ),
          ),
          // Code
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(16),
              child: SelectableText(
                code,
                style: const TextStyle(
                  fontFamily: 'monospace',
                  fontSize: 13,
                  height: 1.6,
                  color: Color(0xFFD4D4D4),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

// ─── Usage Panel ───
class _UsagePanel extends StatelessWidget {
  const _UsagePanel({required this.code});
  final String code;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFFFFFFFF),
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(32),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Usage Examples',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: Color(0xFF141414)),
            ),
            const SizedBox(height: 16),
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: const Color(0xFF1E1E1E),
                borderRadius: BorderRadius.circular(8),
              ),
              child: SelectableText(
                code,
                style: const TextStyle(
                  fontFamily: 'monospace',
                  fontSize: 13,
                  height: 1.6,
                  color: Color(0xFFD4D4D4),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ─── Playground Panel ───
class _PlaygroundPanel extends StatelessWidget {
  const _PlaygroundPanel({required this.child, required this.args});
  final Widget child;
  final Map<String, dynamic> args;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFFF8F8F8),
      child: Center(child: child),
    );
  }
}

// ─── Controls Panel (bottom) ───
class _ControlsPanel extends StatelessWidget {
  const _ControlsPanel({
    required this.controls,
    required this.args,
    required this.onChanged,
  });

  final List<ControlDef> controls;
  final Map<String, dynamic> args;
  final void Function(String key, dynamic value) onChanged;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(top: BorderSide(color: Color(0xFFE5E5E5))),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Tab header
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            height: 40,
            decoration: const BoxDecoration(
              border: Border(bottom: BorderSide(color: Color(0xFFE5E5E5))),
            ),
            child: Row(
              children: [
                _TabLabel(label: 'Controls', isActive: true),
                const SizedBox(width: 16),
                _TabLabel(label: 'Actions', isActive: false),
                const SizedBox(width: 16),
                _TabLabel(label: 'Accessibility', isActive: false),
              ],
            ),
          ),
          // Controls table header
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            decoration: const BoxDecoration(
              color: Color(0xFFFAFAFA),
              border: Border(bottom: BorderSide(color: Color(0xFFE5E5E5))),
            ),
            child: const Row(
              children: [
                Expanded(flex: 2, child: Text('Name', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Color(0xFF888888)))),
                Expanded(flex: 3, child: Text('Description', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Color(0xFF888888)))),
                Expanded(flex: 2, child: Text('Default', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Color(0xFF888888)))),
                Expanded(flex: 3, child: Text('Control', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Color(0xFF888888)))),
              ],
            ),
          ),
          // Control rows
          for (final control in controls)
            _ControlRow(
              control: control,
              value: args[control.name],
              onChanged: (val) => onChanged(control.name, val),
            ),
        ],
      ),
    );
  }
}

class _TabLabel extends StatelessWidget {
  const _TabLabel({required this.label, required this.isActive});
  final String label;
  final bool isActive;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 8),
      decoration: BoxDecoration(
        border: Border(
          bottom: BorderSide(
            color: isActive ? const Color(0xFF6852D6) : Colors.transparent,
            width: 2,
          ),
        ),
      ),
      child: Text(
        label,
        style: TextStyle(
          fontSize: 13,
          fontWeight: FontWeight.w500,
          color: isActive ? const Color(0xFF6852D6) : const Color(0xFF888888),
        ),
      ),
    );
  }
}

class _ControlRow extends StatefulWidget {
  const _ControlRow({required this.control, required this.value, required this.onChanged});
  final ControlDef control;
  final dynamic value;
  final void Function(dynamic) onChanged;

  @override
  State<_ControlRow> createState() => _ControlRowState();
}

class _ControlRowState extends State<_ControlRow> {
  late TextEditingController _textController;

  @override
  void initState() {
    super.initState();
    if (widget.control.type == 'text') {
      _textController = TextEditingController(text: widget.value as String? ?? '');
    }
  }

  @override
  void didUpdateWidget(_ControlRow oldWidget) {
    super.didUpdateWidget(oldWidget);
    // Only update controller if value changed externally (e.g. story switch)
    if (widget.control.type == 'text' && oldWidget.value != widget.value) {
      final currentText = _textController.text;
      final newText = widget.value as String? ?? '';
      if (currentText != newText) {
        _textController.text = newText;
      }
    }
  }

  @override
  void dispose() {
    if (widget.control.type == 'text') {
      _textController.dispose();
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      decoration: const BoxDecoration(
        border: Border(bottom: BorderSide(color: Color(0xFFF0F0F0))),
      ),
      child: Row(
        children: [
          Expanded(
            flex: 2,
            child: Text(
              widget.control.name,
              style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: Color(0xFF141414)),
            ),
          ),
          Expanded(
            flex: 3,
            child: Text(
              _getDescription(widget.control.name),
              style: const TextStyle(fontSize: 12, color: Color(0xFF888888)),
            ),
          ),
          Expanded(
            flex: 2,
            child: Text(
              '${widget.control.defaultValue}',
              style: const TextStyle(fontSize: 12, color: Color(0xFFA1A1A1)),
            ),
          ),
          Expanded(
            flex: 3,
            child: _buildInput(),
          ),
        ],
      ),
    );
  }

  String _getDescription(String name) {
    switch (name) {
      case 'message':
        return 'The message text to display.';
      case 'open':
        return 'Whether the toast is visible.';
      default:
        return '';
    }
  }

  Widget _buildInput() {
    switch (widget.control.type) {
      case 'text':
        return SizedBox(
          height: 32,
          child: TextField(
            controller: _textController,
            onChanged: widget.onChanged,
            style: const TextStyle(fontSize: 13),
            decoration: InputDecoration(
              contentPadding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(4),
                borderSide: const BorderSide(color: Color(0xFFD4D4D4)),
              ),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(4),
                borderSide: const BorderSide(color: Color(0xFFD4D4D4)),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(4),
                borderSide: const BorderSide(color: Color(0xFF6852D6)),
              ),
            ),
          ),
        );
      case 'bool':
        return Align(
          alignment: Alignment.centerLeft,
          child: Switch(
            value: widget.value as bool? ?? false,
            onChanged: (v) => widget.onChanged(v),
            activeTrackColor: const Color(0xFF6852D6),
          ),
        );
      default:
        return const SizedBox.shrink();
    }
  }
}

// ─── Sidebar Widget ───
class _Sidebar extends StatelessWidget {
  const _Sidebar({
    required this.selectedComponent,
    required this.selectedStory,
    required this.expandedComponents,
    required this.onSelect,
    required this.onToggleExpand,
  });

  final int selectedComponent;
  final int selectedStory;
  final Set<int> expandedComponents;
  final void Function(int componentIdx, int storyIdx) onSelect;
  final void Function(int componentIdx) onToggleExpand;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 260,
      color: const Color(0xFFF8F9FA),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header
          Container(
            padding: const EdgeInsets.fromLTRB(16, 16, 16, 12),
            decoration: const BoxDecoration(
              border: Border(bottom: BorderSide(color: Color(0xFFE8E8E8))),
            ),
            child: const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'BASE COMPONENTS',
                  style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Color(0xFF999999), letterSpacing: 1.0),
                ),
              ],
            ),
          ),
          // Component tree
          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(vertical: 4),
              children: [
                for (int ci = 0; ci < componentRegistry.length; ci++)
                  _ComponentGroup(
                    entry: componentRegistry[ci],
                    componentIndex: ci,
                    isExpanded: expandedComponents.contains(ci),
                    selectedStory: ci == selectedComponent ? selectedStory : -1,
                    onSelect: (storyIdx) => onSelect(ci, storyIdx),
                    onToggle: () => onToggleExpand(ci),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _ComponentGroup extends StatelessWidget {
  const _ComponentGroup({
    required this.entry,
    required this.componentIndex,
    required this.isExpanded,
    required this.selectedStory,
    required this.onSelect,
    required this.onToggle,
  });

  final ComponentEntry entry;
  final int componentIndex;
  final bool isExpanded;
  final int selectedStory;
  final void Function(int storyIdx) onSelect;
  final VoidCallback onToggle;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Component header (collapsible)
        _ComponentHeader(
          name: entry.name,
          isExpanded: isExpanded,
          onTap: onToggle,
        ),
        // Stories (shown when expanded)
        if (isExpanded)
          Padding(
            padding: const EdgeInsets.only(left: 20),
            child: Column(
              children: [
                // Docs item (first, highlighted differently)
                _StoryItem(
                  label: 'Docs',
                  icon: Icons.description_outlined,
                  iconColor: const Color(0xFF00BCD4),
                  isActive: selectedStory == 0,
                  isDocsStyle: true,
                  onTap: () => onSelect(0),
                ),
                // Other stories
                for (int si = 1; si < entry.stories.length; si++)
                  _StoryItem(
                    label: entry.stories[si].name,
                    icon: Icons.bookmark_border,
                    iconColor: const Color(0xFF00BCD4),
                    isActive: selectedStory == si,
                    isDocsStyle: false,
                    onTap: () => onSelect(si),
                  ),
              ],
            ),
          ),
      ],
    );
  }
}

class _ComponentHeader extends StatefulWidget {
  const _ComponentHeader({
    required this.name,
    required this.isExpanded,
    required this.onTap,
  });

  final String name;
  final bool isExpanded;
  final VoidCallback onTap;

  @override
  State<_ComponentHeader> createState() => _ComponentHeaderState();
}

class _ComponentHeaderState extends State<_ComponentHeader> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
          decoration: BoxDecoration(
            color: widget.isExpanded
                ? const Color(0xFFE3F2FD)
                : _hovered
                    ? const Color(0xFFEEEEEE)
                    : Colors.transparent,
            borderRadius: BorderRadius.circular(4),
          ),
          margin: const EdgeInsets.symmetric(horizontal: 4, vertical: 1),
          child: Row(
            children: [
              // Expand arrow
              Icon(
                widget.isExpanded ? Icons.expand_more : Icons.chevron_right,
                size: 16,
                color: const Color(0xFF666666),
              ),
              const SizedBox(width: 6),
              // Component icon
              Icon(
                Icons.widgets_outlined,
                size: 14,
                color: widget.isExpanded ? const Color(0xFF1976D2) : const Color(0xFF888888),
              ),
              const SizedBox(width: 8),
              // Name
              Expanded(
                child: Text(
                  widget.name,
                  style: TextStyle(
                    fontSize: 13,
                    fontWeight: widget.isExpanded ? FontWeight.w600 : FontWeight.w400,
                    color: widget.isExpanded ? const Color(0xFF1976D2) : const Color(0xFF333333),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _StoryItem extends StatefulWidget {
  const _StoryItem({
    required this.label,
    required this.icon,
    required this.iconColor,
    required this.isActive,
    required this.isDocsStyle,
    required this.onTap,
  });

  final String label;
  final IconData icon;
  final Color iconColor;
  final bool isActive;
  final bool isDocsStyle;
  final VoidCallback onTap;

  @override
  State<_StoryItem> createState() => _StoryItemState();
}

class _StoryItemState extends State<_StoryItem> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    final isDocsActive = widget.isDocsStyle && widget.isActive;

    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
          margin: const EdgeInsets.symmetric(horizontal: 4, vertical: 1),
          decoration: BoxDecoration(
            color: isDocsActive
                ? const Color(0xFF2196F3)
                : widget.isActive
                    ? const Color(0xFFE3F2FD)
                    : _hovered
                        ? const Color(0xFFEEEEEE)
                        : Colors.transparent,
            borderRadius: BorderRadius.circular(4),
          ),
          child: Row(
            children: [
              Icon(
                widget.isDocsStyle ? Icons.description_outlined : Icons.bookmark_border,
                size: 14,
                color: isDocsActive
                    ? Colors.white
                    : widget.isActive
                        ? const Color(0xFF1976D2)
                        : widget.iconColor,
              ),
              const SizedBox(width: 8),
              Text(
                widget.label,
                style: TextStyle(
                  fontSize: 13,
                  fontWeight: widget.isActive ? FontWeight.w500 : FontWeight.w400,
                  color: isDocsActive
                      ? Colors.white
                      : widget.isActive
                          ? const Color(0xFF1976D2)
                          : const Color(0xFF333333),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ─── Top Bar ───
class _TopBar extends StatelessWidget {
  const _TopBar({required this.componentName, required this.storyName});

  final String componentName;
  final String storyName;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 48,
      padding: const EdgeInsets.symmetric(horizontal: 20),
      decoration: const BoxDecoration(
        color: Color(0xFFFFFFFF),
        border: Border(bottom: BorderSide(color: Color(0xFFE5E5E5))),
      ),
      child: Row(
        children: [
          const Text('Flutter / Base Components / ', style: TextStyle(fontSize: 12, color: Color(0xFF888888))),
          Text(componentName, style: const TextStyle(fontSize: 12, color: Color(0xFF141414), fontWeight: FontWeight.w500)),
          Text(' / $storyName', style: const TextStyle(fontSize: 12, color: Color(0xFF6852D6), fontWeight: FontWeight.w500)),
        ],
      ),
    );
  }
}

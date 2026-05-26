import 'package:flutter/material.dart';
import '../components/toast/cometchat_toast.dart';
import '../components/typing_indicator/cometchat_typing_indicator.dart';
import '../components/search_bar/cometchat_search_bar.dart';
import '../components/button/cometchat_button.dart';
import '../components/checkbox/cometchat_checkbox.dart';
import '../components/list_item/cometchat_list_item.dart';
import '../components/create_poll/cometchat_create_poll.dart';
import '../components/thread_view/cometchat_thread_view.dart';

/// Types of story views
enum StoryType { preview, states, code, usage, playground }

/// A single story (variant) for a component.
class Story {
  const Story({
    required this.name,
    required this.type,
    this.builder,
    this.code,
    this.defaultArgs,
  });
  final String name;
  final StoryType type;
  final Widget Function(Map<String, dynamic> args)? builder;
  final String? code;
  final Map<String, dynamic>? defaultArgs;
}

/// A control definition for the playground.
class ControlDef {
  const ControlDef({required this.name, required this.type, this.defaultValue});
  final String name;
  final String type; // 'text', 'bool', 'number'
  final dynamic defaultValue;
}

/// A component entry in the sidebar.
class ComponentEntry {
  const ComponentEntry({
    required this.name,
    required this.stories,
    this.controls = const [],
  });
  final String name;
  final List<Story> stories;
  final List<ControlDef> controls;
}

/// All registered components and their stories.
final List<ComponentEntry> componentRegistry = [
  ComponentEntry(
    name: 'Toast',
    controls: [
      ControlDef(name: 'message', type: 'text', defaultValue: 'Message Copied'),
      ControlDef(name: 'open', type: 'bool', defaultValue: true),
    ],
    stories: [
      Story(
        name: 'Docs',
        type: StoryType.code,
        code: '''## CometChatToast

A transient notification pill that appears briefly to confirm an action.
Dark background with white text, auto-dismisses after a set duration.

### Constructor
const CometChatToast({
  Key? key,
  required String message,
  Duration duration = const Duration(milliseconds: 3000),
  VoidCallback? onClose,
})

### Parameters
| Param    | Type         | Default    | Description                    |
|----------|--------------|------------|--------------------------------|
| message  | String       | required   | The message text to display    |
| duration | Duration     | 3000ms     | Auto-dismiss delay (0=disable) |
| onClose  | VoidCallback | null       | Called when toast is dismissed  |

### Tokens Used
| Token                    | Value   | Usage          |
|--------------------------|---------|----------------|
| staticBlack              | #141414 | Background     |
| staticWhite              | #FFFFFF | Text color     |
| CometChatTokens.radius1  | 4.0     | Border radius  |
| CometChatTokens.spacing2  | 8.0     | Padding        |
''',
      ),
      Story(
        name: 'Default',
        type: StoryType.preview,
        defaultArgs: {'message': 'Message Copied', 'open': true},
        builder: (args) => CometChatToast(
          message: args['message'] as String,
          duration: Duration.zero,
        ),
      ),
      Story(
        name: 'Message Sent',
        type: StoryType.preview,
        defaultArgs: {'message': 'Message Sent', 'open': true},
        builder: (args) => CometChatToast(
          message: args['message'] as String,
          duration: Duration.zero,
        ),
      ),
      Story(
        name: 'Message Deleted',
        type: StoryType.preview,
        defaultArgs: {'message': 'Message Deleted', 'open': true},
        builder: (args) => CometChatToast(
          message: args['message'] as String,
          duration: Duration.zero,
        ),
      ),
      Story(
        name: 'Link Copied',
        type: StoryType.preview,
        defaultArgs: {'message': 'Link Copied', 'open': true},
        builder: (args) => CometChatToast(
          message: args['message'] as String,
          duration: Duration.zero,
        ),
      ),
      Story(
        name: 'Long Message',
        type: StoryType.preview,
        defaultArgs: {'message': 'Your message has been forwarded successfully', 'open': true},
        builder: (args) => CometChatToast(
          message: args['message'] as String,
          duration: Duration.zero,
        ),
      ),
      Story(
        name: 'States',
        type: StoryType.states,
        builder: (_) => const Wrap(
          spacing: 16,
          runSpacing: 16,
          alignment: WrapAlignment.center,
          children: [
            CometChatToast(message: 'Message Copied', duration: Duration.zero),
            CometChatToast(message: 'Message Sent', duration: Duration.zero),
            CometChatToast(message: 'Message Deleted', duration: Duration.zero),
            CometChatToast(message: 'Link Copied', duration: Duration.zero),
            CometChatToast(message: 'Reaction Added', duration: Duration.zero),
          ],
        ),
      ),
      Story(
        name: 'Widget Code',
        type: StoryType.code,
        code: '''import 'dart:async';
import 'package:flutter/material.dart';
import '../../tokens/cometchat_tokens.dart';

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
    final tokens = Theme.of(context).extension<CometChatTokens>()
        ?? CometChatTokens.light();

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
}''',
      ),
      Story(
        name: 'Usage',
        type: StoryType.usage,
        code: '''// Simple toast
CometChatToast(message: 'Message Sent')

// With custom duration (5 seconds)
CometChatToast(
  message: 'Link Copied',
  duration: Duration(seconds: 5),
)

// With dismiss callback
CometChatToast(
  message: 'Message Deleted',
  onClose: () => setState(() => _showToast = false),
)

// Disable auto-dismiss
CometChatToast(
  message: 'Persistent notification',
  duration: Duration.zero,
)

// ─── Overlay Pattern ───
void showToast(BuildContext context, String message) {
  final overlay = Overlay.of(context);
  late OverlayEntry entry;

  entry = OverlayEntry(
    builder: (_) => Positioned(
      bottom: 80,
      left: 0,
      right: 0,
      child: Center(
        child: CometChatToast(
          message: message,
          onClose: () => entry.remove(),
        ),
      ),
    ),
  );

  overlay.insert(entry);
}''',
      ),
      Story(
        name: 'Playground',
        type: StoryType.playground,
        defaultArgs: {'message': 'Message Copied', 'open': true},
        builder: (args) => CometChatToast(
          message: args['message'] as String,
          duration: Duration.zero,
        ),
      ),
    ],
  ),
  ComponentEntry(
    name: 'Typing Indicator',
    controls: [
      ControlDef(name: 'activity', type: 'text', defaultValue: 'typing'),
      ControlDef(name: 'context', type: 'text', defaultValue: 'single'),
      ControlDef(name: 'userName', type: 'text', defaultValue: 'John'),
    ],
    stories: [
      Story(
        name: 'Docs',
        type: StoryType.code,
        code: '''## CometChatTypingIndicator

Animated dots with contextual text showing typing/recording/uploading activity.

### Constructor
const CometChatTypingIndicator({
  Key? key,
  TypingActivity activity = TypingActivity.typing,
  TypingContext typingContext = TypingContext.single,
  String userName = "John",
  int count = 2,
})

### Parameters
| Param         | Type           | Default  | Description                         |
|---------------|----------------|----------|-------------------------------------|
| activity      | TypingActivity | typing   | typing / recording / uploading      |
| typingContext  | TypingContext   | single   | single / group / multiple           |
| userName      | String         | "John"   | Name shown in group context         |
| count         | int            | 2        | Number shown in multiple context    |

### Tokens Used
| Token         | Usage                |
|---------------|----------------------|
| primaryColor  | Dot color + text     |
| spacing       | Gap between dots     |
| spacing1      | Gap dots↔text        |
''',
      ),
      Story(
        name: 'Default',
        type: StoryType.preview,
        defaultArgs: {'activity': 'typing', 'context': 'single', 'userName': 'John'},
        builder: (args) => CometChatTypingIndicator(
          activity: _parseActivity(args['activity'] as String? ?? 'typing'),
          typingContext: _parseContext(args['context'] as String? ?? 'single'),
          userName: args['userName'] as String? ?? 'John',
        ),
      ),
      Story(
        name: 'Group Context',
        type: StoryType.preview,
        defaultArgs: {'activity': 'typing', 'context': 'group', 'userName': 'Alice'},
        builder: (args) => CometChatTypingIndicator(
          activity: _parseActivity(args['activity'] as String? ?? 'typing'),
          typingContext: _parseContext(args['context'] as String? ?? 'group'),
          userName: args['userName'] as String? ?? 'Alice',
        ),
      ),
      Story(
        name: 'Multiple Users',
        type: StoryType.preview,
        defaultArgs: {'activity': 'typing', 'context': 'multiple', 'userName': 'John'},
        builder: (args) => CometChatTypingIndicator(
          activity: _parseActivity(args['activity'] as String? ?? 'typing'),
          typingContext: _parseContext(args['context'] as String? ?? 'multiple'),
          userName: args['userName'] as String? ?? 'John',
          count: 3,
        ),
      ),
      Story(
        name: 'Recording',
        type: StoryType.preview,
        defaultArgs: {'activity': 'recording', 'context': 'single', 'userName': 'John'},
        builder: (args) => CometChatTypingIndicator(
          activity: _parseActivity(args['activity'] as String? ?? 'recording'),
          typingContext: _parseContext(args['context'] as String? ?? 'single'),
          userName: args['userName'] as String? ?? 'John',
        ),
      ),
      Story(
        name: 'Uploading',
        type: StoryType.preview,
        defaultArgs: {'activity': 'uploading', 'context': 'group', 'userName': 'Bob'},
        builder: (args) => CometChatTypingIndicator(
          activity: _parseActivity(args['activity'] as String? ?? 'uploading'),
          typingContext: _parseContext(args['context'] as String? ?? 'group'),
          userName: args['userName'] as String? ?? 'Bob',
        ),
      ),
      Story(
        name: 'States',
        type: StoryType.states,
        builder: (_) => const Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            CometChatTypingIndicator(),
            SizedBox(height: 16),
            CometChatTypingIndicator(typingContext: TypingContext.group, userName: 'Alice'),
            SizedBox(height: 16),
            CometChatTypingIndicator(typingContext: TypingContext.multiple, count: 3),
            SizedBox(height: 16),
            CometChatTypingIndicator(activity: TypingActivity.recording),
            SizedBox(height: 16),
            CometChatTypingIndicator(activity: TypingActivity.uploading, typingContext: TypingContext.group, userName: 'Bob'),
          ],
        ),
      ),
      Story(
        name: 'Widget Code',
        type: StoryType.code,
        code: '''import 'package:flutter/material.dart';
import '../../tokens/cometchat_tokens.dart';

enum TypingActivity { typing, recording, uploading }
enum TypingContext { single, group, multiple }

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
  State<CometChatTypingIndicator> createState() =>
      _CometChatTypingIndicatorState();
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
      TypingContext.single =>
          verb[0].toUpperCase() + verb.substring(1),
      TypingContext.group =>
          '\${widget.userName} is \$verb',
      TypingContext.multiple =>
          '\${widget.count} people are \$verb',
    };
  }

  @override
  Widget build(BuildContext context) {
    final tokens = Theme.of(context).extension<CometChatTokens>()
        ?? CometChatTokens.light();
    final text = _getActivityText();

    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        // 3 animated dots
        Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            _AnimatedDot(controller: _controller, delay: 0.0, color: tokens.primaryColor),
            SizedBox(width: CometChatTokens.spacing),
            _AnimatedDot(controller: _controller, delay: 0.14, color: tokens.primaryColor),
            SizedBox(width: CometChatTokens.spacing),
            _AnimatedDot(controller: _controller, delay: 0.28, color: tokens.primaryColor),
          ],
        ),
        SizedBox(width: CometChatTokens.spacing1),
        Text(text, style: TextStyle(
          fontFamily: tokens.fontFamily,
          fontSize: 12,
          fontWeight: FontWeight.w400,
          height: 1.5,
          color: tokens.primaryColor,
        )),
      ],
    );
  }
}''',
      ),
      Story(
        name: 'Usage',
        type: StoryType.usage,
        code: '''// Default — single user typing
CometChatTypingIndicator()

// Group context — shows name
CometChatTypingIndicator(
  typingContext: TypingContext.group,
  userName: 'Alice',
)

// Multiple users
CometChatTypingIndicator(
  typingContext: TypingContext.multiple,
  count: 3,
)

// Recording activity
CometChatTypingIndicator(
  activity: TypingActivity.recording,
)

// Uploading in group
CometChatTypingIndicator(
  activity: TypingActivity.uploading,
  typingContext: TypingContext.group,
  userName: 'Bob',
)''',
      ),
      Story(
        name: 'Playground',
        type: StoryType.playground,
        defaultArgs: {'activity': 'typing', 'context': 'single', 'userName': 'John'},
        builder: (args) => CometChatTypingIndicator(
          activity: _parseActivity(args['activity'] as String? ?? 'typing'),
          typingContext: _parseContext(args['context'] as String? ?? 'single'),
          userName: args['userName'] as String? ?? 'John',
        ),
      ),
    ],
  ),
  ComponentEntry(
    name: 'Search Bar',
    controls: [
      ControlDef(name: 'placeholder', type: 'text', defaultValue: 'Search'),
      ControlDef(name: 'showClear', type: 'bool', defaultValue: true),
    ],
    stories: [
      Story(
        name: 'Docs',
        type: StoryType.code,
        code: '''## CometChatSearchBar

Pill-shaped search input with icon and conditional clear button.
Supports controlled and uncontrolled modes.

### Constructor
const CometChatSearchBar({
  Key? key,
  String placeholder = "Search",
  String? value,
  ValueChanged<String>? onChange,
  VoidCallback? onClear,
  bool showClear = true,
})

### Parameters
| Param       | Type                | Default  | Description                          |
|-------------|---------------------|----------|--------------------------------------|
| placeholder | String              | "Search" | Hint text                            |
| value       | String?             | null     | Controlled value (null = internal)   |
| onChange    | ValueChanged<String>| null     | Called on every text change          |
| onClear     | VoidCallback        | null     | Called when clear button is tapped   |
| showClear   | bool                | true     | Show clear button when has value     |

### Tokens Used
| Token              | Usage                    |
|--------------------|--------------------------|
| backgroundColor04  | Default background       |
| backgroundColor03  | Hover/focus background   |
| borderColorDefault | Default border           |
| borderColorDark    | Hover border             |
| textColorPrimary   | Input text               |
| textColorTertiary  | Placeholder + icon color |
| radiusMax          | Pill shape               |
| spacing1-3         | Internal gaps/padding    |
''',
      ),
      Story(
        name: 'Default',
        type: StoryType.preview,
        defaultArgs: {'placeholder': 'Search', 'showClear': true},
        builder: (args) => SizedBox(
          width: 320,
          child: CometChatSearchBar(
            placeholder: args['placeholder'] as String? ?? 'Search',
            showClear: args['showClear'] as bool? ?? true,
          ),
        ),
      ),
      Story(
        name: 'With Value',
        type: StoryType.preview,
        defaultArgs: {'placeholder': 'Search', 'showClear': true},
        builder: (args) => const SizedBox(
          width: 320,
          child: CometChatSearchBar(
            value: 'Flutter widgets',
          ),
        ),
      ),
      Story(
        name: 'Custom Placeholder',
        type: StoryType.preview,
        defaultArgs: {'placeholder': 'Search users...', 'showClear': true},
        builder: (args) => SizedBox(
          width: 320,
          child: CometChatSearchBar(
            placeholder: args['placeholder'] as String? ?? 'Search users...',
          ),
        ),
      ),
      Story(
        name: 'No Clear Button',
        type: StoryType.preview,
        defaultArgs: {'placeholder': 'Search', 'showClear': false},
        builder: (args) => const SizedBox(
          width: 320,
          child: CometChatSearchBar(
            value: 'Some text',
            showClear: false,
          ),
        ),
      ),
      Story(
        name: 'States',
        type: StoryType.states,
        builder: (_) => const SizedBox(
          width: 360,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Empty:', style: TextStyle(fontSize: 11, color: Color(0xFF888888))),
              SizedBox(height: 8),
              CometChatSearchBar(),
              SizedBox(height: 20),
              Text('With value:', style: TextStyle(fontSize: 11, color: Color(0xFF888888))),
              SizedBox(height: 8),
              CometChatSearchBar(value: 'Flutter widgets'),
              SizedBox(height: 20),
              Text('No clear button:', style: TextStyle(fontSize: 11, color: Color(0xFF888888))),
              SizedBox(height: 8),
              CometChatSearchBar(value: 'Hello', showClear: false),
            ],
          ),
        ),
      ),
      Story(
        name: 'Widget Code',
        type: StoryType.code,
        code: '''import 'package:flutter/material.dart';
import '../../tokens/cometchat_tokens.dart';

class CometChatSearchBar extends StatefulWidget {
  const CometChatSearchBar({
    super.key,
    this.placeholder = 'Search',
    this.value,
    this.onChange,
    this.onClear,
    this.showClear = true,
  });

  final String placeholder;
  final String? value;
  final ValueChanged<String>? onChange;
  final VoidCallback? onClear;
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
    setState(() {});
    widget.onChange?.call(_controller.text);
  }

  void _handleClear() {
    _controller.clear();
    widget.onChange?.call('');
    widget.onClear?.call();
  }

  @override
  Widget build(BuildContext context) {
    final tokens = Theme.of(context).extension<CometChatTokens>()
        ?? CometChatTokens.light();
    final hasValue = _controller.text.isNotEmpty;
    final showClearBtn = widget.showClear && hasValue;

    final bgColor = (_focused || _hovered)
        ? tokens.backgroundColor03
        : tokens.backgroundColor04;
    final borderColor = _hovered
        ? tokens.borderColorDark
        : tokens.borderColorDefault;

    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: Container(
        height: 40,
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        decoration: BoxDecoration(
          color: bgColor,
          border: Border.all(color: borderColor),
          borderRadius: BorderRadius.circular(CometChatTokens.radiusMax),
        ),
        child: Row(
          children: [
            Icon(Icons.search, size: 18, color: tokens.textColorTertiary),
            const SizedBox(width: 4),
            Expanded(
              child: Focus(
                onFocusChange: (f) => setState(() => _focused = f),
                child: TextField(
                  controller: _controller,
                  style: TextStyle(fontSize: 16, color: tokens.textColorPrimary),
                  decoration: InputDecoration(
                    hintText: widget.placeholder,
                    hintStyle: TextStyle(color: tokens.textColorTertiary),
                    border: InputBorder.none,
                    isDense: true,
                    contentPadding: EdgeInsets.zero,
                  ),
                ),
              ),
            ),
            if (showClearBtn)
              GestureDetector(
                onTap: _handleClear,
                child: Icon(Icons.close, size: 12, color: tokens.textColorTertiary),
              ),
          ],
        ),
      ),
    );
  }
}''',
      ),
      Story(
        name: 'Usage',
        type: StoryType.usage,
        code: '''// Basic search bar
CometChatSearchBar()

// With custom placeholder
CometChatSearchBar(placeholder: 'Search users...')

// Controlled value
CometChatSearchBar(
  value: searchQuery,
  onChange: (val) => setState(() => searchQuery = val),
)

// With clear callback
CometChatSearchBar(
  onChange: (val) => filterList(val),
  onClear: () => resetList(),
)

// Without clear button
CometChatSearchBar(showClear: false)''',
      ),
      Story(
        name: 'Playground',
        type: StoryType.playground,
        defaultArgs: {'placeholder': 'Search', 'showClear': true},
        builder: (args) => SizedBox(
          width: 320,
          child: CometChatSearchBar(
            placeholder: args['placeholder'] as String? ?? 'Search',
            showClear: args['showClear'] as bool? ?? true,
          ),
        ),
      ),
    ],
  ),
  // ─── BUTTON ───
  ComponentEntry(
    name: 'Button',
    controls: [
      ControlDef(name: 'label', type: 'text', defaultValue: 'Save changes'),
      ControlDef(name: 'disabled', type: 'bool', defaultValue: false),
      ControlDef(name: 'loading', type: 'bool', defaultValue: false),
    ],
    stories: [
      Story(name: 'Docs', type: StoryType.code, code: '''## CometChatButton\n\n9 variants × 4 sizes. Primary interactive element.\n\n### Variants\nprimary, secondary, tertiary, linkColor, linkGray,\ndestructivePrimary, destructiveSecondary, destructiveTertiary, destructiveLink\n\n### Sizes\nsm (36px), md (40px), lg (44px), xl (48px)'''),
      Story(
        name: 'Primary',
        type: StoryType.preview,
        defaultArgs: {'label': 'Save changes', 'disabled': false, 'loading': false},
        builder: (args) => CometChatButton(label: args['label'] as String? ?? 'Save changes', disabled: args['disabled'] as bool? ?? false, loading: args['loading'] as bool? ?? false),
      ),
      Story(
        name: 'Secondary',
        type: StoryType.preview,
        defaultArgs: {'label': 'Cancel', 'disabled': false, 'loading': false},
        builder: (args) => CometChatButton(variant: ButtonVariant.secondary, label: args['label'] as String? ?? 'Cancel', disabled: args['disabled'] as bool? ?? false),
      ),
      Story(
        name: 'Tertiary',
        type: StoryType.preview,
        defaultArgs: {'label': 'Learn more', 'disabled': false, 'loading': false},
        builder: (args) => CometChatButton(variant: ButtonVariant.tertiary, label: args['label'] as String? ?? 'Learn more'),
      ),
      Story(
        name: 'Destructive',
        type: StoryType.preview,
        defaultArgs: {'label': 'Delete', 'disabled': false, 'loading': false},
        builder: (args) => CometChatButton(variant: ButtonVariant.destructivePrimary, label: args['label'] as String? ?? 'Delete'),
      ),
      Story(
        name: 'With Icons',
        type: StoryType.preview,
        defaultArgs: {'label': 'Add item', 'disabled': false, 'loading': false},
        builder: (args) => CometChatButton(label: args['label'] as String? ?? 'Add item', iconLeft: Icons.add),
      ),
      Story(
        name: 'Loading',
        type: StoryType.preview,
        defaultArgs: {'label': 'Saving...', 'disabled': false, 'loading': true},
        builder: (args) => CometChatButton(label: args['label'] as String? ?? 'Saving...', loading: true),
      ),
      Story(
        name: 'States',
        type: StoryType.states,
        builder: (_) => const Wrap(
          spacing: 12,
          runSpacing: 12,
          children: [
            CometChatButton(label: 'Primary'),
            CometChatButton(variant: ButtonVariant.secondary, label: 'Secondary'),
            CometChatButton(variant: ButtonVariant.tertiary, label: 'Tertiary'),
            CometChatButton(variant: ButtonVariant.linkColor, label: 'Link'),
            CometChatButton(variant: ButtonVariant.destructivePrimary, label: 'Delete'),
            CometChatButton(variant: ButtonVariant.destructiveSecondary, label: 'Remove'),
            CometChatButton(label: 'Disabled', disabled: true),
            CometChatButton(label: 'Loading', loading: true),
          ],
        ),
      ),
      Story(
        name: 'Playground',
        type: StoryType.playground,
        defaultArgs: {'label': 'Click me', 'disabled': false, 'loading': false},
        builder: (args) => CometChatButton(label: args['label'] as String? ?? 'Click me', disabled: args['disabled'] as bool? ?? false, loading: args['loading'] as bool? ?? false),
      ),
    ],
  ),
  // ─── CHECKBOX ───
  ComponentEntry(
    name: 'Checkbox',
    controls: [
      ControlDef(name: 'label', type: 'text', defaultValue: 'Remember me'),
      ControlDef(name: 'checked', type: 'bool', defaultValue: false),
      ControlDef(name: 'disabled', type: 'bool', defaultValue: false),
    ],
    stories: [
      Story(name: 'Docs', type: StoryType.code, code: '''## CometChatCheckbox\n\nDual-type selection control: checkbox (square) and radio (circle).\nSizes: sm (16px), md (20px). Supports indeterminate state.'''),
      Story(
        name: 'Unchecked',
        type: StoryType.preview,
        defaultArgs: {'label': 'Remember me', 'checked': false, 'disabled': false},
        builder: (args) => CometChatCheckbox(label: args['label'] as String? ?? 'Remember me', checked: args['checked'] as bool? ?? false, disabled: args['disabled'] as bool? ?? false),
      ),
      Story(
        name: 'Checked',
        type: StoryType.preview,
        defaultArgs: {'label': 'I agree to terms', 'checked': true, 'disabled': false},
        builder: (args) => CometChatCheckbox(label: args['label'] as String? ?? 'I agree to terms', checked: true),
      ),
      Story(
        name: 'Indeterminate',
        type: StoryType.preview,
        defaultArgs: {'label': 'Select all', 'checked': false, 'disabled': false},
        builder: (args) => CometChatCheckbox(label: args['label'] as String? ?? 'Select all', indeterminate: true),
      ),
      Story(
        name: 'Radio',
        type: StoryType.preview,
        defaultArgs: {'label': 'Option A', 'checked': true, 'disabled': false},
        builder: (args) => CometChatCheckbox(type: CheckboxType.radio, label: args['label'] as String? ?? 'Option A', checked: true),
      ),
      Story(
        name: 'With Description',
        type: StoryType.preview,
        defaultArgs: {'label': 'Notifications', 'checked': true, 'disabled': false},
        builder: (args) => const CometChatCheckbox(label: 'Notifications', description: 'Receive push notifications for new messages.', checked: true),
      ),
      Story(
        name: 'States',
        type: StoryType.states,
        builder: (_) => const Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            CometChatCheckbox(label: 'Unchecked'),
            SizedBox(height: 12),
            CometChatCheckbox(label: 'Checked', checked: true),
            SizedBox(height: 12),
            CometChatCheckbox(label: 'Indeterminate', indeterminate: true),
            SizedBox(height: 12),
            CometChatCheckbox(label: 'Disabled', disabled: true),
            SizedBox(height: 12),
            CometChatCheckbox(label: 'Disabled checked', checked: true, disabled: true),
            SizedBox(height: 12),
            CometChatCheckbox(type: CheckboxType.radio, label: 'Radio unchecked'),
            SizedBox(height: 12),
            CometChatCheckbox(type: CheckboxType.radio, label: 'Radio checked', checked: true),
          ],
        ),
      ),
      Story(
        name: 'Playground',
        type: StoryType.playground,
        defaultArgs: {'label': 'Remember me', 'checked': false, 'disabled': false},
        builder: (args) => CometChatCheckbox(label: args['label'] as String? ?? 'Remember me', checked: args['checked'] as bool? ?? false, disabled: args['disabled'] as bool? ?? false),
      ),
    ],
  ),
  // ─── LIST ITEM ───
  ComponentEntry(
    name: 'List Item',
    controls: [
      ControlDef(name: 'title', type: 'text', defaultValue: 'Alice Johnson'),
      ControlDef(name: 'subtitle', type: 'text', defaultValue: 'Hey, are you free today?'),
      ControlDef(name: 'selected', type: 'bool', defaultValue: false),
    ],
    stories: [
      Story(name: 'Docs', type: StoryType.code, code: '''## CometChatListItem\n\nVersatile list row with avatar, title, subtitle, and trailing content.\nUsed for conversation items, user items, group items, call items.'''),
      Story(
        name: 'Default',
        type: StoryType.preview,
        defaultArgs: {'title': 'Alice Johnson', 'subtitle': 'Hey, are you free today?', 'selected': false},
        builder: (args) => SizedBox(
          width: 380,
          child: CometChatListItem(
            title: args['title'] as String? ?? 'Alice Johnson',
            subtitle: args['subtitle'] as String? ?? 'Hey, are you free today?',
            initials: 'AJ',
            statusColor: const Color(0xFF17B26A),
            trailingText: '2:45 PM',
            selected: args['selected'] as bool? ?? false,
          ),
        ),
      ),
      Story(
        name: 'With Badge',
        type: StoryType.preview,
        defaultArgs: {'title': 'Design Team', 'subtitle': 'Bob: Check the new mockups', 'selected': false},
        builder: (args) => SizedBox(
          width: 380,
          child: CometChatListItem(
            title: args['title'] as String? ?? 'Design Team',
            subtitle: args['subtitle'] as String? ?? 'Bob: Check the new mockups',
            initials: 'DT',
            trailingText: '11:30 AM',
            trailingWidget: Container(
              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
              decoration: BoxDecoration(color: const Color(0xFF6852D6), borderRadius: BorderRadius.circular(9)),
              child: const Text('3', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w600, color: Colors.white)),
            ),
          ),
        ),
      ),
      Story(
        name: 'Selected',
        type: StoryType.preview,
        defaultArgs: {'title': 'Alice Johnson', 'subtitle': 'Hey, are you free today?', 'selected': true},
        builder: (args) => SizedBox(
          width: 380,
          child: CometChatListItem(
            title: args['title'] as String? ?? 'Alice Johnson',
            subtitle: args['subtitle'] as String? ?? 'Hey, are you free today?',
            initials: 'AJ',
            statusColor: const Color(0xFF17B26A),
            trailingText: '2:45 PM',
            selected: true,
          ),
        ),
      ),
      Story(
        name: 'States',
        type: StoryType.states,
        builder: (_) => const SizedBox(
          width: 380,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              CometChatListItem(title: 'Alice Johnson', subtitle: 'Hey there!', initials: 'AJ', statusColor: Color(0xFF17B26A), trailingText: '2:45 PM'),
              CometChatListItem(title: 'Design Team', subtitle: 'New mockups ready', initials: 'DT', trailingText: '11:30 AM'),
              CometChatListItem(title: 'Bob Smith', subtitle: 'Call me when free', initials: 'BS', trailingText: 'Yesterday'),
              CometChatListItem(title: 'Selected Item', subtitle: 'This is selected', initials: 'SI', selected: true),
            ],
          ),
        ),
      ),
      Story(
        name: 'Playground',
        type: StoryType.playground,
        defaultArgs: {'title': 'Alice Johnson', 'subtitle': 'Hey, are you free today?', 'selected': false},
        builder: (args) => SizedBox(
          width: 380,
          child: CometChatListItem(
            title: args['title'] as String? ?? 'Alice Johnson',
            subtitle: args['subtitle'] as String? ?? 'Hey, are you free today?',
            initials: 'AJ',
            statusColor: const Color(0xFF17B26A),
            trailingText: '2:45 PM',
            selected: args['selected'] as bool? ?? false,
          ),
        ),
      ),
    ],
  ),
  // ─── CREATE POLL ───
  ComponentEntry(
    name: 'Create Poll',
    controls: [],
    stories: [
      Story(name: 'Docs', type: StoryType.code, code: '''## CometChatCreatePoll\n\nFull poll creation dialog with dynamic option list.\nSupports add/remove options (max 12), validation, error states.\n\n### Parameters\n| Param      | Type     | Description              |\n|------------|----------|---------------------------|\n| onClose    | VoidCallback | Close/cancel callback |\n| onCreate   | Function | (question, options) callback |\n| maxOptions | int      | Max options (default 12) |'''),
      Story(
        name: 'Default',
        type: StoryType.preview,
        builder: (args) => const SizedBox(
          height: 500,
          child: CometChatCreatePoll(),
        ),
      ),
      Story(
        name: 'Playground',
        type: StoryType.playground,
        builder: (args) => const SizedBox(
          height: 500,
          child: CometChatCreatePoll(),
        ),
      ),
    ],
  ),
  // ─── THREAD VIEW ───
  ComponentEntry(
    name: 'Thread View',
    controls: [],
    stories: [
      Story(name: 'Docs', type: StoryType.code, code: '''## CometChatThreadView\n\nComplete threaded conversation panel with:\n- Header (title + close/info)\n- Date chip\n- Parent message bubble\n- Reply separator\n- Reply bubbles (sent/received)\n- Composer with toolbar'''),
      Story(
        name: 'Default',
        type: StoryType.preview,
        builder: (args) => const SizedBox(
          height: 600,
          child: CometChatThreadView(
            parentMessage: ThreadMessage(text: 'Has anyone tried the new Flutter 3.41?', time: '2:30 PM', isSent: false),
            replies: [
              ThreadMessage(text: 'Yes! The performance improvements are amazing.', time: '2:32 PM', isSent: true, isRead: true),
              ThreadMessage(text: 'I noticed the web builds are much faster now.', time: '2:33 PM', isSent: false),
              ThreadMessage(text: 'Agreed, hot reload feels instant.', time: '2:35 PM', isSent: true, isRead: true),
            ],
          ),
        ),
      ),
      Story(
        name: 'Single Reply',
        type: StoryType.preview,
        builder: (args) => const SizedBox(
          height: 500,
          child: CometChatThreadView(
            parentMessage: ThreadMessage(text: 'Meeting at 3pm today?', time: '10:00 AM', isSent: true, isRead: true),
            replies: [
              ThreadMessage(text: 'Works for me!', time: '10:05 AM', isSent: false),
            ],
          ),
        ),
      ),
      Story(
        name: 'Playground',
        type: StoryType.playground,
        builder: (args) => const SizedBox(
          height: 600,
          child: CometChatThreadView(
            parentMessage: ThreadMessage(text: 'Hello everyone!', time: '1:00 PM', isSent: false),
            replies: [
              ThreadMessage(text: 'Hi there!', time: '1:01 PM', isSent: true, isRead: true),
              ThreadMessage(text: 'Welcome!', time: '1:02 PM', isSent: false),
            ],
          ),
        ),
      ),
    ],
  ),
];

// ─── Helper functions for parsing enum strings from controls ───
TypingActivity _parseActivity(String value) {
  return switch (value) {
    'recording' => TypingActivity.recording,
    'uploading' => TypingActivity.uploading,
    _ => TypingActivity.typing,
  };
}

TypingContext _parseContext(String value) {
  return switch (value) {
    'group' => TypingContext.group,
    'multiple' => TypingContext.multiple,
    _ => TypingContext.single,
  };
}

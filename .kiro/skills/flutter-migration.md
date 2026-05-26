---
inclusion: manual
---

# Flutter UI Migration Skill

Migrate CometChat Foundation Design System React components to Flutter widgets. Generate pixel-perfect Flutter UI code and render live previews via Dartpad iframe embeds.

## When to Use

Use this skill when:
- Converting a React TSX + CSS base component to a Flutter StatelessWidget or StatefulWidget
- Mapping `--cometchat-*` CSS design tokens to a Flutter `CometChatTheme` class
- Generating a Storybook-like preview page (HTML with Dartpad iframe) for the migrated widget
- Reviewing or iterating on a migrated Flutter component

## Migration Workflow

Execute phases sequentially. Complete each before proceeding.

### Phase 1: Analyze the React Component

1. Read the `.tsx` file — identify props interface, state, event handlers, conditional rendering
2. Read the `.css` file — identify tokens used, layout model (flex/grid), animations, variants
3. Read the `.types.ts` file if present — understand the full type contract
4. Classify complexity: Simple (stateless) | Medium (stateful, variants) | Complex (dynamic lists, multi-section)

### Phase 2: Map to Flutter Architecture

| React Pattern | Flutter Equivalent |
|---|---|
| `interface Props` | Constructor parameters with named params |
| `useState` | `StatefulWidget` with `setState` |
| `useEffect` | `initState` / `didUpdateWidget` / `dispose` |
| Conditional `{x && <Y/>}` | Ternary or `if` in widget list |
| `className` variants | Conditional `BoxDecoration` / `TextStyle` |
| CSS Flexbox `row` | `Row` widget |
| CSS Flexbox `column` | `Column` widget |
| CSS `gap` | `SizedBox` between children or `MainAxisAlignment.spaceBetween` |
| CSS `overflow: hidden` | `ClipRRect` or `ClipRect` |
| CSS `border-radius` | `BorderRadius.circular()` |
| CSS `box-shadow` | `BoxShadow` in `BoxDecoration` |
| CSS `transition` | `AnimatedContainer` or explicit `AnimationController` |
| CSS `@keyframes` | `AnimationController` + `Tween` |
| `onClick` | `GestureDetector` / `InkWell` / `onPressed` |
| `aria-label` | `Semantics(label: ...)` |
| `role="dialog"` | `Dialog` widget or `showDialog()` |
| `role="menu"` | `PopupMenuButton` or custom overlay |
| BEM class naming | Widget composition (extract sub-widgets) |

### Phase 3: Token Mapping

Map `--cometchat-*` CSS variables to a Flutter theme extension class:

```dart
@immutable
class CometChatTokens extends ThemeExtension<CometChatTokens> {
  // Colors
  final Color primaryColor;
  final Color backgroundColor01;
  final Color backgroundColor02;
  final Color backgroundColor03;
  final Color backgroundColor04;
  final Color textColorPrimary;
  final Color textColorSecondary;
  final Color textColorTertiary;
  final Color errorColor;
  final Color successColor;
  final Color borderColorDefault;
  final Color borderColorLight;
  final Color borderColorDark;
  final Color staticWhite;
  final Color staticBlack;
  final Color primaryButtonBackground;
  final Color primaryButtonText;

  // Spacing (in logical pixels)
  static const double spacing = 2.0;
  static const double spacing1 = 4.0;
  static const double spacing2 = 8.0;
  static const double spacing3 = 12.0;
  static const double spacing4 = 16.0;
  static const double spacing5 = 20.0;
  static const double spacing6 = 24.0;

  // Radius
  static const double radius1 = 4.0;
  static const double radius2 = 8.0;
  static const double radius3 = 12.0;
  static const double radius4 = 16.0;
  static const double radius5 = 20.0;
  static const double radiusMax = 9999.0;

  // Typography
  final String fontFamily;

  const CometChatTokens({
    required this.primaryColor,
    required this.backgroundColor01,
    required this.backgroundColor02,
    required this.backgroundColor03,
    required this.backgroundColor04,
    required this.textColorPrimary,
    required this.textColorSecondary,
    required this.textColorTertiary,
    required this.errorColor,
    required this.successColor,
    required this.borderColorDefault,
    required this.borderColorLight,
    required this.borderColorDark,
    required this.staticWhite,
    required this.staticBlack,
    required this.primaryButtonBackground,
    required this.primaryButtonText,
    this.fontFamily = 'Inter',
  });

  // Light theme defaults
  factory CometChatTokens.light() => const CometChatTokens(
    primaryColor: Color(0xFF6852D6),
    backgroundColor01: Color(0xFFFFFFFF),
    backgroundColor02: Color(0xFFFAFAFA),
    backgroundColor03: Color(0xFFF5F5F5),
    backgroundColor04: Color(0xFFE5E5E5),
    textColorPrimary: Color(0xFF141414),
    textColorSecondary: Color(0xFF727272),
    textColorTertiary: Color(0xFFA1A1A1),
    errorColor: Color(0xFFF97066),
    successColor: Color(0xFF17B26A),
    borderColorDefault: Color(0xFFE5E5E5),
    borderColorLight: Color(0xFFF5F5F5),
    borderColorDark: Color(0xFFD4D4D4),
    staticWhite: Color(0xFFFFFFFF),
    staticBlack: Color(0xFF0A0D12),
    primaryButtonBackground: Color(0xFF6852D6),
    primaryButtonText: Color(0xFFFFFFFF),
  );

  @override
  CometChatTokens copyWith({/* all fields */}) { /* ... */ }

  @override
  CometChatTokens lerp(ThemeExtension<CometChatTokens>? other, double t) { /* ... */ }
}
```

### Phase 4: Generate Flutter Widget Code

Rules:
- Use `const` constructors wherever possible
- Extract sub-widgets as private `_WidgetName` classes (not methods)
- Use named parameters for all props
- Add `Semantics` widgets for accessibility
- Use `Theme.of(context).extension<CometChatTokens>()!` to access tokens
- Match the original component's visual output exactly
- Prefix all widget files with `cometchat_` (e.g., `cometchat_toast.dart`)

### Phase 5: Generate Preview Page

For each migrated widget, generate an HTML file that embeds a Dartpad iframe showing ONLY the widget code and its rendered output. The preview should:

1. Show the widget code in a read-only code panel (left side or top)
2. Show the rendered UI in an iframe (right side or bottom)
3. NOT expose the full app scaffold, theme setup, or boilerplate — only the widget itself

**Preview HTML Template:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[ComponentName] - Flutter Preview</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: #1e1e1e; color: #fff; }
    .container { display: flex; height: 100vh; }
    .code-panel { flex: 1; overflow: auto; padding: 24px; background: #1e1e1e; border-right: 1px solid #333; }
    .preview-panel { flex: 1; background: #fff; }
    .preview-panel iframe { width: 100%; height: 100%; border: none; }
    h2 { font-size: 14px; color: #888; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.05em; }
    pre { font-family: 'JetBrains Mono', monospace; font-size: 13px; line-height: 1.6; color: #d4d4d4; white-space: pre-wrap; }
    .keyword { color: #569cd6; }
    .class-name { color: #4ec9b0; }
    .string { color: #ce9178; }
    .comment { color: #6a9955; }
  </style>
</head>
<body>
  <div class="container">
    <div class="code-panel">
      <h2>Widget Code</h2>
      <pre><code><!-- WIDGET CODE HERE (syntax highlighted) --></code></pre>
    </div>
    <div class="preview-panel">
      <h2 style="padding: 16px; background: #f5f5f5; color: #333;">Live Preview</h2>
      <iframe src="https://dartpad.dev/embed-flutter.html?id=GIST_ID&theme=light&split=0&run=true"></iframe>
    </div>
  </div>
</body>
</html>
```

**Alternative: Self-contained preview using Flutter Web snippet:**

If no Dartpad gist is available, generate a standalone HTML preview that shows:
- The widget Dart code (read-only, syntax highlighted)
- A static mockup image or description of the rendered output
- A "Copy to Dartpad" button that copies the full runnable code to clipboard

## Output Structure

For each migrated component, produce:

```
src/flutter-components/
├── lib/
│   ├── tokens/
│   │   └── cometchat_tokens.dart          # Theme extension class
│   └── components/
│       └── [component_name]/
│           ├── cometchat_[name].dart       # Widget implementation
│           └── cometchat_[name]_preview.dart  # Preview wrapper
├── previews/
│   └── [component_name]_preview.html      # Iframe preview page
```

## Quality Checklist

For each migrated component verify:
- [ ] All props from the React interface are mapped to constructor params
- [ ] All CSS tokens are mapped to `CometChatTokens` references
- [ ] Layout matches (flex direction, alignment, gaps, padding)
- [ ] Typography matches (font size, weight, line height, color)
- [ ] Border radius matches
- [ ] Shadows match
- [ ] Hover/active states mapped to `InkWell` or `GestureDetector` feedback
- [ ] Animations mapped to Flutter animation system
- [ ] Accessibility: all interactive elements have `Semantics` labels
- [ ] `const` used wherever possible
- [ ] No hardcoded colors — all from tokens
- [ ] Preview HTML generated with widget code visible

## Example: Toast Migration

**Input (React):**
```tsx
export function Toast({ message, open = true, duration = 3000, onClose }: ToastProps) {
  useEffect(() => { /* auto-dismiss timer */ }, [open, duration, onClose]);
  if (!open) return null;
  return (
    <div className="toast" role="status" aria-live="polite">
      <div className="toast__content">
        <span className="toast__message">{message}</span>
      </div>
    </div>
  );
}
```

**Output (Flutter):**
```dart
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
  @override
  void initState() {
    super.initState();
    if (widget.duration > Duration.zero) {
      Future.delayed(widget.duration, () {
        if (mounted) widget.onClose?.call();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final tokens = Theme.of(context).extension<CometChatTokens>()!;

    return Semantics(
      liveRegion: true,
      label: widget.message,
      child: DecoratedBox(
        decoration: BoxDecoration(
          color: tokens.staticBlack,
          borderRadius: BorderRadius.circular(CometChatTokens.radius1),
          boxShadow: [
            BoxShadow(
              color: const Color(0xFF0A0D12).withOpacity(0.08),
              blurRadius: 8,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Padding(
          padding: const EdgeInsets.all(CometChatTokens.spacing2),
          child: Text(
            widget.message,
            style: TextStyle(
              fontFamily: tokens.fontFamily,
              fontSize: 12,
              fontWeight: FontWeight.w400,
              height: 1.5,
              color: tokens.staticWhite,
            ),
            textAlign: TextAlign.center,
          ),
        ),
      ),
    );
  }
}
```

## References

- Source components: `#[[file:src/base-components/components/]]`
- Design tokens: `#[[file:src/cometchat-foundation/tokens/cometchat-tokens.css]]`
- Installed skills: `.agents/skills/flutter-ui-ux/`, `.agents/skills/dart-flutter-patterns/`, `.agents/skills/flutter-add-widget-preview/`

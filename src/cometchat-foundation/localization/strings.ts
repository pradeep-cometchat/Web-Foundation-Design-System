/**
 * Arabic renderings for the CometChat Foundation pages.
 *
 * Keyed by the exact English string so the docs-chrome components can resolve a
 * translation without every story passing one down. A missing key falls back to
 * English on its own, which is why an untranslated page degrades quietly rather
 * than breaking.
 *
 * Identifiers are deliberately absent: token names (--cometchat-*), hex values,
 * px measurements, font family names and URLs are not translated — they are the
 * reference material the page exists to document.
 */
export const AR: Readonly<Record<string, string>> = {
  /* ─── Eyebrows ─── */
  "CometChat Foundation": "أساسيات CometChat",
  Foundation: "الأساسيات",

  /* ─── Page titles ─── */
  "CometChat UI Kit Tokens": "رموز واجهة CometChat",
  Colors: "الألوان",
  Typography: "الطباعة",
  Spacing: "المسافات",
  "Border Radius": "استدارة الحواف",
  Radius: "استدارة الحواف",
  "Icon library": "مكتبة الأيقونات",
  "Style variants": "أنماط الخطوط",
  "Variable axes": "المحاور المتغيّرة",
  "Miscellaneous Icons": "أيقونات متنوّعة",
  "Avatars & Media": "الصور الرمزية والوسائط",
  Stickers: "الملصقات",
  "Elevation scale": "مقياس الارتفاع",
  "Shadow reference": "مرجع الظلال",
  "Focus Rings": "حلقات التركيز",

  /* ─── Page descriptions ─── */
  "Design tokens from the CometChat Web UI Kit — spacing, typography, colors, radius, and button styles. These tokens power the CometChat SDK components and can be themed via CSS custom properties with light and dark mode support.":
    "رموز التصميم من حزمة واجهة CometChat للويب — المسافات والطباعة والألوان واستدارة الحواف وأنماط الأزرار. تُشغّل هذه الرموز مكوّنات CometChat SDK ويمكن تخصيص سماتها عبر خصائص CSS المخصّصة مع دعم الوضعين الفاتح والداكن.",
  "Primary, Extended Primary, Neutrals, Alerts, and semantic tokens for backgrounds, borders, text, and icons. The neutral scale inverts in dark mode — all semantic tokens adapt automatically.":
    "الألوان الأساسية والأساسية الموسّعة والمحايدة والتنبيهات، والرموز الدلالية للخلفيات والحدود والنصوص والأيقونات. يَنعكس التدرّج المحايد في الوضع الداكن — وتتكيّف جميع الرموز الدلالية تلقائيًا.",
  "Roboto font family with 28 shorthand font tokens. Each token encodes weight, size, and line-height in a single CSS shorthand value. Use via the font property.":
    "عائلة خط Roboto مع 28 رمزًا مختصرًا للخط. يُرمّز كل رمز الوزن والحجم وارتفاع السطر في قيمة CSS مختصرة واحدة. استخدمها عبر خاصية font.",
  "A 4px-based spacing scale from 2px to 80px (plus a max of 1000px). Padding and margin tokens map directly to the spacing scale.":
    "مقياس مسافات يعتمد على 4px، من 2px إلى 80px (مع حدّ أقصى 1000px). ترتبط رموز الحشو والهوامش مباشرةً بمقياس المسافات.",
  "Border radius scale tied to the spacing system. From sharp corners (0px) to fully rounded pills (1000px max).":
    "مقياس استدارة الحواف مرتبط بنظام المسافات. من الزوايا الحادة (0px) إلى الأشكال الدائرية الكاملة (1000px كحدّ أقصى).",
  "Browse a curated set of Material Symbols. Click any icon to copy its ligature name. The full catalog (~3,000 icons) is available at fonts.google.com/icons — any name from there will render correctly.":
    "تصفّح مجموعة منتقاة من أيقونات Material Symbols. انقر أي أيقونة لنسخ اسم الرباط الخاص بها. الكتالوج الكامل (نحو 3000 أيقونة) متاح على fonts.google.com/icons — وسيُعرض أي اسم منه بشكل صحيح.",
  "Three sibling fonts share every ligature name — only the geometry differs. Pick one variant for your product and stick to it.":
    "ثلاثة خطوط شقيقة تتشارك كل أسماء الروابط — الاختلاف في الهندسة فقط. اختر نمطًا واحدًا لمنتجك والتزم به.",
  "All icons exported as SVG. Adjust size and click any tile to copy SVG code.":
    "جميع الأيقونات مُصدَّرة بصيغة SVG. اضبط الحجم وانقر أي بطاقة لنسخ كود SVG.",
  "All avatar and media assets from the design system. Click any tile to copy the image URL.":
    "جميع أصول الصور الرمزية والوسائط من نظام التصميم. انقر أي بطاقة لنسخ رابط الصورة.",
  "Pick the smallest shadow that communicates the right intent. Over-elevating makes the UI feel noisy.":
    "اختر أصغر ظل يوصّل المعنى المقصود. المبالغة في الارتفاع تجعل الواجهة تبدو مشوّشة.",

  /* ─── Section titles ─── */
  Primary: "الأساسي",
  "Extended Primary": "الأساسي الموسّع",
  Neutrals: "الألوان المحايدة",
  "Alert Colors": "ألوان التنبيهات",
  "Static Colors": "الألوان الثابتة",
  "Background Colors": "ألوان الخلفيات",
  "Border Colors": "ألوان الحدود",
  "Text Colors": "ألوان النصوص",
  "Icon Colors": "ألوان الأيقونات",
  "Chat Bubble Colors": "ألوان فقاعات المحادثة",
  "Message Status": "حالة الرسالة",
  "Font Family": "عائلة الخط",
  "All Font Tokens": "جميع رموز الخط",
  "Spacing Scale": "مقياس المسافات",
  "Padding Tokens": "رموز الحشو",
  "Margin Tokens": "رموز الهوامش",
  "Radius Scale": "مقياس الاستدارة",
  Shadows: "الظلال",
  Accessibility: "إمكانية الوصول",
  "Visual Comparison": "مقارنة بصرية",
  "When to use each level": "متى تستخدم كل مستوى",
  "Do's and don'ts": "ما يُنصح به وما يُتجنّب",

  /* ─── Section descriptions ─── */
  "The brand anchor color — same in both modes.":
    "لون العلامة المرجعي — نفسه في كلا الوضعين.",
  "Full tint/shade scale of the brand color (50–900). Light and dark values shown.":
    "مقياس كامل لدرجات لون العلامة (50–900). تُعرض القيم الفاتحة والداكنة.",
  "Colors that don't change between modes.": "ألوان لا تتغيّر بين الوضعين.",
  "Semantic colors for info, warning, success, and error states.":
    "ألوان دلالية لحالات المعلومات والتحذير والنجاح والخطأ.",
  "Semantic surface tokens — reference neutrals.":
    "رموز الأسطح الدلالية — تشير إلى الألوان المحايدة.",
  "Semantic border tokens.": "رموز الحدود الدلالية.",
  "Semantic text fill tokens.": "رموز تعبئة النصوص الدلالية.",
  "Semantic icon fill tokens.": "رموز تعبئة الأيقونات الدلالية.",
  "Read receipt and delivery status colors.":
    "ألوان إيصالات القراءة وحالة التسليم.",
  "Each token is a CSS font shorthand: weight size/line-height family.":
    "كل رمز هو اختصار CSS للخط: الوزن، ثم الحجم/ارتفاع السطر، ثم العائلة.",
  "Roboto font family with 30 font shorthand tokens covering Title, Heading 1–4, Body, Caption 1–2, Button, and Link styles.":
    "عائلة خط Roboto مع 30 رمزًا مختصرًا للخط تغطي أنماط العنوان، والعناوين من 1 إلى 4، والنص الأساسي، والتعليقات 1–2، والأزرار، والروابط.",
  "Core spacing values used for padding, margin, and gap.":
    "قيم المسافات الأساسية المستخدمة للحشو والهوامش والفجوات.",
  "A 4px-based spacing scale from 2px to 80px (20 steps), mapped to padding and margin tokens.":
    "مقياس مسافات يعتمد على 4px، من 2px إلى 80px (20 خطوة)، مرتبط برموز الحشو والهوامش.",
  "Mapped to spacing values (0–10).": "مرتبطة بقيم المسافات (0–10).",
  "Mapped to spacing values (0–20).": "مرتبطة بقيم المسافات (0–20).",
  "Each radius token maps to a spacing value for consistency.":
    "يرتبط كل رمز استدارة بقيمة مسافة لضمان الاتساق.",
  "Border radius scale from 2px to 1000px (max for pills), tied to the spacing system.":
    "مقياس استدارة الحواف من 2px إلى 1000px (الحدّ الأقصى للأشكال الدائرية)، مرتبط بنظام المسافات.",
  "Elevation tokens for depth and layering.": "رموز الارتفاع للعمق والتراكب.",
  "Every elevation token with its layer count and full CSS value.":
    "كل رمز ارتفاع مع عدد طبقاته وقيمة CSS الكاملة.",
  "Guidelines for when to reach for each elevation. If in doubt, use the smaller one.":
    "إرشادات لاختيار الارتفاع المناسب. عند الشك، استخدم الأصغر.",
  "Accessible focus indicators for keyboard navigation.":
    "مؤشّرات تركيز يسهل الوصول إليها للتنقّل بلوحة المفاتيح.",
  "Focus indicators are required by WCAG 2.4.7. These tokens meet the 3:1 non-text contrast requirement (WCAG 1.4.11) on both light and dark surfaces.":
    "مؤشّرات التركيز مطلوبة وفق معيار WCAG 2.4.7. تحقّق هذه الرموز نسبة التباين 3:1 لغير النصوص (WCAG 1.4.11) على الأسطح الفاتحة والداكنة معًا.",
  "6 stickers in the current set.": "6 ملصقات في المجموعة الحالية.",
  "Displayed in a 4-column grid at 80×80px in the sticker picker panel.":
    "تُعرض في شبكة من 4 أعمدة بحجم 80×80px في لوحة اختيار الملصقات.",
  "PNG with transparent background, pre-rendered at 2× resolution.":
    "صيغة PNG بخلفية شفافة، مُهيّأة مسبقًا بدقّة 2×.",
  "Every variant supports both outlined and filled states via the FILL axis. Use filled for selected or active states, outlined for default.":
    "يدعم كل نمط الحالتين المفرّغة والمملوءة عبر محور FILL. استخدم المملوءة للحالات المحدّدة أو النشطة، والمفرّغة كحالة افتراضية.",
  "0 is outlined, 1 is filled. Use filled icons for emphasis or selected states; outlined for neutral or default states.":
    "القيمة 0 مفرّغة و1 مملوءة. استخدم الأيقونات المملوءة للتأكيد أو الحالات المحدّدة، والمفرّغة للحالات المحايدة أو الافتراضية.",
  "Material Symbols ship as a single variable font with four live axes. Tune them with font-variation-settings or the Icon component props.":
    "تُشحن أيقونات Material Symbols كخط متغيّر واحد بأربعة محاور حيّة. اضبطها عبر font-variation-settings أو خصائص مكوّن Icon.",
  "Adjusts stroke thickness without changing overall size. Useful for low-contrast surfaces (dark mode can benefit from a lower grade).":
    "يضبط سماكة الخط دون تغيير الحجم الكلي. مفيد للأسطح منخفضة التباين (قد يستفيد الوضع الداكن من درجة أقل).",
  "Optimizes the icon's geometry for its rendered size. Match `opsz` to your `font-size` for best results.":
    "يحسّن هندسة الأيقونة بما يناسب حجم عرضها. طابِق `opsz` مع `font-size` للحصول على أفضل نتيجة.",
  "Primary, Extended Primary (50–900), Neutrals (50–900), Alert colors, Static colors, plus semantic Background/Border/Text/Icon tokens.":
    "الألوان الأساسية، والأساسية الموسّعة (50–900)، والمحايدة (50–900)، وألوان التنبيهات، والألوان الثابتة، إضافةً إلى الرموز الدلالية للخلفيات والحدود والنصوص والأيقونات.",

  /* ─── Introduction ─── */
  "What's inside": "ما الذي تتضمّنه",
  "Dark mode": "الوضع الداكن",
  "The CometChat UI Kit token system covers five areas. Each maps to a Storybook page.":
    "يغطّي نظام رموز واجهة CometChat خمسة مجالات، ويقابل كلٌّ منها صفحة في Storybook.",

  /* ─── Icons ─── */
  Outlined: "مفرّغ",
  Rounded: "دائري",
  Sharp: "حادّ",
  Filled: "مملوء",
  "All categories": "جميع الفئات",
  // Icon registry categories
  Navigation: "التنقّل",
  Actions: "الإجراءات",
  Content: "المحتوى",
  Communication: "التواصل",
  Media: "الوسائط",
  Files: "الملفات",
  Data: "البيانات",
  Toggles: "المفاتيح",
  User: "المستخدم",
  Commerce: "التجارة",
  Alerts: "التنبيهات",
  Devices: "الأجهزة",
  Editor: "المحرّر",
  Maps: "الخرائط",
  Social: "التواصل الاجتماعي",
  Weather: "الطقس",
  Misc: "متنوّعة",
  Variant: "النمط",
  Size: "الحجم",
  Weight: "الوزن",
  Fill: "التعبئة",
  Grade: "الدرجة",
  "Optical size": "الحجم البصري",
  "Using icons": "استخدام الأيقونات",
  "Font delivery": "تحميل الخطوط",
  "React component": "مكوّن React",
  "CSS utility class": "فئة CSS المساعدة",
  "Outlined vs filled": "المفرّغ مقابل المملوء",
  "Two ways to render an icon: the typed React component, or the CSS utility class.":
    "طريقتان لعرض أيقونة: مكوّن React المُوصَّف بالأنواع، أو الرباط المجرّد مع فئة CSS مساعدة.",

  /* ─── Effects ─── */
  /* Callout titles */
  Do: "افعل",
  "Don't": "لا تفعل",
  "Decorative icons": "الأيقونات الزخرفية",
  "Meaningful icons": "الأيقونات ذات المعنى",
  "Focused button": "زر مُركَّز عليه",
  "Don't use emoji as icons": "لا تستخدم الإيموجي كأيقونات",
  "Match optical size": "طابِق الحجم البصري",
  "Try tabbing through the canvas": "جرّب التنقّل بمفتاح Tab عبر اللوحة",

  "Material Symbols are vector, weight-tunable, and theme-aware. Emoji aren't — they render inconsistently across platforms.":
    "أيقونات Material Symbols متّجهة وقابلة لضبط الوزن وتتكيّف مع السمة، بخلاف الإيموجي الذي يُعرض بشكل غير متّسق بين المنصّات.",
  "Don't rely on the ring alone in forced-colors mode. Add a border state change as a backup.":
    "لا تعتمد على الحلقة وحدها في وضع الألوان المفروضة. أضِف تغييرًا في حالة الحدّ كبديل احتياطي.",

  "Focus ring reference": "مرجع حلقات التركيز",
  "Copy-ready value": "قيمة جاهزة للنسخ",
  "Two tokens cover all interactive states: a brand ring for standard controls and an error ring for destructive ones.":
    "يغطّي رمزان جميع الحالات التفاعلية: حلقة بلون العلامة لعناصر التحكّم القياسية، وحلقة خطأ للعناصر التدميرية.",

  "Usage guide": "دليل الاستخدام",
  "Accessibility notes": "ملاحظات إمكانية الوصول",
  "Don't rely on shadow alone": "لا تعتمد على الظل وحده",
  "In high-contrast or forced-colors modes, shadows may be stripped. Pair elevation with borders and surface color changes so the boundary is still clear.":
    "في أوضاع التباين العالي أو الألوان المفروضة، قد تُزال الظلال تمامًا. اقرن الارتفاع بحدٍّ أو بتغيير في الخلفية.",

  /* ─── Stickers ─── */
  "Sticker Footage": "أصول الملصقات",
  "Sticker Sizes": "أحجام الملصقات",
  "Token Source": "مصدر الرمز",
  "HTML Structure": "بنية HTML",
  Specifications: "المواصفات",
  Format: "الصيغة",
  Source: "المصدر",
  Sizes: "الأحجام",
  "Chat Bubble": "فقاعة المحادثة",
  "Picker Grid": "شبكة الاختيار",
  Count: "العدد",
  "Stickers render without bubble background — just the image + timestamp.":
    "تُعرض الملصقات دون خلفية فقاعة — الصورة والطابع الزمني فقط.",
  "sm: 48px, md: 80px, lg: 120px (chat bubble), xl: 160px (preview).":
    "sm: 48px، md: 80px، lg: 120px (فقاعة المحادثة)، xl: 160px (المعاينة).",

  /* ─── Token table chrome ─── */
  "Search tokens": "ابحث في الرموز",
  Token: "الرمز",
  "CSS variable": "متغيّر CSS",
  Preview: "معاينة",
  Value: "القيمة",
  Color: "اللون",
  Hex: "القيمة الست عشرية",
  Ruler: "المسطرة",
  Layers: "الطبقات",
  References: "المراجع",
  Shorthand: "الاختصار",
  "Typical use": "الاستخدام المعتاد",
  "Use for": "يُستخدم لـ",
  Usage: "الاستخدام",
  "CSS Variable": "متغيّر CSS",
  Light: "فاتح",
  Dark: "داكن",
  Copy: "نسخ",
  Name: "الاسم",
  outlined: "مفرّغة",
  filled: "مملوءة",

  /* ─── Base Components: component descriptions ─── */
  "AI-suggested quick reply chips for fast message responses.": "شرائح ردود سريعة يقترحها الذكاء الاصطناعي للردّ على الرسائل بسرعة.",
  "Animated indicator showing when other users are composing a message.": "مؤشّر متحرّك يوضّح أن مستخدمين آخرين يكتبون رسالة.",
  "Audio and video recording interface with playback preview.": "واجهة لتسجيل الصوت والفيديو مع معاينة للتشغيل.",
  "Bottom sheet overlay presenting a set of contextual actions or options.": "لوحة سفلية تعرض مجموعة من الإجراءات أو الخيارات السياقية.",
  "Compact message representation for quotes, replies, and forwards.": "تمثيل مختصر للرسالة يُستخدم في الاقتباسات والردود وإعادة التوجيه.",
  "Condensed preview of a conversation with metadata and last message.": "معاينة مختصرة للمحادثة مع بياناتها الوصفية وآخر رسالة.",
  "Date display and formatting component with relative time support.": "مكوّن لعرض التاريخ وتنسيقه مع دعم الوقت النسبي.",
  "Dialog for inserting or editing hyperlinks with URL validation.": "مربّع حوار لإدراج الروابط أو تعديلها مع التحقّق من صحّة الرابط.",
  "Dialog for reporting or flagging inappropriate messages.": "مربّع حوار للإبلاغ عن الرسائل غير اللائقة أو الإشارة إليها.",
  "Emoji picker with categories, search, and skin tone selection.": "منتقي الإيموجي مع الفئات والبحث واختيار درجة لون البشرة.",
  "Entry point component for initiating new conversations.": "مكوّن نقطة البداية لبدء محادثات جديدة.",
  "Floating content container with configurable placement and triggers.": "حاوية محتوى عائمة بموضع ومُشغِّلات قابلة للضبط.",
  "Get notified when someone sends you a message.": "تلقَّ إشعارًا عندما يرسل إليك أحدهم رسالة.",
  "Graceful error handling with fallback UI and retry actions.": "معالجة سلِسة للأخطاء مع واجهة بديلة وإجراءات لإعادة المحاولة.",
  "Immersive media viewer with zoom, pan, and navigation controls.": "عارض وسائط غامر مع أدوات للتكبير والتحريك والتنقّل.",
  "Inline popover showing link preview with open and edit actions.": "نافذة منبثقة ضمن السياق تعرض معاينة الرابط مع إجراءَي الفتح والتعديل.",
  "Modal confirmation prompt with customizable actions and messaging.": "مطالبة تأكيد مشروطة بإجراءات ونصوص قابلة للتخصيص.",
  "Primary, secondary, and ghost variants with icon support and loading states.": "أنماط أساسية وثانوية وشفّافة مع دعم الأيقونات وحالات التحميل.",
  "Right-click or long-press menu with grouped actions and icons.": "قائمة تظهر بالنقر بالزر الأيمن أو الضغط المطوّل، بإجراءات مجمَّعة وأيقونات.",
  "Save my login details for next time.": "احفظ بيانات تسجيل دخولي للمرّة القادمة.",
  "Scope switcher for toggling between contexts like channels or groups.": "مبدّل نطاق للتنقّل بين السياقات مثل القنوات أو المجموعات.",
  "Search input with suggestions, filters, and clear functionality.": "حقل بحث مع الاقتراحات والمرشّحات وإمكانية المسح.",
  "Select menus with search, multi-select, and custom rendering.": "قوائم اختيار مع البحث والتحديد المتعدّد والعرض المخصّص.",
  "Single and group checkboxes with indeterminate state support.": "مربّعات اختيار مفردة وجماعية مع دعم الحالة غير المحدّدة.",
  "Single-select option within a group with label and description.": "خيار أحادي التحديد ضمن مجموعة، مع تسمية ووصف.",
  "This setting is managed by your admin.": "يدير هذا الإعداد مسؤول النظام لديك.",
  "Threaded conversation display with reply composition.": "عرض المحادثات المتسلسلة مع إمكانية كتابة الردود.",
  "Transient notification with auto-dismiss, actions, and severity levels.": "إشعار مؤقّت يختفي تلقائيًا، مع إجراءات ومستويات أهمية.",
  "User or entity representation with image, initials, or icon fallback.": "تمثيل للمستخدم أو الكيان بصورة أو أحرف أولى أو أيقونة بديلة.",
  "Versatile list row with leading/trailing elements and interaction states.": "صفّ قائمة مرن بعناصر في البداية والنهاية وحالات تفاعل.",

  /* ─── Base Components: UI labels ─── */
  "Accessible": "سهل الوصول",
  "Advanced features for teams.": "ميزات متقدّمة للفرق.",
  "All notifications": "كل الإشعارات",
  "Auto-save": "حفظ تلقائي",
  "Basic features for individuals.": "ميزات أساسية للأفراد.",
  "Chats": "المحادثات",
  "Checked": "محدَّد",
  "Clear search": "مسح البحث",
  "Close": "إغلاق",
  "Composable": "قابل للتركيب",
  "Container": "الحاوية",
  "Custom solutions for large organizations.": "حلول مخصّصة للمؤسّسات الكبيرة.",
  "Date": "التاريخ",
  "Declined": "مرفوض",
  "Default": "افتراضي",
  "Description": "الوصف",
  "Destructive": "تدميري",
  "Destructive states": "الحالات التدميرية",
  "Divider": "فاصل",
  "Elements": "العناصر",
  "Email": "البريد الإلكتروني",
  "Email notifications": "إشعارات البريد الإلكتروني",
  "Enforced by your organization.": "مفروض من قِبل مؤسّستك.",
  "Enterprise": "المؤسّسات",
  "Favorite": "مفضّل",
  "First option description.": "وصف الخيار الأول.",
  "Free": "مجّاني",
  "Get notified about suspicious activity.": "تلقَّ إشعارًا بالنشاط المشبوه.",
  "Get notified for every message.": "تلقَّ إشعارًا بكل رسالة.",
  "Go back": "رجوع",
  "Group": "مجموعة",
  "Header": "الترويسة",
  "Hover": "عند التحويم",
  "Icon only": "أيقونة فقط",
  "Incoming": "وارد",
  "Indeterminate": "غير محدَّد",
  "Marketing emails": "رسائل تسويقية",
  "Mentions only": "الإشارات فقط",
  "Missed": "فائت",
  "Modifiers": "المُعدِّلات",
  "More actions": "إجراءات أخرى",
  "Multiple": "متعدّد",
  "Mute all notifications.": "كتم جميع الإشعارات.",
  "New chat": "محادثة جديدة",
  "No receipt": "بلا إيصال",
  "None": "بلا",
  "Notification preference": "تفضيلات الإشعارات",
  "Only when someone mentions you.": "فقط عندما يشير إليك أحدهم.",
  "Option A": "الخيار أ",
  "Option B": "الخيار ب",
  "Option C": "الخيار ج",
  "Plan selection": "اختيار الخطة",
  "Preference": "التفضيل",
  "Pressed": "مضغوط",
  "Primary states": "الحالات الأساسية",
  "Pro": "احترافي",
  "Push notifications": "الإشعارات الفورية",
  "Receive alerts on your device.": "استقبل التنبيهات على جهازك.",
  "Relative": "نسبي",
  "Remember me": "تذكّرني",
  "Responsive": "متجاوب",
  "Root": "الجذر",
  "Search": "بحث",
  "Second option description.": "وصف الخيار الثاني.",
  "Secondary states": "الحالات الثانوية",
  "Security alerts": "تنبيهات الأمان",
  "Settings": "الإعدادات",
  "Settings list": "قائمة الإعدادات",
  "Single": "مفرد",
  "Standard": "قياسي",
  "States": "الحالات",
  "Themeable": "قابل للتنسيق",
  "Third option description.": "وصف الخيار الثالث.",
  "Time": "الوقت",
  "Tips, product updates, and inspiration.": "نصائح وتحديثات للمنتج وأفكار ملهِمة.",
  "Token-first": "الرموز أوّلًا",
  "Two-factor auth": "المصادقة الثنائية",
  "Unchecked": "غير محدَّد",
  "Users": "المستخدمون",
  "Variants": "الأنماط",
  "Video call": "مكالمة فيديو",
  "Voice call": "مكالمة صوتية",
  "components": "مكوّنات",
  "responsive": "متجاوب",

  /* ─── Base Components: docs-page descriptions (markdown preserved) ─── */
  "A popup overlay presenting a list of contextual actions. Used for attachment menus, message actions, and any context where the user needs to pick from a set of options. Appears anchored to a trigger element with elevation and rounded corners. **Anatomy:** Container (radius-4, shadow-lg) → Action Items (icon + label, 44px height) **Icons:** Material Symbols Rounded in brand color. Destructive items use error color.":
    "لوحة منبثقة تعرض قائمة من الإجراءات السياقية. تُستخدم في قوائم المرفقات وإجراءات الرسائل وأي سياق يحتاج فيه المستخدم إلى الاختيار من مجموعة خيارات. تظهر مرتبطة بعنصر مُشغِّل مع ارتفاع وزوايا دائرية. **التشريح:** الحاوية (radius-4، shadow-lg) ← عناصر الإجراء (أيقونة + تسمية، ارتفاع 44px) **الأيقونات:** Material Symbols Rounded بلون العلامة. العناصر التدميرية تستخدم لون الخطأ.",
  "Avatar system — individual avatars, grouped stacks, and labeled profiles. **Components:** Avatar, Avatar Group, Avatar Label Group. **Sizes:** xs (24), sm (32), md (40), lg (48), xl (56), 2xl (64). **Status icons:** Online indicator, Offline, Verified tick, Company icon. **Features:** Fallback initials, icon placeholder, add button, overflow counter. Uses foundation tokens and Avatars from the foundation tab.":
    "نظام الصور الرمزية — صور مفردة ومجموعات متراصّة وملفّات معنونة. **المكوّنات:** Avatar، Avatar Group، Avatar Label Group. **الأحجام:** xs (24)، sm (32)، md (40)، lg (48)، xl (56)، 2xl (64). **أيقونات الحالة:** مؤشّر الاتصال، غير متصل، علامة التوثيق، أيقونة الشركة. **الميزات:** أحرف أولى بديلة، أيقونة نائبة، زر إضافة، عدّاد للفائض. يستخدم رموز الأساسيات والصور الرمزية من تبويب الأساسيات.",
  "The primary interactive element. Triggers actions, submits forms, or navigates within the product. **Hierarchies:** Primary, Secondary, Tertiary, Link color, Link gray, plus destructive variants for each. **Sizes:** sm (36px), md (40px), lg (44px), xl (48px). **States:** Default, Hover, Focused, Disabled, Loading. All colors, spacing, radius, shadows, and typography use foundation design tokens (`var(--color-*)`, `var(--radius-*)`, `var(--shadow-*)`, etc.) so the button stays in sync with the design system automatically.":
    "العنصر التفاعلي الأساسي. يُشغّل الإجراءات، ويرسل النماذج، أو ينقلك داخل المنتج. **التدرّجات:** أساسي، ثانوي، ثالثي، رابط ملوّن، رابط رمادي، مع نمط تدميري لكلٍّ منها. **الأحجام:** sm (36px)، md (40px)، lg (44px)، xl (48px). **الحالات:** افتراضي، تحويم، مُركَّز، معطّل، قيد التحميل. تستخدم كل الألوان والمسافات والاستدارات والظلال والطباعة رموز التصميم الأساسية (`var(--color-*)`، `var(--radius-*)`، `var(--shadow-*)`، وغيرها) حتى يبقى الزر متوافقًا مع نظام التصميم تلقائيًا.",
  "A checkbox selection control — rounded square with check or minus icon. **Sizes:** sm (16px), md (20px). **States:** Default, Hover, Focus, Disabled, Checked, Indeterminate. **Text:** Optional label (16px/500) and description (14px/400). Uses foundation tokens: `--color-primary`, `--color-ep-700`, `--color-neutral-lm-*`, `--radius-xs` (sm), `--radius-sm` (md), `--focus-ring-xs`.":
    "عنصر تحكّم للاختيار — مربّع بزوايا دائرية يحمل علامة صح أو ناقص. **الأحجام:** sm (16px)، md (20px). **الحالات:** افتراضي، تحويم، تركيز، معطّل، محدَّد، غير محدَّد. **النص:** تسمية اختيارية (16px/500) ووصف (14px/400). يستخدم رموز الأساسيات: `--color-primary`، `--color-ep-700`، `--color-neutral-lm-*`، `--radius-xs` (sm)، `--radius-sm` (md)، `--focus-ring-xs`.",
  "A right-click or long-press context menu with grouped actions and icons. Appears anchored to a message or element with a compact list of actions. **Structure (from Figma node 4090:878265):** - Container: 160px wide, `--radius-md` (8px), shadow-lg, border `--color-neutral-100` - First item: 44px height, rest: 40px height - Item padding: 16px horizontal, 8px gap between icon and label - Icons: 24×24, color `#A1A1A1` (neutral-400) - Text: 14px, weight 400, line-height 1.2, color `--color-neutral-900` - Hover: `--color-neutral-50` (#fafafa) background - Destructive items: `--color-error` text and icon":
    "قائمة سياقية تظهر بالنقر بالزر الأيمن أو بالضغط المطوّل، بإجراءات مجمَّعة وأيقونات. تظهر مرتبطة برسالة أو عنصر، بقائمة إجراءات مضغوطة. **البنية (من عقدة Figma رقم 4090:878265):** - الحاوية: عرض 160px، `--radius-md` (8px)، shadow-lg، حدّ `--color-neutral-100` - العنصر الأول: ارتفاع 44px، والبقية: 40px - حشو العنصر: 16px أفقيًا، وفجوة 8px بين الأيقونة والتسمية - الأيقونات: 24×24، اللون `#A1A1A1` (neutral-400) - النص: 14px، وزن 400، ارتفاع سطر 1.2، اللون `--color-neutral-900` - التحويم: خلفية `--color-neutral-50` (#fafafa) - العناصر التدميرية: نص وأيقونة بلون `--color-error`",
  "Users List — a full-screen list view composing Header, SearchBar, and UserItem with alphabet section dividers. Used as the \"Users\" tab in the conversation list. **Composed from:** - Header (title: \"Users\") - SearchBar (placeholder: \"Search users\") - UserItemDivider (alphabet letters) - UserItem (user rows)":
    "قائمة المستخدمين — عرض قائمة بملء الشاشة يجمع بين الترويسة وشريط البحث وعنصر المستخدم مع فواصل أبجدية. تُستخدم كتبويب «المستخدمون» في قائمة المحادثات. **مركّبة من:** - الترويسة (العنوان: \"Users\") - شريط البحث (النص النائب: \"Search users\") - UserItemDivider (الأحرف الأبجدية) - UserItem (صفوف المستخدمين)",
  "AI-powered conversation starter suggestions displayed above the message composer. Presents a row of clickable pill-shaped tags with pre-written messages the user can tap to quickly start a conversation. **Structure (from Figma node 4088:704041):** - Container: full width, `--radius-2xl` (16px), wrapping flex layout - Tags: pill-shaped (`--radius-full`), 33px height, `--color-neutral-50` bg, border `--color-neutral-200` - Tag padding: 8px vertical, 20px horizontal - Tag text: 14px, weight 400, line-height 20px, `--color-neutral-900` - Gap between tags: 8px - Hover: `--color-neutral-100` bg, `--color-neutral-300` border":
    "اقتراحات لبدء المحادثة مدعومة بالذكاء الاصطناعي تظهر أعلى محرّر الرسائل. تعرض صفًّا من الوسوم القابلة للنقر بشكل حبّة دواء، تحمل رسائل جاهزة يمكن للمستخدم النقر عليها لبدء محادثة بسرعة. **البنية (من عقدة Figma رقم 4088:704041):** - الحاوية: بعرض كامل، `--radius-2xl` (16px)، تخطيط مرن ملتفّ - الوسوم: بشكل حبّة دواء (`--radius-full`)، ارتفاع 33px، خلفية `--color-neutral-50`، حدّ `--color-neutral-200` - حشو الوسم: 8px رأسيًا، 20px أفقيًا - نص الوسم: 14px، وزن 400، ارتفاع سطر 20px، `--color-neutral-900` - الفجوة بين الوسوم: 8px - التحويم: خلفية `--color-neutral-100`، حدّ `--color-neutral-300`",
  "An AI-generated conversation summary card that appears above the message composer. Displays a condensed overview of the conversation with a close action. **Structure (from Figma node 4043:347990):** - Container: full-width, `radius-md` (8px), `shadow-lg`, border `#f5f5f5` - Padding: 16px horizontal, 12px vertical, gap 8px - Header: \"Conversation summary\" (14px medium, #181d27) + close icon (20×20) - Body: Summary text (14px regular, line-height 20px, #181d27)":
    "بطاقة ملخّص للمحادثة يولّدها الذكاء الاصطناعي وتظهر أعلى محرّر الرسائل. تعرض نظرة عامة مختصرة عن المحادثة مع إجراء للإغلاق. **البنية (من عقدة Figma رقم 4043:347990):** - الحاوية: بعرض كامل، `radius-md` (8px)، `shadow-lg`، حدّ `#f5f5f5` - الحشو: 16px أفقيًا، 12px رأسيًا، فجوة 8px - الترويسة: \"Conversation summary\" (14px متوسط، #181d27) + أيقونة إغلاق (20×20) - المتن: نص الملخّص (14px عادي، ارتفاع سطر 20px، #181d27)",

  /* ─── Base Components: menu item labels ─── */
  "Camera": "الكاميرا",
  "Attach Image": "إرفاق صورة",
  "Attach Video": "إرفاق فيديو",
  "Attach Audio": "إرفاق ملف صوتي",
  "Attach Document": "إرفاق مستند",
  "Poll": "استطلاع",
  "Collaborative Whiteboard": "لوح تعاوني",
  "Collaborative Document": "مستند تعاوني",
  "Reply": "ردّ",
  "Copy Message": "نسخ الرسالة",
  "Forward": "إعادة توجيه",
  "Edit Message": "تعديل الرسالة",
  "Pin Message": "تثبيت الرسالة",
  "Delete Message": "حذف الرسالة",
  "Reply in Thread": "الردّ في المحادثة",
  "Report": "إبلاغ",
  "Translate": "ترجمة",
  "Delete": "حذف",
  "Edit": "تعديل",
  "Pin": "تثبيت",
  "Unpin": "إلغاء التثبيت",
  "Save": "حفظ",
  "Share": "مشاركة",
  "Select": "تحديد",
  "Info": "معلومات",

  /* ─── Base Components: story names, states, dialogs ─── */
  "Stories": "القصص",
  "Message Actions": "إجراءات الرسالة",
  "With Title": "مع عنوان",
  "Minimal": "مبسّط",
  "Custom Width": "عرض مخصّص",
  "Destructive Actions": "إجراءات تدميرية",
  "Playground": "ساحة التجربة",
  "Hierarchies": "التدرّجات",
  "With Icons": "مع أيقونات",
  "Full Width": "بعرض كامل",
  "Matrix": "المصفوفة",
  "Overview": "نظرة عامة",
  "Reference": "المرجع",
  "Scale": "المقياس",
  "Usage Guide": "دليل الاستخدام",
  "Active": "نشط",
  "Destructive Hover": "تدميري عند التحويم",
  "Loading": "قيد التحميل",
  "Error": "خطأ",
  "Paused": "متوقّف مؤقّتًا",
  "Playing": "قيد التشغيل",
  "Recording": "قيد التسجيل",
  "Typing": "يكتب",
  "Uploading": "قيد الرفع",
  "With value": "مع قيمة",
  "No arrow": "بلا سهم",
  "No clear button": "بلا زر مسح",
  "Custom placeholder": "نص نائب مخصّص",
  "Empty (placeholder)": "فارغ (نص نائب)",
  "Short Summary": "ملخّص قصير",
  "Two names": "اسمان",
  "Single reaction": "تفاعل واحد",
  "Multiple reactions": "تفاعلات متعدّدة",
  "Different emoji": "إيموجي مختلف",
  "Block User": "حظر المستخدم",
  "Reply in thread": "الردّ في المحادثة",
  "Delivered": "تم التسليم",
  "Read": "مقروء",
  "Cancel": "إلغاء",
  "Discard": "تجاهل",
  "Go Back": "رجوع",
  "Keep Account": "الاحتفاظ بالحساب",
  "Keep Chat": "الاحتفاظ بالمحادثة",
  "Keep Ownership": "الاحتفاظ بالملكية",
  "Keep in Group": "الإبقاء في المجموعة",
  "Nevermind": "لا بأس",
  "Stay": "البقاء",
  "Ban Permanently": "حظر دائم",
  "Delete & Exit": "حذف وخروج",
  "Delete Account": "حذف الحساب",
  "Delete Forever": "حذف نهائي",
  "Leave Group": "مغادرة المجموعة",
  "Remove Member": "إزالة العضو",
  "Transfer Now": "نقل الآن",
  "Yes, Block": "نعم، احظر",
  "Link Copied": "تم نسخ الرابط",
  "Message Copied": "تم نسخ الرسالة",
  "Message Deleted": "تم حذف الرسالة",
  "Message Sent": "تم إرسال الرسالة",
  "Your message has been forwarded successfully": "تمت إعادة توجيه رسالتك بنجاح",
  "Add users": "إضافة مستخدمين",
  "Enter a description...": "أدخل وصفًا...",
  "Search conversations...": "ابحث في المحادثات...",
  "Search users": "ابحث عن مستخدمين",
  "Type your message...": "اكتب رسالتك...",
  "Search icons": "ابحث في الأيقونات",
  "Add Link": "إضافة رابط",
  "Edit Link": "تعديل الرابط",
  "Insert Hyperlink": "إدراج رابط تشعّبي",
  "Danger Zone": "منطقة الخطر",
  "Contacts": "جهات الاتصال",
  "Tap to remove": "انقر للإزالة",
  "Assistant": "المساعد",

  /* ─── Base Components: component names (docs page titles) ─── */
  "Action Sheet": "لوحة الإجراءات",
  "Add Members": "إضافة أعضاء",
  "Avatar Group": "مجموعة الصور الرمزية",
  "Ban Member": "حظر عضو",
  "Button": "الزر",
  "Call Item": "عنصر المكالمة",
  "Change Scope": "تغيير النطاق",
  "Checkbox": "مربّع الاختيار",
  "Context Menu": "القائمة السياقية",
  "Conversation Item": "عنصر المحادثة",
  "Conversation Starter": "بادئ المحادثة",
  "Conversation Summary": "ملخّص المحادثة",
  "Create Group": "إنشاء مجموعة",
  "Create Poll": "إنشاء استطلاع",
  "Delete And Exit": "حذف وخروج",
  "Delete Conversation": "حذف المحادثة",
  "Delete User": "حذف المستخدم",
  "Emoji Keyboard": "لوحة الإيموجي",
  "Flag Message Dialog": "مربّع الإبلاغ عن رسالة",
  "Group Item": "عنصر المجموعة",
  "Input": "حقل الإدخال",
  "Introduction": "مقدمة",
  "Join Group": "الانضمام إلى مجموعة",
  "Kick Member": "طرد عضو",
  "Link Dialog": "مربّع الروابط",
  "Message Info": "معلومات الرسالة",
  "Message Preview": "معاينة الرسالة",
  "Multi Line Composer": "محرّر متعدّد الأسطر",
  "Radio Button": "زر الاختيار",
  "Reaction": "التفاعل",
  "Reaction Info": "معلومات التفاعل",
  "Reaction List": "قائمة التفاعلات",
  "Search Bar": "شريط البحث",
  "Single Line Composer": "محرّر بسطر واحد",
  "Smart Replies": "الردود الذكية",
  "Textarea": "منطقة النص",
  "Toast": "الإشعار العابر",
  "Transfer Ownership": "نقل الملكية",
  "Translate Alert": "تنبيه الترجمة",
  "Typing Indicator": "مؤشّر الكتابة",
  "User Item": "عنصر المستخدم",

  /* ─── Base Components: per-story descriptions ─── */
  "**All states** — side-by-side visual reference for all four variants.":
    "**كل الحالات** — مرجع بصري جنبًا إلى جنب للأنماط الأربعة.",
  "**Playground** — use controls to explore every prop.":
    "**ساحة التجربة** — استخدم عناصر التحكّم لاستكشاف كل خاصية.",
  "**Preview** — playback mode after recording stops. Shows a waveform and a play button.":
    "**المعاينة** — وضع التشغيل بعد توقّف التسجيل. يعرض شكل الموجة وزر تشغيل.",
  "**Usage** — HTML & CSS reference for the Multi Line Composer (Voice Note Popup).":
    "**الاستخدام** — مرجع HTML وCSS للمحرّر متعدّد الأسطر (نافذة الملاحظة الصوتية).",
  "Action sheets can contain as few as two items. Useful for simple edit/delete patterns.":
    "يمكن أن تحتوي لوحة الإجراءات على عنصرين فقط. مفيدة لأنماط التعديل والحذف البسيطة.",
  "Active/selected reaction.":
    "تفاعل نشط أو محدَّد.",
  "All categories side by side for comparison.":
    "كل الفئات جنبًا إلى جنب للمقارنة.",
  "All four sizes.":
    "الأحجام الأربعة كلّها.",
  "All modes side by side for comparison.":
    "كل الأوضاع جنبًا إلى جنب للمقارنة.",
  "All patterns side by side.":
    "كل الأنماط جنبًا إلى جنب.",
  "All read receipt states.":
    "كل حالات إيصال القراءة.",
  "All sizes × all hierarchies matrix.":
    "مصفوفة بكل الأحجام وكل التدرّجات.",
  "All states side by side for comparison.":
    "كل الحالات جنبًا إلى جنب للمقارنة.",
  "All states side by side.":
    "كل الحالات جنبًا إلى جنب.",
  "All states stacked for comparison.":
    "كل الحالات مرتّبة عموديًا للمقارنة.",
  "All variants side by side.":
    "كل الأنماط جنبًا إلى جنب.",
  "All variants — matching Figma component set layout.":
    "كل الأنماط — مطابقة لتخطيط مجموعة المكوّنات في Figma.",
  "An optional title can be displayed at the top to provide context about the available actions.":
    "يمكن عرض عنوان اختياري في الأعلى لتوضيح سياق الإجراءات المتاحة.",
  "Animals & Nature category.":
    "فئة الحيوانات والطبيعة.",
  "Avatar variants — different content types and fallback behaviors.":
    "أنماط الصور الرمزية — أنواع محتوى مختلفة وسلوكيات بديلة.",
  "Business/support context with service-related starters.":
    "سياق الأعمال والدعم مع عبارات بدء متعلّقة بالخدمة.",
  "Buttons with leading and trailing icons.":
    "أزرار بأيقونات في البداية والنهاية.",
  "Casual conversation starters with more options (wraps to second line).":
    "عبارات بدء محادثة غير رسمية مع خيارات أكثر (تلتفّ إلى سطر ثانٍ).",
  "Custom placeholder text.":
    "نص نائب مخصّص.",
  "Custom reasons for a different context.":
    "أسباب مخصّصة لسياق مختلف.",
  "Custom width (200px) for longer labels.":
    "عرض مخصّص (200px) للتسميات الأطول.",
  "Date separator chip — shown between message groups.":
    "شريحة فاصل التاريخ — تظهر بين مجموعات الرسائل.",
  "Deleted mode — referencing a deleted message with block icon.":
    "وضع المحذوف — يشير إلى رسالة محذوفة بأيقونة حظر.",
  "Destructive-only variant showing how error styling applies to all items.":
    "نمط تدميري فقط يوضّح كيف يُطبَّق تنسيق الخطأ على كل العناصر.",
  "Edit mode — editing your own message. Blue accent color.":
    "وضع التعديل — تعديل رسالتك. بلون تمييز أزرق.",
  "Error state — when summary generation fails.":
    "حالة الخطأ — عند فشل توليد الملخّص.",
  "Fewer reasons — minimal variant.":
    "أسباب أقل — النمط المبسّط.",
  "Filled state — Create button active (purple).":
    "الحالة المملوءة — زر الإنشاء نشط (بنفسجي).",
  "Filtered view — showing only a specific emoji tab.":
    "عرض مُرشَّح — يُظهر تبويب إيموجي محدّد فقط.",
  "Fixed width (328px) matching Figma's original frame.":
    "عرض ثابت (328px) مطابق للإطار الأصلي في Figma.",
  "Food & Drink category.":
    "فئة الطعام والشراب.",
  "Full-width buttons.":
    "أزرار بعرض كامل.",
  "Group context — shows a user name.":
    "سياق المجموعة — يعرض اسم مستخدم.",
  "Group with add button.":
    "مجموعة مع زر إضافة.",
  "In context — shown above a message composer mock.":
    "في السياق — تظهر أعلى نموذج محرّر الرسائل.",
  "In-context preview showing timestamps inside message bubbles.":
    "معاينة ضمن السياق تُظهر الطوابع الزمنية داخل فقاعات الرسائل.",
  "Interactive playground — use the controls panel to configure.":
    "ساحة تجربة تفاعلية — استخدم لوحة التحكّم للضبط.",
  "Interactive playground.":
    "ساحة تجربة تفاعلية.",
  "Interactive states for Primary.":
    "الحالات التفاعلية للنمط الأساسي.",
  "Link copied confirmation.":
    "تأكيد نسخ الرابط.",
  "Loaded state — reply suggestions displayed.":
    "حالة التحميل المكتمل — تُعرض اقتراحات الردّ.",
  "Loading state — skeleton placeholders while AI generates the summary.":
    "حالة التحميل — عناصر نائبة هيكلية أثناء توليد الذكاء الاصطناعي للملخّص.",
  "Long message text — demonstrates truncation.":
    "نص رسالة طويل — يوضّح الاقتطاع.",
  "Long summary text that wraps multiple lines.":
    "نص ملخّص طويل يلتفّ على عدّة أسطر.",
  "Longer message text.":
    "نص رسالة أطول.",
  "Many emoji types with several reactors.":
    "أنواع إيموجي متعدّدة مع عدّة متفاعلين.",
  "Many reactors with overflow.":
    "متفاعلون كُثر مع فائض.",
  "HTML & CSS usage reference for the Action Sheet component.":
    "مرجع استخدام HTML وCSS لمكوّن لوحة الإجراءات.",
  "HTML & CSS usage reference for the Avatar Group component.":
    "مرجع استخدام HTML وCSS لمكوّن مجموعة الصور الرمزية.",
  "HTML & CSS usage reference for the Context Menu component.":
    "مرجع استخدام HTML وCSS لمكوّن القائمة السياقية.",
  "HTML & CSS usage reference for the Conversation Starter component.":
    "مرجع استخدام HTML وCSS لمكوّن بادئ المحادثة.",
  "HTML & CSS usage reference for the Conversation Summary component.":
    "مرجع استخدام HTML وCSS لمكوّن ملخّص المحادثة.",
  "HTML & CSS usage reference for the Create Poll component.":
    "مرجع استخدام HTML وCSS لمكوّن إنشاء الاستطلاع.",
  "HTML & CSS usage reference for the Date Timestamp component.":
    "مرجع استخدام HTML وCSS لمكوّن الطابع الزمني للتاريخ.",
  "HTML & CSS usage reference for the Emoji Keyboard component.":
    "مرجع استخدام HTML وCSS لمكوّن لوحة الإيموجي.",
  "HTML & CSS usage reference for the Flag Message Dialog component.":
    "مرجع استخدام HTML وCSS لمكوّن مربّع الإبلاغ عن رسالة.",
  "HTML & CSS usage reference for the Message Preview component.":
    "مرجع استخدام HTML وCSS لمكوّن معاينة الرسالة.",
  "HTML & CSS usage reference for the Radio Button component.":
    "مرجع استخدام HTML وCSS لمكوّن زر الاختيار.",
  "HTML & CSS usage reference for the Reaction Info component.":
    "مرجع استخدام HTML وCSS لمكوّن معلومات التفاعل.",
  "HTML & CSS usage reference for the Reaction List component.":
    "مرجع استخدام HTML وCSS لمكوّن قائمة التفاعلات.",
  "HTML & CSS usage reference for the Typing Indicator component.":
    "مرجع استخدام HTML وCSS لمكوّن مؤشّر الكتابة.",
  "Interactive playground — use the controls panel to configure the Action Sheet.":
    "ساحة تجربة تفاعلية — استخدم لوحة التحكّم لضبط لوحة الإجراءات.",
  "Interactive playground — use the controls panel to configure the Avatar.":
    "ساحة تجربة تفاعلية — استخدم لوحة التحكّم لضبط الصورة الرمزية.",
  "Interactive playground — use the controls panel to configure the Button.":
    "ساحة تجربة تفاعلية — استخدم لوحة التحكّم لضبط الزر.",
  "Interactive playground — use the controls panel to configure the Context Menu.":
    "ساحة تجربة تفاعلية — استخدم لوحة التحكّم لضبط القائمة السياقية.",

  /* ─── Base Components: full sweep ─── */
  "Aaron Scott": "عادل سعيد",
  "Alex Mason": "أمين ماهر",
  "Alice": "عالية",
  "Alice Johnson": "عالية حسن",
  "Andrew Joseph": "أنور يوسف",
  "Anna Lane": "آية لين",
  "Avery Quinn": "أفنان قاسم",
  "Bob Smith": "بدر سمير",
  "Brian Michael": "براء ميخائيل",
  "Cameron Lee": "كريم لي",
  "Camilla Juliette": "كاميليا جوليت",
  "Charles Dean": "شريف دين",
  "Charlie Brown": "شادي براون",
  "Chris Nolan": "كريم نولان",
  "David Miller": "داوود ميلر",
  "Diana Prince": "ديانا برنس",
  "Emma Davis": "إيمان ديفيس",
  "Emma Rose": "إيمان رose",
  "Evan Parker": "عدنان باركر",
  "Eve Wilson": "إيفا ويلسون",
  "Example User": "مستخدم تجريبي",
  "George Alan": "جورج آلان",
  "Jane": "جنى",
  "Jane Smith": "جنى سمير",
  "Jessica Lane": "جيسيكا لين",
  "John Doe": "فلان الفلاني",
  "John Smith": "يوحنا سميث",
  "Mia Ward": "ميّا وارد",
  "Michael Brown": "ميخائيل براون",
  "Michael Scott": "ميخائيل سكوت",
  "Nancy Grace": "نانسي غريس",
  "Olivia Rhye": "أوليفيا راي",
  "Pourav Raj": "بوراف راج",
  "Robert Wilson": "روبرت ويلسون",
  "Safiya Ahmed": "صفيّة أحمد",
  "Sophia Williams": "صوفيا وليامز",
  "Susan Marie": "سوزان ماري",
  "Tessa Johnson": "تيسا جونسون",
  "You": "أنت",
  "Artistic Design": "التصميم الفنّي",
  "Bright Mind": "العقل المتألّق",
  "Code Craze": "جنون البرمجة",
  "Epic Game": "اللعبة الملحمية",
  "Health Haven": "واحة الصحة",
  "Innovative Online Shopping": "التسوّق الإلكتروني المبتكر",
  "12 Members": "12 عضوًا",
  "24 Members": "24 عضوًا",
  "44 Members": "44 عضوًا",
  "56 Members": "56 عضوًا",
  "248 Members": "248 عضوًا",
  "1,024 Members": "1,024 عضوًا",
  "1 Action + More": "إجراء واحد + المزيد",
  "2 Actions + More": "إجراءان + المزيد",
  "3 Actions + More": "3 إجراءات + المزيد",
  "All 1": "الكل 1",
  "All 5": "الكل 5",
  "All 8": "الكل 8",
  "Small": "صغير",
  "Medium": "متوسّط",
  "Large": "كبير",
  "Extra large": "كبير جدًا",
  "Small (16px)": "صغير (16px)",
  "Medium (20px)": "متوسّط (20px)",
  "Secondary": "ثانوي",
  "Tertiary": "ثالثي",
  "Link": "رابط",
  "Link color": "رابط ملوّن",
  "Link gray": "رابط رمادي",
  "Disabled": "معطّل",
  "Loaded": "محمَّل",
  "Empty": "فارغ",
  "Text": "نص",
  "Text Only": "نص فقط",
  "Dropdown": "قائمة منسدلة",
  "Option": "خيار",
  "Private": "خاصة",
  "Public": "عامة",
  "Public (Default)": "عامة (افتراضي)",
  "Private (all sizes)": "خاصة (كل الأحجام)",
  "Protected (all sizes)": "محميّة (كل الأحجام)",
  "Protected (with Password)": "محميّة (بكلمة مرور)",
  "Online (all sizes)": "متصل (كل الأحجام)",
  "Online Indicator": "مؤشّر الاتصال",
  "Status — Online": "الحالة — متصل",
  "Status — Offline": "الحالة — غير متصل",
  "Add an option": "إضافة خيار",
  "Add attachment": "إضافة مرفق",
  "Add emoji": "إضافة إيموجي",
  "Add item": "إضافة عنصر",
  "Add reaction": "إضافة تفاعل",
  "Add user": "إضافة مستخدم",
  "Ask a question": "اطرح سؤالًا",
  "Ban": "حظر",
  "Block": "حظر",
  "Continue": "متابعة",
  "Create": "إنشاء",
  "Create account": "إنشاء حساب",
  "Dismiss": "تجاهل",
  "Kick": "طرد",
  "Leave": "مغادرة",
  "Pause": "إيقاف مؤقّت",
  "Play": "تشغيل",
  "Reorder": "إعادة الترتيب",
  "Retry": "إعادة المحاولة",
  "Send": "إرسال",
  "Sign in": "تسجيل الدخول",
  "Skip for now": "تخطَّ الآن",
  "Remove option": "إزالة الخيار",
  "Delete recording": "حذف التسجيل",
  "Pause recording": "إيقاف التسجيل مؤقّتًا",
  "Stop recording": "إيقاف التسجيل",
  "Voice record": "تسجيل صوتي",
  "Close summary": "إغلاق الملخّص",
  "Conversation options": "خيارات المحادثة",
  "Suggest a reply": "اقترح ردًّا",
  "Toggle password visibility": "إظهار كلمة المرور أو إخفاؤها",
  "Search messages...": "ابحث في الرسائل...",
  "Report a message": "الإبلاغ عن رسالة",
  "Reaction details": "تفاصيل التفاعل",
  "Delete Conversation?": "حذف المحادثة؟",
  "Delete User?": "حذف المستخدم؟",
  "Ban Member?": "حظر العضو؟",
  "Kick Member?": "طرد العضو؟",
  "Leave Group?": "مغادرة المجموعة؟",
  "Delete and Exit?": "حذف وخروج؟",
  "Block this contact?": "حظر جهة الاتصال هذه؟",
  "Translate Message?": "ترجمة الرسالة؟",
  "Block Alert": "تنبيه الحظر",
  "Error Alert": "تنبيه خطأ",
  "Info Alert": "تنبيه معلوماتي",
  "Warning Alert": "تنبيه تحذيري",
  "Confirm Dialog": "مربّع تأكيد",
  "Ownership Transfer": "نقل الملكية",
  "Are you sure you want to delete this conversation? This action cannot be undone.":
    "هل تريد بالتأكيد حذف هذه المحادثة؟ لا يمكن التراجع عن هذا الإجراء.",
  "Are you sure you want to delete this user? This action cannot be undone.":
    "هل تريد بالتأكيد حذف هذا المستخدم؟ لا يمكن التراجع عن هذا الإجراء.",
  "Are you sure you want to kick this member from the group?":
    "هل تريد بالتأكيد طرد هذا العضو من المجموعة؟",
  "All messages in this chat will be permanently removed. This cannot be undone.":
    "ستُحذف جميع الرسائل في هذه المحادثة نهائيًا. لا يمكن التراجع عن ذلك.",
  "Would you like to translate this message to your preferred language?":
    "هل تريد ترجمة هذه الرسالة إلى لغتك المفضّلة؟",
  "You can change roles to manage group permissions and responsibilities.":
    "يمكنك تغيير الأدوار لإدارة صلاحيات المجموعة ومسؤولياتها.",
  "You've reached the limit. You can add up to 12 options.":
    "لقد بلغت الحدّ الأقصى. يمكنك إضافة 12 خيارًا كحدّ أقصى.",
  "Please fill in all required fields before creating a poll.":
    "يُرجى تعبئة جميع الحقول المطلوبة قبل إنشاء الاستطلاع.",
  "Report this chat if it goes against our Community Standards. We won't tell the account you reported them.":
    "أبلِغ عن هذه المحادثة إذا كانت تخالف معايير مجتمعنا. لن نُخبر صاحب الحساب بأنك أبلغت عنه.",
  "Something went wrong while loading the user list. Please try again.":
    "حدث خطأ أثناء تحميل قائمة المستخدمين. يُرجى المحاولة مرّة أخرى.",
  "Unable to load users": "تعذّر تحميل المستخدمين",
  "No users yet": "لا يوجد مستخدمون بعد",
  "Users will appear here once they join your workspace or organization.":
    "سيظهر المستخدمون هنا بمجرّد انضمامهم إلى مساحة عملك أو مؤسّستك.",
  "(Optional)": "(اختياري)",
  "Password": "كلمة المرور",
  "Question": "السؤال",
  "Reason": "السبب",
  "Type": "النوع",
  "Group Name": "اسم المجموعة",
  "Group Password": "كلمة مرور المجموعة",
  "New Group": "مجموعة جديدة",
  "Enter group name": "أدخل اسم المجموعة",
  "Enter group password": "أدخل كلمة مرور المجموعة",
  "Enter password": "أدخل كلمة المرور",
  "Enter value": "أدخل قيمة",
  "Provide additional context for your report...": "قدّم سياقًا إضافيًا لبلاغك...",
  "Provide more context...": "قدّم مزيدًا من السياق...",
  "Save login details.": "احفظ بيانات تسجيل الدخول.",
  "Audio Message": "رسالة صوتية",
  "File Message": "رسالة ملف",
  "Photo Message": "رسالة صورة",
  "Video Message": "رسالة فيديو",
  "Voice Note": "ملاحظة صوتية",
  "Missed Video Call": "مكالمة فيديو فائتة",
  "Sent (single tick)": "مُرسَلة (علامة واحدة)",
  "Delivered (double tick)": "تم التسليم (علامتان)",
  "Read (blue double tick)": "مقروءة (علامتان زرقاوان)",
  "Delivered Only": "تم التسليم فقط",
  "Deleted": "محذوفة",
  "Sender name.": "اسم المرسِل",
  "Sender Label (group chat)": "تسمية المرسِل (محادثة جماعية)",
  "Message Status — Sending": "حالة الرسالة — قيد الإرسال",
  "Message Status — Sent": "حالة الرسالة — مُرسَلة",
  "Message Status — Delivered": "حالة الرسالة — تم التسليم",
  "Message Status — Read": "حالة الرسالة — مقروءة",
  "Message Status — Error": "حالة الرسالة — خطأ",
  "Reaction Added": "تمت إضافة تفاعل",
  "Active (user reacted)": "نشط (تفاعل المستخدم)",
  "Sure! Sending them over now.": "بالتأكيد! سأرسلها الآن.",
  "I'll take it. Can you ship it?": "سآخذها. هل يمكنك شحنها؟",
  "Yes, it's available.": "نعم، إنها متاحة.",
  "Array of action items with icon (ReactNode), label, and optional onClick/destructive.":
    "مصفوفة من عناصر الإجراءات تضمّ أيقونة (ReactNode) وتسمية، مع onClick أو destructive اختياريًا.",
  "Array of menu items with icon, label, and optional destructive flag.":
    "مصفوفة من عناصر القائمة تضمّ أيقونة وتسمية، مع علامة destructive اختيارية.",
  "Array of suggested conversation starter messages.":
    "مصفوفة من رسائل بدء المحادثة المقترحة.",
  "Array of suggested reply texts.": "مصفوفة من نصوص الردود المقترحة.",
  "Auto-dismiss duration in ms. 0 to disable.":
    "مدّة الإخفاء التلقائي بالمللي ثانية. القيمة 0 لتعطيلها.",
  "Button label.": "تسمية الزر.",
  "Callback when the sheet is dismissed.": "دالة تُستدعى عند إغلاق اللوحة.",
  "Context type.": "نوع السياق.",
  "Controlled input value.": "قيمة الإدخال المتحكَّم بها.",
  "Current state of the recorder.": "الحالة الحالية للمُسجِّل.",
  "Disable the button.": "تعطيل الزر.",
  "Display pattern.": "نمط العرض.",
  "Duration string (e.g. '00:32').": "سلسلة المدّة (مثل '00:32').",
  "Duration string shown in the popup (e.g. `00:00:10`).":
    "سلسلة المدّة المعروضة في النافذة (مثل `00:00:10`).",
  "Error message to display.": "رسالة الخطأ المراد عرضها.",
  "Initially active tab key.": "مفتاح التبويب النشط ابتداءً.",
  "Label text below names.": "نص التسمية أسفل الأسماء.",
  "List of names who reacted.": "قائمة بأسماء من تفاعلوا.",
  "List of reactor items.": "قائمة بعناصر المتفاعلين.",
  "Max names shown before +N.": "أقصى عدد أسماء يُعرض قبل ‎+N.",
  "Maximum options allowed.": "أقصى عدد خيارات مسموح به.",
  "Message text being quoted/edited.": "نص الرسالة المقتبَسة أو المُعدَّلة.",
  "Number of people (for multiple context).": "عدد الأشخاص (لسياق التعدّد).",
  "Optional title at the top.": "عنوان اختياري في الأعلى.",
  "Optional title displayed at the top.": "عنوان اختياري يُعرض في الأعلى.",
  "Placeholder text.": "نص نائب.",
  "Placeholder text for the input area.": "نص نائب لمنطقة الإدخال.",
  "Pre-defined report reasons.": "أسباب إبلاغ محدّدة مسبقًا.",
  "Predefined set of items to display.": "مجموعة عناصر محدّدة مسبقًا للعرض.",
  "Preview mode.": "وضع المعاينة.",
  "Reaction count.": "عدد التفاعلات.",
  "Read receipt status.": "حالة إيصال القراءة.",
  "Render as full-width.": "العرض بعرض كامل.",
  "Render as icon-only (square).": "العرض كأيقونة فقط (مربّع).",
  "Show back arrow button.": "إظهار زر سهم الرجوع.",
  "Show clear button when input has value.": "إظهار زر المسح عند وجود قيمة.",
  "Show spinner and disable interaction.": "إظهار مؤشّر التحميل وتعطيل التفاعل.",
  "Show the kebab menu button.": "إظهار زر قائمة الخيارات.",
  "Size preset (height: sm=36, md=40, lg=44, xl=48).":
    "حجم مُعدّ مسبقًا (الارتفاع: sm=36، md=40، lg=44، xl=48).",
  "Tabs to display (e.g. 'All 5', '😍 3').": "التبويبات المعروضة (مثل 'All 5' و'😍 3').",
  "The emoji character.": "حرف الإيموجي.",
  "The emoji that was reacted with.": "الإيموجي المستخدَم في التفاعل.",
  "The message to display.": "الرسالة المراد عرضها.",
  "The summary text content.": "محتوى نص الملخّص.",
  "The timestamp text to display.": "نص الطابع الزمني المراد عرضه.",
  "Title text.": "نص العنوان.",
  "User name (for group context).": "اسم المستخدم (لسياق المجموعة).",
  "Visual hierarchy.": "التدرّج البصري.",
  "Visual variant based on context.": "النمط البصري حسب السياق.",
  "Whether replies are loading.": "ما إذا كانت الردود قيد التحميل.",
  "Whether selected by current user.": "ما إذا كان المستخدم الحالي قد حدّده.",
  "Whether the action sheet is visible.": "ما إذا كانت لوحة الإجراءات ظاهرة.",
  "Whether the component is visible.": "ما إذا كان المكوّن ظاهرًا.",
  "Whether the dialog is visible.": "ما إذا كان مربّع الحوار ظاهرًا.",
  "Whether the keyboard is visible.": "ما إذا كانت اللوحة ظاهرة.",
  "Whether the menu is visible.": "ما إذا كانت القائمة ظاهرة.",
  "Whether the summary is loading.": "ما إذا كان الملخّص قيد التحميل.",
  "Whether the toast is visible.": "ما إذا كان الإشعار ظاهرًا.",
  "Whether to show read receipt icon.": "ما إذا كانت أيقونة إيصال القراءة تُعرض.",
  "Whether to show the bottom arrow.": "ما إذا كان السهم السفلي يُعرض.",
  "Width in pixels.": "العرض بالبكسل.",
  "Width of the action sheet in pixels.": "عرض لوحة الإجراءات بالبكسل.",
  "Width of the menu in pixels.": "عرض القائمة بالبكسل.",
  "Activity type.": "نوع النشاط.",
  "Action — Video": "إجراء — فيديو",
  "Action — Voice": "إجراء — صوت",
  "Video Action": "إجراء فيديو",
  "Avatar": "الصورة الرمزية",
  "Avatar Label Group": "مجموعة الصور الرمزية المعنونة",
  "Avatar Variants": "أنماط الصور الرمزية",
  "Avatar — Icon": "صورة رمزية — أيقونة",
  "Avatar — Image": "صورة رمزية — صورة",
  "Avatar — Text": "صورة رمزية — نص",
  "Group Avatar Label Group": "مجموعة الصور الرمزية المعنونة للمجموعات",
  "Group Icons": "أيقونات المجموعات",
  "Alphabet List": "القائمة الأبجدية",
  "Group List": "قائمة المجموعات",
  "List Item": "عنصر القائمة",
  "Back Button — No Actions": "زر الرجوع — بلا إجراءات",
  "With Back Button": "مع زر الرجوع",
  "With Conversation Meta": "مع بيانات المحادثة",
  "Conversation Meta (kebab)": "بيانات المحادثة (قائمة الخيارات)",
  "More Button Only": "زر المزيد فقط",
  "More Only": "المزيد فقط",
  "No Actions": "بلا إجراءات",
  "One Action": "إجراء واحد",
  "Two Actions": "إجراءان",
  "Trigger button (kebab icon)": "زر التشغيل (أيقونة الخيارات)",
  "Custom Description": "وصف مخصّص",
  "Custom Labels": "تسميات مخصّصة",
  "Custom Title": "عنوان مخصّص",
  "Long Title": "عنوان طويل",
  "Long Title (Truncated)": "عنوان طويل (مقتطَع)",
  "Date Type — Date": "نوع التاريخ — تاريخ",
  "Date Type — Time": "نوع التاريخ — وقت",
  "DateTime": "التاريخ والوقت",
  "Empty Name (No Initials)": "اسم فارغ (بلا أحرف أولى)",
  "Empty name — no status": "اسم فارغ — بلا حالة",
  "Empty name — online indicator": "اسم فارغ — مؤشّر اتصال",
  "Initials — Multi-Word Name (JD)": "أحرف أولى — اسم متعدّد الكلمات (JD)",
  "Initials — Single-Word Name (AL)": "أحرف أولى — اسم من كلمة واحدة (AL)",
  "Text (initials) — no status": "نص (أحرف أولى) — بلا حالة",
  "Text (initials) — online indicator": "نص (أحرف أولى) — مؤشّر اتصال",
  "With Image": "مع صورة",
  "With image — no status icon": "مع صورة — بلا أيقونة حالة",
  "With image — online indicator": "مع صورة — مؤشّر اتصال",
  "Broken Image URL (Fallback to EU)": "رابط صورة معطوب (بديل إلى EU)",
  "Broken image URL (fallback to initials)": "رابط صورة معطوب (بديل إلى الأحرف الأولى)",
  "Group (with name)": "مجموعة (باسم)",
  "Group — Partially Read": "مجموعة — مقروءة جزئيًا",
  "Group — Unread": "مجموعة — غير مقروءة",
  "Group Type — Private": "نوع المجموعة — خاصة",
  "Group Type — Protected": "نوع المجموعة — محميّة",
  "Group Type — Public": "نوع المجموعة — عامة",
  "Group Message Info": "معلومات رسالة المجموعة",
  "Moderator Selected": "تم تحديد مشرف",
  "Limited Roles (Admin & Participant only)": "أدوار محدودة (مسؤول ومشارك فقط)",
  "Radio Group": "مجموعة أزرار الاختيار",
  "Large — Private": "كبير — خاصة",
  "Large — Protected": "كبير — محميّة",
  "Large — Public": "كبير — عامة",
  "Large — no status": "كبير — بلا حالة",
  "Large — online": "كبير — متصل",
  "Medium — Private": "متوسّط — خاصة",
  "Medium — Protected": "متوسّط — محميّة",
  "Medium — Public": "متوسّط — عامة",
  "Medium — no status": "متوسّط — بلا حالة",
  "Medium — online": "متوسّط — متصل",
  "Small — Private": "صغير — خاصة",
  "Small — Protected": "صغير — محميّة",
  "Small — Public": "صغير — عامة",
  "Small — no status": "صغير — بلا حالة",
  "Small — online": "صغير — متصل",
  "XL — Private": "كبير جدًا — خاصة",
  "XL — Protected": "كبير جدًا — محميّة",
  "XL — Public": "كبير جدًا — عامة",
  "XL — no status": "كبير جدًا — بلا حالة",
  "XL — online": "كبير جدًا — متصل",
  "Icon left": "أيقونة في البداية",
  "Icon right": "أيقونة في النهاية",
  "Without Icons": "بلا أيقونات",
  "Without Icons — Error": "بلا أيقونات — خطأ",
  "Filled — Error": "مملوء — خطأ",
  "Placeholder — Error": "نص نائب — خطأ",
  "With Password Visible": "مع إظهار كلمة المرور",
  "With Prefilled Text": "مع نص مُعبّأ مسبقًا",
  "With Sender Label": "مع تسمية المرسِل",
  "Search Active": "البحث نشط",
  "No Selection": "بلا تحديد",
  "Skeleton": "هيكل تحميل",
  "Skeleton — End": "هيكل تحميل — النهاية",
  "Skeleton — Start": "هيكل تحميل — البداية",
  "Overflow (+5)": "فائض (+5)",
  "Filtered (👍)": "مُرشَّح (👍)",
  "Active emoji category.": "فئة الإيموجي النشطة.",
  "Very Long Chat Group Name That Should Truncate":
    "اسم مجموعة محادثة طويل جدًا ينبغي أن يُقتطع",
  "Very Long Chat Group Name That Truncates": "اسم مجموعة محادثة طويل جدًا يُقتطع",
  "Base Components": "المكوّنات الأساسية",
  "Available Classes": "الفئات المتاحة",
  "Child Elements": "العناصر الفرعية",
  "Composition pattern": "نمط التركيب",
  "Design principles": "مبادئ التصميم",
  "Import & use": "الاستيراد والاستخدام",
  "Error Boundary": "حدّ الخطأ",
  "Fullscreen Viewer": "عارض ملء الشاشة",
  "Link Popover": "نافذة الرابط المنبثقة",
  "Media Recorder": "مُسجِّل الوسائط",
  "Thread": "المحادثة المتفرّعة",
  "Thread View": "عرض المحادثة المتفرّعة",
  "Popover": "نافذة منبثقة",
  "Activity Status": "حالة النشاط",
  "Conversation summary": "ملخّص المحادثة",
  "In context (below a message)": "في السياق (أسفل رسالة)",
  "In context — appears on message hover": "في السياق — تظهر عند التحويم على الرسالة",
  "28 base components form the atomic layer. Each is documented with interactive controls, accessibility notes, and usage guidelines.":
    "يشكّل 28 مكوّنًا أساسيًا الطبقة الذرّية. كلٌّ منها موثّق بعناصر تحكّم تفاعلية وملاحظات عن إمكانية الوصول وإرشادات للاستخدام.",
  "Reusable, atomic UI components built on top of the foundation tokens.\n            These are the building blocks for every feature and screen — buttons,\n            inputs, labels, tags, and more. Each component consumes foundation\n            tokens directly and exposes a clean, composable API.":
    "مكوّنات واجهة ذرّية قابلة لإعادة الاستخدام، مبنية فوق رموز الأساسيات. هذه هي لبنات البناء لكل ميزة وشاشة — الأزرار وحقول الإدخال والتسميات والوسوم وغيرها. يستهلك كل مكوّن رموز الأساسيات مباشرةً ويوفّر واجهة برمجية نظيفة وقابلة للتركيب.",

  /* ─── Dialog titles carrying a Latin @handle ─── */
  "Ban @toxic_user from Community?": "حظر ‎@toxic_user من المجتمع؟",
  "Block @john_doe?": "حظر ‎@john_doe؟",
  "Delete @jane_smith?": "حذف ‎@jane_smith؟",
  "Delete Chat with John?": "حذف المحادثة مع John؟",
  "Delete and Exit Marketing Chat?": "حذف محادثة التسويق والخروج منها؟",
  "Leave Project Alpha?": "مغادرة Project Alpha؟",
  "Remove from Design Team?": "الإزالة من فريق التصميم؟",
  "Transfer Ownership to @alex_admin?": "نقل الملكية إلى ‎@alex_admin؟",

  /* ─── Base Components: docs-page descriptions ─── */
  "A dialog for creating a new poll. Includes a question input, dynamic option list with drag handles, emoji buttons, delete buttons, an \"Add an option\" link, error states, and Cancel/Create action buttons. **Structure (from Figma):** - Container: 420px, `--radius-3xl` (20px), `--shadow-lg` - Header: 64px, \"Create Poll\" (20px, bold), close X, border-bottom - Question: label (16px, medium) + rounded input (14px, border `--color-neutral-200`) - Options: drag handle (≡) + rounded input with emoji icon (😊) + X delete button - \"+ Add an option\": ⊕ icon + text in `--color-ep-600` - Error: pink banner (`--color-error-50` bg) with error icon + message - Buttons: Cancel (outlined) + Create (disabled: gray / active: `--color-ep-600`) - Max options: 12 **States:** - Empty — 2 blank options, Create disabled - Filled — question + options filled, Create active (purple) - Validation error — \"Please fill in all required fields before creating a poll.\" - Max limit — \"You've reached the limit. You can add up to 12 options.\"":
    "مربّع حوار لإنشاء استطلاع جديد. يضمّ حقل السؤال، وقائمة خيارات ديناميكية بمقابض سحب، وأزرار إيموجي، وأزرار حذف، ورابط «إضافة خيار»، وحالات الخطأ، وزرَّي الإلغاء والإنشاء. **البنية (من Figma):** - الحاوية: 420px، `--radius-3xl` (20px)، `--shadow-lg` - الترويسة: 64px، \"Create Poll\" (20px، عريض)، زر إغلاق X، حدّ سفلي - السؤال: تسمية (16px، متوسط) + حقل مستدير (14px، حدّ `--color-neutral-200`) - الخيارات: مقبض سحب (≡) + حقل مستدير بأيقونة إيموجي (😊) + زر حذف X - «+ إضافة خيار»: أيقونة ⊕ ونص بلون `--color-ep-600` - الخطأ: شريط وردي (خلفية `--color-error-50`) بأيقونة خطأ ورسالة - الأزرار: إلغاء (محدّد بإطار) + إنشاء (معطّل: رمادي / نشط: `--color-ep-600`) - أقصى عدد خيارات: 12 **الحالات:** - فارغ — خياران فارغان، وزر الإنشاء معطّل - مملوء — السؤال والخيارات مُعبّأة، وزر الإنشاء نشط (بنفسجي) - خطأ تحقّق — \"Please fill in all required fields before creating a poll.\" - بلوغ الحدّ — \"You've reached the limit. You can add up to 12 options.\"",
  "The timestamp shown inside message bubbles, indicating when a message was sent. Compact inline element that sits below or beside the message text. **Structure (from Figma):** - Size: Hug content × 24px height - Font: 12px (`--font-size-1`), weight 400, line-height 16px (`--line-height-caption-2`) - Color: `--color-neutral-500` (#717680) - Optional read receipt icon (16×16) with 2px gap **Variants:** - `sent` — timestamp on sent messages (gray, may include read receipts) - `received` — timestamp on received messages (gray) - `separator` — date separator chip between message groups (\"Today\", \"Yesterday\") **Patterns:** - `time` — \"4:56 pm\", \"10:30 am\" - `date` — \"12 Jan\", \"5 Mar 2024\" - `datetime` — \"12 Jan, 4:56 pm\" - `relative` — \"Just now\", \"2 min ago\"":
    "الطابع الزمني المعروض داخل فقاعات الرسائل، ويوضّح وقت إرسال الرسالة. عنصر مضغوط ضمن السطر يقع أسفل نص الرسالة أو بجانبه. **البنية (من Figma):** - الحجم: بمقدار المحتوى × ارتفاع 24px - الخط: 12px (`--font-size-1`)، وزن 400، ارتفاع سطر 16px (`--line-height-caption-2`) - اللون: `--color-neutral-500` (#717680) - أيقونة إيصال قراءة اختيارية (16×16) بفجوة 2px **الأنماط:** - `sent` — طابع زمني على الرسائل المُرسَلة (رمادي، قد يتضمّن إيصالات القراءة) - `received` — طابع زمني على الرسائل الواردة (رمادي) - `separator` — شريحة فاصل تاريخ بين مجموعات الرسائل (\"اليوم\"، \"أمس\") **الأشكال:** - `time` — \"4:56 م\"، \"10:30 ص\" - `date` — \"12 يناير\"، \"5 مارس 2024\" - `datetime` — \"12 يناير، 4:56 م\" - `relative` — \"الآن\"، \"قبل دقيقتين\"",
  "An emoji picker popup with categories, search, and a grid of selectable emojis. Appears above the message composer when the emoji icon is clicked. **Structure (from Figma node 4105:547232 → Emoji Popup):** - Container: 300px × 348px, `--radius-3xl` (20px), `--shadow-lg`, border `--color-neutral-100` - Category label: 14px, weight 400, `--color-neutral-600` - Search: 28px height, `--radius-full`, `--color-neutral-100` bg - Emoji grid: 24px emojis, 12px horizontal gap, 8px vertical gap, 10 per row - Category tabs: 32px icons, 8px gap, active has `--color-ep-100` bg + `--radius-md` **Categories:** Recents, Smileys & People, Animals & Nature, Food & Drink, Activity, Travel & Places, Objects, Symbols, Flags":
    "نافذة منبثقة لاختيار الإيموجي مع الفئات والبحث وشبكة من الإيموجي القابلة للتحديد. تظهر أعلى محرّر الرسائل عند النقر على أيقونة الإيموجي. **البنية (من عقدة Figma رقم 4105:547232 ← Emoji Popup):** - الحاوية: 300px × 348px، `--radius-3xl` (20px)، `--shadow-lg`، حدّ `--color-neutral-100` - تسمية الفئة: 14px، وزن 400، `--color-neutral-600` - البحث: ارتفاع 28px، `--radius-full`، خلفية `--color-neutral-100` - شبكة الإيموجي: إيموجي 24px، فجوة أفقية 12px، فجوة رأسية 8px، 10 في الصف - تبويبات الفئات: أيقونات 32px، فجوة 8px، والنشط له خلفية `--color-ep-100` و`--radius-md` **الفئات:** المستخدمة مؤخّرًا، الوجوه والأشخاص، الحيوانات والطبيعة، الطعام والشراب، الأنشطة، السفر والأماكن، الأشياء، الرموز، الأعلام",
  "A dialog for reporting or flagging inappropriate messages. Presents selectable reason badges, an optional text area for additional context, and cancel/report actions. **Structure (from Figma node 4090:860298):** - Container: 400px, `--radius-3xl` (20px), `--shadow-lg`, border `--color-neutral-100` - Header: title (20px, bold, `--color-neutral-900`), close icon (24px), description (14px, `--color-neutral-700`) - Badges: pill-shaped (`--radius-full`), border `--color-neutral-200`, 14px medium text, wrap layout - Selected badge: `--color-ep-50` bg, `--color-ep-300` border, `--color-ep-700` text - Text area: `--color-neutral-50` bg, `--radius-md`, border `--color-neutral-100`, placeholder in `--color-neutral-600` - Cancel: outlined button, Report: disabled (`--color-neutral-200` bg) until a reason is selected, then `--color-error` bg":
    "مربّع حوار للإبلاغ عن الرسائل غير اللائقة. يعرض شارات أسباب قابلة للتحديد، ومنطقة نص اختيارية لسياق إضافي، وإجراءَي الإلغاء والإبلاغ. **البنية (من عقدة Figma رقم 4090:860298):** - الحاوية: 400px، `--radius-3xl` (20px)، `--shadow-lg`، حدّ `--color-neutral-100` - الترويسة: عنوان (20px، عريض، `--color-neutral-900`)، أيقونة إغلاق (24px)، وصف (14px، `--color-neutral-700`) - الشارات: بشكل حبّة دواء (`--radius-full`)، حدّ `--color-neutral-200`، نص 14px متوسط، تخطيط ملتفّ - الشارة المحدَّدة: خلفية `--color-ep-50`، حدّ `--color-ep-300`، نص `--color-ep-700` - منطقة النص: خلفية `--color-neutral-50`، `--radius-md`، حدّ `--color-neutral-100`، نص نائب بلون `--color-neutral-600` - إلغاء: زر بإطار، إبلاغ: معطّل (خلفية `--color-neutral-200`) حتى يُحدَّد سبب، ثم خلفية `--color-error`",
  "The **Voice Note Popup** lets users record, pause, stop, and preview a voice message. ### States | State | Circle | Rings | Center button | |---|---|---|---| | `idle` | Lavender (`ep-200`) | None | Mic | | `recording` | Purple (`ep-600`) | Pulsing outer + inner | Pause | | `paused` | Purple (`ep-600`) | Inner only (static) | Mic | | `preview` | — | — | Play + waveform |":
    "تتيح **نافذة الملاحظة الصوتية** للمستخدمين تسجيل رسالة صوتية وإيقافها مؤقّتًا وإنهاءها ومعاينتها. ### الحالات | الحالة | الدائرة | الحلقات | الزر الأوسط | |---|---|---|---| | `idle` | بنفسجي فاتح (`ep-200`) | بلا | ميكروفون | | `recording` | بنفسجي (`ep-600`) | نبض خارجي وداخلي | إيقاف مؤقّت | | `paused` | بنفسجي (`ep-600`) | داخلية فقط (ثابتة) | ميكروفون | | `preview` | — | — | تشغيل + شكل موجة |",
  "A single-line message composer with inline voice recording controls. Shows the recording waveform, duration timer, and action buttons inline with the message input area. **Structure (from Figma node 191:21271):** - Container: full-width, border `#e9eaeb`, radius-md (8px), px-12 py-6 - Left: add icon (20px, `#a4a7ae`) + placeholder text (14px, `#717680`) - Mic icon: 24px, `#a4a7ae` - Recording area: status icon + duration (14px, `#414651`) + waveform (`#6852d6`) + action btn - Send button: 36px circle, disabled (`#f5f5f5`) or active (`#6852d6`) **States:** - Recording: red dot (pulsing) + timer + waveform + pause btn + send - Paused: play btn (purple) + \"00:00\" + waveform + delete btn + send - Playing: pause btn (purple) + timer + waveform + delete btn + send":
    "محرّر رسائل بسطر واحد مع عناصر تحكّم للتسجيل الصوتي ضمن السطر. يعرض شكل موجة التسجيل ومؤقّت المدّة وأزرار الإجراءات داخل منطقة إدخال الرسالة. **البنية (من عقدة Figma رقم 191:21271):** - الحاوية: بعرض كامل، حدّ `#e9eaeb`، radius-md (8px)، px-12 py-6 - البداية: أيقونة إضافة (20px، `#a4a7ae`) + نص نائب (14px، `#717680`) - أيقونة الميكروفون: 24px، `#a4a7ae` - منطقة التسجيل: أيقونة الحالة + المدّة (14px، `#414651`) + شكل الموجة (`#6852d6`) + زر الإجراء - زر الإرسال: دائرة 36px، معطّل (`#f5f5f5`) أو نشط (`#6852d6`) **الحالات:** - التسجيل: نقطة حمراء (نابضة) + مؤقّت + شكل موجة + زر إيقاف مؤقّت + إرسال - الإيقاف المؤقّت: زر تشغيل (بنفسجي) + \"00:00\" + شكل موجة + زر حذف + إرسال - التشغيل: زر إيقاف مؤقّت (بنفسجي) + مؤقّت + شكل موجة + زر حذف + إرسال",
  "A compact message representation shown inside the message composer when replying to, editing, or referencing a deleted message. Displays the sender name, a truncated message preview, a colored left border, and an optional close/dismiss button. **Structure (from Figma — Reply Message Composer):** - Container: full width, `--color-neutral-100` bg, `--radius-xs` (4px) - Left border: 4px wide, `--color-ep-600` (reply/deleted) or `--color-info` (edit) - Sender: 12px, weight 500, colored to match border - Message text: 12px, weight 400, `--color-neutral-500`, single line truncated - Close button: 20px, top-right, `--color-neutral-500` **Modes:** - `reply` — quoting another user's message (purple border + name) - `edit` — editing your own message (blue border + name) - `deleted` — referencing a deleted message (purple border + 🚫 icon + italic text)":
    "تمثيل مضغوط للرسالة يظهر داخل محرّر الرسائل عند الردّ على رسالة أو تعديلها أو الإشارة إلى رسالة محذوفة. يعرض اسم المرسِل، ومعاينة مقتطَعة للرسالة، وحدًّا ملوّنًا في جهة البداية، وزر إغلاق اختياريًا. **البنية (من Figma — محرّر الردّ على الرسائل):** - الحاوية: بعرض كامل، خلفية `--color-neutral-100`، `--radius-xs` (4px) - حدّ البداية: بعرض 4px، `--color-ep-600` (ردّ/محذوف) أو `--color-info` (تعديل) - المرسِل: 12px، وزن 500، بلون مطابق للحدّ - نص الرسالة: 12px، وزن 400، `--color-neutral-500`، سطر واحد مقتطَع - زر الإغلاق: 20px، في الزاوية العليا من جهة النهاية، `--color-neutral-500` **الأوضاع:** - `reply` — اقتباس رسالة مستخدم آخر (حدّ بنفسجي واسم) - `edit` — تعديل رسالتك (حدّ أزرق واسم) - `deleted` — الإشارة إلى رسالة محذوفة (حدّ بنفسجي وأيقونة 🚫 ونص مائل)",
  "A single-select option within a group — circle with dot when selected. **Sizes:** sm (16px), md (20px). **States:** Default, Hover, Focus, Disabled, Checked. **Text:** Optional label (16px/500) and description (14px/400). Uses foundation tokens: `--color-primary`, `--color-ep-700`, `--color-neutral-lm-*`, `--radius-full` (circle), `--focus-ring-xs`.":
    "خيار أحادي التحديد ضمن مجموعة — دائرة بنقطة عند التحديد. **الأحجام:** sm (16px)، md (20px). **الحالات:** افتراضي، تحويم، تركيز، معطّل، محدَّد. **النص:** تسمية اختيارية (16px/500) ووصف (14px/400). يستخدم رموز الأساسيات: `--color-primary`، `--color-ep-700`، `--color-neutral-lm-*`، `--radius-full` (دائرة)، `--focus-ring-xs`.",
  "Emoji reaction tags shown below message bubbles. Users can tap to add/remove their reaction. Displays the emoji and an optional count. **Structure (from Figma — Base_Reaction Tag):** - Container: 24px height, rounded 20px, white bg, border `--color-neutral-100` - Padding: 2px vertical, 8px horizontal - Emoji: 14px, line-height 20px - Count: 12px, regular, `--color-neutral-900` - Gap: 4px between emoji and count - Active state: `--color-ep-50` bg, `--color-ep-200` border, count in `--color-ep-700` - Group: flex-wrap, 4px gap":
    "وسوم تفاعل بالإيموجي تظهر أسفل فقاعات الرسائل. يمكن للمستخدمين النقر لإضافة تفاعلهم أو إزالته. تعرض الإيموجي وعددًا اختياريًا. **البنية (من Figma — Base_Reaction Tag):** - الحاوية: ارتفاع 24px، استدارة 20px، خلفية بيضاء، حدّ `--color-neutral-100` - الحشو: 2px رأسيًا، 8px أفقيًا - الإيموجي: 14px، ارتفاع سطر 20px - العدد: 12px، عادي، `--color-neutral-900` - الفجوة: 4px بين الإيموجي والعدد - الحالة النشطة: خلفية `--color-ep-50`، حدّ `--color-ep-200`، والعدد بلون `--color-ep-700` - المجموعة: flex-wrap بفجوة 4px",
  "A tooltip-style popup that shows who reacted with a specific emoji. Appears on hover over a reaction badge in a message. **Structure (from Figma node 4043:476245):** - Container: radius 8px, shadow-lg (drop-shadow) - Content: bg `#0a0d12` (static-black), radius-xs (4px), padding 8px - Emoji: 24px, line-height 32px, centered - Names: 12px regular, white, line-height 18px - Label (\"reacted\"): 12px regular, text-tertiary (#535862), line-height 18px - Arrow: 6px triangle pointing down, same color as bg":
    "نافذة منبثقة بنمط التلميح تُظهر من تفاعل بإيموجي معيّن. تظهر عند التحويم على شارة تفاعل في رسالة. **البنية (من عقدة Figma رقم 4043:476245):** - الحاوية: استدارة 8px، shadow-lg (ظلّ مُسقَط) - المحتوى: خلفية `#0a0d12` (static-black)، radius-xs (4px)، حشو 8px - الإيموجي: 24px، ارتفاع سطر 32px، في المنتصف - الأسماء: 12px عادي، أبيض، ارتفاع سطر 18px - التسمية (\"reacted\"): 12px عادي، text-tertiary (#535862)، ارتفاع سطر 18px - السهم: مثلّث 6px يشير للأسفل، بلون الخلفية نفسه",
  "A popup showing who reacted to a message, with emoji filter tabs and a list of reactors. Each item shows an avatar, name, optional subtitle, and the emoji they reacted with. **Structure (from Figma node 4043:476218):** - Container: radius-2xl (16px), shadow-lg, border `#f5f5f5`, bg white - Tabs: border-bottom `#e9eaeb`, pt-8, height 40px - Active tab: text `#6852d6`, border-bottom 2px `#6852d6` - Inactive tab: text `#717680` - List items: px-20 py-8, gap-12 - Avatar: 32×32, full-round - Name: 14px medium, #181d27 - Subtitle: 12px regular, #414651 - Emoji: 20px, 24px wide":
    "نافذة منبثقة تُظهر من تفاعل مع رسالة، مع تبويبات لترشيح الإيموجي وقائمة بالمتفاعلين. يعرض كل عنصر صورة رمزية واسمًا وعنوانًا فرعيًا اختياريًا والإيموجي الذي تفاعل به. **البنية (من عقدة Figma رقم 4043:476218):** - الحاوية: radius-2xl (16px)، shadow-lg، حدّ `#f5f5f5`، خلفية بيضاء - التبويبات: حدّ سفلي `#e9eaeb`، pt-8، ارتفاع 40px - التبويب النشط: نص `#6852d6`، حدّ سفلي 2px بلون `#6852d6` - التبويب غير النشط: نص `#717680` - عناصر القائمة: px-20 py-8، gap-12 - الصورة الرمزية: 32×32، دائرية بالكامل - الاسم: 14px متوسط، #181d27 - العنوان الفرعي: 12px عادي، #414651 - الإيموجي: 20px، بعرض 24px",
  "A pill-shaped search input with a search icon and optional clear button. Used for filtering conversations, contacts, or messages. **Structure (from Figma node 4094:1014224):** - Container: full-width, height 40px, radius 1000px (pill), bg `#f5f5f5`, border `#f5f5f5` - Padding: 12px horizontal, 8px vertical - Search icon: 24×24, color `#a1a1a1` - Placeholder: H4/Regular — 16px, weight 400, color `#a1a1a1` - Input text: 16px regular, color `#141414`":
    "حقل بحث بشكل حبّة دواء مع أيقونة بحث وزر مسح اختياري. يُستخدم لترشيح المحادثات أو جهات الاتصال أو الرسائل. **البنية (من عقدة Figma رقم 4094:1014224):** - الحاوية: بعرض كامل، ارتفاع 40px، استدارة 1000px (حبّة دواء)، خلفية `#f5f5f5`، حدّ `#f5f5f5` - الحشو: 12px أفقيًا، 8px رأسيًا - أيقونة البحث: 24×24، اللون `#a1a1a1` - النص النائب: H4/Regular — 16px، وزن 400، اللون `#a1a1a1` - نص الإدخال: 16px عادي، اللون `#141414`",
  "AI-suggested quick reply popup that appears above the message composer. Shows a list of contextual reply suggestions the user can tap to send. **Structure (from Figma node 4088:736840):** - Container: 360px, `--radius-2xl` (16px), `--shadow-lg`, border `--color-neutral-100`, padding 12px - Header: \"Suggest a reply\" (16px, medium, `--color-neutral-900`) + close icon (20px) - Gap between header and content: 16px - Content gap: 8px between items **States:** - Loading: 3 skeleton bars (67px height, radius 12px, gradient shimmer animation) - Loaded: Reply buttons (border `--color-neutral-200`, radius 12px, 14px text, padding 12px 16px) **Interactions:** - Hover on reply: `--color-neutral-50` bg, `--color-neutral-300` border - Click reply: fires `onSelect` with the reply text - Close button dismisses the popup":
    "نافذة ردود سريعة يقترحها الذكاء الاصطناعي وتظهر أعلى محرّر الرسائل. تعرض قائمة باقتراحات ردّ سياقية يمكن للمستخدم النقر عليها للإرسال. **البنية (من عقدة Figma رقم 4088:736840):** - الحاوية: 360px، `--radius-2xl` (16px)، `--shadow-lg`، حدّ `--color-neutral-100`، حشو 12px - الترويسة: \"Suggest a reply\" (16px، متوسط، `--color-neutral-900`) + أيقونة إغلاق (20px) - الفجوة بين الترويسة والمحتوى: 16px - فجوة المحتوى: 8px بين العناصر **الحالات:** - التحميل: 3 أشرطة هيكلية (ارتفاع 67px، استدارة 12px، حركة تدرّج لامعة) - المحمَّل: أزرار الردّ (حدّ `--color-neutral-200`، استدارة 12px، نص 14px، حشو 12px 16px) **التفاعلات:** - التحويم على الردّ: خلفية `--color-neutral-50`، حدّ `--color-neutral-300` - النقر على الردّ: يُطلق `onSelect` مع نص الردّ - زر الإغلاق يُخفي النافذة",
  "A transient notification pill that appears briefly to confirm an action. Dark background with white text, auto-dismisses after a set duration. **Structure (from Figma node 4090:837860):** - Outer: radius 8px, drop-shadow (shadow-lg) - Content: bg `#0a0d12` (static-black), radius-xs (4px), padding 8px - Text: Caption 1/Regular — 12px, weight 400, line-height 18px, white, centered":
    "شريحة إشعار عابرة تظهر لوقت قصير لتأكيد إجراء. خلفية داكنة ونص أبيض، وتختفي تلقائيًا بعد مدّة محدّدة. **البنية (من عقدة Figma رقم 4090:837860):** - الإطار الخارجي: استدارة 8px، ظلّ مُسقَط (shadow-lg) - المحتوى: خلفية `#0a0d12` (static-black)، radius-xs (4px)، حشو 8px - النص: Caption 1/Regular — 12px، وزن 400، ارتفاع سطر 18px، أبيض، في المنتصف",
  "An animated indicator showing when users are performing an activity (typing, recording, or uploading). Supports single, group, and multiple contexts. **Structure (from Figma node 17442:55645):** - Container: flex row, gap 4px (spacing-xs), items-center - Dots: 3 animated circles (4px), gap 2px, color `#6852d6` (text-highlight) - Text: Caption 1/Regular — 12px, weight 400, line-height 18px, color `#6852d6` **Variants:** - Activity: Typing, Recording, Uploading - Context: Single (\"Typing\"), Group (\"John is typing\"), Multiple (\"2 people are typing\")":
    "مؤشّر متحرّك يوضّح متى يقوم المستخدمون بنشاط ما (كتابة أو تسجيل أو رفع). يدعم سياقات المفرد والمجموعة والتعدّد. **البنية (من عقدة Figma رقم 17442:55645):** - الحاوية: صفّ مرن، فجوة 4px (spacing-xs)، محاذاة رأسية للوسط - النقاط: 3 دوائر متحرّكة (4px)، فجوة 2px، اللون `#6852d6` (text-highlight) - النص: Caption 1/Regular — 12px، وزن 400، ارتفاع سطر 18px، اللون `#6852d6` **الأنماط:** - النشاط: كتابة، تسجيل، رفع - السياق: مفرد (\"Typing\")، مجموعة (\"John is typing\")، تعدّد (\"2 people are typing\")",

  /* ─── Base Components: per-story descriptions (sweep) ─── */
  "Recording state — red dot pulsing, timer counting, pause button.":
    "حالة التسجيل — نقطة حمراء نابضة، ومؤقّت يعدّ، وزر إيقاف مؤقّت.",
  "Paused state — play button, timer reset, delete button available.":
    "حالة الإيقاف المؤقّت — زر تشغيل، ومؤقّت مُصفَّر، وزر حذف متاح.",
  "Playing state — pause button (purple), timer counting, delete button.":
    "حالة التشغيل — زر إيقاف مؤقّت (بنفسجي)، ومؤقّت يعدّ، وزر حذف.",
  "All hierarchy variants at default state.": "كل أنماط التدرّج في الحالة الافتراضية.",
  "Raw HTML + CSS usage with foundation variables.":
    "استخدام HTML وCSS مباشرةً مع متغيّرات الأساسيات.",
  "Default state — exact match to Figma node 4090:837860.":
    "الحالة الافتراضية — مطابقة تمامًا لعقدة Figma رقم 4090:837860.",
  "Message sent confirmation.": "تأكيد إرسال الرسالة.",
  "Message deleted confirmation.": "تأكيد حذف الرسالة.",
  "Default state — exact match to Figma node 4043:476245.":
    "الحالة الافتراضية — مطابقة تمامًا لعقدة Figma رقم 4043:476245.",
  "Single reactor.": "متفاعل واحد.",
  "Two reactors — no overflow.": "متفاعلان — بلا فائض.",
  "Without arrow.": "بلا سهم.",
  "Empty state — 2 blank options, Create disabled.":
    "الحالة الفارغة — خياران فارغان، وزر الإنشاء معطّل.",
  "Validation error state.": "حالة خطأ التحقّق.",
  "Max options reached (limit error).": "بلوغ أقصى عدد للخيارات (خطأ الحدّ).",
  "Default state — Smileys & People category active (matches Figma).":
    "الحالة الافتراضية — فئة الوجوه والأشخاص نشطة (مطابقة لـ Figma).",
  "Recently used emojis.": "الإيموجي المستخدَمة مؤخّرًا.",
  "Symbols category.": "فئة الرموز.",
  "All radio states.": "كل حالات أزرار الاختيار.",
  "Sizes comparison.": "مقارنة الأحجام.",
  "With label and description.": "مع تسمية ووصف.",
  "Radio group example — real-world usage.": "مثال على مجموعة أزرار الاختيار — استخدام واقعي.",
  "Default — four greeting suggestions as shown in Figma.":
    "افتراضي — أربعة اقتراحات ترحيب كما تظهر في Figma.",
  "Single suggestion — minimal variant.": "اقتراح واحد — النمط المبسّط.",
  "Default state — exact match to Figma node 4043:347990.":
    "الحالة الافتراضية — مطابقة تمامًا لعقدة Figma رقم 4043:347990.",
  "Short summary text.": "نص ملخّص قصير.",
  "All checkbox states.": "كل حالات مربّع الاختيار.",
  "Real-world examples.": "أمثلة واقعية.",
  "Received message context menu — exact match to Figma node 4090:878265.":
    "القائمة السياقية لرسالة واردة — مطابقة تمامًا لعقدة Figma رقم 4090:878265.",
  "Sent message context menu — exact match to Figma node 4090:878304. Includes Info, Edit, and all actions.":
    "القائمة السياقية لرسالة مُرسَلة — مطابقة تمامًا لعقدة Figma رقم 4090:878304. تتضمّن المعلومات والتعديل وكل الإجراءات.",
  "Minimal context menu with fewer options.": "قائمة سياقية مبسّطة بخيارات أقل.",
  "Visual demonstration of item states.": "عرض بصري لحالات العناصر.",
  "The three-dot trigger button that opens the context menu. Shown on message hover.":
    "زر النقاط الثلاث الذي يفتح القائمة السياقية. يظهر عند التحويم على الرسالة.",
  "Loading state — skeleton shimmer bars. Matches Figma node 4088:736840.":
    "حالة التحميل — أشرطة هيكلية لامعة. مطابقة لعقدة Figma رقم 4088:736840.",
  "Two replies — shorter list.": "ردّان — قائمة أقصر.",
  "Single reply suggestion.": "اقتراح ردّ واحد.",
  "Default empty state — exact match to Figma node 4094:1014224.":
    "الحالة الفارغة الافتراضية — مطابقة تمامًا لعقدة Figma رقم 4094:1014224.",
  "With a value typed in.": "مع قيمة مُدخَلة.",
  "Without clear button.": "بلا زر مسح.",
  "Default time format as shown in Figma — \"4:56 pm\" inside a sent message bubble.":
    "تنسيق الوقت الافتراضي كما يظهر في Figma — \"4:56 pm\" داخل فقاعة رسالة مُرسَلة.",
  "Sent message with read receipt — single tick (sent).":
    "رسالة مُرسَلة مع إيصال قراءة — علامة واحدة (مُرسَلة).",
  "Sent message with double tick — delivered.": "رسالة مُرسَلة بعلامتين — تم التسليم.",
  "Sent message with blue double tick — read.": "رسالة مُرسَلة بعلامتين زرقاوين — مقروءة.",
  "Received message timestamp.": "الطابع الزمني لرسالة واردة.",
  "Default state — single reaction, exact match to Figma node 4043:476218.":
    "الحالة الافتراضية — تفاعل واحد، مطابقة تمامًا لعقدة Figma رقم 4043:476218.",
  "Multiple reactions with different emojis.": "تفاعلات متعدّدة بإيموجي مختلفة.",
  "Single user with \"Tap to remove\" subtitle.":
    "مستخدم واحد مع العنوان الفرعي \"Tap to remove\".",
  "Avatar online indicator — all sizes.": "مؤشّر اتصال الصورة الرمزية — كل الأحجام.",
  "Avatar group icons — Private, Protected types at all sizes.":
    "أيقونات مجموعة الصور الرمزية — النوعان الخاص والمحمي بكل الأحجام.",
  "Avatar — all sizes with image, all status icon variants. Matches Figma node 17282-60230.":
    "الصورة الرمزية — كل الأحجام مع صورة، وكل أنماط أيقونات الحالة. مطابقة لعقدة Figma رقم 17282-60230.",
  "Avatar label group — all sizes × all status icons. Matches Figma node 17282-60149.":
    "مجموعة الصور الرمزية المعنونة — كل الأحجام × كل أيقونات الحالة. مطابقة لعقدة Figma رقم 17282-60149.",
  "Group avatar label group — all sizes × group types (Public, Private, Protected).":
    "مجموعة الصور الرمزية المعنونة للمجموعات — كل الأحجام × أنواع المجموعات (عامة، خاصة، محميّة).",
  "Default — single user typing.": "افتراضي — مستخدم واحد يكتب.",
  "Multiple people typing.": "عدّة أشخاص يكتبون.",
  "Recording activity.": "نشاط التسجيل.",
  "Uploading activity.": "نشاط الرفع.",
  "The standard attachment action sheet as seen in the message composer. Eight options with filled icons in the primary color.":
    "لوحة إجراءات المرفقات القياسية كما تظهر في محرّر الرسائل. ثمانية خيارات بأيقونات مملوءة باللون الأساسي.",
  "Contextual actions for a message. Includes a destructive \"Delete\" action rendered in error color.":
    "إجراءات سياقية لرسالة. تتضمّن إجراء \"Delete\" تدميريًا يُعرض بلون الخطأ.",
  "The width can be adjusted. Default is 244px. Here shown at 320px for longer labels.":
    "يمكن ضبط العرض. القيمة الافتراضية 244px، وهي معروضة هنا بـ 320px للتسميات الأطول.",
  "Visual demonstration of all interactive states: default, hover, active, focus, and destructive.":
    "عرض بصري لكل الحالات التفاعلية: الافتراضية، والتحويم، والنشطة، والتركيز، والتدميرية.",
  "Reply mode — quoting another user's message. Matches Figma exactly.":
    "وضع الردّ — اقتباس رسالة مستخدم آخر. مطابق تمامًا لـ Figma.",
  "Default state — no reason selected, Report button disabled. Matches Figma exactly.":
    "الحالة الافتراضية — لم يُحدَّد سبب، وزر الإبلاغ معطّل. مطابقة تمامًا لـ Figma.",
  "Single reaction — default state.": "تفاعل واحد — الحالة الافتراضية.",
  "Reaction with count.": "تفاعل مع عدد.",
  "Multiple reactions in a group.": "تفاعلات متعدّدة في مجموعة.",
  "**Idle** — ready to record. Circle is lavender, no rings. Center button shows mic.":
    "**خامل** — جاهز للتسجيل. الدائرة بنفسجية فاتحة، بلا حلقات. الزر الأوسط يُظهر الميكروفون.",
  "**Recording** — actively capturing audio. Circle turns purple; two concentric rings pulse outward. Center button → pause.":
    "**تسجيل** — يلتقط الصوت فعليًا. تتحوّل الدائرة إلى البنفسجي، وتنبض حلقتان متراكزتان للخارج. الزر الأوسط ← إيقاف مؤقّت.",
  "**Paused** — recording on hold. Circle stays purple, rings collapse, duration dims. Center button → mic to resume.":
    "**متوقّف مؤقّتًا** — التسجيل معلّق. تبقى الدائرة بنفسجية، وتنكمش الحلقات، وتخفت المدّة. الزر الأوسط ← الميكروفون للاستئناف.",

  /* ─── Base Components: dialog copy, reasons, fixtures ─── */
  "All messages will be permanently deleted and you will be removed from this group. This action cannot be undone.":
    "ستُحذف جميع الرسائل نهائيًا وستُزال من هذه المجموعة. لا يمكن التراجع عن هذا الإجراء.",
  "Are you sure you want to ban this member? They will be removed and won't be able to rejoin.":
    "هل تريد بالتأكيد حظر هذا العضو؟ ستتم إزالته ولن يتمكّن من الانضمام مجدّدًا.",
  "Are you sure you want to block this contact? You won't receive/send messages from them anymore.":
    "هل تريد بالتأكيد حظر جهة الاتصال هذه؟ لن تتمكّن من تبادل الرسائل معها بعد الآن.",
  "Are you sure you want to delete this chat and exit the group? This action cannot be undone.":
    "هل تريد بالتأكيد حذف هذه المحادثة ومغادرة المجموعة؟ لا يمكن التراجع عن هذا الإجراء.",
  "Are you sure you want to leave this group? You will no longer receive messages from this group.":
    "هل تريد بالتأكيد مغادرة هذه المجموعة؟ لن تصلك رسائل منها بعد الآن.",
  "Are you sure you want to transfer ownership? This can't be undone, and the new owner will take full control.":
    "هل تريد بالتأكيد نقل الملكية؟ لا يمكن التراجع عن ذلك، وسيحصل المالك الجديد على تحكّم كامل.",
  "Blocking this user will prevent them from sending you messages, seeing your online status, or adding you to groups.":
    "سيمنع حظر هذا المستخدم إرساله رسائل إليك، أو رؤية حالة اتصالك، أو إضافتك إلى مجموعات.",
  "This action will permanently delete the user account and all associated data including messages, media, and group memberships.":
    "سيحذف هذا الإجراء حساب المستخدم نهائيًا مع كل البيانات المرتبطة به، بما فيها الرسائل والوسائط والعضويات في المجموعات.",
  "This member will be permanently removed and will not be able to rejoin this group. All their messages will remain visible.":
    "ستتم إزالة هذا العضو نهائيًا ولن يتمكّن من الانضمام إلى هذه المجموعة مجدّدًا. وستبقى جميع رسائله ظاهرة.",
  "This member will be removed from the group but can rejoin if they have an invite link. Their previous messages will remain visible.":
    "ستتم إزالة هذا العضو من المجموعة، لكن يمكنه الانضمام مجدّدًا إذا كان لديه رابط دعوة. وستبقى رسائله السابقة ظاهرة.",
  "You will lose all owner privileges and become a regular member. The new owner will have full control over group settings.":
    "ستفقد جميع صلاحيات المالك وتصبح عضوًا عاديًا. وسيحصل المالك الجديد على تحكّم كامل في إعدادات المجموعة.",
  "You will no longer receive messages from this group. You can rejoin later if the group is public or if you receive an invite.":
    "لن تصلك رسائل من هذه المجموعة بعد الآن. ويمكنك الانضمام لاحقًا إذا كانت المجموعة عامة أو إذا تلقّيت دعوة.",
  "Spam": "رسائل مزعجة",
  "Harassment or bullying": "تحرّش أو تنمّر",
  "Impersonation": "انتحال هوية",
  "Inappropriate content": "محتوى غير لائق",
  "Intellectual property violation": "انتهاك للملكية الفكرية",
  "Self-harm or suicide": "إيذاء النفس أو الانتحار",
  "Other": "أخرى",
  "I'll think about it and get back to you.": "سأفكّر في الأمر وأعود إليك.",
  "Sounds good, let's do it!": "يبدو جيدًا، لنفعل ذلك!",
  "Sure, I can ship it. Where are you located?": "بالتأكيد، يمكنني شحنها. أين تقع؟",
  "Thanks for your interest! Let me check the shipping options.":
    "شكرًا لاهتمامك! دعني أتحقّق من خيارات الشحن.",
  "Thanks! I appreciate it.": "شكرًا! أقدّر ذلك.",
  "Yes, it's still available! Would you like to see more photos?":
    "نعم، ما زالت متاحة! هل تودّ رؤية صور أخرى؟",
  "Components are small and focused. Combine them to build complex patterns without tight coupling.":
    "المكوّنات صغيرة ومركّزة. ادمجها لبناء أنماط معقّدة دون اقتران وثيق.",
  "Every color, spacing, and radius value comes from foundation tokens. No magic numbers.":
    "كل قيم الألوان والمسافات والاستدارة مصدرها رموز الأساسيات. بلا أرقام عشوائية.",
  "Keyboard navigation, ARIA attributes, and focus management are built in from the start.":
    "التنقّل بلوحة المفاتيح وخصائص ARIA وإدارة التركيز مدمجة منذ البداية.",
  "Light and dark modes work automatically through CSS variable remapping. No prop changes needed.":
    "يعمل الوضعان الفاتح والداكن تلقائيًا عبر إعادة ربط متغيّرات CSS. دون الحاجة إلى تغيير أي خاصية.",
  "Mobile-first with adaptive layouts. Components scale from 320px mobile to desktop with touch-friendly targets on all interactive elements.":
    "تصميم يبدأ من الجوّال بتخطيطات متكيّفة. تتدرّج المكوّنات من 320px على الجوّال إلى سطح المكتب، مع مساحات لمس مريحة في كل العناصر التفاعلية.",
  "A little about the company and the team that you'll be working with.":
    "نبذة عن الشركة والفريق الذي ستعمل معه.",
  "Add": "إضافة",
  "Transfer": "نقل",
  "This is an error message.": "هذه رسالة خطأ.",
  "Unable to generate summary. Please try again.":
    "تعذّر توليد الملخّص. يُرجى المحاولة مرّة أخرى.",
  "Admin": "مسؤول",
  "Admin Selected": "تم تحديد مسؤول",
  "All Categories": "كل الفئات",
  "All Modes": "كل الأوضاع",
  "All States": "كل الحالات",
  "All Variants": "كل الأنماط",
  "Animals": "الحيوانات",
  "Animals & Nature": "الحيوانات والطبيعة",
  "With Text": "مع نص",
  "Examples": "أمثلة",
  "Received Message": "رسالة واردة",
  "Sent Message": "رسالة مُرسَلة",
  "Trigger": "عنصر التشغيل",
  "Business": "الأعمال",
  "Casual": "غير رسمي",
  "Appears on hover/focus with 150ms fade transition. Disappears on mouse leave/blur.":
    "تظهر عند التحويم أو التركيز بتلاشٍ مدّته 150 مللي ثانية، وتختفي عند إبعاد المؤشّر أو فقدان التركيز.",
  "A small popup that shows contextual information on hover or focus.":
    "نافذة صغيرة تعرض معلومات سياقية عند التحويم أو التركيز.",
  "All arrow positions — rendered as static tooltip previews.":
    "كل مواضع السهم — معروضة كمعاينات ثابتة للتلميح.",
  "Alice, Bob, Charlie": "عالية وبدر وشادي",
  "Alice, Bob, Charlie, +7": "عالية وبدر وشادي، +7",
  "Bob": "بدر",
  "Charlie": "شادي",
  "Dave": "داوود",
  "Eve": "إيفا",
  "Frank": "فارس",
  "Grace": "غادة",
  "Heidi": "هدى",
  "Ivan": "عصام",
  "Judy": "جودي",

  /* ─── Base Components: suggestion and summary content ─── */
  "Hi there! How's it going?": "مرحبًا! كيف الحال؟",
  "Hey, how are you doing today?": "أهلًا، كيف حالك اليوم؟",
  "Hello! How's your day been so far?": "مرحبًا! كيف كان يومك حتى الآن؟",
  "Hope all's well!": "أتمنّى أن تكون بخير!",
  "I'd like to know more about your services": "أودّ معرفة المزيد عن خدماتكم",
  "Can you help me with my order?": "هل يمكنك مساعدتي في طلبي؟",
  "What are your business hours?": "ما هي ساعات العمل لديكم؟",
  "I have a question about pricing": "لديّ سؤال عن الأسعار",
  "What's up? 👋": "كيف الحال؟ 👋",
  "Long time no see!": "لم نلتقِ منذ وقت طويل!",
  "Got any plans this weekend?": "هل لديك خطط لعطلة نهاية الأسبوع؟",
  "Did you see that movie?": "هل شاهدت ذلك الفيلم؟",
  "How's the family?": "كيف حال العائلة؟",
  "Say hello 👋": "ألقِ التحية 👋",
  "In Context": "في السياق",
  "The user expressed interest in a watch listed for sale and confirmed its availability with the seller. They negotiated the price down from $130 to $120. After agreeing on the new price, the user asked if they could pick up the watch the same day. The seller responded positively with emojis, and the user confirmed availability after 5 PM. They concluded the conversation with plans to meet soon.":
    "أبدى المستخدم اهتمامًا بساعة معروضة للبيع وتأكّد من توفّرها لدى البائع. وتفاوضا على السعر فانخفض من 130 إلى 120 دولارًا. وبعد الاتفاق على السعر الجديد، سأل المستخدم إن كان بإمكانه استلام الساعة في اليوم نفسه. وردّ البائع بالإيجاب مستخدمًا الإيموجي، فأكّد المستخدم توفّره بعد الساعة 5 مساءً. واختُتمت المحادثة بالاتفاق على اللقاء قريبًا.",

  /* ─── Base Components: story names and remaining prose ─── */
  "Avatar Icon": "صورة رمزية — أيقونة",
  "Avatar Image": "صورة رمزية — صورة",
  "Avatar Text": "صورة رمزية — نص",
  "Back Button No Actions": "زر الرجوع بلا إجراءات",
  "Checkbox States": "حالات مربّع الاختيار",
  "Custom Content": "محتوى مخصّص",
  "Custom Placeholder": "نص نائب مخصّص",
  "Custom Reasons": "أسباب مخصّصة",
  "Date Type Date": "نوع التاريخ — تاريخ",
  "Date Type Time": "نوع التاريخ — وقت",
  "Filled Error": "مملوء — خطأ",
  "Filtered By Emoji": "مُرشَّح حسب الإيموجي",
  "Fixed Width": "عرض ثابت",
  "Food": "الطعام",
  "Group Label Group": "مجموعة معنونة للمجموعات",
  "Group Partially Read": "مجموعة — مقروءة جزئيًا",
  "Group Typing": "مجموعة — يكتبون",
  "Group Unread": "مجموعة — غير مقروءة",
  "Group With Add": "مجموعة مع زر إضافة",
  "Idle": "خامل",
  "Label Group": "مجموعة معنونة",
  "Limited Roles": "أدوار محدودة",
  "Long Message": "رسالة طويلة",
  "Long Summary": "ملخّص طويل",
  "Many Emojis": "إيموجي كثيرة",
  "Many Reactors": "متفاعلون كُثر",
  "Max Options": "أقصى عدد خيارات",
  "Minimal Reasons": "أسباب مبسّطة",
  "Multiple Reactions": "تفاعلات متعدّدة",
  "Multiple Typing": "عدّة أشخاص يكتبون",
  "No Clear Button": "بلا زر مسح",
  "Outgoing": "صادر",
  "Own Reaction": "تفاعلك",
  "Owner Selected": "تم تحديد المالك",
  "Participant Selected": "تم تحديد مشارك",
  "Patterns": "الأنماط",
  "Placeholder": "نص نائب",
  "Placeholder Error": "نص نائب — خطأ",
  "Private Group": "مجموعة خاصة",
  "Private Type": "النوع خاص",
  "Protected Group": "مجموعة محميّة",
  "Protected Type": "النوع محمي",
  "Public Group": "مجموعة عامة",
  "Public Type": "النوع عام",
  "Radio Group Example": "مثال على مجموعة أزرار الاختيار",
  "Radio States": "حالات أزرار الاختيار",
  "Read Receipts": "إيصالات القراءة",
  "Received": "واردة",
  "Recents": "المستخدمة مؤخّرًا",
  "Sent With Receipt": "مُرسَلة مع إيصال",
  "Separator": "فاصل",
  "Single Reactor": "متفاعل واحد",
  "Single Reply": "ردّ واحد",
  "Skeleton End": "هيكل تحميل — النهاية",
  "Skeleton Start": "هيكل تحميل — البداية",
  "Status Delivered": "الحالة — تم التسليم",
  "Status Error": "الحالة — خطأ",
  "Status Offline": "الحالة — غير متصل",
  "Status Online": "الحالة — متصل",
  "Status Read": "الحالة — مقروءة",
  "Status Sending": "الحالة — قيد الإرسال",
  "Status Sent": "الحالة — مُرسَلة",
  "Symbols": "الرموز",
  "Two Reactors": "متفاعلان",
  "Two Replies": "ردّان",
  "Unread": "غير مقروءة",
  "Validation Error": "خطأ تحقّق",
  "Video Call": "مكالمة فيديو",
  "Voice Call": "مكالمة صوتية",
  "With Count": "مع عدد",
  "With One Action": "مع إجراء واحد",
  "With Selection": "مع تحديد",
  "With Two Actions": "مع إجراءين",
  "With Value": "مع قيمة",
  "Without Arrow": "بلا سهم",
  "Without Icons Error": "بلا أيقونات — خطأ",
  "Awesome! Can I see a couple of pictures?": "رائع! هل يمكنني رؤية بعض الصور؟",
  "Click here to visit": "انقر هنا للزيارة",
  "Failed to send message. Please try again.":
    "تعذّر إرسال الرسالة. يُرجى المحاولة مرّة أخرى.",
  "Got it, thanks!": "فهمت، شكرًا!",
  "Hey, let's catch up later!": "أهلًا، لنتحدّث لاحقًا!",
  "How can I help you today?": "كيف يمكنني مساعدتك اليوم؟",
  "How do you prefer to shop?": "كيف تفضّل التسوّق؟",
  "I just don't like it": "لا يعجبني وحسب",
  "Last seen 1d ago": "آخر ظهور قبل يوم",
  "Last seen 2h ago": "آخر ظهور قبل ساعتين",
  "Last seen 30m ago": "آخر ظهور قبل 30 دقيقة",
  "Last seen 5h ago": "آخر ظهور قبل 5 ساعات",
  "Message Already in Selected Language": "الرسالة بالفعل باللغة المحدَّدة",
  "Mobile · Tablet · Desktop": "الجوّال · اللوحي · سطح المكتب",
  "Nudity or sexual activity": "عُري أو محتوى جنسي",
  "Please check your internet connection.": "يُرجى التحقّق من اتصالك بالإنترنت.",
  "Quick discussion about meeting time. Both parties agreed to meet at 3 PM at the coffee shop.":
    "نقاش سريع حول موعد اللقاء. اتفق الطرفان على اللقاء في الساعة 3 عصرًا في المقهى.",
  "Scam, fraud or spam": "احتيال أو نصب أو رسائل مزعجة",
  "Selected language for translation is similar to the language of the original message.":
    "اللغة المحدَّدة للترجمة مشابهة للغة الرسالة الأصلية.",
  "Sounds great!": "يبدو رائعًا!",
  "Sure, I can ship it.": "بالتأكيد، يمكنني شحنها.",
  "Thanks for your interest!": "شكرًا لاهتمامك!",
  "Thanks! Looks good.": "شكرًا! يبدو جيدًا.",
  "This is a hint text to help user.": "هذا نص إرشادي لمساعدة المستخدم.",
  "This message was deleted": "تم حذف هذه الرسالة",
  "Violence, hate or exploitation": "عنف أو كراهية أو استغلال",
  "Yes, it's available. Let me send you the details.":
    "نعم، إنها متاحة. دعني أرسل لك التفاصيل.",
  "Yes, it's still available!": "نعم، ما زالت متاحة!",
  "You are no longer part of the group": "لم تعد عضوًا في هذه المجموعة",
  "You can now translate messages in real-time.": "يمكنك الآن ترجمة الرسائل فوريًا.",
  "You have been banned from this group by the administrator.": "لقد حظرك مسؤول هذه المجموعة.",
  "You have blocked this user.": "لقد حظرت هذا المستخدم.",
  "You will lose all owner privileges and become a regular member. The new owner will have full control over group settings and members.":
    "ستفقد جميع صلاحيات المالك وتصبح عضوًا عاديًا. وسيحصل المالك الجديد على تحكّم كامل في إعدادات المجموعة وأعضائها.",
  "You will no longer receive messages from this group. You can rejoin later if the group is public or if you receive a new invite.":
    "لن تصلك رسائل من هذه المجموعة بعد الآن. ويمكنك الانضمام لاحقًا إذا كانت المجموعة عامة أو إذا تلقّيت دعوة جديدة.",
  "Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project and I'm having some trouble with the configuration.":
    "أهلًا، كنت أتساءل إن كان بإمكانك مساعدتي في أمر ما. أحاول معرفة كيفية إعداد المشروع الجديد وأواجه بعض الصعوبة في الإعدادات.",
  "The conversation began with the buyer inquiring about a vintage camera listed for sale. The seller confirmed the item was still available and provided additional details about its condition, including minor cosmetic wear on the body but fully functional optics and mechanics. The buyer asked about the shutter count and whether the lens was included. The seller confirmed a low shutter count of approximately 12,000 and noted that the 50mm f/1.8 lens was included in the price. After some negotiation, they agreed on a price of $450, down from the original asking price of $500. The buyer requested shipping to their address and the seller agreed to ship via insured priority mail. They exchanged contact information for payment processing and the seller promised to ship within two business days of receiving payment.":
    "بدأت المحادثة باستفسار المشتري عن كاميرا قديمة معروضة للبيع. وأكّد البائع أن السلعة ما زالت متاحة، وقدّم تفاصيل إضافية عن حالتها، تشمل أثرًا بسيطًا للاستعمال على الهيكل مع بقاء العدسات والأجزاء الميكانيكية تعمل بكامل كفاءتها. وسأل المشتري عن عدد مرّات الغالق وما إذا كانت العدسة مشمولة. فأكّد البائع أن عدد مرّات الغالق منخفض ويبلغ نحو 12,000، وأشار إلى أن عدسة 50mm f/1.8 مشمولة في السعر. وبعد بعض التفاوض، اتفقا على سعر 450 دولارًا بدلًا من السعر المطلوب أصلًا وهو 500 دولار. وطلب المشتري الشحن إلى عنوانه، فوافق البائع على الشحن بالبريد الممتاز المؤمَّن. وتبادلا معلومات التواصل لإتمام الدفع، ووعد البائع بالشحن خلال يومَي عمل من استلام المبلغ.",

  /* ─── Meta chip labels ─── */
  tokens: "رموز",
  themes: "السمات",
  font: "الخط",
  prefix: "البادئة",
  primary: "الأساسي",
  neutrals: "المحايدة",
  alerts: "التنبيهات",
  semantic: "دلالية",
  family: "العائلة",
  sizes: "الأحجام",
  weights: "الأوزان",
  base: "الأساس",
  steps: "الخطوات",
  range: "المدى",
  curated: "منتقاة",
  variants: "الأنماط",
  axes: "المحاور",
  total: "الإجمالي",
  icons: "الأيقونات",
  assets: "الأصول",
  "total assets": "إجمالي الأصول",
  levels: "المستويات",
  categories: "الفئات",

  /* ─── Tooltip, fixtures and field copy (RTL sweep) ─── */

  /* ─── Core Components — search count label ─── */

  /* ─── Core Components — composed-label parts and last fixtures ─── */
  "shared by":
    "شاركها",
  "Images":
    "صور",
  "hello":
    "مرحبًا",
  "the set":
    "المجموعة",

  /* ─── Core Components — remaining JSDoc blocks ─── */
  "**Main Actions — Pin.** Pinning conversations and messages, mirrored from the\nWeb Desktop Chat UI Kit designs.\n\nTwo flows:\n\n- **Pin Conversation** — from a conversation row's context menu: confirm in a\ndialog, the row gains a pin glyph and a toast confirms. Unpinning mirrors\nthe same steps.\n- **Pin Message** — from a message's context menu (*Organise → Pin message*):\nconfirm in a dialog, the bubble gains a pin glyph next to its time and a\ntoast confirms. Pinned messages collect in the **Pinned Messages** panel\n(chat header **⋮ → Pinned messages**), where each item can be unpinned,\ncopied or muted; clicking one jumps to it in the conversation.\n\nRenders identically in dark mode via the theme toggle — every color is a\nFoundations token.":
    "**الإجراءات الرئيسية — التثبيت.** تثبيت المحادثات والرسائل، منقولًا عن\nتصاميم حزمة واجهة الدردشة لسطح المكتب.\n\nمساران:\n\n- **تثبيت المحادثة** — من قائمة سياق صف المحادثة: أكّد في نافذة\nحوارية، فيكتسب الصف أيقونة تثبيت ويؤكّد إشعار منبثق ذلك. وإلغاء التثبيت\nيتبع الخطوات نفسها.\n- **تثبيت الرسالة** — من قائمة سياق الرسالة (*تنظيم ← تثبيت الرسالة*):\nأكّد في نافذة حوارية، فتكتسب الفقاعة أيقونة تثبيت بجوار وقتها ويؤكّد\nإشعار منبثق ذلك. وتُجمع الرسائل المثبّتة في لوحة **الرسائل المثبّتة**\n(ترويسة الدردشة **⋮ ← الرسائل المثبّتة**)، حيث يمكن إلغاء تثبيت كل عنصر\nأو نسخه أو كتم إشعاراته؛ والضغط على أحدها ينقلك إليه في المحادثة.\n\nيُعرض بالشكل نفسه في الوضع الداكن عبر مبدّل السمة — فكل لون هو\nرمز من رموز الأساسيات.",
  "**Main Actions — Save.** Saving messages in a conversation.":
    "**الإجراءات الرئيسية — الحفظ.** حفظ الرسائل في محادثة.",
  "**Main Actions — Thread Notifications.** Notification behaviour for message\nthreads.":
    "**الإجراءات الرئيسية — إشعارات السلسلة.** سلوك الإشعارات لسلاسل\nالرسائل.",
  "**Attachment Cards.** The standalone attachment-card primitives — Document,\nImage, Video and Audio — in every state, on both desktop and mobile.\n\nThe top-right corner is a **single slot**: it shows the remove **✕**\n(default), a **spinner** (loading), or an **error** mark (failed) — never two\nat once. On mobile there is no hover, so the ✕ is persistent; during loading\nthe spinner takes that slot instead of the ✕ (which would otherwise collide\nwith the error mark when an upload fails).":
    "**بطاقات المرفقات.** عناصر بطاقات المرفقات المستقلة — مستند\nوصورة وفيديو وصوت — في كل الحالات، على سطح المكتب والجوال.\n\nالركن العلوي في نهاية السطر هو **خانة واحدة**: تعرض زر الإزالة **✕**\n(افتراضيًا)، أو **مؤشّرًا دوّارًا** (أثناء التحميل)، أو علامة **خطأ** (عند الفشل) — ولا تظهر اثنتان\nمعًا أبدًا. وعلى الجوال لا يوجد تمرير، فتبقى ✕ ظاهرة دائمًا؛ وأثناء التحميل\nيشغل المؤشّر الدوّار تلك الخانة بدل ✕ (التي كانت ستتعارض\nمع علامة الخطأ عند فشل الرفع).",
  "**Multi Attachments — End to End.** A single chat with the design-system\n**Single Line Composer** wired up: **drag files onto the chat** (or use ＋) to\nqueue previews, then **Send** to post them as separate-format bubbles running\n*uploading → read*. The thread is pre-seeded with the range of states.":
    "**المرفقات المتعددة — من البداية إلى النهاية.** محادثة واحدة مع\n**مُنشئ السطر الواحد** من نظام التصميم موصولًا: **اسحب الملفات إلى الدردشة** (أو استخدم ＋)\nلوضع المعاينات في الانتظار، ثم **إرسال** لنشرها كفقاعات منفصلة لكل تنسيق تمتد\n*من الرفع حتى القراءة*. والسلسلة مهيّأة مسبقًا بمجموعة الحالات.",
  "**Multi Attachments — In Composer.** How a batch of mixed attachments looks\nwhile queued in the message composer, before the message is sent. Previews\nsit in a horizontally scrollable strip between the input and the toolbar.":
    "**المرفقات المتعددة — داخل المُنشئ.** كيف تبدو دفعة مرفقات مختلطة\nأثناء انتظارها في مُنشئ الرسائل قبل الإرسال. تقع المعاينات\nفي شريط أفقي قابل للتمرير بين حقل الإدخال وشريط الأدوات.",
  "**Multi Attachments — In Search.** The global chat search, filtered by\nattachment type. Each filter renders its results differently:\n\n- **Photos / Videos** — a media thumbnail with a \"+N\" count on the right.\n- **Documents** — the first document's icon with a stack behind it, plus time.\nWith a caption the count is appended after it — \"the signed copy · 6 Files\".\n- **Audio** — a play button on the left, plus time.\n\nThe **All** filter is intentionally not shown here — it falls back to the\nnormal conversation list; these views are the attachment-type filters.":
    "**المرفقات المتعددة — في البحث.** بحث الدردشة الشامل مُرشَّحًا حسب\nنوع المرفق، ويعرض كل مرشّح نتائجه بشكل مختلف:\n\n- **الصور / الفيديو** — صورة وسائط مصغّرة مع عدد «+N» في نهاية السطر.\n- **المستندات** — أيقونة المستند الأول وخلفها حزمة، مع الوقت.\nوعند وجود تعليق يُضاف العدد بعده — «النسخة الموقّعة · 6 ملفات».\n- **الصوت** — زر تشغيل في البداية، مع الوقت.\n\nلا يُعرض مرشّح **الكل** هنا عمدًا — إذ يرجع إلى\nقائمة المحادثات العادية، وهذه العروض هي مرشّحات أنواع المرفقات.",
  "**Multi Attachments — Sent & Received.** How attachments render in the\nconversation once sent.\n\nEvery **format goes separately** — images, videos, documents and audio each\nbecome their own message bubble, stacked one below another. Multiple items of\nthe same format group into a grid (an image grid, a video grid); different\nformats never share a bubble. A caption or a quoted reply attaches to a single\nbubble.":
    "**المرفقات المتعددة — المُرسَلة والواردة.** كيف تُعرض المرفقات في\nالمحادثة بعد إرسالها.\n\n**كل تنسيق يُرسل على حدة** — تصبح الصور والفيديو والمستندات والصوتيات كل منها\nفقاعة رسالة خاصة بها، تتراكم واحدة تحت الأخرى. وتتجمّع العناصر المتعددة من\nالتنسيق نفسه في شبكة (شبكة صور، شبكة فيديو)، بينما لا تتشارك\nالتنسيقات المختلفة فقاعة واحدة أبدًا. ويرتبط التعليق أو الاقتباس بفقاعة\nواحدة.",
  "Replying **to** a multi-attachment message. The quoted preview summarises the\noriginal — \"Reply to {name}\" + an icon + \"6 Images · hello\" / \"6 Videos\".":
    "الردّ **على** رسالة متعددة المرفقات. تلخّص المعاينة المقتبسة الرسالة\nالأصلية — «ردّ على {name}» + أيقونة + «6 صور · مرحبًا» / «6 مقاطع فيديو».",
  "**Audio attachment — all states.** An audio *file* attached from the picker.\n\n> **Not a voice note.** A voice note is *recorded* in the composer via the\n> mic and cannot be added through the attachment picker. It shares this\n> waveform card visually, but it is a separate recording flow — so it is not\n> represented as an attachable type here.":
    "**مرفق صوتي — كل الحالات.** *ملف* صوتي مُرفق من المُنتقي.\n\n> **ليست ملاحظة صوتية.** الملاحظة الصوتية *تُسجَّل* في المُنشئ عبر\n> الميكروفون ولا يمكن إضافتها من مُنتقي المرفقات. وهي تشترك بصريًا مع بطاقة\n> الموجة الصوتية هذه، لكنها مسار تسجيل منفصل — ولذلك لا تُمثَّل\n> هنا كنوع قابل للإرفاق.",
  "**File attachment — all states.** Documents (PDF / DOC / XLS) across the\ncomposer (loading → default → hover → remove → error), delivered as stacked\nfile cards (single, multiple, uploading, failed), and as a search list.":
    "**مرفق ملف — كل الحالات.** المستندات (PDF / DOC / XLS) عبر\nالمُنشئ (تحميل ← افتراضي ← تمرير ← إزالة ← خطأ)، ومُسلَّمة كبطاقات\nملفات متراكمة (مفردة، متعددة، قيد الرفع، فاشلة)، وكقائمة بحث.",
  "**Image attachment — all states.** Image files across every surface: queued\nin the composer (loading → default → hover → remove → error), delivered in a\nmessage (single, grids, \"+N\" overflow, uploading, failed), and in search.":
    "**مرفق صورة — كل الحالات.** ملفات الصور عبر كل السطوح: في انتظار\nالمُنشئ (تحميل ← افتراضي ← تمرير ← إزالة ← خطأ)، ومُسلَّمة في\nرسالة (مفردة، شبكات، فائض «+N»، قيد الرفع، فاشلة)، وفي البحث.",
  "**Video attachment — all states.** Same lifecycle as images, but every tile\ncarries a play overlay (and a duration badge in search). Composer preview\nstates, delivered single/grid/overflow, uploading/failed, and search.":
    "**مرفق فيديو — كل الحالات.** الدورة نفسها كالصور، لكن كل بلاطة\nتحمل طبقة تشغيل (وشارة مدة في البحث). حالات معاينة المُنشئ،\nوالتسليم مفردًا أو شبكةً أو فائضًا، والرفع والفشل، والبحث.",
  "Interactive playground — select an action to highlight.":
    "مساحة تجريبية تفاعلية — اختر إجراءً لتمييزه.",
  "Interactive playground — use the controls to switch attachment type and state.":
    "مساحة تجريبية تفاعلية — استخدم لوحة التحكم لتبديل نوع المرفق وحالته.",
  "Interactive playground — select a formatting type.":
    "مساحة تجريبية تفاعلية — اختر نوع تنسيق.",
  "Interactive playground — select a panel type to preview above the composer.":
    "مساحة تجريبية تفاعلية — اختر نوع لوحة لمعاينتها أعلى المُنشئ.",
  "Interactive playground — use the controls panel to switch states.":
    "مساحة تجريبية تفاعلية — استخدم لوحة التحكم لتبديل الحالات.",

  /* ─── Core Components — weekday missed by a tooling bug ─── */
  "Monday":
    "الاثنين",

  /* ─── Core Components — remaining meta descriptions ─── */
  "A side panel displaying a threaded conversation with the parent message,\nreply separator, reply bubbles, and a message composer.\n\n**Structure (from Figma node 4090:846250):**\n- Container: 420px wide, full height, white bg, border `#f5f5f5`\n- Header: 64px, \"Thread\" (20px bold), close + info icons\n- Chat area: date chip, parent bubble, \"N replies\" separator + line, reply bubbles\n- Sent bubbles: bg `#6852d6`, white text, radius 12px\n- Received bubbles: bg `#e9eaeb`, dark text, radius 12px\n- Composer: input + toolbar with icons + send button":
    "لوحة جانبية تعرض محادثة متسلسلة تضم الرسالة الأصلية\nوفاصل الردود وفقاعات الردود ومُنشئ الرسائل.\n\n**البنية (من عقدة Figma رقم 4090:846250):**\n- الحاوية: عرض 420 بكسل، ارتفاع كامل، خلفية بيضاء، حدّ `#f5f5f5`\n- الترويسة: 64 بكسل، «السلسلة» (20 بكسل عريض)، مع أيقونتي الإغلاق والمعلومات\n- منطقة الدردشة: شريحة التاريخ، الفقاعة الأصلية، فاصل «N ردود» مع خط، ثم فقاعات الردود\n- الفقاعات المُرسَلة: خلفية `#6852d6`، نص أبيض، استدارة 12 بكسل\n- الفقاعات الواردة: خلفية `#e9eaeb`، نص داكن، استدارة 12 بكسل\n- المُنشئ: حقل إدخال + شريط أدوات بأيقونات + زر إرسال",
  "Actions available in the Single Line Composer. Each action button triggers a\nspecific feature (Attachment, Voice Record, Emoji, Sticker, Formatting, AI).\nWhen active, icons appear filled in primary purple and a corresponding\ndialog/popup is shown above the composer.\n\n**Layout:** Plus icon | input | emoji, sticker, mic | send — all in one row.\n\n**Figma:** [Message Composer – Actions](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-29938)":
    "الإجراءات المتاحة في مُنشئ السطر الواحد. يُشغّل كل زر ميزة\nمحدّدة (مرفق، تسجيل صوتي، رمز تعبيري، ملصق، تنسيق، ذكاء اصطناعي).\nوعند التفعيل تظهر الأيقونات ممتلئة باللون البنفسجي الأساسي مع نافذة\nأو قائمة منبثقة مقابلة أعلى المُنشئ.\n\n**التخطيط:** أيقونة الزائد | حقل الإدخال | رمز تعبيري وملصق وميكروفون | إرسال — كلها في صف واحد.\n\n**Figma:** [مُنشئ الرسائل – الإجراءات](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-29938)",

  /* ─── Core Components — meta descriptions with Figma links ─── */
  "Actions available in the Multi Line Composer toolbar. Each action button\ntriggers a specific feature (Attachment, Voice Record, Emoji, Sticker,\nFormatting, AI). When active, icons appear filled and a corresponding\ndialog/popup is shown.\n\n**Figma:** [Message Composer – Actions](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=18591-7146)":
    "الإجراءات المتاحة في شريط أدوات مُنشئ الأسطر المتعددة. يُشغّل كل زر ميزة محدّدة (مرفق، تسجيل صوتي، رمز تعبيري، ملصق، تنسيق، ذكاء اصطناعي). وعند التفعيل تظهر الأيقونات ممتلئة مع نافذة أو قائمة منبثقة مقابلة.\n\n**Figma:** [مُنشئ الرسائل – الإجراءات](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=18591-7146)",
  "The Multi Line Composer Attachment feature displays file previews in a\nhorizontally scrollable row between the input area and the action toolbar.\nSupported attachment types: Image, Video, Document, Audio, and Voice.\n\n**Figma:** [Message Composer – Attachment](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/?node-id=19113-34725)":
    "تعرض ميزة المرفقات في مُنشئ الأسطر المتعددة معاينات الملفات في صف أفقي قابل للتمرير بين منطقة الإدخال وشريط الأدوات. وأنواع المرفقات المدعومة هي: صورة وفيديو ومستند وصوت وملاحظة صوتية.\n\n**Figma:** [مُنشئ الرسائل – المرفقات](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/?node-id=19113-34725)",
  "Rich Text Formatting in the Multi Line Composer. When the formatting mode is\nactive (Aa button highlighted), a formatting toolbar appears above the input area.\nEach formatting type shows the toolbar with the active option highlighted.\n\n**Figma:** [Message Composer – Formatting](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-33855)":
    "تنسيق النص الغني في مُنشئ الأسطر المتعددة. عندما يكون وضع التنسيق نشطًا (زر أ ب مميّز)، يظهر شريط أدوات التنسيق أعلى منطقة الإدخال، ويعرض كل نوع تنسيق الشريط مع تمييز الخيار النشط.\n\n**Figma:** [مُنشئ الرسائل – التنسيق](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-33855)",
  "The Panel feature of the Multi Line Composer displays AI-powered panels\nabove the message input area. Panels include Conversation Starters,\nSuggest a Reply, and Conversation Summary.\n\n**Figma:** [Message Composer – Panel](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-29938)":
    "تعرض ميزة اللوحة في مُنشئ الأسطر المتعددة لوحات مدعومة بالذكاء الاصطناعي أعلى منطقة إدخال الرسالة، وتشمل بادئات المحادثة واقتراح الردّ وملخّص المحادثة.\n\n**Figma:** [مُنشئ الرسائل – اللوحة](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-29938)",
  "The Multi Line Composer is the primary message input area for chat interfaces.\nIt supports three interactive states: Placeholder (idle), Focus (active cursor),\nand Typing (text entered, send enabled).\n\n**Figma:** [Message Composer – State](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-29938)":
    "مُنشئ الأسطر المتعددة هو منطقة إدخال الرسائل الأساسية في واجهات الدردشة، ويدعم ثلاث حالات تفاعلية: نائب (خامل)، وتركيز (مؤشّر نشط)، وكتابة (نص مُدخَل مع تفعيل الإرسال).\n\n**Figma:** [مُنشئ الرسائل – الحالة](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-29938)",
  "The Single Line Composer Attachment feature displays file previews in a\nhorizontally scrollable row between the input area and the action toolbar.\nSupported attachment types: Image, Video, Document, Audio, and Voice.\n\n**Figma:** [Message Composer – Attachment](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/?node-id=19113-34725)":
    "تعرض ميزة المرفقات في مُنشئ السطر الواحد معاينات الملفات في صف أفقي قابل للتمرير بين منطقة الإدخال وشريط الأدوات. وأنواع المرفقات المدعومة هي: صورة وفيديو ومستند وصوت وملاحظة صوتية.\n\n**Figma:** [مُنشئ الرسائل – المرفقات](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/?node-id=19113-34725)",
  "Rich Text Formatting in the Single Line Composer. When formatting is active,\na formatting toolbar appears above the single-line input. The composer\nremains inline with all icons in one row.\n\n**Figma:** [Message Composer – Formatting](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-33855)":
    "تنسيق النص الغني في مُنشئ السطر الواحد. عندما يكون التنسيق نشطًا، يظهر شريط أدوات التنسيق أعلى حقل السطر الواحد، ويبقى المُنشئ ضمن السطر بكل أيقوناته في صف واحد.\n\n**Figma:** [مُنشئ الرسائل – التنسيق](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-33855)",
  "The Panel feature of the Single Line Composer displays AI-powered panels\nabove the message input area. Panels include Conversation Starters,\nSuggest a Reply, and Conversation Summary.\n\n**Figma:** [Message Composer – Panel](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-29938)":
    "تعرض ميزة اللوحة في مُنشئ السطر الواحد لوحات مدعومة بالذكاء الاصطناعي أعلى منطقة إدخال الرسالة، وتشمل بادئات المحادثة واقتراح الردّ وملخّص المحادثة.\n\n**Figma:** [مُنشئ الرسائل – اللوحة](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-29938)",
  "The Single Line Composer is the primary message input area for chat interfaces.\nIt supports three interactive states: Placeholder (idle), Focus (active cursor),\nand Typing (text entered, send enabled).\n\n**Figma:** [Message Composer – State](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-29938)":
    "مُنشئ السطر الواحد هو منطقة إدخال الرسائل الأساسية في واجهات الدردشة، ويدعم ثلاث حالات تفاعلية: نائب (خامل)، وتركيز (مؤشّر نشط)، وكتابة (نص مُدخَل مع تفعيل الإرسال).\n\n**Figma:** [مُنشئ الرسائل – الحالة](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-29938)",

  /* ─── Core Components — batch 10 ─── */
  "Search bar in default state (unfocused, no text).":
    "شريط البحث في الحالة الافتراضية (غير مُركَّز وبلا نص).",
  "Search bar in idle state with placeholder text.":
    "شريط البحث في الحالة الخاملة مع نص نائب.",
  "Search bar with complete text and clear button.":
    "شريط البحث بنص كامل وزر مسح.",
  "Search bar with filter chips and complete text.":
    "شريط البحث مع شرائح التصفية ونص كامل.",
  "Search bar with filter chips and partial text.":
    "شريط البحث مع شرائح التصفية ونص جزئي.",
  "Search bar with filter chips in default state.":
    "شريط البحث مع شرائح التصفية في الحالة الافتراضية.",
  "Search bar with partial text input and clear button.":
    "شريط البحث بنص جزئي وزر مسح.",
  "Search list row — icon tile, name, size · sharer, download.":
    "صف قائمة البحث — بلاطة أيقونة، الاسم، الحجم · المُشارِك، التنزيل.",
  "Search list row — play button, title, seek bar, time · sender.":
    "صف قائمة البحث — زر التشغيل، العنوان، شريط التنقّل، الوقت · المُرسِل.",
  "Search video tile with play overlay + duration badge.":
    "بلاطة فيديو في البحث تعلوها أيقونة تشغيل مع شارة المدة.",
  "Several audio clips — like documents, one bubble with a card per clip.":
    "عدة مقاطع صوتية — مثل المستندات، فقاعة واحدة تضم بطاقة لكل مقطع.",
  "Several documents — ONE bubble; each document is a washed card inside it. With a caption it sits under the cards; a reply quote sits above them.":
    "عدة مستندات — فقاعة واحدة، وكل مستند بطاقة باهتة داخلها. ويقع التعليق أسفل البطاقات، بينما يقع الاقتباس أعلاها.",
  "Single image displayed at full width within the received bubble.":
    "صورة مفردة تُعرض بالعرض الكامل داخل الفقاعة الواردة.",
  "Single image displayed at full width within the sent bubble.":
    "صورة مفردة تُعرض بالعرض الكامل داخل الفقاعة المُرسَلة.",
  "Single image in loading state with a cancel button overlay.":
    "صورة مفردة في حالة التحميل يعلوها زر إلغاء.",
  "Single video received with play button overlay.":
    "فيديو مفرد وارد يعلوه زر تشغيل.",
  "Single-slot corner control — ✕ remove, spinner while uploading, error mark on failure.":
    "عنصر ركني بخانة واحدة — ✕ للإزالة، ومؤشّر دوّار أثناء الرفع، وعلامة خطأ عند الفشل.",
  "Single-slot corner: ✕ remove (hover / mobile), never colliding with loading or error.":
    "الركن ذو الخانة الواحدة: ✕ للإزالة (عند التمرير أو على الجوال)، ولا يتعارض أبدًا مع التحميل أو الخطأ.",
  "Sticker action selected — StickerPicker appears above, aligned with sticker icon.":
    "تم اختيار إجراء الملصقات — يظهر مُنتقي الملصقات في الأعلى بمحاذاة أيقونة الملصق.",
  "Strikethrough formatting — selected text rendered with line-through.":
    "تنسيق الخط المتوسّط — يُعرض النص المحدّد ويتوسّطه خط.",
  "Underline formatting — selected text rendered with underline.":
    "تنسيق الخط السفلي — يُعرض النص المحدّد وتحته خط.",
  "Suggest a Reply card displayed above the composer.":
    "بطاقة اقتراح الردّ معروضة أعلى المُنشئ.",
  "The Multi Line Composer Attachment feature displays file previews in a horizontally scrollable row between the input area and the action toolbar. Supported attachment types: Image, Video, Document, Audio, and Voice.":
    "تعرض ميزة المرفقات في مُنشئ الأسطر المتعددة معاينات الملفات في صف أفقي قابل للتمرير بين منطقة الإدخال وشريط الأدوات. وأنواع المرفقات المدعومة هي: صورة وفيديو ومستند وصوت وملاحظة صوتية.",
  "The Single Line Composer Attachment feature displays file previews in a horizontally scrollable row between the input area and the action toolbar. Supported attachment types: Image, Video, Document, Audio, and Voice.":
    "تعرض ميزة المرفقات في مُنشئ السطر الواحد معاينات الملفات في صف أفقي قابل للتمرير بين منطقة الإدخال وشريط الأدوات. وأنواع المرفقات المدعومة هي: صورة وفيديو ومستند وصوت وملاحظة صوتية.",
  "The Multi Line Composer is the primary message input area for chat interfaces. It supports three interactive states: Placeholder (idle), Focus (active cursor), and Typing (text entered, send enabled).":
    "مُنشئ الأسطر المتعددة هو منطقة إدخال الرسائل الأساسية في واجهات الدردشة، ويدعم ثلاث حالات تفاعلية: نائب (خامل)، وتركيز (مؤشّر نشط)، وكتابة (نص مُدخَل مع تفعيل الإرسال).",
  "The Single Line Composer is the primary message input area for chat interfaces. It supports three interactive states: Placeholder (idle), Focus (active cursor), and Typing (text entered, send enabled).":
    "مُنشئ السطر الواحد هو منطقة إدخال الرسائل الأساسية في واجهات الدردشة، ويدعم ثلاث حالات تفاعلية: نائب (خامل)، وتركيز (مؤشّر نشط)، وكتابة (نص مُدخَل مع تفعيل الإرسال).",
  "The Panel feature of the Multi Line Composer displays AI-powered panels above the message input area. Panels include Conversation Starters, Suggest a Reply, and Conversation Summary.":
    "تعرض ميزة اللوحة في مُنشئ الأسطر المتعددة لوحات مدعومة بالذكاء الاصطناعي أعلى منطقة إدخال الرسالة، وتشمل بادئات المحادثة واقتراح الردّ وملخّص المحادثة.",
  "The Panel feature of the Single Line Composer displays AI-powered panels above the message input area. Panels include Conversation Starters, Suggest a Reply, and Conversation Summary.":
    "تعرض ميزة اللوحة في مُنشئ السطر الواحد لوحات مدعومة بالذكاء الاصطناعي أعلى منطقة إدخال الرسالة، وتشمل بادئات المحادثة واقتراح الردّ وملخّص المحادثة.",
  "The Pinned Messages panel lists every pinned message in the chat.":
    "تسرد لوحة الرسائل المثبّتة كل رسالة مثبّتة في الدردشة.",
  "The buyer is interested in the watch and wants to confirm if it is still available. They are asking about the condition and whether the product is original, along with details like box and warranty. There are also questions around pricing and if there is any room for negotiation.":
    "المشتري مهتم بالساعة ويريد التأكد من أنها ما زالت متاحة. ويسأل عن حالتها وعمّا إذا كان المنتج أصليًا، إضافة إلى تفاصيل مثل العلبة والضمان. كما توجد أسئلة حول السعر وإمكانية التفاوض.",
  "The buyer is interested in the watch and wants to confirm if it is still available. They are asking about the condition and whether the product is original, along with details like box and warranty. There are also questions around pricing and if there is any room for negotiation. The buyer has requested additional photos to better evaluate the item. Overall, they are trying to verify authenticity, condition, and value before making a decision.":
    "المشتري مهتم بالساعة ويريد التأكد من أنها ما زالت متاحة. ويسأل عن حالتها وعمّا إذا كان المنتج أصليًا، إضافة إلى تفاصيل مثل العلبة والضمان. كما توجد أسئلة حول السعر وإمكانية التفاوض. وقد طلب المشتري صورًا إضافية لتقييم القطعة بشكل أفضل. وإجمالًا، هو يحاول التحقق من الأصالة والحالة والقيمة قبل اتخاذ قراره.",
  "The chat header's ⋮ menu holds the \"Pinned messages\" entry.":
    "تحتوي قائمة ⋮ في ترويسة الدردشة على مدخل «الرسائل المثبّتة».",
  "The composer tray loaded with every attachment format at once — photos, video, documents and audio queued together above a thread of multi-attachment messages. Press Send to post them as separate-format bubbles.":
    "درج المُنشئ محمّلًا بكل تنسيقات المرفقات دفعة واحدة — صور وفيديو ومستندات وصوتيات في الانتظار معًا فوق سلسلة رسائل متعددة المرفقات. اضغط إرسال لنشرها كفقاعات منفصلة لكل تنسيق.",
  "The conversation row's context menu offers \"Pin conversation\".":
    "تعرض قائمة سياق صف المحادثة خيار «تثبيت المحادثة».",
  "The design-system Single Line and Multi Line composers, empty (no attachments) — the base surface for the drag-and-drop states.":
    "مُنشئا السطر الواحد والأسطر المتعددة من نظام التصميم، فارغين بلا مرفقات — وهما السطح الأساسي لحالات السحب والإفلات.",
  "The global chat search, filtered by attachment type. Each filter renders its results differently:":
    "بحث الدردشة الشامل مُرشَّحًا حسب نوع المرفق، ويعرض كل مرشّح نتائجه بشكل مختلف:",
  "The standalone attachment-card primitives — Document, Image, Video and Audio — in every state, on both desktop and mobile.":
    "عناصر بطاقات المرفقات المستقلة — مستند وصورة وفيديو وصوت — في كل الحالات، على سطح المكتب والجوال.",
  "Three images — one large on left, two stacked on right.":
    "ثلاث صور — واحدة كبيرة في البداية واثنتان متراكبتان في النهاية.",
  "Typing state — user has entered text, send button becomes active.":
    "حالة الكتابة — أدخل المستخدم نصًا وأصبح زر الإرسال نشطًا.",
  "Unfocused state, visually same as placeholder.":
    "حالة عدم التركيز، وتبدو مطابقة للحالة النائبة.",
  "Unpinned — removed from the panel, toast confirms.":
    "غير مثبّتة — أُزيلت من اللوحة ويؤكّد إشعار منبثق ذلك.",
  "Unpinned — the glyph is gone and a toast confirms.":
    "غير مثبّتة — اختفت الأيقونة ويؤكّد إشعار منبثق ذلك.",
  "Unsupported / undecodable attachments — image & video thumbnails fall back to the generic \"?\" file placeholder; documents and audio show the \"?\" icon with a download control.":
    "المرفقات غير المدعومة أو التي يتعذّر فك ترميزها — ترجع صور الصور والفيديو المصغّرة إلى نائب الملف العام «؟»، بينما تعرض المستندات والصوتيات أيقونة «؟» مع عنصر تنزيل.",
  "Uploading — some attachments still in flight (spinner badge).":
    "جارٍ الرفع — بعض المرفقات ما زالت قيد الإرسال (شارة مؤشّر دوّار).",
  "Vertical stack of one sender's bubbles — mixed formats become separate bubbles, aligned to the sender's side.":
    "تراكم رأسي لفقاعات مُرسِل واحد — تصبح التنسيقات المختلطة فقاعات منفصلة بمحاذاة جهة المُرسِل.",
  "Voice Record action selected — VoiceRecorderPopup appears above, aligned with mic icon.":
    "تم اختيار إجراء التسجيل الصوتي — تظهر نافذة المسجّل في الأعلى بمحاذاة أيقونة الميكروفون.",
  "Voice attachment in all states (including Play and Pause).":
    "مرفق صوتي في كل الحالات (بما فيها التشغيل والإيقاف المؤقّت).",
  "You're welcome! Let me know if you find any other good deals.":
    "على الرحب والسعة! أخبرني إن وجدت عروضًا جيدة أخرى.",
  "a multi-attachment message. The quoted preview summarises the original — \"Reply to {name}\" + an icon + \"6 Images · hello\" / \"6 Videos\".":
    "رسالة متعددة المرفقات. تلخّص المعاينة المقتبسة الرسالة الأصلية — «ردّ على {name}» + أيقونة + «6 صور · مرحبًا» / «6 مقاطع فيديو».",
  "filter is intentionally not shown here — it falls back to the normal conversation list; these views are the attachment-type filters.":
    "لا يُعرض المرشّح هنا عمدًا — إذ يرجع إلى قائمة المحادثات العادية، وهذه العروض هي مرشّحات أنواع المرفقات.",
  "in the composer via the mic and cannot be added through the attachment picker. It shares this waveform card visually, but it is a separate recording flow — so it is not represented as an attachable type here.":
    "في المُنشئ عبر الميكروفون ولا يمكن إضافتها من مُنتقي المرفقات. وهي تشترك بصريًا مع بطاقة الموجة الصوتية هذه، لكنها مسار تسجيل منفصل — ولذلك لا تُمثَّل هنا كنوع قابل للإرفاق.",
  "looks identical but is recorded via the mic — it is not attachable in the composer, so it isn't shown as a type here.":
    "تبدو مطابقة لكنها تُسجَّل عبر الميكروفون — وهي غير قابلة للإرفاق في المُنشئ، فلا تُعرض هنا كنوع.",
  "mark (failed) — never two at once. On mobile there is no hover, so the ✕ is persistent; during loading the spinner takes that slot instead of the ✕ (which would otherwise collide with the error mark when an upload fails).":
    "علامة (فشل) — ولا تظهر اثنتان معًا أبدًا. وعلى الجوال لا يوجد تمرير، فتبقى ✕ ظاهرة دائمًا؛ وأثناء التحميل يشغل المؤشّر الدوّار تلك الخانة بدل ✕ (التي كانت ستتعارض مع علامة الخطأ عند فشل الرفع).",
  "to post them as separate-format bubbles running":
    "لنشرها كفقاعات منفصلة لكل تنسيق تمتد",
  "— a media thumbnail with a \"+N\" count on the right.":
    "— صورة وسائط مصغّرة مع عدد «+N» في نهاية السطر.",
  "— from a conversation row's context menu: confirm in a dialog, the row gains a pin glyph and a toast confirms. Unpinning mirrors the same steps.":
    "— من قائمة سياق صف المحادثة: أكّد في نافذة حوارية، فيكتسب الصف أيقونة تثبيت ويؤكّد إشعار منبثق ذلك. وإلغاء التثبيت يتبع الخطوات نفسها.",
  "— images, videos, documents and audio each become their own message bubble, stacked one below another. Multiple items of the same format group into a grid (an image grid, a video grid); different formats never share a bubble. A caption or a quoted reply attaches to a single bubble.":
    "— تصبح الصور والفيديو والمستندات والصوتيات كل منها فقاعة رسالة خاصة بها، تتراكم واحدة تحت الأخرى. وتتجمّع العناصر المتعددة من التنسيق نفسه في شبكة (شبكة صور، شبكة فيديو)، بينما لا تتشارك التنسيقات المختلفة فقاعة واحدة أبدًا. ويرتبط التعليق أو الاقتباس بفقاعة واحدة.",
  "— the first document's icon with a stack behind it, plus time. With a caption the count is appended after it — \"the signed copy · 6 Files\".":
    "— أيقونة المستند الأول وخلفها حزمة، مع الوقت. وعند وجود تعليق يُضاف العدد بعده — «النسخة الموقّعة · 6 ملفات».",

  /* ─── Core Components — batch 9 ─── */
  "Filter-specific result rows: right media thumb, fanned doc stack + count, play button + time.":
    "صفوف نتائج خاصة بكل مرشّح: صورة وسائط مصغّرة في النهاية، وحزمة مستندات مروّحة مع العدد، وزر تشغيل مع الوقت.",
  "Focus state — input is focused, ready for typing.":
    "حالة التركيز — الحقل مُركَّز وجاهز للكتابة.",
  "Formatting action selected — format toolbar appears inside the composer above the input row.":
    "تم اختيار إجراء التنسيق — يظهر شريط أدوات التنسيق داخل المُنشئ أعلى صف الإدخال.",
  "Four images in a 2×2 grid with a '+N' overlay on the last image indicating more.":
    "أربع صور في شبكة 2×2 مع طبقة «+N» على الصورة الأخيرة تشير إلى وجود المزيد.",
  "Gray background. Same as missed for video calls.":
    "خلفية رمادية، مثل الفائتة في مكالمات الفيديو.",
  "Gray background. Same as missed — user actively declined the call.":
    "خلفية رمادية، مثل الفائتة — رفض المستخدم المكالمة عمدًا.",
  "Great, I'll check it out. Any other recommendations?":
    "رائع، سألقي نظرة عليه. هل من ترشيحات أخرى؟",
  "HTML & CSS usage reference for the Thread View component.":
    "مرجع الاستخدام بـ HTML و CSS لمكوّن عرض السلسلة.",
  "HTML + CSS usage reference for attachment previews.":
    "مرجع الاستخدام بـ HTML و CSS لمعاينات المرفقات.",
  "HTML + CSS usage reference for the Panel feature.":
    "مرجع الاستخدام بـ HTML و CSS لميزة اللوحة.",
  "HTML + CSS usage reference for the formatting toolbar.":
    "مرجع الاستخدام بـ HTML و CSS لشريط أدوات التنسيق.",
  "Header: 64px, \"Thread\" (20px bold), close + info icons":
    "الترويسة: 64 بكسل، «السلسلة» (20 بكسل عريض)، مع أيقونتي الإغلاق والمعلومات",
  "Hey! I just wanted to let you know that the package has been shipped and should arrive by Thursday. I've also included t...":
    "أهلًا! أردت إخبارك بأن الطرد قد شُحن ومن المفترض أن يصل بحلول الخميس. كما أضفت أيضًا...",
  "Hey, check out this new design I've been working on!":
    "أهلًا، ألقِ نظرة على هذا التصميم الجديد الذي أعمل عليه!",
  "How a batch of mixed attachments looks while queued in the message composer, before the message is sent. Previews sit in a horizontally scrollable strip between the input and the toolbar.":
    "كيف تبدو دفعة مرفقات مختلطة أثناء انتظارها في مُنشئ الرسائل قبل الإرسال. تقع المعاينات في شريط أفقي قابل للتمرير بين حقل الإدخال وشريط الأدوات.",
  "How attachments render in the conversation once sent.":
    "كيف تُعرض المرفقات في المحادثة بعد إرسالها.",
  "Icon carriers — translucent dark overlay hosts the progress ring (loading) or error mark (mobile error).":
    "حوامل الأيقونات — تحمل طبقة داكنة شبه شفافة حلقة التقدّم (أثناء التحميل) أو علامة الخطأ (خطأ على الجوال).",
  "Image files across every surface: queued in the composer (loading → default → hover → remove → error), delivered in a message (single, grids, \"+N\" overflow, uploading, failed), and in search.":
    "ملفات الصور عبر كل السطوح: في انتظار المُنشئ (تحميل ← افتراضي ← تمرير ← إزالة ← خطأ)، ومُسلَّمة في رسالة (مفردة، شبكات، فائض «+N»، قيد الرفع، فاشلة)، وفي البحث.",
  "Image hidden behind a sensitive content warning with a 'See Photo' action.":
    "صورة مخفية خلف تحذير محتوى حسّاس مع إجراء «عرض الصورة».",
  "In search — media grid tiles and a conversation result.":
    "في البحث — بلاطات شبكة الوسائط ونتيجة محادثة.",
  "In search — the Audio filter renders a play-list of audio results.":
    "في البحث — يعرض مرشّح الصوت قائمة تشغيل بالنتائج الصوتية.",
  "In search — the Documents filter renders a file list.":
    "في البحث — يعرض مرشّح المستندات قائمة ملفات.",
  "In search — video tiles with play + duration, and a conversation result.":
    "في البحث — بلاطات فيديو مع التشغيل والمدة، ونتيجة محادثة.",
  "Incoming long text message truncated with a 'Read more' link.":
    "رسالة نصية واردة طويلة مقتطعة برابط «قراءة المزيد».",
  "Outgoing long text message truncated with a 'Read more' link.":
    "رسالة نصية صادرة طويلة مقتطعة برابط «قراءة المزيد».",
  "Incoming parent message — thread started by another user.":
    "رسالة أصلية واردة — سلسلة بدأها مستخدم آخر.",
  "Italic formatting — selected text rendered in italic.":
    "تنسيق الخط المائل — يُعرض النص المحدّد بخط مائل.",
  "Landscape/horizontal image displayed wider than tall.":
    "صورة عرضية/أفقية تُعرض أوسع من ارتفاعها.",
  "Portrait/vertical image displayed taller than wide.":
    "صورة طولية/رأسية تُعرض أطول من عرضها.",
  "Link formatting — selected text rendered as a hyperlink.":
    "تنسيق الرابط — يُعرض النص المحدّد كرابط تشعّبي.",
  "Media-player card: play/pause button, elapsed-fill seek bar, mm:ss / mm:ss.":
    "بطاقة مشغّل الوسائط: زر تشغيل/إيقاف مؤقّت، وشريط تنقّل يمتلئ مع المدة المنقضية، بصيغة دد:ثث / دد:ثث.",
  "Message composer with the horizontal, scrollable attachment preview strip.":
    "مُنشئ الرسائل مع شريط معاينة المرفقات الأفقي القابل للتمرير.",
  "Multiple attachments with a caption — an image album, and a stacked send where the caption attaches to the last bubble.":
    "مرفقات متعددة مع تعليق — ألبوم صور، وإرسال متراكم يرتبط فيه التعليق بالفقاعة الأخيرة.",
  "Multiple images collapse into a grid within one bubble (\"+N\" past four).":
    "تنطوي الصور المتعددة في شبكة داخل فقاعة واحدة («+N» بعد الأربع).",
  "Multiple images in loading state with a cancel button overlay.":
    "صور متعددة في حالة التحميل يعلوها زر إلغاء.",
  "Multiple videos collapse into their own grid (play overlay on every tile).":
    "تنطوي مقاطع الفيديو المتعددة في شبكة خاصة بها، مع طبقة تشغيل على كل بلاطة.",
  "One bubble per format: media grid, file card or audio card + caption, quoted reply, time and receipt.":
    "فقاعة لكل تنسيق: شبكة وسائط أو بطاقة ملف أو بطاقة صوت + تعليق، مع ردّ مقتبس ووقت وإيصال.",
  "Ordered List formatting — numbered list in the composer.":
    "تنسيق القائمة المرقّمة — قائمة مرقّمة داخل المُنشئ.",
  "Outgoing audio call that was answered and ended.":
    "مكالمة صوتية صادرة تم الرد عليها وانتهت.",
  "Outgoing audio call that was cancelled by the caller.":
    "مكالمة صوتية صادرة ألغاها المتصل.",
  "Outgoing video call that was answered and ended.":
    "مكالمة فيديو صادرة تم الرد عليها وانتهت.",
  "Outgoing video call that was cancelled by the caller.":
    "مكالمة فيديو صادرة ألغاها المتصل.",
  "Outgoing collaborative document bubble with delivered status.":
    "فقاعة مستند تعاوني صادرة بحالة سُلّمت.",
  "Outgoing collaborative document bubble with read receipt.":
    "فقاعة مستند تعاوني صادرة مع إيصال قراءة.",
  "Outgoing collaborative document bubble with sent status.":
    "فقاعة مستند تعاوني صادرة بحالة أُرسلت.",
  "Outgoing collaborative whiteboard bubble with delivered status.":
    "فقاعة سبّورة تعاونية صادرة بحالة سُلّمت.",
  "Outgoing collaborative whiteboard bubble with read receipt.":
    "فقاعة سبّورة تعاونية صادرة مع إيصال قراءة.",
  "Outgoing collaborative whiteboard bubble with sent status.":
    "فقاعة سبّورة تعاونية صادرة بحالة أُرسلت.",
  "Overflow — many attachments; the strip scrolls horizontally.":
    "الفائض — مرفقات كثيرة، ويتمرّر الشريط أفقيًا.",
  "Per-type document glyph (PDF / DOC / XLS / PPT / ZIP / TXT / generic).":
    "أيقونة مستند لكل نوع (PDF / DOC / XLS / PPT / ZIP / TXT / عام).",
  "Pinned sent message — pin glyph next to the time, toast confirms.":
    "رسالة مُرسَلة مثبّتة — أيقونة تثبيت بجوار الوقت، ويؤكّد إشعار منبثق ذلك.",
  "Pinned — the row gains a pin glyph and a toast confirms.":
    "مثبّتة — يكتسب الصف أيقونة تثبيت ويؤكّد إشعار منبثق ذلك.",
  "Pinning conversations and messages, mirrored from the Web Desktop Chat UI Kit designs.":
    "تثبيت المحادثات والرسائل، منقولًا عن تصاميم حزمة واجهة الدردشة لسطح المكتب.",
  "Placeholder state — the default idle state of the composer.":
    "الحالة النائبة — الحالة الخاملة الافتراضية للمُنشئ.",
  "Plus icon | input | emoji, sticker, mic | send — all in one row.":
    "أيقونة الزائد | حقل الإدخال | رمز تعبيري وملصق وميكروفون | إرسال — كلها في صف واحد.",
  "Purple background. Same as ended for video calls.":
    "خلفية بنفسجية، مثل المنتهية في مكالمات الفيديو.",
  "Purple background. Same as ended — caller hung up before answer.":
    "خلفية بنفسجية، مثل المنتهية — أنهى المتصل المكالمة قبل الرد.",
  "Read receipts on a sent attachment: sent (✓), delivered (✓✓), read (✓✓ blue).":
    "إيصالات القراءة على مرفق مُرسَل: أُرسل (✓)، سُلّم (✓✓)، قُرئ (✓✓ أزرق).",
  "Renders identically in dark mode via the theme toggle — every color is a Foundations token.":
    "يُعرض بالشكل نفسه في الوضع الداكن عبر مبدّل السمة — فكل لون هو رمز من رموز الأساسيات.",
  "Replying — the quoted message (DS MessagePreview) sits above the input while attachments are queued.":
    "الردّ — تقع الرسالة المقتبسة (معاينة رسالة نظام التصميم) أعلى حقل الإدخال بينما المرفقات في الانتظار.",
  "Rich Text Formatting in the Multi Line Composer. When the formatting mode is active (Aa button highlighted), a formatting toolbar appears above the input area. Each formatting type shows the toolbar with the active option highlighted.":
    "تنسيق النص الغني في مُنشئ الأسطر المتعددة. عندما يكون وضع التنسيق نشطًا (زر أ ب مميّز)، يظهر شريط أدوات التنسيق أعلى منطقة الإدخال، ويعرض كل نوع تنسيق الشريط مع تمييز الخيار النشط.",
  "Rich Text Formatting in the Single Line Composer. When formatting is active, a formatting toolbar appears above the single-line input. The composer remains inline with all icons in one row.":
    "تنسيق النص الغني في مُنشئ السطر الواحد. عندما يكون التنسيق نشطًا، يظهر شريط أدوات التنسيق أعلى حقل السطر الواحد، ويبقى المُنشئ ضمن السطر بكل أيقوناته في صف واحد.",
  "Same as 4 Grid but the last cell has a dark overlay with '+N' count.":
    "مثل شبكة الأربع، لكن الخلية الأخيرة تحمل طبقة داكنة بعدد «+N».",
  "Same as default with double check (✓✓) in white/muted color indicating delivery.":
    "مثل الافتراضي مع علامتي صح (✓✓) بلون أبيض/خافت تشيران إلى التسليم.",
  "Same as default with double check in muted white indicating delivery.":
    "مثل الافتراضي مع علامتي صح بلون أبيض خافت تشيران إلى التسليم.",
  "Same as default with single check in muted white indicating sent.":
    "مثل الافتراضي مع علامة صح واحدة بلون أبيض خافت تشير إلى الإرسال.",
  "Same as read with double check in muted white.":
    "مثل المقروءة مع علامتي صح بلون أبيض خافت.",
  "Same chat, but dragging files shows a compact drop overlay on the composer footer only — the message thread stays visible.":
    "الدردشة نفسها، لكن سحب الملفات يُظهر طبقة إفلات مضغوطة على تذييل المُنشئ فقط، وتبقى سلسلة الرسائل ظاهرة.",
  "Same compact overlay, but the composer already has attachments queued — dropping more files adds to the existing batch.":
    "الطبقة المضغوطة نفسها، لكن المُنشئ يحوي مرفقات في الانتظار — وإفلات ملفات إضافية يضيفها إلى الدفعة الحالية.",
  "Same lifecycle as images, but every tile carries a play overlay (and a duration badge in search). Composer preview states, delivered single/grid/overflow, uploading/failed, and search.":
    "الدورة نفسها كالصور، لكن كل بلاطة تحمل طبقة تشغيل (وشارة مدة في البحث). حالات معاينة المُنشئ، والتسليم مفردًا أو شبكةً أو فائضًا، والرفع والفشل، والبحث.",

  /* ─── Core Components — batch 8 ─── */
  "), where each item can be unpinned, copied or muted; clicking one jumps to it in the conversation.":
    "‎)، حيث يمكن إلغاء تثبيت كل عنصر أو نسخه أو كتم إشعاراته؛ والضغط على أحدها ينقلك إليه في المحادثة.",
  "): confirm in a dialog, the bubble gains a pin glyph next to its time and a toast confirms. Pinned messages collect in the":
    "‎): أكّد في نافذة حوارية، فتظهر أيقونة تثبيت بجوار وقت الفقاعة ويؤكّد إشعار منبثق ذلك. وتُجمع الرسائل المثبّتة في",
  ". The thread is pre-seeded with the range of states.":
    ". السلسلة مهيّأة مسبقًا بمجموعة الحالات.",
  "120px square tile; loading ring or error overlay in the centre.":
    "بلاطة مربّعة 120 بكسل، مع حلقة تحميل أو طبقة خطأ في المنتصف.",
  "3+ documents or audio clips collapse to three cards with a \"Show N more\" control that expands the bubble (click it in the canvas). Media grids keep the \"+N\" overlay instead.":
    "تُطوى المستندات أو المقاطع الصوتية التي تزيد على ثلاثة إلى ثلاث بطاقات مع عنصر «عرض N إضافية» يوسّع الفقاعة (اضغط عليه في اللوحة). أما شبكات الوسائط فتحتفظ بطبقة «+N» بدلًا من ذلك.",
  "300px cards — icon tile or play button + name + subtitle; red border + error treatment on failure.":
    "بطاقات بعرض 300 بكسل — بلاطة أيقونة أو زر تشغيل + الاسم + العنوان الفرعي، مع حدّ أحمر ومعالجة خطأ عند الفشل.",
  "72px media thumbnails; video carries a play overlay.":
    "صور وسائط مصغّرة بحجم 72 بكسل، ويحمل الفيديو طبقة تشغيل.",
  "A full mixed batch — images, video, document and audio queued together.":
    "دفعة مختلطة كاملة — صور وفيديو ومستند وصوت في الانتظار معًا.",
  "A pinned conversation's menu offers \"Unpin conversation\".":
    "تعرض قائمة المحادثة المثبّتة خيار «إلغاء تثبيت المحادثة».",
  "A pinned item's menu — Unpin Message, Stop notifications…":
    "قائمة العنصر المثبّت — إلغاء تثبيت الرسالة، إيقاف الإشعارات…",
  "A received message's menu — same Organise submenu, plus receive-only items.":
    "قائمة الرسالة الواردة — قائمة التنظيم الفرعية نفسها، مع عناصر خاصة بالواردة.",
  "A sent message's menu — Organise ▸ Pin message / Save message.":
    "قائمة الرسالة المُرسَلة — تنظيم ▸ تثبيت الرسالة / حفظ الرسالة.",
  "A side panel displaying a threaded conversation with the parent message, reply separator, reply bubbles, and a message composer.":
    "لوحة جانبية تعرض محادثة متسلسلة تضم الرسالة الأصلية وفاصل الردود وفقاعات الردود ومُنشئ الرسائل.",
  "AI action selected — ConversationSummary appears above the composer.":
    "تم اختيار إجراء الذكاء الاصطناعي — يظهر ملخّص المحادثة أعلى المُنشئ.",
  "Actions available in the Multi Line Composer toolbar. Each action button triggers a specific feature (Attachment, Voice Record, Emoji, Sticker, Formatting, AI). When active, icons appear filled and a corresponding dialog/popup is shown.":
    "الإجراءات المتاحة في شريط أدوات مُنشئ الأسطر المتعددة. يُشغّل كل زر ميزة محدّدة (مرفق، تسجيل صوتي، رمز تعبيري، ملصق، تنسيق، ذكاء اصطناعي). وعند التفعيل تظهر الأيقونات ممتلئة مع نافذة أو قائمة منبثقة مقابلة.",
  "Actions available in the Single Line Composer. Each action button triggers a specific feature (Attachment, Voice Record, Emoji, Sticker, Formatting, AI). When active, icons appear filled in primary purple and a corresponding dialog/popup is shown above the composer.":
    "الإجراءات المتاحة في مُنشئ السطر الواحد. يُشغّل كل زر ميزة محدّدة (مرفق، تسجيل صوتي، رمز تعبيري، ملصق، تنسيق، ذكاء اصطناعي). وعند التفعيل تظهر الأيقونات ممتلئة باللون البنفسجي الأساسي مع نافذة أو قائمة منبثقة أعلى المُنشئ.",
  "All / Photos / Videos / Audio / Documents — active chip fills with primary.":
    "الكل / الصور / الفيديو / الصوت / المستندات — تمتلئ الشريحة النشطة باللون الأساسي.",
  "All attachment types displayed together in the composer.":
    "كل أنواع المرفقات معروضة معًا في المُنشئ.",
  "All attachment-type filters side by side (excludes \"All\"). Each shows both an attachment-only preview and one with a caption.":
    "كل مرشّحات أنواع المرفقات جنبًا إلى جنب (باستثناء «الكل»)، ويعرض كلٌّ منها معاينة بالمرفق وحده وأخرى مع تعليق.",
  "All interactive states of the Multi Line Composer.":
    "كل الحالات التفاعلية لمُنشئ الأسطر المتعددة.",
  "All interactive states of the Single Line Composer.":
    "كل الحالات التفاعلية لمُنشئ السطر الواحد.",
  "Attachment action selected — ActionSheet appears above, left-aligned with plus icon.":
    "تم اختيار إجراء المرفقات — تظهر ورقة الإجراءات في الأعلى، بمحاذاة بداية السطر مع أيقونة الزائد.",
  "Audio attachment in all states (including Play and Pause).":
    "مرفق صوتي في كل الحالات (بما فيها التشغيل والإيقاف المؤقّت).",
  "Base Component opened by the composer ＋ — camera, image, video, audio, document, poll…":
    "مكوّن أساسي يفتحه زر ＋ في المُنشئ — كاميرا، صورة، فيديو، صوت، مستند، استطلاع…",
  "Base Components composing the Chat List sidebar; the active row mirrors the latest sent message.":
    "المكوّنات الأساسية التي يتركّب منها شريط قائمة المحادثات الجانبي، ويعكس الصف النشط آخر رسالة مُرسَلة.",
  "Below the video, right-aligned. Same pattern as image bubble.":
    "أسفل الفيديو بمحاذاة نهاية السطر، بالنمط نفسه المتّبع في فقاعة الصورة.",
  "Block Quote formatting — indented quote in the composer.":
    "تنسيق الاقتباس — اقتباس مُزاح داخل المُنشئ.",
  "Bold formatting — selected text rendered in bold.":
    "تنسيق الخط العريض — يُعرض النص المحدّد بخط عريض.",
  "Bottom-right aligned below the sticker. Same pattern as other bubbles.":
    "بمحاذاة نهاية السطر أسفل الملصق، بالنمط نفسه المتّبع في بقية الفقاعات.",
  "Bullet-point List formatting — bulleted list in the composer.":
    "تنسيق القائمة النقطية — قائمة نقطية داخل المُنشئ.",
  "Call bubble with an optional \"Call Back\" action button.":
    "فقاعة مكالمة مع زر «معاودة الاتصال» الاختياري.",
  "Chat area: date chip, parent bubble, \"N replies\" separator + line, reply bubbles":
    "منطقة الدردشة: شريحة التاريخ، الفقاعة الأصلية، فاصل «N ردود» مع خط، ثم فقاعات الردود",
  "Clicking a pinned message jumps to it in the conversation (flash highlight).":
    "الضغط على رسالة مثبّتة ينقلك إليها في المحادثة مع وميض تمييز.",
  "Code Block formatting — multi-line code block in the composer.":
    "تنسيق كتلة الشيفرة — كتلة شيفرة متعددة الأسطر داخل المُنشئ.",
  "Code formatting — inline code in the composer.":
    "تنسيق الشيفرة — شيفرة ضمن السطر داخل المُنشئ.",
  "Composer audio chip — play button, title, seek bar, time; single-slot corner badge.":
    "شريحة صوت في المُنشئ — زر تشغيل وعنوان وشريط تنقّل ووقت، مع شارة ركنية لخانة واحدة.",
  "Composer file chip — white app-tile icon + name + meta, single-slot corner badge.":
    "شريحة ملف في المُنشئ — أيقونة تطبيق بيضاء + الاسم + البيانات، مع شارة ركنية لخانة واحدة.",
  "Composer preview — every badge state, plus the three file types.":
    "معاينة المُنشئ — كل حالات الشارة، إضافة إلى أنواع الملفات الثلاثة.",
  "Composer thumbnail with a centered play overlay and the single-slot corner badge.":
    "صورة مصغّرة في المُنشئ تعلوها أيقونة تشغيل في المنتصف مع شارة ركنية لخانة واحدة.",
  "Composer thumbnail with the single-slot corner badge (remove / loading / error).":
    "صورة مصغّرة في المُنشئ مع شارة ركنية لخانة واحدة (إزالة / تحميل / خطأ).",
  "Composer: input + toolbar with icons + send button":
    "المُنشئ: حقل إدخال + شريط أدوات بأيقونات + زر إرسال",
  "Container: 420px wide, full height, white bg, border":
    "الحاوية: عرض 420 بكسل، ارتفاع كامل، خلفية بيضاء، مع حدّ",
  "Conversation Starter chips displayed above the composer.":
    "شرائح بادئات المحادثة معروضة أعلى المُنشئ.",
  "Conversation Summary card displayed above the composer.":
    "بطاقة ملخّص المحادثة معروضة أعلى المُنشئ.",
  "DS composer row with the attachment preview strip and reply-preview strip above it.":
    "صف مُنشئ نظام التصميم مع شريط معاينة المرفقات وشريط معاينة الردّ أعلاه.",
  "Default — outgoing parent message with 4 replies. Exact match to Figma.":
    "افتراضي — رسالة أصلية صادرة مع 4 ردود، مطابقة تمامًا لتصميم Figma.",
  "Deleted outgoing message with delivered status.":
    "رسالة صادرة محذوفة بحالة سُلّمت.",
  "Delivered audio message; always its own bubble, download affordance once sent.":
    "رسالة صوتية مُسلَّمة، تكون دائمًا في فقاعة خاصة بها مع إمكانية التنزيل بعد الإرسال.",
  "Delivered file card; multiple documents stack as separate bubbles.":
    "بطاقة ملف مُسلَّمة، وتتراكم المستندات المتعددة كفقاعات منفصلة.",
  "Delivered image grid (1–4 tiles + “+N” overflow) with time + read receipt.":
    "شبكة صور مُسلَّمة (من 1 إلى 4 بلاطات + فائض «+N») مع الوقت وإيصال القراءة.",
  "Delivered messages — separate bubble per format, uploading → read lifecycle.":
    "رسائل مُسلَّمة — فقاعة منفصلة لكل تنسيق، من الرفع حتى القراءة.",
  "Delivered video grid — every tile carries a play overlay; “+N” for overflow.":
    "شبكة فيديو مُسلَّمة — تحمل كل بلاطة طبقة تشغيل، و«+N» للفائض.",
  "Delivered — an audio message is always its own bubble. When sent alongside a document, each format is a separate bubble stacked one below another.":
    "مُسلَّمة — تكون الرسالة الصوتية دائمًا في فقاعة خاصة بها. وعند إرسالها مع مستند يُوضع كل تنسيق في فقاعة منفصلة تتراكم واحدة تحت الأخرى.",
  "Delivered — single card, several stacked, uploading and failed.":
    "مُسلَّمة — بطاقة واحدة، أو عدة بطاقات متراكمة، مع حالتي الرفع والفشل.",
  "Delivered — single, grids and overflow, sent and received.":
    "مُسلَّمة — مفردة وشبكات وفائض، مُرسَلة وواردة.",
  "Delivered — single, grids, overflow, sent and received.":
    "مُسلَّمة — مفردة وشبكات وفائض، مُرسَلة وواردة.",
  "Design-system search input at the top of the panel.":
    "حقل بحث نظام التصميم أعلى اللوحة.",
  "Design-system search input used by the Audio filter.":
    "حقل بحث نظام التصميم المستخدَم في مرشّح الصوت.",
  "Design-system search input used by the Documents filter.":
    "حقل بحث نظام التصميم المستخدَم في مرشّح المستندات.",
  "Design-system search input used by the Photos filter.":
    "حقل بحث نظام التصميم المستخدَم في مرشّح الصور.",
  "Design-system search input used by the Videos filter.":
    "حقل بحث نظام التصميم المستخدَم في مرشّح الفيديو.",
  "Determinate progress ring shown while a received attachment downloads.":
    "حلقة تقدّم محدّدة تظهر أثناء تنزيل مرفق وارد.",
  "Documents (PDF / DOC / XLS) across the composer (loading → default → hover → remove → error), delivered as stacked file cards (single, multiple, uploading, failed), and as a search list.":
    "المستندات (PDF / DOC / XLS) عبر المُنشئ (تحميل ← افتراضي ← تمرير ← إزالة ← خطأ)، ومُسلَّمة كبطاقات ملفات متراكمة (مفردة، متعددة، قيد الرفع، فاشلة)، وكقائمة بحث.",
  "Downloading — a received attachment being fetched (progress ring).":
    "جارٍ التنزيل — مرفق وارد قيد الجلب (حلقة تقدّم).",
  "Dragging files onto a single composer — a compact overlay (icon + header only) covers just the composer, not the whole chat panel.":
    "سحب الملفات إلى مُنشئ واحد — تغطي طبقة مضغوطة (أيقونة وترويسة فقط) المُنشئ وحده لا لوحة الدردشة بأكملها.",
  "Dragging files over the chat — a dark full-bleed overlay with the upload icon and the destination chat name covers the conversation.":
    "سحب الملفات فوق الدردشة — تغطي المحادثة طبقة داكنة كاملة تحمل أيقونة الرفع واسم الدردشة الوجهة.",
  "Emoji action selected — EmojiKeyboard appears above, aligned with emoji icon.":
    "تم اختيار إجراء الرموز التعبيرية — تظهر لوحة الرموز في الأعلى بمحاذاة أيقونة الرمز التعبيري.",
  "Empty placeholder state before an image loads.":
    "حالة نائبة فارغة قبل تحميل الصورة.",
  "Error — one attachment failed to upload (error badge).":
    "خطأ — فشل رفع أحد المرفقات (شارة خطأ).",
  "Every card type in its default state, desktop and mobile.":
    "كل أنواع البطاقات في حالتها الافتراضية، على سطح المكتب والجوال.",

  /* ─── Core Components — batch 7 ─── */
  "Pinned Messages":
    "الرسائل المثبّتة",
  "Pinned messages":
    "الرسائل المثبّتة",
  "Pinned Messages · Item Menu":
    "الرسائل المثبّتة · قائمة العنصر",
  "Pinned Messages · Jump To Message":
    "الرسائل المثبّتة · الانتقال إلى الرسالة",
  "Pinned Messages · Panel":
    "الرسائل المثبّتة · اللوحة",
  "Pinned Messages · Unpin Modal":
    "الرسائل المثبّتة · نافذة إلغاء التثبيت",
  "Pinned Messages · Unpinned":
    "الرسائل المثبّتة · غير مثبّتة",
  "Pinned received message.":
    "رسالة واردة مثبّتة.",
  "Placeholder — Received":
    "نائب — واردة",
  "Placeholder — Sent":
    "نائب — مُرسَلة",
  "Placeholder — states to be defined.":
    "نائب — حالات ستُحدَّد لاحقًا.",
  "Poll Bubble":
    "فقاعة الاستطلاع",
  "Pradeep":
    "براديب",
  "Priya":
    "بريا",
  "Priya Nair":
    "بريا ناير",
  "Quoted (Reply)":
    "مقتبسة (ردّ)",
  "Receipt States":
    "حالات الإيصال",
  "Received bubbles: bg":
    "الفقاعات الواردة: الخلفية",
  "Sent bubbles: bg":
    "الفقاعات المُرسَلة: الخلفية",
  "Received — Long Text (Read More)":
    "واردة — نص طويل (قراءة المزيد)",
  "Sent — Long Text (Read More)":
    "مُرسَلة — نص طويل (قراءة المزيد)",
  "Reply to":
    "ردّ على",
  "Replying":
    "جارٍ الردّ",
  "Report.docx":
    "تقرير.docx",
  "Signed.pdf":
    "موقّع.pdf",
  "Save message":
    "حفظ الرسالة",
  "Saving messages in a conversation.":
    "حفظ الرسائل في محادثة.",
  "Search bar with filter chips in idle state.":
    "شريط بحث مع شرائح تصفية في الحالة الخاملة.",
  "Sensitive Content — Received":
    "محتوى حسّاس — واردة",
  "Sensitive Content — Sent":
    "محتوى حسّاس — مُرسَلة",
  "Sent & Received":
    "المُرسَلة والواردة",
  "Show 2 more":
    "عرض 2 إضافيين",
  "Single Image — Received":
    "صورة مفردة — واردة",
  "Single Image — Sent":
    "صورة مفردة — مُرسَلة",
  "Single reply thread.":
    "سلسلة ردّ واحدة.",
  "Single video sent with play button overlay.":
    "فيديو مفرد مُرسَل يعلوه زر تشغيل.",
  "Single — Loading (Received)":
    "مفردة — جارٍ التحميل (واردة)",
  "Single — Loading (Sent)":
    "مفردة — جارٍ التحميل (مُرسَلة)",
  "Single — Received":
    "مفردة — واردة",
  "Single — Sent":
    "مفردة — مُرسَلة",
  "Sounds good!":
    "يبدو جيدًا!",
  "Square media-grid result tile in search.":
    "بلاطة نتيجة مربّعة في شبكة وسائط البحث.",
  "State":
    "الحالة",
  "Sticker Bubble":
    "فقاعة الملصق",
  "Sticker action selected.":
    "تم اختيار إجراء الملصقات.",
  "Stop notifications":
    "إيقاف الإشعارات",
  "Strikethrough formatting.":
    "تنسيق الخط المتوسّط.",
  "Structure (from Figma node 4090:846250):":
    "البنية (من عقدة Figma رقم 4090:846250):",
  "Suggest Reply Panel":
    "لوحة اقتراح الردّ",
  "Sure, I'll send it over in a minute.":
    "بالتأكيد، سأرسلها خلال دقيقة.",
  "Sure, checking it now":
    "بالتأكيد، أتحقق منها الآن",
  "TXT":
    "نص",
  "ZIP":
    "أرشيف",
  "Tap to retry":
    "اضغط لإعادة المحاولة",
  "Tessa:":
    "تيسا:",
  "Text Bubble":
    "فقاعة النص",
  "Thanks":
    "شكرًا",
  "Thanks! I spent a lot of time on the palette.":
    "شكرًا! قضيت وقتًا طويلًا على لوحة الألوان.",
  "Thanks! Will do":
    "شكرًا! سأفعل",
  "Thread Notifications":
    "إشعارات السلسلة",
  "Two flows:":
    "مساران:",
  "Two images displayed in a 2-column grid.":
    "صورتان معروضتان في شبكة من عمودين.",
  "UNSUPPORTED":
    "غير مدعوم",
  "Unsupported File":
    "ملف غير مدعوم",
  "Underline formatting.":
    "تنسيق الخط السفلي.",
  "Unpin conversation":
    "إلغاء تثبيت المحادثة",
  "Upload failed":
    "فشل الرفع",
  "Uploading & Failed":
    "الرفع والفشل",
  "Uploading and failed delivery states.":
    "حالتا الرفع وفشل التسليم.",
  "Usage — HTML structure + token CSS.":
    "الاستخدام — بنية HTML + CSS الرموز.",
  "User info":
    "معلومات المستخدم",
  "Users List":
    "قائمة المستخدمين",
  "Vertical — Received":
    "رأسي — واردة",
  "Vertical — Sent":
    "رأسي — مُرسَلة",
  "Video Attachment":
    "مرفق فيديو",
  "Video Bubble":
    "فقاعة الفيديو",
  "Video Grid (4+)":
    "شبكة فيديو (+4)",
  "Video attachment in all states.":
    "مرفق فيديو في كل الحالات.",
  "Video attachment — all states.":
    "مرفق فيديو — كل الحالات.",
  "Voice Attachment":
    "مرفق صوتي",
  "Voice Record action selected.":
    "تم اختيار إجراء التسجيل الصوتي.",
  "Voice-note.mp3":
    "ملاحظة-صوتية.mp3",
  "Voice-reply.mp3":
    "ردّ-صوتي.mp3",
  "Walkthrough.mp3":
    "جولة.mp3",
  "What is the condition of the watch?":
    "ما حالة الساعة؟",
  "When was it purchased?":
    "متى تم شراؤها؟",
  "With Caption":
    "مع تعليق",
  "With Error":
    "مع خطأ",
  "With Reply":
    "مع ردّ",
  "With Typing Indicator":
    "مع مؤشّر الكتابة",
  "Without Back Button":
    "بدون زر الرجوع",
  "XLS · 96 KB":
    "XLS · 96 كيلوبايت",
  "Yes, I can proceed with the order":
    "نعم، يمكنني المتابعة بالطلب",
  "Yes, available right now":
    "نعم، متاح الآن",
  "Yes, delivery in 2 to 3 days":
    "نعم، التوصيل خلال يومين إلى ثلاثة",
  "You can check and confirm":
    "يمكنك التحقق والتأكيد",
  "You removed Jack as admin":
    "أزلت جاك من المسؤولين",
  "Your course certificate is ready to do...":
    "شهادة دورتك جاهزة للتن...",
  "Your ride has arrived.":
    "وصلت سيارتك.",
  "Your trip receipt is ready":
    "إيصال رحلتك جاهز",
  "Your ride has arrived. Driver is waiting outside.":
    "وصلت سيارتك. السائق ينتظر في الخارج.",
  "action.":
    "إجراء.",
  "archive.rar":
    "أرشيف.rar",
  "clip.opus":
    "مقطع.opus",
  "slides.key":
    "شرائح.key",
  "attached from the picker.":
    "مُرفق من المُنتقي.",
  "can you send the docs?":
    "هل يمكنك إرسال المستندات؟",
  "drag files onto the chat":
    "اسحب الملفات إلى الدردشة",
  "everything from the shoot 📦":
    "كل ما من جلسة التصوير 📦",
  "format goes separately":
    "كل تنسيق يُرسل على حدة",
  "join the match now":
    "انضم إلى المباراة الآن",
  "one more batch":
    "دفعة أخرى",
  "single slot":
    "خانة واحدة",
  "uploading → read":
    "جارٍ الرفع ← قُرئت",
  "wired up:":
    "موصولة:",
  "· shared by":
    "· شاركها",
  "panel (chat header":
    "لوحة (ترويسة الدردشة",
  "received · 2 grid":
    "واردة · شبكة من 2",
  "received · 3 grid":
    "واردة · شبكة من 3",
  "received · 4 grid":
    "واردة · شبكة من 4",
  "received · 4+ overflow":
    "واردة · فائض +4",
  "received · multiple (one bubble)":
    "واردة · متعددة (فقاعة واحدة)",
  "received · playing":
    "واردة · قيد التشغيل",
  "received · single":
    "واردة · مفردة",
  "received · with a document (separate bubbles)":
    "واردة · مع مستند (فقاعات منفصلة)",
  "sent · 2 grid":
    "مُرسَلة · شبكة من 2",
  "sent · 3 grid":
    "مُرسَلة · شبكة من 3",
  "sent · 4 grid":
    "مُرسَلة · شبكة من 4",
  "sent · 4+ overflow":
    "مُرسَلة · فائض +4",
  "sent · multiple (one bubble)":
    "مُرسَلة · متعددة (فقاعة واحدة)",
  "sent · playing":
    "مُرسَلة · قيد التشغيل",
  "sent · single":
    "مُرسَلة · مفردة",
  "sent · with a document (separate bubbles)":
    "مُرسَلة · مع مستند (فقاعات منفصلة)",
  "— a play button on the left, plus time.":
    "— زر تشغيل في البداية، مع الوقت.",
  "— from a message's context menu (":
    "— من قائمة سياق الرسالة (",
  "⋮ → Pinned messages":
    "⋮ ← الرسائل المثبّتة",
  "The top-right corner is a":
    "الزاوية العلوية في النهاية هي",
  "Panel overlay for":
    "طبقة لوحة لـ",
  "Every":
    "كل",
  ": it shows the remove":
    ": تعرض زر الإزالة",
  "A single chat with the design-system":
    "محادثة واحدة مع فريق نظام التصميم",
  "A voice note is":
    "الملاحظة الصوتية هي",
  "An audio":
    "ملف صوتي",
  "(default), a":
    "(افتراضي)، أو",
  "(loading), or an":
    "(أثناء التحميل)، أو",
  "(or use ＋) to queue previews, then":
    "(أو استخدم ＋) لوضع المعاينات في الانتظار، ثم",
  ", dark text, radius 12px":
    "، نص داكن، استدارة 12 بكسل",
  ", white text, radius 12px":
    "، نص أبيض، استدارة 12 بكسل",

  /* ─── Core Components — batch 6 ─── */
  "1.2 MB":
    "1.2 ميجابايت",
  "2.4 MB":
    "2.4 ميجابايت",
  "6.1 MB":
    "6.1 ميجابايت",
  "200 KB":
    "200 كيلوبايت",
  "340 KB":
    "340 كيلوبايت",
  "540 KB":
    "540 كيلوبايت",
  "812 KB":
    "812 كيلوبايت",
  "120 KB · DOCX":
    "120 كيلوبايت · DOCX",
  "1.2 MB · PDF":
    "1.2 ميجابايت · PDF",
  "2.4 MB · PDF":
    "2.4 ميجابايت · PDF",
  "340 KB · DOCX":
    "340 كيلوبايت · DOCX",
  "340 KB · XLSX":
    "340 كيلوبايت · XLSX",
  "812 KB · XLSX":
    "812 كيلوبايت · XLSX",
  "PDF · 1.2 MB":
    "PDF · 1.2 ميجابايت",
  "PDF · 2.4 MB":
    "PDF · 2.4 ميجابايت",
  "PDF · 6.1 MB":
    "PDF · 6.1 ميجابايت",
  "XLS · 812 KB":
    "XLS · 812 كيلوبايت",
  "DOC · 340 KB":
    "DOC · 340 كيلوبايت",
  "12 Jun · 1.1 MB":
    "12 يونيو · 1.1 ميجابايت",
  "12 Jun · 2.4 MB":
    "12 يونيو · 2.4 ميجابايت",
  "12 Jun · 340 KB":
    "12 يونيو · 340 كيلوبايت",
  "12 Jun · 6.1 MB":
    "12 يونيو · 6.1 ميجابايت",
  "12 Jun · 812 KB":
    "12 يونيو · 812 كيلوبايت",
  "16 Sep, 2026":
    "16 سبتمبر 2026",
  "12 Files":
    "12 ملفًا",
  "2 Files":
    "ملفان",
  "3 Files":
    "3 ملفات",
  "4 Files":
    "4 ملفات",
  "6 Files":
    "6 ملفات",
  "9 Files":
    "9 ملفات",
  "2 Audio":
    "مقطعان صوتيان",
  "4 Images":
    "4 صور",
  "4 Videos":
    "4 مقاطع فيديو",
  "6 Videos":
    "6 مقاطع فيديو",
  "3+ Files (Show More)":
    "‎3+ ملفات (عرض المزيد)",
  "6 Images · hello":
    "6 صور · مرحبًا",
  "6 Images · the set":
    "6 صور · المجموعة",
  "2 Grid — Received":
    "شبكة من 2 — واردة",
  "2 Grid — Sent":
    "شبكة من 2 — مُرسَلة",
  "3 Grid — Received":
    "شبكة من 3 — واردة",
  "3 Grid — Sent":
    "شبكة من 3 — مُرسَلة",
  "4 Grid — Received":
    "شبكة من 4 — واردة",
  "4 Grid — Sent":
    "شبكة من 4 — مُرسَلة",
  "4+ Grid — Received":
    "شبكة من +4 — واردة",
  "4+ Grid — Sent":
    "شبكة من +4 — مُرسَلة",
  "Horizontal — Received":
    "أفقي — واردة",
  "Horizontal — Sent":
    "أفقي — مُرسَلة",
  "Loading — Received":
    "جارٍ التحميل — واردة",
  "Loading — Sent":
    "جارٍ التحميل — مُرسَلة",
  "Multiple Loading — Received":
    "تحميل متعدد — واردة",
  "Multiple Loading — Sent":
    "تحميل متعدد — مُرسَلة",
  "Multiple — Loading (Received)":
    "متعددة — جارٍ التحميل (واردة)",
  "Multiple — Loading (Sent)":
    "متعددة — جارٍ التحميل (مُرسَلة)",
  "Action":
    "إجراء",
  "Action Badge":
    "شارة الإجراء",
  "Action List":
    "قائمة الإجراءات",
  "ActionSheet":
    "ورقة الإجراءات",
  "Badge":
    "شارة",
  "Overflow":
    "الفائض",
  "Panel":
    "اللوحة",
  "All Actions":
    "كل الإجراءات",
  "All Attachments":
    "كل المرفقات",
  "All Call Actions":
    "كل إجراءات المكالمات",
  "All Dividers":
    "كل الفواصل",
  "All Formatting Types":
    "كل أنواع التنسيق",
  "All Group Actions":
    "كل إجراءات المجموعات",
  "All Layouts":
    "كل التخطيطات",
  "All Received States":
    "كل حالات الواردة",
  "All Sent States":
    "كل حالات المُرسَلة",
  "All Stickers (Received)":
    "كل الملصقات (واردة)",
  "All Stickers (Sent)":
    "كل الملصقات (مُرسَلة)",
  "All action states overview.":
    "نظرة عامة على كل حالات الإجراءات.",
  "All formatting types overview.":
    "نظرة عامة على كل أنواع التنسيق.",
  "All formatting types.":
    "كل أنواع التنسيق.",
  "AI action selected.":
    "تم اختيار إجراء الذكاء الاصطناعي.",
  "Attachment action selected.":
    "تم اختيار إجراء المرفقات.",
  "Emoji action selected.":
    "تم اختيار إجراء الرموز التعبيرية.",
  "Formatting action selected.":
    "تم اختيار إجراء التنسيق.",
  "Default state — no action selected.":
    "الحالة الافتراضية — لا إجراء محدّد.",
  "Audio Attachment":
    "مرفق صوتي",
  "Audio Bubble":
    "فقاعة صوتية",
  "Audio attachment — all states.":
    "مرفق صوتي — كل الحالات.",
  "Call Bubble":
    "فقاعة المكالمة",
  "Call List":
    "قائمة المكالمات",
  "Chat Header":
    "ترويسة الدردشة",
  "Chat List":
    "قائمة المحادثات",
  "Block Quote formatting.":
    "تنسيق الاقتباس.",
  "Bold formatting.":
    "تنسيق الخط العريض.",
  "Bullet Point List":
    "قائمة نقطية",
  "Bullet-point List formatting.":
    "تنسيق القائمة النقطية.",
  "Code Block formatting.":
    "تنسيق كتلة الشيفرة.",
  "Code formatting.":
    "تنسيق الشيفرة.",
  "Italic formatting.":
    "تنسيق الخط المائل.",
  "Link formatting.":
    "تنسيق الرابط.",
  "Ordered List formatting.":
    "تنسيق القائمة المرقّمة.",
  "Can we reschedule tomorrow morning":
    "هل يمكننا إعادة الجدولة صباح الغد",
  "Can you share more photos?":
    "هل يمكنك مشاركة مزيد من الصور؟",
  "Can you share the Figma link?":
    "هل يمكنك مشاركة رابط Figma؟",
  "Chat (Attachments Queued)":
    "دردشة (مرفقات في الانتظار)",
  "Chat (Composer Drop)":
    "دردشة (إفلات في المُنشئ)",
  "Check this out from yesterday!":
    "ألقِ نظرة على هذا من الأمس!",
  "Check this out!":
    "ألقِ نظرة على هذا!",
  "Claim your free game before it e...":
    "احصل على لعبتك المجانية قبل أن ت...",
  "Collaborative Document Bubble":
    "فقاعة المستند التعاوني",
  "Collaborative Whiteboard Bubble":
    "فقاعة السبّورة التعاونية",
  "Composer preview — every badge state.":
    "معاينة المُنشئ — كل حالات الشارة.",
  "Composers":
    "المُنشئات",
  "Confirming the pin.":
    "تأكيد التثبيت.",
  "Confirming the unpin from the panel.":
    "تأكيد إلغاء التثبيت من اللوحة.",
  "Confirming the unpin.":
    "تأكيد إلغاء التثبيت.",
  "Conversation Starter Panel":
    "لوحة بادئات المحادثة",
  "Conversation Summary Panel":
    "لوحة ملخّص المحادثة",
  "Conversation pinned":
    "تم تثبيت المحادثة",
  "Conversation unpinned":
    "تم إلغاء تثبيت المحادثة",
  "Conversation · Menu":
    "المحادثة · القائمة",
  "Conversation · Pin Modal":
    "المحادثة · نافذة التثبيت",
  "Conversation · Pinned":
    "المحادثة · مثبّتة",
  "Conversation · Unpin Menu":
    "المحادثة · قائمة إلغاء التثبيت",
  "Conversation · Unpin Modal":
    "المحادثة · نافذة إلغاء التثبيت",
  "Conversation · Unpinned":
    "المحادثة · غير مثبّتة",
  "Message pinned":
    "تم تثبيت الرسالة",
  "Message unpinned":
    "تم إلغاء تثبيت الرسالة",
  "Message · Menu (Received)":
    "الرسالة · القائمة (واردة)",
  "Message · Menu (Sent)":
    "الرسالة · القائمة (مُرسَلة)",
  "Message · Pin Modal":
    "الرسالة · نافذة التثبيت",
  "Message · Pinned (Received)":
    "الرسالة · مثبّتة (واردة)",
  "Message · Pinned (Sent)":
    "الرسالة · مثبّتة (مُرسَلة)",
  "Header · Menu":
    "الترويسة · القائمة",
  "Pin conversation":
    "تثبيت المحادثة",
  "Pin message":
    "تثبيت الرسالة",
  "Data.xlsx":
    "بيانات.xlsx",
  "Deck.pptx":
    "العرض.pptx",
  "Component_list.xlsx":
    "قائمة_المكوّنات.xlsx",
  "Design_specs.pdf":
    "مواصفات_التصميم.pdf",
  "File.pdf":
    "ملف.pdf",
  "Follow-up.mp3":
    "متابعة.mp3",
  "Hello by Adele.mp3":
    "هيلو لأديل.mp3",
  "Delete Bubble":
    "فقاعة الحذف",
  "Deleted incoming message.":
    "رسالة واردة محذوفة.",
  "Deleted outgoing message with read receipt.":
    "رسالة صادرة محذوفة مع إيصال قراءة.",
  "Deleted outgoing message with sent status.":
    "رسالة صادرة محذوفة بحالة أُرسلت.",
  "Did you finish the assignment?":
    "هل أنهيت المهمة؟",
  "Do you offer delivery?":
    "هل توفّرون التوصيل؟",
  "Document":
    "مستند",
  "Document Attachment":
    "مرفق مستند",
  "Document Types":
    "أنواع المستندات",
  "Document attachment in all states.":
    "مرفق مستند في كل الحالات.",
  "Documents come in several file-type variants.":
    "تأتي المستندات بعدة أنماط حسب نوع الملف.",
  "Downloading":
    "جارٍ التنزيل",
  "Drag & Drop":
    "السحب والإفلات",
  "Drag & Drop (Composer · With Files)":
    "السحب والإفلات (المُنشئ · مع ملفات)",
  "Drag & Drop (Composer)":
    "السحب والإفلات (المُنشئ)",
  "End to End":
    "من البداية إلى النهاية",
  "Every state together.":
    "كل الحالات معًا.",
  "Every composer state stacked for review.":
    "كل حالات المُنشئ مجمّعة للمراجعة.",
  "Figma:":
    "Figma:",
  "File Bubble":
    "فقاعة الملف",
  "File and audio chips at the same 72px height.":
    "شرائح الملفات والصوتيات بالارتفاع نفسه 72 بكسل.",
  "File attachment — all states.":
    "مرفق ملف — كل الحالات.",
  "Filter chips":
    "شرائح التصفية",
  "Final logo video walkthrough, tak...":
    "جولة فيديو الشعار النهائية، اللقطة...",
  "Forwarded & Edited":
    "مُعاد توجيهها ومُعدَّلة",
  "Forwarded and edited markers.":
    "علامتا إعادة التوجيه والتعديل.",
  "Four images in a 2×2 grid layout.":
    "أربع صور في تخطيط شبكي 2×2.",
  "Friday":
    "الجمعة",
  "Sunday":
    "الأحد",
  "Gifs":
    "صور متحركة",
  "Links":
    "روابط",
  "Group name changed to \"Watch World\"":
    "تغيّر اسم المجموعة إلى «عالم الساعات»",
  "HTML + CSS usage reference.":
    "مرجع الاستخدام بـ HTML و CSS.",
  "Header + SearchBar + ConversationItem":
    "الترويسة + شريط البحث + عنصر المحادثة",
  "I love it! The colors are perfect.":
    "أحببته! الألوان مثالية.",
  "Image":
    "صورة",
  "Image Attachment":
    "مرفق صورة",
  "Image Bubble":
    "فقاعة الصورة",
  "Image Grid (4+)":
    "شبكة صور (+4)",
  "Image attachment in all states.":
    "مرفق صورة في كل الحالات.",
  "Image attachment — all states.":
    "مرفق صورة — كل الحالات.",
  "In Message":
    "في الرسالة",
  "In Search":
    "في البحث",
  "Incoming Excel file bubble.":
    "فقاعة ملف Excel واردة.",
  "Incoming PDF file bubble.":
    "فقاعة ملف PDF واردة.",
  "Incoming Parent":
    "رسالة أصلية واردة",
  "Incoming Word document file bubble.":
    "فقاعة ملف مستند Word واردة.",
  "Incoming audio call that was missed.":
    "مكالمة صوتية واردة فائتة.",
  "Incoming audio call that was rejected.":
    "مكالمة صوتية واردة مرفوضة.",
  "Incoming collaborative document bubble.":
    "فقاعة مستند تعاوني واردة.",
  "Incoming collaborative whiteboard bubble.":
    "فقاعة سبّورة تعاونية واردة.",
  "Incoming poll bubble with vote results.":
    "فقاعة استطلاع واردة مع نتائج التصويت.",
  "Incoming sticker bubble.":
    "فقاعة ملصق واردة.",
  "Incoming text message.":
    "رسالة نصية واردة.",
  "Incoming video call that was missed.":
    "مكالمة فيديو واردة فائتة.",
  "Incoming video call that was rejected.":
    "مكالمة فيديو واردة مرفوضة.",
  "Incoming voice call":
    "مكالمة صوتية واردة",
  "Is the price negotiable?":
    "هل السعر قابل للتفاوض؟",
  "Is there any warranty left?":
    "هل ما زال هناك ضمان؟",
  "Is this still available?":
    "هل ما زال متاحًا؟",
  "Is this watch still available?":
    "هل ما زالت هذه الساعة متاحة؟",
  "It's ₹7,999":
    "السعر ₹7,999",
  "Layout:":
    "التخطيط:",
  "Let me know if you have any feedback.":
    "أخبرني إن كان لديك أي ملاحظات.",
  "Main Actions — Pin.":
    "الإجراءات الرئيسية — التثبيت.",
  "Main Actions — Save.":
    "الإجراءات الرئيسية — الحفظ.",
  "Main Actions — Thread Notifications.":
    "الإجراءات الرئيسية — إشعارات السلسلة.",
  "Mark unread":
    "وضع علامة كغير مقروءة",
  "Message Composer – Actions":
    "مُنشئ الرسائل – الإجراءات",
  "Message Composer – Attachment":
    "مُنشئ الرسائل – المرفقات",
  "Message Composer – Formatting":
    "مُنشئ الرسائل – التنسيق",
  "Message Composer – Panel":
    "مُنشئ الرسائل – اللوحة",
  "Message Composer – State":
    "مُنشئ الرسائل – الحالة",
  "Mixed Batch":
    "دفعة مختلطة",
  "Multi Attachments — End to End.":
    "المرفقات المتعددة — من البداية إلى النهاية.",
  "Multi Attachments — In Composer.":
    "المرفقات المتعددة — داخل المُنشئ.",
  "Multi Attachments — In Search.":
    "المرفقات المتعددة — في البحث.",
  "Multi Attachments — Sent & Received.":
    "المرفقات المتعددة — المُرسَلة والواردة.",
  "Multiple Audio":
    "صوتيات متعددة",
  "Multiple Documents":
    "مستندات متعددة",
  "Multiple Formats":
    "تنسيقات متعددة",
  "Nice, Does it come with warranty?":
    "جميل، هل يأتي مع ضمان؟",
  "No Replies":
    "لا ردود",
  "No replies yet — just the parent message.":
    "لا ردود بعد — الرسالة الأصلية فقط.",
  "Not a voice note.":
    "ليست ملاحظة صوتية.",
  "Notification behaviour for message threads.":
    "سلوك الإشعارات لسلاسل الرسائل.",
  "Order delivered":
    "تم تسليم الطلب",
  "Organise":
    "تنظيم",
  "Organise → Pin message":
    "تنظيم ← تثبيت الرسالة",
  "Outgoing Excel file bubble.":
    "فقاعة ملف Excel صادرة.",
  "Outgoing PDF file bubble.":
    "فقاعة ملف PDF صادرة.",
  "Outgoing Word document file bubble.":
    "فقاعة ملف مستند Word صادرة.",
  "Outgoing poll bubble with vote results.":
    "فقاعة استطلاع صادرة مع نتائج التصويت.",
  "Outgoing sticker bubble with read receipt.":
    "فقاعة ملصق صادرة مع إيصال قراءة.",
  "Outgoing text message with delivered status.":
    "رسالة نصية صادرة بحالة سُلّمت.",
  "Outgoing text message with read receipt.":
    "رسالة نصية صادرة مع إيصال قراءة.",
  "Outgoing text message with sent status.":
    "رسالة نصية صادرة بحالة أُرسلت.",
  "PPT":
    "عرض تقديمي",
  "Photo & Video Library":
    "مكتبة الصور والفيديو",
  "Photos / Videos":
    "الصور / الفيديو",

  /* ─── Core Components — avatar initials ─── */
  "SF":
    "سف",

  /* ─── Core Components — batch 5 ─── */
  "Light gray background. Purple whiteboard icon, dark title, gray description, purple 'Open Whiteboard' button. No receipt.":
    "خلفية رمادية فاتحة وأيقونة سبّورة بنفسجية وعنوان داكن ووصف رمادي وزر «فتح السبّورة» بنفسجي، بلا إيصال.",
  "Shows group avatar, name, member count, action buttons (Add Members, Leave, Delete and Exit), tabbed member list with role badges.":
    "تعرض صورة المجموعة والاسم وعدد الأعضاء وأزرار الإجراءات (إضافة أعضاء، مغادرة، حذف وخروج)، وقائمة أعضاء بتبويبات مع شارات الأدوار.",
  "Whiteboard preview with dotted grid background, text boxes with selection handles, and collaborative cursors (Sarah, Jason, Stephen).":
    "معاينة سبّورة بخلفية شبكة منقّطة ومربّعات نص بمقابض تحديد ومؤشّرات تعاونية (سارة، جيسون، ستيفن).",
  "Brain Michael":
    "براين مايكل",
  "Dana Cooper":
    "دانا كوبر",
  "Bright Minds Education":
    "تعليم العقول النيّرة",
  "Creative Event":
    "فعالية إبداعية",
  "Design Duo":
    "ثنائي التصميم",
  "Design Team":
    "فريق التصميم",
  "Assets.zip":
    "الأصول.zip",
  "Audio.mp3":
    "صوت.mp3",
  "Budget.xlsx":
    "الميزانية.xlsx",
  "Contract.pdf":
    "العقد.pdf",
  "Deck.pdf":
    "العرض.pdf",
  "Document.pdf":
    "المستند.pdf",
  "Hello.mp3":
    "مرحبًا.mp3",
  "Invoice 45821.pdf":
    "فاتورة 45821.pdf",
  "Kickoff deck.pptx":
    "عرض الانطلاق.pptx",
  "Notes.docx":
    "ملاحظات.docx",
  "Notes.txt":
    "ملاحظات.txt",
  "Proposal draft.docx":
    "مسوّدة المقترح.docx",
  "Q3 Budget.xlsx":
    "ميزانية الربع الثالث.xlsx",
  "Q3-Report.pdf":
    "تقرير-الربع-الثالث.pdf",
  "Recording.m4a":
    "تسجيل.m4a",
  "Sheet.xlsx":
    "جدول.xlsx",
  "Watch by Billie.mp3":
    "ووتش لبيلي.mp3",
  "data.bin":
    "بيانات.bin",
  "unknown.xyz":
    "غير معروف.xyz",
  "DOC":
    "مستند",
  "XLS":
    "جدول",
  "Icon: call":
    "الأيقونة: call",
  "Icon: call_end":
    "الأيقونة: call_end",
  "Icon: phone_callback":
    "الأيقونة: phone_callback",
  "Icon: videocam":
    "الأيقونة: videocam",
  "Icon: videocam_off":
    "الأيقونة: videocam_off",
  "rgba(255, 255, 255, 0.7)":
    "rgba(255, 255, 255, 0.7)",

  /* ─── Core Components — batch 4 ─── */
  "Start a new chat to begin messaging your contacts.":
    "ابدأ محادثة جديدة لمراسلة جهات اتصالك.",
  "Start your first call to begin.":
    "ابدأ مكالمتك الأولى للانطلاق.",
  "Status text replaced with typing indicator (dots + 'Typing' in highlight color).":
    "يُستبدل نص الحالة بمؤشّر الكتابة (نقاط + «يكتب» بلون مميّز).",
  "Stephen":
    "ستيفن",
  "Sticker Image":
    "صورة الملصق",
  "Sticker Size":
    "حجم الملصق",
  "Strikethrough":
    "يتوسّطه خط",
  "Subtitle":
    "العنوان الفرعي",
  "Title":
    "العنوان",
  "Suggest a Reply (CSS)":
    "اقترح ردًا (CSS)",
  "Suggest a Reply (HTML)":
    "اقترح ردًا (HTML)",
  "Teach Tech":
    "تعليم التقنية",
  "Tessa Joseph":
    "تيسا جوزيف",
  "Tessa Joseph(2)":
    "تيسا جوزيف(2)",
  "Text Avatar":
    "صورة رمزية نصية",
  "Text input with placeholder. 16px font, full width.":
    "حقل نص بنص نائب، بخط 16 بكسل وعرض كامل.",
  "The input area for composing messages with text input, attachments, emoji, and send actions.":
    "منطقة إنشاء الرسائل بحقل نص ومرفقات ورموز تعبيرية وإجراءات إرسال.",
  "The main chat view combining message bubbles, date separators, and scroll behavior into a cohesive thread.":
    "عرض الدردشة الرئيسي الذي يجمع فقاعات الرسائل وفواصل التاريخ وسلوك التمرير في سلسلة متماسكة.",
  "These look great! 🙌":
    "تبدو رائعة! 🙌",
  "This file type isn’t supported for preview.":
    "نوع الملف هذا غير مدعوم للمعاينة.",
  "This is an":
    "هذا",
  "This media may contain graphic or violent content.":
    "قد تحتوي هذه الوسائط على محتوى صادم أو عنيف.",
  "Thread Notifications — stories coming soon.":
    "إشعارات السلسلة — القصص قادمة قريبًا.",
  "Thread Replies Divider":
    "فاصل ردود السلسلة",
  "Timestamp":
    "الطابع الزمني",
  "Timestamp + Receipt":
    "الطابع الزمني + الإيصال",
  "Truncated description text — 'Open document to edit content toge...' in muted color.":
    "نص وصف مقتطع — «افتح المستند لتحرير المحتوى معًا...» بلون خافت.",
  "Two images side by side, each taking 50% width with a 2px gap.":
    "صورتان جنبًا إلى جنب، كل منهما بعرض 50% وبينهما فاصل 2 بكسل.",
  "Uber Cars":
    "أوبر كارز",
  "Unable to load calls":
    "تعذّر تحميل المكالمات",
  "Unable to load groups":
    "تعذّر تحميل المجموعات",
  "Underline":
    "تحته خط",
  "Unpin Conversation":
    "إلغاء تثبيت المحادثة",
  "Unpin Message":
    "إلغاء تثبيت الرسالة",
  "Uploading…":
    "جارٍ الرفع…",
  "User Info":
    "معلومات المستخدم",
  "User Unblocked":
    "أُلغي حظر المستخدم",
  "User is offline — shows last seen timestamp instead of Online.":
    "المستخدم غير متصل — يُعرض وقت آخر ظهور بدلًا من «متصل».",
  "User is typing, clear (×) button appears on the right.":
    "المستخدم يكتب، ويظهر زر المسح (×) في نهاية السطر.",
  "Vertical (Received)":
    "رأسي (واردة)",
  "Vertical (Sent)":
    "رأسي (مُرسَلة)",
  "Video Call Answered":
    "تم الرد على مكالمة الفيديو",
  "Video Call Rejected":
    "رُفضت مكالمة الفيديو",
  "Voice Call Answered":
    "تم الرد على المكالمة الصوتية",
  "Voice Call Rejected":
    "رُفضت المكالمة الصوتية",
  "Video — Answered":
    "فيديو — تم الرد",
  "Video — Cancelled (outgoing)":
    "فيديو — أُلغيت (صادرة)",
  "Video — Ended (outgoing)":
    "فيديو — انتهت (صادرة)",
  "Video — Incoming":
    "فيديو — واردة",
  "Video — Missed":
    "فيديو — فائتة",
  "Video — Missed (incoming)":
    "فيديو — فائتة (واردة)",
  "Video — Outgoing":
    "فيديو — صادرة",
  "Video — Rejected":
    "فيديو — مرفوضة",
  "Video — Rejected (incoming)":
    "فيديو — مرفوضة (واردة)",
  "Voice — Answered":
    "صوتية — تم الرد",
  "Voice — Incoming":
    "صوتية — واردة",
  "Voice — Missed":
    "صوتية — فائتة",
  "Voice — Outgoing":
    "صوتية — صادرة",
  "Voice — Rejected":
    "صوتية — مرفوضة",
  "Voice Record":
    "تسجيل صوتي",
  "Videos":
    "مقاطع الفيديو",
  "View All":
    "عرض الكل",
  "View Members":
    "عرض الأعضاء",
  "View all (6 more)":
    "عرض الكل (6 إضافية)",
  "Voter Avatars":
    "صور المصوّتين",
  "Waveform":
    "الموجة الصوتية",
  "What's the price?":
    "ما السعر؟",
  "When a user adds someone to the group.":
    "عندما يضيف مستخدم شخصًا إلى المجموعة.",
  "When a user blocks another user.":
    "عندما يحظر مستخدم مستخدمًا آخر.",
  "When a user creates a new group.":
    "عندما ينشئ مستخدم مجموعة جديدة.",
  "When a user is promoted to admin.":
    "عندما يُرقّى مستخدم إلى مسؤول.",
  "When a user is removed from the group.":
    "عندما يُزال مستخدم من المجموعة.",
  "When a user joins the group.":
    "عندما ينضم مستخدم إلى المجموعة.",
  "When a user leaves the group.":
    "عندما يغادر مستخدم المجموعة.",
  "When a user unblocks another user.":
    "عندما يلغي مستخدم حظر مستخدم آخر.",
  "When admin privileges are revoked.":
    "عند سحب صلاحيات المسؤول.",
  "When group profile/avatar changes.":
    "عند تغيّر ملف المجموعة أو صورتها.",
  "When the group name is updated.":
    "عند تحديث اسم المجموعة.",
  "White with dotted grid pattern":
    "أبيض بنمط شبكة منقّطة",
  "White/light background showing a large file type icon (PDF, DOC, XLS) centered.":
    "خلفية بيضاء/فاتحة تعرض أيقونة نوع ملف كبيرة (PDF أو DOC أو XLS) في المنتصف.",
  "Whiteboard":
    "السبّورة",
  "Whiteboard Icon":
    "أيقونة السبّورة",
  "With Call Back Button":
    "مع زر معاودة الاتصال",
  "With Filters — All States":
    "مع التصفية — كل الحالات",
  "With Filters — Default":
    "مع التصفية — افتراضي",
  "With Filters — Filled":
    "مع التصفية — مملوء",
  "With Filters — Placeholder":
    "مع التصفية — نص نائب",
  "With Filters — Typing":
    "مع التصفية — أثناء الكتابة",
  "With Typing":
    "أثناء الكتابة",
  "With caption":
    "مع تعليق",
  "You blocked George":
    "لقد حظرت جورج",
  "You unblocked George":
    "لقد ألغيت حظر جورج",
  "You haven't made or received any calls.":
    "لم تُجرِ أو تستقبل أي مكالمات.",
  "and here's the hero shot 📸":
    "وهذه اللقطة الرئيسية 📸",
  "audio file attachment":
    "مرفق ملف صوتي",
  "campaign bundle":
    "حزمة الحملة",
  "check this out 👀":
    "ألقِ نظرة على هذا 👀",
  "here are all the assets and the final export from yesterday's review session":
    "هذه كل الأصول والتصدير النهائي من جلسة مراجعة الأمس",
  "love these 🙌":
    "أحببتها 🙌",
  "on the way!":
    "في الطريق!",
  "release notes":
    "ملاحظات الإصدار",
  "the highlights 🎬":
    "أبرز اللقطات 🎬",
  "the signed copy":
    "النسخة الموقّعة",
  "updated the caption ✍️":
    "حدّثت التعليق ✍️",
  "voice note":
    "ملاحظة صوتية",
  "voice note 🎙":
    "ملاحظة صوتية 🎙",
  "watch till the end":
    "شاهد حتى النهاية",
  "× icon that appears when text is entered. Clears the input on click.":
    "أيقونة × تظهر عند إدخال نص، وتمسح الحقل عند النقر.",
  "• First item":
    "• العنصر الأول",
  "• Second item":
    "• العنصر الثاني",
  "• Third item":
    "• العنصر الثالث",
  "rgba(0, 0, 0, 0.12) — Semi-transparent black":
    "rgba(0, 0, 0, 0.12) — أسود شبه شفاف",
  "rgba(0, 0, 0, 0.4) — Semi-transparent dark":
    "rgba(0, 0, 0, 0.4) — داكن شبه شفاف",
  "rgba(0, 0, 0, 0.5) — Dark overlay with white '+N' text":
    "rgba(0, 0, 0, 0.5) — طبقة داكنة بنص «+N» أبيض",
  "rgba(0, 0, 0, 0.6) — Darker semi-transparent":
    "rgba(0, 0, 0, 0.6) — داكن أكثر شبه شفاف",
  "rgba(255, 255, 255, 0.2) — Muted white":
    "rgba(255, 255, 255, 0.2) — أبيض خافت",
  "rgba(255, 255, 255, 0.2) — Semi-transparent white":
    "rgba(255, 255, 255, 0.2) — أبيض شبه شفاف",
  "rgba(255, 255, 255, 0.4) — Muted white outline":
    "rgba(255, 255, 255, 0.4) — إطار أبيض خافت",
  "rgba(255, 255, 255, 0.6) — Semi-transparent white":
    "rgba(255, 255, 255, 0.6) — أبيض شبه شفاف",
  "rgba(255, 255, 255, 0.7) — Muted white":
    "rgba(255, 255, 255, 0.7) — أبيض خافت",
  "Web Desktop — Chat UI Kits → Audio section (node 4072:76974)":
    "ويب سطح المكتب — حزم واجهة الدردشة ← قسم الصوت (العقدة 4072:76974)",
  "Web Desktop — Chat UI Kits → Collaborative Document section (node 4104:458701)":
    "ويب سطح المكتب — حزم واجهة الدردشة ← قسم المستند التعاوني (العقدة 4104:458701)",
  "Web Desktop — Chat UI Kits → Collaborative Whiteboard section (node 4104:453092)":
    "ويب سطح المكتب — حزم واجهة الدردشة ← قسم السبّورة التعاونية (العقدة 4104:453092)",
  "Web Desktop — Chat UI Kits → Delete Bubble section (node 4090:865230)":
    "ويب سطح المكتب — حزم واجهة الدردشة ← قسم فقاعة الحذف (العقدة 4090:865230)",
  "Web Desktop — Chat UI Kits → Sticker Bubble (node 4080:303913)":
    "ويب سطح المكتب — حزم واجهة الدردشة ← فقاعة الملصق (العقدة 4080:303913)",
  "Web Desktop — Chat UI Kits → Text Bubble section (node 4080:241111)":
    "ويب سطح المكتب — حزم واجهة الدردشة ← قسم فقاعة النص (العقدة 4080:241111)",
  "Design System — Web Chat UI Kits → Document Container (node 17219:542)":
    "نظام التصميم — حزم واجهة دردشة الويب ← حاوية المستند (العقدة 17219:542)",
  "Design System — Web Chat UI Kits → Image Container (node 17303:78709)":
    "نظام التصميم — حزم واجهة دردشة الويب ← حاوية الصورة (العقدة 17303:78709)",
  "Design System — Web Chat UI Kits → Poll Container (node 17219:542)":
    "نظام التصميم — حزم واجهة دردشة الويب ← حاوية الاستطلاع (العقدة 17219:542)",
  "Design System — Web Chat UI Kits → Search Field (node 17588:77085)":
    "نظام التصميم — حزم واجهة دردشة الويب ← حقل البحث (العقدة 17588:77085)",
  "Design System — Web Chat UI Kits → Video Container (node 17303:79942)":
    "نظام التصميم — حزم واجهة دردشة الويب ← حاوية الفيديو (العقدة 17303:79942)",
  "avatarRegistry['Sticker Footage'] from foundation/tokens/avatars.ts":
    "avatarRegistry['Sticker Footage'] من foundation/tokens/avatars.ts",

  /* ─── Core Components — batch 3 ─── */
  "PNG with transparent background, rendered at 160×160 centered in the bubble.":
    "صورة PNG بخلفية شفافة تُعرض بحجم 160×160 في منتصف الفقاعة.",
  "Padding":
    "الحشو",
  "Paul David":
    "بول ديفيد",
  "Photos":
    "الصور",
  "Pin Conversation":
    "تثبيت المحادثة",
  "Placeholder (Default)":
    "نائب (افتراضي)",
  "Placeholder (Received)":
    "نائب (واردة)",
  "Placeholder (Sent)":
    "نائب (مُرسَلة)",
  "Play Button":
    "زر التشغيل",
  "Play Button (Received)":
    "زر التشغيل (واردة)",
  "Play Button (Sent)":
    "زر التشغيل (مُرسَلة)",
  "Play Button BG":
    "خلفية زر التشغيل",
  "Play button becomes pause icon. Waveform shows progress with highlighted portion.":
    "يتحوّل زر التشغيل إلى أيقونة إيقاف مؤقّت، وتُظهر الموجة الصوتية التقدّم بجزء مميّز.",
  "Play/Pause Button":
    "زر التشغيل/الإيقاف المؤقّت",
  "Playing (pause + progress)":
    "قيد التشغيل (إيقاف مؤقّت + تقدّم)",
  "Please try again.":
    "يرجى المحاولة مرة أخرى.",
  "Poll option label (e.g. 'Poll List').":
    "تسمية خيار الاستطلاع (مثل «قائمة الاستطلاع»).",
  "Portrait image with taller aspect ratio (approx 3:5).":
    "صورة طولية بنسبة أبعاد أطول (نحو 3:5).",
  "Portrait video thumbnail (taller aspect ratio) with play overlay.":
    "صورة فيديو مصغّرة طولية (بنسبة أبعاد أطول) تعلوها أيقونة تشغيل.",
  "Preview Area":
    "منطقة المعاينة",
  "Preview Background":
    "خلفية المعاينة",
  "Preview Image":
    "صورة المعاينة",
  "Progress Bar":
    "شريط التقدّم",
  "Progress Bar (Received)":
    "شريط التقدّم (واردة)",
  "Progress Bar (Sent)":
    "شريط التقدّم (مُرسَلة)",
  "Progress Track (Received)":
    "مسار التقدّم (واردة)",
  "Progress Track (Sent)":
    "مسار التقدّم (مُرسَلة)",
  "Purple background bubble with sticker image centered. Green read receipt + timestamp at bottom-right.":
    "فقاعة بخلفية بنفسجية والملصق في المنتصف، مع إيصال قراءة أخضر وطابع زمني في نهاية السطر بالأسفل.",
  "Purple background, white play button, white waveform bars. Shows single check for sent status.":
    "خلفية بنفسجية وزر تشغيل أبيض وأشرطة موجة صوتية بيضاء، مع علامة صح واحدة لحالة الإرسال.",
  "Purple background. Block icon + italic 'This message was deleted' in muted white. Green read receipt.":
    "خلفية بنفسجية وأيقونة حظر مع «تم حذف هذه الرسالة» بخط مائل أبيض خافت، وإيصال قراءة أخضر.",
  "Purple background. Phone icon in white circle. White text. Shown when an outgoing voice call ends normally.":
    "خلفية بنفسجية وأيقونة هاتف في دائرة بيضاء ونص أبيض، تظهر عند انتهاء مكالمة صوتية صادرة بشكل طبيعي.",
  "Purple background. Truncated text with 'Read more' link in white.":
    "خلفية بنفسجية بنص مقتطع ورابط «قراءة المزيد» باللون الأبيض.",
  "Purple background. Video camera icon in white circle. White text.":
    "خلفية بنفسجية وأيقونة كاميرا فيديو في دائرة بيضاء ونص أبيض.",
  "Purple background. White document icon, white title/description, white 'Open Document' button. Green read receipt.":
    "خلفية بنفسجية وأيقونة مستند بيضاء وعنوان ووصف أبيضان وزر «فتح المستند» أبيض، وإيصال قراءة أخضر.",
  "Purple background. White text, white radio buttons, white progress bars. Voter avatars shown on the right.":
    "خلفية بنفسجية بنص أبيض وأزرار اختيار بيضاء وأشرطة تقدّم بيضاء، مع صور المصوّتين في نهاية السطر.",
  "Purple background. White text. Green double-check receipt icon.":
    "خلفية بنفسجية بنص أبيض وأيقونة إيصال بعلامتي صح خضراوين.",
  "Purple background. White text. Muted white double-check receipt icon.":
    "خلفية بنفسجية بنص أبيض وأيقونة إيصال بعلامتي صح بيضاوين خافتتين.",
  "Purple background. White text. Muted white single-check receipt icon.":
    "خلفية بنفسجية بنص أبيض وأيقونة إيصال بعلامة صح واحدة بيضاء خافتة.",
  "Purple background. White whiteboard icon, white title/description, white 'Open Whiteboard' button. Green read receipt.":
    "خلفية بنفسجية وأيقونة سبّورة بيضاء وعنوان ووصف أبيضان وزر «فتح السبّورة» أبيض، وإيصال قراءة أخضر.",
  "Purple info bar. White preview area with large PDF icon. File thumbnail, name, date/size, and download icon in white.":
    "شريط معلومات بنفسجي ومنطقة معاينة بيضاء بأيقونة PDF كبيرة، والصورة المصغّرة والاسم والتاريخ/الحجم وأيقونة التنزيل باللون الأبيض.",
  "Quoted (reply)":
    "مقتبسة (ردّ)",
  "Quoted — reply to 6 images":
    "مقتبسة — ردّ على 6 صور",
  "Quoted — reply to 6 videos":
    "مقتبسة — ردّ على 6 مقاطع فيديو",
  "Radio (Received)":
    "زر اختيار (واردة)",
  "Radio (Sent)":
    "زر اختيار (مُرسَلة)",
  "Raj Dubey":
    "راج دوبي",
  "Read More (Received)":
    "قراءة المزيد (واردة)",
  "Read More (Sent)":
    "قراءة المزيد (مُرسَلة)",
  "Read More Link":
    "رابط قراءة المزيد",
  "Read more":
    "قراءة المزيد",
  "Receipt Status":
    "حالة الإيصال",
  "Received (Sticker 2)":
    "واردة (ملصق 2)",
  "Received (Sticker 3)":
    "واردة (ملصق 3)",
  "Received Background":
    "خلفية الواردة",
  "Received Info Bar":
    "شريط معلومات الواردة",
  "Received Separator":
    "فاصل الواردة",
  "Received Text":
    "نص الواردة",
  "Received Text/Icon":
    "نص/أيقونة الواردة",
  "Received Timestamp":
    "الطابع الزمني للواردة",
  "Received Waveform":
    "موجة الواردة الصوتية",
  "Received · downloading":
    "واردة · جارٍ التنزيل",
  "Received — DOC":
    "واردة — DOC",
  "Received — Default":
    "واردة — افتراضي",
  "Received — Long Text":
    "واردة — نص طويل",
  "Received — PDF":
    "واردة — PDF",
  "Received — Paused":
    "واردة — متوقّفة مؤقّتًا",
  "Received — Playing":
    "واردة — قيد التشغيل",
  "Received — XLS":
    "واردة — XLS",
  "Recent used":
    "المستخدمة مؤخرًا",
  "Red line with 'New' label aligned right — marks unread messages.":
    "خط أحمر بتسمية «جديد» في نهاية السطر — يميّز الرسائل غير المقروءة.",
  "Regular weight body text. White on sent, dark on received.":
    "نص متن بوزن عادي. أبيض على المُرسَلة، داكن على الواردة.",
  "Remove":
    "إزالة",
  "Remove attachment":
    "إزالة المرفق",
  "Removed As Admin":
    "أُزيل من المسؤولين",
  "Reply count label aligned left with line extending right.":
    "تسمية عدد الردود في بداية السطر مع خط يمتد إلى نهايته.",
  "Review pack 👆":
    "حزمة المراجعة 👆",
  "Robert Allen":
    "روبرت ألين",
  "Rounded container (var(--cometchat-radius-3)) with sent/received background color.":
    "حاوية بزوايا دائرية (var(--cometchat-radius-3)) بلون خلفية المُرسَلة/الواردة.",
  "Safiya Fareena":
    "صفية فارينا",
  "Same layout with Excel icon (green).":
    "التخطيط نفسه بأيقونة Excel (خضراء).",
  "Same layout with Excel icon.":
    "التخطيط نفسه بأيقونة Excel.",
  "Same layout with Word document icon (blue).":
    "التخطيط نفسه بأيقونة مستند Word (زرقاء).",
  "Same layout with Word document icon.":
    "التخطيط نفسه بأيقونة مستند Word.",
  "Same layout with gray bubble wrapper.":
    "التخطيط نفسه داخل فقاعة رمادية.",
  "Same layout with gray bubble wrapper. No receipt icon.":
    "التخطيط نفسه داخل فقاعة رمادية، بلا أيقونة إيصال.",
  "Same loading state with gray bubble wrapper.":
    "حالة التحميل نفسها داخل فقاعة رمادية.",
  "Same search states but with filter chips below. 'All' chip is active (purple) by default.":
    "حالات البحث نفسها مع شرائح تصفية أسفلها، وشريحة «الكل» نشطة (بنفسجية) افتراضيًا.",
  "Same with muted white double-check.":
    "المثل مع علامتي صح بيضاوين خافتتين.",
  "Same with muted white single-check.":
    "المثل مع علامة صح واحدة بيضاء خافتة.",
  "Same with single check in muted white.":
    "المثل مع علامة صح واحدة بلون أبيض خافت.",
  "Sarah":
    "سارة",
  "Save — stories coming soon.":
    "الحفظ — القصص قادمة قريبًا.",
  "Scott Franklin":
    "سكوت فرانكلين",
  "Search Icon":
    "أيقونة البحث",
  "Search chats or messages":
    "ابحث في المحادثات أو الرسائل",
  "Search groups":
    "ابحث في المجموعات",
  "Search sticker":
    "ابحث عن ملصق",
  "Secondary question/description text below the title.":
    "نص سؤال/وصف ثانوي أسفل العنوان.",
  "See Photo":
    "عرض الصورة",
  "See Video":
    "عرض الفيديو",
  "Semibold text showing the file name (e.g. 'File.pdf').":
    "نص شبه عريض يعرض اسم الملف (مثل «File.pdf»).",
  "Sensitive (Received)":
    "محتوى حسّاس (واردة)",
  "Sensitive (Sent)":
    "محتوى حسّاس (مُرسَلة)",
  "Sensitive Background":
    "خلفية المحتوى الحسّاس",
  "Sensitive Content":
    "محتوى حسّاس",
  "Sensitive Content (Received)":
    "محتوى حسّاس (واردة)",
  "Sensitive Content (Sent)":
    "محتوى حسّاس (مُرسَلة)",
  "Sensitive Text":
    "نص المحتوى الحسّاس",
  "Sent":
    "مُرسَلة",
  "Sent Background":
    "خلفية المُرسَلة",
  "Sent Info Bar":
    "شريط معلومات المُرسَلة",
  "Sent Separator":
    "فاصل المُرسَلة",
  "Sent Text":
    "نص المُرسَلة",
  "Sent Text/Icon":
    "نص/أيقونة المُرسَلة",
  "Sent Timestamp":
    "الطابع الزمني للمُرسَلة",
  "Sent Waveform":
    "موجة المُرسَلة الصوتية",
  "Sent and received message bubbles with text, media, reactions, timestamps, and read receipts.":
    "فقاعات رسائل مُرسَلة وواردة تضم النصوص والوسائط والتفاعلات والطوابع الزمنية وإيصالات القراءة.",
  "Sent bubbles show delivery status: ✓ sent, ✓✓ delivered, ✓✓ (green) read.":
    "تعرض الفقاعات المُرسَلة حالة التسليم: ✓ أُرسلت، ✓✓ سُلّمت، ✓✓ (أخضر) قُرئت.",
  "Sent only. ✓ sent, ✓✓ delivered (muted), ✓✓ read (green).":
    "للمُرسَلة فقط. ✓ أُرسلت، ✓✓ سُلّمت (خافت)، ✓✓ قُرئت (أخضر).",
  "Sent — DOC":
    "مُرسَلة — DOC",
  "Sent — Default":
    "مُرسَلة — افتراضي",
  "Sent — Default (Sent)":
    "مُرسَلة — افتراضي (مُرسَلة)",
  "Sent — Delivered":
    "مُرسَلة — سُلّمت",
  "Sent — Long Text":
    "مُرسَلة — نص طويل",
  "Sent — PDF":
    "مُرسَلة — PDF",
  "Sent — Paused":
    "مُرسَلة — متوقّفة مؤقّتًا",
  "Sent — Playing":
    "مُرسَلة — قيد التشغيل",
  "Sent — Read":
    "مُرسَلة — قُرئت",
  "Sent — Sent":
    "مُرسَلة — أُرسلت",
  "Sent — XLS":
    "مُرسَلة — XLS",
  "Series of vertical bars with varying heights representing audio amplitude. Animates on playback.":
    "سلسلة أشرطة رأسية بارتفاعات متفاوتة تمثّل شدّة الصوت، وتتحرّك أثناء التشغيل.",
  "Shown when loading fails. Displays a warning icon, error message, and a Retry button.":
    "تظهر عند فشل التحميل، وتعرض أيقونة تحذير ورسالة خطأ وزر إعادة المحاولة.",
  "Shown when loading fails. Displays an error icon, message, and a Retry button.":
    "تظهر عند فشل التحميل، وتعرض أيقونة خطأ ورسالة وزر إعادة المحاولة.",
  "Shown when text exceeds max lines. White on sent, purple on received. Clickable.":
    "يظهر عندما يتجاوز النص الحد الأقصى للأسطر. أبيض على المُرسَلة، بنفسجي على الواردة، وقابل للنقر.",
  "Shown when there are no calls. Displays a call icon, title, description, and Start a call button.":
    "تظهر عند عدم وجود مكالمات، وتعرض أيقونة مكالمة وعنوانًا ووصفًا وزر بدء مكالمة.",
  "Shown when there are no conversations. Displays a chat icon, title, and description.":
    "تظهر عند عدم وجود محادثات، وتعرض أيقونة دردشة وعنوانًا ووصفًا.",
  "Shown when there are no groups. Displays a groups icon, title, and description.":
    "تظهر عند عدم وجود مجموعات، وتعرض أيقونة مجموعات وعنوانًا ووصفًا.",
  "Shows avatar, name, status (Online), and action buttons (video, call, more).":
    "تعرض الصورة الرمزية والاسم والحالة (متصل) وأزرار الإجراءات (فيديو، مكالمة، المزيد).",
  "Shows current time / total duration (e.g. 00:00/00:32). Updates during playback.":
    "يعرض الوقت الحالي / المدة الإجمالية (مثل 00:00/00:32)، ويتحدّث أثناء التشغيل.",
  "Shows user avatar (text initials on purple background), name, online status, and action buttons (Block, Delete Chat).":
    "تعرض صورة المستخدم الرمزية (أحرف أولى على خلفية بنفسجية) والاسم وحالة الاتصال وأزرار الإجراءات (حظر، حذف المحادثة).",
  "Simple — Default":
    "بسيط — افتراضي",
  "Simple — Filled":
    "بسيط — مملوء",
  "Simple — Placeholder":
    "بسيط — نص نائب",
  "Simple — Typing":
    "بسيط — أثناء الكتابة",
  "Single (Received)":
    "مفردة (واردة)",
  "Single (Sent)":
    "مفردة (مُرسَلة)",
  "Single (click a thumbnail)":
    "مفردة (اضغط على صورة مصغّرة)",
  "Single Loading":
    "تحميل مفرد",
  "Single Loading (Received)":
    "تحميل مفرد (واردة)",
  "Single Loading (Sent)":
    "تحميل مفرد (مُرسَلة)",
  "Skeleton placeholders for all elements while data loads.":
    "هياكل نائبة لجميع العناصر أثناء تحميل البيانات.",
  "Skill Sphere":
    "مجال المهارات",
  "Small muted text at bottom-right (e.g. '4:56 pm').":
    "نص صغير خافت في نهاية السطر بالأسفل (مثل «4:56 م»).",
  "Small rounded square (36×36) with the file type icon at the left of the info bar.":
    "مربّع صغير بزوايا دائرية (36×36) يحمل أيقونة نوع الملف في بداية شريط المعلومات.",
  "Smart":
    "ذكي",
  "Something went wrong while loading the group list. Please try again.":
    "حدث خطأ أثناء تحميل قائمة المجموعات. يرجى المحاولة مرة أخرى.",
  "Something went wrong while loading your call history. Please try again.":
    "حدث خطأ أثناء تحميل سجل مكالماتك. يرجى المحاولة مرة أخرى.",
  "Source File":
    "الملف المصدر",
  "Specs + the component list 📎":
    "المواصفات + قائمة المكوّنات 📎",
  "Square video thumbnail with play button overlay and duration badge. Purple bubble wrapper with timestamp + receipt.":
    "صورة فيديو مصغّرة مربّعة يعلوها زر تشغيل وشارة مدة، داخل فقاعة بنفسجية مع طابع زمني وإيصال.",
  "Stacked circular avatars of users who voted for this option. Shows +N for overflow.":
    "صور دائرية متراكبة للمستخدمين الذين صوّتوا لهذا الخيار، وتعرض +N عند الزيادة.",
  "Start a call":
    "ابدأ مكالمة",

  /* ─── Core Components — batch 2 ─── */
  "Download Icon (Received)":
    "أيقونة التنزيل (واردة)",
  "Download Icon (Sent)":
    "أيقونة التنزيل (مُرسَلة)",
  "Downloading…":
    "جارٍ التنزيل…",
  "Drop files here":
    "أفلِت الملفات هنا",
  "Duration Badge":
    "شارة المدة",
  "Duration Badge BG":
    "خلفية شارة المدة",
  "Duration Label":
    "تسمية المدة",
  "Edited":
    "مُعدَّلة",
  "Emily":
    "إيميلي",
  "Emoji":
    "رمز تعبيري",
  "Empty gray container with a landscape icon placeholder.":
    "حاوية رمادية فارغة فيها أيقونة صورة نائبة.",
  "Enter your message here":
    "اكتب رسالتك هنا",
  "Epic Games":
    "إيبيك جيمز",
  "Error & Retry":
    "الخطأ وإعادة المحاولة",
  "Everything from the review 👆":
    "كل ما ورد في المراجعة 👆",
  "FILE":
    "ملف",
  "Failed (error)":
    "فشل (خطأ)",
  "Figma Reference":
    "مرجع Figma",
  "File Meta":
    "بيانات الملف",
  "File Meta (Received)":
    "بيانات الملف (واردة)",
  "File Meta (Sent)":
    "بيانات الملف (مُرسَلة)",
  "File Name":
    "اسم الملف",
  "File Name (Received)":
    "اسم الملف (واردة)",
  "File Name (Sent)":
    "اسم الملف (مُرسَلة)",
  "File Thumbnail":
    "صورة الملف المصغّرة",
  "File types":
    "أنواع الملفات",
  "Files & audio":
    "الملفات والصوتيات",
  "Filter Chips":
    "شرائح التصفية",
  "Focus":
    "التركيز",
  "Formatting":
    "التنسيق",
  "Formatting Types":
    "أنواع التنسيق",
  "Forwarded":
    "مُعاد توجيهها",
  "Foundation — Group avatar images from the avatar registry.":
    "الأساسيات — صور المجموعات الرمزية من سجلّ الصور الرمزية.",
  "Four images in a 2×2 grid with 2px gaps.":
    "أربع صور في شبكة 2×2 بفواصل 2 بكسل.",
  "Full-width 1px line dividing info from action.":
    "خط بعرض كامل بسماكة 1 بكسل يفصل المعلومات عن الإجراء.",
  "Full-width text button below the bubble content, separated by a top border.":
    "زر نصي بعرض كامل أسفل محتوى الفقاعة، يفصله حدّ علوي.",
  "Future Technology":
    "تكنولوجيا المستقبل",
  "Generic admin removal notification.":
    "إشعار عام بإزالة مسؤول.",
  "George added Jack":
    "أضاف جورج جاك",
  "George created the group":
    "أنشأ جورج المجموعة",
  "George joined the group":
    "انضم جورج إلى المجموعة",
  "George left the group":
    "غادر جورج المجموعة",
  "George made Emma an admin":
    "عيّن جورج إيما مسؤولة",
  "George removed Jack":
    "أزال جورج جاك",
  "Gray background bubble with sticker image centered. Timestamp only, no receipt.":
    "فقاعة بخلفية رمادية والملصق في المنتصف. الطابع الزمني فقط بلا إيصال.",
  "Gray background. Dark text, gray radio buttons, purple progress bars. Voter avatars shown on the right.":
    "خلفية رمادية بنص داكن وأزرار اختيار رمادية وأشرطة تقدّم بنفسجية، مع صور المصوّتين في نهاية السطر.",
  "Gray background. Dark text. Timestamp only, no receipt.":
    "خلفية رمادية بنص داكن. الطابع الزمني فقط بلا إيصال.",
  "Gray background. Phone icon in white circle. Dark text. Shown when an incoming call was not answered.":
    "خلفية رمادية وأيقونة هاتف في دائرة بيضاء ونص داكن، تظهر عند عدم الرد على مكالمة واردة.",
  "Gray background. Truncated text with 'Read more' link in purple.":
    "خلفية رمادية بنص مقتطع ورابط «قراءة المزيد» باللون البنفسجي.",
  "Gray background. Video camera icon in white circle. Dark text.":
    "خلفية رمادية وأيقونة كاميرا فيديو في دائرة بيضاء ونص داكن.",
  "Gray bubble with a 'Call Back' action button below the call info. Separated by a border-top divider.":
    "فقاعة رمادية بزر «معاودة الاتصال» أسفل معلومات المكالمة، يفصله حدّ علوي.",
  "Gray info bar. White preview area with large PDF icon. File thumbnail, name, date/size in dark, download icon in purple.":
    "شريط معلومات رمادي ومنطقة معاينة بيضاء بأيقونة PDF كبيرة. الصورة المصغّرة والاسم والتاريخ/الحجم بلون داكن، وأيقونة التنزيل بنفسجية.",
  "Grid Gap":
    "فاصل الشبكة",
  "Group 1":
    "المجموعة 1",
  "Group 2":
    "المجموعة 2",
  "Group Created":
    "أُنشئت المجموعة",
  "Group Info":
    "معلومات المجموعة",
  "Group Name Changed":
    "تغيّر اسم المجموعة",
  "Group Profile Updated":
    "حُدّث ملف المجموعة",
  "Group Profile updated":
    "حُدّث ملف المجموعة",
  "Groups":
    "المجموعات",
  "Groups will appear here once they join your workspace or organization.":
    "ستظهر المجموعات هنا بمجرد انضمامها إلى مساحة عملك أو مؤسستك.",
  "Header + Search + Conversation items list. The primary state showing all recent conversations.":
    "ترويسة + بحث + قائمة عناصر المحادثات. الحالة الأساسية التي تعرض كل المحادثات الأخيرة.",
  "Header + Search + scrollable list of GroupItems showing available groups with member counts.":
    "ترويسة + بحث + قائمة مجموعات قابلة للتمرير تعرض المجموعات المتاحة مع عدد الأعضاء.",
  "Header + scrollable list of CallItems showing recent calls with direction indicators and call type icons.":
    "ترويسة + قائمة مكالمات قابلة للتمرير تعرض المكالمات الأخيرة مع مؤشرات الاتجاه وأيقونات نوع المكالمة.",
  "Hello, World!":
    "مرحبًا بالعالم!",
  "Hey!":
    "أهلًا!",
  "Hi, is the watch still up for sale?":
    "مرحبًا، هل الساعة ما زالت معروضة للبيع؟",
  "Higher-level composed components built from Base Components and Foundation tokens. These represent complete UI patterns ready for integration into product screens. All components are responsive and adapt to mobile, tablet, and desktop viewports.":
    "مكوّنات مُركّبة أعلى مستوى، مبنية من المكوّنات الأساسية ورموز الأساسيات. تمثّل أنماط واجهة كاملة جاهزة للدمج في شاشات المنتج، وجميعها متجاوبة وتتكيّف مع شاشات الجوال واللوحي وسطح المكتب.",
  "Horizontal (Received)":
    "أفقي (واردة)",
  "Horizontal (Sent)":
    "أفقي (مُرسَلة)",
  "Horizontal bar showing vote percentage. White on sent, purple on received.":
    "شريط أفقي يعرض نسبة التصويت. أبيض على المُرسَلة، بنفسجي على الواردة.",
  "Horizontal row of selectable chips. Active chip has purple background with white text.":
    "صف أفقي من الشرائح القابلة للتحديد، والشريحة النشطة بخلفية بنفسجية ونص أبيض.",
  "Icon Circle":
    "دائرة الأيقونة",
  "Icon Color":
    "لون الأيقونة",
  "Icon Reference":
    "مرجع الأيقونة",
  "Icon: missed_video_call (error color)":
    "الأيقونة: missed_video_call (بلون الخطأ)",
  "Icon: phone_missed (error color)":
    "الأيقونة: phone_missed (بلون الخطأ)",
  "Idle state with 'Search' placeholder text and search icon.":
    "حالة خاملة بنص «بحث» النائب وأيقونة البحث.",
  "Image Avatar":
    "صورة رمزية",
  "In Composer":
    "داخل المُنشئ",
  "Incoming Background":
    "خلفية الواردة",
  "Outgoing Background":
    "خلفية الصادرة",
  "Incoming Video Call":
    "مكالمة فيديو واردة",
  "Incoming Voice Call":
    "مكالمة صوتية واردة",
  "Outgoing Video Call":
    "مكالمة فيديو صادرة",
  "Outgoing Voice Call":
    "مكالمة صوتية صادرة",
  "Incoming parent + many replies":
    "رسالة أصلية واردة + ردود كثيرة",
  "Outgoing parent + 4 replies":
    "رسالة أصلية صادرة + 4 ردود",
  "Innovative Online Shop...":
    "التسوق الإلكتروني المبتكر...",
  "Input Field":
    "حقل الإدخال",
  "Italic":
    "مائل",
  "Jason":
    "جيسون",
  "Jennifer Lynn":
    "جينيفر لين",
  "John Paul":
    "جون بول",
  "Label":
    "التسمية",
  "Landscape image with wider aspect ratio (approx 5:3).":
    "صورة عرضية بنسبة أبعاد أوسع (نحو 5:3).",
  "Landscape video thumbnail (wider aspect ratio) with play overlay.":
    "صورة فيديو مصغّرة عرضية (بنسبة أبعاد أوسع) تعلوها أيقونة تشغيل.",
  "Last Seen":
    "آخر ظهور",
  "Leading search (magnifying glass) icon in secondary color.":
    "أيقونة بحث (عدسة مكبّرة) في بداية الحقل بلون ثانوي.",
  "Let me know if you're interested":
    "أخبرني إن كنت مهتمًا",
  "Light gray background, purple play button, purple waveform bars. No receipt indicator.":
    "خلفية رمادية فاتحة وزر تشغيل بنفسجي وأشرطة موجة صوتية بنفسجية، بلا مؤشر إيصال.",
  "Light gray background. Block icon + italic text in muted dark. No receipt.":
    "خلفية رمادية فاتحة وأيقونة حظر مع نص مائل بلون داكن خافت، بلا إيصال.",
  "Light gray background. Purple document icon, dark title, gray description, purple 'Open Document' button. No receipt.":
    "خلفية رمادية فاتحة وأيقونة مستند بنفسجية وعنوان داكن ووصف رمادي وزر «فتح المستند» بنفسجي، بلا إيصال.",
  "Link text":
    "نص الرابط",
  "Loading (Received)":
    "جارٍ التحميل (واردة)",
  "Loading (Sent)":
    "جارٍ التحميل (مُرسَلة)",
  "Loading Overlay":
    "طبقة التحميل",
  "Loading state with skeleton placeholders while call history is being fetched.":
    "حالة تحميل بهياكل نائبة أثناء جلب سجل المكالمات.",
  "Loading state with skeleton placeholders while conversations are being fetched.":
    "حالة تحميل بهياكل نائبة أثناء جلب المحادثات.",
  "Loading state with skeleton placeholders while groups are being fetched.":
    "حالة تحميل بهياكل نائبة أثناء جلب المجموعات.",
  "Looks like something went wrong.":
    "يبدو أن هناك خطأ ما.",
  "Made Admin":
    "عُيّن مسؤولًا",
  "March 2026":
    "مارس 2026",
  "Marketing":
    "التسويق",
  "Material icon 'block' (outlined, 20px). Muted white on sent, muted dark on received.":
    "أيقونة Material باسم block (محدّدة، 20 بكسل). أبيض خافت على المُرسَلة، وداكن خافت على الواردة.",
  "Material icon 'description' (filled, 24px). White on sent, purple on received.":
    "أيقونة Material باسم description (ممتلئة، 24 بكسل). أبيض على المُرسَلة، بنفسجي على الواردة.",
  "Material icon 'download' at the right of the info bar. White on sent, purple on received.":
    "أيقونة Material باسم download في نهاية شريط المعلومات. أبيض على المُرسَلة، بنفسجي على الواردة.",
  "Media grid":
    "شبكة الوسائط",
  "Member Added":
    "أُضيف عضو",
  "Member Joined":
    "انضم عضو",
  "Member Left":
    "غادر عضو",
  "Member Removed":
    "أُزيل عضو",
  "Message Composer":
    "مُنشئ الرسائل",
  "Message Text":
    "نص الرسالة",
  "Message time displayed below the audio content (e.g. 4:56 pm).":
    "وقت الرسالة معروضًا أسفل المحتوى الصوتي (مثل 4:56 م).",
  "Micheal Scott":
    "مايكل سكوت",
  "Mind Body Wellness":
    "صحة الجسد والعقل",
  "Missed Voice Call":
    "مكالمة صوتية فائتة",
  "Mixed batch":
    "دفعة مختلطة",
  "Mobile":
    "الجوال",
  "Muhammed Fareed":
    "محمد فريد",
  "Multiple Loading":
    "تحميل متعدد",
  "Multiple Loading (Received)":
    "تحميل متعدد (واردة)",
  "Multiple Loading (Sent)":
    "تحميل متعدد (مُرسَلة)",
  "Multiple formats (separate)":
    "تنسيقات متعددة (منفصلة)",
  "New":
    "جديد",
  "New Message Divider":
    "فاصل الرسائل الجديدة",
  "No Conversations Yet":
    "لا محادثات بعد",
  "No calls yet":
    "لا مكالمات بعد",
  "No group yet":
    "لا مجموعات بعد",
  "No preview available":
    "لا تتوفّر معاينة",
  "No replies":
    "لا ردود",
  "Not delivered":
    "لم تُسلَّم",
  "On it 👍":
    "جارٍ العمل عليه 👍",
  "One image at full container width, square aspect ratio.":
    "صورة واحدة بعرض الحاوية الكامل بنسبة أبعاد مربّعة.",
  "One large image on the left (50%), two stacked images on the right (50%).":
    "صورة كبيرة واحدة في البداية (50%)، وصورتان متراكبتان في النهاية (50%).",
  "Oops!":
    "عذرًا!",
  "Open Document":
    "فتح المستند",
  "Open Whiteboard":
    "فتح السبّورة",
  "Open document to edit content toge...":
    "افتح المستند لتحرير المحتوى معًا...",
  "Open whiteboard to draw together":
    "افتح السبّورة للرسم معًا",
  "Option Text":
    "نص الخيار",
  "Ordered List":
    "قائمة مرقّمة",
  "Overlay (4+)":
    "طبقة (+4)",

  /* ─── Core Components — batch 1 ─── */
  "'Collaborative Document' — semibold, primary size.":
    "«مستند تعاوني» — خط شبه عريض بالحجم الأساسي.",
  "'Collaborative Whiteboard' — semibold, primary size.":
    "«سبّورة تعاونية» — خط شبه عريض بالحجم الأساسي.",
  "'Open Document' — semibold, centered. White on sent, purple on received.":
    "«فتح المستند» — شبه عريض ومتوسّط. أبيض على المُرسَلة، بنفسجي على الواردة.",
  "'Open Whiteboard' — semibold, centered. White on sent, purple on received.":
    "«فتح السبّورة» — شبه عريض ومتوسّط. أبيض على المُرسَلة، بنفسجي على الواردة.",
  "'Open whiteboard to draw together' in muted color.":
    "«افتح السبّورة للرسم معًا» بلون خافت.",
  "'This message was deleted' — italic, regular weight, muted color.":
    "«تم حذف هذه الرسالة» — مائل بوزن عادي ولون خافت.",
  "'Voice call' or 'Video call' — semibold, primary text color (white on outgoing, dark on incoming).":
    "«مكالمة صوتية» أو «مكالمة فيديو» — شبه عريض بلون النص الأساسي (أبيض للصادرة، داكن للواردة).",
  "1,225 Members":
    "1,225 عضوًا",
  "11 Members":
    "11 عضوًا",
  "16 Members":
    "16 عضوًا",
  "233 Members":
    "233 عضوًا",
  "32 Members":
    "32 عضوًا",
  "33 Members":
    "33 عضوًا",
  "35 Members":
    "35 عضوًا",
  "36 Members":
    "36 عضوًا",
  "42 Members":
    "42 عضوًا",
  "8 Members":
    "8 أعضاء",
  "1. First item":
    "1. العنصر الأول",
  "2. Second item":
    "2. العنصر الثاني",
  "3. Third item":
    "3. العنصر الثالث",
  "160×160px in chat bubble context":
    "‎160×160 بكسل داخل فقاعة الدردشة",
  "2px — Between grid images":
    "2 بكسل — بين صور الشبكة",
  "36×36 white circle containing the call type icon (phone or video camera) in purple.":
    "دائرة بيضاء 36×36 تحوي أيقونة نوع المكالمة (هاتف أو كاميرا فيديو) باللون البنفسجي.",
  "2 Grid":
    "شبكة من 2",
  "3 Grid":
    "شبكة من 3",
  "4 Grid":
    "شبكة من 4",
  "4+ Grid":
    "شبكة من +4",
  "2 Grid (Received)":
    "شبكة من 2 (واردة)",
  "2 Grid (Sent)":
    "شبكة من 2 (مُرسَلة)",
  "3 Grid (Received)":
    "شبكة من 3 (واردة)",
  "3 Grid (Sent)":
    "شبكة من 3 (مُرسَلة)",
  "4 Grid (Received)":
    "شبكة من 4 (واردة)",
  "4 Grid (Sent)":
    "شبكة من 4 (مُرسَلة)",
  "4+ Grid (Received)":
    "شبكة من +4 (واردة)",
  "4+ Grid (Sent)":
    "شبكة من +4 (مُرسَلة)",
  "4 Replies":
    "4 ردود",
  "Grid":
    "شبكة",
  "Horizontal":
    "أفقي",
  "Vertical":
    "رأسي",
  "A scrollable list of conversations with avatars, message previews, timestamps, and unread indicators.":
    "قائمة محادثات قابلة للتمرير تعرض الصور الرمزية ومعاينات الرسائل والطوابع الزمنية ومؤشرات غير المقروء.",
  "AI":
    "الذكاء الاصطناعي",
  "AI features":
    "ميزات الذكاء الاصطناعي",
  "Aa":
    "أ ب",
  "Action Button":
    "زر الإجراء",
  "Action Text (Received)":
    "نص الإجراء (واردة)",
  "Action Text (Sent)":
    "نص الإجراء (مُرسَلة)",
  "Action Types":
    "أنواع الإجراءات",
  "Active Chip BG":
    "خلفية الشريحة النشطة",
  "Active search with filtered group results based on query.":
    "بحث نشط يعرض نتائج المجموعات المُرشَّحة حسب الاستعلام.",
  "Active search with focused input, filter chips, and filtered conversation results.":
    "بحث نشط بحقل مُركَّز وشرائح تصفية ونتائج محادثات مُرشَّحة.",
  "Add photos, videos, documents or audio to your message.":
    "أضف صورًا أو مقاطع فيديو أو مستندات أو ملفات صوتية إلى رسالتك.",
  "Admin Removed":
    "تمت إزالة المسؤول",
  "Anatomy":
    "البنية",
  "Attach file":
    "إرفاق ملف",
  "Attachment":
    "مرفق",
  "Audio results":
    "نتائج صوتية",
  "Audio — Cancelled (outgoing)":
    "صوتية — أُلغيت (صادرة)",
  "Audio — Ended (outgoing)":
    "صوتية — انتهت (صادرة)",
  "Audio — Missed (incoming)":
    "صوتية — فائتة (واردة)",
  "Audio — Rejected (incoming)":
    "صوتية — مرفوضة (واردة)",
  "Back to chats":
    "العودة إلى المحادثات",
  "Background":
    "الخلفية",
  "Banned Members":
    "الأعضاء المحظورون",
  "Base Component — Individual call row with avatar, name, direction, datetime, and trailing call/video icon.":
    "مكوّن أساسي — صف مكالمة مفرد يضم الصورة الرمزية والاسم والاتجاه والتاريخ والوقت وأيقونة مكالمة/فيديو في نهايته.",
  "Base Component — Individual conversation row with avatar, name, message preview, timestamp.":
    "مكوّن أساسي — صف محادثة مفرد يضم الصورة الرمزية والاسم ومعاينة الرسالة والطابع الزمني.",
  "Base Component — Individual group row with avatar, name, and member count.":
    "مكوّن أساسي — صف مجموعة مفرد يضم الصورة الرمزية والاسم وعدد الأعضاء.",
  "Base Component — Primary button used for Retry action in error state.":
    "مكوّن أساسي — زر رئيسي يُستخدم لإجراء إعادة المحاولة في حالة الخطأ.",
  "Base Component — Primary button used for Start a call and Retry actions.":
    "مكوّن أساسي — زر رئيسي يُستخدم لإجراءي بدء مكالمة وإعادة المحاولة.",
  "Base Component — Screen header with title and action buttons.":
    "مكوّن أساسي — ترويسة شاشة بعنوان وأزرار إجراءات.",
  "Base Component — Screen header with title and create group action.":
    "مكوّن أساسي — ترويسة شاشة بعنوان وإجراء إنشاء مجموعة.",
  "Base Component — Screen header with title.":
    "مكوّن أساسي — ترويسة شاشة بعنوان.",
  "Base Component — Search input field.":
    "مكوّن أساسي — حقل إدخال بحث.",
  "Base Component — Search input for filtering groups.":
    "مكوّن أساسي — حقل بحث لتصفية المجموعات.",
  "Base Component — Search input used in the members section.":
    "مكوّن أساسي — حقل بحث يُستخدم في قسم الأعضاء.",
  "Base Component — Skeleton loading placeholder for call items.":
    "مكوّن أساسي — هيكل تحميل مؤقّت لعناصر المكالمات.",
  "Base Component — Skeleton loading placeholder for conversation items.":
    "مكوّن أساسي — هيكل تحميل مؤقّت لعناصر المحادثات.",
  "Base Component — Skeleton loading placeholder for group items.":
    "مكوّن أساسي — هيكل تحميل مؤقّت لعناصر المجموعات.",
  "Block Icon":
    "أيقونة الحظر",
  "Block Quote":
    "اقتباس",
  "Bold":
    "عريض",
  "Blurred grid with a circular cancel (×) button overlay.":
    "شبكة ضبابية يعلوها زر إلغاء (×) دائري.",
  "Blurred image with a circular cancel (×) button overlay.":
    "صورة ضبابية يعلوها زر إلغاء (×) دائري.",
  "Blurred image with centered cancel button":
    "صورة ضبابية بزر إلغاء في المنتصف",
  "Blurred thumbnail with cancel (×) button overlay.":
    "صورة مصغّرة ضبابية يعلوها زر إلغاء (×).",
  "Bold question text at the top of the poll.":
    "نص السؤال بخط عريض أعلى الاستطلاع.",
  "Border":
    "الحدّ",
  "Both takes 🎧":
    "كلا التسجيلين 🎧",
  "Bottom-left badge showing video length (e.g. '02:34'). Semi-transparent dark background with white text.":
    "شارة في الأسفل عند البداية تعرض مدة الفيديو (مثل «02:34»)، بخلفية داكنة شبه شفافة ونص أبيض.",
  "Bottom-right aligned. Time + read receipt (sent only).":
    "محاذاة إلى نهاية السطر في الأسفل. الوقت + إيصال القراءة (للمُرسَلة فقط).",
  "Bubble Background":
    "خلفية الفقاعة",
  "Bullet List":
    "قائمة نقطية",
  "Bullet-point List":
    "قائمة نقطية",
  "Call Back":
    "معاودة الاتصال",
  "Call Back Button (optional)":
    "زر معاودة الاتصال (اختياري)",
  "Calls":
    "المكالمات",
  "Cancel Button (Loading)":
    "زر الإلغاء (أثناء التحميل)",
  "Centered circular button (48×48) with semi-transparent dark background and white play_arrow icon.":
    "زر دائري في المنتصف (48×48) بخلفية داكنة شبه شفافة وأيقونة تشغيل بيضاء.",
  "Centered circular button with close icon. Shown during upload.":
    "زر دائري في المنتصف بأيقونة إغلاق، يظهر أثناء الرفع.",
  "Centered date label (Today, Yesterday, etc.) with pill border. No lines.":
    "تسمية تاريخ في المنتصف (اليوم، أمس، إلخ) بحدّ على شكل حبّة دواء، بلا خطوط.",
  "Chat Area":
    "منطقة الدردشة",
  "Chat Bubbles":
    "فقاعات الدردشة",
  "Chip Border":
    "حدّ الشريحة",
  "Circular button (48×48) with play_arrow or pause icon. White bg with purple icon on both variants.":
    "زر دائري (48×48) بأيقونة تشغيل أو إيقاف مؤقّت، بخلفية بيضاء وأيقونة بنفسجية في كلا النمطين.",
  "Circular outline indicating selectable option. Muted white on sent, gray on received.":
    "إطار دائري يشير إلى خيار قابل للتحديد. أبيض خافت على المُرسَلة، ورمادي على الواردة.",
  "Clear Button":
    "زر المسح",
  "Code":
    "شيفرة",
  "Code Block":
    "كتلة شيفرة",
  "Collaborative":
    "تعاوني",
  "Composed From":
    "مُركَّب من",
  "Complete search term entered with clear button visible.":
    "مصطلح بحث كامل مُدخَل مع ظهور زر المسح.",
  "Conversation List":
    "قائمة المحادثات",
  "Conversation result":
    "نتيجة محادثة",
  "Conversation Starters (HTML)":
    "بادئات المحادثة (HTML)",
  "Conversation Summary (HTML)":
    "ملخّص المحادثة (HTML)",
  "Core Components":
    "المكوّنات الأساسية",
  "Custom SVG (phone + outgoing arrow)":
    "رسم SVG مخصّص (هاتف + سهم صادر)",
  "Custom SVG (videocam + incoming arrow)":
    "رسم SVG مخصّص (كاميرا فيديو + سهم وارد)",
  "Custom SVG (videocam + outgoing arrow)":
    "رسم SVG مخصّص (كاميرا فيديو + سهم صادر)",
  "Custom SVG whiteboard icon (from ActionSheet). White on sent, purple on received.":
    "أيقونة سبّورة SVG مخصّصة (من ورقة الإجراءات). أبيض على المُرسَلة، بنفسجي على الواردة.",
  "Dark overlay with visibility_off icon, warning text, and 'See Photo' button.":
    "طبقة داكنة بأيقونة إخفاء ونص تحذير وزر «عرض الصورة».",
  "Date Divider":
    "فاصل التاريخ",
  "Date and file size separated by a bullet (e.g. '16 Sep, 2026 • 200 KB').":
    "التاريخ وحجم الملف يفصل بينهما نقطة (مثل «16 سبتمبر 2026 • 200 كيلوبايت»).",
  "Date and time (e.g. '19 May, 05:23 PM') — smaller, muted color.":
    "التاريخ والوقت (مثل «19 مايو، 05:23 م») — بحجم أصغر ولون خافت.",
  "Delete Chat":
    "حذف المحادثة",
  "Delete and Exit":
    "حذف وخروج",
  "Design Tokens":
    "رموز التصميم",
  "Desktop":
    "سطح المكتب",
  "Do you want to pin this conversation?":
    "هل تريد تثبيت هذه المحادثة؟",
  "Do you want to pin this message to this conversation?":
    "هل تريد تثبيت هذه الرسالة في هذه المحادثة؟",
  "Do you want to unpin this conversation?":
    "هل تريد إلغاء تثبيت هذه المحادثة؟",
  "Do you want to unpin this message from this conversation?":
    "هل تريد إلغاء تثبيت هذه الرسالة من هذه المحادثة؟",
  "Document Icon":
    "أيقونة المستند",
  "Document preview thumbnail at the top with rounded corners. Shows collaborative editing with user cursors.":
    "معاينة مصغّرة للمستند في الأعلى بزوايا دائرية، تُظهر التحرير التعاوني مع مؤشّرات المستخدمين.",
  "Document results":
    "نتائج المستندات",
  "Documents":
    "المستندات",
  "Documents — collapsed, click \"Show more\"":
    "المستندات — مطوية، اضغط «عرض المزيد»",
  "Double check (✓✓) in green/highlight color indicating the message was read.":
    "علامتا صح (✓✓) بلون أخضر/مميّز تشيران إلى أن الرسالة قد قُرئت.",
  "Download Icon":
    "أيقونة التنزيل",
  "https://www.cometchat.com/docs": "https://www.cometchat.com/docs/ar",
  "https://": "⁦https://⁩",
  "https://www.example.com": "⁦https://www.مثال.com⁩",
  /* An address mixes scripts, so bidi would otherwise put the domain to the
     left of the local part. U+2066/U+2069 isolate it as one LTR token. */
  "olivia@untitledui.com": "\u2066أوليفيا@untitledui.com\u2069",
  "george@cometchat.com": "\u2066جورج@cometchat.com\u2069",
  "GA":
    "جآ",
  "AD":
    "الف",
  "JD":
    "فف",
  "EU":
    "مت",
  "OR":
    "أر",
  "Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project and I'm having some trouble with the configuration files.":
    "مرحبًا، كنت أتساءل إن كان بإمكانك مساعدتي في أمر ما. أحاول معرفة كيفية إعداد المشروع الجديد وأواجه بعض الصعوبة مع ملفات الإعدادات.",
  "This member will be removed from the group but can rejoin if they have an invite link. Their previous messages will remain.":
    "سيُزال هذا العضو من المجموعة، لكن يمكنه الانضمام مجددًا إذا كان لديه رابط دعوة. وستظل رسائله السابقة ظاهرة.",
  "False Information":
    "معلومات مضللة",
  "Insert":
    "إدراج",
  "Display text":
    "النص المعروض",
  "Paste URL here":
    "الصق الرابط هنا",
  "CometChat Documentation":
    "وثائق CometChat",
  "OK":
    "حسنًا",
  "Hey, I was wondering if you could help me with something. I've been trying to figure out how to set up the new project structure and I'm a bit stuck on the configuration part.":
    "مرحبًا، كنت أتساءل إن كان بإمكانك مساعدتي في أمر ما. أحاول معرفة كيفية إعداد بنية المشروع الجديدة وأواجه بعض الصعوبة في جزء الإعدادات.",
  "{name} is typing":
    "{name} يكتب",
  "{name} is recording":
    "{name} يسجّل",
  "{name} is uploading":
    "{name} يرفع ملفًا",
  "{count} people are typing":
    "{count} أشخاص يكتبون",
  "{count} people are recording":
    "{count} أشخاص يسجّلون",
  "{count} people are uploading":
    "{count} أشخاص يرفعون ملفات",
  "A small popup that shows contextual information on hover or focus.\n\n**Background:** #0a0d12, **text:** white 12px/600, **supporting:** white 12px/400.\n\n**Arrow positions:** Top (center/left/right), Bottom (center/left/right), Left, Right, None.\n\n**Padding:** 8px 12px (title only), 12px (with supporting text).\n\nUses foundation tokens: `--color-neutral-lm-950`, `--color-white`, `--radius-md`,\n`--font-size-1`, `--font-weight-semibold`, `--font-weight-regular`.":
    "نافذة صغيرة تعرض معلومات سياقية عند التمرير أو التركيز.\n\n**الخلفية:** #0a0d12، **النص:** أبيض 12px/600، **النص المساعد:** أبيض 12px/400.\n\n**مواضع السهم:** أعلى (وسط/يسار/يمين)، أسفل (وسط/يسار/يمين)، يسار، يمين، بدون.\n\n**الحشو:** 8px 12px (العنوان فقط)، 12px (مع نص مساعد).\n\nيستخدم رموز الأساسيات: `--color-neutral-lm-950`، `--color-white`، `--radius-md`،\n`--font-size-1`، `--font-weight-semibold`، `--font-weight-regular`.",
  "Tooltip": "تلميح",
  "Arrow Positions": "مواضع السهم",
  "With Supporting Text": "مع نص مساعد",
  "Interactive": "تفاعلي",
  "Arrow at bottom (tooltip appears above trigger)": "السهم في الأسفل (يظهر التلميح فوق العنصر)",
  "Arrow at top (tooltip appears below trigger)": "السهم في الأعلى (يظهر التلميح أسفل العنصر)",
  "Arrow on sides": "السهم على الجانبين",
  "Bottom arrow (tooltip above)": "سهم سفلي (التلميح في الأعلى)",
  "Top arrow (tooltip below)": "سهم علوي (التلميح في الأسفل)",
  "Side arrows": "أسهم جانبية",
  "Bottom left": "أسفل اليسار",
  "Bottom center": "أسفل الوسط",
  "Bottom right": "أسفل اليمين",
  "Top left": "أعلى اليسار",
  "Top center": "أعلى الوسط",
  "Top right": "أعلى اليمين",
  "Arrow right": "سهم يمين",
  "Arrow left": "سهم يسار",
  "This is a tooltip": "هذا تلميح",
  "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning.": "تُستخدم التلميحات لوصف عنصر أو تعريفه. في معظم الحالات تساعد التلميحات المستخدم على فهم المعنى.",
  "Tooltips are used to describe or identify an element.": "تُستخدم التلميحات لوصف عنصر أو تعريفه.",
  "Add to favorites": "إضافة إلى المفضلة",
  "Share this item": "مشاركة هذا العنصر",
  "Copy a link or share via email.": "انسخ رابطًا أو شارِك عبر البريد الإلكتروني.",
  "Delete permanently": "حذف نهائي",
  "This action cannot be undone.": "لا يمكن التراجع عن هذا الإجراء.",
  "Hover me": "مرّر المؤشر فوقي",
  "Title Only": "العنوان فقط",
  "Simple tooltip with just a title. Padding: 8px 12px. Used for icon labels and short hints.": "تلميح بسيط بعنوان فقط. الحشو: 8px 12px. يُستخدم لتسميات الأيقونات والتلميحات القصيرة.",
  "Title + description. Padding: 12px. Max-width 320px. Used for longer explanations.": "عنوان + وصف. الحشو: 12px. أقصى عرض 320px. يُستخدم للشروح الأطول.",
  "9 positions: top (left/center/right), bottom (left/center/right), left, right, none.": "٩ مواضع: أعلى (يسار/وسط/يمين)، أسفل (يسار/وسط/يمين)، يسار، يمين، بدون.",
  "All arrow positions — rendered as static tooltip previews (no clipping).": "كل مواضع السهم — معروضة كمعاينات ثابتة للتلميح (بدون اقتصاص).",
  "With supporting text — all positions.": "مع نص مساعد — كل المواضع.",
  "Interactive — hover to see tooltip appear.": "تفاعلي — مرّر المؤشر لرؤية التلميح.",
  "Interactive playground — use the controls panel to configure the Tooltip.": "مساحة تجريبية تفاعلية — استخدم لوحة التحكم لضبط التلميح.",
  "Sarah Johnson": "سارة جونسون",
  "Ben Scott": "بن سكوت",
  "John": "جون",
  "George": "جورج",
  "Online": "متصل",
  "User Blocked": "تم حظر المستخدم",
  "Connection Lost": "انقطع الاتصال",
  "Message Failed": "فشل إرسال الرسالة",
  "New Feature": "ميزة جديدة",
  "Photo": "صورة",
  "Video": "فيديو",
  "Audio": "صوت",
  "File": "ملف",
  "Location": "موقع",
  "Sticker": "ملصق",
  "GIF": "صورة متحركة",
  "Today": "اليوم",
  "Yesterday": "أمس",
  "Now": "الآن",
  "Just now": "الآن",
  "Mon": "الاثنين",
  "Tue": "الثلاثاء",
  "Wed": "الأربعاء",
  "Thu": "الخميس",
  "Fri": "الجمعة",
  "Sat": "السبت",
  "Sun": "الأحد",
  "Moderator": "مشرف",
  "Owner": "المالك",
  "Participant": "مشارك",
  "Understood": "مفهوم",
  "Looks like something went wrong.\nPlease try again.": "يبدو أن هناك خطأ ما.\nيرجى المحاولة مرة أخرى.",
  "Recently Used": "المستخدمة مؤخرًا",
  "Smiley & People": "الوجوه والأشخاص",
  "Food & Drink": "الطعام والشراب",
  "Activity": "الأنشطة",
  "Travel & Places": "السفر والأماكن",
  "Objects": "الأشياء",
  "Flags": "الأعلام",
  "In-store": "في المتجر",
  "Others": "أخرى",
  "Design system": "نظام التصميم",
  "Hello": "مرحبًا",
  "You've reached the limit. You can add up to {n} options.": "لقد بلغت الحد الأقصى. يمكنك إضافة ما يصل إلى {n} خيارات.",
  "On my way!": "أنا في الطريق!",
};

/**
 * Source strings reach us with whatever whitespace their authoring context
 * gave them: JSX collapses a wrapped sentence to single spaces, while a JSDoc
 * comment extracted by react-docgen keeps its original newlines. Index on a
 * whitespace-collapsed form so one dictionary entry matches either shape.
 */
const squash = (s: string) => s.replace(/\s+/g, " ").trim();

const LOOSE: Record<string, string> = Object.fromEntries(
  Object.entries(AR).map(([en, ar]) => [squash(en), ar])
);

/**
 * Timestamps are assembled at runtime ("22 Apr, 01:36 pm", "Yesterday, 9:00 pm"),
 * so no fixed key can ever match one. Translate the parts instead: month and day
 * names, the meridiem, and the relative words around them.
 */
const DATE_ATOMS: Record<string, string> = {
  January: "يناير", February: "فبراير", March: "مارس", April: "أبريل",
  May: "مايو", June: "يونيو", July: "يوليو", August: "أغسطس",
  September: "سبتمبر", October: "أكتوبر", November: "نوفمبر", December: "ديسمبر",
  Jan: "يناير", Feb: "فبراير", Mar: "مارس", Apr: "أبريل",
  Jun: "يونيو", Jul: "يوليو", Aug: "أغسطس", Sep: "سبتمبر",
  Sept: "سبتمبر", Oct: "أكتوبر", Nov: "نوفمبر", Dec: "ديسمبر",
  Monday: "الاثنين", Tuesday: "الثلاثاء", Wednesday: "الأربعاء",
  Thursday: "الخميس", Friday: "الجمعة", Saturday: "السبت", Sunday: "الأحد",
  Mon: "الاثنين", Tue: "الثلاثاء", Wed: "الأربعاء", Thu: "الخميس",
  Fri: "الجمعة", Sat: "السبت", Sun: "الأحد",
  Today: "اليوم", Yesterday: "أمس", Tomorrow: "غدًا",
  am: "ص", pm: "م", AM: "ص", PM: "م",
  ago: "مضت", min: "دقيقة", mins: "دقائق", hr: "ساعة", hrs: "ساعات",
  h: "س", m: "د", d: "ي",
};

const ATOM_RE = new RegExp(`\\b(${Object.keys(DATE_ATOMS).join("|")})\\b`, "g");

/**
 * Only fires for strings that actually look like a timestamp — a digit plus at
 * least one known atom — so ordinary prose is never rewritten piecemeal.
 */
const toArabicDateLike = (english: string): string | undefined => {
  if (!/\d/.test(english)) return undefined;
  ATOM_RE.lastIndex = 0;
  if (!ATOM_RE.test(english)) return undefined;
  ATOM_RE.lastIndex = 0;
  return english.replace(ATOM_RE, (m) => DATE_ATOMS[m] ?? m);
};

/**
 * A sender label arrives as "John:" and a heading as "Type:", so retry once
 * without the trailing separator and put it back on the Arabic.
 */
const toArabicSuffixed = (english: string): string | undefined => {
  const m = english.match(/^(.*?)(\s*[:：])$/);
  if (!m) return undefined;
  const stem = AR[m[1]] ?? LOOSE[squash(m[1])];
  return stem === undefined ? undefined : stem + m[2];
};

/** The Arabic rendering for an English string, or undefined if untranslated. */
export const toArabic = (english: string): string | undefined =>
  AR[english] ??
  LOOSE[squash(english)] ??
  toArabicSuffixed(english) ??
  toArabicDateLike(english);

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
    "الطابع الزمني المعروض داخل فقاعات الرسائل، ويوضّح وقت إرسال الرسالة. عنصر مضغوط ضمن السطر يقع أسفل نص الرسالة أو بجانبه. **البنية (من Figma):** - الحجم: بمقدار المحتوى × ارتفاع 24px - الخط: 12px (`--font-size-1`)، وزن 400، ارتفاع سطر 16px (`--line-height-caption-2`) - اللون: `--color-neutral-500` (#717680) - أيقونة إيصال قراءة اختيارية (16×16) بفجوة 2px **الأنماط:** - `sent` — طابع زمني على الرسائل المُرسَلة (رمادي، قد يتضمّن إيصالات القراءة) - `received` — طابع زمني على الرسائل الواردة (رمادي) - `separator` — شريحة فاصل تاريخ بين مجموعات الرسائل (\"Today\"، \"Yesterday\") **الأشكال:** - `time` — \"4:56 pm\"، \"10:30 am\" - `date` — \"12 Jan\"، \"5 Mar 2024\" - `datetime` — \"12 Jan, 4:56 pm\" - `relative` — \"Just now\"، \"2 min ago\"",
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

/** The Arabic rendering for an English string, or undefined if untranslated. */
export const toArabic = (english: string): string | undefined =>
  AR[english] ?? LOOSE[squash(english)];

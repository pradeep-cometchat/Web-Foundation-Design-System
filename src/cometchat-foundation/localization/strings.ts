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

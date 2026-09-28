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

/** The Arabic rendering for an English string, or undefined if untranslated. */
export const toArabic = (english: string): string | undefined => AR[english];

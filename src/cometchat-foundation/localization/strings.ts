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

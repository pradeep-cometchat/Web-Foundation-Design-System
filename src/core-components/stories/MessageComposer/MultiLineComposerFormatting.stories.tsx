import type { Meta, StoryObj } from "@storybook/react";

/**
 * Rich Text Formatting in the Multi Line Composer. When the formatting mode is
 * active (Aa button highlighted), a formatting toolbar appears above the input area.
 * Each formatting type shows the toolbar with the active option highlighted.
 *
 * **Figma:** [Message Composer – Formatting](https://www.figma.com/design/tmJxdBPHT0j3A6NvSZXfnZ/%E2%9D%96-Design-System---Web-Chat-UI-Kits?node-id=19113-33855)
 */
const meta: Meta = {
  title: "Core Components/Message Composer/Multi Line Composer/Formatting",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj;

type FormattingType = "bold" | "italic" | "underline" | "strikethrough" | "link" | "orderedList" | "bulletList" | "blockQuote" | "code" | "codeBlock";

/* ─── Icons (reused from State story) ──────────────────────────────────────── */

const IconAddCircle = () => (
  <svg width="20" height="20" viewBox="0 0 15.83 15.83" fill="none">
    <path d="M7.292 8.542V11.25c0 .177.06.326.18.445a.6.6 0 0 0 .445.18.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.445V8.542h2.708a.6.6 0 0 0 .445-.18.6.6 0 0 0 .18-.446.6.6 0 0 0-.18-.445.6.6 0 0 0-.445-.18H8.542V4.584a.6.6 0 0 0-.18-.446.6.6 0 0 0-.446-.18.6.6 0 0 0-.445.18.6.6 0 0 0-.18.446v2.708H4.584a.6.6 0 0 0-.446.18.6.6 0 0 0-.18.445c0 .177.06.326.18.446a.6.6 0 0 0 .446.18h2.708Zm.626 7.291A7.917 7.917 0 1 1 7.918 0a7.917 7.917 0 0 1 0 15.833Zm0-1.25a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z" fill="#A4A7AE"/>
  </svg>
);
const IconMic = () => (
  <svg width="20" height="20" viewBox="0 0 11.37 15.58" fill="none">
    <path d="M5.685 9.472c-.607 0-1.117-.218-1.531-.653-.415-.435-.622-.963-.622-1.583V2.139c0-.594.21-1.1.628-1.515A2.07 2.07 0 0 1 5.684 0c.598 0 1.106.208 1.525.624.419.416.628.92.628 1.515v5.097c0 .62-.207 1.148-.622 1.583-.414.435-.924.653-1.53.653Zm-.657 5.448v-2.078a5.23 5.23 0 0 1-3.37-1.587A5.17 5.17 0 0 1 .008 7.91a.63.63 0 0 1 .142-.477.62.62 0 0 1 .474-.197c.184 0 .34.064.467.193a.72.72 0 0 1 .243.477 3.87 3.87 0 0 0 1.501 2.64 4.37 4.37 0 0 0 2.849 1.047c1.082 0 2.035-.343 2.86-1.03a3.87 3.87 0 0 0 1.499-2.633.72.72 0 0 1 .239-.477.66.66 0 0 1 .474-.193.63.63 0 0 1 .474.197.63.63 0 0 1 .149.477 5.17 5.17 0 0 1-1.651 3.334 5.23 5.23 0 0 1-3.388 1.59v2.075a.66.66 0 0 1-.193.47.64.64 0 0 1-.472.196.64.64 0 0 1-.472-.193.66.66 0 0 1-.193-.47Zm.657-6.768c.244 0 .444-.089.6-.267a.93.93 0 0 0 .233-.65V2.145a.83.83 0 0 0-.24-.587.8.8 0 0 0-.593-.238.8.8 0 0 0-.593.238.83.83 0 0 0-.24.583v5.095c0 .256.077.472.233.65.156.179.356.268.6.268Z" fill="#A4A7AE"/>
  </svg>
);
const IconMood = () => (
  <svg width="20" height="20" viewBox="0 0 16.39 16.39" fill="none">
    <path d="M11.151 7.167a1.14 1.14 0 0 0 .807-.333c.222-.222.333-.49.333-.806a1.14 1.14 0 0 0-.332-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.49.333.807.333Zm-5.917 0a1.14 1.14 0 0 0 .807-.333c.222-.222.334-.49.334-.806a1.14 1.14 0 0 0-.333-.807 1.14 1.14 0 0 0-.808-.332c-.316 0-.585.11-.807.332a1.14 1.14 0 0 0-.332.807c0 .316.11.584.332.806.222.222.491.333.807.333Zm2.96 5.513c.784 0 1.497-.18 2.159-.541a4.58 4.58 0 0 0 1.616-1.498.38.38 0 0 0-.016-.469.44.44 0 0 0-.435-.229H4.859a.44.44 0 0 0-.427.23.38.38 0 0 0-.008.462 4.58 4.58 0 0 0 1.609 1.504c.663.36 1.38.541 2.149.541h.012ZM8.195 16.389a8.19 8.19 0 0 1-5.8-2.406A8.19 8.19 0 0 1 0 8.195 8.19 8.19 0 0 1 2.399 2.395 8.19 8.19 0 0 1 8.194 0a8.19 8.19 0 0 1 5.8 2.399 8.19 8.19 0 0 1 2.395 5.795 8.19 8.19 0 0 1-2.406 5.8 8.19 8.19 0 0 1-5.788 2.395Zm-.001-1.32a6.73 6.73 0 0 0 4.876-1.999 6.73 6.73 0 0 0 2-4.876 6.73 6.73 0 0 0-2-4.876 6.73 6.73 0 0 0-4.876-2 6.73 6.73 0 0 0-4.876 2 6.73 6.73 0 0 0-2 4.876 6.73 6.73 0 0 0 2 4.876 6.73 6.73 0 0 0 4.876 2Z" fill="#A4A7AE"/>
  </svg>
);
const IconSticker = () => (
  <svg width="22" height="22" viewBox="0 -960 960 960" fill="none" style={{ minWidth: 22, minHeight: 22 }}>
    <path d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v320L600-160H200Zm0-80h360v-120q0-33 23.5-56.5T640-440h120v-280H200v480Z" fill="#A4A7AE"/>
  </svg>
);
const IconAI = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" style={{ minWidth: 22, minHeight: 22 }}>
    <path d="M7.377 5.43c.083-.406.663-.406.746 0a5 5 0 0 0 3.947 3.947c.406.083.406.663 0 .746a5 5 0 0 0-3.947 3.947c-.083.406-.663.406-.746 0a5 5 0 0 0-3.947-3.947c-.406-.083-.406-.663 0-.746A5 5 0 0 0 7.377 5.43Z" stroke="#A4A7AE" strokeWidth="1.25" fill="none"/>
    <path d="M13.913 4.145a.03.03 0 0 1 .049 0 3.38 3.38 0 0 0 2.393 2.393.03.03 0 0 1 0 .049 3.38 3.38 0 0 0-2.393 2.393.03.03 0 0 1-.049 0 3.38 3.38 0 0 0-2.393-2.393.03.03 0 0 1 0-.049 3.38 3.38 0 0 0 2.393-2.393Z" stroke="#A4A7AE" strokeWidth="1.25" fill="none"/>
  </svg>
);
const IconSend = () => (
  <svg width="16" height="14" viewBox="0 0 15.78 13.6" fill="none">
    <path d="M1.267 13.52c-.302.121-.589.095-.86-.077-.271-.172-.407-.422-.407-.751V8.47L6.923 6.797 0 5.124V.903C0 .574.136.324.407.152.678-.02.965-.046 1.267.075L15.223 5.96c.372.166.558.447.558.84 0 .393-.186.673-.558.836L1.267 13.52Z" fill="currentColor"/>
  </svg>
);

/* ─── Styles ───────────────────────────────────────────────────────────────── */

const composerBox: React.CSSProperties = { width: 800, display: "flex", flexDirection: "column", background: "var(--color-bg-01)", border: "1px solid var(--color-border-default)", borderRadius: 8 };
const formatToolbar: React.CSSProperties = { display: "flex", alignItems: "center", gap: 8, padding: 8, background: "var(--color-bg-02)", borderBottom: "1px solid var(--color-border-light)", borderRadius: "8px 8px 0 0" };
const fmtBtn: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, padding: 6, borderRadius: 8, background: "transparent", border: "none", cursor: "pointer", color: "var(--color-text-tertiary)", fontSize: 16 };
const fmtBtnActive: React.CSSProperties = { ...fmtBtn, background: "var(--color-bg-04)", color: "var(--color-text-primary)" };
const separator: React.CSSProperties = { width: 1, height: 20, background: "var(--color-border-default)", margin: "0 4px" };
const inputBox: React.CSSProperties = { padding: 12, fontSize: 14, lineHeight: "20px", fontFamily: "'Inter', sans-serif", color: "var(--color-text-primary)" };
const bottomToolbar: React.CSSProperties = { display: "flex", alignItems: "center", gap: 12, padding: "6px 12px", borderTop: "1px solid var(--color-border-light)" };
const actionsLeft: React.CSSProperties = { display: "flex", alignItems: "center", gap: 8, flex: 1 };
const actionBtn: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, padding: 6, borderRadius: 8, background: "transparent", border: "none", cursor: "pointer" };
const aaActive: React.CSSProperties = { ...actionBtn, background: "transparent", padding: 4 };
const sendActive: React.CSSProperties = { width: 36, height: 36, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-xs)", background: "var(--color-bg-solid)", color: "var(--color-static-white)" };
const selectionBg: React.CSSProperties = { background: "var(--color-bg-secondary)", borderRadius: 2, padding: "0 1px" };

/* ─── Format Toolbar Icons ─────────────────────────────────────────────────── */

const FmtBold = ({ active }: { active?: boolean }) => <button style={active ? fmtBtnActive : fmtBtn} aria-label="Bold"><span style={{ fontWeight: 700 }}>B</span></button>;
const FmtItalic = ({ active }: { active?: boolean }) => <button style={active ? fmtBtnActive : fmtBtn} aria-label="Italic"><span style={{ fontStyle: "italic" }}>I</span></button>;
const FmtUnderline = ({ active }: { active?: boolean }) => <button style={active ? fmtBtnActive : fmtBtn} aria-label="Underline"><span style={{ textDecoration: "underline" }}>U</span></button>;
const FmtStrikethrough = ({ active }: { active?: boolean }) => <button style={active ? fmtBtnActive : fmtBtn} aria-label="Strikethrough"><span style={{ textDecoration: "line-through" }}>S</span></button>;
const FmtLink = ({ active }: { active?: boolean }) => <button style={active ? fmtBtnActive : fmtBtn} aria-label="Link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 0-10Z" fill="currentColor"/></svg></button>;
const FmtOrderedList = ({ active }: { active?: boolean }) => <button style={active ? fmtBtnActive : fmtBtn} aria-label="Ordered List"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1Zm1-9h1V4H2v1h1v3Zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1Zm5-6v2h14V5H7Zm0 14h14v-2H7v2Zm0-6h14v-2H7v2Z" fill="currentColor"/></svg></button>;
const FmtBulletList = ({ active }: { active?: boolean }) => <button style={active ? fmtBtnActive : fmtBtn} aria-label="Bullet List"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5Zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5ZM7 19h14v-2H7v2Zm0-6h14v-2H7v2Zm0-8v2h14V5H7Z" fill="currentColor"/></svg></button>;
const FmtBlockQuote = ({ active }: { active?: boolean }) => <button style={active ? fmtBtnActive : fmtBtn} aria-label="Block Quote"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 17h3l2-4V7H5v6h3l-2 4Zm8 0h3l2-4V7h-6v6h3l-2 4Z" fill="currentColor"/></svg></button>;
const FmtCode = ({ active }: { active?: boolean }) => <button style={active ? fmtBtnActive : fmtBtn} aria-label="Code"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z" fill="currentColor"/></svg></button>;
const FmtCodeBlock = ({ active }: { active?: boolean }) => <button style={active ? fmtBtnActive : fmtBtn} aria-label="Code Block"><svg width="16" height="16" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M8 7.5 5.5 10 8 12.5M12 7.5l2.5 2.5-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></button>;

function FormatToolbarRow({ active }: { active?: FormattingType }) {
  return (
    <div style={formatToolbar}>
      <FmtBold active={active === "bold"} />
      <FmtItalic active={active === "italic"} />
      <FmtUnderline active={active === "underline"} />
      <FmtStrikethrough active={active === "strikethrough"} />
      <div style={separator} />
      <FmtLink active={active === "link"} />
      <FmtOrderedList active={active === "orderedList"} />
      <FmtBulletList active={active === "bulletList"} />
      <div style={separator} />
      <FmtBlockQuote active={active === "blockQuote"} />
      <FmtCode active={active === "code"} />
      <FmtCodeBlock active={active === "codeBlock"} />
    </div>
  );
}

/* ─── Bottom Toolbar (Aa active) ───────────────────────────────────────────── */

function BottomToolbar() {
  return (
    <div style={bottomToolbar}>
      <div style={actionsLeft}>
        <button style={actionBtn} aria-label="Attach file"><IconAddCircle /></button>
        <button style={actionBtn} aria-label="Voice record"><IconMic /></button>
        <button style={actionBtn} aria-label="Emoji"><IconMood /></button>
        <button style={actionBtn} aria-label="Sticker"><IconSticker /></button>
        <button style={aaActive} aria-label="Formatting">
          <svg width="20" height="20" viewBox="0 0 14.1 9.375" fill="none">
            <path d="M2.1 6.833l-.667 1.854a.83.83 0 0 1-.27.354.74.74 0 0 1-.418.126c-.264 0-.469-.108-.614-.324-.146-.215-.17-.44-.073-.677L2.933.5a.83.83 0 0 1 .282-.365A.74.74 0 0 1 3.642 0h.583c.153 0 .299.045.438.135a.83.83 0 0 1 .291.365l2.875 7.688c.097.236.07.458-.083.666-.153.209-.354.313-.604.313a.74.74 0 0 1-.417-.135.83.83 0 0 1-.271-.365l-.646-1.834H2.1Zm.48-1.333h2.728L3.975 1.708h-.084L2.58 5.5Zm8.228 3.875c-.708 0-1.27-.191-1.687-.573-.417-.382-.625-.885-.625-1.51 0-.611.24-1.115.72-1.51.479-.396 1.093-.594 1.843-.594.32 0 .632.028.938.084.305.055.569.132.791.229v-.25c0-.403-.142-.73-.427-.98-.285-.25-.663-.374-1.135-.374a1.7 1.7 0 0 0-.615.094 1.5 1.5 0 0 0-.552.28c-.181.14-.351.188-.51.147a.56.56 0 0 1-.386-.23.47.47 0 0 1-.146-.395c0-.153.076-.285.229-.396.278-.222.59-.385.938-.49.347-.104.701-.156 1.063-.156.958 0 1.673.226 2.146.677.471.451.708 1.128.708 2.031v3.063a.63.63 0 0 1-.168.458.58.58 0 0 1-.469.187.58.58 0 0 1-.458-.197.63.63 0 0 1-.188-.49v-.104h-.083a1.8 1.8 0 0 1-.792.729c-.333.167-.701.25-1.104.25Zm.25-1.125c.486 0 .9-.167 1.24-.5.34-.333.51-.722.51-1.167a2.2 2.2 0 0 0-.698-.26 3.3 3.3 0 0 0-.802-.094c-.444 0-.791.097-1.041.292-.25.194-.375.451-.375.77 0 .278.111.507.333.688.222.18.5.271.833.271Z" fill="var(--color-text-highlight)"/>
          </svg>
        </button>
        <button style={{ ...actionBtn, padding: 4 }} aria-label="AI features"><IconAI /></button>
      </div>
      <div style={sendActive}><IconSend /></div>
    </div>
  );
}

/* ─── Composer with Formatting ─────────────────────────────────────────────── */

function FormattingComposer({ active, children }: { active: FormattingType; children: React.ReactNode }) {
  return (
    <div style={composerBox}>
      <FormatToolbarRow active={active} />
      <div style={inputBox}>{children}</div>
      <BottomToolbar />
    </div>
  );
}

/* ─── Section Helper ───────────────────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>{title}</div>
      {children}
    </div>
  );
}

/* ─── Stories ──────────────────────────────────────────────────────────────── */

/** Bold formatting — selected text rendered in bold. */
export const Bold: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24 }}>
      <FormattingComposer active="bold">
        Hey! <span style={selectionBg}><strong>Bold</strong></span>
      </FormattingComposer>
    </div>
  ),
};

/** Italic formatting — selected text rendered in italic. */
export const Italic: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24 }}>
      <FormattingComposer active="italic">
        Hey! <span style={selectionBg}><em>Italic</em></span>
      </FormattingComposer>
    </div>
  ),
};

/** Underline formatting — selected text rendered with underline. */
export const Underline: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24 }}>
      <FormattingComposer active="underline">
        Hey! <span style={selectionBg}><span style={{ textDecoration: "underline" }}>Underline</span></span>
      </FormattingComposer>
    </div>
  ),
};

/** Strikethrough formatting — selected text rendered with line-through. */
export const Strikethrough: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24 }}>
      <FormattingComposer active="strikethrough">
        Hey! <span style={selectionBg}><span style={{ textDecoration: "line-through" }}>Strikethrough</span></span>
      </FormattingComposer>
    </div>
  ),
};

/** Link formatting — selected text rendered as a hyperlink. */
export const Link: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24 }}>
      <FormattingComposer active="link">
        Hey! <span style={selectionBg}><span style={{ color: "var(--color-text-highlight)", textDecoration: "underline" }}>Link text</span></span>
      </FormattingComposer>
    </div>
  ),
};

/** Ordered List formatting — numbered list in the composer. */
export const OrderedList: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24 }}>
      <FormattingComposer active="orderedList">
        <div style={{ background: "var(--color-bg-secondary)", borderRadius: 2, padding: "2px 4px", display: "inline-block" }}>
          <div>1. First item</div>
          <div>2. Second item</div>
          <div>3. Third item</div>
        </div>
      </FormattingComposer>
    </div>
  ),
};

/** Bullet-point List formatting — bulleted list in the composer. */
export const BulletPointList: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24 }}>
      <FormattingComposer active="bulletList">
        <div style={{ background: "var(--color-bg-secondary)", borderRadius: 2, padding: "2px 4px", display: "inline-block" }}>
          <div>• First item</div>
          <div>• Second item</div>
          <div>• Third item</div>
        </div>
      </FormattingComposer>
    </div>
  ),
};

/** Block Quote formatting — indented quote in the composer. */
export const BlockQuote: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24 }}>
      <FormattingComposer active="blockQuote">
        Hey! <span style={{ ...selectionBg, borderLeft: "2px solid var(--color-border-primary)", paddingLeft: 4 }}>Block Quote</span>
      </FormattingComposer>
    </div>
  ),
};

/** Code formatting — inline code in the composer. */
export const Code: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24 }}>
      <FormattingComposer active="code">
        Hey! <span style={{ border: "1px solid var(--color-border-default)", borderRadius: 12, padding: "2px 4px", display: "inline-flex" }}><span style={{ background: "var(--color-bg-secondary)", padding: "2px 6px", color: "var(--color-text-highlight)", fontFamily: "monospace" }}>Code</span></span>
      </FormattingComposer>
    </div>
  ),
};

/** Code Block formatting — multi-line code block in the composer. */
export const CodeBlock: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ padding: 24 }}>
      <FormattingComposer active="codeBlock">
        <div style={{ background: "var(--color-bg-03)", borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ background: "var(--color-bg-secondary)", display: "inline", fontFamily: "monospace", fontSize: 13, lineHeight: "22px" }}>
            {"import React from 'react';"}<br/>
            {"function App() {"}<br/>
            {"  return <h1>Hello, World!</h1>;"}<br/>
          </div>
        </div>
      </FormattingComposer>
    </div>
  ),
};

/** All formatting types overview. */
export const AllFormattingTypes: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48, padding: 24 }}>
      <Section title="Bold"><FormattingComposer active="bold">Hey! <span style={selectionBg}><strong>Bold</strong></span></FormattingComposer></Section>
      <Section title="Italic"><FormattingComposer active="italic">Hey! <span style={selectionBg}><em>Italic</em></span></FormattingComposer></Section>
      <Section title="Underline"><FormattingComposer active="underline">Hey! <span style={selectionBg}><span style={{ textDecoration: "underline" }}>Underline</span></span></FormattingComposer></Section>
      <Section title="Strikethrough"><FormattingComposer active="strikethrough">Hey! <span style={selectionBg}><span style={{ textDecoration: "line-through" }}>Strikethrough</span></span></FormattingComposer></Section>
      <Section title="Link"><FormattingComposer active="link">Hey! <span style={selectionBg}><span style={{ color: "var(--color-text-highlight)", textDecoration: "underline" }}>Link text</span></span></FormattingComposer></Section>
      <Section title="Ordered List"><FormattingComposer active="orderedList"><div style={{ background: "var(--color-bg-secondary)", borderRadius: 2, padding: "2px 4px", display: "inline-block" }}><div>1. First item</div><div>2. Second item</div><div>3. Third item</div></div></FormattingComposer></Section>
      <Section title="Bullet-point List"><FormattingComposer active="bulletList"><div style={{ background: "var(--color-bg-secondary)", borderRadius: 2, padding: "2px 4px", display: "inline-block" }}><div>• First item</div><div>• Second item</div><div>• Third item</div></div></FormattingComposer></Section>
      <Section title="Block Quote"><FormattingComposer active="blockQuote">Hey! <span style={{ ...selectionBg, borderLeft: "2px solid var(--color-border-primary)", paddingLeft: 4 }}>Block Quote</span></FormattingComposer></Section>
      <Section title="Code"><FormattingComposer active="code">Hey! <span style={{ border: "1px solid var(--color-border-default)", borderRadius: 12, padding: "2px 4px", display: "inline-flex" }}><span style={{ background: "var(--color-bg-secondary)", padding: "2px 6px", color: "var(--color-text-highlight)", fontFamily: "monospace" }}>Code</span></span></FormattingComposer></Section>
      <Section title="Code Block"><FormattingComposer active="codeBlock"><div style={{ background: "var(--color-bg-03)", borderRadius: 8, padding: "10px 12px" }}><div style={{ background: "var(--color-bg-secondary)", display: "inline", fontFamily: "monospace", fontSize: 13, lineHeight: "22px" }}>{"import React from 'react';"}<br/>{"function App() {"}<br/>{"  return <h1>Hello, World!</h1>;"}</div></div></FormattingComposer></Section>
    </div>
  ),
};

/** HTML + CSS usage reference for the formatting toolbar. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: 32, maxWidth: 1200, margin: "0 auto" }}>
      <Section title="HTML">
        <CodeCard language="HTML" code={`<!-- Composer with formatting toolbar active -->
<div class="composer">
  <div class="composer__format-toolbar">
    <button class="fmt-btn fmt-btn--active" aria-label="Bold">B</button>
    <button class="fmt-btn" aria-label="Italic">I</button>
    <button class="fmt-btn" aria-label="Underline">U</button>
    <button class="fmt-btn" aria-label="Strikethrough">S</button>
    <span class="fmt-separator"></span>
    <button class="fmt-btn" aria-label="Link"><!-- link icon --></button>
    <button class="fmt-btn" aria-label="Ordered List"><!-- ordered list icon --></button>
    <button class="fmt-btn" aria-label="Bullet List"><!-- bullet list icon --></button>
    <span class="fmt-separator"></span>
    <button class="fmt-btn" aria-label="Block Quote"><!-- quote icon --></button>
    <button class="fmt-btn" aria-label="Code"><!-- code icon --></button>
    <button class="fmt-btn" aria-label="Code Block"><!-- code block icon --></button>
  </div>
  <div class="composer__input" contenteditable="true">
    Hey! <strong>Bold</strong>
  </div>
  <div class="composer__toolbar">
    <!-- action buttons with Aa active -->
  </div>
</div>`} />
      </Section>
      <Section title="CSS">
        <CodeCard language="CSS" code={`.composer__format-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: #fafafa;
  border-bottom: 1px solid #f5f5f5;
}
.fmt-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 6px;
  border-radius: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #535862;
  font-size: 16px;
  font-weight: 700;
}
.fmt-btn--active {
  background: #e9eaeb;
  color: #181d27;
}
.fmt-separator {
  width: 1px;
  height: 20px;
  background: #e9eaeb;
  margin: 0 4px;
}

/* Formatted text in input */
.composer__input strong { font-weight: 700; }
.composer__input em { font-style: italic; }
.composer__input .code-inline {
  border: 1px solid #e9eaeb;
  border-radius: 12px;
  padding: 2px 4px;
  color: #6852d6;
  font-family: monospace;
}
.composer__input .code-block {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 10px 12px;
  font-family: monospace;
  font-size: 13px;
}
.composer__input .block-quote {
  border-left: 2px solid #6852d6;
  padding-left: 4px;
}

/* Selection highlight */
.selection { background: #d4c8f5; }

/* Aa button active state */
.action-btn--active {
  background: #e9eaeb;
  border-radius: 8px;
}`} />
      </Section>
      <Section title="Formatting Types">
        <CodeCard language="Text" code={`Formatting Types (10):
─────────────────────
1. Bold          — font-weight: 700
2. Italic        — font-style: italic
3. Underline     — text-decoration: underline
4. Strikethrough — text-decoration: line-through
5. Link          — color: #6852d6, text-decoration: underline
6. Ordered List  — numbered list (1. 2. 3.)
7. Bullet List   — bulleted list (• • •)
8. Block Quote   — border-left: 2px solid #6852d6
9. Code          — inline code pill, color: #6852d6, monospace
10. Code Block   — gray container (#f5f5f5), monospace

States for each (4):
────────────────────
• Default   — toolbar visible, formatting option available
• Selection — text highlighted (#d4c8f5)
• Applied   — formatting applied with selection
• Message   — how it appears in sent chat bubble

Active button style:
────────────────────
• Format toolbar: background #e9eaeb, color #181d27
• Aa button:      background #e9eaeb`} />
      </Section>
    </div>
  ),
};

/* ─── Docs Helper ──────────────────────────────────────────────────────────── */

const CodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--color-border-default)", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
    <div style={{ padding: "8px 12px", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-02)" }}>
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: 14, fontSize: 12, lineHeight: 1.6, color: "var(--color-text-primary)", overflowX: "auto", background: "var(--color-bg-01)" }}>
      <code>{code}</code>
    </pre>
  </div>
);

/** Interactive playground — select a formatting type. */
export const Playground: Story = {
  args: { formatting: "bold" },
  argTypes: { formatting: { control: "select", options: ["bold", "italic", "underline", "strikethrough", "link", "orderedList", "bulletList", "blockQuote", "code", "codeBlock"] } },
  parameters: { layout: "padded", docs: { disable: true } },
  render: function Render(args) {
    const f = (args as Record<string, unknown>).formatting as FormattingType;
    return (
      <div style={{ padding: 24 }}>
        <FormattingComposer active={f}>
          Hey! <span style={selectionBg}><strong>{f}</strong></span>
        </FormattingComposer>
      </div>
    );
  },
};

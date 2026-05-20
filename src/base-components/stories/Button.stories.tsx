import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button.impl";
import type { ButtonVariant, ButtonSize } from "../components/Button/Button.types";

/**
 * The primary interactive element. Triggers actions, submits forms, or
 * navigates within the product.
 *
 * **Hierarchies:** Primary, Secondary, Tertiary, Link color, Link gray,
 * plus destructive variants for each.
 *
 * **Sizes:** sm (36px), md (40px), lg (44px), xl (48px).
 *
 * **States:** Default, Hover, Focused, Disabled, Loading.
 *
 * All colors, spacing, radius, shadows, and typography use foundation
 * design tokens (`var(--color-*)`, `var(--radius-*)`, `var(--shadow-*)`, etc.)
 * so the button stays in sync with the design system automatically.
 */
const meta: Meta<typeof Button> = {
  title: "Base Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "link-color",
        "link-gray",
        "destructive-primary",
        "destructive-secondary",
        "destructive-tertiary",
        "destructive-link",
      ] satisfies ButtonVariant[],
      description: "Visual hierarchy.",
      table: { category: "Appearance" },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"] satisfies ButtonSize[],
      description: "Size preset (height: sm=36, md=40, lg=44, xl=48).",
      table: { category: "Appearance" },
    },
    children: {
      control: "text",
      description: "Button label.",
      table: { category: "Content" },
    },
    loading: {
      control: "boolean",
      description: "Show spinner and disable interaction.",
      table: { category: "State" },
    },
    disabled: {
      control: "boolean",
      description: "Disable the button.",
      table: { category: "State" },
    },
    iconOnly: {
      control: "boolean",
      description: "Render as icon-only (square).",
      table: { category: "Layout" },
    },
    fullWidth: {
      control: "boolean",
      description: "Render as full-width.",
      table: { category: "Layout" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

const StarIcon = () => (
  <span className="icon-outlined" data-icon="outlined" style={{ fontFamily: "Material Symbols Outlined", fontSize: "var(--font-size-5)", fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}>
    star
  </span>
);

const AddIcon = () => (
  <span className="icon-outlined" data-icon="outlined" style={{ fontFamily: "Material Symbols Outlined", fontSize: "var(--font-size-5)", fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}>
    add
  </span>
);

const DeleteIcon = () => (
  <span className="icon-outlined" data-icon="outlined" style={{ fontFamily: "Material Symbols Outlined", fontSize: "var(--font-size-5)", fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}>
    delete
  </span>
);

/** All hierarchy variants at default state. */
export const Hierarchies: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <Section title="Standard">
        <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "center" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="link-color">Link color</Button>
          <Button variant="link-gray">Link gray</Button>
        </div>
      </Section>
      <Section title="Destructive">
        <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "center" }}>
          <Button variant="destructive-primary">Primary</Button>
          <Button variant="destructive-secondary">Secondary</Button>
          <Button variant="destructive-tertiary">Tertiary</Button>
          <Button variant="destructive-link">Link</Button>
        </div>
      </Section>
    </div>
  ),
};

/** All four sizes. */
export const Sizes: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra large</Button>
    </div>
  ),
};

/** Interactive states for Primary. */
export const States: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <Section title="Primary states">
        <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>Loading</Button>
        </div>
      </Section>
      <Section title="Secondary states">
        <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
          <Button variant="secondary">Default</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="secondary" loading>Loading</Button>
        </div>
      </Section>
      <Section title="Destructive states">
        <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
          <Button variant="destructive-primary">Default</Button>
          <Button variant="destructive-primary" disabled>Disabled</Button>
          <Button variant="destructive-primary" loading>Loading</Button>
        </div>
      </Section>
    </div>
  ),
};

/** Buttons with leading and trailing icons. */
export const WithIcons: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <Section title="Icon left">
        <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
          <Button variant="primary" iconLeft={<StarIcon />}>Favorite</Button>
          <Button variant="secondary" iconLeft={<AddIcon />}>Add item</Button>
          <Button variant="destructive-primary" iconLeft={<DeleteIcon />}>Delete</Button>
        </div>
      </Section>
      <Section title="Icon right">
        <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
          <Button variant="primary" iconRight={<StarIcon />}>Favorite</Button>
          <Button variant="secondary" iconRight={<AddIcon />}>Add item</Button>
        </div>
      </Section>
      <Section title="Icon only">
        <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
          <Button variant="primary" size="sm" iconOnly><StarIcon /></Button>
          <Button variant="primary" size="md" iconOnly><StarIcon /></Button>
          <Button variant="primary" size="lg" iconOnly><StarIcon /></Button>
          <Button variant="primary" size="xl" iconOnly><StarIcon /></Button>
          <Button variant="secondary" size="md" iconOnly><AddIcon /></Button>
          <Button variant="destructive-primary" size="md" iconOnly><DeleteIcon /></Button>
        </div>
      </Section>
    </div>
  ),
};

/** Full-width buttons. */
export const FullWidth: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => (
    <div style={{ width: 360, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      <Button variant="primary" fullWidth>Sign in</Button>
      <Button variant="secondary" fullWidth>Create account</Button>
      <Button variant="tertiary" fullWidth>Skip for now</Button>
    </div>
  ),
};

/** All sizes × all hierarchies matrix. */
export const Matrix: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => {
    const variants: ButtonVariant[] = [
      "primary",
      "secondary",
      "tertiary",
      "destructive-primary",
      "destructive-secondary",
    ];
    const sizes: ButtonSize[] = ["sm", "md", "lg", "xl"];

    return (
      <div style={{ overflow: "auto" }}>
        <table style={{ borderCollapse: "separate", borderSpacing: "12px 16px" }}>
          <thead>
            <tr>
              <th style={thStyle} />
              {sizes.map((s) => (
                <th key={s} style={thStyle}>{s}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {variants.map((v) => (
              <tr key={v}>
                <td style={tdStyle}><code style={{ fontSize: "var(--font-size-0)" }}>{v}</code></td>
                {sizes.map((s) => (
                  <td key={s} style={tdStyle}>
                    <Button variant={v} size={s}>Button</Button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

/* ─── Helpers ──────────────────────────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "var(--font-size-1)", fontWeight: "var(--font-weight-semibold)", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>
        {title}
      </div>
      {children}
    </div>
  );
}

const thStyle: React.CSSProperties = {
  fontSize: "var(--font-size-0)",
  fontWeight: "var(--font-weight-semibold)",
  color: "var(--color-neutral-600)",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  textAlign: "left",
  padding: "4px 8px",
};

const tdStyle: React.CSSProperties = {
  padding: "4px 8px",
  verticalAlign: "middle",
};

const CodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div
    style={{
      border: "1px solid var(--color-neutral-200)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      background: "var(--color-neutral-25)",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "var(--space-2) var(--space-3)",
        borderBottom: "1px solid var(--color-neutral-200)",
        background: "var(--color-neutral-50)",
      }}
    >
      <span
        style={{
          fontSize: "var(--font-size-0)",
          fontWeight: "var(--font-weight-semibold)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--color-neutral-600)",
        }}
      >
        {language}
      </span>
    </div>
    <pre
      style={{
        margin: 0,
        padding: "var(--space-3-5)",
        fontFamily: "var(--font-family-body)",
        fontSize: "var(--font-size-1)",
        lineHeight: 1.6,
        color: "var(--color-neutral-800)",
        overflowX: "auto",
      }}
    >
      <code>{code}</code>
    </pre>
  </div>
);

const ClassGroup: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div
    style={{
      padding: "var(--space-3-5) var(--space-4)",
      border: "1px solid var(--color-neutral-200)",
      borderRadius: "var(--radius-xl)",
      background: "var(--color-white)",
    }}
  >
    <div
      style={{
        fontSize: "var(--font-size-0)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-neutral-600)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: "var(--space-2)",
      }}
    >
      {title}
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
      {items.map((item) => (
        <code
          key={item}
          style={{
            fontFamily: "var(--font-family-body)",
            fontSize: "var(--font-size-1)",
            color: "var(--color-neutral-800)",
            background: "var(--color-neutral-50)",
            padding: "var(--space-0-5) var(--space-2)",
            borderRadius: "var(--radius-xs)",
            border: "1px solid var(--color-neutral-200)",
            display: "inline-block",
            width: "fit-content",
          }}
        >
          .{item}
        </code>
      ))}
    </div>
  </div>
);

/** Interactive playground — use the controls panel to configure the Button. */
export const Playground: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Button",
    loading: false,
    disabled: false,
    iconOnly: false,
    fullWidth: false,
  },
  parameters: { docs: { disable: true } },
};

/** Raw HTML + CSS usage with foundation variables. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--space-8)", maxWidth: 1200, margin: "0 auto" }}>
      <Section title="HTML">
        <CodeCard
          language="HTML"
          code={`<!-- Primary button -->
<button class="btn btn--primary btn--md">
  Save changes
</button>

<!-- Secondary button with leading icon -->
<button class="btn btn--secondary btn--md">
  <span class="btn__icon btn__icon--left" aria-hidden="true">
    <span class="icon-outlined">add</span>
  </span>
  <span class="btn__label">Add item</span>
</button>

<!-- Destructive button -->
<button class="btn btn--destructive-primary btn--md">
  <span class="btn__icon btn__icon--left" aria-hidden="true">
    <span class="icon-outlined">delete</span>
  </span>
  <span class="btn__label">Delete</span>
</button>

<!-- Icon-only button -->
<button class="btn btn--primary btn--md btn--icon-only" aria-label="Favorite">
  <span class="icon-outlined">star</span>
</button>

<!-- Full-width button -->
<button class="btn btn--primary btn--lg btn--full">
  Sign in
</button>

<!-- Disabled button -->
<button class="btn btn--primary btn--md" disabled>
  Disabled
</button>

<!-- Loading button -->
<button class="btn btn--primary btn--md" aria-busy="true" disabled>
  <span class="btn__spinner" aria-hidden="true"></span>
</button>`}
        />
      </Section>

      <Section title="CSS (CometChat Tokens)">
        <CodeCard
          language="CSS"
          code={`.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--cometchat-spacing-1);
  border: none;
  border-radius: var(--cometchat-radius-2);
  font-family: var(--cometchat-font-family);
  font-weight: 500;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease,
    border-color 120ms ease, box-shadow 120ms ease;
  white-space: nowrap;
  user-select: none;
  outline: none;
}

.btn:focus-visible {
  box-shadow: var(--focus-ring-xs);
}

/* Sizes */
.btn--sm { height: 36px; padding: var(--cometchat-spacing-2) var(--cometchat-spacing-3); font-size: 14px; line-height: 16.8px; }
.btn--md { height: 40px; padding: 10px 14px; font-size: 14px; line-height: 16.8px; }
.btn--lg { height: 44px; padding: 10px var(--cometchat-spacing-4); font-size: 16px; line-height: 19.2px; }
.btn--xl { height: 48px; padding: var(--cometchat-spacing-3) 18px; font-size: 16px; line-height: 19.2px; }

/* Primary */
.btn--primary { background: var(--cometchat-primary-color); color: var(--color-white); box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05); }
.btn--primary:hover { background: var(--color-ep-700); }
.btn--primary:disabled { background: var(--color-neutral-lm-100); color: var(--color-neutral-lm-400); border: 1px solid var(--color-neutral-lm-200); cursor: not-allowed; }

/* Secondary */
.btn--secondary { background: var(--color-white); color: var(--color-neutral-lm-700); border: 1px solid var(--color-neutral-lm-300); box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05); }
.btn--secondary:hover { background: var(--color-neutral-lm-50); color: var(--color-neutral-lm-800); }

/* Tertiary */
.btn--tertiary { background: transparent; color: var(--color-neutral-lm-600); }
.btn--tertiary:hover { background: var(--color-neutral-lm-50); color: var(--color-neutral-lm-700); }

/* Destructive Primary */
.btn--destructive-primary { background: var(--cometchat-error-color); color: var(--color-white); box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05); }
.btn--destructive-primary:hover { background: var(--color-error-700); }
.btn--destructive-primary:focus-visible { box-shadow: var(--focus-ring-error-xs); }

/* Full width & Icon only */
.btn--full { width: 100%; }
.btn--icon-only { width: 40px; padding: 0; } /* adjust width per size */

/* Loading spinner */
.btn__spinner { width: 16px; height: 16px; border: 2px solid currentColor; border-top-color: transparent; border-radius: 50%; animation: btn-spin 600ms linear infinite; }
@keyframes btn-spin { to { transform: rotate(360deg); } }`}
        />
      </Section>

      <Section title="Available Classes">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-3)" }}>
          <ClassGroup title="Variants" items={[
            "btn--primary", "btn--secondary", "btn--tertiary",
            "btn--link-color", "btn--link-gray",
            "btn--destructive-primary", "btn--destructive-secondary",
            "btn--destructive-tertiary", "btn--destructive-link",
          ]} />
          <ClassGroup title="Sizes" items={["btn--sm", "btn--md", "btn--lg", "btn--xl"]} />
          <ClassGroup title="Modifiers" items={["btn--full", "btn--icon-only"]} />
          <ClassGroup title="Child Elements" items={["btn__label", "btn__icon", "btn__icon--left", "btn__icon--right", "btn__spinner"]} />
        </div>
      </Section>
    </div>
  ),
};

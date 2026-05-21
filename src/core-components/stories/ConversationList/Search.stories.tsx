import type { Meta, StoryObj } from "@storybook/react";
import "../../../base-components/components/SearchBar/SearchBar.css";

const meta: Meta = {
  title: "Core Components/Conversation List/Search",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

/* ═══════════════════════════════════════════════════════════════════════════
   SIMPLE SEARCH (without filters)
   ═══════════════════════════════════════════════════════════════════════════ */

export const SimplePlaceholder: StoryObj = {
  name: "Simple — Placeholder",
  parameters: { docs: { description: { story: "Search bar in idle state with placeholder text." } } },
  render: () => (
    <Wrapper>
      <SearchField state="placeholder" />
    </Wrapper>
  ),
};

export const SimpleDefault: StoryObj = {
  name: "Simple — Default",
  parameters: { docs: { description: { story: "Search bar in default state (unfocused, no text)." } } },
  render: () => (
    <Wrapper>
      <SearchField state="default" />
    </Wrapper>
  ),
};

export const SimpleTyping: StoryObj = {
  name: "Simple — Typing",
  parameters: { docs: { description: { story: "Search bar with partial text input and clear button." } } },
  render: () => (
    <Wrapper>
      <SearchField state="typing" value="S" />
    </Wrapper>
  ),
};

export const SimpleFilled: StoryObj = {
  name: "Simple — Filled",
  parameters: { docs: { description: { story: "Search bar with complete text and clear button." } } },
  render: () => (
    <Wrapper>
      <SearchField state="typing" value="Smart" />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   SEARCH WITH FILTERS
   ═══════════════════════════════════════════════════════════════════════════ */

export const WithFiltersPlaceholder: StoryObj = {
  name: "With Filters — Placeholder",
  parameters: { docs: { description: { story: "Search bar with filter chips in idle state." } } },
  render: () => (
    <Wrapper>
      <SearchField state="placeholder" showFilters />
    </Wrapper>
  ),
};

export const WithFiltersDefault: StoryObj = {
  name: "With Filters — Default",
  parameters: { docs: { description: { story: "Search bar with filter chips in default state." } } },
  render: () => (
    <Wrapper>
      <SearchField state="default" showFilters />
    </Wrapper>
  ),
};

export const WithFiltersTyping: StoryObj = {
  name: "With Filters — Typing",
  parameters: { docs: { description: { story: "Search bar with filter chips and partial text." } } },
  render: () => (
    <Wrapper>
      <SearchField state="typing" value="S" showFilters />
    </Wrapper>
  ),
};

export const WithFiltersFilled: StoryObj = {
  name: "With Filters — Filled",
  parameters: { docs: { description: { story: "Search bar with filter chips and complete text." } } },
  render: () => (
    <Wrapper>
      <SearchField state="typing" value="Smart" showFilters />
    </Wrapper>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllStates: StoryObj = {
  name: "All States",
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--cometchat-spacing-6)", padding: "var(--cometchat-spacing-4)", maxWidth: 900 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)" }}>
        <Label>Simple — Placeholder</Label>
        <SearchField state="placeholder" />
        <Label>Simple — Default</Label>
        <SearchField state="default" />
        <Label>Simple — Typing</Label>
        <SearchField state="typing" value="S" />
        <Label>Simple — Filled</Label>
        <SearchField state="typing" value="Smart" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)" }}>
        <Label>With Filters — Placeholder</Label>
        <SearchField state="placeholder" showFilters />
        <Label>With Filters — Default</Label>
        <SearchField state="default" showFilters />
        <Label>With Filters — Typing</Label>
        <SearchField state="typing" value="S" showFilters />
        <Label>With Filters — Filled</Label>
        <SearchField state="typing" value="Smart" showFilters />
      </div>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   USAGE / DOCS
   ═══════════════════════════════════════════════════════════════════════════ */

export const Usage: StoryObj = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto" }}>
      <UsageSection title="HTML Structure">
        <CodeCard
          language="HTML"
          code={`<!-- Simple Search -->
<div class="search-bar">
  <div class="search-bar__input-wrapper">
    <span class="search-bar__icon"><svg>...</svg></span>
    <input class="search-bar__input" placeholder="Search" />
    <button class="search-bar__clear"><svg>...</svg></button>
  </div>
</div>

<!-- Search with Filter Chips -->
<div class="search-field">
  <div class="search-bar">
    <div class="search-bar__input-wrapper">
      <span class="search-bar__icon"><svg>...</svg></span>
      <input class="search-bar__input" placeholder="Search" />
      <button class="search-bar__clear"><svg>...</svg></button>
    </div>
  </div>
  <div class="search-field__filters">
    <button class="search-field__chip search-field__chip--active">All</button>
    <button class="search-field__chip">Unread</button>
    <button class="search-field__chip">Groups</button>
    <button class="search-field__chip">Photos</button>
    <button class="search-field__chip">Videos</button>
    <button class="search-field__chip">Audio</button>
    <button class="search-field__chip">Documents</button>
    <button class="search-field__chip">Gifs</button>
    <button class="search-field__chip">Links</button>
  </div>
</div>`}
        />
      </UsageSection>

      <UsageSection title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Simple — Placeholder" description="Idle state with 'Search' placeholder text and search icon." />
          <StateCard title="Simple — Default" description="Unfocused state, visually same as placeholder." />
          <StateCard title="Simple — Typing" description="User is typing, clear (×) button appears on the right." />
          <StateCard title="Simple — Filled" description="Complete search term entered with clear button visible." />
          <StateCard title="With Filters — All States" description="Same search states but with filter chips below. 'All' chip is active (purple) by default." />
        </div>
      </UsageSection>

      <UsageSection title="Anatomy">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Search Icon" description="Leading search (magnifying glass) icon in secondary color." />
          <StateCard title="Input Field" description="Text input with placeholder. 16px font, full width." />
          <StateCard title="Clear Button" description="× icon that appears when text is entered. Clears the input on click." />
          <StateCard title="Filter Chips" description="Horizontal row of selectable chips. Active chip has purple background with white text." />
        </div>
      </UsageSection>

      <UsageSection title="Design Tokens">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--cometchat-spacing-3)" }}>
          <StateCard title="Background" description="var(--cometchat-background-color-04) — Light gray" />
          <StateCard title="Border" description="var(--cometchat-border-color-default) — Default border" />
          <StateCard title="Border Radius" description="var(--cometchat-radius-max) — Pill shape" />
          <StateCard title="Icon Color" description="var(--cometchat-icon-color-secondary) — Medium gray" />
          <StateCard title="Placeholder" description="var(--cometchat-text-color-placeholder) — Muted" />
          <StateCard title="Active Chip BG" description="var(--cometchat-primary-color) — Purple" />
          <StateCard title="Chip Border" description="var(--cometchat-border-color-dark) — Darker gray" />
        </div>
      </UsageSection>

      <UsageSection title="Figma Reference">
        <StateCard title="Source File" description="Design System — Web Chat UI Kits → Search Field (node 17588:77085)" />
      </UsageSection>
    </div>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

type SearchState = "placeholder" | "default" | "focus" | "typing";

const FILTERS = ["All", "Unread", "Groups", "Photos", "Videos", "Audio", "Documents", "Gifs", "Links"];

function SearchField({ state, value = "", showFilters }: { state: SearchState; value?: string; showFilters?: boolean }) {
  const isFocus = state === "focus";
  const isTyping = state === "typing";
  const hasValue = isTyping && value.length > 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)", width: "100%" }}>
      {/* Search bar — using base component CSS classes */}
      <div className="search-bar">
        <div className="search-bar__input-wrapper">
          <span className="search-bar__icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="currentColor"/>
            </svg>
          </span>
          <input
            className="search-bar__input"
            type="text"
            placeholder="Search"
            value={hasValue ? value : ""}
            readOnly
          />
          {hasValue && (
            <button type="button" className="search-bar__clear" aria-label="Clear search">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L6 6M6 6L11 1M6 6L1 1M6 6L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Filter chips */}
      {showFilters && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--cometchat-spacing-1-5)" }}>
          {FILTERS.map((filter, i) => (
            <button
              key={filter}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 28,
                padding: "0 10px",
                borderRadius: "var(--cometchat-radius-1-5)",
                border: i === 0 ? "1px solid var(--cometchat-primary-color)" : "1px solid var(--cometchat-border-color-dark)",
                background: i === 0 ? "var(--cometchat-primary-color)" : "var(--cometchat-background-color-01)",
                color: i === 0 ? "var(--cometchat-static-white)" : "var(--cometchat-text-color-primary)",
                fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
                fontSize: 12,
                fontWeight: 500,
                lineHeight: "16px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Wrapper({ children, width = 380 }: { children: React.ReactNode; width?: number }) {
  return (
    <div style={{ width, display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-4)", padding: "var(--cometchat-spacing-4)", background: "var(--color-bg-01)", borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-default)" }}>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: "10px", fontWeight: "600", color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
      {children}
    </span>
  );
}

function UsageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--cometchat-spacing-6)" }}>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-text-color-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)", paddingBottom: "var(--cometchat-spacing-2)", borderBottom: "1px solid var(--cometchat-border-color-default)" }}>{title}</div>
      {children}
    </div>
  );
}

function CodeCard({ language, code }: { language: string; code: string }) {
  return (
    <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-02)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--color-bg-03)" }}>
        <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-secondary)" }}>{language}</span>
      </div>
      <pre style={{ margin: 0, padding: "var(--cometchat-spacing-3-5)", fontFamily: "var(--cometchat-font-family)", fontSize: "12px", lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function StateCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ padding: "var(--cometchat-spacing-3-5) var(--cometchat-spacing-4)", border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", background: "var(--color-bg-01)" }}>
      <strong style={{ fontSize: "14px", fontWeight: "600", color: "var(--cometchat-text-color-primary)", display: "block", marginBottom: "var(--cometchat-spacing-1)" }}>{title}</strong>
      <span style={{ fontSize: "12px", color: "var(--cometchat-text-color-tertiary)", lineHeight: "14.4px" }}>{description}</span>
    </div>
  );
}

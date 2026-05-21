import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { UserItem, UserItemDivider, UserItemSkeleton } from "../../components/ListItem";
import { avatarRegistry } from "../../../cometchat-foundation/tokens/avatars";

const female = avatarRegistry["Female Avatar"];
const male = avatarRegistry["Male Avatar"];

/**
 * Users List — a full-screen list view composing Header, SearchBar, and UserItem
 * with alphabet section dividers. Used as the "Users" tab in the conversation list.
 *
 * **Composed from:**
 * - Header (title: "Users")
 * - SearchBar (placeholder: "Search users")
 * - UserItemDivider (alphabet letters)
 * - UserItem (user rows)
 */
const meta: Meta = {
  title: "Core Components/Conversation List/Users List",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

const container = (children: React.ReactNode) => (
  <div
    style={{
      width: 400,
      height: 700,
      display: "flex",
      flexDirection: "column",
      background: "var(--cometchat-background-color-01)",
      border: "1px solid var(--cometchat-border-color-default)",
      overflow: "hidden",
    }}
  >
    {children}
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   DEFAULT STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Default: Story = {
  render: () =>
    container(
      <>
        <Header title="Users" actions={[]} showMore={false} />
        <div style={{ padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)" }}>
          <SearchBar placeholder="Search users" />
        </div>
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          <UserItemDivider label="A" />
          <UserItem avatarUrl={male[6].imageUrl} title="Alex Mason" />
          <UserItem avatarUrl={male[6].imageUrl} title="Andrew Joseph" />
          <UserItem avatarUrl={female[2].imageUrl} title="Avery Quinn" />

          <UserItemDivider label="B" />
          <UserItem avatarUrl={male[1].imageUrl} title="Brian Michael" />

          <UserItemDivider label="C" />
          <UserItem avatarUrl={male[2].imageUrl} title="Chris Nolan" />
          <UserItem avatarUrl={female[0].imageUrl} title="Camilla Juliette" />

          <UserItemDivider label="D" />
          <UserItem avatarUrl={male[4].imageUrl} title="David Miller" />

          <UserItemDivider label="E" />
          <UserItem avatarUrl={female[1].imageUrl} title="Emma Rose" />
          <UserItem avatarUrl={male[3].imageUrl} title="Evan Parker" />
        </div>
      </>
    ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   SKELETON (LOADING)
   ═══════════════════════════════════════════════════════════════════════════ */

export const Skeleton: Story = {
  render: () =>
    container(
      <>
        <Header title="Users" actions={[]} showMore={false} />
        <div style={{ padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)" }}>
          <SearchBar placeholder="Search users" />
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <UserItemSkeleton tone="start" />
          <UserItemSkeleton tone="end" />
          <UserItemSkeleton tone="start" />
          <UserItemSkeleton tone="end" />
          <UserItemSkeleton tone="start" />
          <UserItemSkeleton tone="end" />
          <UserItemSkeleton tone="start" />
          <UserItemSkeleton tone="end" />
        </div>
      </>
    ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   SEARCH ACTIVE
   ═══════════════════════════════════════════════════════════════════════════ */

export const SearchActive: Story = {
  name: "Search Active",
  render: () =>
    container(
      <>
        <Header title="Users" actions={[]} showMore={false} />
        <div style={{ padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)" }}>
          <SearchBar placeholder="Search users" value="S" showClear />
        </div>
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          <UserItem avatarUrl={male[6].imageUrl} title="Alex Mason" />
          <UserItem avatarUrl={male[6].imageUrl} title="Andrew Joseph" />
          <UserItem avatarUrl={female[2].imageUrl} title="Avery Quinn" />
          <UserItem avatarUrl={male[1].imageUrl} title="Brian Michael" />
          <UserItem avatarUrl={male[2].imageUrl} title="Chris Nolan" />
          <UserItem avatarUrl={female[0].imageUrl} title="Camilla Juliette" />
          <UserItem avatarUrl={male[4].imageUrl} title="David Miller" />
          <UserItem avatarUrl={female[1].imageUrl} title="Emma Rose" />
          <UserItem avatarUrl={male[3].imageUrl} title="Evan Parker" />
        </div>
      </>
    ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   EMPTY STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Empty: Story = {
  render: () =>
    container(
      <>
        <Header title="Users" actions={[]} showMore={false} />
        <div style={{ padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)" }}>
          <SearchBar placeholder="Search users" />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--cometchat-spacing-4)",
            padding: "var(--cometchat-spacing-8)",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "var(--cometchat-radius-3)",
              border: "1px solid var(--cometchat-border-color-default)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              className="icon-outlined"
              style={{ fontSize: 32, color: "var(--cometchat-text-color-primary)" }}
            >
              person
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-2)" }}>
            <div
              style={{
                fontFamily: "var(--cometchat-font-family)",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "19.2px",
                color: "var(--cometchat-text-color-primary)",
                textAlign: "center",
              }}
            >
              No users yet
            </div>
            <div
              style={{
                fontFamily: "var(--cometchat-font-family)",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "16.8px",
                color: "var(--cometchat-text-color-tertiary)",
                textAlign: "center",
                maxWidth: 280,
              }}
            >
              Users will appear here once they join your workspace or organization.
            </div>
          </div>
        </div>
      </>
    ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ERROR STATE
   ═══════════════════════════════════════════════════════════════════════════ */

export const Error: Story = {
  render: () =>
    container(
      <>
        <Header title="Users" actions={[]} showMore={false} />
        <div style={{ padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)" }}>
          <SearchBar placeholder="Search users" />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--cometchat-spacing-4)",
            padding: "var(--cometchat-spacing-8)",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "var(--cometchat-radius-3)",
              border: "1px solid var(--cometchat-border-color-default)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              className="icon-outlined"
              style={{ fontSize: 32, color: "var(--cometchat-text-color-primary)" }}
            >
              error_outline
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-2)" }}>
            <div
              style={{
                fontFamily: "var(--cometchat-font-family)",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "19.2px",
                color: "var(--cometchat-text-color-primary)",
                textAlign: "center",
              }}
            >
              Unable to load users
            </div>
            <div
              style={{
                fontFamily: "var(--cometchat-font-family)",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "16.8px",
                color: "var(--cometchat-text-color-tertiary)",
                textAlign: "center",
                maxWidth: 280,
              }}
            >
              Something went wrong while loading the user list. Please try again.
            </div>
          </div>
          <button
            className="users-list__retry-btn"
            style={{
              padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-6)",
              background: "var(--cometchat-primary-color)",
              color: "var(--cometchat-static-white)",
              border: "none",
              borderRadius: "var(--cometchat-radius-2)",
              fontFamily: "var(--cometchat-font-family)",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "16.8px",
              cursor: "pointer",
              height: 40,
              transition: "background 120ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cometchat-extended-primary-color-900)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--cometchat-primary-color)")}
          >
            Retry
          </button>
        </div>
      </>
    ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   ALL STATES
   ═══════════════════════════════════════════════════════════════════════════ */

export const AllStates: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "var(--cometchat-spacing-6)",
        padding: "var(--cometchat-spacing-8)",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <div style={{ fontSize: "12px", fontWeight: "500", color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Default</div>
        {container(
          <>
            <Header title="Users" actions={[]} showMore={false} />
            <div style={{ padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)" }}>
              <SearchBar placeholder="Search users" />
            </div>
            <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none" }}>
              <UserItemDivider label="A" />
              <UserItem avatarUrl={male[6].imageUrl} title="Alex Mason" />
              <UserItem avatarUrl={male[6].imageUrl} title="Andrew Joseph" />
              <UserItem avatarUrl={female[2].imageUrl} title="Avery Quinn" />
              <UserItemDivider label="B" />
              <UserItem avatarUrl={male[1].imageUrl} title="Brian Michael" />
              <UserItemDivider label="C" />
              <UserItem avatarUrl={male[2].imageUrl} title="Chris Nolan" />
              <UserItem avatarUrl={female[0].imageUrl} title="Camilla Juliette" />
            </div>
          </>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <div style={{ fontSize: "12px", fontWeight: "500", color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Skeleton</div>
        {container(
          <>
            <Header title="Users" actions={[]} showMore={false} />
            <div style={{ padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)" }}>
              <SearchBar placeholder="Search users" />
            </div>
            <div style={{ flex: 1, overflowY: "auto" }}>
              <UserItemSkeleton tone="start" />
              <UserItemSkeleton tone="end" />
              <UserItemSkeleton tone="start" />
              <UserItemSkeleton tone="end" />
              <UserItemSkeleton tone="start" />
              <UserItemSkeleton tone="end" />
            </div>
          </>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <div style={{ fontSize: "12px", fontWeight: "500", color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Search Active</div>
        {container(
          <>
            <Header title="Users" actions={[]} showMore={false} />
            <div style={{ padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)" }}>
              <SearchBar placeholder="Search users" value="S" showClear />
            </div>
            <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none" }}>
              <UserItem avatarUrl={male[6].imageUrl} title="Alex Mason" />
              <UserItem avatarUrl={male[6].imageUrl} title="Andrew Joseph" />
              <UserItem avatarUrl={female[2].imageUrl} title="Avery Quinn" />
              <UserItem avatarUrl={male[1].imageUrl} title="Brian Michael" />
              <UserItem avatarUrl={male[2].imageUrl} title="Chris Nolan" />
              <UserItem avatarUrl={female[0].imageUrl} title="Camilla Juliette" />
              <UserItem avatarUrl={male[4].imageUrl} title="David Miller" />
              <UserItem avatarUrl={female[1].imageUrl} title="Emma Rose" />
            </div>
          </>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <div style={{ fontSize: "12px", fontWeight: "500", color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Empty</div>
        {container(
          <>
            <Header title="Users" actions={[]} showMore={false} />
            <div style={{ padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)" }}>
              <SearchBar placeholder="Search users" />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--cometchat-spacing-4)", padding: "var(--cometchat-spacing-8)" }}>
              <div style={{ width: 64, height: 64, borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-default)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="icon-outlined" style={{ fontSize: 32, color: "var(--cometchat-text-color-primary)" }}>person</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-2)" }}>
                <div style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "16px", fontWeight: "700", color: "var(--cometchat-text-color-primary)", textAlign: "center" }}>No users yet</div>
                <div style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "14px", color: "var(--cometchat-text-color-tertiary)", textAlign: "center", maxWidth: 280 }}>Users will appear here once they join your workspace or organization.</div>
              </div>
            </div>
          </>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-2)" }}>
        <div style={{ fontSize: "12px", fontWeight: "500", color: "var(--cometchat-text-color-tertiary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Error</div>
        {container(
          <>
            <Header title="Users" actions={[]} showMore={false} />
            <div style={{ padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-4)" }}>
              <SearchBar placeholder="Search users" />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--cometchat-spacing-4)", padding: "var(--cometchat-spacing-8)" }}>
              <div style={{ width: 64, height: 64, borderRadius: "var(--cometchat-radius-3)", border: "1px solid var(--cometchat-border-color-default)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="icon-outlined" style={{ fontSize: 32, color: "var(--cometchat-text-color-primary)" }}>error_outline</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-2)" }}>
                <div style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "16px", fontWeight: "700", color: "var(--cometchat-text-color-primary)", textAlign: "center" }}>Unable to load users</div>
                <div style={{ fontFamily: "var(--cometchat-font-family)", fontSize: "14px", color: "var(--cometchat-text-color-tertiary)", textAlign: "center", maxWidth: 280 }}>Something went wrong while loading the user list. Please try again.</div>
              </div>
              <button
                style={{ padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-6)", background: "var(--cometchat-primary-color)", color: "var(--cometchat-static-white)", border: "none", borderRadius: "var(--cometchat-radius-2)", fontFamily: "var(--cometchat-font-family)", fontSize: "14px", fontWeight: "500", cursor: "pointer", height: 40, transition: "background 120ms ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cometchat-extended-primary-color-900)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--cometchat-primary-color)")}
              >
                Retry
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  ),
};

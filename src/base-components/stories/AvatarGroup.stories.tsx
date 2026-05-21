import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarLabelGroup } from "../components/AvatarGroup/AvatarGroup.impl";
import type { AvatarSize } from "../components/AvatarGroup/AvatarGroup.types";
import { avatarRegistry } from "../../cometchat-foundation/tokens/avatars";

const maleAvatars = avatarRegistry["Male Avatar"];

/**
 * Avatar system — individual avatars, grouped stacks, and labeled profiles.
 *
 * **Components:** Avatar, Avatar Group, Avatar Label Group.
 *
 * **Sizes:** xs (24), sm (32), md (40), lg (48), xl (56), 2xl (64).
 *
 * **Status icons:** Online indicator, Offline, Verified tick, Company icon.
 *
 * **Features:** Fallback initials, icon placeholder, add button, overflow counter.
 *
 * Uses foundation tokens and Avatars from the foundation tab.
 */
const meta: Meta = {
  title: "Base Components/Avatar Group",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] satisfies AvatarSize[], table: { category: "Appearance" } },
    statusIcon: { control: "select", options: ["none", "online", "offline", "verified"], table: { category: "Appearance" } },
  },
};
export default meta;

type Story = StoryObj;

/** Avatar online indicator — all sizes. */
export const OnlineIndicator: Story = {
  name: "Online Indicator",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <Section title="Online (all sizes)">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-4)", alignItems: "center" }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map((sz) => (
            <div key={sz} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-1-5)" }}>
              <OnlineDot size={sz} online={true} />
              <span style={{ fontSize: "10px", color: "var(--cometchat-neutral-color-600)", fontFamily: "var(--cometchat-font-family)" }}>{sz}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  ),
};

/** Avatar group icons — Private, Protected types at all sizes. */
export const GroupIcons: Story = {
  name: "Group Icons",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <Section title="Private (all sizes)">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-3)", alignItems: "center" }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map((sz) => (
            <div key={sz} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-1-5)" }}>
              <CompanyBadge size={sz} type="private" />
              <span style={{ fontSize: "10px", color: "var(--cometchat-neutral-color-600)", fontFamily: "var(--cometchat-font-family)" }}>{sz}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Protected (all sizes)">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-3)", alignItems: "center" }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map((sz) => (
            <div key={sz} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--cometchat-spacing-1-5)" }}>
              <CompanyBadge size={sz} type="protected" />
              <span style={{ fontSize: "10px", color: "var(--cometchat-neutral-color-600)", fontFamily: "var(--cometchat-font-family)" }}>{sz}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  ),
};

/** Avatar variants — different content types and fallback behaviors. */
export const AvatarVariants: Story = {
  name: "Avatar Variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <Section title="With Image">
        <Avatar src={maleAvatars[0].imageUrl} size="lg" />
      </Section>
      <Section title="Initials — Multi-Word Name (JD)">
        <Avatar size="lg" fallback="JD" name="John Doe" />
      </Section>
      <Section title="Initials — Single-Word Name (AL)">
        <Avatar size="lg" fallback="AL" name="Alice" />
      </Section>
      <Section title="Broken Image URL (Fallback to EU)">
        <Avatar src="https://broken-url.invalid/avatar.png" size="lg" fallback="EU" name="Example User" />
      </Section>
      <Section title="Empty Name (No Initials)">
        <Avatar size="lg" />
      </Section>
    </div>
  ),
};

/** Avatar — all sizes with image, all status icon variants. Matches Figma node 17282-60230. */
export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-8)" }}>
      <Section title="With image — no status icon">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-4)", alignItems: "center" }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map((sz) => (
            <Avatar key={sz} src={maleAvatars[0].imageUrl} size={sz} />
          ))}
        </div>
      </Section>
      <Section title="With image — online indicator">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-4)", alignItems: "center" }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map((sz) => (
            <Avatar key={sz} src={maleAvatars[0].imageUrl} size={sz} statusIcon="online" />
          ))}
        </div>
      </Section>
      <Section title="Text (initials) — no status">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-4)", alignItems: "center" }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map((sz) => (
            <Avatar key={sz} size={sz} fallback="OR" />
          ))}
        </div>
      </Section>
      <Section title="Text (initials) — online indicator">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-4)", alignItems: "center" }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map((sz) => (
            <Avatar key={sz} size={sz} fallback="OR" statusIcon="online" />
          ))}
        </div>
      </Section>
      <Section title="Broken image URL (fallback to initials)">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-4)", alignItems: "center" }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map((sz) => (
            <Avatar key={sz} size={sz} src="https://broken-url.invalid/avatar.png" fallback="EU" name="Example User" />
          ))}
        </div>
      </Section>
      <Section title="Empty name — no status">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-4)", alignItems: "center" }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map((sz) => (
            <Avatar key={sz} size={sz} />
          ))}
        </div>
      </Section>
      <Section title="Empty name — online indicator">
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-4)", alignItems: "center" }}>
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map((sz) => (
            <Avatar key={sz} size={sz} statusIcon="online" />
          ))}
        </div>
      </Section>
    </div>
  ),
};

/** Avatar label group — all sizes × all status icons. Matches Figma node 17282-60149. */
export const LabelGroup: Story = {
  name: "Avatar Label Group",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--cometchat-spacing-6)" }}>
      <Section title="Small — no status">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="sm" name="Olivia Rhye" supportingText="olivia@untitledui.com" />
      </Section>
      <Section title="Small — online">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="sm" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="online" />
      </Section>
      <Section title="Medium — no status">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="md" name="Olivia Rhye" supportingText="olivia@untitledui.com" />
      </Section>
      <Section title="Medium — online">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="md" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="online" />
      </Section>
      <Section title="Large — no status">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="lg" name="Olivia Rhye" supportingText="olivia@untitledui.com" />
      </Section>
      <Section title="Large — online">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="lg" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="online" />
      </Section>
      <Section title="XL — no status">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="xl" name="Olivia Rhye" supportingText="olivia@untitledui.com" />
      </Section>
      <Section title="XL — online">
        <AvatarLabelGroup src={maleAvatars[0].imageUrl} size="xl" name="Olivia Rhye" supportingText="olivia@untitledui.com" statusIcon="online" />
      </Section>
    </div>
  ),
};

/** Group avatar label group — all sizes × group types (Public, Private, Protected). */
export const GroupLabelGroup: Story = {
  name: "Group Avatar Label Group",
  parameters: { controls: { disable: true } },
  render: () => {
    const groupAvatars = avatarRegistry["Group Avatar"];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
        <Section title="Small — Public">
          <GroupAvatarLabel src={groupAvatars[5].imageUrl} size="sm" name="Epic Game" supportingText="248 Members" groupType="public" />
        </Section>
        <Section title="Small — Private">
          <GroupAvatarLabel src={groupAvatars[1].imageUrl} size="sm" name="Bright Mind" supportingText="12 Members" groupType="private" />
        </Section>
        <Section title="Small — Protected">
          <GroupAvatarLabel src={groupAvatars[8].imageUrl} size="sm" name="Innovative Online Shopping" supportingText="56 Members" groupType="protected" />
        </Section>
        <Section title="Medium — Public">
          <GroupAvatarLabel src={groupAvatars[5].imageUrl} size="md" name="Epic Game" supportingText="248 Members" groupType="public" />
        </Section>
        <Section title="Medium — Private">
          <GroupAvatarLabel src={groupAvatars[1].imageUrl} size="md" name="Bright Mind" supportingText="12 Members" groupType="private" />
        </Section>
        <Section title="Medium — Protected">
          <GroupAvatarLabel src={groupAvatars[8].imageUrl} size="md" name="Innovative Online Shopping" supportingText="56 Members" groupType="protected" />
        </Section>
        <Section title="Large — Public">
          <GroupAvatarLabel src={groupAvatars[5].imageUrl} size="lg" name="Epic Game" supportingText="248 Members" groupType="public" />
        </Section>
        <Section title="Large — Private">
          <GroupAvatarLabel src={groupAvatars[1].imageUrl} size="lg" name="Bright Mind" supportingText="12 Members" groupType="private" />
        </Section>
        <Section title="Large — Protected">
          <GroupAvatarLabel src={groupAvatars[8].imageUrl} size="lg" name="Innovative Online Shopping" supportingText="56 Members" groupType="protected" />
        </Section>
        <Section title="XL — Public">
          <GroupAvatarLabel src={groupAvatars[5].imageUrl} size="xl" name="Epic Game" supportingText="248 Members" groupType="public" />
        </Section>
        <Section title="XL — Private">
          <GroupAvatarLabel src={groupAvatars[1].imageUrl} size="xl" name="Bright Mind" supportingText="12 Members" groupType="private" />
        </Section>
        <Section title="XL — Protected">
          <GroupAvatarLabel src={groupAvatars[8].imageUrl} size="xl" name="Innovative Online Shopping" supportingText="56 Members" groupType="protected" />
        </Section>
      </div>
    );
  },
};

/* ─── Helpers ──────────────────────────────────────────────────────────────── */

const CodeCard: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div style={{ border: "1px solid var(--cometchat-border-color-default)", borderRadius: "var(--cometchat-radius-3)", overflow: "hidden", background: "var(--cometchat-background-color-01)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)", borderBottom: "1px solid var(--cometchat-border-color-default)", background: "var(--cometchat-background-color-02)" }}>
      <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cometchat-text-color-tertiary)" }}>{language}</span>
    </div>
    <pre style={{ margin: 0, padding: "var(--cometchat-spacing-3-5)", fontFamily: "var(--cometchat-font-family)", fontSize: "12px", lineHeight: 1.6, color: "var(--cometchat-text-color-primary)", overflowX: "auto" }}>
      <code>{code}</code>
    </pre>
  </div>
);

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "12px", fontWeight: "600", color: "var(--cometchat-neutral-color-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--cometchat-spacing-2)" }}>{title}</div>
      {children}
    </div>
  );
}

/* Sub-component renders for the dedicated stories */

const indicatorSizeMap: Record<string, number> = { xs: 6, sm: 8, md: 10, lg: 12, xl: 14, "2xl": 16 };

function OnlineDot({ size, online }: { size: AvatarSize; online: boolean }) {
  const px = indicatorSizeMap[size] ?? 10;
  return (
    <div style={{ width: px, height: px, borderRadius: "50%", background: online ? "var(--cometchat-success-color)" : "var(--cometchat-neutral-color-300)", border: "1.5px solid var(--cometchat-static-white)", boxSizing: "content-box" }} />
  );
}

const companySizeMap: Record<string, number> = { xs: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 };

const companyLogos = avatarRegistry["Avatar company logo"];

function CompanyBadge({ size, type }: { size: AvatarSize; type: "company" | "private" | "protected" }) {
  const px = companySizeMap[size] ?? 14;

  if (type === "private") {
    return (
      <svg width={px} height={px} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.5" cy="8.5" r="7.9" fill="#079455" stroke="white" strokeWidth="1.17" />
        <path d="M6.03 12.62c-.22 0-.4-.08-.55-.23a.75.75 0 0 1-.23-.55V7.77c0-.22.08-.4.23-.55a.75.75 0 0 1 .55-.24h.52V6.11c0-.54.19-1 .57-1.38.38-.38.84-.57 1.38-.57.54 0 1 .19 1.38.57.38.38.57.84.57 1.38v.87h.52c.22 0 .4.08.55.23.15.15.23.34.23.55v4.07c0 .22-.08.4-.23.55a.75.75 0 0 1-.55.23H6.03zM8.5 10.56c.21 0 .39-.07.54-.22.15-.15.22-.33.22-.54 0-.21-.07-.39-.22-.54a.73.73 0 0 0-.54-.22.73.73 0 0 0-.54.22.73.73 0 0 0-.22.54c0 .21.07.39.22.54.15.15.33.22.54.22zM7.2 6.98h2.6V6.11c0-.36-.13-.67-.38-.92a1.25 1.25 0 0 0-.92-.38c-.36 0-.67.13-.92.38-.25.25-.38.56-.38.92v.87z" fill="white" />
      </svg>
    );
  }

  if (type === "protected") {
    return (
      <svg width={px} height={px} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.5" cy="8.5" r="7.9" fill="#DC6803" stroke="white" strokeWidth="1.17" />
        <path d="M8.5 12.56c-.05 0-.09 0-.13-.01a.6.6 0 0 1-.13-.03c-.91-.33-1.64-.9-2.18-1.73-.54-.83-.81-1.72-.81-2.68V6.16c0-.16.05-.31.14-.44a.7.7 0 0 1 .37-.29l2.47-.92a.8.8 0 0 1 .27-.05c.09 0 .18.02.27.05l2.47.92c.15.06.27.16.37.29.1.13.14.28.14.44v1.95c0 .96-.27 1.85-.81 2.68-.54.83-1.27 1.4-2.18 1.73a.6.6 0 0 1-.13.03c-.04.01-.09.01-.13.01z" fill="white" />
      </svg>
    );
  }

  // Company type — circular company logo image (from foundation avatars)
  // Uses the actual company logo from the foundation avatar registry
  const logoUrl = companyLogos[0]?.imageUrl;
  return (
    <div style={{
      width: px,
      height: px,
      borderRadius: "50%",
      overflow: "hidden",
      border: "1.5px solid white",
      boxSizing: "content-box",
      flexShrink: 0,
    }}>
      <img
        src={logoUrl}
        alt="Company"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}

/** HTML & CSS usage reference for the Avatar Group component. */
export const Usage: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <div style={{ padding: "var(--cometchat-spacing-8)", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--cometchat-spacing-6)" }}>
      <Section title="HTML">
        <CodeCard language="HTML" code={`<!-- Single Avatar with image -->
<div class="avatar avatar--lg">
  <div class="avatar__img-wrap">
    <img class="avatar__img" src="avatar.jpg" alt="User" />
  </div>
  <span class="avatar__status avatar__status--online"></span>
</div>

<!-- Avatar with initials fallback -->
<div class="avatar avatar--md">
  <div class="avatar__fallback-wrap">
    <span class="avatar__fallback">JD</span>
  </div>
</div>

<!-- Avatar Group (stacked) -->
<div class="avatar-group avatar-group--md">
  <div class="avatar avatar--md">
    <div class="avatar__img-wrap"><img class="avatar__img" src="a1.jpg" alt="" /></div>
  </div>
  <div class="avatar avatar--md">
    <div class="avatar__img-wrap"><img class="avatar__img" src="a2.jpg" alt="" /></div>
  </div>
  <div class="avatar-group__counter">+3</div>
  <button class="avatar-group__add" type="button">+</button>
</div>

<!-- Avatar Label Group -->
<div class="avatar-label-group avatar-label-group--md">
  <div class="avatar avatar--md">
    <div class="avatar__img-wrap"><img class="avatar__img" src="avatar.jpg" alt="" /></div>
  </div>
  <div class="avatar-label-group__text">
    <span class="avatar-label-group__name">Olivia Rhye</span>
    <span class="avatar-label-group__supporting">olivia@email.com</span>
  </div>
</div>`} />
      </Section>
      <Section title="CSS (CometChat Tokens)">
        <CodeCard language="CSS" code={`.avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--cometchat-radius-max);
  overflow: visible;
}

.avatar--xs { width: 24px; height: 24px; }
.avatar--sm { width: 32px; height: 32px; }
.avatar--md { width: 40px; height: 40px; }
.avatar--lg { width: 48px; height: 48px; }
.avatar--xl { width: 56px; height: 56px; }
.avatar--2xl { width: 64px; height: 64px; }

.avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--cometchat-radius-max);
}

.avatar__fallback-wrap {
  width: 100%;
  height: 100%;
  border-radius: var(--cometchat-radius-max);
  background: var(--cometchat-extended-primary-color-300);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar__fallback {
  font-family: var(--cometchat-font-family);
  font-weight: 500;
  color: var(--cometchat-static-white);
  text-transform: uppercase;
}

.avatar__status {
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: var(--cometchat-radius-max);
  border: 1.5px solid var(--cometchat-static-white);
}

.avatar__status--online { background: var(--cometchat-success-color); }
.avatar__status--offline { background: var(--cometchat-neutral-color-400); }

.avatar-group {
  display: inline-flex;
  align-items: center;
}

.avatar-group .avatar {
  border: 2px solid var(--cometchat-static-white);
  margin-left: -8px;
}

.avatar-label-group {
  display: inline-flex;
  align-items: center;
  gap: var(--cometchat-spacing-3);
}

.avatar-label-group__name {
  font-weight: 500;
  color: var(--cometchat-neutral-color-900);
}

.avatar-label-group__supporting {
  font-weight: 400;
  color: var(--cometchat-neutral-color-600);
}`} />
      </Section>
    </div>
  ),
};

/** Interactive playground — use the controls panel to configure the Avatar. */
export const Playground: Story = {
  args: { size: "lg", statusIcon: "online" },
  parameters: { docs: { disable: true } },
  render: (args: any) => <Avatar src={maleAvatars[0].imageUrl} alt="Ben Scott" {...args} />,
};

/* ─── Group Avatar Label (helper for Group Label Group story) ──────────────── */

function GroupAvatarLabel({ src, size, name, supportingText, groupType }: { src: string; size: "sm" | "md" | "lg" | "xl"; name: string; supportingText: string; groupType: "public" | "private" | "protected" }) {
  const avatarSizeMap: Record<string, string> = { sm: "32px", md: "40px", lg: "48px", xl: "56px" };
  const badgeSizeMap: Record<string, number> = { sm: 14, md: 16, lg: 20, xl: 22 };
  const avatarPx = avatarSizeMap[size];
  const badgePx = badgeSizeMap[size];

  const showBadge = groupType !== "public";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--cometchat-spacing-3)" }}>
      <div style={{ position: "relative", width: avatarPx, height: avatarPx, flexShrink: 0 }}>
        <img
          src={src}
          alt={name}
          style={{ width: "100%", height: "100%", borderRadius: "var(--cometchat-radius-max)", objectFit: "cover", display: "block" }}
        />
        {showBadge && (
          <span style={{ position: "absolute", right: -2, bottom: -2, width: badgePx, height: badgePx, display: "flex" }}>
            {groupType === "private" ? (
              <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                <circle cx="8.5" cy="8.5" r="7.9" fill="#079455" stroke="white" strokeWidth="1.17" />
                <path d="M6.03 12.62c-.22 0-.4-.08-.55-.23a.75.75 0 0 1-.23-.55V7.77c0-.22.08-.4.23-.55a.75.75 0 0 1 .55-.24h.52V6.11c0-.54.19-1 .57-1.38.38-.38.84-.57 1.38-.57.54 0 1 .19 1.38.57.38.38.57.84.57 1.38v.87h.52c.22 0 .4.08.55.23.15.15.23.34.23.55v4.07c0 .22-.08.4-.23.55a.75.75 0 0 1-.55.23H6.03zM8.5 10.56c.21 0 .39-.07.54-.22.15-.15.22-.33.22-.54 0-.21-.07-.39-.22-.54a.73.73 0 0 0-.54-.22.73.73 0 0 0-.54.22.73.73 0 0 0-.22.54c0 .21.07.39.22.54.15.15.33.22.54.22zM7.2 6.98h2.6V6.11c0-.36-.13-.67-.38-.92a1.25 1.25 0 0 0-.92-.38c-.36 0-.67.13-.92.38-.25.25-.38.56-.38.92v.87z" fill="white" />
              </svg>
            ) : (
              <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                <circle cx="8.5" cy="8.5" r="7.9" fill="#DC6803" stroke="white" strokeWidth="1.17" />
                <path d="M8.5 12.56c-.05 0-.09 0-.13-.01a.6.6 0 0 1-.13-.03c-.91-.33-1.64-.9-2.18-1.73-.54-.83-.81-1.72-.81-2.68V6.16c0-.16.05-.31.14-.44a.7.7 0 0 1 .37-.29l2.47-.92a.8.8 0 0 1 .27-.05c.09 0 .18.02.27.05l2.47.92c.15.06.27.16.37.29.1.13.14.28.14.44v1.95c0 .96-.27 1.85-.81 2.68-.54.83-1.27 1.4-2.18 1.73a.6.6 0 0 1-.13.03c-.04.01-.09.01-.13.01z" fill="white" />
              </svg>
            )}
          </span>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontFamily: "var(--cometchat-font-family)", fontWeight: "500", fontSize: size === "sm" ? "14px" : size === "md" ? "14px" : size === "lg" ? "16px" : "18px", lineHeight: size === "lg" ? "19.2px" : "16.8px", color: "var(--cometchat-text-color-primary)" }}>{name}</span>
        <span style={{ fontFamily: "var(--cometchat-font-family)", fontWeight: "400", fontSize: size === "sm" ? "12px" : "14px", lineHeight: "16.8px", color: "var(--cometchat-text-color-secondary)" }}>{supportingText}</span>
      </div>
    </div>
  );
}

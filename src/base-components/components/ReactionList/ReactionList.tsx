import { useState } from "react";
import "./ReactionList.css";

export interface ReactionListItem {
  /** User's display name */
  name: string;
  /** Avatar image URL */
  avatar?: string;
  /** The emoji this user reacted with */
  emoji: string;
  /** Subtitle text (e.g. "Tap to remove") */
  subtitle?: string;
  /** Click handler for this item */
  onClick?: () => void;
}

export interface ReactionTab {
  /** Tab label (e.g. "All 5" or "😍 3") */
  label: string;
  /** Key to filter items, or "all" for all reactions */
  key: string;
}

export interface ReactionListProps {
  /** Tabs to display (e.g. "All 5", "😍 3", "👍 2") */
  tabs: ReactionTab[];
  /** List of reactor items */
  items: ReactionListItem[];
  /** Initially active tab key. Default: first tab */
  activeTab?: string;
  /** Callback when a tab is selected */
  onTabChange?: (key: string) => void;
  /** Callback when a list item is clicked */
  onItemClick?: (item: ReactionListItem) => void;
}

export function ReactionList({
  tabs,
  items,
  activeTab,
  onTabChange,
  onItemClick,
}: ReactionListProps) {
  const [selectedTab, setSelectedTab] = useState(activeTab || tabs[0]?.key || "all");

  const handleTabClick = (key: string) => {
    setSelectedTab(key);
    onTabChange?.(key);
  };

  const filteredItems =
    selectedTab === "all"
      ? items
      : items.filter((item) => item.emoji === selectedTab);

  return (
    <div className="reaction-list" role="dialog" aria-label="Reaction details">
      {/* Tabs */}
      <div className="reaction-list__tabs" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.key}
            className={`reaction-list__tab ${selectedTab === tab.key ? "reaction-list__tab--active" : ""}`}
            onClick={() => handleTabClick(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="reaction-list__body" role="tabpanel">
        {filteredItems.map((item, index) => (
          <button
            key={index}
            type="button"
            className="reaction-list__item"
            onClick={() => {
              item.onClick?.();
              onItemClick?.(item);
            }}
          >
            <div className="reaction-list__avatar">
              {item.avatar ? (
                <img src={item.avatar} alt={item.name} />
              ) : (
                <AvatarPlaceholder name={item.name} />
              )}
            </div>
            <div className="reaction-list__text">
              <span className="reaction-list__name">{item.name}</span>
              {item.subtitle && (
                <span className="reaction-list__subtitle">{item.subtitle}</span>
              )}
            </div>
            <span className="reaction-list__emoji">{item.emoji}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/** Simple avatar placeholder with initials */
function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--cometchat-neutral-color-300)",
        fontFamily: "var(--cometchat-font-family)",
        fontSize: "12px",
        fontWeight: "600",
        color: "var(--cometchat-neutral-color-600)",
      }}
    >
      {initials}
    </div>
  );
}

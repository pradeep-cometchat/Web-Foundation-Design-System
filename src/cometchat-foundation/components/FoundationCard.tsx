import React from "react";

export interface FoundationCardProps {
  docsPath: string;
  children: React.ReactNode;
}

/**
 * Clickable card wrapper for the Introduction page.
 * Navigates the parent Storybook window to the target docs path.
 */
export const FoundationCard: React.FC<FoundationCardProps> = ({
  docsPath,
  children,
}) => {
  const handleClick = () => {
    try {
      const top = window.top ?? window;
      top.location.href = `${top.location.pathname}?path=/docs/${docsPath}`;
    } catch {
      window.location.href = `/?path=/docs/${docsPath}`;
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      style={{
        padding: "var(--cometchat-spacing-4)",
        borderRadius: "var(--cometchat-radius-3)",
        border: "1px solid var(--cometchat-neutral-color-200)",
        background: "var(--color-white)",
        boxShadow: "var(--cometchat-shadow-xs)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--cometchat-spacing-3)",
        cursor: "pointer",
        transition: "all 160ms ease",
        color: "inherit",
        textDecoration: "none",
      }}
      className="foundation-card"
    >
      {children}
    </div>
  );
};

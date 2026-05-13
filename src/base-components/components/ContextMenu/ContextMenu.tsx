import "./ContextMenu.css";

export interface ContextMenuItem {
  /** Icon as a React node (SVG) */
  icon: React.ReactNode;
  /** Display label */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Whether this item is destructive (renders in error color) */
  destructive?: boolean;
}

export interface ContextMenuProps {
  /** List of menu items */
  items: ContextMenuItem[];
  /** Whether the menu is visible */
  open?: boolean;
  /** Callback when the menu is dismissed */
  onClose?: () => void;
  /** Width of the menu. Default: 160 */
  width?: number;
}

export interface ContextMenuTriggerProps {
  /** Click handler to open the menu */
  onClick?: () => void;
  /** Accessible label. Default: "More options" */
  ariaLabel?: string;
}

/**
 * The three-dot (kebab) trigger button that opens the context menu.
 * Circular white button with shadow, shown on message hover.
 */
export function ContextMenuTrigger({
  onClick,
  ariaLabel = "More options",
}: ContextMenuTriggerProps) {
  return (
    <button
      type="button"
      className="context-menu-trigger"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-haspopup="menu"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="3.5" r="1.5" fill="currentColor"/>
        <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
        <circle cx="8" cy="12.5" r="1.5" fill="currentColor"/>
      </svg>
    </button>
  );
}

export function ContextMenu({
  items,
  open = true,
  onClose,
  width = 160,
}: ContextMenuProps) {
  if (!open) return null;

  return (
    <>
      {onClose && (
        <div className="context-menu__backdrop" onClick={onClose} aria-hidden="true" />
      )}
      <div className="context-menu" role="menu" style={{ width }}>
        {items.map((item, index) => (
          <button
            key={index}
            className={`context-menu__item ${index === 0 ? "context-menu__item--first" : ""} ${item.destructive ? "context-menu__item--destructive" : ""}`}
            role="menuitem"
            onClick={item.onClick}
            type="button"
          >
            <span className="context-menu__item-icon">{item.icon}</span>
            <span className="context-menu__item-label">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}

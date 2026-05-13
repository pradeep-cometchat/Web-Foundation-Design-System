import "./ActionSheet.css";

export interface ActionSheetItem {
  /** Icon as a React node (SVG component) */
  icon: React.ReactNode;
  /** Display label */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Whether this item is destructive (renders in error color) */
  destructive?: boolean;
}

export interface ActionSheetProps {
  /** List of action items to display */
  items: ActionSheetItem[];
  /** Whether the action sheet is visible */
  open?: boolean;
  /** Callback when the sheet is dismissed */
  onClose?: () => void;
  /** Width of the action sheet */
  width?: number;
  /** Optional title displayed at the top */
  title?: string;
}

export function ActionSheet({
  items,
  open = true,
  onClose,
  width = 244,
  title,
}: ActionSheetProps) {
  if (!open) return null;

  return (
    <>
      {onClose && (
        <div
          className="action-sheet__backdrop"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        className="action-sheet"
        role="menu"
        aria-label={title || "Action sheet"}
        style={{ width }}
      >
        {title && <div className="action-sheet__title">{title}</div>}
        {items.map((item, index) => (
          <ActionSheetRow key={index} item={item} />
        ))}
      </div>
    </>
  );
}

function ActionSheetRow({ item }: { item: ActionSheetItem }) {
  return (
    <button
      className={`action-sheet__item ${item.destructive ? "action-sheet__item--destructive" : ""}`}
      role="menuitem"
      onClick={item.onClick}
      type="button"
    >
      <span className="action-sheet__item-icon">{item.icon}</span>
      <span className="action-sheet__item-label">{item.label}</span>
    </button>
  );
}

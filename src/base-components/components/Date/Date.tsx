import "./Date.css";

export type DatePattern = "time" | "date" | "datetime" | "relative";
export type DateVariant = "sent" | "received" | "separator";

export interface DateProps {
  /** The timestamp text to display (e.g. "4:56 pm", "Yesterday", "12 Jan 2024") */
  timestamp: string;
  /** Display pattern. Default: "time" */
  pattern?: DatePattern;
  /** Visual variant based on context. Default: "sent" */
  variant?: DateVariant;
  /** Whether to show read receipts (double tick) */
  showReadReceipt?: boolean;
  /** Read receipt status */
  readStatus?: "sent" | "delivered" | "read";
}

export function DateTimestamp({
  timestamp,
  pattern = "time",
  variant = "sent",
  showReadReceipt = false,
  readStatus = "sent",
}: DateProps) {
  return (
    <span className={`date-timestamp date-timestamp--${variant} date-timestamp--${pattern}`}>
      {showReadReceipt && (
        <span className={`date-timestamp__receipt date-timestamp__receipt--${readStatus}`}>
          <ReadReceiptIcon status={readStatus} />
        </span>
      )}
      <span className="date-timestamp__text">{timestamp}</span>
    </span>
  );
}

function ReadReceiptIcon({ status }: { status: "sent" | "delivered" | "read" }) {
  if (status === "sent") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8.5L5 11.5L11 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 8.5L8.5 11.5L14.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

import "./TypingIndicator.css";
import { T, useT } from "../../../cometchat-foundation/localization";

/** Activity type being performed. */
export type TypingActivity = "typing" | "recording" | "uploading";

/** Context: single (no name), group (one name), multiple (count). */
export type TypingContext = "single" | "group" | "multiple";

export interface TypingIndicatorProps {
  /** Activity type. Default: "typing" */
  activity?: TypingActivity;
  /** Context type. Default: "single" */
  context?: TypingContext;
  /** User name (used when context is "group"). */
  userName?: string;
  /** Number of people (used when context is "multiple"). Default: 2 */
  count?: number;
}

function getActivityText(
  activity: TypingActivity,
  context: TypingContext,
  userName: string,
  count: number,
  t: (english: string) => string
): string {
  if (context === "single") {
    // Capitalize first letter
    return t(activity.charAt(0).toUpperCase() + activity.slice(1));
  }

  if (context === "group") {
    return t(`{name} is ${activity}`).replace("{name}", t(userName));
  }

  // multiple
  return t(`{count} people are ${activity}`).replace("{count}", String(count));
}

export function TypingIndicator({
  activity = "typing",
  context = "single",
  userName = "John",
  count = 2,
}: TypingIndicatorProps) {
  const t = useT();
  const text = getActivityText(activity, context, userName, count, t);

  return (
    <div className="typing-indicator" role="status" aria-live="polite" aria-label={text}>
      <div className="typing-indicator__dots">
        <span className="typing-indicator__dot" />
        <span className="typing-indicator__dot" />
        <span className="typing-indicator__dot" />
      </div>
      <span className="typing-indicator__text"><T>{text}</T></span>
    </div>
  );
}

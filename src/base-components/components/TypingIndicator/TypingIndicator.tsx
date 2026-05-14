import "./TypingIndicator.css";

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
  count: number
): string {
  const activityVerb =
    activity === "typing" ? "typing" :
    activity === "recording" ? "recording" :
    "uploading";

  if (context === "single") {
    // Capitalize first letter
    return activityVerb.charAt(0).toUpperCase() + activityVerb.slice(1);
  }

  if (context === "group") {
    return `${userName} is ${activityVerb}`;
  }

  // multiple
  return `${count} people are ${activityVerb}`;
}

export function TypingIndicator({
  activity = "typing",
  context = "single",
  userName = "John",
  count = 2,
}: TypingIndicatorProps) {
  const text = getActivityText(activity, context, userName, count);

  return (
    <div className="typing-indicator" role="status" aria-live="polite" aria-label={text}>
      <div className="typing-indicator__dots">
        <span className="typing-indicator__dot" />
        <span className="typing-indicator__dot" />
        <span className="typing-indicator__dot" />
      </div>
      <span className="typing-indicator__text">{text}</span>
    </div>
  );
}

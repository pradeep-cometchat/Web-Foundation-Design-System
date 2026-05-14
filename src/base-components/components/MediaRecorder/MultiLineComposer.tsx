import "./MultiLineComposer.css";

export type RecordingState = "idle" | "recording" | "paused" | "preview";

export interface MultiLineComposerProps {
  /** Current recording state */
  recordingState?: RecordingState;
  /** Duration text (e.g. "00:00:10") */
  duration?: string;
  /** Called when the record / resume button is clicked */
  onRecord?: () => void;
  /** Called when the pause button is clicked */
  onPause?: () => void;
  /** Called when the stop button is clicked */
  onStop?: () => void;
  /** Called when the delete button is clicked */
  onDelete?: () => void;
  /** Called when the play button is clicked (preview state) */
  onPlay?: () => void;
  /** Called when the send button is clicked (preview state) */
  onSend?: () => void;
}

// Stable waveform bar heights — avoids rerender flicker from Math.random()
const WAVEFORM_HEIGHTS = [
  6, 14, 20, 10, 24, 8, 18, 12, 22, 6,
  16, 10, 24, 8, 18, 14, 6, 22, 10, 20,
  8, 16, 12, 24, 6, 18, 10, 22, 8, 14,
  20, 6, 12, 18, 10, 24, 8, 16, 14, 6,
];

export function MultiLineComposer({
  recordingState = "idle",
  duration = "00:00:00",
  onRecord,
  onPause,
  onStop,
  onDelete,
  onPlay,
  onSend,
}: MultiLineComposerProps) {
  const isActive = recordingState === "recording" || recordingState === "paused";
  const isRecording = recordingState === "recording";

  return (
    <div className="ml-composer__popup">
      <span className="ml-composer__popup-title">Voice Note</span>

      {recordingState !== "preview" ? (
        <>
          {/* Three-ring wave animation */}
          <div className="ml-composer__wave">
            <div
              className={[
                "ml-composer__wave-outer",
                isActive && "ml-composer__wave-outer--visible",
                isRecording && "ml-composer__wave-outer--pulse",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div
                className={[
                  "ml-composer__wave-inner",
                  isActive && "ml-composer__wave-inner--visible",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div
                  className={[
                    "ml-composer__wave-center",
                    isActive && "ml-composer__wave-center--active",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <svg
                    className="ml-composer__wave-mic"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 14.5C13.1 14.5 14 13.6 14 12.5V6.5C14 5.4 13.1 4.5 12 4.5C10.9 4.5 10 5.4 10 6.5V12.5C10 13.6 10.9 14.5 12 14.5ZM16 12.5C16 14.71 14.21 16.5 12 16.5C9.79 16.5 8 14.71 8 12.5H6.5C6.5 15.19 8.54 17.4 11.25 17.72V20.5H12.75V17.72C15.46 17.4 17.5 15.19 17.5 12.5H16Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <span
            className={[
              "ml-composer__duration",
              recordingState === "paused" && "ml-composer__duration--muted",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {duration}
          </span>
        </>
      ) : (
        /* Preview / Playback */
        <div className="ml-composer__preview">
          <button
            type="button"
            className="ml-composer__play-btn"
            aria-label="Play"
            onClick={onPlay}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
            </svg>
          </button>
          <div className="ml-composer__waveform">
            <div className="ml-composer__waveform-bars">
              {WAVEFORM_HEIGHTS.map((h, i) => (
                <span
                  key={i}
                  className="ml-composer__waveform-bar"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <span className="ml-composer__preview-duration">{duration}</span>
          </div>
        </div>
      )}

      {/* Action buttons: delete | record/pause | stop */}
      <div className="ml-composer__actions">
        <button
          type="button"
          className="ml-composer__action-btn ml-composer__action-btn--outline"
          aria-label="Delete recording"
          onClick={onDelete}
        >
          <svg viewBox="0 0 16 18" fill="none" aria-hidden="true">
            <path d="M2.583 17.667C2.147 17.667 1.774 17.512 1.464 17.202C1.155 16.893 1 16.52 1 16.083V2.383H0.796C0.574 2.383 0.385 2.306 0.231 2.151C0.077 1.996 0 1.809 0 1.589C0 1.368 0.077 1.182 0.231 1.029C0.385 0.876 0.574 0.8 0.796 0.8H4.687V0.788C4.687 0.569 4.763 0.383 4.916 0.23C5.069 0.077 5.257 0 5.479 0H10.246C10.462 0 10.647 0.077 10.802 0.232C10.956 0.386 11.033 0.572 11.033 0.788V0.8H14.933C15.147 0.8 15.331 0.878 15.486 1.033C15.64 1.188 15.717 1.374 15.717 1.59C15.717 1.813 15.639 2.001 15.485 2.154C15.33 2.307 15.145 2.383 14.929 2.383H14.717V16.083C14.717 16.52 14.562 16.893 14.252 17.202C13.943 17.512 13.57 17.667 13.133 17.667H2.583ZM13.133 2.383H2.583V16.083H13.133V2.383ZM5.845 14.004C6.062 14.004 6.248 13.928 6.402 13.777C6.556 13.626 6.633 13.439 6.633 13.217V5.233C6.633 5.011 6.556 4.823 6.401 4.669C6.246 4.515 6.06 4.438 5.843 4.438C5.62 4.438 5.432 4.515 5.279 4.669C5.126 4.823 5.05 5.011 5.05 5.233V13.217C5.05 13.439 5.128 13.626 5.284 13.777C5.44 13.928 5.627 14.004 5.845 14.004ZM9.878 14.004C10.096 14.004 10.282 13.928 10.436 13.777C10.59 13.626 10.667 13.439 10.667 13.217V5.233C10.667 5.011 10.589 4.823 10.434 4.669C10.279 4.515 10.093 4.438 9.876 4.438C9.653 4.438 9.465 4.515 9.313 4.669C9.16 4.823 9.083 5.011 9.083 5.233V13.217C9.083 13.439 9.161 13.626 9.317 13.777C9.473 13.928 9.66 14.004 9.878 14.004Z" fill="currentColor"/>
          </svg>
        </button>

        <button
          type="button"
          className="ml-composer__action-btn ml-composer__action-btn--destructive"
          aria-label={isRecording ? "Pause recording" : "Start recording"}
          onClick={isRecording ? onPause : onRecord}
        >
          {isRecording ? (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="7" y="5" width="3" height="14" rx="1" fill="currentColor" />
              <rect x="14" y="5" width="3" height="14" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 14.5C13.1 14.5 14 13.6 14 12.5V6.5C14 5.4 13.1 4.5 12 4.5C10.9 4.5 10 5.4 10 6.5V12.5C10 13.6 10.9 14.5 12 14.5ZM16 12.5C16 14.71 14.21 16.5 12 16.5C9.79 16.5 8 14.71 8 12.5H6.5C6.5 15.19 8.54 17.4 11.25 17.72V20.5H12.75V17.72C15.46 17.4 17.5 15.19 17.5 12.5H16Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>

        {recordingState === "preview" ? (
          <button
            type="button"
            className="ml-composer__action-btn ml-composer__action-btn--send"
            aria-label="Send"
            onClick={onSend}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5.5 5.2L18.8 12L5.5 18.8V13.5L13 12L5.5 10.5V5.2Z" fill="currentColor" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className="ml-composer__action-btn ml-composer__action-btn--outline"
            aria-label="Stop recording"
            onClick={onStop}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
              <rect x="8" y="8" width="8" height="8" rx="1.5" fill="currentColor" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

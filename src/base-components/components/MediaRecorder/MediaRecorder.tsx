import "./MediaRecorder.css";

export type MediaRecorderState = "recording" | "paused" | "playing";

export interface MediaRecorderProps {
  /** Current state of the recorder. */
  state: MediaRecorderState;
  /** Duration string (e.g. "00:32"). */
  duration?: string;
  /** Placeholder text for the input area. Default: "Type your message..." */
  placeholder?: string;
  /** Callback when pause/resume is clicked. */
  onTogglePlayPause?: () => void;
  /** Callback when delete is clicked. */
  onDelete?: () => void;
  /** Callback when send is clicked. */
  onSend?: () => void;
}

/* ─── Icons ─── */

function AddCircleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19 10v1a7 7 0 0 1-14 0v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 19v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PauseCircleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="currentColor" />
      <rect x="12" y="10" width="3" height="12" rx="1.5" fill="white" />
      <rect x="17" y="10" width="3" height="12" rx="1.5" fill="white" />
    </svg>
  );
}

function PlayCircleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="currentColor" />
      <path d="M13 11v10l8-5-8-5Z" fill="white" />
    </svg>
  );
}

function PauseButtonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6.5" y="5" width="2.5" height="10" rx="1" fill="currentColor" />
      <rect x="11" y="5" width="2.5" height="10" rx="1" fill="currentColor" />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.583 17.667C2.147 17.667 1.774 17.512 1.464 17.202C1.155 16.893 1 16.52 1 16.083V2.383H0.796C0.574 2.383 0.385 2.306 0.231 2.151C0.077 1.996 0 1.809 0 1.589C0 1.368 0.077 1.182 0.231 1.029C0.385 0.876 0.574 0.8 0.796 0.8H4.687V0.788C4.687 0.569 4.763 0.383 4.916 0.23C5.069 0.077 5.257 0 5.479 0H10.246C10.462 0 10.647 0.077 10.802 0.232C10.956 0.386 11.033 0.572 11.033 0.788V0.8H14.933C15.147 0.8 15.331 0.878 15.486 1.033C15.64 1.188 15.717 1.374 15.717 1.59C15.717 1.813 15.639 2.001 15.485 2.154C15.33 2.307 15.145 2.383 14.929 2.383H14.717V16.083C14.717 16.52 14.562 16.893 14.252 17.202C13.943 17.512 13.57 17.667 13.133 17.667H2.583ZM13.133 2.383H2.583V16.083H13.133V2.383ZM5.845 14.004C6.062 14.004 6.248 13.928 6.402 13.777C6.556 13.626 6.633 13.439 6.633 13.217V5.233C6.633 5.011 6.556 4.823 6.401 4.669C6.246 4.515 6.06 4.438 5.843 4.438C5.62 4.438 5.432 4.515 5.279 4.669C5.126 4.823 5.05 5.011 5.05 5.233V13.217C5.05 13.439 5.128 13.626 5.284 13.777C5.44 13.928 5.627 14.004 5.845 14.004ZM9.878 14.004C10.096 14.004 10.282 13.928 10.436 13.777C10.59 13.626 10.667 13.439 10.667 13.217V5.233C10.667 5.011 10.589 4.823 10.434 4.669C10.279 4.515 10.093 4.438 9.876 4.438C9.653 4.438 9.465 4.515 9.313 4.669C9.16 4.823 9.083 5.011 9.083 5.233V13.217C9.083 13.439 9.161 13.626 9.317 13.777C9.473 13.928 9.66 14.004 9.878 14.004Z" fill="currentColor"/>
    </svg>
  );
}

function SendArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 5.2L18.8 12L5.5 18.8V13.5L13 12L5.5 10.5V5.2Z" fill="currentColor" />
    </svg>
  );
}

/* ─── Waveform bars (static representation) ─── */
const WAVE_HEIGHTS = [2, 6, 6, 8, 8, 8, 16, 14, 10, 8, 6, 6, 8, 6, 8, 8, 10, 14, 10, 8, 6, 6, 4, 2, 2, 2, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10, 8, 8, 8, 8, 6, 6, 6, 6, 6, 2, 6, 6, 8, 8, 8, 16, 14, 10, 8, 6, 6, 8, 6, 8, 8, 10, 14, 10, 8, 6, 6, 4, 2, 2, 2, 2, 2, 4, 4, 6, 6, 8, 8, 10];

export function MediaRecorder({
  state,
  duration = "00:00",
  placeholder = "Type your message...",
  onTogglePlayPause,
  onDelete,
  onSend,
}: MediaRecorderProps) {
  const isRecording = state === "recording";
  const isPaused = state === "paused";
  const isPlaying = state === "playing";

  return (
    <div className="media-recorder">
      {/* Left: add + placeholder */}
      <div className="media-recorder__left">
        <button type="button" className="media-recorder__add-btn" aria-label="Add attachment">
          <AddCircleIcon />
        </button>
        <span className="media-recorder__placeholder">{placeholder}</span>
      </div>

      {/* Mic icon */}
      <button type="button" className="media-recorder__mic-btn" aria-label="Voice record">
        <MicIcon />
      </button>

      {/* Recording controls */}
      <div className="media-recorder__recording">
        {/* Status: red dot or play/pause */}
        <div className="media-recorder__status-icon">
          {isRecording && <div className="media-recorder__red-dot" />}
          {isPaused && (
            <button type="button" className="media-recorder__play-pause-btn" onClick={onTogglePlayPause} aria-label="Play">
              <PlayCircleIcon />
            </button>
          )}
          {isPlaying && (
            <button type="button" className="media-recorder__play-pause-btn" onClick={onTogglePlayPause} aria-label="Pause">
              <PauseCircleIcon />
            </button>
          )}
        </div>

        {/* Duration */}
        <span className="media-recorder__duration">{duration}</span>

        {/* Waveform */}
        <div className="media-recorder__waveform">
          {WAVE_HEIGHTS.map((h, i) => (
            <div key={i} className="media-recorder__wave-bar" style={{ height: h }} />
          ))}
        </div>

        {/* Pause/Delete button */}
        {isRecording && (
          <button type="button" className="media-recorder__action-btn" onClick={onTogglePlayPause} aria-label="Pause recording">
            <PauseButtonIcon />
          </button>
        )}
        {(isPaused || isPlaying) && (
          <button type="button" className="media-recorder__action-btn" onClick={onDelete} aria-label="Delete recording">
            <DeleteIcon />
          </button>
        )}
      </div>

      {/* Send button */}
      <button
        type="button"
        className={`media-recorder__send-btn ${isRecording || isPlaying ? "media-recorder__send-btn--active" : ""}`}
        onClick={onSend}
        aria-label="Send"
      >
        <SendArrowIcon />
      </button>
    </div>
  );
}

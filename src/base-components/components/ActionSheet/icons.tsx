/**
 * Action Sheet icons — using Material Symbols Rounded (filled) from CometChat Foundation.
 * Uses the .icon-rounded class which is globally configured in the design system.
 * FILL is set to 1 for filled style via font-variation-settings.
 */

const fillStyle: React.CSSProperties = {
  fontSize: 24,
  fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
};

export function CameraIcon() {
  return <span className="icon-rounded" style={fillStyle}>photo_camera</span>;
}

export function PhotoIcon() {
  return <span className="icon-rounded" style={fillStyle}>image</span>;
}

export function VideocamIcon() {
  return <span className="icon-rounded" style={fillStyle}>videocam</span>;
}

export function PlayCircleIcon() {
  return <span className="icon-rounded" style={fillStyle}>play_circle</span>;
}

export function DescriptionIcon() {
  return <span className="icon-rounded" style={fillStyle}>description</span>;
}

export function PollIcon() {
  return <span className="icon-rounded" style={fillStyle}>menu</span>;
}

export function CollaborativeWhiteboardIcon() {
  return <span className="icon-rounded" style={fillStyle}>draw</span>;
}

export function CollaborativeDocumentIcon() {
  return <span className="icon-rounded" style={fillStyle}>edit_document</span>;
}

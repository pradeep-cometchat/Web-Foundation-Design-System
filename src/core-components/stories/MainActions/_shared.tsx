import "../../../shell/Shell.css";
import "../ChatBubbles/ChatBubbles.css";
import "./MainActions.css";
import { Header } from "../../../base-components/components/Header";
import { SearchBar } from "../../../base-components/components/SearchBar";
import { ConversationItem } from "../../../base-components/components/ListItem";
import {
  ContextMenu,
  type ContextMenuItem,
} from "../../../base-components/components/ContextMenu";
import { Toast } from "../../../base-components/components/Toast";
import {
  SAMPLE_IMAGES,
  ReceiptIcon,
} from "../MessageComposer/MultiAttachments/_shared";

/* ─── Icons (Material Symbols via the icon font) ───────────────────────────── */

export function MIcon({
  glyph,
  size = 18,
  fill = false,
  color,
}: {
  glyph: string;
  size?: number;
  fill?: boolean;
  color?: string;
}) {
  return (
    <span
      className="icon-rounded"
      style={{
        fontSize: size,
        lineHeight: 1,
        color,
        fontVariationSettings: fill ? '"FILL" 1' : undefined,
        flexShrink: 0,
      }}
    >
      {glyph}
    </span>
  );
}

/** Small pin glyph shown next to the time in pinned rows/bubbles. */
export function PinGlyph({
  size = 12,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) {
  return <MIcon glyph="keep" size={size} fill color={color} />;
}

/* ─── Chat model (mirrors the Figma conversation) ──────────────────────────── */

export interface PinMsg {
  id: string;
  variant: "sent" | "received";
  text: string;
  time?: string;
}

export const THREAD: PinMsg[] = [
  { id: "m0", variant: "sent", text: "Sure, checking it now" },
  { id: "m1", variant: "received", text: "You can check and confirm" },
  { id: "m2", variant: "sent", text: "Nice, Does it come with warranty?" },
  { id: "m3", variant: "received", text: "Yes, available right now" },
  { id: "m4", variant: "sent", text: "What's the price?" },
  { id: "m5", variant: "received", text: "It's ₹7,999" },
  { id: "m6", variant: "sent", text: "Do you offer delivery?" },
  { id: "m7", variant: "received", text: "Yes, delivery in 2 to 3 days" },
  { id: "m8", variant: "received", text: "Let me know if you're interested" },
  { id: "m9", variant: "sent", text: "Yes, I can proceed with the order" },
];

const AV = (n: number) => `https://i.pravatar.cc/120?img=${n}`;

/* ─── Text bubble ──────────────────────────────────────────────────────────── */

export function TextBubble({
  variant,
  text,
  time = "4:56 pm",
  pinned = false,
  highlight = false,
}: {
  variant: "sent" | "received";
  text: string;
  time?: string;
  pinned?: boolean;
  highlight?: boolean;
}) {
  const isSent = variant === "sent";
  const metaColor = isSent
    ? "color-mix(in srgb, var(--cometchat-static-white) 70%, transparent)"
    : "var(--cometchat-text-color-tertiary)";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isSent ? "flex-end" : "flex-start",
        padding: "var(--cometchat-spacing-1) var(--cometchat-spacing-6)",
        background: highlight
          ? "var(--cometchat-extended-primary-color-100)"
          : "transparent",
      }}
    >
      <div
        className="ma-bubble"
        style={{
          maxWidth: 320,
          borderRadius: "var(--cometchat-radius-3)",
          padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-3)",
          background: isSent
            ? "var(--cometchat-send-bubble-background)"
            : "var(--cometchat-received-bubble-background)",
          color: isSent
            ? "var(--cometchat-static-white)"
            : "var(--cometchat-text-color-primary)",
          fontSize: 14,
          lineHeight: "20px",
          fontFamily: "var(--cometchat-font-family, Inter, sans-serif)",
        }}
      >
        {text}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "var(--cometchat-spacing-1)",
            marginTop: 2,
            fontSize: 11,
            color: metaColor,
          }}
        >
          {pinned && (
            <>
              <PinGlyph size={12} color={metaColor} />
              <span>·</span>
            </>
          )}
          <span>{time}</span>
          {isSent && <ReceiptIcon status="read" />}
        </div>
      </div>
    </div>
  );
}

/* ─── Menus (DS ContextMenu + same classes for rows needing a submenu) ─────── */

const mi = (
  glyph: string,
  label: string,
  destructive = false,
): ContextMenuItem => ({
  icon: <MIcon glyph={glyph} size={18} />,
  label,
  destructive,
});

export const CONVO_MENU_PIN: ContextMenuItem[] = [
  mi("keep", "Pin conversation"),
  mi("delete", "Delete", true),
];

export const CONVO_MENU_UNPIN: ContextMenuItem[] = [
  mi("keep_off", "Unpin conversation"),
  mi("delete", "Delete", true),
];

export const HEADER_MENU: ContextMenuItem[] = [
  mi("search", "Search"),
  mi("keep", "Pinned messages"),
  mi("person", "User info"),
  mi("delete", "Delete", true),
];

export const PINNED_ITEM_MENU: ContextMenuItem[] = [
  mi("info", "Info"),
  mi("content_copy", "Copy"),
  mi("keep_off", "Unpin Message"),
  mi("notifications_off", "Stop notifications"),
  mi("delete", "Delete", true),
];

/** Message menu with the Organise ▸ submenu open beside it (per the design). */
export function MessageMenuWithSubmenu({
  variant,
}: {
  variant: "sent" | "received";
}) {
  const rows: { glyph: string; label: string; destructive?: boolean }[] =
    variant === "sent"
      ? [
          { glyph: "info", label: "Info" },
          { glyph: "reply", label: "Reply" },
          { glyph: "subdirectory_arrow_right", label: "Reply in thread" },
          { glyph: "content_copy", label: "Copy" },
          { glyph: "edit", label: "Edit" },
          { glyph: "category", label: "Organise" },
          { glyph: "translate", label: "Translate" },
          { glyph: "delete", label: "Delete", destructive: true },
        ]
      : [
          { glyph: "reply", label: "Reply" },
          { glyph: "subdirectory_arrow_right", label: "Reply in thread" },
          { glyph: "content_copy", label: "Copy" },
          { glyph: "category", label: "Organise" },
          { glyph: "mark_chat_unread", label: "Mark unread" },
          { glyph: "translate", label: "Translate" },
          { glyph: "report", label: "Report" },
          { glyph: "delete", label: "Delete", destructive: true },
        ];
  return (
    <div style={{ position: "relative", display: "flex" }}>
      <div className="context-menu" role="menu" style={{ width: 200 }}>
        {rows.map((r, i) => (
          <button
            key={r.label}
            type="button"
            role="menuitem"
            className={`context-menu__item ${i === 0 ? "context-menu__item--first" : ""} ${r.destructive ? "context-menu__item--destructive" : ""}`}
            style={
              r.label === "Organise"
                ? { background: "var(--cometchat-background-color-03)" }
                : undefined
            }
          >
            <span className="context-menu__item-icon">
              <MIcon glyph={r.glyph} size={18} />
            </span>
            <span className="context-menu__item-label" style={{ flex: 1 }}>
              {r.label}
            </span>
            {r.label === "Organise" && (
              <MIcon glyph="chevron_right" size={18} />
            )}
          </button>
        ))}
      </div>
      {/* Organise submenu */}
      <div
        style={{
          position: "absolute",
          left: "100%",
          top: variant === "sent" ? 148 : 96,
          marginLeft: "var(--cometchat-spacing-1)",
        }}
      >
        <ContextMenu
          width={180}
          items={[mi("keep", "Pin message"), mi("bookmark", "Save message")]}
        />
      </div>
    </div>
  );
}

/* ─── Modal (per the Figma pin/unpin dialogs — left-aligned, two buttons) ──── */

export function PinDialog({
  title,
  description,
  confirmLabel,
}: {
  title: string;
  description: string;
  confirmLabel: string;
}) {
  const font = "var(--cometchat-font-family, Inter, sans-serif)";
  const btn: React.CSSProperties = {
    flex: 1,
    padding: "var(--cometchat-spacing-2-5)",
    borderRadius: "var(--cometchat-radius-2)",
    fontFamily: font,
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
  };
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "color-mix(in srgb, var(--cometchat-static-black) 50%, transparent)",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{
          width: 400,
          boxSizing: "border-box",
          background: "var(--cometchat-background-color-01)",
          border: "1px solid var(--cometchat-border-color-light)",
          borderRadius: "var(--cometchat-radius-4)",
          boxShadow: "var(--cometchat-shadow-lg)",
          padding: "var(--cometchat-spacing-6)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--cometchat-spacing-5)",
          fontFamily: font,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--cometchat-spacing-1)",
          }}
        >
          <span
            style={{
              fontSize: 16,
              fontWeight: 600,
              lineHeight: "22px",
              color: "var(--cometchat-text-color-primary)",
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--cometchat-text-color-secondary)",
            }}
          >
            {description}
          </span>
        </div>
        <div style={{ display: "flex", gap: "var(--cometchat-spacing-2)" }}>
          <button
            className="ma-btn ma-btn--secondary"
            style={{
              ...btn,
              border: "1px solid var(--cometchat-border-color-default)",
              background: "var(--cometchat-background-color-01)",
              color: "var(--cometchat-text-color-primary)",
            }}
          >
            Cancel
          </button>
          <button
            className="ma-btn ma-btn--primary"
            style={{
              ...btn,
              border: "none",
              background: "var(--cometchat-primary-color)",
              color: "var(--cometchat-static-white)",
            }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Pinned Messages panel ────────────────────────────────────────────────── */

export function PinnedPanel({
  title = "Pinned Messages",
  itemMenu = false,
  menuOnReceived = false,
  afterUnpin = false,
}: {
  title?: string;
  itemMenu?: boolean;
  menuOnReceived?: boolean;
  afterUnpin?: boolean;
}) {
  const font = "var(--cometchat-font-family, Inter, sans-serif)";
  return (
    <div
      style={{
        width: 400,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        borderLeft: "1px solid var(--cometchat-border-color-default)",
        background: "var(--cometchat-background-color-01)",
        fontFamily: font,
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          boxSizing: "border-box",
          padding: "0 var(--cometchat-spacing-4)",
          borderBottom: "1px solid var(--cometchat-border-color-default)",
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "var(--cometchat-text-color-primary)",
          }}
        >
          {title}
        </span>
        <button
          className="ma-icon-btn"
          aria-label="Close"
          style={{ color: "var(--cometchat-icon-color-primary)" }}
        >
          <MIcon glyph="close" size={22} />
        </button>
      </div>
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: "var(--cometchat-spacing-2)",
          padding: "var(--cometchat-spacing-4)",
          background: "var(--cometchat-background-color-02)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span
            style={{
              fontSize: 11,
              padding: "2px var(--cometchat-spacing-2)",
              borderRadius: "var(--cometchat-radius-1)",
              border: "1px solid var(--cometchat-border-color-light)",
              background: "var(--cometchat-background-color-01)",
              color: "var(--cometchat-text-color-secondary)",
            }}
          >
            Today
          </span>
        </div>
        {!afterUnpin && (
          <div style={{ position: "relative" }}>
            <TextBubble
              variant="received"
              text="Let me know if you're interested"
              pinned
            />
            {itemMenu && menuOnReceived && (
              <div
                style={{
                  position: "absolute",
                  left: 24,
                  top: "100%",
                  zIndex: 20,
                }}
              >
                <ContextMenu width={200} items={PINNED_ITEM_MENU} />
              </div>
            )}
          </div>
        )}
        <div style={{ position: "relative" }}>
          <TextBubble variant="sent" text="What's the price?" pinned />
          {itemMenu && !menuOnReceived && (
            <div
              style={{
                position: "absolute",
                right: 140,
                top: "100%",
                zIndex: 20,
              }}
            >
              <ContextMenu width={200} items={PINNED_ITEM_MENU} />
            </div>
          )}
        </div>
        {/* Image message pinned in the panel */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "var(--cometchat-spacing-1) var(--cometchat-spacing-6)",
          }}
        >
          <div
            style={{
              width: 200,
              borderRadius: "var(--cometchat-radius-3)",
              padding: "var(--cometchat-spacing-2)",
              background: "var(--cometchat-received-bubble-background)",
              color: "var(--cometchat-text-color-primary)",
              fontSize: 13,
              fontFamily: font,
            }}
          >
            <img
              src={SAMPLE_IMAGES[0]}
              alt=""
              style={{
                width: "100%",
                height: 170,
                objectFit: "cover",
                borderRadius: "var(--cometchat-radius-2)",
                display: "block",
              }}
            />
            <div style={{ margin: "var(--cometchat-spacing-1) 0 0" }}>
              Let me know if you're interested
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "var(--cometchat-spacing-1)",
                fontSize: 11,
                color: "var(--cometchat-text-color-tertiary)",
              }}
            >
              <PinGlyph size={12} />
              <span>·</span>
              <span>4:56 pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── The full screen ──────────────────────────────────────────────────────── */

export interface PinScreenProps {
  /** Pin state of the active conversation row. */
  convoPinned?: boolean;
  /** Context menu open on the active conversation row. */
  convoMenu?: "pin" | "unpin";
  /** Modal over the whole screen. */
  modal?: "pin-convo" | "unpin-convo" | "pin-msg" | "unpin-msg";
  /** Toast text + position. */
  toast?: string;
  toastPos?: "left" | "center" | "right";
  /** Message context menu (with Organise ▸ submenu). */
  msgMenu?: "sent" | "received";
  /** Chat-header ⋮ overflow menu. */
  headerMenu?: boolean;
  /** Pinned Messages side panel. */
  panel?: boolean;
  panelItemMenu?: boolean;
  panelMenuOnReceived?: boolean;
  panelAfterUnpin?: boolean;
  /** Ids of pinned messages (show the pin glyph in the bubble). */
  pinnedIds?: string[];
  /** Id of the bubble flashed after "jump to pinned". */
  highlightId?: string;
}

const CONVOS = [
  {
    name: "George Alan",
    img: AV(12),
    time: "6:45 PM",
    text: "Hey, let's catch up later!",
    status: "read" as const,
    online: true,
    active: true,
  },
  {
    name: "Uber Cars",
    img: AV(52),
    time: "4:30 PM",
    sender: "John:",
    type: "photo" as const,
    text: "Your ride has arrived. Driver is waiting outside.",
  },
  {
    name: "Safiya Fareena",
    img: AV(5),
    time: "2:10 PM",
    type: "video" as const,
  },
  {
    name: "Robert Allen",
    img: AV(13),
    time: "11:00 AM",
    status: "read" as const,
    type: "photo" as const,
    text: "Check this out from yesterday!",
    online: true,
  },
  {
    name: "Epic Game",
    img: AV(60),
    time: "Yesterday",
    sender: "John Paul:",
    type: "file" as const,
    text: "join the match now",
  },
  {
    name: "Scott Franklin",
    avatarText: "SF",
    time: "Monday",
    status: "error" as const,
    type: "audio" as const,
  },
  {
    name: "Micheal Scott",
    img: AV(15),
    time: "Sunday",
    status: "read" as const,
    text: "Emoji",
  },
  {
    name: "Innovative Online Shopping",
    img: AV(16),
    time: "Friday",
    status: "read" as const,
    sender: "Tessa:",
    text: "Order delivered",
  },
  {
    name: "Micheal Scott",
    img: AV(15),
    time: "11/04/26",
    text: "Incoming voice call",
  },
];

export function PinScreen({
  convoPinned = false,
  convoMenu,
  modal,
  toast,
  toastPos = "left",
  msgMenu,
  headerMenu = false,
  panel = false,
  panelItemMenu = false,
  panelMenuOnReceived = false,
  panelAfterUnpin = false,
  pinnedIds = [],
  highlightId,
}: PinScreenProps) {
  const font = "var(--cometchat-font-family, Inter, sans-serif)";
  return (
    <div
      className="shell ma-screen"
      style={{ position: "relative", fontFamily: font, overflow: "hidden" }}
    >
      {/* Sidebar */}
      <div className="shell__sidebar" style={{ position: "relative" }}>
        <Header title="Chats" actions={[]} showMore />
        <div
          style={{
            padding: "var(--cometchat-spacing-2) var(--cometchat-spacing-4)",
          }}
        >
          <SearchBar placeholder="Search chats or messages" />
        </div>
        <div style={{ flex: 1, overflow: "auto" }}>
          {CONVOS.map((c, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                background: c.active
                  ? "var(--cometchat-background-color-03)"
                  : undefined,
              }}
            >
              <ConversationItem
                title={c.name}
                timestamp={c.time}
                avatarVariant={c.avatarText ? "text" : "image"}
                avatarUrl={c.img}
                avatarText={c.avatarText}
                statusIcon={c.online ? "online" : "none"}
                messageStatus={c.status}
                senderLabel={c.sender}
                messageType={c.type}
                messageTypeLabel={c.type ? true : undefined}
                textContent={c.text}
              />
              {c.active && (
                <div
                  style={{
                    position: "absolute",
                    right: "var(--cometchat-spacing-4)",
                    bottom: "var(--cometchat-spacing-3)",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--cometchat-spacing-1-5)",
                    color: "var(--cometchat-icon-color-secondary)",
                  }}
                >
                  {convoPinned && <PinGlyph size={14} />}
                  {convoMenu && <MIcon glyph="keyboard_arrow_down" size={16} />}
                </div>
              )}
              {/* Menu hangs off the row's dropdown chevron: right edges align,
                  top edge sits just under the row. */}
              {c.active && convoMenu && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: "var(--cometchat-spacing-4)",
                    zIndex: 20,
                  }}
                >
                  <ContextMenu
                    width={215}
                    items={
                      convoMenu === "pin" ? CONVO_MENU_PIN : CONVO_MENU_UNPIN
                    }
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: "var(--cometchat-background-color-01)",
        }}
      >
        <div className="chat-header">
          <div className="chat-header__info">
            <div className="chat-header__avatar">
              <img
                src={AV(12)}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="chat-header__text">
              <span className="chat-header__name">George Alan</span>
              <span className="chat-header__status">Online</span>
            </div>
          </div>
          <div className="chat-header__actions">
            <button className="chat-header__action-btn">
              <MIcon
                glyph="videocam"
                size={24}
                color="var(--cometchat-icon-color-primary)"
              />
            </button>
            <button className="chat-header__action-btn">
              <MIcon
                glyph="call"
                size={24}
                color="var(--cometchat-icon-color-primary)"
              />
            </button>
            <button className="chat-header__action-btn">
              <MIcon
                glyph="more_vert"
                size={24}
                color="var(--cometchat-icon-color-primary)"
              />
            </button>
          </div>
        </div>

        {/* Header overflow menu */}
        {headerMenu && (
          <div
            style={{
              position: "absolute",
              right: "var(--cometchat-spacing-4)",
              top: 56,
              zIndex: 20,
            }}
          >
            <ContextMenu width={200} items={HEADER_MENU} />
          </div>
        )}

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "var(--cometchat-spacing-3)",
            background: "var(--cometchat-background-color-02)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "var(--cometchat-spacing-2)",
            }}
          >
            <span
              style={{
                fontSize: 11,
                padding: "2px var(--cometchat-spacing-2)",
                borderRadius: "var(--cometchat-radius-1)",
                border: "1px solid var(--cometchat-border-color-light)",
                background: "var(--cometchat-background-color-01)",
                color: "var(--cometchat-text-color-secondary)",
              }}
            >
              Today
            </span>
          </div>
          {THREAD.map((m) => (
            <div key={m.id} style={{ position: "relative" }}>
              <TextBubble
                variant={m.variant}
                text={m.text}
                pinned={pinnedIds.includes(m.id)}
                highlight={highlightId === m.id}
              />
              {msgMenu === "sent" && m.id === "m4" && (
                <div
                  style={{
                    position: "absolute",
                    right: 360,
                    top: "50%",
                    transform: "translateY(-40%)",
                    zIndex: 20,
                  }}
                >
                  <MessageMenuWithSubmenu variant="sent" />
                </div>
              )}
              {msgMenu === "received" && m.id === "m5" && (
                <div
                  style={{
                    position: "absolute",
                    left: 160,
                    top: "60%",
                    zIndex: 20,
                  }}
                >
                  <MessageMenuWithSubmenu variant="received" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Composer (DS Single Line Composer, empty) */}
        <div
          style={{
            padding: "var(--cometchat-spacing-3) var(--cometchat-spacing-6)",
            background: "var(--cometchat-background-color-02)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid var(--cometchat-border-color-default)",
              borderRadius: "var(--cometchat-radius-2)",
              background: "var(--cometchat-background-color-01)",
            }}
          >
            <div
              style={{
                padding: "var(--cometchat-spacing-3)",
                fontSize: 14,
                color: "var(--cometchat-text-color-placeholder)",
                cursor: "text",
              }}
            >
              Type your message...
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--cometchat-spacing-3)",
                padding:
                  "var(--cometchat-spacing-1-5) var(--cometchat-spacing-3)",
                borderTop: "1px solid var(--cometchat-border-color-light)",
                color: "var(--cometchat-icon-color-tertiary)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--cometchat-spacing-1)",
                  flex: 1,
                }}
              >
                {["add_circle", "mic", "mood", "note"].map((g) => (
                  <button key={g} className="ma-icon-btn" aria-label={g}>
                    <MIcon glyph={g} size={20} />
                  </button>
                ))}
                <button className="ma-icon-btn" aria-label="Formatting">
                  <span
                    style={{ fontSize: 15, fontWeight: 600, lineHeight: 1 }}
                  >
                    Aa
                  </span>
                </button>
                <button className="ma-icon-btn" aria-label="AI features">
                  <MIcon glyph="magic_button" size={18} />
                </button>
              </div>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "var(--cometchat-radius-max)",
                  background: "var(--cometchat-background-color-03)",
                  color: "var(--cometchat-icon-color-disabled)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MIcon glyph="send" size={18} fill />
              </div>
            </div>
          </div>
        </div>

        {/* Toast */}
        {toast && (
          <div
            style={{
              position: "absolute",
              bottom: "var(--cometchat-spacing-5)",
              zIndex: 30,
              ...(toastPos === "left"
                ? { left: "var(--cometchat-spacing-5)" }
                : toastPos === "right"
                  ? { right: "var(--cometchat-spacing-5)" }
                  : { left: "50%", transform: "translateX(-50%)" }),
            }}
          >
            <Toast message={toast} duration={0} />
          </div>
        )}
      </div>

      {/* Pinned Messages panel */}
      {panel && (
        <PinnedPanel
          itemMenu={panelItemMenu}
          menuOnReceived={panelMenuOnReceived}
          afterUnpin={panelAfterUnpin}
        />
      )}

      {/* Modal */}
      {modal === "pin-convo" && (
        <PinDialog
          title="Pin Conversation"
          description="Do you want to pin this conversation?"
          confirmLabel="Pin"
        />
      )}
      {modal === "unpin-convo" && (
        <PinDialog
          title="Unpin Conversation"
          description="Do you want to unpin this conversation?"
          confirmLabel="Unpin"
        />
      )}
      {modal === "pin-msg" && (
        <PinDialog
          title="Pin Message"
          description="Do you want to pin this message to this conversation?"
          confirmLabel="Pin"
        />
      )}
      {modal === "unpin-msg" && (
        <PinDialog
          title="Unpin Message"
          description="Do you want to unpin this message from this conversation?"
          confirmLabel="Unpin"
        />
      )}
    </div>
  );
}

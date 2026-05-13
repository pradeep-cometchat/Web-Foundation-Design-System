import { useState } from "react";
import "./EmojiKeyboard.css";

export type EmojiCategory =
  | "recents"
  | "smileys"
  | "animals"
  | "food"
  | "activity"
  | "travel"
  | "objects"
  | "symbols"
  | "flags";

export interface EmojiKeyboardProps {
  /** Whether the keyboard is visible */
  open?: boolean;
  /** Currently active category */
  activeCategory?: EmojiCategory;
  /** Callback when an emoji is selected */
  onEmojiSelect?: (emoji: string) => void;
  /** Callback when closed */
  onClose?: () => void;
}

const categoryLabels: Record<EmojiCategory, string> = {
  recents: "Recently Used",
  smileys: "Smiley & People",
  animals: "Animals & Nature",
  food: "Food & Drink",
  activity: "Activity",
  travel: "Travel & Places",
  objects: "Objects",
  symbols: "Symbols",
  flags: "Flags",
};

const emojiData: Record<EmojiCategory, string[]> = {
  recents: ["😀", "😂", "❤️", "👍", "🎉", "🔥", "😍", "🙏", "😊", "💯"],
  smileys: [
    "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃",
    "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "😚", "😙",
    "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔",
    "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥",
    "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮",
    "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐",
  ],
  animals: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🐔", "🐧", "🐦", "🐤", "🦆"],
  food: ["🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥬"],
  activity: ["⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🥏", "🎱", "🏓", "🏸", "🏒", "🏑", "🥍", "🏏", "🥅", "⛳", "🏹", "🎣"],
  travel: ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "🚐", "🛻", "🚚", "🚛", "🚜", "🏍️", "🛵", "🚲", "🛴", "🛹", "🚁"],
  objects: ["⌚", "📱", "💻", "⌨️", "🖥️", "🖨️", "🖱️", "🖲️", "🕹️", "🗜️", "💾", "💿", "📀", "📼", "📷", "📸", "📹", "🎥", "📽️", "🎞️"],
  symbols: ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "☮️"],
  flags: ["🏁", "🚩", "🎌", "🏴", "🏳️", "🏳️‍🌈", "🏳️‍⚧️", "🇺🇸", "🇬🇧", "🇫🇷", "🇩🇪", "🇯🇵", "🇰🇷", "🇨🇳", "🇮🇳", "🇧🇷", "🇨🇦", "🇦🇺", "🇮🇹", "🇪🇸"],
};

export function EmojiKeyboard({
  open = true,
  activeCategory = "smileys",
  onEmojiSelect,
}: EmojiKeyboardProps) {
  const [category, setCategory] = useState<EmojiCategory>(activeCategory);

  if (!open) return null;

  const emojis = emojiData[category];

  return (
    <div className="emoji-keyboard">
      {/* Header + Search */}
      <div className="emoji-keyboard__header">
        <span className="emoji-keyboard__category-label">{categoryLabels[category]}</span>
        <div className="emoji-keyboard__search">
          <svg className="emoji-keyboard__search-icon" viewBox="0 0 24 24" fill="none">
            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
          </svg>
          <span className="emoji-keyboard__search-text">Search</span>
        </div>
      </div>

      {/* Emoji grid */}
      <div className="emoji-keyboard__grid">
        {emojis.map((emoji, i) => (
          <button
            key={i}
            type="button"
            className="emoji-keyboard__emoji"
            onClick={() => onEmojiSelect?.(emoji)}
            aria-label={emoji}
          >
            {emoji}
          </button>
        ))}
      </div>

      {/* Category tabs */}
      <div className="emoji-keyboard__tabs">
        {(Object.keys(categoryLabels) as EmojiCategory[]).map((cat) => (
          <button
            key={cat}
            type="button"
            className={`emoji-keyboard__tab ${category === cat ? "emoji-keyboard__tab--active" : ""}`}
            onClick={() => setCategory(cat)}
            aria-label={categoryLabels[cat]}
          >
            <span className="emoji-keyboard__tab-icon">{categoryIcons[cat]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const categoryIcons: Record<EmojiCategory, string> = {
  recents: "🕐",
  smileys: "😀",
  animals: "🐻",
  food: "🍔",
  activity: "⚽",
  travel: "✈️",
  objects: "💡",
  symbols: "❤️",
  flags: "🏁",
};

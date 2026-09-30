import React from "react";
import { initialOf, useLanguage, useT } from "../../cometchat-foundation/localization";
import { UserItem, UserItemDivider } from "../components/ListItem";

export type AlphabetUser = { name: string; avatarUrl: string };

const arabic = new Intl.Collator("ar");

/** Alef with or without hamza is one letter for indexing, as in Arabic contact lists. */
const sectionLetter = (displayed: string) => {
  const c = initialOf(displayed);
  return /[اأإآ]/.test(c) ? "أ" : c.toUpperCase();
};

/**
 * Users under letter dividers. English keeps the authored order and letters.
 * In Arabic the translated names are what the reader sees, so they are
 * re-sorted with Arabic collation and grouped by their Arabic first letter —
 * grouping by the English letters left "كريم" under C ahead of "داوود" under D.
 */
export function AlphabetSections({ users }: { users: AlphabetUser[] }) {
  const isArabic = useLanguage() === "ar";
  const t = useT();
  const shown = (u: AlphabetUser) => (isArabic ? t(u.name) : u.name);
  const rows = isArabic ? [...users].sort((a, b) => arabic.compare(shown(a), shown(b))) : users;

  const groups: { letter: string; users: AlphabetUser[] }[] = [];
  for (const u of rows) {
    const letter = sectionLetter(shown(u));
    const last = groups[groups.length - 1];
    if (last?.letter === letter) last.users.push(u);
    else groups.push({ letter, users: [u] });
  }

  return (
    <>
      {groups.map((g) => (
        <React.Fragment key={g.letter}>
          <UserItemDivider label={g.letter} />
          {g.users.map((u) => (
            <UserItem key={u.name} avatarUrl={u.avatarUrl} title={u.name} />
          ))}
        </React.Fragment>
      ))}
    </>
  );
}

/** A lone divider demo: the first letter of the alphabet in the active language. */
export function FirstLetterDivider() {
  return <UserItemDivider label={useLanguage() === "ar" ? "أ" : "A"} />;
}

export const DECK_CHANGE = 'portfolio:deck-change';
export const DECK_GOTO = 'portfolio:deck-goto';

export function gotoSection(id) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(DECK_GOTO, { detail: id }));
}

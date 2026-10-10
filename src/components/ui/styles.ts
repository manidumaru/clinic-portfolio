/** Lift + shadow on hover; children can react via `group-hover/card:`. */
export const cardHover =
  "group/card transition-[transform,box-shadow,border-color] duration-350 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1 hover:border-[#BFDCDE] hover:shadow-[0_22px_44px_-24px_rgba(22,40,43,.28)]";

/** Arrow that nudges right when its parent button or card is hovered. */
export const arrowNudge =
  "transition-transform duration-250 group-hover/btn:translate-x-1 group-hover/card:translate-x-1";

/** Card surface used by the contact info tiles. */
export const tile = "rounded-[20px] border border-line bg-white p-5";

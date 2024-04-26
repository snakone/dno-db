import { DNO_CLASSES, DNO_ITEM_PIECE_TYPE, DNO_ITEM_SETS } from "./types/enums";

export const DNO_SET_LIST = returnListFromEnum(DNO_ITEM_SETS);
export const DNO_CLASS_LIST = returnListFromEnum(DNO_CLASSES);
export const DNO_ITEM_PIECE_LIST = returnListFromEnum(DNO_ITEM_PIECE_TYPE);

type EnumTypes = typeof DNO_ITEM_SETS | typeof DNO_CLASSES | typeof DNO_ITEM_PIECE_TYPE;

function returnListFromEnum(value: EnumTypes) {
  return Object.entries(value).map(([key, value]) => ({key, label: value}));
}
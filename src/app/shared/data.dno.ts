import { SimpleItem } from "@typed/interfaces";
import { DNO_ITEM_SETS, DNO_CLASSES, DNO_ITEM_PIECE_TYPE, BINARY_LIST } from "./types/enums";

export const DNO_SET_LIST = returnListFromEnum(DNO_ITEM_SETS);
export const DNO_CLASS_LIST = returnListFromEnum(DNO_CLASSES);
export const DNO_ITEM_PIECE_LIST = returnListFromEnum(DNO_ITEM_PIECE_TYPE);
export const DNO_BINARY_LIST = returnListFromEnum(BINARY_LIST);

type EnumTypes = typeof DNO_ITEM_SETS | 
                 typeof DNO_CLASSES | 
                 typeof DNO_ITEM_PIECE_TYPE | 
                 typeof BINARY_LIST;

function returnListFromEnum(value: EnumTypes): SimpleItem[] {
  return Object.entries(value).filter(([key, _]) => key !== 'NONE').map(([key, value]) => ({ key, label: value }));
}
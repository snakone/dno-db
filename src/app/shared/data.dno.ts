import { SimpleItem } from "@typed/interfaces";
import { DNO_ITEM_SETS, DNO_CLASSES, DNO_ITEM_PIECE_TYPE, BINARY_LIST } from "./types/enums";
import { SWITCH_LEGEND_SETS_PIECE_BY_CLASS, SWITCH_SETS, SWITCH_SETS_PIECE_BY_CLASS } from "./classes.data";

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

function generateSetEntries(classKey: DNO_CLASSES, sets: DNO_ITEM_SETS[]): Record<string, any> {
  return sets.reduce((acc, set) => {
    const isLegendary = set.toString().includes('Legend');
    acc[set] = getSetNamesByClass(set, classKey, isLegendary);
    return acc;
  }, {} as Record<string, any>);
}

export const SET_PIECES_BY_CLASS = Object.values(DNO_CLASSES).reduce((acc, className) => {
  acc[className] = generateSetEntries(className, Object.values(DNO_ITEM_SETS));
  return acc;
}, {} as Record<string, any>);

function getSetNamesByClass(set: DNO_ITEM_SETS, className: any, legend = false): Object {
  const keys: {[key: string]: string} = {};
  const prefix: string = SWITCH_SETS[set];
  const pieces = legend ? SWITCH_LEGEND_SETS_PIECE_BY_CLASS[className] : SWITCH_SETS_PIECE_BY_CLASS[className];

  if(!!pieces) {
    Object.keys(pieces).forEach(key => {
      keys[key] = `${prefix} ${pieces[key]}`
    });
  }

  return keys;
}
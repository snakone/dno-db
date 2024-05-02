import { Calculation } from "@shared/types/classes"
import { BINARY_LIST, DNO_ITEM_RARITY, ENHANCEMENT_RESULT, UPGRADE_LEVELS } from "@shared/types/enums";
import { CalculationProps, CalculationResult } from "@shared/types/interfaces";

export const switchGradeRate: Record<DNO_ITEM_RARITY, Partial<Record<UPGRADE_LEVELS, number>>> = {
  [DNO_ITEM_RARITY.NORMAL]: {4: 80, 5: 60, 6: 50, 7: 45, 8: 40, 9: 35, 10: 30, 11: 25, 12: 20, 13: 10, 14: 5, 15: 1},
  [DNO_ITEM_RARITY.MAGIC]: {4: 80, 5: 60, 6: 50, 7: 45, 8: 40, 9: 35, 10: 30, 11: 25, 12: 20, 13: 10, 14: 5, 15: 1},
  [DNO_ITEM_RARITY.RARE]: {4: 80, 5: 60, 6: 50, 7: 45, 8: 40, 9: 35, 10: 30, 11: 25, 12: 20, 13: 10, 14: 5, 15: 1},
  [DNO_ITEM_RARITY.EPIC]: {7: 45, 8: 40, 9: 35, 10: 30, 11: 25, 12: 20, 13: 15, 14: 10, 15: 5},
  [DNO_ITEM_RARITY.UNIQUE]: {7: 13.75, 8: 15, 9: 16.25, 10: 17.5, 11: 18.75, 12: 20, 13: 21.21, 14: 23, 15: 25},
  [DNO_ITEM_RARITY.LEGEND]: {7: 33.33, 8: 33.33, 9: 33.33, 10: 33.33, 11: 33.33, 12: 33.33, 13: 33.33, 14: 33.33, 15: 79.99},
}

export const switchBreakRate: Record<DNO_ITEM_RARITY, Partial<Record<UPGRADE_LEVELS, number>>> = {
  [DNO_ITEM_RARITY.NORMAL]: {7: 25, 8: 25, 9: 25, 10: 25, 11: 25, 12: 25, 13: 25, 14: 25, 15: 25},
  [DNO_ITEM_RARITY.MAGIC]: {7: 25, 8: 25, 9: 25, 10: 25, 11: 25, 12: 25, 13: 25, 14: 25, 15: 25},
  [DNO_ITEM_RARITY.RARE]: {7: 25, 8: 25, 9: 25, 10: 25, 11: 25, 12: 25, 13: 25, 14: 25, 15: 25},
  [DNO_ITEM_RARITY.EPIC]: {7: 25, 8: 25, 9: 25, 10: 25, 11: 25, 12: 25, 13: 25, 14: 25, 15: 25},
  [DNO_ITEM_RARITY.UNIQUE]: {7: 13.75, 8: 15, 9: 16.25, 10: 17.5, 11: 18.75, 12: 20, 13: 21.21, 14: 23, 15: 25},
  [DNO_ITEM_RARITY.LEGEND]: {7: 33.33, 8: 33.33, 9: 33.33, 10: 33.33, 11: 33.33, 12: 33.33, 13: 33.33, 14: 33.33, 15: 79.99},
}

export const switchDecreaseRate: Record<DNO_ITEM_RARITY, Partial<Record<UPGRADE_LEVELS, number>>> = {
  [DNO_ITEM_RARITY.NORMAL]: {7: 35, 8: 35, 9: 35, 10: 35, 11: 35, 12: 35, 13: 35, 14: 35, 15: 35},
  [DNO_ITEM_RARITY.MAGIC]: {7: 35, 8: 35, 9: 35, 10: 35, 11: 35, 12: 35, 13: 35, 14: 35, 15: 35},
  [DNO_ITEM_RARITY.RARE]: {7: 35, 8: 35, 9: 35, 10: 35, 11: 35, 12: 35, 13: 35, 14: 35, 15: 35},
  [DNO_ITEM_RARITY.EPIC]: {7: 25, 8: 35, 9: 35, 10: 35, 11: 35, 12: 35, 13: 35, 14: 35, 15: 35},
  [DNO_ITEM_RARITY.UNIQUE]: {7: 25, 8: 35, 9: 35, 10: 35, 11: 35, 12: 35, 13: 35, 14: 35, 15: 35},
  [DNO_ITEM_RARITY.LEGEND]: {11: 33.33, 12: 33.33, 13: 33.33, 14: 33.33, 15: 79.99},
}

export const switchDowngradeRate: Record<DNO_ITEM_RARITY, Partial<Record<UPGRADE_LEVELS, number[]>>> = {
  [DNO_ITEM_RARITY.NORMAL]: {7: [0, 1], 8: [0, 2], 9: [0, 2], 10: [1, 2], 11: [1, 2], 12: [1, 2], 13: [1, 2], 14: [1, 2], 15: [1, 2]},
  [DNO_ITEM_RARITY.MAGIC]: {7: [0, 1], 8: [0, 2], 9: [0, 2], 10: [1, 2], 11: [1, 2], 12: [1, 2], 13: [1, 2], 14: [1, 2], 15: [1, 2]},
  [DNO_ITEM_RARITY.RARE]: {7: [0, 1], 8: [0, 2], 9: [0, 2], 10: [1, 2], 11: [1, 2], 12: [1, 2], 13: [1, 2], 14: [1, 2], 15: [1, 2]},
  [DNO_ITEM_RARITY.EPIC]: {7: [0, 1], 8: [0, 2], 9: [0, 2], 10: [1, 2], 11: [1, 2], 12: [1, 2], 13: [1, 2], 14: [1, 2], 15: [1, 2]},
  [DNO_ITEM_RARITY.UNIQUE]: {7: [0, 1], 8: [0, 2], 9: [0, 2], 10: [1, 2], 11: [1, 2], 12: [1, 2], 13: [1, 2], 14: [1, 2], 15: [1, 2]},
  [DNO_ITEM_RARITY.LEGEND]: {7: [0, 1], 8: [0, 2], 9: [0, 2], 10: [1, 2], 11: [1, 2], 12: [1, 2], 13: [1, 2], 14: [1, 2], 15: [1, 2]},
}

export function calculate(props: CalculationProps): CalculationResult {
  let totalFails = 0;
  let totalSuccess = 0;
  let totalBreaks = 0;
  let totalDecreases = 0;
  let currentLevel = props.from as UPGRADE_LEVELS;
  let nextLevel = props.from + 1 as UPGRADE_LEVELS;
  const tries: any[] = [];
  let enhancementResult: ENHANCEMENT_RESULT | undefined;

  while (nextLevel <= props.to) {
    const random = Math.ceil(Math.random() * 100);
    let decreaseAmount = 0;
    //BREAK
    if(props.jellies === BINARY_LIST.NO) {
      const breakRate = getRateFromBreak(nextLevel as UPGRADE_LEVELS, props.rarity);
      if(breakRate !== 0) {
        if(random < breakRate) {
          totalBreaks++;
          enhancementResult = ENHANCEMENT_RESULT.BREAK;
          break;
        }
      }
    }

    const rate = getRateFromGrade(nextLevel as UPGRADE_LEVELS, props.rarity);

    if (random < rate) {
      nextLevel++;
      totalSuccess++;
      enhancementResult = ENHANCEMENT_RESULT.SUCCESS;
    } else {
      const decreaseRate = getRateFromDecrease(nextLevel as UPGRADE_LEVELS, props.rarity);
      const randomDecrease = Math.ceil(Math.random() * 100);

      const decreaseArray = getRateFromDowngrade(nextLevel as UPGRADE_LEVELS, props.rarity);
      decreaseAmount = getRandomNumberFromArray(decreaseArray);

      if(randomDecrease <= decreaseRate && decreaseAmount !== 0) {
        nextLevel = nextLevel - decreaseAmount;
        totalDecreases++;
        enhancementResult = ENHANCEMENT_RESULT.DECREASE;
      } else {
        totalFails++;
        decreaseAmount = 0;
        enhancementResult = ENHANCEMENT_RESULT.FAIL;
      }
    }

    tries.push({
      from: currentLevel,
      to: currentLevel + 1,
      result: enhancementResult,
      decrease: decreaseAmount
    });

    enhancementResult = undefined;
  }

  console.log(tries)

  return {
    totalFails,
    totalSuccess,
    totalBreaks,
    totalDecreases
  } satisfies CalculationResult
}

function getRateFromGrade(grade: UPGRADE_LEVELS, rarity: DNO_ITEM_RARITY): number {
  return switchGradeRate[rarity][grade] || 100;
}

function getRateFromBreak(grade: UPGRADE_LEVELS, rarity: DNO_ITEM_RARITY): number {
  return switchBreakRate[rarity][grade] || 0;
}

function getRateFromDecrease(grade: UPGRADE_LEVELS, rarity: DNO_ITEM_RARITY): number {
  return switchDecreaseRate[rarity][grade] || 0;
}

function getRateFromDowngrade(grade: UPGRADE_LEVELS, rarity: DNO_ITEM_RARITY): number[] {
  return switchDowngradeRate[rarity][grade] || [0];
}

function getRandomNumberFromArray(arr: number[]): number {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
import { Calculation } from "@shared/types/classes"
import { BINARY_LIST, DNO_ITEM_RARITY, ENHANCEMENT_RESULT, UPGRADE_LEVELS } from "@shared/types/enums";
import { CalculationProps, CalculationResult, DNO_EnhancementItem, EnhancementTry } from "@shared/types/interfaces";

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

export const switchDowngradeRate: Record<DNO_ITEM_RARITY, Partial<Record<UPGRADE_LEVELS, number[]>>> = {
  [DNO_ITEM_RARITY.NORMAL]: {7: [0, 1, 1], 8: [0, 1, 1, 2], 9: [0, 1, 1, 2], 10: [1, 2], 11: [1, 2], 12: [1, 2], 13: [1, 2], 14: [1, 2], 15: [1, 2]},
  [DNO_ITEM_RARITY.MAGIC]: {7: [0, 1, 1], 8: [0, 1, 1, 2], 9: [0, 1, 1, 2], 10: [1, 2], 11: [1, 2], 12: [1, 2], 13: [1, 2], 14: [1, 2], 15: [1, 2]},
  [DNO_ITEM_RARITY.RARE]: {7: [0, 1, 1], 8: [0, 1, 1, 2], 9: [0, 1, 1, 2], 10: [1, 2], 11: [1, 2], 12: [1, 2], 13: [1, 2], 14: [1, 2], 15: [1, 2]},
  [DNO_ITEM_RARITY.EPIC]: {7: [0, 1, 1], 8: [0, 1, 1, 2], 9: [0, 1, 1, 2], 10: [1, 2], 11: [1, 2], 12: [1, 2], 13: [1, 2], 14: [1, 2], 15: [1, 2]},
  [DNO_ITEM_RARITY.UNIQUE]: {7: [0, 1, 1], 8: [0, 1, 1, 2], 9: [0, 1, 1, 2], 10: [1, 2], 11: [1, 2], 12: [1, 2], 13: [1, 2], 14: [1, 2], 15: [1, 2]},
  [DNO_ITEM_RARITY.LEGEND]: {11: [1], 12: [1], 13: [1], 14: [1], 15: [1]},
}

export function calculate(props: CalculationProps, arr: DNO_EnhancementItem[]): CalculationResult {
  let totalFails = 0;
  let totalSuccess = 0;
  let totalBreaks = 0;
  let totalDecreases = 0;
  let totalTries = 0;
  let currentLevel = props.from as UPGRADE_LEVELS;
  let nextLevel = props.from + 1 as UPGRADE_LEVELS;
  let enhancementResult: ENHANCEMENT_RESULT = ENHANCEMENT_RESULT.NONE;
  let decreaseAmount = 0;
  const tries: EnhancementTry[] = [];

  function handleFailure() {
    totalFails++;
    decreaseAmount = 0;
    enhancementResult = ENHANCEMENT_RESULT.FAIL;
  }

  while (nextLevel <= props.to) {
    totalTries++;
    const random = Math.floor(Math.random() * 100);
    decreaseAmount = 0;
    currentLevel = nextLevel - 1;
    const rate = getRateFromGrade(nextLevel as UPGRADE_LEVELS, props.rarity);
    // SUCCESS
    if (random <= rate) {
      nextLevel++;
      totalSuccess++;
      enhancementResult = ENHANCEMENT_RESULT.SUCCESS;
    } else {
      //BREAK
      const breakRate = getRateFromBreak(nextLevel as UPGRADE_LEVELS, props.rarity);
      if(breakRate === 0) {
        handleFailure();
      } else {
        const randomBreak = Math.floor(Math.random() * 100);
        if(randomBreak <= breakRate) {
          if(props.jellies === BINARY_LIST.NO) {
            totalBreaks++;
            tries.push({
              from: currentLevel as UPGRADE_LEVELS,
              to: currentLevel + 1 as UPGRADE_LEVELS,
              result: ENHANCEMENT_RESULT.BREAK,
              decrease: 0
            });
            break;
          } else {
            const decreaseArray = getRateFromDowngrade(nextLevel as UPGRADE_LEVELS, props.rarity);
            decreaseAmount = selectFromUniformDistribution(decreaseArray);
            // DECREASE
            if(decreaseAmount !== 0) {
              nextLevel -= decreaseAmount;
              totalDecreases++;
              enhancementResult = ENHANCEMENT_RESULT.DECREASE;
            // FAILED
            } else {
              handleFailure();
            }
          }
        } else {
          handleFailure();
        }
      }
    }

    tries.push({
      from: currentLevel as UPGRADE_LEVELS,
      to: currentLevel + 1 as UPGRADE_LEVELS,
      result: enhancementResult,
      decrease: decreaseAmount,
    });

    enhancementResult = ENHANCEMENT_RESULT.NONE;
  }

  return {
    totalFails,
    totalSuccess,
    totalBreaks,
    totalDecreases,
    totalTries,
    tries
  } satisfies CalculationResult
}

function selectFromUniformDistribution<T>(array: T[]): T {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function getRateFromGrade(grade: UPGRADE_LEVELS, rarity: DNO_ITEM_RARITY): number {
  return switchGradeRate[rarity][grade] || 100;
}

function getRateFromBreak(grade: UPGRADE_LEVELS, rarity: DNO_ITEM_RARITY): number {
  return switchBreakRate[rarity][grade] || 0;
}

function getRateFromDowngrade(grade: UPGRADE_LEVELS, rarity: DNO_ITEM_RARITY): number[] {
  return switchDowngradeRate[rarity][grade] || [0];
}

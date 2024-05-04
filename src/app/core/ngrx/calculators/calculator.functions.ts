import { BINARY_LIST, ENHANCEMENT_RESULT, UPGRADE_LEVELS } from "@shared/types/enums";
import { CalculationProps, CalculationResult, DNO_EnhancementItem, DNO_EnhancementItemMaterials, EnhancementTry } from "@shared/types/interfaces";

export function calculate(props: CalculationProps, item: DNO_EnhancementItem): CalculationResult {
  let totalFails = 0;
  let totalSuccess = 0;
  let totalBreaks = 0;
  let totalDecreases = 0;
  let totalTries = 0;
  let currentLevel = props.from as UPGRADE_LEVELS;
  let nextLevel = props.from + 1 as UPGRADE_LEVELS;
  let enhancementResult: ENHANCEMENT_RESULT = ENHANCEMENT_RESULT.NONE;
  let decreaseAmount = 0;
  let totalMaterials: DNO_EnhancementItemMaterials = {};
  const tries: EnhancementTry[] = [];

  function handleFailure(): void {
    totalFails++;
    decreaseAmount = 0;
    enhancementResult = ENHANCEMENT_RESULT.FAIL;
  }

  while (nextLevel <= props.to) {
    const details = item.Details.find(detail => detail.EnchantLevel === nextLevel);
    if(details) {
      totalTries++;
      addMaterials(totalMaterials, {...details.Materials, Gold: getDiscountGold(details.Gold, props.friendship)});
      const random = Math.floor(Math.random() * 100);
      decreaseAmount = 0;
      currentLevel = nextLevel - 1;
      // SUCCESS
      if (random <= details?.EnchantRatio) {
        nextLevel++;
        totalSuccess++;
        enhancementResult = ENHANCEMENT_RESULT.SUCCESS;
      } else {
        //BREAK
        const breakRate = details.BreakRatio;
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
              const decreaseArray = createRange(details.MinDowngrade, details.MaxDowngrade);
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
    }
    
    tries.push({
      from: currentLevel as UPGRADE_LEVELS,
      to: currentLevel + 1 as UPGRADE_LEVELS,
      result: enhancementResult,
      decrease: decreaseAmount,
      materials: {...details?.Materials, Gold: getDiscountGold(details?.Gold, props.friendship)},
      stats: details?.Stats
    });

    enhancementResult = ENHANCEMENT_RESULT.NONE;
  }

  return {
    totalFails,
    totalSuccess,
    totalBreaks,
    totalDecreases,
    totalTries,
    totalMaterials,
    tries
  } satisfies CalculationResult
}

function selectFromUniformDistribution<T>(array: T[]): T {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function addMaterials(
  current: DNO_EnhancementItemMaterials,
  newMats: DNO_EnhancementItemMaterials | undefined
): void {
  if(newMats == undefined) return;
  for (const key in newMats) {
    const materialKey = key as keyof DNO_EnhancementItemMaterials;
    if (newMats[materialKey] !== undefined) {
      if (current[materialKey]) {
        current[materialKey]! += newMats[materialKey]!;
      } else {
        current[materialKey] = newMats[materialKey];
      }
    }
  }
}

function getDiscountGold(gold: number = 0, friendship: BINARY_LIST): number {
  if(friendship === BINARY_LIST.YES) {
    return gold / 2;
  }

  return gold;
}

function createRange(min: number, max: number): number[] {
  const result: number[] = [];
  for (let i = min; i <= max; i++) {
      result.push(i);
  }
  return result;
}

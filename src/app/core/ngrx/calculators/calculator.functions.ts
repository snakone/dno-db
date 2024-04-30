import { Calculation } from "@shared/types/classes"
import { UPGRADE_LEVELS } from "@shared/types/enums";
import { CalculationResult } from "@shared/types/interfaces";

export const switchGrade: Partial<Record<UPGRADE_LEVELS, number>> = {
  7: 45, 8: 40, 9: 35, 10: 30, 11: 25, 12: 20, 13: 15, 14: 10, 15: 5
}

export function calculate(calculation: Calculation): CalculationResult {
  let totalFails = 0;
  let totalSuccess = 0;
  let nextLevel = calculation.from + 1 as UPGRADE_LEVELS;

  while (nextLevel <= calculation.to) {
    const rate = getRateFromGrade(nextLevel);
    const random = Math.ceil(Math.random() * 100);
    if (random <= rate) {
      nextLevel++;
      totalSuccess++;
    } else {
      totalFails++;
    }
  }

  return {
    totalFails,
    totalSuccess
  } as CalculationResult
}

function getRateFromGrade(grade: UPGRADE_LEVELS): number {
  if (Number(grade) <= 6) {
    return 100;
  }
  return switchGrade[grade] || 100;
}
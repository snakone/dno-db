export function getRatioColor(ratio: number = 0): string {
  if(ratio <= 15) { return 'crimson'; }
  else if(ratio > 15 && ratio <= 35) { return 'chocolate'; }
  else if(ratio > 25 && ratio <= 65) { return 'darkcyan' }
  else if(ratio > 65 && ratio < 100) { return 'darkslategray' }
  return 'chartreuse';
}
export function sum(a: number, b: number): number {
  return a + b;
}

export function isEven(a: number): boolean {
  return a % 2 === 0 ? true : false;
}

//union type
export function sumOrConcut(
  a: number | string,
  b: number | string,
): number | string {
  if (typeof a === "string" || typeof b === "string") {
    return `${a} ${b}`;
  }
  return a + b;
}

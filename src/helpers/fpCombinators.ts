// fork :: ((B, C) => D, A -> B, A -> C) -> A -> D
export const fork = (join: Function, fn1: Function, fn2: Function) => (val: any) => join(fn1(val), fn2(val));

export default fork;

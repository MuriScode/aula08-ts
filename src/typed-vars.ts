// type inference
let v1:number = 10;
const v2 = ['hello', 'world'];
const v3 = [true, 'hello', 10];

// explicit typing
const v5: number[] = [1, 2, 3, 4];
// v5 = ['a'];
const v6: (number | boolean)[] = [true, 10, false, 20];

// imutable array
const v7: readonly number[] = [1, 2, 3];
// v7[1] = 10;

// any is used for JS compatibity
let v8: any = 10;
v8 = 'a';
v8 = false;
export {}

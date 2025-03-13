function squareOf(n: number):number {
    return n * n;
}

let squareOf2: (n: number) => number;
squareOf2 = (n: number) => n * n;

type Add = (a: number, b: number) => number;
const sum: Add = function (a: number, b: number) {
    return a + b;
}

// const concat: Add = function (a: string, b: string) {
//     return a + b;
// }

// optional parameters
const add = function (x: number, y: number, z?: number) {
    return x + y + (z ? z : 0);
}

const add2 = function (x: number, y: number, z: number = 0) {
    return x + y + z;
}

// function overload
function add3(a: number, b?: number): number;
function add3(a: string, b?: number): string;
function add3(a: number, b?: string): string;
function add3(a: string, b?: string): string;
function add3(a: number[]): number;

function add3(a: number | string | number[], b?: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (Array.isArray(a)) {
        return a.reduce((acc, elem) => {return acc + elem}, 0);
    }
    else {
        return String(a) + String(b);
    }
}
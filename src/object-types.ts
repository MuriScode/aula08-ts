// structural type
let o1: {p1: number, p2: string};

o1 = {
    p1: 10,
    p2: "hello"
};

// o1 = {
//     p1: 20,
//     p2: false
// };

// optional properties
let o2: {
    p1: number,
    p2?: string
};

o2 = {
    p1: 30
};

o2 = {
    p1: 40,
    p2: "hello"
};

// imutable properties
let o3: {
    readonly p1: number,
    p2: string
};

o3 = {
    p1: 50,
    p2: "ufabc"
};

// o3.p1 = 60;
o3.p2 = 'UFABC';

export {}

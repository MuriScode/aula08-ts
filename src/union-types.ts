type Campus = 'SA' | 'SBC';

let c: Campus = "SA";
c = "SBC";
// c = "Mauá";

type StatusCode = 200 | 404 | 500;

let status: StatusCode = 200;
status = 404;
status = 500;

type CampusImpossible = 'SA' & 'SBC';
let c1: CampusImpossible;
// c1 = 'SA'
// c1 = 'SBC'

type Circle = {
    radius: number;
}

type Square = {
    side: number;
}

type Triangle = {
    base: number,
    height: number
}
type Shape = Circle | Square | Triangle;

const circle: Shape = {
    radius: 10
}
const square: Shape = {
    side: 10
}

const triangle: Shape = {
    base: 10,
    height: 5,
}

const s: Shape = {
    radius: 10,
    side: 20,
    base: 5,
    height: -1
}
export {}

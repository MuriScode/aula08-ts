type age = number;
type name = string;

const idade: age = 10;
const nomeCompleto: name = "João Silva";

type Person = {
    name: string,
    age: number
};

const p: Person = {
    name: "João Silva",
    age: 22
};

type Date = {
    day: number,
    month: number,
    year: number
};

const d1: Date = {
    day: 10,
    month: 3,
    year: 2025
};

export {Person, Date}
import { Person , Date} from "./type-alias";

type Student = Person & {
    registration: number,
    admission: Date
}

const s1: Student = {
    name: "João Silva",
    age: 10,
    registration: 201928248,
    admission: {
        day: 10,
        month: 2,
        year: 2011
    }
};

type BasicConfig = {
    theme: "light" | "dark",
    language: "en" | "pt-br"
}

type AdvancedConfig = {
    debugMode: boolean,
    logLevel: "info" | "warn" |"error"
}

type FullConfig = BasicConfig & AdvancedConfig;

const config: FullConfig = {
    theme: "dark",
    language: "en",
    debugMode: false,
    logLevel: "info"
}



export {}
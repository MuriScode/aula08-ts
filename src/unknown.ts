// unknown is an "undefined type" that is tested a priori before it is used
function f(p: unknown) {
    if (typeof p === "number") {
        return p + 1;
    }
    else if (typeof p === "string"){
        return p + "";
    }
}

export {}
const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};

function deepEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (a == null || typeof(a) != "object" ||
        b == null || typeof(b) != "object")
    {
        return false;
    }

    let propertiesInA = 0, propertiesInB = 0;
    for (let property in a) {
        propertiesInA += 1;
    }
    for (let property in b) {
        propertiesInB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property])) {
            return false;
        }
    }
    return propertiesInA === propertiesInB;
}

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
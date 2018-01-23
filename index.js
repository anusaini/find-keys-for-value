function findSingleValueInObject(obj, toFind, compare, whenFound) {
    find(obj, toFind, compare, whenFound)
}

function findValuesInObject(obj, toFind, compare, whenFound) {
    toFind.forEach(el => {
        find(obj, el, compare, whenFound)
    });
}

function find(obj, toFind, compare, whenFound, location) {
    const keys = Object.keys(obj)
    location = location || []
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i]
        location.push(k)
        const x = obj[k]
        if (compare(toFind, x)) {
            whenFound({
                loc: location.join('.'),
                val: toFind
            })
        } else if (typeof x === 'object') {
            find(x, toFind, compare, whenFound, location)
        }
        location.pop()
    }
}

module.exports = {
    findSingleValueInObject,
    findValuesInObject
}

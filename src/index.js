'use strict'

/**
 *
 * @param {*} obj - Object where you want to look for `toFind` value
 * @param {*} toFind - Value that you want to find in `obj` Object
 * @param {Function} compare - Compare function between object properties and `toFind` value
 * @param {Function} whenFound - Callback function that is invoked with `{ loc, val }` when `toFind` is found in `obj`
 */
const findValue = (obj, toFind, compare, whenFound) => {
    find(obj, toFind, compare, whenFound)
}

/**
 *
 * @param {*} obj - Object where you want to look for `toFind` value
 * @param {[*]} toFindArray - Array of values that you want to find in `obj` Object
 * @param {Function} compare - Compare function between object properties and `toFind` value
 * @param {Function} whenFound - Callback function that is invoked with `{ loc, val }` when `toFind` is found in `obj`
 */
const findValues = (obj, toFindArray, compare, whenFound) => {
    toFindArray = Array.isArray(toFindArray) ? toFindArray : [toFindArray]
    toFindArray.forEach(toFind => {
        findValue(obj, toFind, compare, whenFound)
    })
}

/**
 *
 * @param {*} obj - Object where you want to look for `toFind` value
 * @param {[*]} toFind - Array of values that you want to find in `obj` Object
 * @param {Function} compare - Compare function between object properties and `toFind` value
 * @param {Function} whenFound - Callback function that is invoked with `{ loc, val }` when `toFind` is found in `obj`
 * @param {[*]} location - Array for keeping track of key that is passed to `whenFound`.
 */
const find = (obj, toFind, compare, whenFound, location) => {
    compare = compare || ((a, b) => a === b)
    whenFound = whenFound || console.log.bind(console)
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
    findValue,
    findValues
}

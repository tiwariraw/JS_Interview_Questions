const s1 = new Set([1, 2, 3]);
const s2 = new Set([2, 3, 4]);

/********** union **********/

function union(set1, set2) {
    const output = new Set();

    for (const e of set1) {
        output.add(e);
    }

    for (const e of set2) {
        if (!output.has(e)) {
            output.add(e);
        }
    }

    return output;
}

const unionSet = union(s1, s2);
console.log(unionSet);

// OR

function unionNew(set1, set2) {
    return new Set([...set1, ...set2])
}

/********** intersection **********/
// The intersection of two sets is the set of elements that are common to both sets. In other words, it's the set of all elements that exist in both Set A and Set B.

function intersection(set1, set2) {
    const output = new Set();

    for (const e of set1) {
        if (set2.has(e)) {
            output.add(e);
        }
    }

    return output;
}

const intersectionSet = intersection(s1, s2);
console.log(intersectionSet);

// OR

function intersectionNew(set1, set2) {
    return new Set([...set1].filter(e => set2.has(e)));
}

/********** set difference **********/
// The set difference of two sets A and B, denoted by A - B, is a new set containing all the elements that are in set A but not in set B. In other words, it represents the elements unique to set A.

function difference(set1, set2) {
    const output = new Set();

    for (const e of set1) {
        if (!set2.has(e)) {
            output.add(e);
        }
    }

    return output;
}

const differenceSet = difference(s1, s2);
console.log(differenceSet);

// OR

function differenceNew(set1, set2) {
    return new Set([...set1].filter(e => !set2.has(e)));
}

/********** subset **********/
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([1, 2]);

function subset(set1, set2) {
    let isSubset = false;

    for (const e of set2) {
        if (!set1.has(e)) {
            return false;
        }
    }

    return true
}

const res = subset(set1, set2);
console.log(res);

// OR

function subsetNew(set1, set2) {
    return [...set2].every(e => set1.has(e))
}
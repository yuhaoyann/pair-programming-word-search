const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    let letters1 = [];
    for (let i = 0; i < letters[0].length; i++) {
        for (let j of letters) {
            letters1[i] = [];
            letters1[i].push(j[i]);
        }
    }
    const verticalJoin = letters1.map(ls => ls.join(''));
    for (let k of verticalJoin) {
        if (k.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch
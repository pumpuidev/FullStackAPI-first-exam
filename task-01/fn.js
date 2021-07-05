/**
 * 1. Objektumok tömbjéből egy elem kiválasztása az id alapján.
 * @param {Array} list egy objektumokat tartalmazó tömb
 * @param {Number} id az id, ami alapján keresünk a tömbben
 * @returns a tömbnek az az eleme, amelynek az id -je megegyezik a kapottal
 */
const get = (list = [], id = 0) => {
    // trivial
    return list.find( item => item.id === id );
};

/**
 * 2. Új objektum beszúrása a kapott tömbbe.
 * @param {Array} list egy objektumokat tartalmazó tömb
 * @param {*} entity egy objektum, amelyet be szeretnénk szúrni a tömbbe
 * @returns a létrehozott, beszúrt és id -vel ellátott objektum
 */
const create = (list = [], entity = null) => {
    // catching the index of the id enumerated from zero
    const id = list[list.length - 1].id + 1;
    // using spread operator
    const createUser = {...entity, id};
    // pushing element to the list
    list.push( createUser );
    return createUser;
};

/**
 * 3. Egy meglévő objektum frissítése a kapott tömbben.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns a frissített objektum ha sikerült a frissítés, egyébként false
 */
const update = (list = [], entity = {}) => {
    // throwing exceptions
    if (list.length < 1 || !entity.id) return false;
    // catching the first expected id
    const index = list.findIndex( item => item.id === entity.id );
    // using spread operator to expand
    list[index] = {...list[index], ...entity};
    return list[index];
};

/**
 * 4. Eltávolít a paraméterként kapott tömbből egy elemet az id alapján.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns true ha sikeres volt a törlés, egyébként false
 */
const remove = (list = [], id = 0) => {
    // throwing exceptions
    if (list.length < 1 || !id) return false;
    // catching the first expected id
    const index = list.findIndex( item => item.id === id );
    // changes the contents of an array by removing elements
    list.splice(index, 1);
    return true;
};

/**
 * 5. Exportáld ki a négy függvényt, hogy más fájlokból is elérhetőek legyenek.
 */
module.exports = {
    get,
    create,
    update,
    remove
};
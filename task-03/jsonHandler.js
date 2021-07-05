/**
 * 1. A fájlok kezeléséhez az fs modul promise alapú verzióját használd.
 */
const fsp = require('fs').promises;
const { join } = require('path');

/**
 * 2. Állítsd be az azonos mappában található .json fájl elérési útját a path 
 * modul join metódusának segítségével.
 */
 const jsonPath = join(__dirname, 'db', 'products.json');

 /**
  * 3. A jsonPath útvonalon található fájl tartalmát beolvassa és értelmezi, 
  * majd visszaadja a kapott tömböt.
  * @returns objektumok tömbje
  */
 const getList = async () => {
    // reading products.json as string
    const text = await fsp.readFile(jsonPath, 'utf8');
    // parsing string to array
    return JSON.parse(text);
 };

/**
 * 4. A kapott tömböt json formátumra alakítja és beleírja a jsonPath útvonalon 
 * található fájlba.
 * @param {Array} list objektumok tömbje
 * @returns 
 */
const saveList = async (list = []) => {
    // transforming array to string
    await fsp.writeFile(jsonPath, JSON.stringify(list, null, 4), 'utf8');
    return true;
};

/**
 * 5. Frissíti az id alapján kiválasztott entitást és visszaírja a .json fájlba.
 * A .json állomány írásához a saveList segédfüggvényt használd.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns a frissített objektum ha sikerült a frissítés, egyébként false
 */
const update = async (entity = {}) => {
    // using getlist method
    const list = await getList();
    // catching the first result of expected index
    const index = list.findIndex( item => item.id === entity.id );
    // using spread operator to expand in places
    list[index] = {...list[index], ...entity};
    // calling saveList method to list
    await saveList(list);
    return list[index];
};

module.exports = {
    update,
};

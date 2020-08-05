// const fs = require('fs').promises;
import { promises as fs } from 'fs';

init();

async function init() {
    await createFiles();
    
    /** 
    getCitiesCount('MG').then(resp => {
        console.log(resp);
    });
    // Ou
    console.log(await getCitiesCount('MG'));
    **/

    await getStatesWithMoreOrLessCities(true);
    await getStatesWithMoreOrLessCities(false);

    await getBiggerOrSmallerNameCities(true);
    await getBiggerOrSmallerNameCities(false);

    await getBiggerCityName(true);
    await getBiggerCityName(false);

}


async function createFiles() {
    let data = await fs.readFile('./../src/Estados.json');
    const states = JSON.parse(data);
    
    data = await fs.readFile('./../src/Cidades.json');
    const cities = JSON.parse(data);

    for(let state of states) {
        const stateCities = cities.filter(city => city.Estado === state.ID);
        await fs.writeFile(`./../temp/${state.Sigla}.json`, JSON.stringify(stateCities));
    }
}

async function getCitiesCount(uf) {
    const data = await fs.readFile(`./../temp/${uf}.json`);
    const cities = JSON.parse(data);

    return cities.length;
}

async function getStatesWithMoreOrLessCities(more) {
    let states = JSON.parse(await fs.readFile('./../src/Estados.json'));
    const result = [];
    const list = [];

    for (let state of states) {
        const count = await getCitiesCount(state.Sigla);
        list.push({ uf: state.Sigla, count });
    }

    list.sort((a, b) => {
        if (a.count < b.count) return 1;
        else if (a.count > b.count) return -1;
        return 0;
    });

    if (more) {
        list.slice(0, 5).forEach(item => result.push(`${item.uf} - ${item.count}`));
    } else {
        list.slice(-5).forEach(item => result.push(`${item.uf} - ${item.count}`));
    }

    console.log(result);
}

async function getBiggerOrSmallerNameCities(bigger) {
    let states = JSON.parse(await fs.readFile('./../src/Estados.json'));
    const result = [];

    for (let state of states) {
        if (bigger) {
            const city = await getBiggerName(state.Sigla);
            result.push(`${city.Nome} - ${state.Sigla}`);
        } else {
            const city = await getSmallerName(state.Sigla);
            result.push(`${city.Nome} - ${state.Sigla}`);
        }
    }

    console.log(result);
}

async function getBiggerName(uf) {
    const cities = JSON.parse(await fs.readFile(`./../temp/${uf}.json`));
    let result;

    cities.forEach(city => {
        if (!result) {
            result = city
        } else if (city.Nome.length > result.Nome.length) {
            result = city;
        } else if (city.Nome.length === result.Nome.length && city.Nome.toLowerCase() < result.Nome.toLowerCase()) {
            result = city;
        }
    });

    return result;
}

async function getSmallerName(uf) {
    const cities = JSON.parse(await fs.readFile(`./../temp/${uf}.json`));
    let result;

    cities.forEach(city => {
        if (!result) {
            result = city
        } else if (city.Nome.length < result.Nome.length) {
            result = city;
        } else if (city.Nome.length === result.Nome.length && city.Nome.toLowerCase() < result.Nome.toLowerCase()) {
            result = city;
        }
    });

    return result;
}

async function getBiggerCityName(bigger) {
    const states = JSON.parse(await fs.readFile('./../src/Estados.json'));
    const list = [];


    for (let state of states) {
        if (bigger) {
            const city = await getBiggerName(state.Sigla);
            list.push({ name: city.Nome, uf: state.Sigla });
        } else {
            const city = await getSmallerName(state.Sigla);
            list.push({ name: city.Nome, uf: state.Sigla });
        }
    }

    const result = list.reduce((prev, current) => {
        if (bigger) {
            if (prev.name.length > current.name.length) return prev;
            else if (prev.name.length < current.name.length) return current;
            else return prev.name.toLowerCase() < current.name.toLowerCase() ? prev : current;
        } else {
            if (prev.name.length < current.name.length) return prev;
            else if (prev.name.length < current.name.length) return current;
            else return prev.name.toLowerCase() < current.name.toLowerCase() ? prev : current;
        }
    });

    console.log(`${result.name} - ${result.uf}`);
}


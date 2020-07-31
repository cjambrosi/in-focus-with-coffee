import { promises as fs } from 'fs';

// Question 1
const citiesByStateGenerate = async () => {
    try {
        let citiesPerState = [];
        const states = JSON.parse(await fs.readFile('./src/Estados.json'));
        const cities = JSON.parse(await fs.readFile('./src/Cidades.json'));

        states.forEach(state => {
            citiesPerState = cities.filter(city => city.Estado === state.ID);
            fs.writeFile(`./temp/${state.Sigla}.json`, JSON.stringify(citiesPerState, null, 2));
        });
    } catch (error) {
        console.log(error);
    }
}

// Question 2
const readState = async stateUf => {
    let file = JSON.parse(await fs.readFile(`./temp/${stateUf}.json`));
    console.log(`Quantidade de Cidades no Estado de ${stateUf}: `, file.length);
}

// Questions 3 and 4
const filterCities = async (less, text) => {
    const states = JSON.parse(await fs.readFile('./src/Estados.json'));
    const cities = JSON.parse(await fs.readFile('./src/Cidades.json'));
    const moreCitiesDec = [];

    const arrCities = states.map(state => {
        const citiesPerState = cities.filter(city => city.Estado === state.ID);
        
        return {
            uf: state.Sigla,
            cities: citiesPerState
        }
    })
    .sort((a, b) => {
        if (less) [a, b] = [b, a];

        return b.cities.length - a.cities.length;
    })
    .slice(0, 5);

    //fs.writeFile(`./temp/moreCities.json`, JSON.stringify(arrCities, null, 2));

    arrCities.forEach(item => {
        moreCitiesDec.push(`${item.uf} - ${item.cities.length}`);
    });

    console.log(`Cinco estados com ${text} número de cidades são: `, moreCitiesDec);
}

// Questions 5 and 6
const cityWidthName = async () => {
    const states = JSON.parse(await fs.readFile('./src/Estados.json'));
    let data = [];

    for (let state of states) {
        data.push();
    }
    console.log(data);
}

// Questions 7 and 8

// citiesByStateGenerate();
readState('RS');
filterCities(false,'maior');
filterCities(true, 'menor');
// cityWidthName();

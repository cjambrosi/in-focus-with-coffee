/** 
 * Estado da Aplicação (state) 
 **/

let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener('load', () => {
    tabCountries = document.querySelector('#tabCountries');
    tabFavorites = document.querySelector('#tabFavorites');
    countCountries = document.querySelector('#countCountries');
    countFavorites = document.querySelector('#countFavorites');
    // prettier-ignore
    totalPopulationList = 
    document.querySelector('#totalPopulationList');
    totalPopulationFavorites = 
    document.querySelector('#totalPopulationFavorites');

    numberFormat = Intl.NumberFormat('pt-BR');

    fetchCountries();
});

const fetchCountries = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();
    allCountries = json.map(country => {
        // Destructuring
        const { numericCode, translations, population, flag } = country;

        // Quando repete as propriedades no Destructuring, pode eliminar ela no return.
        return {
            id: numericCode,
            name: translations.pt,
            //population: population,
            population,
            formmattedPopulation: formatNumber(population),
            //flag: flag
            flag
        }
    });
    
    /* fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(json => {
            allCountries = json;
            console.log(allCountries);
        }); */
    
    render();
}

const render = () => {
    renderCountryList();
    renderFavoriteList();
    renderSummary();
    renderCountryButtons();
}

const renderCountryList = () => {
    let contriesHTML = '<div>';

    allCountries.forEach(country => {
        const { name, flag, id, population, formmattedPopulation } = country;

        const contryHTML = `
            <div class="country">
                <div>
                    <a id="${id}" class="waves-effect waves-light btn"> + </a>
                </div>
                <div>
                    <img src="${flag}" alt="${name}" />
                </div>
                <div>
                    <ul>
                        <li>${name}</li>
                        <li>${formmattedPopulation}</li>
                    </ul>
                </div>
            </div>
        `;

        contriesHTML += contryHTML;
    });

    contriesHTML += '</div>';

    tabCountries.innerHTML = contriesHTML;
}

const renderFavoriteList = () => {
    let favoritesHTML = '<div>';

    favoriteCountries.forEach(country => {
        const { name, flag, id, population, formmattedPopulation } = country;

        const favoriteContryHTML = `
            <div class="country">
                <div>
                    <a id="${id}" class="waves-effect waves-light btn red darken-4"> + </a>
                </div>
                <div>
                    <img src="${flag}" alt="${name}" />
                </div>
                <div>
                    <ul>
                        <li>${name}</li>
                        <li>${formmattedPopulation}</li>
                    </ul>
                </div>
            </div>
        `;

        favoritesHTML += favoriteContryHTML;
    });

    favoritesHTML += '</div>';

    tabFavorites.innerHTML = favoritesHTML;
}

const renderSummary = () => {
    countCountries.textContent = allCountries.length;
    countFavorites.textContent = favoriteCountries.length;

    const totalPopulation = allCountries.reduce((accumulator, current) => {
        return accumulator + current.population;
    }, 0);

    const totalFavorites = favoriteCountries.reduce((accumulator, current) => {
        return accumulator + current.population;
    }, 0);

    totalPopulationList.textContent = formatNumber(totalPopulation);
    totalPopulationFavorites.textContent = formatNumber(totalFavorites);
}

const renderCountryButtons = () => {
    const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
    const favoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn'));
    //console.log('countryButtons', countryButtons);

    countryButtons.forEach(button => {
        button.addEventListener('click', () => addToFavorites(button.id));
    });

    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => removeFromFavorites(button.id));
    });
}

const addToFavorites = id => {
    const countryToAdd = allCountries.find(country => country.id === id);
    // console.log('countryToAdd', countryToAdd);

    favoriteCountries = [...favoriteCountries, countryToAdd];
    // console.log('favoriteCountries', favoriteCountries);

    // Não precisa retorar ao objeto igualando-o como a cima, pois o sort é uma função mutável diferente do filter, por exemplo.
    favoriteCountries.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    //console.log('favoriteCountries', favoriteCountries);

    allCountries = allCountries.filter(country => country.id !== id);
    //console.log('favoriteCountries.length', favoriteCountries.length);
    //console.log('allCountries.length', allCountries.length);

    render();
}

const removeFromFavorites = id => {
    const countryToRemove = favoriteCountries.find(country => country.id === id);
    // console.log('countryToAdd', countryToAdd);

    allCountries = [...allCountries, countryToRemove];
    // console.log('favoriteCountries', favoriteCountries);

    // Não precisa retorar ao objeto igualando-o como a cima, pois o sort é uma função mutável diferente do filter, por exemplo.
    allCountries.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    //console.log('favoriteCountries', favoriteCountries);

    favoriteCountries = favoriteCountries.filter(country => country.id !== id);
    //console.log('favoriteCountries.length', favoriteCountries.length);
    //console.log('allCountries.length', allCountries.length);

    render();
}

const formatNumber = number => {
    return numberFormat.format(number);
}

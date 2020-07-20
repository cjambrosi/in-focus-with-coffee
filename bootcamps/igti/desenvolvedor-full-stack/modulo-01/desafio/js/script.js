let searchInput = null;
let searchButton = null;

let searchResult = null;
let showResultsContainer = [];

let sexTypeFemale = null;
let sexTypeMale = null;
let averageAge = null;
let sumAge = null;

let modal = null;
let instaceModal = null;
let searchedWord = null;
let btnCloseModal = null;

let allUsers = [];

window.addEventListener('load', () => {
    searchInput = document.querySelector('#searchInput');
    searchButton = document.querySelector('#searchButton');
    searchResult = document.querySelector('#searchResult');
    showResultsContainer = Array.from(document.querySelectorAll('.results-container'));

    sexTypeFemale = document.querySelector('#sexTypeFemale');
    sexTypeMale = document.querySelector('#sexTypeMale');
    averageAge = document.querySelector('#averageAge');
    sumAge = document.querySelector('#sumAge');

    searchInput.addEventListener('input', testInputValue);
    searchInput.addEventListener('keyup', handleTyping);
    searchButton.addEventListener('click', readSearchInput);

    fetchUsers();

    modal = document.querySelector('#noResults');
    instaceModal = M.Modal.init(modal);
    searchedWord = document.querySelector('#searchedWord');
    btnCloseModal = document.querySelector('#btnCloseModal');
    btnCloseModal.addEventListener('click', closeNoResultsModal);
});

const testInputValue = event => {
    let inputSize = !!searchInput.value && searchInput.value.trim() !== '';

    if (inputSize) {
        searchButton.classList.remove('disabled');
    } else {
        clearInput();
    }
}

const handleTyping = event => {
    if (event.key === 'Enter') readSearchInput();
}

const fetchUsers = async () => {
    const numberOfRequest = 100;
    const nat = 'BR';
    const response   = await fetch(`https://randomuser.me/api/?seed=javascript&results=${numberOfRequest}&nat=${nat}&noinfo`);
    const jsonObject = await response.json();

    allUsers = jsonObject.results
    .map(user => {
        const { name, dob, picture, gender } = user;

        return {
            name: `${name.first} ${name.last}`,
            firstName: name.first,
            image: picture.medium,
            gender: gender,
            age: dob.age
        }
    })
    .sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
}

const readSearchInput = () => {
    let searchWord = null;
    searchWord = searchInput.value;

    if (searchWord !== null && searchWord !== '') {
        fetchUsers();
        searchUsers(searchWord);
    };
}

const searchUsers = word => {
    let wordLower = word.toLowerCase();
    
    allUsers = allUsers.filter(user => {
        if (user.name.toLowerCase() === wordLower || user.name.toLowerCase().includes(wordLower)) {
            return user;
        }
    });

    if (allUsers.length > 0) {
        renderResultsOfTheSearch(allUsers.length);
        renderStatisticsOfTheResults();
    } else {
        openNoResultsModal(word);
    }
}

const renderResultsOfTheSearch = qtdResult => {
    let ulResults = '<ul class="searchResultList">';
    let pQuantity = null;

    if (qtdResult > 1) {
        pQuantity = `<span><b>${qtdResult}</b> usuário(s) encontrado(s)</span>`;
    } else {
        pQuantity = `<span><b>${qtdResult}</b> usuário encontrado</span>`;
    }

    allUsers.forEach(user => {
        const { name, image, age } = user;

        const userListHTML = `
            <li>
                <img src="${image}" alt="${name}" title="${name}" />
                <p>${name}, ${age} anos</p>
            </li>
        `;

        ulResults += userListHTML;
    });

    ulResults += '</ul>';
    searchResult.innerHTML = pQuantity + ulResults;
}

const renderStatisticsOfTheResults = () => {
    const totalMaleSex = allUsers.reduce((accumulator, current) => {
        return accumulator + (current.gender === 'male');
    }, 0);

    const totalFemaleSex = allUsers.reduce((acc, curr) => {
        return acc + (curr.gender === 'female');
    }, 0);

    const totalSumAge = allUsers.reduce((acc, curr) => {
        return acc + parseInt(curr.age);
    }, 0);

    sexTypeFemale.textContent = totalFemaleSex;
    sexTypeMale.textContent = totalMaleSex;
    averageAge.textContent =  (totalSumAge / allUsers.length).toFixed(2);
    sumAge.textContent = totalSumAge;

    showResultsContainer.forEach(resCont => resCont.classList.add('active'));
}

const openNoResultsModal = word => {
    searchedWord.textContent = `"${word}"`;
    instaceModal.open();
    clearInput();
}

const closeNoResultsModal = () => instaceModal.close();

const clearInput = () => {
    searchInput.value = '';
    searchResult.innerHTML = '';
    searchInput.focus();
    searchButton.classList.add('disabled');
    showResultsContainer.forEach(resCont => resCont.classList.remove('active'));

    sexTypeFemale.textContent = '';
    sexTypeMale.textContent = '';
    averageAge.textContent =  '';
    sumAge.textContent = ''
}
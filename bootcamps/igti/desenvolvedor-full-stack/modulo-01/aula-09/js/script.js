window.addEventListener('load', start);

var globalNames = ['Goku', 'Vegete', 'Gohan'];
var inputName = null;
var currentIndex = null;
var isEditing = false;

function start() {
    inputName = document.querySelector('#inputName');
    preventFormSubmit();
    activateInput();
    render();
}

function preventFormSubmit() {
    // Se a função só será usada em 1 lugar, não tem problema em declarar dentro da função "pai"
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
    function insertName(newName) {
        globalNames.push(newName);
        render();
    }

    function updateName(newName) {
        globalNames[currentIndex] = newName;
        render();
    }

    function handleTyping(event) {
        console.log(event);
        var hasText = !!event.target.value && event.target.value.trim() !== '';
        if (!hasText) {
            clearInput();
            return;
        }

        if (event.key === 'Enter') {
            if (isEditing) {
                updateName(event.target.value);
            } else {
                insertName(event.target.value);
            }

            isEditing = false;
            clearInput();
        }
    }

    inputName.focus();
    inputName.addEventListener('keyup', handleTyping);
}

function render() {

    function createDeleteButton(index) {
        // Closure = index podendo ser usado na funcao deleteName
        function deleteName() {
            // splice = Remove um elemento do vetor e se necessário, insere novos elementos em seu lugar retornando os elementos excluídos. 
            // Parametros: start (posição do elemento que quero excluir) e a quantidade de elementos para excluir.
            globalNames.splice(index, 1);
            render();
        }

        var button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'x';

        button.addEventListener('click', deleteName);

        return button;
    }

    function createSpan(name, index) {

        function editItem() {
            inputName.value = name;
            inputName.focus();
            isEditing = true;
            currentIndex = index;
        }

        var span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = name;
        span.addEventListener('click', editItem);

        return span;
    }

    var divNames = document.querySelector('#names');
    divNames.innerHTML = '';
    // divNames.innerHTML = `<ul><li>Nome 1</li></ul>`;
    var currentName = '';
    var ul = document.createElement('ul');
    var li = '';
    var button = '';
    var span = '';
    for (var i = 0; i < globalNames.length; i++) {
        currentName = globalNames[i];
        li = document.createElement('li');
        
        button = createDeleteButton(i);
        
        span = createSpan(currentName, i);
        
        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);
    }
    divNames.appendChild(ul);
    clearInput();
}

function clearInput() {
    inputName.value = '';
    inputName.focus();
}



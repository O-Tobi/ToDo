var button = document.getElementById('enter');
var userInput = document.getElementById('todoInput');
var ul = document.querySelector('ul');

function inputLength () {
    return userInput.value.length
}

function createListElement () {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = '';
}

button.addEventListener('click', function(){
    if (inputLength() > 0){
    createListElement()
}
});

userInput.addEventListener('keypress', function(event) {
    if(inputLength() > 0 && event.key === 'Enter') {
    createListElement()

    }
});


var input = document.getElementById('userInput');
var submit = document.getElementById('submit');
var ul = document.getElementById('list-item');
var li = document.getElementsByTagName('li'); 

function lengthCheck() {
    return input.value.length;
};
    

function createListElements() {
    var div = document.createElement('div');
    var li = document.createElement('li');
    var btn = document.createElement('button');
    btn.classList.add('del-btn');
    btn.textContent = 'Delete';
    div.classList.add('wrapper');
    li.classList.add('bold');
    ul.appendChild(div);
    div.append(li, btn);
    li.appendChild(document.createTextNode(input.value))
    input.value = '';
    };

function createAfterSubmit(){
    if(lengthCheck() > 0){
        createListElements()
    };
};

function createAfterEnter(event){
    if(lengthCheck() > 0 && event.key=== 'Enter'){
        createListElements()
    };
};


//creating a task with the enter  button on the screen
submit.addEventListener('click', createAfterSubmit);

//creating a task with the  enter button on the keyboard
input.addEventListener('keypress', createAfterEnter);

//New improved way to mark a task as completed
ul.addEventListener('click', function(event){
    event.target.classList.toggle('done')
});


//Old way to mark a task as completed
/* ul.addEventListener('click', function(event){
    if(event.target.classList.contains('bold')){
        event.target.classList.remove('bold');
        event.target.classList.add('done');
    } else {
        event.target.classList.remove('done');
        event.target.classList.add('bold');
    };
}); */


//Deleting a task
document.addEventListener('click', function(event){
    if (event.target.classList.contains('del-btn')) {
        var confirmDelete = confirm('Are you sure you want to delete this?')
        if (confirmDelete) {
            event.target.parentElement.remove()
        }
    }
});
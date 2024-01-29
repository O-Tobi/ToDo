var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.addEventListener("click", function(){
	var activity = document.getElementById('undone');

	if (activity.classList.contains('bold')) {
		activity.classList.remove('bold');
		activity.classList.add('done');
	} else {
		activity.classList.remove('done');
		activity.classList.add('bold');
	}
})
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var btn = document.querySelector("button");


function inputLength() {
	return input.value.length;
}



function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.textContent = "Delete";
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, btn);
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	btn.classList.add("del-btn");
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

var listContainer = document.getElementById('listContainer');
listContainer.addEventListener("click", function(event) {
    if (event.target.tagName === 'LI') {
        if (event.target.classList.contains('list-item')) {
            event.target.classList.remove('list-item');
            event.target.classList.add('done');
        } else {
            event.target.classList.remove('done');
            event.target.classList.add('list-item');
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('del-btn')) {
        var confirmDelete = confirm("Are you sure you want to delete this task?");
        
        if (confirmDelete) {
            var parentDiv = event.target.closest('div');
            
            if (parentDiv) {
                parentDiv.remove();
            }
        }
    }
});




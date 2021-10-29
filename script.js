var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var elems = document.querySelectorAll("li");
var delButtons = document.getElementsByClassName("delBtn");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var buttonDelete = document.createElement("button");
	buttonDelete.className = 'delBtn';
	buttonDelete.innerHTML = "Delete";
	li.appendChild(buttonDelete);
	buttonDelete.onclick = function() {
		buttonDelete.parentElement.remove()
		return;
	};
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

for (let elem of elems) {
	elem.addEventListener('click', function() {
		this.classList.toggle('done');
	});
}

for (let btn of delButtons) {
	btn.onclick = function(){
		btn.parentElement.remove()
		return;
	};
}




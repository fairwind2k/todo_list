var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delButtons = document.getElementsByClassName("delBtn");
var elems = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	btnDelete = createBtnDelete();
	li.appendChild(btnDelete);
	ul.appendChild(li);
	input.value = "";
}

function createBtnDelete(){
	var buttonDelete = document.createElement("button");
	buttonDelete.className = 'delBtn';
	buttonDelete.innerHTML = "Delete";
	return buttonDelete;
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

function toggleElem(event) {
	event.target.classList.toggle('done');
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener('click', toggleElem);

ul.addEventListener("click",function(e) {
	 if (e.target && e.target.matches("button.delBtn")) {
     e.target.parentElement.remove();
 }
});


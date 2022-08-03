let AddToDobutton = document.getElementById('addToDo');
let toDOContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

AddToDobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    toDOContainer.appendChild(paragraph);
})
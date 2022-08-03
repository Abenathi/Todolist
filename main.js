let AddToDobutton = document.getElementById('addToDo');
let toDOContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

AddToDobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText =inputField.value;
    toDOContainer.appendChild(paragraph);
    inputField.value = null;
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration ="line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDOContainer.removeChild(paragraph);
    })
})
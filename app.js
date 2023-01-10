let addToDoButton = document.getElementById('addtodo');
let toDoContainer = document.getElementById('todocontainer');
let textfield = document.getElementById('textfield');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = textfield.value;
    toDoContainer.appendChild(paragraph);
    textfield.value ="";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration ='line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
let groceryList = document.getElementById("list");
let itemForm = document["addItem"];

itemForm.addEventListener("submit", function(e){
    e.preventDefault()

let listItem = itemForm.newItem.value
itemForm.newItem.value = "";

let deleteButton = document.createElement("button")
deleteButton.innerText = "X"
deleteButton.addEventListener("click", removeItem);



let editButton = document.createElement("button")
editButton.addEventListener("click", function(){
    addedItem.contentEditable = true;
    editButton.innerText = "edit";
});


let addedItem = document.createElement("li")
addedItem.innerHTML= "<div>" + listItem + "</div>";
addedItem.appendChild(deleteButton)
addedItem.appendChild(editButton)

groceryList.appendChild(addedItem);
})


function removeItem(e){
    let addedItem = e.target.parentElement;
    addedItem.remove();
}

/*function editItem(e){
    let addedItem = e.target;
    let listItem = editButton.parentElement;
    let itemEdit = listItem.firstChild;
    itemEdit.style.display = "none"
    editButton.style.display = "none";
}
*/


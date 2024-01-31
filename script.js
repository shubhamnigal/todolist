const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");  //creates a new list item (<li> element)

        // Create a timestamp
        let timestamp = new Date().toLocaleString([], {hour: '2-digit', minute:'2-digit'});

        li.innerHTML = `${inputBox.value} (${timestamp})`;

        // Create a delete button
        let deleteButton = document.createElement("Button");
        deleteButton.innerHTML = "Done";
        deleteButton.onclick = function () {
            li.remove(); // Remove the 'li' element when the delete button is clicked
            saveData();
        };

        // Append the delete button to the 'li' element
        li.appendChild(deleteButton);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "BUTTON") { // Check if the clicked element is a button
        e.target.parentElement.remove(); // Remove the 'li' element when the delete button is clicked
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("dataa", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("dataa");
}
showTask();

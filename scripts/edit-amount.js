
// let editAmountBut = document.querySelectorAll(".edit");
// let editScreen = document.getElementById("edit-amount-screen");


// editAmountBut.forEach((but) => {
//     but.addEventListener("click", (e) => {
//             editScreen.classList.remove("hide-ui");
//         document.getElementById("cut-edit-ui").addEventListener("click", () => {
//             editScreen.classList.add("hide-ui");
//         })

//     })
// })

// function saveEdit(){
//     let editedAmount = document.getElementById("edit-amount-input").value;
    
// }

let editAmountBut = document.querySelectorAll(".edit");
let editScreen = document.getElementById("edit-amount-screen");
let cutButton = document.getElementById("cut-edit-ui");
let saveButton = document.getElementById("save-edit");
let input = document.getElementById("edit-amount-input");

let currentEditing = null;

// Open popup
editAmountBut.forEach((button) => {

    button.addEventListener("click", (event) => {

        currentEditing = event.currentTarget
            .parentElement
            .querySelector(".amount-text");

        input.value = currentEditing.innerText.replace("₹", "");

        editScreen.classList.remove("hide-ui");

    });

});

// Close popup
cutButton.addEventListener("click", () => {

    editScreen.classList.add("hide-ui");

});

// Save amount
saveButton.addEventListener("click", saveEdit);

function saveEdit(){

    currentEditing.innerText = "₹" + input.value;

    editScreen.classList.add("hide-ui");

    if(currentEditing.id = "net-worth-amount"){
        netAmount = input.value;
    }
    if(currentEditing.id = "total-income-amount"){
        totalIncome = input.value;
    }
    if(currentEditing.id = "cash-balance-amount"){
        cashBalance = input.value;
    }
    if(currentEditing.id = "bank-balance-amount"){
        bankBalance = input.value;
    }
    if(currentEditing.id = "saving-amount"){
        saving = input.value;
    }
    if(currentEditing.id = "total-fund-amount"){
        totalFund = input.value;
    }

}


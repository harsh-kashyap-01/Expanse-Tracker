
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


let editScreen = document.getElementById("edit-amount-screen");
let cutButton = document.getElementById("cut-edit-ui");


let newNet = 0;


function editAmountBtn(){
    editScreen.classList.remove("hide-ui")
}

function saveEdit(){
    let selectEdit = document.getElementById("select-edit-type").value;
    let input = Number(document.getElementById("edit-amount-input").value);
    
    
    if(selectEdit === "net-worth"){
        netAmount = input;
        netWorthText.innerText = `₹${netAmount}`;
    }
    else if(selectEdit === "total-income"){
        totalIncome = input;
        totalIncomeText.innerText = `₹${totalIncome}`;
    }
    else if(selectEdit === "bank-balance"){
        bankBalance = input;
        bankBalanceText.innerText = `₹${bankBalance}`;
        netAmount = bankBalance+saving+totalFund+cashBalance;
        netWorthText.innerText = `₹${netAmount}`;
        
    }
    else if(selectEdit === "saving"){
        saving = input;
        savingText.innerText = `₹${saving}`;
        netAmount = bankBalance+saving+totalFund+cashBalance;
        netWorthText.innerText = `₹${netAmount}`;
    }
    else if(selectEdit === "total-fund"){
        totalFund = input;
        totalFundText.innerText = `₹${totalFund}`;
        netAmount = bankBalance+saving+totalFund+cashBalance;
        netWorthText.innerText = `₹${netAmount}`;
    }
    else if(selectEdit === "cash-balance"){
        cashBalance = input;
        cashBalanceText.innerText = `₹${cashBalance}`;
        netAmount = bankBalance+saving+totalFund+cashBalance;
        netWorthText.innerText = `₹${netAmount}`;
    }
    document.getElementById("edit-amount-input").value = '';
    editScreen.classList.add("hide-ui")
    
    
}


cutButton.addEventListener("click", ()=> {
    editScreen.classList.add("hide-ui")
    
})


// // Open popup
// editAmountBut.forEach((button) => {

//     button.addEventListener("click", (event) => {

//         currentEditing = event.currentTarget
//             .parentElement
//             .querySelector(".amount-text");

//         input.value = currentEditing.innerText.replace("₹",Number(""));

//         editScreen.classList.remove("hide-ui");

//     });

// });

// // Close popup
// cutButton.addEventListener("click", () => {

//     editScreen.classList.add("hide-ui");

// });

// // Save amount
// saveButton.addEventListener("click", saveEdit);

// function saveEdit(){

//     currentEditing.innerText = "₹" + input.value;

//     editScreen.classList.add("hide-ui");

//     if(currentEditing.id = "net-worth-amount"){
//         netAmount = input.value;
//     }
//     if(currentEditing.id = "total-income-amount"){
//         totalIncome = input.value;
//     }
//     if(currentEditing.id = "cash-balance-amount"){
//         cashBalance = input.value;
//         updateNet();
//     }
//     if(currentEditing.id = "bank-balance-amount"){
//         bankBalance = input.value;
//         updateNet();
//     }
//     if(currentEditing.id = "saving-amount"){
//         saving = input.value;
//         newNet = cashBalance+bankBalance+saving+totalFund;
//         updateNet();
//     }
//     if(currentEditing.id = "total-fund-amount"){
//         totalFund = input.value;
//         updateNet();
//     }

// }


function updateNet(){
    netAmount = newNet;
    netWorthText.innerText = netAmount;
    console.log(netAmount)
}

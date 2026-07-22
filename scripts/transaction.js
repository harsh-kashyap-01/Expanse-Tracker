



let parentDiv = document.getElementById("parent-div");
let icon = "";

function saveTransaction(){

    

    let paymentAmount = document.getElementById("input-amount").value;
    let paymentMode = document.getElementById("payment-mode").value;
    let paymentType = document.getElementById("payment-type").value;
    let paymentCategory = document.getElementById("payment-category").value;
    let paymentText = document.getElementById("payment-text").value;
    let paymentDate = document.getElementById("payment-date").value;



   if(paymentAmount != ""){
     let newDiv = document.createElement("div");
     let paymentTypeBox = document.createElement("p");
     paymentTypeBox.id = "payment-box";
    newDiv.className = "new-div"




    let deleteBut = document.createElement("button");

    
    deleteBut.classList.add("delete-btn");
    deleteBut.innerHTML = `<i class="fa-solid fa-trash"></i>`;

deleteBut.addEventListener("click", () => {
    newDiv.remove();
});

    newDiv.innerHTML = `

    <h3>Title${paymentText}</h3>

    <p><strong>Amount:</strong> ₹${paymentAmount}</p>
    <p><strong>Mode:</strong> ${paymentMode}</p>
    <p id="paymentColor"><strong>Type:</strong> ${paymentType}</p>
    <p><strong>Category:</strong> ${paymentCategory}</p>
    <p><strong>Date:</strong> ${paymentDate}</p>

    `;
    newDiv.appendChild(deleteBut);
parentDiv.appendChild(newDiv);

if(paymentType === "income"){
    document.getElementById("paymentColor").forEach(el => {
        document.getElementById("paymentColor").style.backgroundColor = "green"
    });
}
if(paymentType === "expanse"){
    document.getElementById("paymentColor").forEach(el => {
        document.getElementById("paymentColor").style.backgroundColor = "red"
    });
}


   }
   
   document.getElementById("paymentColor").appendChild(paymentTypeBox);

   if(paymentCategory === "saving"){
        saving -= paymentAmount;
        savingText.innerText = "₹"+saving;
        savingTextSec.innerText = "₹"+saving;
    }
    if(paymentCategory === "funds"){
        totalFund -= paymentAmount;
        totalFundText.innerText = "₹"+totalFund;
        console.log(totalFund)
    }

    

    netAmount = bankBalance+saving+totalFund+cashBalance;
        netWorthText.innerText = `₹${netAmount}`;
}




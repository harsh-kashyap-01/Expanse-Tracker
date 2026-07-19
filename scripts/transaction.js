



let parentDiv = document.getElementById("parent-div");
let icon = "";

function saveTransaction(){

    let paymentAmount = document.getElementById("input-amount").value;
    let paymentMode = document.getElementById("payment-mode").value;
    let paymentType = document.getElementById("payment-type").value;
    let paymentCategory = document.getElementById("payment-category").value;
    let paymentText = document.getElementById("payment-text").value;
    let paymentDate = document.getElementById("payment-date").value;

if(paymentType === "Income"){
         icon = '<i class="fa-solid fa-arrow-trend-up"></i>';
    }
    else{
        icon = '<i class="fa-solid fa-arrow-trend-down"></i>';
    }


    let newDiv = document.createElement("div");
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
    <p><strong>Type:</strong> ${icon}</p>
    <p><strong>Category:</strong> ${paymentCategory}</p>
    <p><strong>Date:</strong> ${paymentDate}</p>

    `;
    newDiv.appendChild(deleteBut);
parentDiv.appendChild(newDiv);


}


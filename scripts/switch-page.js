
let dashboardPage = document.getElementById("dashboard-section");
let expansePage = document.getElementById("expanse-list-section");
let aboutPage = document.getElementById("about-page-section");

function dashboard(){
    dashboardPage.style.display = "flex";
    expansePage.style.display = "none";
    aboutPage.style.display = "none";
}

function about(){
    aboutPage.style.display = "flex";
    dashboardPage.style.display = "none";
    expansePage.style.display = "none";
}

function transaction(){
    expansePage.style.display = "flex";
    dashboardPage.style.display = "none";
    aboutPage.style.display = "none";
}
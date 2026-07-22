

let menuSection = document.getElementById("menu-section");
let menuCheck = false;
function menuSectionBut(){
    if(menuCheck == false){
        menuCheck = true;
    menuSection.style.display = "flex";




    }
    else if( menuCheck == true){
        menuCheck = false;
        menuSection.style.display = "none";
    }
}
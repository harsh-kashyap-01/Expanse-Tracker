let asideButtons = document.querySelectorAll(".aside-bar-buttons");

asideButtons.forEach(function(button){

    button.addEventListener("click", function(){

        asideButtons.forEach(function(btn){
            btn.classList.remove("aside-bar-button-clicked");
        });

        this.classList.add("aside-bar-button-clicked");

    });

});
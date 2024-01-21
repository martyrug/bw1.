let checkBox = document.querySelector("#honesty");
let button = document.querySelector(".proceed-button");


checkBox.addEventListener('change', function(){
    if (checkBox.checked) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});

button.addEventListener("click", function(){
    if(checkBox.checked){
        window.location.href = "/questions.html";
    }
});



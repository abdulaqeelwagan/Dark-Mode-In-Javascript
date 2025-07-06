let button = document.getElementById("darkMode");
let box = document.getElementById("box");

let darkMode = false;


box.style.transition = "all 3s";

button.addEventListener("click", function () {
    if (darkMode === false) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        box.style.backgroundColor = "black"
        box.style.transform = "translateX(100px)"; 
        darkMode = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        box.style.backgroundColor = "white"
        box.style.transform = "translateX(0px)";
        box.style.float = "left";
        darkMode = false;
    }
});

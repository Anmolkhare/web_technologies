const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updatebody()
function updatebody(){
    if (inputEl.checked){
        bodyEl.style.background = "#7e48a8";
    }
    else {
        bodyEl.style.background = "red";

    }
}

inputEl.addEventListener("input", () => {
    updatebody();
})

function updatelocalstorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
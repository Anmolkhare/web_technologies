const textareaEl = document.getElementById('textarea')
const totalcountEl = document.getElementById('total-counter')
const remainingEl = document.getElementById('remaining')

textareaEl.addEventListener("keyup",()=>{
    updatecounter()
})

function updatecounter(){
    totalcountEl.innerText= textareaEl.value.length;
    
    remainingEl.innerText=textareaEl.getAttribute("maxLength")- textareaEl.value.length; 
}
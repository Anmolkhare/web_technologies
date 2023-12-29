const hourEL = document.getElementById("hour");
const minutesel = document.getElementById("minutes");
const secondel = document.getElementById("second");
const ampmel = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"
    if (hour > 12){
        h=h-12;
        ampm = "PM";
    }
    hourEL.innerText = h;
    minutesel.innerText = m;
    secondel.innerText = s;
    ampmel,(innerText = ampm);
    setTimeout(() => {
        updateclock()
    }, 1000);


}
updateclock()
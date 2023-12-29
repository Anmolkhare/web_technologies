const containerEl = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    const ColorcontainEl = document.createElement('div');
    ColorcontainEl.classList.add("color_container");
    containerEl.appendChild(ColorcontainEl);   
}

const colorContainerEls = document.querySelectorAll(".color_container");


function generateColor(){
    colorContainerEls.forEach(
        (colorContainerEls)=>{
        const newcolorcode = randomcolor();
        colorContainerEls.style.backgroundColor = "#" + newcolorcode;
        colorContainerEls.innerText = "#" + newcolorcode;
});
}
generateColor()

function randomcolor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomnumber =Math.floor( Math.random() * chars.length);
        colorCode += chars.substring(randomnumber, randomnumber + 1);
       
    }
    return colorCode;
}

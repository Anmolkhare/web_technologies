const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById('question');
questionEl.innerText=`what is multiply by ${num1} to ${num2} ?`;

const correctans = num1 * num2 ;

const formEl = document.getElementById('form')
const inputEl = document.getElementById('input');

const scoreEl = document.getElementById('score');

let score = JSON.parse(localStorage.getItem("score")) ;

if(!score){
     score=0;
}
scoreEl.innerText = `score: ${score}`

formEl.addEventListener("submit",()=>{
     const userAns = +inputEl.value 
     if(userAns === correctans){
          score++;
          // console.log(score);
          updatelocalstorage()
     }else{
          score--;
          // console.log(score);
          updatelocalstorage()

     }

});

function updatelocalstorage(){
     localStorage.setItem("score",JSON.stringify(score))
}
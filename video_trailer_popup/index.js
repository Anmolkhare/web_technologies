const btnEl =  document.querySelector('.btn');
const closeiconEl = document.querySelector('.close_icon');
const trailerContainerEl = document.querySelector('.trailer_container');
const videoEl = document.querySelector('video');



btnEl.addEventListener('click', () => {
    trailerContainerEl.classList.remove('active');
});  

closeiconEl.addEventListener('click', () => {
    trailerContainerEl.classList.add('active');
    videoEl.pause();
    videoEl.currentTime =0;
});
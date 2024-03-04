const rulesbtn = document.querySelector('#rules');
const closebtn = document.querySelector('#close');
const rulesmodal = document.querySelector('.rulebox');
rulesbtn.addEventListener('click', () => {
    rulesmodal.classList.add('open');
});
closebtn.addEventListener('click', () => {
    rulesmodal.classList.remove('open');
});

let playagain = document.querySelector('.playagain');
playagain.addEventListener("click", ()=>{
    window.location.href = 'index.html';
   });

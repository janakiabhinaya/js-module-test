const rulesbtn = document.querySelector('#rules');
const closebtn = document.querySelector('#close');
const rulesmodal = document.querySelector('.rulebox');
let hands = document.querySelectorAll('.rock, .paper, .scissors');
let element = document.querySelector("#li1");
let playagain = document.querySelector('.playagain');
let userScore = localStorage.getItem('userScore') ? parseInt(localStorage.getItem('userScore')) : 0;
let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;
const userScoreDisplay = document.querySelector('.userscore .number');
const computerScoreDisplay = document.querySelector('.computerscore .number');
userScoreDisplay.textContent = userScore;
computerScoreDisplay.textContent = computerScore;
const nextbtn = document.querySelector('.next');
const against = document.querySelector('#li2');

rulesbtn.addEventListener('click', () => {
    rulesmodal.classList.add('open');
});
closebtn.addEventListener('click', () => {
    rulesmodal.classList.remove('open');
});

function pickuserhand(playerchoice){
    console.log(playerchoice);
    let gamestart = document.querySelector('.gamearea');
    let gamedisplay = document.querySelector(".contest");
    gamestart.replaceWith(gamedisplay);
    gamedisplay.style.display = "flex";

    let userhandimage = document.getElementById('userhandimage');
    userhandimage.innerHTML = ''; 
    let clonedButton = playerchoice.cloneNode(true); // Clone the button
    userhandimage.appendChild(clonedButton); // Append the cloned button to the container
    clonedButton.style.width = '100%'; // Set width to fill the container
    clonedButton.style.height = '100%';

    let pchandimage = document.getElementById('pchandimage');
    pchandimage.innerHTML = '';
    let computerchoice = hands[Math.floor(Math.random() * hands.length)];
    console.log(computerchoice);
    let selectedHand = computerchoice.cloneNode(true);
    pchandimage.appendChild(selectedHand);
    selectedHand.style.width = '100%'; 
    selectedHand.style.height = '100%';
     
    if(playerchoice === computerchoice){
        element.innerHTML = "TIE UP";
        against.style.display = "none"; 
        userhandimage.classList.remove('win-shadow');
        pchandimage.classList.remove('win-shadow');
    }
    else if (
        (playerchoice.classList.contains('rock') && computerchoice.classList.contains('scissors')) ||
        (playerchoice.classList.contains('paper') && computerchoice.classList.contains('rock')) ||
        (playerchoice.classList.contains('scissors') && computerchoice.classList.contains('paper'))
    ) {
        element.innerHTML = "YOU WIN";
        userScore++;
        localStorage.setItem('userScore', userScore);
        nextbtn.style.display = 'flex'; 
        userhandimage.classList.add('win-shadow');
        pchandimage.classList.remove('win-shadow');

    } else {
        element.innerHTML = "YOU LOST";
        computerScore++;
        localStorage.setItem('computerScore', computerScore);
        userhandimage.classList.remove('win-shadow');
        pchandimage.classList.add('win-shadow');
    }

    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
   playagain.addEventListener("click", ()=>{
    window.location.reload();
   })

   let winbtn = document.querySelector('.next');
   winbtn.addEventListener("click", ()=>{
    window.location.href ='index1.html';
   });

}


   



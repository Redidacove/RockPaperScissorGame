let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result >p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function Convtoword(word){
    if(word=="r")return "ROCK";
    else if(word=="p")return "PAPER";
    else return "SCISSOR";
}

function win(user,computer){
    userScore++;
    const usersup ='You'.fontsize(3).sub();
    const compsup ='comp'.fontsize(3).sub();
    userScore_span.innerHTML=userScore;
    result_div.innerHTML= `${Convtoword(user)}${usersup} beats ${Convtoword(computer)}${compsup} You Win 🙌🔥`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(user).classList.remove('green-glow');
    },1000);

}

function lose(user,computer){
    computerScore++;
    const usersup ='You'.fontsize(3).sub();
    const compsup ='comp'.fontsize(3).sub();
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML= `${Convtoword(user)}${usersup} lost to ${Convtoword(computer)}${compsup} You Lose 🤨`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){
        document.getElementById(user).classList.remove('red-glow');
    },1000);
}

function draw(user,computer){
    const usersup ='You'.fontsize(3).sub();
    const compsup ='comp'.fontsize(3).sub();
    result_div.innerHTML= `${Convtoword(user)}${usersup} draws with ${Convtoword(computer)}${compsup} Its a Draw 😄`;
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function(){
        document.getElementById(user).classList.remove('gray-glow');
    },1000);
}

function getComputerchoice(){
    const choices=["r","p","s"];
    const randomNumber=choices[Math.floor(Math.random()*3)];
    // console.log(randomNumber);
    return randomNumber;
}4

function Game(userChoice){
    const computerChoice=getComputerchoice();
    switch(computerChoice+userChoice)
    {
        case "sr":
        case "ps":
        case "rp":
        win(userChoice,computerChoice);
        break;
        case "rs":
        case "sp":
        case "pr":
            lose(userChoice,computerChoice);
            break; 
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,computerChoice);
            break; 
    }

}

function main(){
    rock_div.addEventListener("click",function(){
    //    console.log("its rock")
        Game('r');
    });

    paper_div.addEventListener("click",function(){
        Game('p');
    })
    
    scissor_div.addEventListener("click",function(){
        Game('s');
    })
}
main();




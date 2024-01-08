let userScore=0;
let compScore=0;



let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscorepera=document.querySelector("#user-score");
let compscorepera=document.querySelector("#computer-score")
let drow=()=>{
    console.log("game was drow.")
    msg.innerText="game was drow"
    msg.style.backgroundColor="#000080" ;
}

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin===true){
        userScore++;
        userscorepera.innerText=userScore;
        console.log("you win");
        msg.innerText=`you win, ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorepera.innerText=compScore;
        console.log("you loose");
       msg.innerText=`you loose, ${compchoice} beats ${userchoice}`;
       msg.style.backgroundColor="red" ;
    }
}

let randumword=()=>{
    let randumarr=["rock","paper","seissor"];
   let randumindx= Math.floor(Math.random()*3);
    return randumarr[randumindx];
}

let playgame=(userchoice)=>{
     console.log("user choice = ",userchoice);

     const compchoice=randumword();
     console.log("computer choice = ",compchoice);

     if(userchoice===compchoice){
        //drow game
      drow();
     }
     else{
        let userwin=0;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="sessior"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
       showWinner(userwin,userchoice,compchoice);
     }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
       
    })
})
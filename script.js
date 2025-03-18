score=0;
cross=true;

audio =new Audio('music.mp3');
audiogo=new Audio('gameover.mp3');

setTimeout(()=>{
    audio.play();
} ,1000);

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode==38){ //up key
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout (()=>{
            dino.classList.remove('animateDino')
        },700); //700 milliseconds k baad yeh class remove kr dena
        }
        if(e.keyCode==39){ //right key- right mai jaane k liye
            dino=document.querySelector('.dino');
            dinoX= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left= dinoX+112+"px"; //apna dino right mai move krega
            }
    
    if(e.keyCode==37){ //left key- peeche jaane  k liye 
        dino=document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left= (dinoX-112)+"px";
        }
    
    }

setInterval(() => {
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top')) ;
    
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    
    offsetX= Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
   
    if(offsetX <73 && offsetY <52){
        gameOver.innerHTML="Game Over- Reload to play again";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
           audiogo.pause();
         
        },1000)

    }
    else if(offsetX<145 && cross){ //145 is a random number , cross true hai matlab first time nhi hai
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() =>{
            cross=true;
        },1000); //1000 miliseconds= 1sec
        setTimeout(()=>{
            aniDur= parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        //duration kam hogi toh obstacle zada speed se jayega
        newDur=aniDur-0.1;
        obstacle.style.animationDuration=newDur+'s';
        },500) //ab yeh jhatka cross krne k baad khayega
    }


}, 10); //har 100 mls per check krega ki apna dino takrayega ki nhi 

function updateScore(score){
    scoreCount.innerHTML="your score:" +score;
}
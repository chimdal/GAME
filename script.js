"use script"
/* console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent="correctNumber"; 
document.querySelector('.number').textContent=13; 
document.querySelector('.score').textContent=20; 
document.querySelector('.guess').value=20;

 */
const secretNumber=Math.trunc(Math.random()*20)+1;

let score=20;

document.querySelector('.check').addEventListener('click',function(){
    document.querySelector('.score').textContent=score;
    console.log(`this is ${secretNumber}`)
    console.log(document.querySelector('.guess').value)
    let guess=Number(document.querySelector('.guess').value);
    console.log(guess)
    if(!guess){
        document.querySelector('.message').textContent='Enter a number';
    }
    else if(guess===secretNumber){
        document.querySelector('.message').textContent='correct number'
      document.querySelector('body').style.backgroundColor='#60b347'
      document.querySelector('.number').style.width='30rem'
      document.querySelector('.number').
      textContent=secretNumber
    }  
    else if(guess<secretNumber){
        if (score>0){
        document.querySelector('.message').textContent='Too Low'
        --score;
        document.querySelector('.score').textContent=score;
        }
        else if(score===0){
            document.querySelector('.message').textContent='Game Over'
            document.querySelector('.score').textContent=score;
        }
    }
    else if(guess>secretNumber){
        if (score>0){
            document.querySelector('.message').textContent='Too High'
            
            --score;
            document.querySelector('.score').textContent=score;
            }
            else if(score===0){
                document.querySelector('.message').textContent='Game Over'
                document.querySelector('.score').textContent=score;
            }
    }
})








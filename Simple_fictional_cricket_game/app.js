


let btn = document.querySelector("button");
let playerOneRun = document.getElementById("player-One-run");
let playerOneWicket = document.getElementById("player-One-Wicket");
let playerTwoRun = document.getElementById("player-Two-run");
let playerTwoWicket = document.getElementById("player-Two-Wicket");
let spinning = new Audio('spinning.wav');

let popup = document.querySelector('.popup');


let totalball = document.getElementById("ball");
let ball = 6;



let playerOne = 0;
let playerTwo = 0;
let w1 = 5;
let w2 = 5;
let count = 1;





btn.addEventListener("click", (event) => {
    event.preventDefault();
    ball--;

    let res= Spin();
    // console.log(res);
    

    setTimeout(function(){
        
    
        if (count%2 ==0){
            if (res == 'Catch' || res == 'Bold'){
                w2--;
                playerTwoWicket.textContent = 'Wicket Left : '+w2;
            }
            else{
                playerTwo += Number(res);
                playerTwoRun.textContent = 'Total Run : '+ playerTwo;
            }
        } 
        else{
            if (res == 'Catch' || res == 'Bold'){
                w1--;
                playerOneRun.textContent = 'Total Run : '+ playerOne;
                playerOneWicket.textContent = 'Wicket Left : '+w1;
            }
            else {
                playerOne += Number(res);
                playerOneRun.textContent = 'Total Run : '+ playerOne;

            }
            
        }
        
        totalball.textContent = 'Total Ball Left : '+ball;
        count+=1;
        check();
        
    }, 5500);

    
    
    


    
});
function check(){
    if (w1 == 0 || w2 == 0 || ball==0){
               
            
        if (playerOne>playerTwo){
            
            popup.textContent = 'Congratulations! Player One won.'
            setTimeout(function(){

                location.reload();
                }, 2000);
            
        }
        else if (playerTwo>playerOne){
           
            popup.textContent = 'Congratulations! Player Two won.'
            setTimeout(function(){

            location.reload();
            }, 2000);
           
        }
        else{
           
            popup.textContent = 'Draw';
            setTimeout(function(){

                location.reload();
                }, 2000);
            
        }
    
    
    }

}


function Shuffle(arr){
    let currIn = arr.length;
    let randomIn;

    while(0!== currIn){
        randomIn = Math.floor(Math.random()* currIn);
        currIn--;
        [arr[currIn], arr[randomIn]] = [arr[currIn], arr[currIn]];
    }
    
    return arr;
}

function Spin(){
    
    const box = document.getElementById('box1');
    const elem = document.getElementsByClassName("span");
    let select = "";

    let Catch = Shuffle([2170, 2510, 2890]);
    let Bold = Shuffle([2130, 2470, 2850]);
    let one = Shuffle([2090, 2440, 2810]);
    let two = Shuffle([2050, 2400, 2770]);
    let three = Shuffle([2010, 2360, 2730]);
    let four = Shuffle( [1970, 2320, 2690]);
    let five = Shuffle([1930, 2280, 2650]);
    let six = Shuffle([1890,2250,2610]);
    let seven = Shuffle([2210, 2520, 2910]);

    

    let result = Shuffle([
        Catch[0],
        Bold[0],
        one[0],
        two[0],
        three[0],
        four[0],
        five[0],
        six[0],
        seven[0]
    ]);

    if (Catch.includes(result[0])) select = 'Catch';
    else if (Bold.includes(result[0])) select = 'Bold';
    else if (one.includes(result[0])) select = '1';
    else if (two.includes(result[0])) select = '2';
    else if (three.includes(result[0])) select = '3';
    else if (four.includes(result[0])) select = '4';
    else if (five.includes(result[0])) select = '5';
    else if (six.includes(result[0])) select = '6';
    else if (seven.includes(result[0])) select = '0';

    
    box.style.setProperty('transition', 'all ease 5s');
    spinning.play();
    box.style.transform = 'rotate(' +result[0]+ 'deg)';

    setTimeout(function() {
        spinning.pause();
    }, 4800)
   
  
    setTimeout(function(){
        box.style.setProperty('transition', 'initial');
        box.style.transform = 'rotate(0deg)';
    }, 5500);

    
    return select;


}





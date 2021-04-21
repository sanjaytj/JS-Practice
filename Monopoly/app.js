var board=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
const player1Button = document.getElementById('player-1');
const player2Button = document.getElementById('player-2');
console.log(player1Button);
console.log(player2Button);
player1Button.addEventListener('click',rolldice1);
player2Button.addEventListener('click',rolldice2);

var player1 = ["Prograd", 0, 1000]; //Player1 = [Name, initial position, initial money]
var player2 = ["Prograd2", 0, 1000];

function rolldice1(){
    var position = Math.floor(Math.random()*6)+1 ; // dice has 6 sides || if returns number as 0 >> 0*6+1 =1 

    console.log("Player 1 rolls", position);

    // define Method to  update the player 1 position
    changePosition1(player1[1],position) // player position stored at index 1 || new position after rolling dice
}

function rolldice2(){
    var position = Math.floor(Math.random()*6)+1;
    console.log("player 2 rolls",position);
    changePosition2(player2[1],position)
}

// define change position method
function changePosition1(old,currentPos){  // old pos + curr Pos
    var newPosition=old+currentPos;
    player1[1]= newPosition; // now player1 position gets updated

    console.log(player1[1]);

    updateMoney1(player1[1]);
}
 
function changePosition2(old,currentPosition){
    var newPosition = old + currentPosition;
    player2[1] = newPosition;
    console.log(player2[1]);
    updateMoney2(player2[1]);
}
// 

function updateMoney1(p1){
    var updateMoney = 0;
    if(p1<board.length)
    updateMoney = player1[2]-board[p1-1]; //starting from 0 so p1-1
    else{
        p1=p1%15;
        updateMoney = player1[2]-board[p1-1]
    }
    console.log(updateMoney);
}


function updateMoney2(p2){
    var updateMoney2 = 0;
    if(p2<board.length)
    updateMoney2 = player2[2] - board[p2-1];
    else{
        p2 = p2 % 15;
        updateMoney2 = player2[2] - board[p2-1];
    }
    console.log(updateMoney2)
}



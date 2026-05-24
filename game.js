const config = {

type: Phaser.AUTO,

parent: "game",

width: window.innerWidth,

height: window.innerHeight,

backgroundColor: "#0f172a",

scene: {

create
}

};

function create(){

this.add.text(

100,
100,

"⚔️ 高考英语单词地牢",

{
fontSize:"32px",
color:"#ffffff"
}

);

this.add.text(

100,
200,

"const words = [

{word:"abandon",meaning:"放弃"},
{word:"ability",meaning:"能力"},
{word:"absorb",meaning:"吸收"},
{word:"adapt",meaning:"适应"},
{word:"admire",meaning:"钦佩"},
{word:"advance",meaning:"进步"},
{word:"ancient",meaning:"古代的"},
{word:"challenge",meaning:"挑战"}

];

let playerHp = 100;
let enemyHp = 100;
let score = 0;
let combo = 0;

let currentWord;

class GameScene extends Phaser.Scene{

constructor(){

super("GameScene");

}

create(){

this.cameras.main.setBackgroundColor("#0f172a");

this.add.text(

20,
20,

"⚔️ 高考英语单词地牢",

{
fontSize:"28px",
color:"#ffffff",
fontStyle:"bold"
}

);

this.playerHpText = this.add.text(

20,
70,

"🧙 玩家HP: 100",

{
fontSize:"18px",
color:"#22c55e"
}

);

this.enemyHpText = this.add.text(

20,
100,

"👹 怪物HP: 100",

{
fontSize:"18px",
color:"#ef4444"
}

);

this.scoreText = this.add.text(

20,
130,

"分数:0 连击:0",

{
fontSize:"18px",
color:"#facc15"
}

);

this.monster = this.add.text(

this.scale.width / 2,
220,

"👾",

{
fontSize:"90px"
}

).setOrigin(0.5);

this.wordText = this.add.text(

this.scale.width / 2,
340,

"",

{
fontSize:"42px",
color:"#ffffff",
fontStyle:"bold"
}

).setOrigin(0.5);

this.tipText = this.add.text(

this.scale.width / 2,
390,

"请选择正确中文意思",

{
fontSize:"18px",
color:"#cbd5e1"
}

).setOrigin(0.5);

this.buttons = [];

for(let i=0;i<4;i++){

const btn = this.add.text(

this.scale.width / 2,
470 + i * 70,

"",

{
fontSize:"22px",
color:"#ffffff",
backgroundColor:"#1e293b",
padding:{
x:20,
y:12
},
fixedWidth:320,
align:"center"
}

)

.setOrigin(0.5)

.setInteractive();

btn.on("pointerdown",()=>{

this.checkAnswer(btn.text);

});

this.buttons.push(btn);

}

this.nextQuestion();

}

nextQuestion(){

currentWord = Phaser.Utils.Array.GetRandom(words);

let options = [currentWord.meaning];

while(options.length < 4){

const randomMeaning =

Phaser.Utils.Array.GetRandom(words).meaning;

if(!options.includes(randomMeaning)){

options.push(randomMeaning);

}

}

Phaser.Utils.Array.Shuffle(options);

this.wordText.setText(currentWord.word);

this.buttons.forEach((btn,index)=>{

btn.setText(options[index]);

btn.setBackgroundColor("#1e293b");

btn.setInteractive();

});

}

checkAnswer(answer){

this.buttons.forEach(btn=>{

btn.disableInteractive();

});

if(answer === currentWord.meaning){

combo++;

const damage = 15 + combo * 2;

enemyHp -= damage;

score += damage;

this.showDamage(

"-" + damage,
"#22c55e"

);

this.cameras.main.shake(150,0.006);

if(enemyHp <= 0){

enemyHp = 100;

this.monster.setText(

Phaser.Utils.Array.GetRandom(

["👾","👻","🐉","🗿","🔥"]

)

);

}

}else{

combo = 0;

playerHp -= 15;

this.showDamage(

"-15",
"#ef4444"

);

if(playerHp <= 0){

this.gameOver();

return;

}

}

this.updateUI();

this.time.delayedCall(800,()=>{

this.nextQuestion();

});

}

updateUI(){

this.playerHpText.setText(

"🧙 玩家HP: " + playerHp

);

this.enemyHpText.setText(

"👹 怪物HP: " + enemyHp

);

this.scoreText.setText(

"分数:" + score + " 连击:" + combo

);

}

showDamage(text,color){

const t = this.add.text(

this.scale.width / 2,
260,

text,

{
fontSize:"52px",
color:color,
fontStyle:"bold"
}

).setOrigin(0.5);

this.tweens.add({

targets:t,

y:180,

alpha:0,

duration:700,

onComplete:()=>{

t.destroy();

}

});

}

gameOver(){

this.children.removeAll();

this.add.text(

this.scale.width / 2,
220,

"💀",

{
fontSize:"100px"
}

).setOrigin(0.5);

this.add.text(

this.scale.width / 2,
350,

"挑战结束",

{
fontSize:"40px",
color:"#ffffff"
}

).setOrigin(0.5);

this.add.text(

this.scale.width / 2,
430,

"最终分数: " + score,

{
fontSize:"28px",
color:"#facc15"
}

).setOrigin(0.5);

}

}

const config = {

type: Phaser.AUTO,

parent:"game",

width:window.innerWidth,

height:window.innerHeight,

backgroundColor:"#0f172a",

scene:[GameScene]

};

new Phaser.Game(config);",

{
fontSize:"28px"
}

);

}

new Phaser.Game(config);

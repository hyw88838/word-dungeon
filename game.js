// 最小示例词库
const words = [
  {word:"abandon",meaning:"放弃"},
  {word:"ability",meaning:"能力"},
  {word:"absorb",meaning:"吸收"},
  {word:"adapt",meaning:"适应"},
  {word:"admire",meaning:"钦佩"},
  {word:"advance",meaning:"进步"}
];

let playerHp = 100, maxPlayerHp = 100;
let enemyHp = 100, maxEnemyHp = 100;
let score = 0, combo = 0, floor = 1;
let currentWord;

class GameScene extends Phaser.Scene{
  constructor(){ super("GameScene"); }
  create(){
    this.cameras.main.setBackgroundColor("#0f172a");
    this.title = this.add.text(207,40,"⚔️ 高考英语单词地牢",{fontSize:"30px",color:"#ffffff",fontStyle:"bold"}).setOrigin(0.5);

    this.playerText = this.add.text(207,95,"🧙 玩家HP:100/100",{fontSize:"16px",color:"#22c55e"}).setOrigin(0.5);

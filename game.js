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

"👾 Phaser 已成功运行",

{
fontSize:"28px"
}

);

}

new Phaser.Game(config);

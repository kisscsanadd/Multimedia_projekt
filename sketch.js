const SIZE = 25;

const DIMENSIONS = 20;

let field = [];

function setup(){
    createCanvas(500, 500)

    for(let i = 0; i <400; i++){
        field.push(new Tile(i % 20, Math.floor(i/20), "BARRIER"));
    }
}

function draw(){
    background(52);
    //draw tiles

    for(let i =0; i <field.length; i++){
        field[i].draw();
    }
}
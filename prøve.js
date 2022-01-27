// Oppgave 1


function summer(tall1,tall2){
    return tall1 + tall2;
}
console.log(summer(4,5));

// Oppgave 2

function arealTrekant(g,h){
    return (g*h)/2;
}
console.log("Arealet av trekanten blir: " + arealTrekant(7,3));

// Oppgave 3

//a
function random(){
    let randomTall=Math.floor(Math.random()*10)+1;
    console.log(randomTall);
}

random();

//b
const list = [];

let n = 1;
while (n<=1000){
    let i = Math.floor(Math.random()*10)+1; 
    list.push(i);
    n++;
}
console.log(list);
//c 
function syvere(list){
    let fjernIndeks= list.indexOf(7);
    list.splice();
}





// Oppgave 4
¨
const list = [
    {
        land:"",
        sted:"",
        årstall:""
    },
    {
        land:"",
        sted:"",
        årstall:""
    },
    {
        land:"",
        sted:"",
        årstall:""
    },
    {
        land:"",
        sted:"",
        årstall:""
    },
    {
        land:"",
        sted:"",
        årstall:""
    },
    {
        land:"",
        sted:"",
        årstall:""
    },
    {
        land:"",
        sted:"",
        årstall:""
    },
    {
        land:"",
        sted:"",
        årstall:""
    },
]
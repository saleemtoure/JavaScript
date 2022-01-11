/* tildfekig hemmlig tall mellom 1 og 100
be brukern om å gjette
svar om det er større enn mindre helt til den er større 
*/

    let randomTall=Math.floor(Math.random()*100)+1;
    let dittTall ="";
function gjettTall(dittTall){

    dittTall = window.prompt("Gjett ett tall: ");


    if (dittTall == randomTall){
        window.alert(`Du har gjettet helt riktig!! ${dittTall} = ${randomTall}`);
    }
    else if (dittTall<randomTall){
        window.alert(`Tallet ditt, ${dittTall}, er mindre enn tallet mitt`);
    }
    else if (dittTall>randomTall){
        window.alert(`Tallet ditt, ${dittTall}, er større enn tallet mitt`);
    }
    /* for å sjekke at verdiene er riktig
    console.log(randomTall);
    console.log(dittTall);
    */
}



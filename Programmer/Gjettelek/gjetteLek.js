/* tildfekig hemmlig tall mellom 1 og 100
be brukern om å gjette
svar om det er større enn mindre helt til den er større 
*/

    let randomTall=Math.floor(Math.random()*100)+1;
        console.log(randomTall); //for å senere sjekke om det stemmer
    let dittTall ="";

function gjettTall(dittTall){
    dittTall = document.getElementById("tall").value;
  // dittTall = window.prompt("Gjett ett tall: ");
    let input =document.getElementById("tall");
    input.addEventListener("keyup", function(event){
        if (event.key===13){
            event.preventDefault();
            document.getElementById("runScript").click();
        }
    });

    if (dittTall == randomTall){
        //window.alert(`Du har gjettet helt riktig!! ${dittTall} = ${randomTall}`);
        document.getElementById("resultat").innerHTML="Du har gjettet helt riktig! Skriv inn ett nytt tall for å prøve igjen";
        randomTall=Math.floor(Math.random()*100)+1;
        console.log(randomTall); //for å senere sjekke om det stemmer
    }
    else if (dittTall<randomTall && dittTall > 0){
       // window.alert(`Tallet ditt, ${dittTall}, er mindre enn tallet mitt`);
       document.getElementById("resultat").innerHTML=`Du har gjettet for lavt. Tallet ditt, ${dittTall}, er mindre enn tallet mitt. Prøv igjen!`;
    }
    else if (dittTall>randomTall && dittTall <=100){
       // window.alert(`Tallet ditt, ${dittTall}, er større enn tallet mitt`);
       document.getElementById("resultat").innerHTML=`Du har gjettet for høyt. Tallet ditt, ${dittTall}, er større enn tallet mitt. Prøv igjen`;
    }
    else if(dittTall < 1){
      //  document.getElementById("resultat").innerHTML="Tallet ditt er mindre enn 1. Skriv inn ett nytt tall for å prøve igjen";
      alert("Tallet ditt er mindre enn 1. Skriv inn ett nytt tall for å prøve igjen")
    }
    else if (dittTall > 100) {
      alert("Tallet ditt er større enn 100. Skriv inn ett nytt tall for å prøve igjen")    
    }
}



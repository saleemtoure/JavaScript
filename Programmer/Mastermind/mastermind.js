    /*4 farger i en kode
    gjett kode
    10 attempts*/ 
    const FARGER =["RØD","BLÅ","GRØNN","HVIT","SVART","ROSA"];
    let kode = [];
    let telling = 0 ;
    let dinKode=kode;

    function shuffle(FARGER) {
        FARGER.sort(() => Math.random() - 0.5);
        let farge1 = FARGER.slice(-4)[0]; 
        console.log(farge1); //DeBugging
        kode.push(farge1);
        let farge2 = FARGER.slice(-4)[1]; 
        console.log(farge2); //DeBugging
        kode.push(farge2);
        let farge3 = FARGER.slice(-4)[2]; 
        console.log(farge3); //DeBugging
        kode.push(farge3);
        let farge4 = FARGER.slice(-4)[3]; 
        console.log(farge4); //DeBugging
        kode.push(farge4);

        console.log(`Koden er ${kode}`); //DeBugging


        if (dinKode == kode){
            //document.getElementById("resultat").innerHTML="Du har gjettet helt riktig!";
            telling ++;
            console.log(`Tellingen er ${telling}`) //DeBugging
            console.log(`DU HAR GJETTET RIKTIG KODE ${kode}`);
            console.log(`Du klarte det på forsøk: ${telling}. Refresh siden for å spille igjen!` );
            break;
        }else if (dinKode!=dittTall > 0){
            // window.alert(`${},`); noe sånn som du har så sp mange riktige og så magnge feil eller rktig plass blabalbal
            telling ++;
            console.log(`Tellingen er ${telling}`) //DeBugging
            console.log(`DU HAR GJETTET FEIL KODE er ikke like ${kode}`);
         }

        /*
        let fireFarger=FARGER.slice(-4).toUpperCase();
        console.log(fireFarger); husker ikke hva det her var*/ 
    }
    shuffle(FARGER);
/*

    else if (dittTall<randomTall && dittTall > 0){
       // window.alert(`Tallet ditt, ${dittTall}, er mindre enn tallet mitt`);
       document.getElementById("resultat").innerHTML=`Du har gjettet for lavt. Tallet ditt, ${dittTall}, er mindre enn tallet mitt. Prøv igjen!`;
       telling += 1;
       console.log(telling)
       document.getElementById("forsøk").innerHTML=`Antall forsøk: ${telling}`;
    }
    else if (dittTall>randomTall && dittTall <=100){
       // window.alert(`Tallet ditt, ${dittTall}, er større enn tallet mitt`);
       document.getElementById("resultat").innerHTML=`Du har gjettet for høyt. Tallet ditt, ${dittTall}, er større enn tallet mitt. Prøv igjen`;
       telling += 1;
       console.log(telling)
       document.getElementById("forsøk").innerHTML=`Antall forsøk: ${telling}`;
    }
    else if(dittTall < 1){
      //  document.getElementById("resultat").innerHTML="Tallet ditt er mindre enn 1. Skriv inn ett nytt tall for å prøve igjen";
      alert("Tallet ditt er mindre enn 1. Skriv inn ett nytt tall for å prøve igjen");
    }
    else if (dittTall > 100) {
      alert("Tallet ditt er større enn 100. Skriv inn ett nytt tall for å prøve igjen");  
    }
*/
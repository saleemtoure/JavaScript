// Tall Sortering
function sammenlignFunksjon(a, b) {
    return a - b;
  }
  let tall = [1, 4, 41, 82, 101, 14];
tall.sort(sammenlignFunksjon);
console.log(tall);
// Skriver ut: [1, 4, 14, 41, 82, 101]

// Profile lookup

// Lager tabell
// Henter elementet der vi skal legge til tabellen
let hovedEl = document.querySelector("#hoved");

// Array med innsjø-objekter
let innsjoer = [
  {"Navn": "Bajkal", "Dybde (m)": 1640, "Land/region": "Russland"},
  {"Navn": "Tanganyikasjøen", "Dybde (m)": 1470, "Land/region": "Øst-Afrika"},
  {"Navn": "Det kaspiske hav", "Dybde (m)": 1000, "Land/region": "Asia"},
  {"Navn": "Vostoksjøen", "Dybde (m)": 1000, "Land/region": "Antarktis"},
  {"Navn": "O'Higgins", "Dybde (m)": 836, "Land/region": "Sør-Amerika"}
];

// Lager tabellen (et <table>-element)
let tabellEl = document.createElement("table");

// Lager en overskriftsrad (<thead> og <tr>)
let theadEl = document.createElement("thead");
let trEl = document.createElement("tr");

// Henter ut objektet i første rad i arrayen og bruker egenskapsnavnene som overskrifter
for (let egenskap in innsjoer[0]) {
  // Lager et <th>-element for hver egenskap
  let thEl = document.createElement("th");
  thEl.innerHTML = egenskap;
  trEl.appendChild(thEl);
}

// Legger til <tr>- og <thead>-elementene i tabellen
theadEl.appendChild(trEl);
tabellEl.appendChild(theadEl);

// Lager tabellinnholdet (<tbody>)
let tbodyEl = document.createElement("tbody");

// Går gjennom hele objektlista og lager én rad for hvert objekt
for (let i = 0; i < innsjoer.length; i++) {
  // Lager et <tr>-element
  let trEl = document.createElement("tr");

  // Går gjennom hver egenskap i objektet
  for (let egenskap in innsjoer[i]) {
    // Lager et <td>-element
    let tdEl = document.createElement("td");
    // Legger til verdien til gjeldende egenskap i <td>-elementet
    tdEl.innerHTML = innsjoer[i][egenskap];
    // Legger til <td>-elementet i <tr>-elementet
    trEl.appendChild(tdEl);
  }

  // Legger til <tr>-elementet i <tbody>-elementet
  tbodyEl.appendChild(trEl);
}

// Legger til <tbody>-elementet i tabellen
tabellEl.appendChild(tbodyEl);

// Legger til tabellen i #hoved-elementet
hovedEl.appendChild(tabellEl);

// lager en schpa tabell uten båt

// objekt lager
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");


//export
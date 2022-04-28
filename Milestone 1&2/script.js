const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];


for (let i = 0; i < team.length; i++) {
  document.getElementById("nomi").innerHTML += team[i].name + ', ';
  document.getElementById("ruoli").innerHTML += team[i].role + ', ';
  document.getElementById("immagini").innerHTML += team[i].image + ', ';
}


























//BOZZE VARIE
/*let nomi = listaDati() ;
console.log(nomi);*/


/*function listaDati() {
   let datiTeam = "" ;
for (let i = 0; i < team.length; i++) {
   datiTeam = team[i];
  console.log(datiTeam.name, datiTeam.role, datiTeam.image);
}
return datiTeam;

} */


// let names = getInformation('name');

// function getInformation(key = '') {
//   let infos = [];
//   for (let i = 0; i < team.length; i++) {
//     let people = team[i];
//     let dato = people[key];
//     infos.push(dato);
//   }

//   return infos;
// }



// for (let i = 0; i < team.length; i++) {
//   const ruoliTeam = team[i];
//   console.log(ruoliTeam.role);
// }


// document.getElementById("nomi").innerHTML =  getInformation('name');
// document.getElementById("ruoli").innerHTML =  getInformation('role');
// document.getElementById("immagini").innerHTML =  getInformation('image');


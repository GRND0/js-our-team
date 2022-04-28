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

let nomi = listaDati() ;
console.log(nomi);


function listaDati() {
  nomiTeam = "" ;
for (let i = 0; i < team.length; i++) {
  const nomiTeam = team[i];
  console.log(nomiTeam.name);
}
return nomiTeam.name 

} 


for (let i = 0; i < team.length; i++) {
  const ruoliTeam = team[i];
  console.log(ruoliTeam.role);
}


for (let i = 0; i < team.length; i++) {
  const immagineTeam = team[i];
  console.log(immagineTeam.image);
}

document.getElementById("nomi").innerHTML = nomi;
document.getElementById("ruoli").innerHTML = ruoliTeam.role;
document.getElementById("immagini").innerHTML = immagineTeam.image;


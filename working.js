const zooAnimals = [
    { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
    { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
    { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
    { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
    { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
    { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
    { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
    { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
    { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
    { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
  ];

  const displayNames = [];

zooAnimals.forEach((obj) => displayNames.push(`Name: ${obj.animal_name}, Scientific: ${obj.scientific_name}`
))

console.log(displayNames)


const newdisplayNames = [];
for (let i = 0; i < zooAnimals.length; i++){
 newdisplayNames.push(`Name: ${zooAnimals[i].animal_name}, Scientific: ${zooAnimals[i].scientific_name}`)
} 
 
console.log(newdisplayNames)


const newnewdisp = [];

zooAnimals.forEach (function(animals) {
    return (newnewdisp.push(`Name: ${animals.animal_name}, Scientific: ${animals.scientific_name}`))
  });
  console.log(newnewdisp);
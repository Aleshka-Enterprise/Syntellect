// Задачка 1
const climbingDay = (distance, passesPerDay, compensate) => {
  return Math.ceil((distance - passesPerDay) / (passesPerDay - compensate)) + 1;
}

console.log(`Черепашка залезет на холм ${climbingDay(100, 50, 30)} сутки.`)


// Задачка 2
function getCountingHandshakes(numberOfPeople) {
  return numberOfPeople * (numberOfPeople - 1) / 2
}

console.log(`Общее количество рукопожатий для 10 человек: ${getCountingHandshakes(10)}.`);


// Задачка 3
const uniqueWords = (list) => {
  return list.split(",").filter((word, index, arr) => word && arr.indexOf(word) ===  index).join(",")
} 

console.log(uniqueWords("кошка,собака,лош6адь,корова,кошка,пёс,кошка,слон,"))
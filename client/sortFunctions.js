export function shuffleSelectedPeople (selectedPeople, numberOfTeams) {
  // console.log('Sort Selected people in sortFunction: ', selectedPeople)
  let currentIndex = selectedPeople.length
  let tempValue
  let randomIndex

  // eslint-disable-next-line no-console
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    tempValue = selectedPeople[currentIndex]
    selectedPeople[currentIndex] = selectedPeople[randomIndex]
    selectedPeople[randomIndex] = tempValue
  }
  // console.log('sortSelectedPeople ', selectedPeople)
  return sortIntoTeams(selectedPeople, numberOfTeams)
}

export function sortIntoTeams (shuffledPeople, numberOfTeams) {
  console.log('sortFunction ', shuffledPeople, numberOfTeams)



  
  // IF STATEMENT TO GO IN HERE IF DIVIDING INTO MORE THAN TWO TEAMS
  // if (numberOfTeams === '2') {
  //   const halfOfArray = Math.floor(shuffledPeople.length / 2)
  //   const teamOne = shuffledPeople.slice(0, halfOfArray)
  //   const teamTwo = shuffledPeople.slice(halfOfArray, shuffledPeople.length)
  //   // console.log('teamOne: ', teamOne)
  //   // console.log('teamTwo: ', teamTwo)
  //   const teams = { teamOne, teamTwo }
  //   console.log('teams: ', teams)
  //   return teams
  // } else if (numberOfTeams === '3') {
  //   const thirdOfArray = Math.floor(shuffledPeople.length / 3)
  //   const teamOne = shuffledPeople.slice(0, thirdOfArray)
  //   const teamTwo = shuffledPeople.slice(thirdOfArray, shuffledPeople.length - thirdOfArray)
  //   const teamThree = shuffledPeople.slice(shuffledPeople.length - thirdOfArray, shuffledPeople.length)
  //   const teams = { teamOne, teamTwo, teamThree }
  //   return teams
  // } else {
  //   return 'Not yet implemented'
  // }

  // const result = []
  // for (let i = numberOfTeams; i > 0; i--) {
  //   result.push(shuffledPeople.splice(0, Math.ceil(shuffledPeople.length / i)))
  //   return result
  // }
  const newArray = []
  const chunkSize = shuffledPeople / numberOfTeams
  for (let i = 0; i < shuffledPeople.length; i += chunkSize) {
    newArray.push(shuffledPeople.slice(i, i + chunkSize))
  }
  return newArray
}

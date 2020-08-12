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
  // console.log('sortIntoTeams  ', shuffledPeople, numberOfTeams)

  // if (numberOfTeams === '2') {
  //   const halfOfArray = Math.floor(shuffledPeople.length / 2)
  //   const teamOne = shuffledPeople.slice(0, halfOfArray)
  //   const teamTwo = shuffledPeople.slice(halfOfArray, shuffledPeople.length)
  //   // console.log('teamOne: ', teamOne)
  //   // console.log('teamTwo: ', teamTwo)
  //   const teams = { teamOne, teamTwo }
  //   console.log('teams: ', teams)
  // //  return teams
  // } else if (numberOfTeams === '3') {
  //   const thirdOfArray = Math.floor(shuffledPeople.length / 3)
  //   console.log(thirdOfArray)
  //   const teamOne = shuffledPeople.slice(0, thirdOfArray)
  //   const teamTwo = shuffledPeople.slice(thirdOfArray, shuffledPeople.length - thirdOfArray)
  //   const teamThree = shuffledPeople.slice(shuffledPeople.length - thirdOfArray, shuffledPeople.length)

  //   // CODE DOES NOT STOP TO TAKE THE IF STATEMENT INTO ACCOUNT
  //   console.log(teamTwo.length, teamOne.length)
  //   if (teamTwo.length % teamOne.length > 1 || teamTwo.length % teamThree.length > 1) {
  //     console.log('hello')
  //     teamOne.push(teamTwo.splice(0, 1))
  //   }

  //   const teams = { teamOne, teamTwo, teamThree }
  //   console.log('teams: ', teams)
  // //  return teams
  // } else {
  //   return 'Not yet implemented'
  // }

  const result = []
  const length = shuffledPeople.length
  let i = 0
  let sizeOfArrays
  let noOfTeams = Number(numberOfTeams)
  let balanced
  // console.log('sortIntoTeams  noOfTeams ', noOfTeams)

  if (length % noOfTeams === 0) {
    sizeOfArrays = Math.floor(length / noOfTeams)
    console.log('1ST if: sortIntoTeams  sizeOfArrays ', sizeOfArrays)
    while (i < length) {
      result.push(shuffledPeople.slice(i, i += sizeOfArrays))
    }
  } else if (balanced) {
    while (i < length) {
      sizeOfArrays = Math.ceil((length - i) / noOfTeams--)
     console.log('2ND if: sortIntoTeams  sizeOfArrays ', sizeOfArrays)

      result.push(shuffledPeople.slice(i, i += sizeOfArrays))
    }
  } else {
    if (noOfTeams > 2) {
      console.log('numberOfTeams is greater than 2')
      noOfTeams--
    }

    sizeOfArrays = Math.floor(length / noOfTeams)
    console.log('3RD if: sortIntoTeams  sizeOfArrays ', sizeOfArrays)

    if (length % sizeOfArrays === 0)
      sizeOfArrays--
    while (i < sizeOfArrays * noOfTeams) {
      result.push(shuffledPeople.slice(i, i += sizeOfArrays))
    }
    result.push(shuffledPeople.slice(sizeOfArrays * noOfTeams))
  }
  console.log('Result ', result)
  // return result
}

export function shuffleSelectedPeople (selectedPeople, numberOfTeams) {
  // console.log('Sort Selected people in sortFunction: ', selectedPeople)
  const peopleToShuffle = [...selectedPeople] // Stops selectedPeople from being changed
  let currentIndex = peopleToShuffle.length
  let tempValue
  let randomIndex

  // eslint-disable-next-line no-console
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    tempValue = selectedPeople[currentIndex]
    peopleToShuffle[currentIndex] = peopleToShuffle[randomIndex]
    peopleToShuffle[randomIndex] = tempValue
  }
  return sortIntoTeams(peopleToShuffle, numberOfTeams)
}

export function sortIntoTeams (shuffledPeople, numberOfTeams) {
  // console.log('sortIntoTeams  ', shuffledPeople, numberOfTeams)
  const result = []
  const noOfPeople = shuffledPeople.length
  let i = 0
  let sizeOfTeams
  let noOfTeams = Number(numberOfTeams)
  const balanced = true

  if (noOfPeople % noOfTeams === 0) { // If the remainder of array noOfPeople and noOfTeams is 0 then:
    sizeOfTeams = Math.floor(noOfPeople / noOfTeams) // the sizeOfTeams is always rounded DOWN, the noOfPeople divided by noOfTeams eg. 3 = 9 / 3
    // console.log('1ST if: sortIntoTeams  sizeOfTeams ', sizeOfTeams)
    while (i < noOfPeople) { // if noOfPeople is greater than 0
      result.push(shuffledPeople.slice(i, i += sizeOfTeams)) // push into result array, the people from index 0 to the sizeOfTeams plus ???the number of people already in the team??? eg. slice(0, 3) 0 = start index, and 3 = end index (end index is not included), this means indexes 0,1,2 are sent.
    }
  } else if (balanced) { // balanced is always true
    while (i < noOfPeople) { // if noOfPeople is greater than 0
      sizeOfTeams = Math.ceil((noOfPeople - i) / noOfTeams--) // the sizeOfTeams is rounded UP from noOfPeople - 0 / noOfTeams eg. 4 = 10 / 3 first times through until 3 = 6 / 2
      // console.log('2ND if: sortIntoTeams  sizeOfTeams ', sizeOfTeams)

      result.push(shuffledPeople.slice(i, i += sizeOfTeams)) // push into result array, the people from index 0 to the sizeOfTeams plus ????the number of people already in the team??? eg. slice(0, 4) 0 = start index, and 4 = end index (end index is not included), this means indexes 0,1,2,3 are sent.
    }
  }
  // } else {
  //   noOfTeams--
  //   sizeOfTeams = Math.floor(length / noOfTeams)
  //   // console.log('3RD if: sortIntoTeams  sizeOfArrays ', sizeOfArrays)

  //   if (noOfPeople % sizeOfTeams === 0)
  //     sizeOfTeams--
  //   while (i < sizeOfTeams * noOfTeams) {
  //     result.push(shuffledPeople.slice(i, i += sizeOfTeams))
  //   }
  //   result.push(shuffledPeople.slice(sizeOfTeams * noOfTeams))
  // }
  // console.log('Result ', result)
  return result
}

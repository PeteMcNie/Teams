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
  const length = shuffledPeople.length
  let i = 0
  let sizeOfArrays
  let noOfTeams = Number(numberOfTeams)
  const balanced = true

  if (length % noOfTeams === 0) {
    sizeOfArrays = Math.floor(length / noOfTeams)
    // console.log('1ST if: sortIntoTeams  sizeOfArrays ', sizeOfArrays)
    while (i < length) {
      result.push(shuffledPeople.slice(i, i += sizeOfArrays))
    }
  } else if (balanced) {
    while (i < length) {
      sizeOfArrays = Math.ceil((length - i) / noOfTeams--)
      // console.log('2ND if: sortIntoTeams  sizeOfArrays ', sizeOfArrays)

      result.push(shuffledPeople.slice(i, i += sizeOfArrays))
    }
  } else {
    noOfTeams--
    sizeOfArrays = Math.floor(length / noOfTeams)
    // console.log('3RD if: sortIntoTeams  sizeOfArrays ', sizeOfArrays)

    if (length % sizeOfArrays === 0) sizeOfArrays--

    while (i < sizeOfArrays * noOfTeams) {
      result.push(shuffledPeople.slice(i, i += sizeOfArrays))
    }
    result.push(shuffledPeople.slice(sizeOfArrays * noOfTeams))
  }
  // console.log('Result ', result)
  return result
}

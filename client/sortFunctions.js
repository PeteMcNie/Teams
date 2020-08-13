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
  const result = []
  const noOfPeople = shuffledPeople.length
  let i = 0
  let sizeOfTeams
  let noOfTeams = Number(numberOfTeams)
  let balanced

  if (noOfPeople % noOfTeams === 0) { // If the remainder of array noOfPeople and noOfTeams is 0 then:
    sizeOfTeams = Math.floor(noOfPeople / noOfTeams) // the sizOfTeams is the noOfPeople divided by noOfTeams eg. 3 = 9 / 3
    console.log('1ST if: sortIntoTeams  sizeOfTeams ', sizeOfTeams)
    while (i < noOfPeople) { // if noOfPeople is greater than 0
      result.push(shuffledPeople.slice(i, i += sizeOfTeams)) // push into result array, the people from index 0 to the sizeOfTeams plus 0 shuffledPeople array eg. slice(0, 3) 0 = start index, and 3 = end index (end index is not included), this means indexes 0,1,2 are sent.
    }
  } else if (balanced) {
    while (i < noOfPeople) {
      sizeOfTeams = Math.ceil((noOfPeople - i) / noOfTeams--)
     console.log('2ND if: sortIntoTeams  sizeOfTeams ', sizeOfTeams)

      result.push(shuffledPeople.slice(i, i += sizeOfTeams))
    }
  } else {
    if (noOfTeams > 2) {
      console.log('numberOfTeams is greater than 2')
      noOfTeams--
    }

    sizeOfTeams = Math.floor(noOfPeople / noOfTeams)
    console.log('3RD if: sortIntoTeams  sizeOfTeams ', sizeOfTeams)

    if (noOfPeople % sizeOfTeams === 0)
      sizeOfTeams--
    while (i < sizeOfTeams * noOfTeams) {
      result.push(shuffledPeople.slice(i, i += sizeOfTeams))
    }
    result.push(shuffledPeople.slice(sizeOfTeams * noOfTeams))
  }
  console.log('Result ', result)
  // return result
}

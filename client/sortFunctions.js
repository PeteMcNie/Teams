import { twoTeams } from './reducers'

export function shuffleSelectedPeople (selectedPeople) {
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
  console.log('sortSelectedPeople ', selectedPeople)
  return selectedPeople
}

export function sortIntoGroups (shuffledPeople) {
  // IF STATEMENT TO GO IN HERE IF DIVIDING INTO MORE THAN TWO TEAMS
  const halfOfArray = Math.floor(shuffledPeople.length / 2)
  const teamOne = shuffledPeople.slice(0, halfOfArray)
  const teamTwo = shuffledPeople.slice(halfOfArray, shuffledPeople.length)
  // console.log('teamOne: ', teamOne)
  // console.log('teamTwo: ', teamTwo)
  const teams = { teamOne, teamTwo }
  // console.log('teams: ', teams)
  return twoTeams(teams)
}

// "sqlite3": "https://github.com/mapbox/node-sqlite3/tarball/master",

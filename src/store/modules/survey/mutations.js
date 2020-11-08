export default {
  addName (state, newName) {
    state.user.name = newName
  },
  toggleGoal (state, goal) {
    if (!state.user.goals.includes(goal) && state.user.goals.length < 4) {
      state.user.goals.push(goal)
    } else {
      state.user.goals = state.user.goals.filter(value => value !== goal)
    }
  },
  addDiet (state, newDiet) {
    state.user.diet = newDiet
  },
  addDob (state, newDob) {
    state.user.dob = newDob
  },
  incrementCurrentStep (state) {
    state.currentStep++
  },
  decrementCurrentStep (state) {
    state.currentStep--
  },
  resetState (state) {
    state.user.name = ''
    state.user.goals = []
    state.user.diet = ''
    state.user.dob = ''
    state.currentStep = 0
  }
}

export default {
  name: state => {
    return state.user.name
  },
  goals: state => {
    return state.user.goals
  },
  diet: state => {
    return state.user.diet
  },
  dob: state => {
    return state.user.dob
  },
  user: state => {
    return state.user
  },
  currentStep: state => {
    return state.currentStep
  }
}

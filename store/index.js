export const state = () => ({
  showApply: false,
  showResult: false,
  applyCompany: '',
  applyJob: ''
})

export const getters = {
  showApply(state) {
    return state.showApply
  },
  showResult(state) {
    return state.showResult
  },
  applyCompany(state) {
    return state.applyCompany
  },
  applyJob(state) {
    return state.applyJob
  }
}

export const mutations = {
  updateShowApply(state, data) {
    state.showApply = data
  },
  updateShowResult(state, data) {
    state.showResult = data
  },
  setApplyCompany(state, data) {
    state.applyCompany = data
  },
  setApplyJob(state, data) {
    state.applyJob = data
  }
}

export const actions = {
}
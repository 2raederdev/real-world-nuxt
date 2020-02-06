import EventService from '@/services/EventService.js'
export const state = () => ({
  events: [],
  event: {}
})
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}
export const actions = {
  async fetchEvents({ commit }) {
    await EventService.getEvents().then((response) => {
      commit('SET_EVENTS', response.data)
    })
  },
  async fetchEvent({ commit }, id) {
    await EventService.getEvent(id).then((response) => {
      commit('SET_EVENT', response.data)
    })
  }
}

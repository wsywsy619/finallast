export default {
  changecity (state, x) {
    state.city = x
    try {
      localStorage.city = x
    } catch (e) {}
  }
}

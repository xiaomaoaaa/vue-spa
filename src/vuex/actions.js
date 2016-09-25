export const incrementCounter = ({ dispatch }) => dispatch('INCREMENT')
export const decrementCounter = ({ dispatch }) => dispatch('DECREMENT')
export const initCounter = ({ dispatch }, val) => dispatch('DECREMENT', val)
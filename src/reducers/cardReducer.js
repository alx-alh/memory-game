
const cardReducer = (state, action) => {
  switch (action.type) {
    case 'setFirstCard': {
      return {
        ...state,
        firstCard: action.payload
      }
    }
    case 'setSecondCard': {
      return {
        ...state,
        secondCard: action.payload
      }
    }
    case 'matchSelected': {
      return {
        ...state,
        matchedCards: [...state.matchedCards, state.firstCard, state.secondCard],
        firstCard: undefined,
        secondCard: undefined,
      }
    }
    case 'resetSelection': {
      return {
        ...state,
        firstCard: undefined,
        secondCard: undefined,
      }
    }
    case 'resetMatches': {
      return {
        ...state,
        firstCard: undefined,
        secondCard: undefined,
        matchedCards: [],
      }
    }
    default:
      throw new Error('unrecognized action');
  }
}
export default cardReducer;
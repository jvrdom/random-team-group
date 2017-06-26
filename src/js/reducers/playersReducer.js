export default function reducer(state={
    players: false,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
    switch (action.type) {
      case "FETCH_PLAYERS": {
        return {...state, fetching: true}
      }
      case "FETCH_PLAYERS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PLAYERS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          players: action.payload,
        }
      }
    }

    return state
}

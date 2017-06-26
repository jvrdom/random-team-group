export function fetchPlayers() {
  return {
    type: "FETCH_PLAYERS_FULFILLED",
    payload: [ "Javier", "Mathi", "PH", "Nico P", "Nico C", "Tonio", "Vikingo", "Lorena", "Dorian", "Dante", "Rafa", "Maxi", "Marketing", "Guille BI" ],
  };
}

export function setNewPlayersList(players) {
  return {
    type: "SET_NEW_PLAYERS_LIST",
    payload: {
      players: players
    }
  };
}

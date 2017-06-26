export function fetchPlayers() {
  return {
    type: "FETCH_PLAYERS_FULFILLED",
    payload: [ "Javier", "Mathi", "PH", "Nico P", "Nico C", "Tonio", "Vikingo", "Lorena", "Dorian", "Dante", "Rafa", "Maxi", "Marketing", "Guille BI" ],
  };
}

export function selectPlayer(id) {
  return {
    type: "SELECT_USER",
    payload: {
      id: id
    }
  };
}

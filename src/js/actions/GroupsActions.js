export function fetchGroups() {
  return {
    type: "FETCH_GROUPS_FULFILLED",
    payload: [
      { name: "Group A", "players": [{ "name": "Gaspar", "team": "Arsenal"}], "count": 1 },
      { name: "Group B", "players": [{ "name": "Gonza", "team": "Barcelona"}], "count": 1 },
      { name: "Group C", "players": [{ "name": "Beto", "team": "Juventus"}], "count": 1 },
      { name: "Group D", "players": [{ "name": "Agustin", "team": "Borussia" }], "count": 1 }
    ]
  };
}

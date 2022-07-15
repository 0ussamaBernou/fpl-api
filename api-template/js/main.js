//Example fetch using pokemonapi.co

function getFetch() {
  const choice = document.querySelector("input").value.toLowerCase();
  const url = `https://fantasy.premierleague.com/api/bootstrap-static/`;

  fetch(url, {
    method: "GET",
    headers: {
      mode: "no-cors"
  }
})
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.querySelector("button").addEventListener("click", getFetch);

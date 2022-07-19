document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const url = `https://fantasy.premierleague.com/api/bootstrap-static/`;

  let requestOptions = {
    method: "GET",
    redirect: "follow",
    mode: 'no-cors'
  };

  fetch(
    "https://fantasy.premierleague.com/api/bootstrap-static/",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

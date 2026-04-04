const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const celsius = parseInt(document.querySelector("#celsius").value);
  const results = document.querySelector("#results");

  if (celsius === "" || celsius < -273.15 || isNaN(celsius)) {
    results.innerHTML = `Please give a valid temperature in Celsius`;
  } else {
    const fahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);
    results.innerHTML = `<span>${fahrenheit}°F</span>`;
  }
});

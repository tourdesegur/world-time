// Updates inities HTML with the live data from AJAX library: https://momentjs.com/docs/#/manipulating/timezone-offset/
function updateTime() {
    let lisbonElement = document.querySelector("#lisbon");
    if (lisbonElement) {
        let lisbonDateElement = lisbonElement.querySelector(".date");
        let lisbonTimeElement = lisbonElement.querySelector(".time");
        let lisbonTime = moment().tz("Europe/Lisbon");

        lisbonDateElement.innerHTML = moment().format("MMMM Do YYYY");
        lisbonTimeElement.innerHTML = lisbonTime.format("h:mm:ss[<small>] A[</small]");
    }

    let nyElement = document.querySelector("#new-york");
    if (nyElement) {
        let nyDateElement = nyElement.querySelector(".date");
        let nyTimeElement = nyElement.querySelector(".time");
        let nyTime = moment().tz("America/New_York");

        nyDateElement.innerHTML = moment().format("MMMM Do YYYY");
        nyTimeElement.innerHTML = nyTime.format("h:mm:ss[<small>] A[</small]");
    }

    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
        let tokyoDateElement = tokyoElement.querySelector(".date");
        let tokyoTimeElement = tokyoElement.querySelector(".time");
        let tokyoTime = moment().tz("Asia/Tokyo");

        tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
        tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss[<small>] A[</small]");
    }
}

// Replace initial HTML with the formatted data for the chosen city. "Current" option shows the user's Time Zone with it's major city
function updateCity(event) {
    console.log(event);
    console.log(event.target.value);
    let cityTimezone = event.target.value;
    if (cityTimezone === "current") {
      cityTimezone = moment.tz.guess();
    }
  
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city d-flex justify-content-between" id="lisbon">
        <div>
            <h2>${cityName}</h2>
            <div class="date mb-4">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(" A")}</small></div>
    </div>
    <button type="button" class="btn btn-light"><a href="/" class="link-home">All cities</a></button>
    `;
  }
  
  // Calls updateCity function upon select element change
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);

  // Calls updateTime function upon the page load
  updateTime();
  setInterval(updateTime, 1000);


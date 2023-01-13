function updateTime() {
    let lisbonElement = document.querySelector("#lisbon");
    if (lisbonElement) {
        let lisbonDateElement = lisbonElement.querySelector(".date");
        let lisbonTimeElement = lisbonElement.querySelector(".time");
        let lisbonTime = moment().tz("Europe/Lisbon");

        lisbonDateElement.innerHTML = moment().format("MMMM Do YYYY");
        lisbonTimeElement.innerHTML = lisbonTime.format("h:mm:ss[<small>] A[</small]");
    }
}

updateTime();
setInterval(updateTime, 1000);
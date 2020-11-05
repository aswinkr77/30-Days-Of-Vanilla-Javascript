inputFocus = document.querySelector("input");
spanFocus = document.querySelector(".line");
display = document.querySelector("ul");

inputFocus.addEventListener("focusin", () => {
    spanFocus.classList.add("span-focus");
    if (inputFocus.value != "")
        display.classList.remove("hide");
});

inputFocus.addEventListener("focusout", () => {
    display.classList.add("hide");
    if (inputFocus.value == "")
        spanFocus.classList.remove("span-focus");
});

const dataURL = "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json";

const cities = [];

fetch(dataURL).then(
    e => e.json().then(
    cityData => cities.push(...cityData)));

function findCity(words)
{
    return cities.filter(e => {
        const search = new RegExp(words, "gi")
        return e.name.match(search) || e.state.match(search);
    });
}

function displayCity()
{
    const matchCity = findCity(this.value);
    const showCity = matchCity.map(e => {

        const regex = new RegExp(this.value, "gi");
        const cityName = e.name.replace(regex, `<span class="highlight">${this.value}</span>`);
        const stateName = e.state.replace(regex, `<span class="highlight">${this.value}</span>`);

        return `<li>${cityName.toLowerCase()}, ${stateName.toLowerCase()}</li>`;
    }).join("");
    
    display.innerHTML = showCity;

    if (inputFocus.value == "")
        display.classList.add("hide");
    else
        display.classList.remove("hide");   
}

inputFocus.addEventListener("change", displayCity);
inputFocus.addEventListener("keyup", displayCity);
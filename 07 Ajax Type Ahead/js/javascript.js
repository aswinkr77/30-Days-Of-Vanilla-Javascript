inputFocus = document.querySelector("input");
spanFocus = document.querySelector(".line");
display = document.querySelector("ul");

display.addEventListener("click", () => {
    console.log("hide");
});

inputFocus.addEventListener("focusin", () => {
    spanFocus.classList.add("span-focus");
    display.classList.remove("hide");
});

inputFocus.addEventListener("focusout", () => {
    spanFocus.classList.remove("span-focus");
    display.classList.add("hide");
});

display.addEventListener("click", () => {
    console.log("hide");
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
}

inputFocus.addEventListener("change", displayCity);
inputFocus.addEventListener("keyup", displayCity);
const controlInputs = document.querySelectorAll(".control input");

function updateVariables(){
    const value = this.dataset.sizing || "";
                
    document.documentElement.style.setProperty(`--${this.name}`, this.value + value);
}

controlInputs.forEach(input => input.addEventListener("change", updateVariables));
controlInputs[2].addEventListener("mousemove", updateVariables);
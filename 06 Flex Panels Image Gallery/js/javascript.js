const panel = document.querySelectorAll(".panel");

function addClass()
{
    for(i=0; i<panel.length; ++i)
    {
        if (panel[i] == this)
            continue;
        else
            panel[i].classList.remove("active");
    }

    this.classList.toggle("active");
}

function addPanelClass(e)
{
    if (e.propertyName.includes("flex"))
        this.classList.toggle("panel-active");
}

panel.forEach(e => e.addEventListener("click", addClass));
panel.forEach(e => e.addEventListener("transitionend", addPanelClass));
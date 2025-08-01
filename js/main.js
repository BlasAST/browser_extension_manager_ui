document.addEventListener("DOMContentLoaded", () =>
{
    events();
})

let targets;
let theme;
let actives;
let inactives;
function events()
{
    targets = document.querySelectorAll("section")
    console.log(targets)
    targets.forEach(target => target.addEventListener("click", functionButtons))
    theme = document.querySelector(".theme_items")
}
function functionButtons(evt)
{
        if (evt.target.tagName == "BUTTON" && evt.target.textContent == "Remove")
                evt.target.parentElement.remove();
        else if (evt.target.tagName == "SPAN")
            console.log("yaya");
}
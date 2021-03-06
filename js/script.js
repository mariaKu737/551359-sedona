var
    close = document.querySelector(".button-form-open"),
    modal = document.querySelector(".form-search"),
    arrival = document.querySelector("[name=arrival-date]"),
    departure = document.querySelector("[name=date-departure"),
    adults = document.querySelector("[name=adults]"),
    children = document.querySelector("[name=children]");

modal.classList.add("modal-out"),

close.addEventListener("click", function () {
    modal.classList.toggle("modal-out")
}),

modal.classList.remove("modal-in"),

close.addEventListener("click", function () {
    modal.classList.remove("modal-error"),
    modal.classList.toggle("modal-in")
}),

modal.addEventListener("submit", function (e) {
    arrival.value && departure.value && adults.value && children.value || (e.preventDefault(), modal.classList.remove("modal-error"), modal.classList.add("modal-error"))
});

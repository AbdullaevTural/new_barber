const formOrder = document.getElementById("form-page__order");
const popupSucces = document.querySelector(".modal-form--success");
var closeForm = popupSucces.querySelector(".modal-form__close");

formOrder.addEventListener("submit", function (evt) {
  evt.preventDefault();
  popupSucces.classList.add("modal--show");
});
closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSucces.classList.remove("modal--show");
  popupSucces.classList.remove("modal--error");
});

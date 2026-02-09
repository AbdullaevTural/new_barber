var link = document.querySelector(".user-list__login");

var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".modal-form__close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
  popup.classList.remove("modal__error");
});
form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal__error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal__error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
      popup.classList.remove("modal__error");
    }
  }
});

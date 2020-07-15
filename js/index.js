document.addEventListener("DOMContentLoaded", function() {
  let buttonsOpenPopUpWindowFeedback = document.querySelectorAll(".button-open-feedback-window");
  let popUpWindowFeedback = document.querySelector(".feedback-window");
  let buttonFeedbackWindow= document.querySelector(".feedback-window__form_button");
  let popUpWindowConfirmation = document.querySelector(".confirmation-window");
  let buttonsClose = document.querySelectorAll(".close-button");
  
  window.addEventListener('click', function(e) {
    //Открытие и закрытие всплывающих окон обратной связи
    for (let [index, element] of  buttonsOpenPopUpWindowFeedback.entries()) {
      if (element.contains(e.target)) {
        changeVisibility(popUpWindowFeedback, 'visible')
        break;
      }
      if (!element.contains(e.target) && index ===  buttonsOpenPopUpWindowFeedback.length - 1 && !popUpWindowFeedback.contains(e.target)) {
        changeVisibility(popUpWindowFeedback, 'hidden');
      }
    };
  });

  //Закрытие всплывающих окон при нажатии на кнопку закрытия
  buttonsClose.forEach((buttonClose) => buttonClose.addEventListener('click', () => changeVisibility(buttonClose.parentElement, 'hidden')));

  //Проверка полей формы на валидность
  buttonFeedbackWindow.addEventListener('click', function() {
    let name = document.querySelector(".feedback-window__form-item_name");
    let number = document.querySelector(".feedback-window__form-item_number");
    let isValid = true;

    if (!(/[А-Я]{1}[а-я]+|[A-Z]{1}[a-z]+/.test(name.value)) || !(name.value === name.value.match(/[А-Я]{1}[а-я]+|[A-Z]{1}[a-z]+/)[0])) {
      name.classList.add("not-valid");
      isValid = false;
    } else {
      name.classList.remove("not-valid");
    }

    if (!(/\+7\d{10}|8\d{10}/.test(number.value)) || !(number.value === number.value.match(/\+7\d{10}|8\d{10}/)[0])) {
      number.classList.add("not-valid");
      isValid = false;
    } else {
      number.classList.remove("not-valid");
    }

    //Открытие всплывающего окна подтверждения
    if (isValid) {
      changeVisibility(popUpWindowFeedback, 'hidden');
      changeVisibility(popUpWindowConfirmation, 'visible');
    };
  });
});

function changeVisibility(item, visibility) {
  visibility === 'visible' && item.classList.add("visible");
  visibility === 'hidden' && item.classList.remove("visible");
}
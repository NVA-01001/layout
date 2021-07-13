$(function () {
  $(document).click((e) => {
    const {
      target
    } = e;
    if (target.nodeName === 'A' && target.getAttribute('href') === '#') {
      e.preventDefault();
    }
  });
});

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let validateForms = function (selector, rules, successModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function (form) {
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено!');
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
      $('.popup__content').fadeOut(0);
      $('.thanks-popup').fadeIn(400);
      form.reset();
    }
  });
}

validateForms('.popup__form', {
  email: {
    required: true,
    email: true,
  },
  tel: {
    required: true
  },
}, '.thanks-popup', 'send goal');


new JustValidate('.popup__form', {

  rules: {

    name: {
      required: true,
      minLength: 3,
      maxLength: 30
    },

    tel: {
      required: true,
    },
  },

  messages: {
    name: {
      required: 'Укажите ваше имя',
      minLength: 'Поле должно содержать минимум 2 символа'
    },
    tel: {
      required: 'Укажите ваш телефон'
    },
    email: {
      required: 'Укажите ваш e-mail',
      email: 'Некорректный адрес электронной почты (e-mail)'
    },
  },
  
});
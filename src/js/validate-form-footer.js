import validate from 'validate.js';
import IMask from 'imask';
import { toggle } from './animation';
import { rezetSelect } from '../components/select';
//dev
import constraintsObj from '../assets/validate.json';
//prod

// let constraintsObj = {};
// (() => {
//   const res = fetch(
//     '/bitrix/templates/strigi/assets/validate.json'
//   )
//     .then((response) => response.json())
//     .then((json) => (constraintsObj = json));
// })();

// const forms = document.querySelectorAll('form');
// [...forms].forEach((item) => {
//   item.addEventListener('submit', function (ev) {
//     ev.preventDefault();
//   });
// });

const r = new RegExp(`^\\+7\\(\\d{3}\\)-\\d{3}\-\\d{2}\-\\d{2}$`);
// start форма Напишите нам
const formsBookForm = document.querySelectorAll('form.book');

if (formsBookForm) {
  [...formsBookForm].forEach((formFooterForm) => {
    initialChangeInput(formFooterForm);
    formFooterForm.addEventListener('submit', function (ev) {
      ev.preventDefault();
      handleFormSubmit(formFooterForm, requestFooterForm);
    });
    function requestFooterForm() {
      formReq(
        formFooterForm,
        'http://strigi.yes-idea.ru/ajax/request.php',
        () => toggle('success', 'open')
      );
    }
  });
}
// end форма Напишите нам

// start форма заявки на квартиру

// end форма заявки на квартиру

// start форма заявки на ипотеку

// end форма заявки на ипотеку

// start форма заявки на паркинг, кладовку

//end форма заявки на паркинг, кладовку
const formConsultantForm = document.querySelector('form#consultation');
if (formConsultantForm) {
  initialChangeInput(formConsultantForm);
  formConsultantForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    handleFormSubmit(formConsultantForm, requestConsultantForm);
  });
}
function requestConsultantForm() {
  formReq(formConsultantForm, '/ajax/createform.php', () => {
    toggle('consultation', 'close');
    toggle('success', 'open');
  });
}

export function initialChangeInput(form) {
  const inputs = form.querySelectorAll('input, textarea, select');
  const constraints = form?.dataset.form
    ? constraintsObj[form.dataset.form]
    : {};
  for (let i = 0; i < inputs.length; ++i) {
    inputs.item(i).addEventListener('change', function (ev) {
      var errors = validate(form, constraints) || {};

      checkInvalid(form, errors);
      showErrorsForInput(this, errors[this.name]);
    });
  }
}

[].forEach.call(document.querySelectorAll('[data-mask]'), function (inp) {
  const mask = inp.getAttribute('data-mask');

  if (mask)
    IMask(inp, {
      mask,
      validate: function (value, maked) {},
    });
});

function handleFormSubmit(form, nameFunc) {
  const constraints = form?.dataset.form
    ? constraintsObj[form.dataset.form]
    : {};
  var errors = validate(form, constraints) || {};

  checkInvalid(form, errors);

  showErrors(form, errors || {});

  if (Object.keys(errors).length === 0) {
    nameFunc();
    // alert('success');
  }
}

export function showErrors(form, errors) {
  [...form.querySelectorAll('input[name], select[name]')].forEach((input) => {
    showErrorsForInput(input, errors && errors[input.name]);
  });
}

export function showErrorsForInput(input, errors) {
  const field = closestParent(input.parentNode, 'field');
  const select = closestParent(input.parentNode, 'select');

  errors;
  if (field) {
    if (errors) {
      field.classList.add('field__invalid');
    } else {
      field.classList.remove('field__invalid');
    }
  }
  if (select) {
    if (errors) {
      select.classList.add('select__invalid');
    } else {
      select.classList.remove('select__invalid');
    }
  }
}

export function closestParent(child, className) {
  if (!child || child == document) {
    return null;
  }
  if (child.classList.contains(className)) {
    return child;
  } else {
    return closestParent(child.parentNode, className);
  }
}

export function checkInvalid(form, errors) {
  console.log(errors);
  console.log(form);

  if (Object.keys(errors).length === 0) {
    Array.from(form.querySelectorAll("button[type='submit']")).forEach((btn) =>
      btn.removeAttribute('disabled')
    );
  } else {
    Array.from(form.querySelectorAll("button[type='submit']")).forEach((btn) =>
      btn.setAttribute('disabled', true)
    );
  }
}

const formReq = async (form, url, action, options = {}) => {
  action();
  const formData = new FormData();
  const fields = form.querySelectorAll('input, textarea, checkbox');
  const theme = form.getAttribute('data-theme');
  const dataId = form.getAttribute('data-form');
  const id = document.getElementById('visitor_uid')?.value;
  const clientID = document.getElementById('clientID')?.value
    ? document.getElementById('clientID')?.value
    : '';
  if (theme) formData.append('PROP4', theme);

  if (dataId) formData.append('id', dataId);
  // formData.append('visitor_uid', id ? id : '');
  // formData.append('clientID', clientID ? clientID : '');
  for (let key in options) {
    formData.append(key, options.key);
  }

  Array.from(fields).forEach((field) => {
    if (field.name) {
      if (field.type === 'checkbox') {
        formData.append(field.name, field.checked);
      } else if (field.type === 'file') {
        formData.append(field.name, field.files[0]);
      } else {
        formData.append(field.name, field.value);
      }
    }
  });

  let success = false;
  // action();
  rezet(form);
  // const res = await fetch(url, {
  //   method: 'POST',
  //   body: formData,
  // })
  //   .then((responce) => {
  //     if (responce.status === 200) {
  //       suc = true;
  //       action();
  //     }
  //   })
  //   .catch((e) => console.log(e));
  return success;
};

function rezet(f) {
  // const inputs = f.querySelectorAll('input');
  // [...inputs].forEach((inp) => {
  //   const select = inp.closest('.select');
  //   if (select) {
  //     rezetSelect(select);
  //   } else {
  //     inp.value = '';
  //   }
  // });
}

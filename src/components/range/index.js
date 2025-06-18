// форматирование чисел
export function number_format(
  number,
  decimals = 0,
  dec_point = '.',
  thousands_sep = ','
) {
  let sign = number < 0 ? '-' : '';

  let s_number =
    Math.abs(parseInt((number = (+number || 0).toFixed(decimals)))) + '';
  let len = s_number.length;
  let tchunk = len > 3 ? len % 3 : 0;

  let ch_first = tchunk ? s_number.substr(0, tchunk) + thousands_sep : '';
  let ch_rest = s_number
    .substr(tchunk)
    .replace(/(\d\d\d)(?=\d)/g, '$1' + thousands_sep);
  let ch_last = decimals
    ? dec_point + (Math.abs(number) - s_number).toFixed(decimals).slice(2)
    : '';

  return sign + ch_first + ch_rest + ch_last;
}

const rangeList = document.querySelectorAll('.range-filter');

[...rangeList].forEach((r) => {
  let inputLeft = r.querySelector('.input-left');
  let inputRight = r.querySelector('.input-right');
  let range = r.querySelector('.slider > .range');
  let priceFrom = r.querySelector('.price-from .number');
  let priceTo = r.querySelector('.price-to .number');

  const inpt = r.querySelector('.input-general');

  // const observerInRezumeList = new MutationObserver(function (mutations) {
  //   const leftVal = setLeftValue();
  //   const rightVal = setRightValue();
  // });

  // observerInRezumeList.observe(inputLeft, {
  //   attributes: true,
  //   characterDataOldValue: true,
  //   attributeFilter: ['data-value'],
  // });

  setLeft(inputLeft);

  setRight(inputRight);
  function updateVal() {
    const pref = r.getAttribute('data-prefix') ?? '';
    r.setAttribute('data-left', `${inputLeft.value}`);
    r.setAttribute('data-right', `${inputRight.value}`);
    r.setAttribute(
      'data-value',
      `${inputLeft.value}-${inputRight.value} ${pref}`
    );
    setTimeout(() => {}, 0);
  }
  inputLeft.addEventListener('input', setLeftValue);
  inputLeft.addEventListener('change', updateVal);
  inputRight.addEventListener('input', setRightValue);
  inputRight.addEventListener('change', updateVal);

  inputLeft.addEventListener('mouseover', (e) => {
    inputLeft.classList.add('hover');
  });
  inputLeft.addEventListener('mouseout', (e) => {
    inputLeft.classList.remove('hover');
  });
  inputLeft.addEventListener('mousedown', (e) => {
    inputLeft.classList.add('active');
  });
  inputLeft.addEventListener('mouseup', (e) => {
    inputLeft.classList.remove('active');
  });
  inputLeft.addEventListener('touchstart', (e) => {
    inputLeft.classList.add('active');
  });
  inputLeft.addEventListener('touchend', (e) => {
    inputLeft.classList.remove('active');
  });

  inputRight.addEventListener('mouseover', (e) => {
    inputRight.classList.add('hover');
  });
  inputRight.addEventListener('mouseout', (e) => {
    inputRight.classList.remove('hover');
  });
  inputRight.addEventListener('mousedown', (e) => {
    inputRight.classList.add('active');
  });
  inputRight.addEventListener('mouseup', (e) => {
    inputRight.classList.remove('active');
  });
  inputRight.addEventListener('touchstart', (e) => {
    inputRight.classList.add('active');
  });
  inputRight.addEventListener('touchend', (e) => {
    inputRight.classList.remove('active');
  });
});

function setLeftValue() {
  setLeft(this);
}
export function setLeft(inputLeft) {
  let min = parseInt(inputLeft.min),
    max = parseInt(inputLeft.max);
  const parent = inputLeft.closest('.range-filter');
  const priceFrom = parent.querySelector('.price-from .number');
  const inputRight = parent.querySelector('.input-right');
  const range = parent.querySelector('.slider > .range');
  inputLeft.value = Math.min(
    parseInt(inputLeft.value),
    parseInt(inputRight.value) - 1
  );
  priceFrom.textContent = `${inputLeft.value}`;

  let percent = ((inputLeft.value - min) / (max - min)) * 100;

  range.style.left = `${percent}% `;
}

export function setRight(inputRight) {
  let min = parseInt(inputRight.min),
    max = parseInt(inputRight.max);
  const parent = inputRight.closest('.range-filter');
  const priceTo = parent.querySelector('.price-to .number');
  const inputLeft = parent.querySelector('.input-left');
  const range = parent.querySelector('.slider > .range');

  inputRight.value = Math.max(
    parseInt(inputRight.value),
    parseInt(inputLeft.value) + 1
  );
  priceTo.textContent = `${inputRight.value}`;

  let percent = ((inputRight.value - min) / (max - min)) * 100;

  range.style.right = 100 - percent + '%';
}

function setRightValue() {
  setRight(this);
}

const rangeInputs = document.querySelectorAll('.inprange ');
// [...rangeInputs].forEach((r) => {
//   let itInput;

//   const rangeInput = r.querySelector('input[type="range"]');
//   const rangeSlide = r.querySelector('.range');
//   const input = r.querySelector('input.inprange__value');
//   if (r.hasAttribute('disabled') && input && rangeInput) {
//     input.setAttribute('disabled', '');
//     rangeInput.setAttribute('disabled', '');
//   }

//   function setInput(e) {
//     itInput = 'number';
//     input.value = number_format(
//       input.value.replace(/[^\d*]/gi, ''),
//       0,
//       '.',
//       ' '
//     );

//     if (e) r.setAttribute('data-value', input.value);
//   }
//   function onBlurInput(e) {
//     min = parseInt(rangeInput.min);
//     console.log(r);

//     if (this.value < min) {
//       rangeInput.value = min;
//       this.value = min;
//       r.setAttribute('data-value', this.value);
//     }
//   }

//   function setLeftValue(e) {
//     itInput = 'range';
//     let _this = rangeInput,
//       min = parseInt(_this.min),
//       max = parseInt(_this.max);

//     let percent = ((_this.value - min) / (max - min)) * 100;
//     if (e) r.setAttribute('data-value', _this.value);
//     rangeSlide.style.width = `${percent}% `;
//   }
//   rangeInput.addEventListener('input', setLeftValue);
//   input.addEventListener('input', setInput);
//   input.addEventListener('blur', onBlurInput);
//   if (rangeInput && rangeInput.min) {
//     setVals(rangeInput.value);
//     // rangeInput.dispatchEvent(new Event('input'))
//   }
//   const observerInRezumeList = new MutationObserver(function (mutations) {
//     setVals(r.dataset.value);
//     setLeftValue();
//     setInput();
//   });

//   observerInRezumeList.observe(r, {
//     attributes: true,
//     characterDataOldValue: true,
//     attributeFilter: ['data-value'],
//   });
//   function setVals(val) {
//     const max = parseInt(rangeInput.max);
//     if (val > max) {
//       rangeInput.value = max;
//       // input.value = max;
//       input.value = number_format(max, 0, '.', ' ');
//       r.setAttribute('data-value', max);
//     } else {
//       rangeInput.value = val;
//       // input.value = val;
//       input.value = number_format(val, 0, '.', ' ');
//     }
//   }
// });

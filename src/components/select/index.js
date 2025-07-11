document.addEventListener('DOMContentLoaded', () => {
  const selects = document.querySelectorAll('.select ');
  [...selects].forEach((select) => {
    initSelect(select);
  });
});
let openSelect;
export function initSelect(select) {
  select.onclick = actionSelect;
  const initEl = select.querySelector('.select__options [data-init]');

  if (initEl) {
    const head = select.querySelector('.select__head');
    const input = select.querySelector('input');
    const val = initEl.dataset.val;
    setVal(initEl, head, input, val);
  }
}
export let update = false;
export function updateEl(val) {
  update = val;
}
function actionSelect(e) {
  const head = this.querySelector('.select__head');
  const body = this.querySelector('.select__body');

  let options;
  if (this.hasAttribute('data-sel')) {
    options = this.querySelectorAll('.select__options > *');
  }

  const currentTarget = e.target;

  if (currentTarget === head) {
    if (this.classList.contains('active')) this.classList.remove('active');
    else {
      setXPosBody(this);
      this.classList.add('active');
      [...options].forEach((opt) => {
        // console.log(opt);

        // const optsChild = opt.querySelectorAll('.checkbox__childs > *');
        // console.log(optsChild);
        // if (optsChild.length > 0) {
        //   [...optsChild].forEach((optChild) => {
        //     console.log(optChild);

        //     optChild.onclick = selectOpt.bind(
        //       null,
        //       optChild,
        //       head,
        //       optsChild,
        //       this,
        //       opt
        //     );
        //   });
        // }
        opt.onclick = selectOpt;
        // opt.onclick = selectOpt.bind(null, opt, head, options, this, null);
      });
      window.onclick = windowTarget.bind(null, this);
      setTimeout(() => (openSelect = this), 0);
    }
  }
}
// function selectOpt(opt, head, options, _this, parentChild = null, e) {
export function selectOpt(e) {
  updateEl(true);
  const opt = e.currentTarget;

  const _this = opt.closest('.select');

  const head = _this.querySelector('.select__head');
  const options = _this.querySelectorAll('.select__options > *');

  // console.log(select);
  // console.log(e.currentTarget);

  // const val = opt.dataset.val;
  const val = opt.textContent;
  const input = _this.querySelector('input');
  const inputCheckOpt = opt.querySelector('input');
  if (inputCheckOpt) {
    let v = [];
    let names = [];
    let isChecked = false;
    [...options].forEach((o) => {
      const inputOpt = o.querySelector('input');
      const optVal = o.dataset.val;
      const optKey = o.querySelector('.checkbox__label').textContent;

      if (optVal) {
        if (inputOpt)
          if (inputOpt.checked) {
            v.push(optVal);
            names.push(optKey);
            isChecked = true;
          } else {
            if (!isChecked) isChecked = false;
          }
      }
    });
    // console.log(isChecked);

    setVal(opt, head, input, names.join(','), v.join('-'), true);
    if (!isChecked) {
      rezetSelect(_this);
    }
  } else {
    if (val) {
      [...options].forEach((o) => {
        if (o !== opt && o.classList.contains('active'))
          o.classList.remove('active');
      });
      _this.classList.remove('active');
      setVal(opt, head, input, val);
    }
  }
}
function windowTarget(_this, e) {
  if (!e.composedPath().includes(_this)) {
    _this.classList.remove('active');
  } else if (openSelect && openSelect !== _this) {
    openSelect.classList.remove('active');
    openSelect = undefined;
  }
}

function setVal(opt, head, input, val, vals, isCheckbox) {
  if (!isCheckbox) {
    opt.classList.add('active');
    head.textContent = opt.textContent;
    input.value = opt.getAttribute('data-val');
  } else {
    // head.setAttribute('data-select', names);
    // input.value = vals;

    head.textContent = val;
  }
  head.setAttribute('data-select', val);

  // if (keys !== undefined) {
  //   input.setAttribute('data-names', keys);
  // } else {
  //   input.removeAttribute('data-names', keys);
  // }
}

function setXPosBody(select) {
  const body = select.querySelector('.select__body');
  if (body) {
    const bodyWrapper = body.querySelector('.select__body-wrapper');
    if (bodyWrapper) {
      const bodyWrapperCoords = bodyWrapper.getBoundingClientRect();
      const container = select.closest('.container');
      if (container) {
        const containerCoords = container.getBoundingClientRect();

        if (bodyWrapperCoords.right - containerCoords.right > 0) {
          body.style.right = '0';
        }
        if (bodyWrapperCoords.left - containerCoords.left < 0) {
          body.style.left = '0';
        }
      } else {
        // window.innerWidt
      }
    }
  }
}

export function rezetSelect(select) {
  const inpt = select.querySelector('input');
  const dataSelEl = select.querySelector('[data-select]');
  if (inpt) inpt.val = '';
  if (dataSelEl) dataSelEl.removeAttribute('data-select');
  const activeOptEl = select.querySelector('[data-val].active');
  if (activeOptEl) activeOptEl.classList.remove('active');

  const valLabel = select.getAttribute('data-label');

  if (valLabel) dataSelEl.textContent = valLabel;
}

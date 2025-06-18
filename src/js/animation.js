let openModelEL;
let isDragging = false;
let startY = 0,
  currentY = 0,
  deltaY = 0,
  startBottom;
let target;
export const animateCSS = (element, animation, prefix = 'animate__') => {
  let node;
  if (typeof element === 'string') {
    node = document.querySelector(element);
  } else {
    node = element;
  }
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true });

    // We create a Promise and return it
  });
};

const btns = document.querySelectorAll('[data-action]');
[...btns].forEach((btn) => {
  btn.onclick = clickBtn;
});

export function toggle(target, action) {
  const el = document.querySelector(`#${target}`);
  const body = document.querySelector('body');
  const modalEL = document.querySelector(`#${target}`);
  if (openModelEL) {
    const modalId = openModelEL.getAttribute('id');

    if (modalId) {
      openModelEL = undefined;
      toggle(modalId, 'close');
    }
  }
  if (target) {
    const el = document.querySelector(`#${target}`);

    if (el) {
      const isFull = el.hasAttribute('data-full');
      if (el.dataset?.animateOpen && el.dataset?.animateClose) {
        if (action === 'open') {
          openModelEL = modalEL;

          if (isFull && body) body.style.overflow = 'hidden';
          el.classList.add('open');
          animateCSS(`#${target}`, el.dataset.animateOpen).then(() => {
            el.classList.remove('open');
            el.classList.add('active');
          });

          if (modalEL) {
            modalEL.addEventListener('click', modalClick, false);
            if (window.innerWidth < 1024) {
              const bottomSheet = el.querySelector('.bottom-sheet');
              if (bottomSheet) {
                const dragHandle = el.querySelector('.drag-handle');

                bottomSheet.style.bottom = '0';
                bottomSheet.style.transform = `translateY(${startY}px)`;
                dragHandle.addEventListener('mousedown', startDragging);
              }
            }
          }
        }
        if (action === 'close') {
          openModelEL = undefined;
          if (el.querySelector('form')?.hasAttribute('data-theme'))
            el.querySelector('form').removeAttribute('data-theme');
          if (isFull && body) body.style.overflow = 'auto';
          console.log(el.dataset.animateClose);
          animateCSS(`#${target}`, el.dataset.animateClose).then(() => {
            el.classList.remove('active');
          });

          if (modalEL) {
            modalEL.removeEventListener('click', modalClick);
          }
        }
        if (action === 'toggle') {
          if (el.classList.contains('active')) {
            if (isFull && body) body.style.overflow = 'auto';
            animateCSS(`#${target}`, el.dataset.animateClose).then(() =>
              el.classList.remove('active')
            );
          } else {
            if (isFull && body) body.style.overflow = 'hidden';
            el.classList.add('open');
            animateCSS(`#${target}`, el.dataset.animateOpen).then(() => {
              el.classList.remove('open');
              el.classList.add('active');
            });
          }
        }
      } else {
        if (action === 'open') el.classList.add('active');
        if (action === 'close') {
          el.classList.remove('active');
        }
        if (action === 'toggle') {
          if (el.classList.contains('active')) el.classList.remove('active');
          else el.classList.add('active');
        }
      }
    }
  }
}

export function clickBtn() {
  const target = this.getAttribute('data-target');
  const action = this.getAttribute('data-action');
  const body = document.querySelector('body');
  if (
    this.closest('.modal') &&
    this.closest('.modal').querySelector('form') &&
    action === 'close'
  ) {
    const modal = this.closest('.modal');
    const form = modal.querySelector('form#rezume');
    if (form) {
      const formData = new FormData(form);
      let isData = false;
      for (var pair of formData.entries()) {
        if (pair[1]) {
          isData = true;
          break;
        }
      }
      if (isData) {
        const el = document.querySelector(`#${target}`);

        el.classList.remove('active');
        open('exit');
      }
    } else {
      toggle(target, action);

      if (this.hasAttribute('data-stay')) {
        open(this.dataset.stay);
      }
      if (this.hasAttribute('data-exit')) {
        console.log('очистка полей');
      }
    }
  } else {
    const el = document.querySelector(`#${target} form`);
    if (el) {
      if (this.hasAttribute('data-theme'))
        el.setAttribute('data-theme', this.getAttribute('data-theme'));

      if (this.hasAttribute('data-id'))
        el.setAttribute('data-id', this.getAttribute('data-id'));

      if (this.hasAttribute('data-name')) {
        const elName = el.querySelector('[data-name]');
        if (elName) elName.textContent = this.getAttribute('data-name');
        el.setAttribute('data-theme', this.getAttribute('data-name'));
      }
      el.setAttribute('data-id', this.getAttribute('data-id'));
    }
    toggle(target, action);
    if (this.hasAttribute('data-stay')) {
      open(this.dataset.stay);
    }
    if (this.hasAttribute('data-exit')) {
      const el = document.querySelector(`#${this.dataset.exit} form`);
      if (el && el?.hasAttribute('data-theme'))
        el.removeAttribute('data-theme');
      console.log('очистка полей');
    }
  }
}

function open(target) {
  const el = document.querySelector(`#${target}`);
  if (el.dataset?.animateOpen && el.dataset?.animateClose) {
    const isFull = el.hasAttribute('data-full');
    if (isFull && body) body.style.overflow = 'hidden';
    el.classList.add('open');
    animateCSS(`#${target}`, el.dataset.animateOpen).then(() => {
      el.classList.remove('open');
      el.classList.add('active');
    });
    const modalEL = document.querySelector(`${target}`);

    if (modalEL) {
      window.addEventListener('click', modalClick);
    }
  }
}

function modalClick(e) {
  if (e.target === this) if (this.id) toggle(this.id, 'close');
  //  data-target="rezume-modal"  data-action="close"
}

function startDragging(event) {
  event.preventDefault();
  isDragging = true;
  if (event.type === 'mousedown') {
    if (event.button !== 0) return;
    event.preventDefault();
    startY = event.clientY;
  } else if (event.type === 'touchstart') {
    startY = event.touches[0].clientY;
  } else {
    return;
  }

  const bottomSheet = this.closest('.bottom-sheet');
  if (bottomSheet) {
    startBottom = parseInt(getComputedStyle(bottomSheet).bottom);

    bottomSheet.addEventListener('mousemove', drag);
    bottomSheet.addEventListener('mouseup', stopDragging);
  }
}

function drag(event) {
  // console.log(isDragging);

  if (!isDragging) return;
  if (event.type === 'mousemove') {
    currentY = event.clientY;
  } else if (event.type === 'touchmove') {
    currentY = event.touches[0].clientY;
  } else {
    return;
  }
  deltaY = currentY - startY;
  // bottomSheet.style.bottom = Math.min(startBottom - deltaY, 0) + 'px';

  if (deltaY > 0) {
    this.style.transform = `translateY(${deltaY}px)`;
  } else {
    this.style.transform = 'translateY(0px)';
  }

  // console.log(startBottom - deltaY);
}

function stopDragging() {
  isDragging = false;
  this.style.transform = 'translateY(100%)';
  startY = 0;
  currentY = 0;
  deltaY = 0;
  const targetEl = this.closest('.modal');
  if (targetEl) {
    const targetId = targetEl.getAttribute('id');
    console.log(targetId);

    toggle(targetId, 'close');
  }

  this.removeEventListener('mousemove', drag);
  this.removeEventListener('mouseup', stopDragging);
}

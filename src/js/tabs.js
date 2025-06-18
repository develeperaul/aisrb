document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs');
  const paramsGet = window.location.search
    .replace('?', '')
    .split('&')
    .reduce(function (p, e) {
      var a = e.split('=');
      p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
    }, {});
  if (tabs && tabs.length > 0) {
    [...tabs].forEach((tab) => {
      const btns = tab.querySelectorAll('[data-target]');

      if (btns && btns.length > 0) {
        [...btns].forEach((btn) => {
          const activeTab = paramsGet[`tab_${btn.dataset.target}`];

          btn.onclick = clicktTab.bind(null, btn, btns);
          if (activeTab) {
            btn.dispatchEvent(new Event('click'));
            btn.scrollIntoView({
              block: 'start',
              behavior: 'smooth',
            });
          }
        });
      }
    });
  }
});
export const clicktTab = function (_this, btns, e) {
  btns.forEach((btn) => {
    if (btn.classList.contains('active') && _this != btn) {
      const idTarget = btn.getAttribute('data-target');

      if (idTarget) {
        btn.classList.remove('active');

        const targetActive = document.querySelector(`#${idTarget}`);
        console.log(idTarget);
        console.log(targetActive);

        if (targetActive) {
          targetActive.classList.remove('active');
        }
      }
    }
  });
  const idTarget = _this.getAttribute('data-target');
  if (idTarget) {
    const targetActive = document.querySelector(`#${idTarget}`);
    if (targetActive) {
      _this.classList.add('active');
      targetActive.classList.add('active');
    }
  }
};

<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
CJSCore::Init();
$APPLICATION->SetTitle("Podborshik");
$APPLICATION->ShowHead();
CModule::IncludeModule("iblock");
?>

<section class="inner">
        <div class="container">
          <div class="inner-cover">
            <div class="inner-cover__wrapper">
              <div class="inner-cover__top">
                <div class="breadcrumb">
                  <a class="link link--tertiary" href="/">Главная</a>
                  <span class="link link--secondary">Контакты</span>
                </div>
                <div class="inner-cover__top-content">
                  <h1 class="title">Контакты</h1>
                </div>
              </div>
              <div class="inner-cover__bg">
                <img src="<?=SITE_TEMPLATE_PATH?>/img/contacts..png" alt="test">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section1 section-rounded contacts">
        <div class="container">
          <div class="contacts__wrapper">
            <div class="contacts__content">
              <div class="contacts__content--top">
                <div class="contacts__content--list">
                  <div class="contacts__content--item item">
                    <div class="item__title">Центральный офис АИС</div>
                    <a href="tel:+73472257364" class="item__text">+7 (347) 225-73-64</a>
                    <a href="tel:+73472242540" class="item__text">+7 (347) 224-25-40</a>
                    <a href="tel:+73472242040" class="item__text">+7 (347) 224-20-40</a>
                    <a href="mailto:aisrb.disk@yandex.ru  " class="item__text">aisrb.disk@yandex.ru </a>
                    
                  </div>
                  <div class="contacts__content--item item">
                    <div class="item__title">ЖК Черника, офис продаж </div>
                    <a href="tel:+73472586600" class="item__text">+7 (347) 258-66-00</a>
                    <a href="mailto:chernikadomufa@yandex.ru " class="item__text">chernikadomufa@yandex.ru </a>
                  </div>
                  <div class="contacts__content--item item">
                    <div class="item__title">ЖК ГРАНИ, офис продаж </div>
                    <a href="tel:+73472586699" class="item__text">+7 (347) 258-66-99</a>
                    <a href="mailto:aisrb.disk@yandex.ru " class="item__text">aisrb.disk@yandex.ru  </a>
                  </div>
                  <div class="contacts__content--item item">
                    <div class="item__title">ЖК Новый Фамильный, офис продаж</div>
                    <a href="tel:+73472586611" class="item__text">+7 (347) 258-66-11</a>
                    <a href="mailto:agidel-invest@mail.ru  " class="item__text">agidel-invest@mail.ru   </a>
                  </div>
                  
                </div>
              </div>
              <div class="contacts__content--bottom">
                <form class="contacts__content--form form book" data-form="book">
                  <div class="form__top">
                    <h3 class="form__title">Забронировать</h3>
                    <p class="form__text">Оставьте заявку и наш специалист свяжется с вами, чтобы ответить на все вопросы о квартирах, ипотеке и спецпредложениях</p>
                  </div>
                  <div class="form__fields">
                    <div class="field ">
                      <label class="field__label">Телефон</label>
                      <div class="field__wrapper">
                        
                        <input class="field__input" type="text" name="phone" placeholder="+7 (999) 000-00-00" data-mask="+{7}(000)-000-00-00">
                        
                      </div>
                      <span class="field__hint">Обязательно для заполнения</span>
                    </div>
                    <div class="field ">
                      <label class="field__label">Имя</label>
                      <div class="field__wrapper">
                        
              <input class="field__input" type="text" name="name" placeholder="Введите имя">
              
            </div>
            <span class="field__hint">Обязательно для заполнения</span>
          </div>
          <div class="select" data-sel data-label="Выберите">
            <input type="text" hidden name="day">
            <div class="select__label">Когда позвонить</div>
            <div class="select__head">Выберите</div>
            <div class="select__body">
              <div class="select__body-wrapper">
                <div class="select__options">
                  <div data-val="Сегодня" data-init>Сегодня</div>
                  <div data-val="Завтра" >Завтра</div>
                </div>
              </div>
            </div>
          </div>
          <div class="select" data-sel data-label="Выберите">
            <input type="text" hidden name="time">
            <div class="select__label">Во сколько позвонить</div>
            <div class="select__head">Выберите</div>
            <div class="select__body">
              <div class="select__body-wrapper">
                <div class="select__options">
                  <div data-val="Как можно скорее" data-init>Как можно скорее</div>
                  <div data-val="09:00 — 12:00" >09:00 — 12:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form__actions">
          <button class="btn btn--primary" type="submit">
            <span>Отправить</span>
          </button>
          <a href="https://wa.me/73472242041" class="btn btn--teartiary" >
            <span>Написать в WhatsApp</span>
          </a>
        </div>
        <p class="form__info">Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных</p>
      </form>
    </div>
  </div>
</div>
</div>
<div class="contacts__map">
<div id="contacts-map"></div>
</div>
</section>
<script type="module">


  

const clicktTab = function (_this, btns, e) {
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


initMap2()
async function initMap2() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapLayer,
    YMapMarker,
    YMapFeatureDataSource,
    YMapControls,
    YMapControl,
    YMapGroupEntity,
  } = ymaps3;

  const markers = {
    aisOff: {
      btn: {
        name: 'Офис АИС',
      },
      points: [
        {
          name: 'Test',
          geometry: {
            type: 'Point',
            coordinates: [55.998870,54.716435],
          },
          smallimg: '<?=SITE_TEMPLATE_PATH?>/img/a.png',
          properties: { name: 'marker', description: '' },
          type: 'Feature',
          cardEl: `
              <div class="card-map">
                <div >
                  <h4 class="card-map__title">Центральный офис продаж</h4>
                  <p class="card-map__text">г. Уфа, ул. Обская, 7</p>
                </div>
                <div class="card-map__item">
                  <h6 class="card-map__title">Приемная</h5>
                  <a href="tel:+73472242540" class="card-map__text">+7 (347) 224-25-40</a>
                  <a href="tel:+73472257364" class="card-map__text">+7 (347) 225-73-64</a>
                  
                  </div>
                <div class="card-map__item">
                  <p class="card-map__text">Пн-пт 09-18:00 (перерыв с 13 до 14:00)</p>
                  <p class="card-map__text">Сб, вс выходные</p>
                </div>
              </div>
            `,
        },
      ],
    },
    sellerOff: {
      btn: {
        name: 'Офисы продаж',
      },
      points: [
        {
          name: 'Test2',
          smallimg: '<?=SITE_TEMPLATE_PATH?>/img/n.png',
          geometry: {
            type: 'Point',
            coordinates: [55.998870,54.716435],
          },
          properties: { name: 'marker', description: '' },
          type: 'Feature',
          cardEl: `
              <div class="card-map">
                <div >
                  <h4 class="card-map__title">ЖК Новый Фамильный</h4>
                  <p class="card-map__text">г. Уфа, ул. Обская, 7</p>
                </div>
                  <div class="card-map__item">
                  <h6 class="card-map__title">Отдел продаж</h5>
                  <a href="tel:+73472586611" class="card-map__text">+7 (347) 258-66-11</a>
                  <p class="card-map__text">agidel-invest@mail.ru</p>
                </div>
                <div class="card-map__item">
                  <p class="card-map__text">Пн. - Пт. 09:00 - 18:00</p>
                  <p class="card-map__text">Перерыв с 13:00 до 14:00</p>
                </div>
              </div>
            `,
        },
        {
          name: 'Test22',
          smallimg: '<?=SITE_TEMPLATE_PATH?>/img/ch.png',
          geometry: {
            type: 'Point',
            coordinates: [56.112253,54.814378],
          },
          properties: { name: 'marker', description: '' },
          type: 'Feature',
          cardEl: `
              <div class="card-map">
                <div >
                  <h4 class="card-map__title">ЖК Черника</h4>
                  <p class="card-map__text">Ул. Пекинская, 25</p>
                </div>
                
                <div class="card-map__item">
                  <h6 class="card-map__title">Отдел продаж</h5>
                  <a href="tel:+73472586600" class="card-map__text">+7 (347) 258-66-00</a>
                  <p class="card-map__text">chernikadomufa@yandex.ru</p>
                </div>
                <div class="card-map__item">
                  <p class="card-map__text">Пн-пт с 10 до 17:00</p>
                  <p class="card-map__text">Сб, вс выходные</p>
                </div>
              </div>
            `,
        },
        {
          name: 'Test22',
          smallimg: '<?=SITE_TEMPLATE_PATH?>/img/g.png',
          geometry: {
            type: 'Point',
            coordinates: [55.928315,54.732088],
          },
          properties: { name: 'marker', description: '' },
          type: 'Feature',
          cardEl: `
              <div class="card-map">
                <div >
                  <h4 class="card-map__title">ЖК ГРАНИ</h4>
                  <p class="card-map__text">Ул. Султанова, 28А</p>
                </div>
                <div class="card-map__item">
                  <h6 class="card-map__title">Отдел продаж</h5>
                  <a href="tel:+73472586699" class="card-map__text">+7 (347) 258-66-99</a>
                  <p class="card-map__text">aisrb.disk@yandex.ru </p>
                </div>
                <div class="card-map__item">
                  <p class="card-map__text">Пн-пт с 10 до 17:00</p>
                  <p class="card-map__text">Сб, вс выходные</p>
                </div>
              </div>
            `,
        },
      ],
    },
  };

  //боковая панель

  const mapEL = document.querySelector('#contacts-map');

  if (mapEL) {
    class CustomMenuControl extends YMapGroupEntity {
      _element;
      _container;

      _detachDom;

      _onAttach() {
        this._createMenu();
      }

      _createMenu() {
        this._element = document.createElement('div');
        this._element.classList.add('card-menu');
        this._containertop = document.createElement('div');
        this._containertop.classList.add('card-menu__top', 'tabs');

        this._element.appendChild(this._containertop);
        this._container = document.createElement('div');

        this._container.classList.add('card-menu__list');

        this._element.appendChild(this._container);

        this._detachDom = ymaps3.useDomContext(
          this,
          this._element,
          this._containertop,
          this._container
        );
        this._layouts = {};
        this._countALL = 0;
        let i = 0;
        for (const key in this._props) {
          i++;

          if (Object.prototype.hasOwnProperty.call(this._props, key)) {
            // создание маркеров
            const l = new YMapLayer({ source: key, type: 'markers' });
            map.addChild(new YMapFeatureDataSource({ id: key }));
            map.addChild(l);
            this._layouts[key] = l;
            console.log(this._layouts);

            this._props[key].points.forEach((f) => {
              map.addChild(this.marker(f, key));
            });

            // cоздание кнопок в окне
            const element = this._props[key];
            const buttonEl = document.createElement('button');
            // buttonEl.classList.add('btn', 'btn--secondary', 'btn--teartiary');
            buttonEl.classList.add('btn', 'btn--teartiary');
            if (i === 1) {
              buttonEl.classList.add('active', 'btn--secondary');
              buttonEl.classList.remove('btn--teartiary');
            }
            buttonEl.setAttribute('data-layout', key);
            buttonEl.setAttribute('data-target', key);

            //клик по табу
            buttonEl.addEventListener('click', () => {
              const btns = this._containertop.querySelectorAll('.btn');
              const nameLBtn = buttonEl.getAttribute('data-layout');
              clicktTab.bind(null, buttonEl, btns)();
              // перемещение карты по границам маркеров
              let bounds = [];
              this._props[key].points.forEach((p) =>
                bounds.push(p.geometry.coordinates)
              );
              console.log(bounds);
              if (bounds.length > 1)
                map.setLocation({
                  bounds,
                  duration: 1000,
                  easing: 'ease-in-out',
                  // center: this._props[key].points[0].geometry.coordinates,
                });
              else
                map.setLocation({
                  duration: 1000,
                  easing: 'ease-in-out',
                  center: this._props[key].points[0].geometry.coordinates,
                });
              // setLocation;

              [...btns].forEach((b) => {
                console.log(this._props[key].points);
                const nameL = b.getAttribute('data-layout');
                if (nameL) {
                  if (b == buttonEl) {
                    b.classList.add('active', 'btn--secondary');
                    b.classList.remove('btn--teartiary');
                    this.addL(this._layouts[nameL]);
                  } else {
                    b.classList.remove('active', 'btn--secondary');
                    buttonEl.classList.add('btn--teartiary');
                    this.removeL(this._layouts[nameL]);
                  }
                }
              });
            });
            buttonEl.insertAdjacentHTML(
              'afterbegin',
              `
                <span class="">
                  ${element.btn.name}
                </span>

              `
            );
            this._containertop.appendChild(buttonEl);

            const contentItem = document.createElement('div');
            contentItem.classList.add('card-menu__item');
            const tabContent = document.createElement('div');
            tabContent.classList.add('tab-content');
            tabContent.setAttribute('id', key);
            if (i === 1) tabContent.classList.add('active');
            element.points.forEach((p) => {
              tabContent.insertAdjacentHTML(
                'afterbegin',
                `

                  ${p.cardEl}

              `
              );
              console.log();
            });
            this._container.appendChild(contentItem);
            contentItem.appendChild(tabContent);
          }
        }
      }

      marker = (feature, source) => {
        // console.log(feature);
        // console.log(feature.geometry);

        const markerContainerElement = document.createElement('div');
        markerContainerElement.classList.add('marker-container');

        // const markerText = document.createElement('div');
        // markerText.id = feature.name;

        // markerText.innerText = feature.name;
        markerContainerElement.onclick = () => {
          map.update({
            location: {
              center: feature.geometry.coordinates,
              duration: 1000,
              easing: 'ease-in-out',
            },
          });
        };
        // markerContainerElement.onmouseover = () => {
        //   markerText.classList.replace('hidden', 'visible');
        // };

        // markerContainerElement.onmouseout = () => {
        //   markerText.classList.replace('visible', 'hidden');
        // };

        const markerElement = document.createElement('div');
        markerElement.classList.add('marker');

        markerElement.insertAdjacentHTML(
          'afterbegin',
          `<img src='${feature.smallimg}'/>`
        );

        // const markerImage = document.createElement('img');
        // markerImage.src = getImageSrc(feature.id);
        // markerImage.classList.add('image');

        // markerElement.appendChild(markerImage);

        // markerContainerElement.appendChild(markerText);
        markerContainerElement.appendChild(markerElement);
        // console.log(markerText);

        return new YMapMarker(
          {
            source: source,
            coordinates: feature.geometry.coordinates,
          },
          markerContainerElement
        );
      };

      removeL = (layer) => {
        map.removeChild(layer);
      };
      addL = (layer) => {
        map.addChild(layer);
      };

      _onDetach() {
        // Detaching the DOM from the entity and removing references to the elements
        this._detachDom?.();
        this._detachDom = undefined;
        this._element = undefined;
        this._container = undefined;
      }
    }
    const controls = new YMapControls({
      position: 'top left',
      orientation: 'vertical',
    });
    const control = new YMapControl({});
    control.addChild(new CustomMenuControl(markers));
    controls.addChild(control);
    // Иницилиазируем карту
    const map = new YMap(
      // Передаём ссылку на HTMLElement контейнера
      document.querySelector('#contacts-map'),

      // Передаём параметры инициализации карты
      {
        location: {
          // Координаты центра карты
          center: [55.998870,54.716435 ],

          // Уровень масштабирования
          zoom: 12,
        },
      }
    );

    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());

    map.addChild(controls);
  }
}
</script>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
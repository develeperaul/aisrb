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
            <span class="link link--secondary">Выбор квартиры</span>
          </div>
          <div class="inner-cover__top-content">
            <h1 class="title">Выбор квартиры</h1>
          </div>
        </div>
        <div class="inner-cover__bottom">
          <div class="inner-cover__filter">
            <div class="mob">
              <div class="filter-actions">
                <div class="filter-actions__wrapper">
                  <button class="btn btn--primary action" type="" data-target="filter" data-action="open">
                    <svg>
                      <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#filter"></use>
                    </svg>
                    <span>Фильтры</span>
                  </button>
                  <button class="iconbtn iconbtn--primary action" type="button">
                    <svg>
                      <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#map"></use>
                    </svg>
                  </button>
                  <button class="iconbtn iconbtn--primary action" type="button">
                    <svg>
                      <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#sort"></use>
                    </svg>
                  </button>
                </div>
                <div class="filter-actions__chips">
                  <div class="filter-actions__chips-actions"></div>
                  <div>
                    <button class="btn btn-xs action" type="" data-rezet="filter-form">
                      <svg>
                        <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#xcircle"></use>
                      </svg>
                      <span>Очистить фильтр</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="desc">
              <form class="filter-actions filter-form">
                <div class="filter-actions__wrapper">
                  <div>
                    <div class="select" data-sel data-label="Выберите" data-name="complex_id">
                      <input type="text" hidden name="complex_id" data-input>
                      <div class="select__label">Выберите ЖК</div>
                      <div class="select__head">Любой</div>
                      <div class="select__body">
                        <div class="select__body-wrapper">
                          <div class="select__options">
                            <div data-val="1">ЖК «ГРАНИ»</div>
                            <div data-val="2">ЖК «ЧЕРНИКА»</div>
                            <div data-val="3">ЖК «НОВЫЙ ФАМИЛЬНЫЙ»</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="filter-actions__rooms">
                      <div class="filter-actions__rooms--label">Количество комнат</div>
                      <div class="filter-actions__rooms--btns">
                        <label class="btn btn--primary action">
                          <input type="checkbox" name="room_in-C" hidden value="С">
                          <span>С</span>
                        </label>
                        <label class="btn btn--primary action">
                          <input type="checkbox" name="room_in-1" hidden value="1">
                          <span>1</span>
                        </label>
                        <label class="btn btn--primary action">
                          <input type="checkbox" name="room_in-2" hidden value="2">
                          <span>2</span>
                        </label>
                        <label class="btn btn--primary action">
                          <input type="checkbox" name="room_in-3" hidden value="3">
                          <span>3</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="range-filter" data-value data-prefix="м²" data-name="total_area">
                      <input class="input-general" type="text" hidden>
                      <div class="range-filter__label">Площадь</div>
                      <div class="range-filter__input">
                        <div class="price__wrapper">
                          <span class="price-from">
                            <span class="prefix"> от</span>
                            <span class="number"></span>
                            <span class="prefix"> м²</span>
                          </span>
                          <span class="prefix separator"> —</span>
                          <span class="price-to">
                            <span class="prefix"> до</span>
                            <span class="number"></span>
                            <span class="prefix"> м²</span>
                          </span>
                        </div>
                        <div class="multi-range-slider">
                          <input class="input-left" type="range" min="10" step="1" max="100" value="10">
                          <input class="input-right" type="range" min="10" step="1" max="100" value="100">
                          <div class="slider">
                            <div class="track"></div>
                            <div class="range"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="range-filter" data-value data-name="storey">
                      <input class="input-general" type="text" hidden>
                      <div class="range-filter__label">Этаж</div>
                      <div class="range-filter__input">
                        <div class="price__wrapper">
                          <span class="price-from">
                            <span class="prefix"> от</span>
                            <span class="number"></span>
                          </span>
                          <span class="prefix separator"> —</span>
                          <span class="price-to">
                            <span class="prefix"> до</span>
                            <span class="number"></span>
                          </span>
                        </div>
                        <div class="multi-range-slider">
                          <input class="input-left" type="range" min="1" step="1" max="25" value="1">
                          <input class="input-right" type="range" min="1" step="1" max="25" value="25">
                          <div class="slider">
                            <div class="track"></div>
                            <div class="range"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button class="btn btn--primary action" type="submit">
                      <span>Показать предложения</span>
                    </button>
                    <button class="iconbtn iconbtn--primary action" type="button">
                      <svg>
                        <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#map"></use>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="filter-actions__chips">
                  <div class="filter-actions__chips-actions"></div>
                  <div>
                    <button class="btn btn-xs action" type="" data-rezet="filter-form">
                      <svg>
                        <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#xcircle"></use>
                      </svg>
                      <span>Очистить фильтр</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<script>
  
  const handler = {
    set(target, property, value, receiver) {
      // console.log(`Свойство ${property} изменено на ${value}`);
      console.log(target.load);
      
      const parent  = document.querySelector(".flats") 
      const countEl = document.querySelector('[data-count]')
      const target1 = document.querySelector(".flats-list.col") 
      const target2 = document.querySelector(".flats-list.row") 
      let elT1 = '',
            elT2 = '';
      if(property ==='data'){
        if(target.load < 1){
          
          parent.classList.remove('load')
          
          target1.replaceChildren();
          target2.replaceChildren();
          countEl.textContent = value.length
          if(value.length < 1) parent.classList.add('none')
          else parent.classList.remove('none')
          value.forEach(r=>{
            let name, district, img ,etag
            if( r.complex_id == 1){
              
              
              name= 'ЖК «ГРАНИ»'
              district = 'Литер 2'
              img = r.images[0];
              etag='25'
            }
            if( r.complex_id == 2){
              name= 'ЖК «ЧЕРНИКА»'
              district = r.district
              img = r.images[0];
              etag='12'
            }
            if( r.complex_id == 3){
              name= 'ЖК «НОВЫЙ ФАМИЛЬНЫЙ»'
              district = 'Секция 3'
              img = r.images[1];
              etag='14'
            }


            if(target1){
                      elT1 += 
                      `
                        <a href="/detail/?id=${r.id}&complex_id=${r.complex_id}" class="flatpreview">
                          <div class="flatpreview__top">
                            <div>
                              <div class="flatpreview__name">${name}</div>
                              <div class="flatpreview__subname">${district}</div>
                            </div>
                            <div class="flatpreview__actions">
                              <button class="iconbtn iconbtn--secondary iconbtn-sm" type="button">
                                <svg>
                                  <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#dots"></use>
                                </svg>
                              </button>
                              <button class="iconbtn iconbtn--secondary iconbtn-sm" type="button">
                                <svg>
                                  <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#heart"></use>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div class="flatpreview__middle">
                            
                            ${  r.extra_2.split(',').map((el,indx)=>{
                              const classEL = indx >0? "badge--accept": "badge--secondary";
                              return '<div class="badge badge-sm '+ classEL+' "><span>'+el+'</span></div>'
                            }).join('')}
                            <div class="swiper flat-slider">
                              <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                  <img src="${img}" alt="test">
                                </div>
                              </div>
                              <div class="swiper-pagination"></div>
                            </div>
                          </div>
                          <div class="flatpreview__bottom">
                            <div class="flatpreview__type">${r.rooms_number} комнатная </div>
                            <div class="flatpreview__descr">
                            <!--   
                            <span>${r.entrance} этаж из ${etag}</span>
                              <span>
                                <svg width="4" height="4">
                                  <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#dot"></use>
                                </svg>
                              </span>
                            -->
                              <span>${r.total_area} м²</span>
                            </div>
                            <div class="flatpreview__communication">
                            ${  r.extra_3.split(',').map((el,indx)=>{
                                
                                return '<div class="badge badge-sm badge--accept "><span>'+el+'</span></div>'
                              }).join('')}
                              
                            </div>
                          </div>
                        </a>
                      `
                    }
            if(target2){
              elT2 += `
              <a href="/detail/?id=${r.id}&complex_id=${r.complex_id}" class="flatpreview-g">
                <div class="flatpreview-g__left">
                  <div class="flatpreview-g__left--content">
                    <div class="flatpreview__type">${r.rooms_number} комнатная</div>
                    <div class="flatpreview-g__descr">
                     <!-- <span>${r.entrance} этаж из ${etag}</span>
                      <span>
                        <svg width="4" height="4">
                          <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#dot"></use>
                        </svg>
                      </span>
                      -->
                      <span>${r.total_area} м²</span>
                    </div>
                    <div class="flatpreview-g__naming">
                      <div>
                        <div class="flatpreview-g__name">${name}</div>
                        <div class="flatpreview-g__subname">${district} </div>
                      </div>
                      
                      ${  r.extra_2.split(',').map((el,indx)=>{
                              const classEL = indx >0? "badge--accept": "badge--secondary";
                              return '<div class="badge badge-smm '+ classEL+' label "><span>'+el+'</span></div>'
                            }).join('')}
                    </div>
                  </div>
                  <img src="${img}" alt="test">
                </div>
                <div class="flatpreview-g__right">
                  <div class="flatpreview-g__communication">
                     ${  r.extra_3.split(',').map((el,indx)=>{
                                
                                return '<div class="badge badge-sm badge--accept "><span>'+el+'</span></div>'
                              }).join('')}
                  </div>
                  <div class="flatpreview-g__actions">
                    <button class="iconbtn iconbtn--secondary iconbtn-sm" type="button">
                      <svg>
                        <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#dots"></use>
                      </svg>
                    </button>
                    <button class="iconbtn iconbtn--secondary iconbtn-sm" type="button">
                      <svg>
                        <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#heart"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </a>
              `
            }
            
          }
          
        )
          
          
          if(target1)
          target1.insertAdjacentHTML('beforeEnd', elT1);
          if(target2)
          target2.insertAdjacentHTML('beforeEnd', elT2);
        } 
        else {
         parent.classList.add('load')
           
  
        }
      }
      target[property] = value;
      return true;
    },
    get(target, property, receiver) {
      console.log(`Свойство ${property} прочитано`);
      return target[property];
    },
    deleteProperty(target, property) {
      console.log(`Свойство ${property} удалено`);
      delete target[property];
      return true;
    },
  };
  let target = {}
  let proxyData = new Proxy({load:1}, handler);
  let isSort = false;
  
  document.addEventListener('DOMContentLoaded', () => {
    
    const sortEl = document.querySelector(".sort");
    let observer = new MutationObserver((function (mutations) {
      showData(mutations[0].target.closest('.select').querySelector('input').value)
      
    }));
    console.log(sortEl);
    
    observer.observe(sortEl, {
      // attributes: true,
      childList: true, // наблюдать за непосредственными детьми
      subtree: true,
      // characterDataOldValue: true,
      // attributeFilter: ['data-value'],
    });
    
    const formFilter = document.querySelectorAll(".filter-form")
    const obj = {};
    
    setTimeout(()=>showData(),0) 
    Array.from([...formFilter]).forEach(f=>{
      f.addEventListener('submit', (e) => {
        e.preventDefault();
         showData()
        
      })
    
    })
    function showData(sort='desc'){
      let query = []
        let total_area_min = ''
        let currentObjKey = {}
        let complexId = 'All'
        for (const key in window.inpsObj) {
          if (Object.prototype.hasOwnProperty.call(window.inpsObj, key)) {
            
            
            const element = window.inpsObj[key];
            // if(!/complex_id/.test(key)){
            //   complexId = 'All'
            // }else {
            //   complexId = element
            // }
            if(/total_area/.test(key)){
              query.push(`total_area_min=${element[0]}&total_area_max=${element[1]}`)
            }
            if(/storey/.test(key)){
              query.push(`storey_min=${element[0]}&storey_max=${element[1]}`)
            }
            if(/-\w+/.test(key)){
              if(currentObjKey.hasOwnProperty(`${key.replace(/-\w+/g,'')}`))
                currentObjKey[key.replace(/-\w+/g,'')]++
              else 
                currentObjKey[key.replace(/-\w+/g,'')] = 0  
              query.push(`${key.replace(/-\w+/g,'')}[${currentObjKey[key.replace(/-\w+/g,'')]}]=${element}`)
          }
        
            // console.log(key,key.replace(/-\w+/g,''));
            
            
          }
        }
        
        
        delete proxyData.data
        proxyData.data = []
        
        
        if(window.inpsObj.hasOwnProperty('complex_id')){
          proxyData.load = 1
          
          if(window.inpsObj['complex_id'] == 1)
            getApi('https://app-service.grani-ufa.ru/api/v2/flats?house_id=3&status=free&' + query.join("&"),1,sort)
          if(window.inpsObj['complex_id'] == 2)
            getApi('https://app-service.aisrb.ru/api/v2/flats?complex_id=3&status=free&' + query.join("&"),2,sort)
          if(window.inpsObj['complex_id'] == 3)
            getApi('https://novoufim.yes-idea.ru/api/v2/flats?status=free&' + query.join("&"),3,sort)
        }else {
          
          
          proxyData.load = 3
              getApi('https://app-service.grani-ufa.ru/api/v2/flats?house_id=3&status=free&' + query.join("&"),1,sort),
               getApi('https://app-service.aisrb.ru/api/v2/flats?complex_id=3&status=free&' + query.join("&"),2,sort),
               getApi('https://novoufim.yes-idea.ru/api/v2/flats?status=free&' + query.join("&"),3,sort)

            
        }
    }
        async function getApi (url, complex_id,sort='desc',sortName="price"){
            
          let rezult;
          await BX.ajax({
            url: url+`&sort_order=${sort}`+`&sort_by=${sortName}`,
            method: 'GET',
            dataType: 'html',
            timeout: 30,
            async: true,
            onsuccess: function (res) {
              
              const newObj = [...JSON.parse(res).data].map(r=>{return {...r,complex_id}})
              proxyData.complexId = complex_id
              proxyData.load--;
              proxyData.data = [...proxyData.data, ...newObj]
            },
            onfailure: function () {
              console.error("erorr ajax")
            }
          });
        
          
          
          return rezult;
        }
      })


    


  
// https://app-service.grani-ufa.ru/api/v2/flats?house_id=3
</script>
<section class="section section3 section-rounded flats">
  <div class="container">
    <div class="flats__wrapper">
      <div class="flats__top">
        <div class="flats__top--left">
          <h2>Найдено <span data-count>0</span> предложений </h2>
        </div>
        <div class="flats__top--right">
          <div class="select select-white sort" data-sel data-label="Выберите">
            <input type="text" hidden name="sort">
            <div class="select__head">С меньшей площадью</div>
            <div class="select__body">
              <div class="select__body-wrapper">
                <div class="select__options">
                  <div data-val="desc" >С меньшей площадью</div>
                  <div data-val="asc">С большей площадью</div>
                </div>
              </div>
            </div>
          </div>
          <div class="tabs flats__tabs">
            <button class="iconbtn active" type="button" data-target="data1">
              <svg>
                <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#sqfour"></use>
              </svg>
            </button>
            <button class="iconbtn" type="button" data-target="data2">
              <svg>
                <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#rows"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="flats__bottom">
        <svg class="spinner" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <circle class="spin2" cx="400" cy="400" fill="none" r="206" stroke-width="35" stroke="#000000" stroke-dasharray="287 1400" stroke-linecap="round"></circle>
        </svg>
        <div class="tab-content active" id="data1">

          <div class="flats-list col">
          </div>
        </div>
        <div class="tab-content " id="data2">

          <div class="flats-list row">
          </div>
        </div>
        <div class="flats-no">
          <div class="flats-no__icon">
            <svg width="24" height="24">
              <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#binocl"></use>
            </svg>
          </div>
          <h2 class="flats-no__title">Квартиры не найдены</h2>
          <p class="flats-no__text">Попробуйте изменить параметры поиска или уточнить фильтры</p>
          <button onclick='clearForm()' class="btn btn--primary2 flats-no__action" type="">
            <svg>
              <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#xcircle"></use>
            </svg>
            <span>Сбросить фильтр</span>
          <button>
        </div>
      </div>
    </div>
  </div>
</section>
<script>
  function clearForm(){
    console.log('test');
    
    const form = document.querySelector(".filter-form")
    const rezetbtn = document.querySelector("[data-rezet='filter-form']")
    rezetbtn.dispatchEvent(new Event('click') )
    form.dispatchEvent(new Event('submit') )
    console.log(form);
    console.log(rezetbtn);
    
  }
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
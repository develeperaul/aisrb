import '../scss/style.scss';
import '../index.pug';

import './animation.js';
import { clickBtn } from './animation';
import './bsheet.js';

import './tabs.js';
import { clicktTab } from './tabs.js';
import { rezetSelect, initSelect } from '../components/select/index.js';
import { setLeft, setRight } from '../components/range/index.js';
import './accordeon.js';

import '../components/index.js';
import * as ymaps3 from 'ymaps3';

// initMap();
// initMap2();
// initMap3();

// async function initMap() {
//   // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
//   await ymaps3.ready;

//   const {
//     YMap,
//     YMapDefaultSchemeLayer,
//     YMapDefaultFeaturesLayer,
//     YMapLayer,
//     YMapMarker,
//     YMapFeatureDataSource,
//     YMapControls,
//     YMapControl,
//     YMapGroupEntity,
//   } = ymaps3;

//   const markers = {
//     all: {
//       btn: {
//         name: 'Все категории',
//         icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.625 4.6875C5.625 4.87292 5.57002 5.05418 5.467 5.20835C5.36399 5.36252 5.21757 5.48268 5.04627 5.55364C4.87496 5.62459 4.68646 5.64316 4.5046 5.60699C4.32275 5.57081 4.1557 5.48152 4.02459 5.35041C3.89348 5.2193 3.80419 5.05225 3.76801 4.8704C3.73184 4.68854 3.75041 4.50004 3.82136 4.32873C3.89232 4.15743 4.01248 4.01101 4.16665 3.908C4.32082 3.80498 4.50208 3.75 4.6875 3.75C4.93614 3.75 5.1746 3.84877 5.35041 4.02459C5.52623 4.2004 5.625 4.43886 5.625 4.6875ZM10 3.75C9.81458 3.75 9.63332 3.80498 9.47915 3.908C9.32498 4.01101 9.20482 4.15743 9.13386 4.32873C9.06291 4.50004 9.04434 4.68854 9.08051 4.8704C9.11669 5.05225 9.20598 5.2193 9.33709 5.35041C9.4682 5.48152 9.63525 5.57081 9.8171 5.60699C9.99896 5.64316 10.1875 5.62459 10.3588 5.55364C10.5301 5.48268 10.6765 5.36252 10.7795 5.20835C10.8825 5.05418 10.9375 4.87292 10.9375 4.6875C10.9375 4.43886 10.8387 4.2004 10.6629 4.02459C10.4871 3.84877 10.2486 3.75 10 3.75ZM15.3125 5.625C15.4979 5.625 15.6792 5.57002 15.8333 5.467C15.9875 5.36399 16.1077 5.21757 16.1786 5.04627C16.2496 4.87496 16.2682 4.68646 16.232 4.5046C16.1958 4.32275 16.1065 4.1557 15.9754 4.02459C15.8443 3.89348 15.6773 3.80419 15.4954 3.76801C15.3135 3.73184 15.125 3.75041 14.9537 3.82136C14.7824 3.89232 14.636 4.01248 14.533 4.16665C14.43 4.32082 14.375 4.50208 14.375 4.6875C14.375 4.93614 14.4738 5.1746 14.6496 5.35041C14.8254 5.52623 15.0639 5.625 15.3125 5.625ZM4.6875 9.0625C4.50208 9.0625 4.32082 9.11748 4.16665 9.2205C4.01248 9.32351 3.89232 9.46993 3.82136 9.64123C3.75041 9.81254 3.73184 10.001 3.76801 10.1829C3.80419 10.3648 3.89348 10.5318 4.02459 10.6629C4.1557 10.794 4.32275 10.8833 4.5046 10.9195C4.68646 10.9557 4.87496 10.9371 5.04627 10.8661C5.21757 10.7952 5.36399 10.675 5.467 10.5208C5.57002 10.3667 5.625 10.1854 5.625 10C5.625 9.75136 5.52623 9.5129 5.35041 9.33709C5.1746 9.16127 4.93614 9.0625 4.6875 9.0625ZM10 9.0625C9.81458 9.0625 9.63332 9.11748 9.47915 9.2205C9.32498 9.32351 9.20482 9.46993 9.13386 9.64123C9.06291 9.81254 9.04434 10.001 9.08051 10.1829C9.11669 10.3648 9.20598 10.5318 9.33709 10.6629C9.4682 10.794 9.63525 10.8833 9.8171 10.9195C9.99896 10.9557 10.1875 10.9371 10.3588 10.8661C10.5301 10.7952 10.6765 10.675 10.7795 10.5208C10.8825 10.3667 10.9375 10.1854 10.9375 10C10.9375 9.75136 10.8387 9.5129 10.6629 9.33709C10.4871 9.16127 10.2486 9.0625 10 9.0625ZM15.3125 9.0625C15.1271 9.0625 14.9458 9.11748 14.7917 9.2205C14.6375 9.32351 14.5173 9.46993 14.4464 9.64123C14.3754 9.81254 14.3568 10.001 14.393 10.1829C14.4292 10.3648 14.5185 10.5318 14.6496 10.6629C14.7807 10.794 14.9477 10.8833 15.1296 10.9195C15.3115 10.9557 15.5 10.9371 15.6713 10.8661C15.8426 10.7952 15.989 10.675 16.092 10.5208C16.195 10.3667 16.25 10.1854 16.25 10C16.25 9.75136 16.1512 9.5129 15.9754 9.33709C15.7996 9.16127 15.5611 9.0625 15.3125 9.0625ZM4.6875 14.375C4.50208 14.375 4.32082 14.43 4.16665 14.533C4.01248 14.636 3.89232 14.7824 3.82136 14.9537C3.75041 15.125 3.73184 15.3135 3.76801 15.4954C3.80419 15.6773 3.89348 15.8443 4.02459 15.9754C4.1557 16.1065 4.32275 16.1958 4.5046 16.232C4.68646 16.2682 4.87496 16.2496 5.04627 16.1786C5.21757 16.1077 5.36399 15.9875 5.467 15.8333C5.57002 15.6792 5.625 15.4979 5.625 15.3125C5.625 15.0639 5.52623 14.8254 5.35041 14.6496C5.1746 14.4738 4.93614 14.375 4.6875 14.375ZM10 14.375C9.81458 14.375 9.63332 14.43 9.47915 14.533C9.32498 14.636 9.20482 14.7824 9.13386 14.9537C9.06291 15.125 9.04434 15.3135 9.08051 15.4954C9.11669 15.6773 9.20598 15.8443 9.33709 15.9754C9.4682 16.1065 9.63525 16.1958 9.8171 16.232C9.99896 16.2682 10.1875 16.2496 10.3588 16.1786C10.5301 16.1077 10.6765 15.9875 10.7795 15.8333C10.8825 15.6792 10.9375 15.4979 10.9375 15.3125C10.9375 15.0639 10.8387 14.8254 10.6629 14.6496C10.4871 14.4738 10.2486 14.375 10 14.375ZM15.3125 14.375C15.1271 14.375 14.9458 14.43 14.7917 14.533C14.6375 14.636 14.5173 14.7824 14.4464 14.9537C14.3754 15.125 14.3568 15.3135 14.393 15.4954C14.4292 15.6773 14.5185 15.8443 14.6496 15.9754C14.7807 16.1065 14.9477 16.1958 15.1296 16.232C15.3115 16.2682 15.5 16.2496 15.6713 16.1786C15.8426 16.1077 15.989 15.9875 16.092 15.8333C16.195 15.6792 16.25 15.4979 16.25 15.3125C16.25 15.0639 16.1512 14.8254 15.9754 14.6496C15.7996 14.4738 15.5611 14.375 15.3125 14.375Z" fill="#FAFCFE"/></svg>`,
//         bg: '#00CCBE',
//       },
//       points: [],
//     },
//     shcool: {
//       btn: {
//         name: 'Школы и ВУЗы',
//         icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.125 3.17031V2.5C13.125 2.00272 12.9275 1.52581 12.5758 1.17417C12.2242 0.822544 11.7473 0.625 11.25 0.625H8.75C8.25272 0.625 7.77581 0.822544 7.42417 1.17417C7.07254 1.52581 6.875 2.00272 6.875 2.5V3.17031C5.83444 3.32198 4.88311 3.84278 4.19467 4.63765C3.50622 5.43251 3.12657 6.44844 3.125 7.5V16.875C3.125 17.2065 3.2567 17.5245 3.49112 17.7589C3.72554 17.9933 4.04348 18.125 4.375 18.125H15.625C15.9565 18.125 16.2745 17.9933 16.5089 17.7589C16.7433 17.5245 16.875 17.2065 16.875 16.875V7.5C16.8734 6.44844 16.4938 5.43251 15.8053 4.63765C15.1169 3.84278 14.1656 3.32198 13.125 3.17031ZM8.75 1.875H11.25C11.4158 1.875 11.5747 1.94085 11.6919 2.05806C11.8092 2.17527 11.875 2.33424 11.875 2.5V3.125H8.125V2.5C8.125 2.33424 8.19085 2.17527 8.30806 2.05806C8.42527 1.94085 8.58424 1.875 8.75 1.875ZM13.125 12.5H6.875V11.875C6.875 11.7092 6.94085 11.5503 7.05806 11.4331C7.17527 11.3158 7.33424 11.25 7.5 11.25H12.5C12.6658 11.25 12.8247 11.3158 12.9419 11.4331C13.0592 11.5503 13.125 11.7092 13.125 11.875V12.5ZM6.875 13.75H10.625V14.375C10.625 14.5408 10.6908 14.6997 10.8081 14.8169C10.9253 14.9342 11.0842 15 11.25 15C11.4158 15 11.5747 14.9342 11.6919 14.8169C11.8092 14.6997 11.875 14.5408 11.875 14.375V13.75H13.125V16.875H6.875V13.75ZM15.625 16.875H14.375V11.875C14.375 11.3777 14.1775 10.9008 13.8258 10.5492C13.4742 10.1975 12.9973 10 12.5 10H7.5C7.00272 10 6.52581 10.1975 6.17417 10.5492C5.82254 10.9008 5.625 11.3777 5.625 11.875V16.875H4.375V7.5C4.375 6.6712 4.70424 5.87634 5.29029 5.29029C5.87634 4.70424 6.6712 4.375 7.5 4.375H12.5C13.3288 4.375 14.1237 4.70424 14.7097 5.29029C15.2958 5.87634 15.625 6.6712 15.625 7.5V16.875ZM11.875 6.875C11.875 7.04076 11.8092 7.19973 11.6919 7.31694C11.5747 7.43415 11.4158 7.5 11.25 7.5H8.75C8.58424 7.5 8.42527 7.43415 8.30806 7.31694C8.19085 7.19973 8.125 7.04076 8.125 6.875C8.125 6.70924 8.19085 6.55027 8.30806 6.43306C8.42527 6.31585 8.58424 6.25 8.75 6.25H11.25C11.4158 6.25 11.5747 6.31585 11.6919 6.43306C11.8092 6.55027 11.875 6.70924 11.875 6.875Z" fill="#FAFCFE"/></svg>`,
//         bg: '#FF9500',
//       },
//       points: [
//         {
//           name: 'Test',
//           geometry: {
//             type: 'Point',
//             coordinates: [82.88611700042408, 55.07147614178742],
//           },
//           properties: { name: 'marker', description: '' },
//           type: 'Feature',
//         },
//         {
//           name: 'Test3',
//           geometry: {
//             type: 'Point',
//             coordinates: [82.98611700042408, 55.07147614178742],
//           },
//           properties: { name: 'marker', description: '' },
//           type: 'Feature',
//         },
//       ],
//     },
//     shcool2: {
//       btn: {
//         name: 'Детские сады',
//         icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.1875 10.9375C7.00208 10.9375 6.82083 10.8825 6.66666 10.7795C6.51249 10.6765 6.39232 10.5301 6.32137 10.3588C6.25041 10.1875 6.23184 9.99896 6.26802 9.8171C6.30419 9.63525 6.39348 9.4682 6.52459 9.33709C6.6557 9.20598 6.82275 9.11669 7.00461 9.08051C7.18646 9.04434 7.37496 9.06291 7.54627 9.13386C7.71758 9.20482 7.86399 9.32498 7.96701 9.47915C8.07002 9.63332 8.125 9.81458 8.125 10C8.125 10.2486 8.02623 10.4871 7.85042 10.6629C7.6746 10.8387 7.43614 10.9375 7.1875 10.9375ZM12.8125 9.0625C12.6271 9.0625 12.4458 9.11748 12.2917 9.2205C12.1375 9.32351 12.0173 9.46993 11.9464 9.64123C11.8754 9.81254 11.8568 10.001 11.893 10.1829C11.9292 10.3648 12.0185 10.5318 12.1496 10.6629C12.2807 10.794 12.4477 10.8833 12.6296 10.9195C12.8115 10.9557 13 10.9371 13.1713 10.8661C13.3426 10.7952 13.489 10.675 13.592 10.5208C13.695 10.3667 13.75 10.1854 13.75 10C13.75 9.75136 13.6512 9.5129 13.4754 9.33709C13.2996 9.16127 13.0611 9.0625 12.8125 9.0625ZM11.8539 12.5961C11.2973 12.9416 10.6551 13.1246 10 13.1246C9.34486 13.1246 8.70275 12.9416 8.1461 12.5961C8.00582 12.5076 7.83615 12.4785 7.6744 12.5151C7.51265 12.5517 7.37207 12.6511 7.2836 12.7914C7.19512 12.9317 7.166 13.1014 7.20262 13.2631C7.23925 13.4249 7.33864 13.5654 7.47891 13.6539C8.23527 14.1254 9.10871 14.3754 10 14.3754C10.8913 14.3754 11.7647 14.1254 12.5211 13.6539C12.6614 13.5654 12.7608 13.4249 12.7974 13.2631C12.834 13.1014 12.8049 12.9317 12.7164 12.7914C12.6279 12.6511 12.4874 12.5517 12.3256 12.5151C12.1639 12.4785 11.9942 12.5076 11.8539 12.5961ZM18.125 10C18.125 11.607 17.6485 13.1779 16.7557 14.514C15.8629 15.8502 14.594 16.8916 13.1093 17.5065C11.6247 18.1215 9.99099 18.2824 8.4149 17.9689C6.8388 17.6554 5.39106 16.8815 4.25476 15.7452C3.11846 14.6089 2.34463 13.1612 2.03112 11.5851C1.71762 10.009 1.87852 8.37535 2.49348 6.8907C3.10844 5.40605 4.14985 4.1371 5.486 3.24431C6.82214 2.35152 8.39303 1.875 10 1.875C12.1542 1.87727 14.2195 2.73403 15.7427 4.25727C17.266 5.78051 18.1227 7.84581 18.125 10ZM16.875 10C16.8728 8.23019 16.1891 6.52922 14.9657 5.2503C13.7424 3.97137 12.0734 3.21278 10.3055 3.13203C9.4 4.40469 9.375 5.61562 9.375 5.625C9.375 5.79076 9.44085 5.94973 9.55806 6.06694C9.67527 6.18415 9.83424 6.25 10 6.25C10.1658 6.25 10.3247 6.18415 10.4419 6.06694C10.5592 5.94973 10.625 5.79076 10.625 5.625C10.625 5.45924 10.6909 5.30027 10.8081 5.18306C10.9253 5.06585 11.0842 5 11.25 5C11.4158 5 11.5747 5.06585 11.6919 5.18306C11.8092 5.30027 11.875 5.45924 11.875 5.625C11.875 6.12228 11.6775 6.59919 11.3258 6.95083C10.9742 7.30246 10.4973 7.5 10 7.5C9.50272 7.5 9.02581 7.30246 8.67418 6.95083C8.32255 6.59919 8.125 6.12228 8.125 5.625C8.125 5.56797 8.13516 4.50781 8.78594 3.23203C7.49872 3.46297 6.30407 4.05626 5.34217 4.94228C4.38028 5.8283 3.69105 6.97029 3.35536 8.23425C3.01967 9.49821 3.05144 10.8317 3.44696 12.0782C3.84247 13.3248 4.58532 14.4326 5.58833 15.2718C6.59133 16.111 7.81289 16.6467 9.10965 16.8161C10.4064 16.9855 11.7246 16.7814 12.9095 16.228C14.0944 15.6746 15.0968 14.7946 15.7992 13.6915C16.5016 12.5884 16.8748 11.3078 16.875 10Z" fill="#FAFCFE"/></svg>`,
//         bg: '#000',
//       },
//       points: [
//         {
//           name: 'Test2',
//           geometry: {
//             type: 'Point',
//             coordinates: [82.87446639248576, 55.1443451567671],
//           },
//           properties: { name: 'marker', description: '' },
//           type: 'Feature',
//         },
//       ],
//     },
//   };
//   //боковая панель
//   class CustomMenuControl extends YMapGroupEntity {
//     _element;
//     _container;

//     _detachDom;

//     _onAttach() {
//       this._createMenu();
//     }

//     _createMenu() {
//       this._element = document.createElement('div');
//       this._element.classList.add('menumap');
//       this._container = document.createElement('div');
//       this._container.classList.add('menumap-list');

//       this._element.appendChild(this._container);
//       this._detachDom = ymaps3.useDomContext(
//         this,
//         this._element,
//         this._container
//       );
//       this._layouts = {};
//       this._countALL = 0;

//       for (const key in this._props.markers) {
//         if (Object.prototype.hasOwnProperty.call(this._props.markers, key)) {
//           // создание маркеров
//           const l = new YMapLayer({ source: key, type: 'markers' });
//           this._props.map.addChild(new YMapFeatureDataSource({ id: key }));
//           this._props.map.addChild(l);
//           this._layouts[key] = l;

//           this._props.markers[key].points.forEach((f) => {
//             this._props.map.addChild(
//               this.marker(f, key, this._props.markers[key].btn)
//             );
//           });

//           // cоздание кнопок в окне
//           const element = this._props.markers[key];
//           const buttonEl = document.createElement('button');
//           buttonEl.classList.add('btnmap');
//           buttonEl.setAttribute('data-layout', key);
//           buttonEl.addEventListener('click', () => {
//             const btns = this._container.querySelectorAll('.btnmap');
//             const nameLBtn = buttonEl.getAttribute('data-layout');

//             // перемещение карты по границам маркеров

//             if (nameLBtn === 'all') {
//               [...btns].forEach((b) => {
//                 if (b == buttonEl) {
//                   b.classList.add('active');
//                   for (const keyL in this._layouts) {
//                     if (
//                       Object.prototype.hasOwnProperty.call(this._layouts, keyL)
//                     ) {
//                       const elL = this._layouts[keyL];
//                       this.addL(elL);
//                     }
//                   }
//                 } else {
//                   b.classList.remove('active');
//                 }
//               });
//               this._props.map.setLocation({
//                 duration: 1000,
//                 easing: 'ease-in-out',
//                 center: this._props.center,
//                 zoom: 12,
//               });
//             } else {
//               let bounds = [];
//               this._props.markers[key].points.forEach((p) =>
//                 bounds.push(p.geometry.coordinates)
//               );

//               if (bounds.length > 1)
//                 this._props.map.setLocation({
//                   bounds,
//                   duration: 1000,
//                   easing: 'ease-in-out',
//                   zoom: 12,
//                   // center: this._props[key].points[0].geometry.coordinates,
//                 });
//               else
//                 this._props.map.setLocation({
//                   duration: 1000,
//                   easing: 'ease-in-out',
//                   zoom: 12,
//                   center:
//                     this._props.markers[key].points[0].geometry.coordinates,
//                 });
//               [...btns].forEach((b) => {
//                 const nameL = b.getAttribute('data-layout');
//                 if (nameL) {
//                   if (b == buttonEl) {
//                     b.classList.add('active');
//                     this.addL(this._layouts[nameL]);
//                   } else {
//                     b.classList.remove('active');
//                     this.removeL(this._layouts[nameL]);
//                   }
//                 }
//               });
//             }
//           });
//           this._container.appendChild(buttonEl);
//           if (key == 'all') {
//           }
//           this._countALL += element.points.length;
//           buttonEl.insertAdjacentHTML(
//             'afterbegin',
//             `

//               <span class="btnmap__left">
//                 <span class="icon" style="background: ${element.btn.bg}">
//                 ${element.btn.icon}
//                 </span>
//                 <span>
//                 ${element.btn.name}
//                 </span>
//               </span>
//               <span class="btnmap__right" data-count>${element.points.length}</span>

//             `
//           );
//         }
//       }
//       const btnAllEl = this._container.querySelector('[data-layout="all"]');
//       if (btnAllEl) btnAllEl.classList.add('active');
//       const countAllEl = this._container.querySelector(
//         '[data-layout="all"] > [data-count]'
//       );
//       if (countAllEl) countAllEl.textContent = this._countALL;
//     }

//     marker = (feature, source, theme) => {

//       const markerContainerElement = document.createElement('div');
//       markerContainerElement.classList.add('marker-container');

//       const markerText = document.createElement('div');
//       markerText.classList.add('marker-text');
//       markerText.id = feature.name;
//       // markerText.classList.add('marker-text', 'hidden');
//       markerText.innerText = feature.name;

//       // markerContainerElement.onmouseover = () => {
//       //   console.log('onmouseover');
//       //   markerText.classList.replace('hidden', 'visible');
//       // };

//       // markerContainerElement.onmouseout = () => {
//       //   console.log('onmouseout');
//       //   markerText.classList.replace('visible', 'hidden');
//       // };

//       const markerElement = document.createElement('div');
//       markerElement.classList.add('marker');
//       markerElement.style.backgroundColor = `${theme.bg}`;
//       markerElement.insertAdjacentHTML('afterbegin', `${theme.icon}`);

//       // const markerImage = document.createElement('img');
//       // markerImage.src = getImageSrc(feature.id);
//       // markerImage.classList.add('image');

//       // markerElement.appendChild(markerImage);

//       markerContainerElement.appendChild(markerText);
//       markerContainerElement.appendChild(markerElement);

//       return new YMapMarker(
//         {
//           source: source,
//           coordinates: feature.geometry.coordinates,
//         },
//         markerContainerElement
//       );
//     };

//     removeL = (layer) => {
//       this._props.map.removeChild(layer);
//     };
//     addL = (layer) => {
//       this._props.map.addChild(layer);
//     };

//     _onDetach() {
//       // Detaching the DOM from the entity and removing references to the elements
//       this._detachDom?.();
//       this._detachDom = undefined;
//       this._element = undefined;
//       this._container = undefined;
//     }
//   }

//   const mapsEL = document.querySelectorAll('.infrastrct-map');
//   Array.from([...mapsEL]).forEach((mapEL) => {
//     if (mapEL) {
//       const controls = new YMapControls({
//         position: 'top left',
//         orientation: 'vertical',
//       });

//       // Иницилиазируем карту
//       const map = new YMap(
//         // Передаём ссылку на HTMLElement контейнера
//         mapEL,

//         // Передаём параметры инициализации карты
//         {
//           location: {
//             // Координаты центра карты
//             center: [82.8665, 55.0964],

//             // Уровень масштабирования
//             zoom: 12,
//           },
//         }
//       );
//       const control = new YMapControl({});
//       controls.addChild(control);
//       control.addChild(
//         new CustomMenuControl({ markers, map, center: [82.8665, 55.0964] })
//       );
//       map.addChild(new YMapDefaultSchemeLayer());
//       map.addChild(new YMapDefaultFeaturesLayer());
//       map.addChild(controls);
//     }
//   });
//   // for (const key in markers) {
//   //   if (Object.prototype.hasOwnProperty.call(markers, key)) {
//   //     map.addChild(new YMapFeatureDataSource({ id: key }));
//   //     map.addChild(new YMapLayer({ source: key, type: 'markers' }));
//   //     markers[key].points.forEach((f) => {
//   //       map.addChild(marker(f, key));
//   //     });
//   //   }
//   // }

//   // map.addChild(new YMapFeatureDataSource({ id: 'markerSource' }));
//   // map.addChild(markerSourceLayer);
//   // const features = getRandomPoints(BOUNDS);

//   // features.forEach((f) => {
//   //   map.addChild(marker(f));
//   // });
// }

// async function initMap2() {
//   // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
//   await ymaps3.ready;

//   const {
//     YMap,
//     YMapDefaultSchemeLayer,
//     YMapDefaultFeaturesLayer,
//     YMapLayer,
//     YMapMarker,
//     YMapFeatureDataSource,
//     YMapControls,
//     YMapControl,
//     YMapGroupEntity,
//   } = ymaps3;

//   const markers = {
//     aisOff: {
//       btn: {
//         name: 'Офис АИС',
//       },
//       points: [
//         {
//           name: 'Test',
//           geometry: {
//             type: 'Point',
//             coordinates: [82.88611700042408, 55.07147614178742],
//           },
//           properties: { name: 'marker', description: '' },
//           type: 'Feature',
//           smallimg: 'https://grani-ufa.ru/img/render-1.06cba45c.jpg',
//           cardEl: `
//               <div class="card-map">
//                 <div >
//                   <h4 class="card-map__title">Центральный офис продаж</h4>
//                   <p class="card-map__text">450022, Республика Башкортостан,г. Уфа, ул. Обская, 7</p>
//                 </div>
//                 <div class="card-map__item">
//                   <h6 class="card-map__title">Приемная</h5>
//                   <p class="card-map__text">+7 (347) 224-25-40</p>
//                 </div>
//                 <div class="card-map__item">
//                   <h6 class="card-map__title">Отдел продаж</h5>
//                   <p class="card-map__text">+7 (347) 224-20-40</p>
//                   <p class="card-map__text">agidel-invest@mail.ru</p>
//                 </div>
//                 <div class="card-map__item">
//                   <p class="card-map__text">Пн. - Пт.: 9.00 - 18.00</p>
//                   <p class="card-map__text">Перерыв: 13.00 - 14.00</p>
//                 </div>
//               </div>
//             `,
//         },
//       ],
//     },
//     sellerOff: {
//       btn: {
//         name: 'Офисы продаж',
//       },
//       points: [
//         {
//           name: 'Test2',
//           geometry: {
//             type: 'Point',
//             coordinates: [82.87446639248576, 55.1443451567671],
//           },
//           properties: { name: 'marker', description: '' },
//           type: 'Feature',
//           smallimg: 'https://grani-ufa.ru/img/render-1.06cba45c.jpg',
//           cardEl: `
//               <div class="card-map">
//                 <div >
//                   <h4 class="card-map__title"></h4>
//                   <p class="card-map__text">450022, Республика Башкортостан,г. Уфа, ул. Обская, 7</p>
//                 </div>
//                 <div class="card-map__item">
//                   <h6 class="card-map__title">Приемная</h5>
//                   <p class="card-map__text">+7 (347) 224-25-40</p>
//                 </div>
//                 <div class="card-map__item">
//                   <h6 class="card-map__title">Отдел продаж</h5>
//                   <p class="card-map__text">+7 (347) 224-20-40</p>
//                   <p class="card-map__text">agidel-invest@mail.ru</p>
//                 </div>
//                 <div class="card-map__item">
//                   <p class="card-map__text">Пн. - Пт.: 9.00 - 18.00</p>
//                   <p class="card-map__text">Перерыв: 13.00 - 14.00</p>
//                 </div>
//               </div>
//             `,
//         },
//         {
//           name: 'Test22',
//           geometry: {
//             type: 'Point',
//             coordinates: [83.87446639248576, 55.1443451567671],
//           },
//           properties: { name: 'marker', description: '' },
//           type: 'Feature',
//           smallimg: 'https://grani-ufa.ru/img/render-1.06cba45c.jpg',
//           cardEl: `
//               <div class="card-map">
//                 <div >
//                   <h4 class="card-map__title"></h4>
//                   <p class="card-map__text">450022, Республика Башкортостан,г. Уфа, ул. Обская, 7</p>
//                 </div>
//                 <div class="card-map__item">
//                   <h6 class="card-map__title">Приемная</h5>
//                   <p class="card-map__text">+7 (347) 224-25-40</p>
//                 </div>
//                 <div class="card-map__item">
//                   <h6 class="card-map__title">Отдел продаж</h5>
//                   <p class="card-map__text">+7 (347) 224-20-40</p>
//                   <p class="card-map__text">agidel-invest@mail.ru</p>
//                 </div>
//                 <div class="card-map__item">
//                   <p class="card-map__text">Пн. - Пт.: 9.00 - 18.00</p>
//                   <p class="card-map__text">Перерыв: 13.00 - 14.00</p>
//                 </div>
//               </div>
//             `,
//         },
//       ],
//     },
//   };
//   //боковая панель

//   const mapEL = document.querySelector('#contacts-map');

//   if (mapEL) {
//     class CustomMenuControl extends YMapGroupEntity {
//       _element;
//       _container;

//       _detachDom;

//       _onAttach() {
//         this._createMenu();
//       }

//       _createMenu() {
//         this._element = document.createElement('div');
//         this._element.classList.add('card-menu');
//         this._containertop = document.createElement('div');
//         this._containertop.classList.add('card-menu__top', 'tabs');

//         this._element.appendChild(this._containertop);
//         this._container = document.createElement('div');

//         this._container.classList.add('card-menu__list');

//         this._element.appendChild(this._container);

//         this._detachDom = ymaps3.useDomContext(
//           this,
//           this._element,
//           this._containertop,
//           this._container
//         );
//         this._layouts = {};
//         this._countALL = 0;
//         let i = 0;
//         for (const key in this._props) {
//           i++;

//           if (Object.prototype.hasOwnProperty.call(this._props, key)) {
//             // создание маркеров
//             const l = new YMapLayer({ source: key, type: 'markers' });
//             map.addChild(new YMapFeatureDataSource({ id: key }));
//             map.addChild(l);
//             this._layouts[key] = l;

//             this._props[key].points.forEach((f) => {
//               map.addChild(this.marker(f, key));
//             });

//             // cоздание кнопок в окне
//             const element = this._props[key];
//             const buttonEl = document.createElement('button');
//             // buttonEl.classList.add('btn', 'btn--secondary', 'btn--teartiary');
//             buttonEl.classList.add('btn', 'btn--teartiary');
//             if (i === 1) {
//               buttonEl.classList.add('active', 'btn--secondary');
//               buttonEl.classList.remove('btn--teartiary');
//             }
//             buttonEl.setAttribute('data-layout', key);
//             buttonEl.setAttribute('data-target', key);

//             //клик по табу
//             buttonEl.addEventListener('click', () => {
//               const btns = this._containertop.querySelectorAll('.btn');
//               const nameLBtn = buttonEl.getAttribute('data-layout');
//               clicktTab.bind(null, buttonEl, btns)();
//               // перемещение карты по границам маркеров
//               let bounds = [];
//               this._props[key].points.forEach((p) =>
//                 bounds.push(p.geometry.coordinates)
//               );

//               if (bounds.length > 1)
//                 map.setLocation({
//                   bounds,
//                   duration: 1000,
//                   easing: 'ease-in-out',
//                   // center: this._props[key].points[0].geometry.coordinates,
//                 });
//               else
//                 map.setLocation({
//                   duration: 1000,
//                   easing: 'ease-in-out',
//                   center: this._props[key].points[0].geometry.coordinates,
//                 });
//               // setLocation;

//               [...btns].forEach((b) => {

//                 const nameL = b.getAttribute('data-layout');
//                 if (nameL) {
//                   if (b == buttonEl) {
//                     b.classList.add('active', 'btn--secondary');
//                     b.classList.remove('btn--teartiary');
//                     this.addL(this._layouts[nameL]);
//                   } else {
//                     b.classList.remove('active', 'btn--secondary');
//                     buttonEl.classList.add('btn--teartiary');
//                     this.removeL(this._layouts[nameL]);
//                   }
//                 }
//               });
//             });
//             buttonEl.insertAdjacentHTML(
//               'afterbegin',
//               `
//                 <span class="">
//                   ${element.btn.name}
//                 </span>

//               `
//             );
//             this._containertop.appendChild(buttonEl);

//             const contentItem = document.createElement('div');
//             contentItem.classList.add('card-menu__item');
//             const tabContent = document.createElement('div');
//             tabContent.classList.add('tab-content');
//             tabContent.setAttribute('id', key);
//             if (i === 1) tabContent.classList.add('active');
//             element.points.forEach((p) => {
//               tabContent.insertAdjacentHTML(
//                 'afterbegin',
//                 `

//                   ${p.cardEl}

//               `
//               );

//             });
//             this._container.appendChild(contentItem);
//             contentItem.appendChild(tabContent);
//           }
//         }
//       }

//       marker = (feature, source) => {

//         const markerContainerElement = document.createElement('div');
//         markerContainerElement.classList.add('marker-container');

//         // const markerText = document.createElement('div');
//         // markerText.id = feature.name;

//         // markerText.innerText = feature.name;
//         markerContainerElement.onclick = () => {
//           map.update({
//             location: {
//               center: feature.geometry.coordinates,
//               duration: 1000,
//               easing: 'ease-in-out',
//             },
//           });
//         };
//         // markerContainerElement.onmouseover = () => {
//         //   markerText.classList.replace('hidden', 'visible');
//         // };

//         // markerContainerElement.onmouseout = () => {
//         //   markerText.classList.replace('visible', 'hidden');
//         // };

//         const markerElement = document.createElement('div');
//         markerElement.classList.add('marker');

//         markerElement.insertAdjacentHTML(
//           'afterbegin',
//           `<img src='${feature.smallimg}'/>`
//         );

//         // const markerImage = document.createElement('img');
//         // markerImage.src = getImageSrc(feature.id);
//         // markerImage.classList.add('image');

//         // markerElement.appendChild(markerImage);

//         // markerContainerElement.appendChild(markerText);
//         markerContainerElement.appendChild(markerElement);

//         return new YMapMarker(
//           {
//             source: source,
//             coordinates: feature.geometry.coordinates,
//           },
//           markerContainerElement
//         );
//       };

//       removeL = (layer) => {
//         map.removeChild(layer);
//       };
//       addL = (layer) => {
//         map.addChild(layer);
//       };

//       _onDetach() {
//         // Detaching the DOM from the entity and removing references to the elements
//         this._detachDom?.();
//         this._detachDom = undefined;
//         this._element = undefined;
//         this._container = undefined;
//       }
//     }
//     const controls = new YMapControls({
//       position: 'top left',
//       orientation: 'vertical',
//     });
//     const control = new YMapControl({});
//     control.addChild(new CustomMenuControl(markers));
//     controls.addChild(control);
//     // Иницилиазируем карту
//     const map = new YMap(
//       // Передаём ссылку на HTMLElement контейнера
//       document.querySelector('#contacts-map'),

//       // Передаём параметры инициализации карты
//       {
//         location: {
//           // Координаты центра карты
//           center: [82.8665, 55.0964],

//           // Уровень масштабирования
//           zoom: 12,
//         },
//       }
//     );

//     map.addChild(new YMapDefaultSchemeLayer());
//     map.addChild(new YMapDefaultFeaturesLayer());

//     map.addChild(controls);
//   }
// }

// async function initMap3() {
//   // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
//   await ymaps3.ready;

//   const {
//     YMap,
//     YMapDefaultSchemeLayer,
//     YMapDefaultFeaturesLayer,
//     YMapLayer,
//     YMapMarker,
//     YMapFeatureDataSource,
//     YMapControls,
//     YMapControl,
//     YMapGroupEntity,
//   } = ymaps3;

//   const markers = {
//     aisOff: {
//       btn: {
//         name: 'Офис АИС',
//       },
//       points: [
//         {
//           name: 'Test2',
//           geometry: {
//             type: 'Point',
//             coordinates: [83.88611700042408, 55.07147614178742],
//           },
//           properties: { name: 'marker', description: '' },
//           type: 'Feature',
//           img: 'https://grani-ufa.ru/img/render-1.06cba45c.jpg',
//           smallimg: 'https://grani-ufa.ru/img/render-1.06cba45c.jpg',
//           title: 'title2',
//           address: 'address',
//           count: 'count',
//           price: 'price',
//           car: 'car',
//           kladov: 'kladov',
//           osobennosti: ['1o', '2o'],
//           id: 1,
//         },
//         {
//           name: 'Test',
//           geometry: {
//             type: 'Point',
//             coordinates: [82.88611700042408, 55.07147614178742],
//           },
//           properties: { name: 'marker', description: '' },
//           type: 'Feature',
//           img: 'https://grani-ufa.ru/img/render-1.06cba45c.jpgcard-menu2__img',
//           smallimg: 'https://grani-ufa.ru/img/render-1.06cba45c.jpg',
//           title: 'title',
//           address: 'address2',
//           count: 'count',
//           price: 'price',
//           car: 'car',
//           kladov: 'kladov',
//           osobennosti: ['1o', '2o'],
//           id: 2,
//         },
//       ],
//     },
//   };
//   //боковая панель

//   const mapEL = document.querySelector('#map');

//   if (mapEL) {
//     class CustomMenuControl extends YMapGroupEntity {
//       _element;
//       _container;

//       _btnPrev;
//       _btnNext;
//       _btnClose;

//       _detachDom;
//       _currentIndex;
//       _currentLayout;
//       _onAttach() {
//         this._createMenu();
//       }

//       _createMenu() {
//         this._element = document.createElement('div');
//         this._element.classList.add('card-menu2');

//         this._btnPrev = document.createElement('button');
//         this._btnPrev.classList.add(
//           'iconbtn',
//           'iconbtn--primary-w',
//           'iconbtn-sm',

//           'btn-prev'
//         );
//         this._btnPrev.insertAdjacentHTML(
//           'afterBegin',
//           '<svg><use xlink:href="./svg/sprite.svg#arrow-left"></use></svg>'
//         );
//         this._btnPrev.onclick = this.prev;

//         this._btnNext = document.createElement('button');
//         this._btnNext.classList.add(
//           'iconbtn',
//           'iconbtn--primary-w',
//           'iconbtn-sm',

//           'btn-next'
//         );
//         this._btnNext.insertAdjacentHTML(
//           'afterBegin',
//           '<svg><use xlink:href="./svg/sprite.svg#arrow-right"></use></svg>'
//         );
//         this._btnNext.onclick = this.next;

//         this._btnClose = document.createElement('button');
//         this._btnClose.classList.add(
//           'iconbtn',
//           'iconbtn--primary-w',
//           'iconbtn-sm'
//         );
//         this._btnClose.insertAdjacentHTML(
//           'afterBegin',
//           '<svg><use xlink:href="./svg/sprite.svg#close"></use></svg>'
//         );
//         this._props.el.append(this._element);
//         // this._detachDom = ymaps3.useDomContext(this);
//         this._layouts = {};
//         this._countALL = 0;
//         let i = 0;
//         for (const key in this._props.markers) {
//           i++;

//           if (Object.prototype.hasOwnProperty.call(this._props.markers, key)) {
//             // создание маркеров
//             const l = new YMapLayer({ source: key, type: 'markers' });
//             map.addChild(new YMapFeatureDataSource({ id: key }));
//             map.addChild(l);

//             this._layouts[key] = l;
//             this._currentLayout = key;

//             this._props.markers[key].points.forEach((f, index) => {
//               map.addChild(this.marker(f, key, index));
//             });
//           }
//         }
//       }

//       marker = (feature, source, index) => {
//         this._currentIndex = index;

//         const markerContainerElement = document.createElement('div');
//         markerContainerElement.classList.add('marker-container-complex');
//         markerContainerElement.setAttribute('data-complex', feature.id);

//         const markerText = document.createElement('div');
//         markerText.classList.add('marker');
//         markerText.insertAdjacentHTML(
//           'afterbegin',
//           `<img src='${feature.smallimg}'/>`
//         );
//         const markerElement = document.createElement('img');
//         // markerElement.classList.add('marker');
//         // markerElement.setAttribute('src', feature.smallimg);
//         // markerText.classList.add('marker-text', 'hidden');
//         // markerText.innerText = feature.name;

//         markerContainerElement.onclick = () => {
//           map.update({
//             location: {
//               center: feature.geometry.coordinates,
//               duration: 1000,
//               easing: 'ease-in-out',
//             },
//           });
//           const markers = document.querySelectorAll('[data-complex]');
//           Array.from([...markers]).forEach((m) => {
//             const idMarker = m.dataset.complex;

//             if (idMarker == feature.id) m.classList.add('active');
//             else m.classList.remove('active');
//           });
//           this._currentIndex = index;
//           if (this._element.children.length === 0) {
//             this._element.setAttribute('data-current', index);
//             this._element.insertAdjacentHTML(
//               'afterbegin',
//               `
//               <div class="card-menu2__desc">
//                 <div class="card-menu2__wrapper">
//                   <div class=" card-menu2__top">
//                     <div class="card-menu2__top--left">
//                       <div class="card-menu2__title"> ${feature.title} </div>
//                       <div class="card-menu2__address"> ${
//                         feature.address
//                       } </div>
//                     </div>
//                     <div class="card-menu2__top--right"></div>
//                   </div>
//                   <div class="card-menu2__content">
//                     <div class="card-menu2__img">
//                       <img src="${feature.img}" alt="">
//                     </div>
//                     <div class="card-menu2__descr--top">
//                       <div class="card-menu2__count">${feature.count}</div>
//                       <div class="card-menu2__price">${feature.price}</div>
//                     </div>
//                     <div class="card-menu2__descr--middle">
//                       <div class="card-menu2__descr--info car">
//                         <svg><use xlink:href="./svg/sprite.svg#car"></use></svg>
//                        <span>${feature.car}</span>
//                          </div>
//                       <div class="card-menu2__descr--info kladov">
//                       <svg><use xlink:href="./svg/sprite.svg#box"></use></svg>
//                        <span>${feature.kladov}</span> </div>
//                     </div>
//                     <div class="card-menu2__descr--bottom"> ${feature.osobennosti
//                       .map((o) => {
//                         return (
//                           ' <div class="badge badge--accept badge-sm">' +
//                           o +
//                           '</div>'
//                         );
//                       })
//                       .join('')} </div>
//                   </div>
//                   <div class="card-menu2__action">
//                     <a href="/" class="btn btn--secondary-w">Показать предложения</a>
//                   </div>
//                 </div>
//               </div>
//               <div class="card-menu2__mob">
//                 <div class="card-menu2__wrapper">
//                   <div class="card-menu2__top">
//                     <div class="card-menu2__left card-menu2__img">
//                       <img href="/"/>
//                     </div>
//                     <div class="card-menu2__right">
//                       <div class="card-menu2__title">
//                         ${feature.title}
//                       </div>
//                       <div class="card-menu2__address">
//                         ${feature.address}
//                       </div>
//                     </div>
//                   </div>
//                   <div class="card-menu2__content">
//                   <div class="card-menu2__descr--top">
//                     <div class="card-menu2__count">${feature.count}</div>
//                     <div class="card-menu2__price">${feature.price}</div>
//                   </div>
//                   <div class="card-menu2__descr--middle">
//                     <div class="card-menu2__descr--info car">
//                       <svg><use xlink:href="./svg/sprite.svg#car"></use></svg>
//                       <span>${feature.car}</span>
//                         </div>
//                     <div class="card-menu2__descr--info kladov">
//                     <svg><use xlink:href="./svg/sprite.svg#box"></use></svg>
//                       <span>${feature.kladov}</span> </div>
//                   </div>
//                   <div class="card-menu2__descr--bottom"> ${feature.osobennosti
//                     .map((o) => {
//                       return (
//                         ' <div class="badge badge--accept badge-smm">' +
//                         o +
//                         '</div>'
//                       );
//                     })
//                     .join('')} </div>
//                   </div>
//                   <div class="card-menu2__bottom">
//                     <div class="card-menu2__actions">
//                     </div>
//                     <div class="card-menu2__link">
//                       <a href="/" class="btn btn--primary-w">Показать предложения</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             `
//             );
//             const actionsEl = this._element.querySelector(
//               '.card-menu2__actions'
//             );
//             const closeEl = this._element.querySelector(
//               '.card-menu2__top--right'
//             );
//             closeEl.append(this._btnClose);
//             actionsEl.append(this._btnPrev);
//             actionsEl.append(this._btnNext);
//           } else {
//             this.setContent();
//           }
//         };
//         markerContainerElement.onmouseover = () => {
//           markerText.classList.replace('hidden', 'visible');
//         };

//         markerContainerElement.onmouseout = () => {
//           markerText.classList.replace('visible', 'hidden');
//         };

//         // const markerImage = document.createElement('img');
//         // markerImage.src = getImageSrc(feature.id);
//         // markerImage.classList.add('image');

//         // markerElement.appendChild(markerImage);

//         markerContainerElement.appendChild(markerText);
//         markerContainerElement.appendChild(markerElement);

//         return new YMapMarker(
//           {
//             source: source,
//             coordinates: feature.geometry.coordinates,
//           },
//           markerContainerElement
//         );
//       };

//       next = () => {
//         const lengthPoints =
//           this._props.markers[this._currentLayout].points.length;

//         if (this._currentIndex + 1 === lengthPoints) {
//           this._currentIndex = 0;
//         } else {
//           this._currentIndex++;
//         }
//         const point =
//           this._props.markers[this._currentLayout].points[this._currentIndex];
//         const markers = document.querySelectorAll('[data-complex]');
//         Array.from([...markers]).forEach((m) => {
//           const idMarker = m.dataset.complex;

//           if (idMarker == point.id) m.classList.add('active');
//           else m.classList.remove('active');
//         });
//         this.setCenter(point.geometry.coordinates);
//         this.setContent();
//       };
//       prev = () => {
//         const lengthPoints =
//           this._props.markers[this._currentLayout].points.length;

//         if (this._currentIndex === 0) {
//           this._currentIndex = lengthPoints - 1;
//         } else {
//           this._currentIndex--;
//         }
//         const point =
//           this._props.markers[this._currentLayout].points[this._currentIndex];
//         const markers = document.querySelectorAll('[data-complex]');
//         Array.from([...markers]).forEach((m) => {
//           const idMarker = m.dataset.complex;

//           if (idMarker == point.id) m.classList.add('active');
//           else m.classList.remove('active');
//         });
//         this.setCenter(point.geometry.coordinates);
//         this.setContent();
//       };
//       setCenter = (c) => {
//         this._props.map.setLocation({
//           duration: 1000,
//           easing: 'ease-in-out',
//           center: c,
//           zoom: 12,
//         });
//       };
//       setContent = () => {
//         const point =
//           this._props.markers[this._currentLayout].points[this._currentIndex];

//         const titles = this._element.querySelectorAll('.card-menu2__title');
//         Array.from([...titles]).forEach((el) => (el.textContent = point.title));
//         const addresses = this._element.querySelectorAll(
//           '.card-menu2__address'
//         );
//         Array.from([...addresses]).forEach((el) => {
//           el.textContent = point.address;
//         });
//         const images = this._element.querySelectorAll('.card-menu2__img img');
//         Array.from([...images]).forEach((el) =>
//           el.setAttribute('src', point.img)
//         );
//         const count = this._element.querySelector('.card-menu2__count');
//         count.textContent = point.count;
//         const price = this._element.querySelector('.card-menu2__price');
//         price.textContent = point.price;
//         const car = this._element.querySelector('.card-menu2__descr--info.car');
//         car.textContent = point.car;
//         const kladov = this._element.querySelector(
//           '.card-menu2__descr--info.kladov'
//         );
//         kladov.textContent = point.kladov;
//       };

//       removeL = (layer) => {
//         map.removeChild(layer);
//       };
//       addL = (layer) => {
//         map.addChild(layer);
//       };

//       _onDetach() {
//         // Detaching the DOM from the entity and removing references to the elements
//         this._detachDom?.();
//         this._detachDom = undefined;
//         this._element = undefined;
//         this._container = undefined;
//       }
//     }
//     const controls = new YMapControls({
//       position: 'top left',
//       orientation: 'vertical',
//     });
//     const control = new YMapControl({});

//     // new CustomMenuControl({ markers, map, center: [82.8665, 55.0964] });
//     controls.addChild(control);
//     // Иницилиазируем карту
//     const map = new YMap(
//       // Передаём ссылку на HTMLElement контейнера
//       document.querySelector('#map'),

//       // Передаём параметры инициализации карты
//       {
//         location: {
//           // Координаты центра карты
//           center: [82.8665, 55.0964],

//           // Уровень масштабирования
//           zoom: 12,
//         },
//       }
//     );

//     map.addChild(new YMapDefaultSchemeLayer());
//     map.addChild(new YMapDefaultFeaturesLayer());
//     control.addChild(
//       new CustomMenuControl({
//         markers,
//         map,
//         el: document.querySelector('#map'),
//       })
//     );
//     map.addChild(controls);
//   }
// }

const chipsContents = document.querySelectorAll('.filter-actions__chips');
const filterForm = document.querySelectorAll('.filter-form');
// const handler = {
//   set(target, property, value, receiver) {
//     console.log(`Свойство ${property} изменено на ${value}`);
//     target[property] = value;
//     return true;
//   },
//   get(target, property, receiver) {
//     console.log(`Свойство ${property} прочитано`);
//     return target[property];
//   },
//   deleteProperty(target, property) {
//     console.log(`Свойство ${property} удалено`);
//     delete target[property];
//     return true;
//   },
// };
// let inpsObj = new Proxy({}, handler);
window.inpsObj = {};
Array.from([...filterForm]).forEach((f) => {
  let inputs = f.querySelectorAll('input');
  Array.from([...inputs]).forEach((inp) => {
    if (inp.type == 'checkbox') {
      inp.addEventListener('change', function (e) {
        if (inp.checked) {
          window.inpsObj[inp.name] = inp.value;
          addChip(chipsContents, inp.name, inp.value);
        } else {
          clearVal(inp.name);
        }
      });
    } else if (inp.type == 'range') {
      const parent = inp.closest('.range-filter');
      if (parent) {
        const observerInRezumeList = new MutationObserver(function (mutations) {
          const name = mutations[0].target.getAttribute('data-name');

          const [to, from] = mutations[0].target
            .getAttribute('data-value')
            .match(/\d+/g);

          window.inpsObj[name] = Array(2);
          window.inpsObj[name][0] = to;
          window.inpsObj[name][1] = from;
          addChip(
            chipsContents,
            name,
            mutations[0].target.getAttribute('data-value'),
            [to, from]
          );
        });

        observerInRezumeList.observe(parent, {
          attributes: true,
          characterDataOldValue: true,
          attributeFilter: ['data-value'],
        });
      }

      // inp.addEventListener('mouseout', function () {
      //   window.inpsObj[inp.name] = inp;
      //   addChip(chipsContents, inp, inp.value);
      // });
      // inp.addEventListener('touchend', function () {
      //   window.inpsObj[inp.name] = inp;
      //   addChip(chipsContents, inp, inp.value);
      // });
    } else {
      observeElement(inp, 'value', function (oldValue, newValue) {
        const select = inp.closest('.select');
        // console.log(newValue, oldValue);
        // console.log(newValue.split('-').length, oldValue.split('-').length);

        if (select) {
          const multiSelect = select.closest('.select-multi');
          const sHead = select.querySelector('[data-select]');

          if (sHead) {
            const dataV = sHead.getAttribute('data-select');
            window.inpsObj[inp.name] = inp.value;
            if (multiSelect) {
              // const vals = dataV.split(',');
              // const textVals = inp.value.split('-');
              // vals.forEach((v, index) => {
              //   console.log(v);
              //   const inpCheck = multiSelect.querySelector(
              //     `[data-val='${textVals[index]}'] input`
              //   );
              //   if (inpCheck) {
              //     console.log(inpCheck.checked);
              //   }
              //   console.log(inpCheck);
              //   addChip(
              //     chipsContents,
              //     `${inp.name}-${v}`,
              //     v,
              //     textVals[index],
              //     true
              //   );
              // });
              // dataV.forEach((d) => console.log(d));
            } else {
              addChip(chipsContents, inp.name, dataV, inp.value);
              if (newValue) {
              }
            }
          }
        } else {
          if (newValue) {
            window.inpsObj[inp.name] = inp.value;

            addChip(chipsContents, inp.name, newValue);
          }
        }
        if (oldValue != newValue) {
        }

        // if (newValue) {
        //   window.inpsObj[inp.name] = inp;
        // }
        console.log(
          "Input value changed via API. Value changed from '%s' to '%s'",
          oldValue,
          newValue
        );
      });
    }
  });

  function observeElement(element, property, callback, delay = 0) {
    let elementPrototype = Object.getPrototypeOf(element);
    if (elementPrototype.hasOwnProperty(property)) {
      let descriptor = Object.getOwnPropertyDescriptor(
        elementPrototype,
        property
      );
      Object.defineProperty(element, property, {
        get: function () {
          return descriptor.get.apply(this, arguments);
        },
        set: function () {
          let oldValue = this[property];
          descriptor.set.apply(this, arguments);
          let newValue = this[property];
          if (typeof callback == 'function') {
            setTimeout(callback.bind(this, oldValue, newValue), delay);
          }
          return newValue;
        },
      });
    }
  }
});

function clearVal(dataName, form) {
  const inp = document.querySelector(`input[name="${dataName}"]`);
  const rangeContent = document.querySelector(
    `.range-filter[data-name='${dataName}']`
  );
  delete window.inpsObj[dataName];
  const buttonsChip = document.querySelectorAll(
    `button[data-name="${dataName}"]`
  );
  if (inp) {
    const selects = document.querySelectorAll(
      `.select[data-name="${dataName}"]`
    );

    if (selects.length > 0) {
      Array.from([...selects]).forEach((select) => {
        rezetSelect(select);
        inp.dispatchEvent(new Event('change'));
      });
    }
    if (inp.type === 'text') inp.value = '';
    if (inp.type === 'checkbox') inp.checked = false;
    if (inp.type === 'checkbox') inp.checked = false;
  }
  if (rangeContent) setMinMaxValue(rangeContent);
  Array.from([...buttonsChip]).forEach((btn) => {
    btn.remove();
  });
  if (Object.keys(window.inpsObj).length === 0) {
    const chipsContents = document.querySelectorAll('.filter-actions__chips');
    Array.from([...chipsContents]).forEach((c) => c.classList.remove('active'));
  }
  // console.log(window.inpsObj);
}

function addChip(contents, inpName, newValue, dataVal, isMulti) {
  if (inpName)
    Array.from([...contents]).forEach((c) => {
      const currentChip = c.querySelector(`[data-name='${inpName}']`);

      if (!currentChip) {
        const chip = document.createElement('button');
        chip.classList.add('chip', 'chip-xs');
        chip.setAttribute('data-name', inpName);
        if (dataVal) chip.setAttribute('data-value', dataVal);
        else chip.setAttribute('data-value', newValue);
        chip.innerHTML = newValue;
        chip.insertAdjacentHTML(
          'beforeend',
          '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0675 15.1832C16.1256 15.2412 16.1717 15.3102 16.2031 15.386C16.2345 15.4619 16.2507 15.5432 16.2507 15.6253C16.2507 15.7075 16.2345 15.7888 16.2031 15.8647C16.1717 15.9405 16.1256 16.0095 16.0675 16.0675C16.0095 16.1256 15.9405 16.1717 15.8647 16.2031C15.7888 16.2345 15.7075 16.2507 15.6253 16.2507C15.5432 16.2507 15.4619 16.2345 15.386 16.2031C15.3102 16.1717 15.2412 16.1256 15.1832 16.0675L10.0003 10.8839L4.81753 16.0675C4.70026 16.1848 4.5412 16.2507 4.37535 16.2507C4.2095 16.2507 4.05044 16.1848 3.93316 16.0675C3.81588 15.9503 3.75 15.7912 3.75 15.6253C3.75 15.4595 3.81588 15.3004 3.93316 15.1832L9.11675 10.0003L3.93316 4.81753C3.81588 4.70026 3.75 4.5412 3.75 4.37535C3.75 4.2095 3.81588 4.05044 3.93316 3.93316C4.05044 3.81588 4.2095 3.75 4.37535 3.75C4.5412 3.75 4.70026 3.81588 4.81753 3.93316L10.0003 9.11675L15.1832 3.93316C15.3004 3.81588 15.4595 3.75 15.6253 3.75C15.7912 3.75 15.9503 3.81588 16.0675 3.93316C16.1848 4.05044 16.2507 4.2095 16.2507 4.37535C16.2507 4.5412 16.1848 4.70026 16.0675 4.81753L10.8839 10.0003L16.0675 15.1832Z" fill="#FAFCFE"/></svg>'
        );
        chip.addEventListener('click', function (e) {
          e.preventDefault();
          clearVal(inpName);
        });
        const block = c.querySelector('.filter-actions__chips-actions');
        block.append(chip);
        c.classList.add('active');
      } else {
        if (!isMulti) currentChip.innerHTML = newValue;
      }
    });
}

function setMinMaxValue(content) {
  const inputLeft = content.querySelector('.input-left');
  const inputRight = content.querySelector('.input-right');
  let range = content.querySelector('.slider > .range');
  let priceFrom = content.querySelector('.price-from .number');
  let priceTo = content.querySelector('.price-to .number');
  let min = parseInt(inputLeft.min),
    max = parseInt(inputRight.max);
  if (inputLeft) {
    inputLeft.value = min;
    priceFrom.textContent = `${inputLeft.value}`;

    range.style.left = '0%';
  }

  if (inputRight) {
    inputRight.value = max;
    priceTo.textContent = `${inputRight.value}`;

    range.style.right = '0%';
  }
}

const rezetBtns = document.querySelectorAll('[data-rezet]');
Array.from(rezetBtns).forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    for (const key in window.inpsObj) {
      if (Object.prototype.hasOwnProperty.call(window.inpsObj, key)) {
        const element = window.inpsObj[key];
        clearVal(key);
      }
    }
  });
  // rezetBtns
});
setParams();
function setParams() {
  var params = window.location.search
    .replace('?', '')
    .split('&')
    .reduce(function (p, e) {
      var a = e.split('=');
      p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
    }, {});

  Object.keys(params).forEach((p) => {
    if (p) {
      const els =
        document.querySelectorAll(`[data-name=${p}]`).length > 0
          ? document.querySelectorAll(`[data-name=${p}]`)
          : document.querySelectorAll(`[name=${p}]`);
      Array.from([...els]).forEach((el) => {
        if (el.classList.contains('select')) {
          const opt = el.querySelector(`[data-val='${params[p]}']`);
          if (opt) {
            opt.setAttribute('data-init', '');
            initSelect(el);
          }
        }
        if (el.classList.contains('range-filter')) {
          const vals = params[p].split('-');
          const leftInput = el.querySelector('.input-left');
          leftInput.value = vals[0];
          leftInput.dispatchEvent(new Event('change'));
          const rightInput = el.querySelector('.input-right');
          rightInput.value = vals[1];
          rightInput.dispatchEvent(new Event('change'));

          setLeft(leftInput);
          setRight(rightInput);
        }
        if (el.type === 'checkbox') {
          el.checked = true;
          el.dispatchEvent(new Event('change'));
        }
      });
    }
  });
}

window.setFav = () => {
  const localFavorite = window.localStorage.getItem('favorite');
  if (localFavorite) {
    const objF = JSON.parse(localFavorite);
    for (const comlexId in objF) {
      if (Object.prototype.hasOwnProperty.call(objF, comlexId)) {
        const element = objF[comlexId];
        Object.keys(element).forEach((elId) => {
          console.log(
            document.querySelector(
              `[data-id="${elId}"][data-complex="${comlexId}"]`
            )
          );

          const flats = document.querySelectorAll(
            `[data-id="${elId}"][data-complex="${comlexId}"]`
          );
          if (flats) {
            Array.from([...flats]).forEach((flat) => {
              flat.classList.add('favorite');
            });
          }
        });
      }
    }
  }
};

window.FlatCard = class FlatCard {
  constructor(card) {
    this.target;
    this.card = card;
    this._this = this;
    this.btn = this.card.querySelector('[data-cardBtn]');
    this.btn.onclick = this.cardFunction;
    this.btnCopy = this.card.querySelector('[data-copy]');
    this.btnCopy.onclick = this.copyLink;

    this.btnTarget = this.card.querySelector('[data-target]');
    this.btnTarget = clickBtn;
    this.modal = this.card.querySelector('[data-modal="cardModal"]');
    this.modalLink = this.card.querySelector('[data-modal="cardModalLink"]');
    this.hearts = this.card.querySelectorAll('.heart');

    if (this.hearts) {
      Array.from([...this.hearts]).forEach((h) => {
        h.onclick = this.setfavorite;
      });
    }
  }
  cardFunction = (e) => {
    e.preventDefault();
    if (this.modal) {
      if (this.modal.classList.contains('active')) this.closeModal(this.modal);
      else this.openModal(this.modal);
    }
  };
  closeModal = (modal) => {
    this.target = undefined;

    modal.classList.remove('active');
  };
  openModal = (modal) => {
    this.target = modal;

    modal.classList.add('active');
    const cardBtns = this.card.querySelectorAll('button');

    Array.from([...cardBtns]).forEach((btn) => {
      if (btn.hasAttribute('data-open')) {
        btn.onclick = this.targetModal;
      }
      if (btn.hasAttribute('data-back')) {
        btn.onclick = this.targetModal;
      }
    });
  };
  targetModal = (e) => {
    this.closeModal(this.target);

    this.target = this.card.querySelector(
      `[data-modal=${e.currentTarget.dataset.open}]`
    );
    this.openModal(this.target);
  };
  backModal = () => {};
  setfavorite = (e) => {
    const btn = e.currentTarget;
    const localFavorite = window.localStorage.getItem('favorite');
    const dataId = this.card.dataset.id;
    const dataComplex = this.card.dataset.complex;
    if (dataId && dataComplex) {
      if (btn.classList.contains('heart-active')) {
        const objF = JSON.parse(localFavorite);
        if (objF) {
          delete objF[dataComplex][dataId];

          window.localStorage.setItem('favorite', JSON.stringify(objF));
        }

        this.card.classList.remove('favorite');
      } else {
        const sessionData = window.sessionStorage.getItem('data');
        if (sessionData) {
          const objCard = JSON.parse(sessionData)[dataComplex][dataId];

          if (objCard) {
            if (localFavorite) {
              const objF = JSON.parse(localFavorite);
              objF[dataComplex][dataId] = objCard;
              window.localStorage.setItem('favorite', JSON.stringify(objF));
            } else {
              window.localStorage.setItem(
                'favorite',
                JSON.stringify({ [dataComplex]: { [dataId]: objCard } })
              );
            }
          }
        }
        this.card.classList.add('favorite');
      }
    }
  };
  copyLink = (e) => {
    const link = this.btnCopy.dataset.copy;
    if (link)
      navigator.clipboard
        .writeText(link)
        .then(() => this.closeModal(this.target))
        .catch((err) => console.error(err));
  };
};

const cards = document.querySelectorAll('[data-card]');

Array.from([...cards]).forEach((cardEl) => {
  new FlatCard(cardEl);
});

// {
//   const localFavorite = window.localStorage.getItem('favorite');
//   const parent = document.querySelector('.flats');
//   const container = document.querySelector('.flats-list');
//   container.replaceChildren();

//   if (localFavorite) {
//     parent.classList.remove('none');
//     const objF = JSON.parse(localFavorite);
//     let flatsString = '';
//     for (const comlexId in objF) {
//       if (Object.prototype.hasOwnProperty.call(objF, comlexId)) {
//         const flats = objF[comlexId];
//         for (const flatId in flats) {
//           if (Object.prototype.hasOwnProperty.call(flats, flatId)) {
//             let name, district, img, etag;
//             const r = flats[flatId];
//             if (comlexId == 1) {
//               name = 'ЖК «ГРАНИ»';
//               district = 'Литер 2';
//               img = r.images[0];
//               etag = '25';
//             }
//             if (comlexId == 2) {
//               name = 'ЖК «ЧЕРНИКА»';
//               district = r.district;
//               img = r.images[0];
//               etag = '12';
//             }
//             if (comlexId == 3) {
//               name = 'ЖК «НОВЫЙ ФАМИЛЬНЫЙ»';
//               district = 'Секция 3';
//               img = r.images[1];
//               etag = '14';
//             }

//             flatsString += `
//                         <a href="/detail/?id=${r.id}&complex_id=${
//               r.complex_id
//             }" class="flatpreview favorite" data-id="${
//               r.id
//             }" data-complex="${comlexId}">
//                           <div class="flatpreview__top">
//                             <div>
//                               <div class="flatpreview__name">${name}</div>
//                               <div class="flatpreview__subname">${district}</div>
//                             </div>
//                             <div class="flatpreview__actions">
//                               <button class="iconbtn iconbtn--secondary iconbtn-sm" type="button">
//                                 <svg>
//                                   <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#dots"></use>
//                                 </svg>
//                               </button>
//                               <div class="heart">
//                                 <button class="iconbtn iconbtn--secondary iconbtn-sm" type="button">
//                                   <svg>
//                                     <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#heart"></use>
//                                   </svg>
//                                 </button>
//                               </div>
//                               <div class="heart heart-active">
//                                 <button class="iconbtn iconbtn--secondary iconbtn-sm" type="button">
//                                   <svg>
//                                     <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#heart"></use>
//                                   </svg>
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                           <div class="flatpreview__middle">

//                             ${r.extra_2
//                               .split(',')
//                               .map((el, indx) => {
//                                 const classEL =
//                                   indx > 0
//                                     ? 'badge--accept'
//                                     : 'badge--secondary';
//                                 return (
//                                   '<div class="badge badge-sm ' +
//                                   classEL +
//                                   ' "><span>' +
//                                   el +
//                                   '</span></div>'
//                                 );
//                               })
//                               .join('')}
//                             <div class="swiper flat-slider">
//                               <div class="swiper-wrapper">
//                                 <div class="swiper-slide">
//                                   <img src="${img}" alt="test">
//                                 </div>
//                               </div>
//                               <div class="swiper-pagination"></div>
//                             </div>
//                           </div>
//                           <div class="flatpreview__bottom">
//                             <div class="flatpreview__type">${
//                               r.rooms_number
//                             } комнатная </div>
//                             <div class="flatpreview__descr">
//                             <!--
//                             <span>${r.entrance} этаж из ${etag}</span>
//                               <span>
//                                 <svg width="4" height="4">
//                                   <use xlink:href="<?=SITE_TEMPLATE_PATH?>/svg/sprite.svg#dot"></use>
//                                 </svg>
//                               </span>
//                             -->
//                               <span>${r.total_area} м²</span>
//                             </div>
//                             <div class="flatpreview__communication">
//                             ${r.extra_3
//                               .split(',')
//                               .map((el, indx) => {
//                                 return (
//                                   '<div class="badge badge-sm badge--accept "><span>' +
//                                   el +
//                                   '</span></div>'
//                                 );
//                               })
//                               .join('')}

//                             </div>
//                           </div>
//                         </a>
//                       `;
//           }
//         }
//       }
//     }
//     if (container) {
//       container.insertAdjacentHTML('beforeEnd', flatsString);
//       const cards = document.querySelectorAll('[data-card]');

//       Array.from([...cards]).forEach((cardEl) => {
//         new FlatCard(cardEl);
//       });
//     }
//   } else {
//     parent.classList.add('none');
//   }
// }

// document.addEventListener('DOMContentLoaded', function () {
//   // script.js
//   const showModalBtn = document.querySelector('.show-modal');
//   const bottomSheet = document.querySelector('.bottom-sheet');
//   const dragHandle = document.querySelector('.drag-handle');
//   const closeBtn = document.querySelector('.close-btn');

//   let isDragging = false;
//   let startY = 0,
//     startBottom;

//   showModalBtn.addEventListener('click', () => {
//     bottomSheet.style.display = 'block';
//     document.body.style.overflow = 'hidden';
//     bottomSheet.style.bottom = '0';
//     bottomSheet.style.transform = `translateY(${startY}px)`;
//     console.log(startY);
//   });

//   dragHandle.addEventListener('mousedown', startDragging);
//   closeBtn.addEventListener('click', hideBottomSheet);

//   function startDragging(event) {
//     event.preventDefault();
//     isDragging = true;
//     if (event.type === 'mousedown') {
//       if (event.button !== 0) return;
//       event.preventDefault();
//       startY = event.clientY;
//     } else if (event.type === 'touchstart') {
//       startY = event.touches[0].clientY;
//     } else {
//       return;
//     }

//     startBottom = parseInt(getComputedStyle(bottomSheet).bottom);

//     document.addEventListener('mousemove', drag);
//     document.addEventListener('mouseup', stopDragging);
//   }

//   function drag(event) {
//     // console.log(isDragging);

//     if (!isDragging) return;
//     if (event.type === 'mousemove') {
//       currentY = event.clientY;
//     } else if (event.type === 'touchmove') {
//       currentY = event.touches[0].clientY;
//     } else {
//       return;
//     }
//     deltaY = currentY - startY;
//     // bottomSheet.style.bottom = Math.min(startBottom - deltaY, 0) + 'px';
//     console.log(deltaY, 0);

//     if (deltaY > 0) {
//       bottomSheet.style.transform = `translateY(${deltaY}px)`;
//     } else {
//       bottomSheet.style.transform = 'translateY(0px)';
//     }
//     console.log(bottomSheet.style.bottom);

//     // console.log(startBottom - deltaY);
//   }

//   function stopDragging() {
//     isDragging = false;
//     bottomSheet.style.transform = 'translateY(100%)';
//     startY = 0;
//     currentY = 0;
//     deltaY = 0;
//     document.removeEventListener('mousemove', drag);
//     document.removeEventListener('mouseup', stopDragging);
//   }

//   function hideBottomSheet() {
//     bottomSheet.style.display = 'none';
//     document.body.style.overflow = 'auto';
//     bottomSheet.style.bottom = '-100%';
//   }
// });

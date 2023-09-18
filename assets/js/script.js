// toggle class active

// const navbarNav = document.querySelector('.right-menu');
// //ketika menu di klik
// document.querySelector('#hamburger-menu').onclick = () => {
//   navbarNav.classList.toggle('active');
// };

// //klik diluar sidebar untuk ngilangin nav
// const hamburger = document.querySelector('#hamburger-menu');
// document.addEventListener('click', function (e) {
//   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove('active');
//   }
// });

let valueDisplays = document.querySelectorAll('.num');
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute('data-val'));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

document.querySelector('.load-more .cta-link').onclick = () => {
  document.querySelectorAll('.detail .row-detail .hide').forEach((show) => {
    show.style.display = 'block';
  });
  document.querySelector('.load-more .cta-link').style.display = 'none';
};

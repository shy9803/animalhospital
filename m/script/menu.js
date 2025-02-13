/* // 코드 작성
const toggle = document.querySelectorAll('.gnb > ul > li > a');
const subm = document.querySelectorAll('.sub');
console.log(toggle);
console.log(subm);
let k = 0;

for(let n = 0; n < toggle.length; n++) {
  toggle[n].addEventListener('click', function() {
    if(k == 0) {
      subm[n].style.display = 'block';
    }
  });
}
*/

// 강사 chat GPT
const menuItems = document.querySelectorAll('.gnb > ul > li > a');

menuItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    const subMenu = item.nextElementSibling; //a태그의 다음 요소(.sub)
    if(subMenu && subMenu.classList.contains('sub')) {
      event.preventDefault();
      subMenu.classList.toggle('active');

      const icon = item.querySelector('.fa-angle-down');
      if(icon) {
        icon.classList.toggle('rotate');
      }
    }
  });
});
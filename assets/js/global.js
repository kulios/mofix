

const addEventOnElements = function (elements, eventType, callback) {
  for (const elem of elements) {
    elem.addEventListener(eventType, callback);
  }
};

const searchTogglers = document.querySelectorAll('[search-toggler]');
const searchBox = document.querySelector('[search-box]');
const menuTogglers= document.querySelectorAll("[menu-toggler]");
const sideBar = document.querySelector('[sidebar]');

addEventOnElements(searchTogglers, 'click', function() {
  searchBox.classList.toggle('active');
});
addEventOnElements(menuTogglers,'click',()=>{
  sideBar.classList.toggle('active');
  
})


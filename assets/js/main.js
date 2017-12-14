
// document.getElementsByClassName("title").addEventListener("click", () => {
//   console.log("clicked!");
// });

const tabUL = document.getElementsByClassName("tab-list");
const tabs = tabUL[0].childNodes
let array = [];
// for (tab in tabs) {
//   console.log(tab.)
//   typeof tab.key == Number && array.push(tab)
// }
// console.log("array is: " + array)

// console.log(tabs[1].className);
// console.log(tabs)
// console.log(typeof tabs[0])
console.log(Object.keys(tabs))
//const liTabs = tabs[0].filter(tab => tab != "#text");






// onClick of any tab element, switch on tab position in childNode array (should be odd only)
// change className to "is-active"

let switchActiveClass = (index) => {
   
}

let modifiersActive = new Vue({
  el: '#modifiers-tab',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    makeActive: () => {
      console.log(this.el)
      document.getElementById("modifiers-tab").className="is-active";
    }
  }
})
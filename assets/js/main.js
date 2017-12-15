// onClick of any tab element, switch on tab position in childNode array (should be odd only)
// change className to "is-active"

// on
let tabSwitch = new Vue({
  el: '#main',
  data: {
    isActive: 'about',
    activeClass: false,
    itemActivatedClass: 'is-active'
  },
  methods: {
    activateSwitcher: function() {
      console.log('switcherActivated');
      this.activeClass && this.itemActivatedClass;
    },
    makeActive: (item) => {
      console.log('makeActive running on ' + item)
      this.isActive = item
      this.activeClass = true;
      console.log(this.isActive);
      item.className = 'is-active';
      console.log(item.className);
    }
  }
})



// let modifiersActive = new Vue({
//   el: '.tab-list',
//   data: {
//     tabNames: ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'],
//     aboutIsActive: false,
//     projectsIsActive: false,
//     experienceIsActive: false,
//     educationIsActive: false,
//     contactIsActive: false
//   },
//   methods: {
//     // makeActive: () => {
//     //   console.log(this.el)
//     //   document.getElementById("modifiers-tab").className="is-active";
//     // }
//     console: () => {
//       console.log("v-on:click is working!")
//     }

//   }
// })

// Vue.component('tab-item', {
//   template: `<li>${tabName}</li>`
// })
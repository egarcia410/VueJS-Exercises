new Vue({
  el: '#exercise',
  data: {
      effectClasses: {
          highlight: false,
          shrink: true,
      }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    }
  }
});

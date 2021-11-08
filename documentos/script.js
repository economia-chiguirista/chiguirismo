$(document).ready(function(){
  var BREAKPOINT = 992;
  $(".button-collapse").sideNav();
  //Fix for "closeOnClick" functionality, the functionality provide by the material team have a issue when the screen is greater than 992, see the issue #1426
  $('ul.side-nav.tabs>li.tab.side>a').click(function(){
    if($(window).width()<=BREAKPOINT){
      $('.button-collapse').sideNav('hide');
      setTimeout(function(){
        $('.button-collapse').sideNav('hide');
      }, 500);
    }
  });
});
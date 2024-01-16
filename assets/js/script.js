$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
      start:  0,
      end:    100,
      easing: 'swing',
      complete: ''
    }, options );
  
    var thisElement = $(this);
  
    $({count: settings.start}).animate({count: settings.end}, {
      duration: settings.duration,
      easing: settings.easing,
      step: function() {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete
    });
  };
  
  $('#number1').jQuerySimpleCounter({end: 583,duration: 3000});
  $('#number2').jQuerySimpleCounter({end: 946,duration: 5000});
  $('#number3').jQuerySimpleCounter({end: 81,duration: 3100});
  $('#number4').jQuerySimpleCounter({end: 16,duration: 3450});
//   $('#number5').jQuerySimpleCounter({end: 472,duration: 3300});
//   $('#number6').jQuerySimpleCounter({end: 224,duration: 2175});


function dropFunction() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.closest('.drop-parent')) {
      var dropdowns = document.getElementsByClassName("dropdown-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

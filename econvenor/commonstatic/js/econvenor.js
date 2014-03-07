/*!
 * 
 * eConvenor base JavaScript
 * 
 */


/* Get CSRF token
-------------------------------------------------- */

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

var csrftoken = getCookie('csrftoken');


/* Enable jQuery UI functions
-------------------------------------------------- */

$(function enableJQueryUIFeatures() {
  $('.datepicker').datepicker({ dateFormat: 'yy-mm-dd' });
  $( '.sortable' ).sortable({
    axis: 'y',
    containment: 'parent',
    tolerance: 'pointer',
  });
  $( '.spinner' ).spinner({ min: 0, max: 600, });
});


/* Enable Bootstrap functions
-------------------------------------------------- */
$(function enableBootstrapFeatures() {
  $('.tltip').tooltip({
    placement: 'bottom',
    delay: { show: 500, hide: 100 }
  });
});


/* Enable automatic vertical scrolling to a target
-------------------------------------------------- */

$("html").on("click", ".sidebar-heading", function(event){ 
  var $anchor = $(this);
  $("html").stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top-80
  }, 1000);
  event.preventDefault();
});


/* Enable zooming of images
-------------------------------------------------- */

$(document).on("click", ".zoom-button", function(){ 
  var current_zoom = $('.zoomable').attr('width');
  current_zoom = current_zoom.slice(0, -1);
  current_zoom = parseInt(current_zoom, 10)
  var zoom_direction = $(this).attr('id');
  if (zoom_direction == 'zoom_out') {
    new_zoom = current_zoom - 10;
    } else {
    new_zoom = current_zoom + 10;
    }
  var zoom = new_zoom + '%'
  $('.zoomable').attr('width', zoom);
});


/* Clear distribution list checkboxes when required
-------------------------------------------------- */

$(document).on("click", ".checkbox #all_participants", function(){ 
  var checkbox_status = $(this).prop('checked');
  if (checkbox_status == true) {
    $(".individual-checkbox").prop('checked', false);
  };
});

$(document).on("click", ".individual-checkbox", function(){ 
  var checkbox_status = $(this).prop('checked');
  if (checkbox_status == true) {
    $(".checkbox #all_participants").prop('checked', false);
  };
});

$(".window-border").draggable({
  handle: ".title",
});

$("#max").click(function() {
  if ($(this).text() == "&#11109;")
    $(this).html("&#9650;");
  else
    $(this).html("&#11109;");

  $(".window").toggleClass("maximize");
});

$('.window-border').resizable({
  helper: "ui-resizable-helper",
  handles: {
    'nw': '.bottomright',
    'ne': '.bottomright',
    'sw': '.bottomright',
    'se': '.bottomright'
  }
});

$('#window').click(function() {
  $('#context-menu').insertAfter($('#link'));
  $('#context-menu').css({
    left: $(this).position().left + 'px',
    top: ($(this).position().top + $(this).height()) + 4 + 'px',
    position: "absolute"
  }).toggle();
});

$(document).bind('click', function(e) {
  if($(e.target).closest('.window').length === 0) {
   $('#context-menu').hide();
  }
});
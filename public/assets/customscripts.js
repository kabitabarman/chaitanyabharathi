$(function() {
  $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    } else if( $(e.target).is('i') && $(this).children('a').attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
  });
});
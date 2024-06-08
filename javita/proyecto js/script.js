$(document).ready(function() {

  $('a.nav-link').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
  });


  $('.quick-view-btn').click(function() {
    var $menuItem = $(this).closest('.menu-item');
    var imgSrc = $menuItem.find('img').attr('src');
    var description = $(this).data('description'); 

    $('#modal-image').attr('src', imgSrc);
    $('#modal-description').text(description);
    $('#quickViewModal').modal('show');
  });
});

$(document).ready(function() {
  $('#quickViewModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget); 
    var description = button.data('description'); 
    var image = button.data('image');
    
    var modal = $(this);
    modal.find('.modal-title').text('Vista Rápida');
    modal.find('#modal-description').text(description);
    modal.find('#modal-image').attr('src', image);
  });
});


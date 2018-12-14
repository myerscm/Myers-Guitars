$(function() {
  console.log('test');

  $('#thumbnail-1').click(function(){
    $(this).next().show();

    $('.outer-modal').click(function(event){
        if($(event.target).closest('.outer-modal' + ' .modal-container').length == 0) {
            $('.outer-modal').hide();
        }
    });

    $('.close').click(function(){
      $('.outer-modal').hide();
    })

  })
  $('#thumbnail-2').click(function(){
    $(this).next().show();

    $('.outer-modal').click(function(event){
        if($(event.target).closest('.outer-modal' + ' .modal-container').length == 0) {
            $('.outer-modal').hide();
        }
    });

    $('.close').click(function(){
      $('.outer-modal').hide();
    })

  })

})
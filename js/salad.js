$(function(){
    var $newItemButton = $('#newitembutton');
    var $newItemForm = $('#newitemform');
     var $result = $('#result');

     $newItemButton.show();
     $newItemForm.hide();
     $result.hide();

     $('#showform').on('click', function(){
        $newItemForm.show();
         $newItemButton.hide();
        $result.hide();

     });
     $newItemForm.on('submit', function(e){
     e.preventDefault();
     $result.show();
     $newItemForm.hide();
     $newItemButton.hide();
     });
});

$(function(){
    var $showButton = $('#showbutton');
    $('#show').hide();
    $showButton.on('click', function(){
        $('#show').fadeIn(500)
        $showButton.find('#showbutton').fadeOut();
        var $li = $('.container3');
        $li.hide().each(function(index){
        $(this).delay(700 * index).fadeIn(700);
        });
        });
    });

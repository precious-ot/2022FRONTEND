$(function() {
    var $voteButton = $('#votebutton');
    var $textInput = $('#textinput');
    $voteButton.show();
    $textInput.hide();
    $('#votebutton').on('click', function(){
     $voteButton.hide();
     $textInput.show();
    });
    });
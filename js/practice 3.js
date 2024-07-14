$(function() {
    $('li:contains("Orange")').text('Almond');
    $(this).prepend();
    $('li#one').remove();
});

$(function(){
    var $newItem = $('<li>Orange</li>').addClass('son');
    $('li:last').after($newItem);
    $('li.son').prepend('&#10003; ');
});

$(function(){
    var backgroundColor = $('li').css('background-color');
    $('.son').css({
        'background-color': '#c5a996',
        'border': '1px solid #fff',
        'color': '#000',
        'padding': '+=30',
        'width': '400px',
        'marginLeft': '350px'
    });
});

$(function(){
    var $h2 = $('h2');
    $('ul').hide();
    $h2.append('<a>Show</a>').css({
        'letter-spacing': '5px',
    }).addClass('link2');
    $h2.on('click', function(){
        $('ul').fadeIn(500).children('.son').addClass('complete');
        $h2.find('a').fadeOut();
        var $li = $('li');
        $li.hide().each(function(index){
            $(this).delay(700 * index).fadeIn(700);
        });
    });
});

var $listItems = $('li');
$('li:not(.son)').addClass('cool');
$listItems.has('em').addClass('complete');
$listItems.each(function(){
    var $this = $(this);
    if ($this.is('li'));{
        $this.prepend('priority item:');
    }
});
$('li:contains("honey")').append('(local)');

$(function(){
    var $newItemButton = $('#newitembutton');
    var $newItemForm = $('#newitemform');
    var $textInput = $('input:text');

    $newItemButton.show();
    $newItemForm.hide();

    $('#showform').on('click', function(){
        $newItemButton.hide();
        $newItemForm.show();
    });
    $newItemForm.on('submit', function(e){
    e.preventDefault();
    var newText = $('input:text').val();
    $('li:last').after('<li>' + newText + '</li>');
    $(this).addClass('complete');
    $('li:not(.son)').prepend('&#10003;').css({
        'background-color': '#c5a996',
        'border': '1px solid #fff',
        'color': '#000',
        'padding': '+=30',
        'width': '400px',
        'marginLeft': '350px'
    });
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val();
    var $life = $('li');
    $life.on('click', function(){
        $(this).fadeOut(700);
    });
    });
});

$(function(){
    var $li = $('li');
    $li.on('click', function(){
        $(this).fadeOut(700);
    });
});

$(function(){
    var $p = $('.quote');
    var $quote = $p.clone();
    $p.remove();
    $quote.insertAfter('h2').slideDown();
});

$(function(){
    var $window = $(window);
    var $slideAd = $('#slideAd');
    var endZone = $('#footer').offset().top - $window.height() - 800;
    $window.on('scroll', function(){
        if((endZone) < $window.scrollTop()){
            $slideAd.animate({'right': '0px'}, 250);
        }else{
            $slideAd.stop(true).animate({'right': '160px'}, 250);
        }
    });
});
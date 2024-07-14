var today = new Date();
var day = today.getDay();
var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
var elDay = document.getElementById('day');
elDay.innerHTML = '<p> Today is:' + dayList[day] + '</p>';

var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();
var prepend;
    if(hour >= 12){
prepend = ' PM ';
}else{
    prepend = ' AM ';
}
var elToday = document.getElementById('time');
elToday.innerHTML = '<p>current time: ' + hour + prepend + ' : ' + minute + ' : ' + seconds + '</p>';



var today = new Date();
var dd = today.getDay();
var mm = today.getMonth();
var yy = today.getFullYear();


var elToday = document.getElementById('one');
elToday.innerHTML = '<p>' + mm + '/' + dd + '/' + yy  + '</p>';
var elToday = document.getElementById('two');
elToday.innerHTML = '<p>' + mm + '-' + dd + '-' + yy  + '</p>';
 var elToday = document.getElementById('three');
elToday.innerHTML = '<p>' + dd + '/' + mm + '/' +yy  + '</p>';
var elToday = document.getElementById('four');
elToday.innerHTML = '<p>' + dd + '-' + mm + '-' +yy  + '</p>';

var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3)/ 2;
var area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
var elArea = document.getElementById('area');
elArea.innerHTML ='<p>The area of a triangle whose sides are 5, 6 and 7 is:' + area + '</p>';

alert('gh')
function animate_str(id){
    var elShip = document.getElementById(id);
    var textNode = elShip.childNodes[0];
    var text =textNode.data;

    setInterval(function(){
        text = text[text.length - 1] + text.substring(0,text.length - 1);
        textNode.data = text;
    }, 100);
}











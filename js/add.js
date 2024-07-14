var newEl = document.createElement('li');
var newText = document.createTextNode('COCONUT');
newEl.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);

var firstItem = document.getElementById('one');
if (firstItem.hasAttribute('class')){
    var get = firstItem.getAttribute('class');
}
var el = document.getElementById('scriptResult');
el.innerHTML = '<p>The First Item Has a Class Name:' + get + '</p>';

var secondItem = document.getElementById('two');
secondItem.className = 'complete'

var fourthItem = document.getElementsByTagName('li').item[3];
el.setAttribute('class', 'hot');

var elUsername = document.getElementById('username');
var elmsg = document.getElementById('feedback');
function checkUsername(minLenght){
    if(elUsername.value.length < minLenght){
        elmsg.textContent = 'uesrname must be'  + minLenght +  'characters or more';
    }else{
        elmsg.innerHTML = '';
    }
}
elUsername.addEventListener('blur', function(){
    checkUsername(5);
}, false);


var today = new Date();
var year = today.getFullYear();
var elFloat = document.getElementById('float');
elFloat.innerHTML = '<p class="float-5">&copy;Copyright ' +  year + ' Yoko`s Kitchen';

var elEmail = document.getElementById('email');

function checkUsername(){
    var elMsg = document.getElementById('message');
    if(elEmail.value.length < 10){
        elMsg.textContent = 'Wrong email!';
    }else{
        elMsg.textContent = '';
    }
}
var elEmail = document.getElementById('email');
elEmail.onblur = checkUsername;
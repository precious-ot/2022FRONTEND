var today = new Date();
var year = today.getFullYear();
var elYear = document.getElementById('footer');
elYear.innerHTML = '<p class="footer2">&copy;'
 + year + ' Copyright IN&#183;SALAD<sup>&reg;</sup> All Right Reserved</p>'

 function checkUsername(){
  var elMsg = document.getElementById('feedback');
if(this.value.length < 5){
   elMsg.textContent = 'Username must be five characters or more!';
}else{
   elMsg.textContent = '';
}
 }

 var elEmail = document.getElementById('email');
 elEmail.onblur = checkUsername;
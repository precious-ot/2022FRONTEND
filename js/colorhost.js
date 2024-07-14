var today = new Date;
var year = today.getFullYear();

var elYear = document.getElementById('footer');
elYear.innerHTML = 'Copyright &copy; ' + year + ' <span class="footer">ColorHost</span>. All Right Reserved.';
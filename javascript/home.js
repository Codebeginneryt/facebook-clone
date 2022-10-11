var abtn = document.getElementById('accountbtn');
var showbtn = document.getElementById('showaccount');
var closebtn = document.getElementById('right-box');
abtn.onclick = function(){
	if (showbtn.style.display == 'block' || closebtn.style.display == 'none') {
		showbtn.style.display = 'none';
		closebtn.style.display = 'block';
	}
	else{
		showbtn.style.display = 'block';
		closebtn.style.display = 'none';
	}
};
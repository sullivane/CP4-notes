/* JavaScript Schedule */

function searcher() {
	
	var jamm = document.getElementById('schedulejam').value;

	switch (jamm) {
		case 'music':
			var jams = document.getElementsByClassName("m");
			
			for (i = 0; i < jams.length; i++) {
				jams[i].style.backgroundColor = "cyan";
			}
				break;
		case 'math':
			var jams = document.getElementsByClassName("ma");
			
			for (i = 0; i < jams.length; i++) {
				jams[i].style.backgroundColor = "cyan";
			}
				break;
		
		case 'science':
			var jams = document.getElementsByClassName("s");
			
			for (i = 0; i < jams.length; i++) {
				jams[i].style.backgroundColor = "cyan";
			}
				break;
		case 'religion':
			var jams = document.getElementsByClassName("r");
			
			for (i = 0; i < jams.length; i++) {
				jams[i].style.backgroundColor = "cyan";
			}	
				break;	
		case 'history':
	var jams = document.getElementsByClassName("h");
			
			for (i = 0; i < jams.length; i++) {
				jams[i].style.backgroundColor = "cyan";
			}	
				break;	
		case 'french':
			var jams = document.getElementsByClassName("f");
			
			for (i = 0; i < jams.length; i++) {
				jams[i].style.backgroundColor = "cyan";
			}	
				break;	
		case 'computer programming':
			var jams = document.getElementsByClassName("cp");
			
			for (i = 0; i < jams.length; i++) {
				jams[i].style.backgroundColor = "cyan";
			}	
				break;	
		case 'english':
			var jams = document.getElementsByClassName("e");
			
			for (i = 0; i < jams.length; i++) {
				jams[i].style.backgroundColor = "cyan";
			}
				break;
		case 'speech':
			var jams = document.getElementsByClassName("sp");
			
			for (i = 0; i < jams.length; i++) {
				jams[i].style.backgroundColor = "cyan";
			}
				break;
		case 'homeroom':
			var jams = document.getElementsByClassName("ho");
			
			for (i = 0; i < jams.length; i++) {
				jams[i].style.backgroundColor = "cyan";
			}
				break;
		case 'gym':
			var jams = document.getElementsByClassName("g");
			
			for (i = 0; i < jams.length; i++) {
				jams[i].style.backgroundColor = "cyan";
			}
				break;
		case 'level assembly':
			var jams = document.getElementsByClassName("la");
			
			for (i = 0; i < jams.length; i++) {
				jams[i].style.backgroundColor = "cyan";
			}
				break;
				
	}
	
}

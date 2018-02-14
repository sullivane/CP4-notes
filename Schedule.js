/* JavaScript Schedule */

function searcher() {
	
	var jamm = document.getElementById('schedulejam').value;

	switch (jamm) {
		case 'music':
			var jams = document.getElementsByClassName("m");
		
				break;
		case 'math':
			var jams = document.getElementsByClassName("ma");
		
				break;
		
		case 'science':
			var jams = document.getElementsByClassName("s");
		
				break;
		case 'religion':
			var jams = document.getElementsByClassName("r");
			
				break;	
		case 'history':
			var jams = document.getElementsByClassName("h");
		
				break;	
		case 'french':
			var jams = document.getElementsByClassName("f");
		
				break;	
		case 'computer programming':
			var jams = document.getElementsByClassName("cp");
		
				break;	
		case 'english':
			var jams = document.getElementsByClassName("e");
	
				break;
		case 'speech':
			var jams = document.getElementsByClassName("sp");
	
				break;
		case 'homeroom':
			var jams = document.getElementsByClassName("ho");
	
				break;
		case 'gym':
			var jams = document.getElementsByClassName("g");
	
				break;
		case 'level assembly':
			var jams = document.getElementsByClassName("la");

				break;
				
	}
		for (i = 0; i < jams.length; i++) {
				jams[i].style.backgroundColor = "cyan";
			}
}

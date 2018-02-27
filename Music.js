/* Music Key/Chord Generator */

function MusicCode() {
	
	var Keys = document.getElementById('Music').value;
	
	var Keys = Math.floor((Math.random() * 15) + 1);
	
	switch (Keys) {
		case 1:
			document.getElementById("C").innerHTML = "Key of C";
			 
				break;
		case 2:
			document.getElementById("G").innerHTML = "Key of G";
			
				break;
		case 3:
			document.getElementById("D").innerHTML = "Key of D";
			
				break;
	}
}


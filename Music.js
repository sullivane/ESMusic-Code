/* Music Key/Chord Generator */

function RandomKeySignature() {
	
	var Keys = document.getElementById('KeySignature').value;
	
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
		case 4:
			document.getElementById("A").innerHTML = "Key of A";
				break;
		case 5:
			document.getElementById("E").innerHTML = "Key of E";
				break;
		case 6:
			document.getElementById("B").innerHTML = "Key of B";
				break;
		case 7:
			document.getElementById("F#").innerHTML = "Key of F#";
				break;
		case 8:
			document.getElementById("C#").innerHTML = "Key of C#";
				break;
		case 9:
			document.getElementById("F").innerHTML = "Key of F";
				break;
		case 10:
			document.getElementById("Bb").innerHTML = "Key of Bb";
				break;
		case 11:
			document.getElementById("Eb").innerHTML = "Key of Eb";
				break;
		case 12:
			document.getElementById("Ab").innerHTML = "Key of Ab";
				break;
		case 13:
			document.getElementById("Db").innerHTML = "Key of Db";
				break;
		case 14:
			document.getElementById("Gb").innerHTML = "Key of Gb";
				break;
		case 15:
			document.getElementById("Cb").innerHTML = "Key of Cb";
				break;
	}
}

function RandomChords() {
	
	var Chords = document.getElementById('ChordsCode').value;
	
	var Chords = Math.floor((Math.random())
	
}



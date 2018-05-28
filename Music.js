/* Music Key/Chord Generator */

function RandomKeySignature() {
	
	var Keys = document.getElementById('KeySignature').value;
	
	var Keys = Math.floor((Math.random() * 28) + 1);
	
	switch (Keys) {
		
/* Major Keys */		
		
		case 1:
			document.getElementById("CMaj").innerHTML = "Key of C Major (No Sharps or Flats)";
				break;
		case 2:
			document.getElementById("GMaj").innerHTML = "Key of G Major (1 Sharp)";
				break;
		case 3:
			document.getElementById("DMaj").innerHTML = "Key of D Major(2 Sharps)";
				break;
		case 4:
			document.getElementById("AMaj").innerHTML = "Key of A Major (3 Sharps)";
				break;
		case 5:
			document.getElementById("EMaj").innerHTML = "Key of E Major (4 Sharps)";
				break;
		case 6:
			document.getElementById("BMaj").innerHTML = "Key of B Major (5 Sharps)";
				break;
		case 7:
			document.getElementById("F#Maj").innerHTML = "Key of F# Major (6 Sharps)";
				break;
		case 8:
			document.getElementById("C#Maj").innerHTML = "Key of C# Major (7 Sharps)";
				break;
		case 9:
			document.getElementById("FMaj").innerHTML = "Key of F Major (1 Flat)";
				break;
		case 10:
			document.getElementById("BbMaj").innerHTML = "Key of Bb Major (2 Flats)";
				break;
		case 11:
			document.getElementById("EbMaj").innerHTML = "Key of Eb Major (3 Flats)";
				break;
		case 12:
			document.getElementById("AbMaj").innerHTML = "Key of Ab Major (4 Flats)";
				break;
		case 13:
			document.getElementById("DbMaj").innerHTML = "Key of Db Major (5 Flats)";
				break;
		case 14:
			document.getElementById("GbMaj").innerHTML = "Key of Gb Major (6 Flats)";
				break;
		case 15:
			document.getElementById("CbMaj").innerHTML = "Key of Cb Major (7 Flats)";
				break;
		
/* Minor Key */
		
		case 16:
			document.getElementById("Am").innerHTML = "Key of A Minor (No Sharps or Flats)";
				break;
		case 17:
			document.getElementById("Em").innerHTML = "Key of E Minor (1 Sharp)";
				break;
		case 18:
			document.getElementById("Bm").innerHTML = "Key of B Minor (2 Sharps)";
				break;
		case 19:
			document.getElementById("F#m").innerHTML = "Key of F# Minor (3 Sharps)";
				break;
		case 20:
			document.getElementById("C#m").innerHTML = "Key of C# Minor (4 Sharps)";
				break;
		case 21:
			document.getElementById("G#m").innerHTML = "Key of G# Minor (5 Sharps)";
				break;
		case 22:
			document.getElementById("D#m").innerHTML = "Key of D# Minor (6 Sharps)";
				break;
		case 23:
			document.getElementById("Bbm").innerHTML = "Key of Bb Minor (5 Flats)";
				break;
		case 24:
			document.getElementById("Dm").innerHTML = "Key of D Minor (1 Flat)";
				break;
		case 25:
			document.getElementById("Gm").innerHTML = "Key of G Minor (2 Flats)";
				break;
		case 26:
			document.getElementById("Cm").innerHTML = "Key of C Minor (3 Flats)";
				break;
		case 27:
			document.getElementById("Fm").innerHTML = "Key of F Minor (4 Flats)";
				break;
		case 28:
			document.getElementById("Ebm").innerHTML = "Key of Eb Minor (6 Flats)";
				break;
		
	}
}


function Major() {
	
	var MajorKeys = document.getElementById('MajorKey').value;
	
	var MajorKeys = Math.floor((Math.random() * 15) + 1);
	
	switch (MajorKeys) {
		
		case 1:
			document.getElementById("CMaj").innerHTML = "Key of C Major (No Sharps or Flats)";
				break;
		case 2:
			document.getElementById("GMaj").innerHTML = "Key of G Major (1 Sharp)";
				break;
		case 3:
			document.getElementById("DMaj").innerHTML = "Key of D Major (2 Sharps)";
				break;
		case 4:
			document.getElementById("AMaj").innerHTML = "Key of A Major (3 Sharps)";
				break;
		case 5:
			document.getElementById("EMaj").innerHTML = "Key of E Major (4 Sharps)";
				break;
		case 6:
			document.getElementById("BMaj").innerHTML = "Key of B Major (5 Sharps)";
				break;
		case 7:
			document.getElementById("F#Maj").innerHTML = "Key of F# Major (6 Sharps)";
				break;
		case 8:
			document.getElementById("C#Maj").innerHTML = "Key of C# Major (7 Sharps)";
				break;
		case 9:
			document.getElementById("FMaj").innerHTML = "Key of F Major (1 Flat)";
				break;
		case 10:
			document.getElementById("BbMaj").innerHTML = "Key of Bb Major (2 Flats)";
				break;
		case 11:
			document.getElementById("EbMaj").innerHTML = "Key of Eb Major (3 Flats)";
				break;
		case 12:
			document.getElementById("AbMaj").innerHTML = "Key of Ab Major (4 Flats)";
				break;
		case 13:
			document.getElementById("DbMaj").innerHTML = "Key of Db Major (5 Flats)";
				break;
		case 14:
			document.getElementById("GbMaj").innerHTML = "Key of Gb Major (6 Flats)";
				break;
		case 15:
			document.getElementById("CbMaj").innerHTML = "Key of Cb Major (7 Flats)";
				break;
		
	}
	
}



function Minor() {
	
	var MinorKeys = document.getElementById('MinorKey').value;

	var MinorKeys = Math.floor((Math.random() * 13) + 1);
			
	switch (MinorKeys) {
			
		case 1:
			document.getElementById("Am").innerHTML = "Key of A Minor (No Sharps or Flats)";
				break;
		case 2:
			document.getElementById("Em").innerHTML = "Key of E Minor (1 Sharp)";
				break;
		case 3:
			document.getElementById("Bm").innerHTML = "Key of B Minor (2 Sharps)";
				break;
		case 4:
			document.getElementById("F#m").innerHTML = "Key of F# Minor (3 Sharps)";
				break;
		case 5:
			document.getElementById("C#m").innerHTML = "Key of C# Minor (4 Sharps)";
				break;
		case 6:
			document.getElementById("G#m").innerHTML = "Key of G# Minor (5 Sharps)";
				break;
		case 7:
			document.getElementById("D#m").innerHTML = "Key of D# Minor (6 Sharps)";
				break;
		case 8:
			document.getElementById("Bbm").innerHTML = "Key of Bb Minor (7 Sharps)";
				break;
		case 9:
			document.getElementById("Dm").innerHTML = "Key of D Minor (1 Flat)";
				break;
		case 10:
			document.getElementById("Gm").innerHTML = "Key of G Minor (2 Flats)";
				break;
		case 11:
			document.getElementById("Cm").innerHTML = "Key of C Minor (3 Flats)";
				break;
		case 12:
			document.getElementById("Fm").innerHTML = "Key of F Minor (4 Flats)";
				break;
		case 13:
			document.getElementById("Ebm").innerHTML = "Key of Eb Minor (5 Flats)";
				break;
	
	}
	
}





function RandomChords() {

	var Chords = document.getElementById('ChordsCode').value;
	
	var Chords = Math.floor((Math.random() * 7) + 1);
	
	switch (Chords) {
		
		case 1:
			document.getElementById("251").innerHTML = "2-5(7th)-1 Pattern"
				break;
		case 2:
			document.getElementById("1415").innerHTML = "1-4-1-5 Pattern"
				break;
		case 3:
			document.getElementById("1645").innerHTML = "1-6-4-5 Pattern"
				break;
		case 4:
			document.getElementById("1625").innerHTML = "1-6-2-5 Pattern"
				break;
		case 5:
			document.getElementById("1b74").innerHTML = "1-7(Flat)-4 Pattern"
				break;
		case 6:
			document.getElementById("1b7b65").innerHTML = "1-7(Flat)-6(Flat)-5(7th)"
				break;
		case 7:
			document.getElementById("1564").innerHTML = "1-5-6-4 Pattern"
				break;
	
	}
		
}



function Refresh() {
	location.reload();
}


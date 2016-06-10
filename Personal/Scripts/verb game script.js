//COMPLETED 10/6/15
//MOOD TO BE ADDED LATER

//Define global variables

var tense;
var person;
var number;
var voice;

var tense1;
var tense; 
var tense3; 
var tense4; 
var tense5; 
var tense6; 
var person1; 
var person2; 
var person3; 
var number1; 
var number2; 
var voice1; 
var voice2; 

var tense1button; 
var tense2button; 
var tense3button; 
var tense4button;
var tense5button; 
var tense6button; 
var person1button; 
var person2button;
var person3button; 
var number1button;
var number2button; 
var voice1button; 
var voice2button;


//Function to pick a random number
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}




function makeAVerb() {

console.clear();

//Chooses a random tense, person, number, and voice
tense = randomIntFromInterval(1, 6);
person = randomIntFromInterval(1, 3);
number = randomIntFromInterval(1, 2);
voice = randomIntFromInterval(1, 2);

var verbs = [ ["ambulo", "ambulare", "ambulavi", "ambulatus"], ["impedio", "impedire", "impedivi", "impeditus"], ["specto", "spectare", "spectavi", "spectatus"], ["porto", "portare", "portavi", "portatus"], ["respondeo", "respond&#275;re", "respondi", "responsus"], ["rogo", "rogare", "rogavi", "rogatus"], ["teneo", "ten&#275;re", "tenui", "tentus"], ["dico", "dicere", "dixi", "dictus"], ["nosco", "noscere", "novi", "notus"], ["lego", "legere", "legi", "lectus"], ["venio", "venire", "veni", "venturus"], ["munio", "munire", "munivi", "munitus"] ]
// NOTE: long e is &#275; 
var verbNumber = verbs.length - 1;

// Picks a verb 
var thisVerb = verbs[randomIntFromInterval(0, verbNumber)];

/* Checks the conjugation */
var second = thisVerb[1];
var secondLength = second.length;
var start = secondLength - 3;
var secondEnding = second.substring(start, secondLength);
var conjugationNumber = 0;

if (secondEnding === "are") {
	conjugationNumber = 1;
} else if (secondEnding === "ere") {
	conjugationNumber = 3;
} else if (secondEnding === "ire") {
	conjugationNumber = 4;
} else {
	conjugationNumber = 2;
};		

console.log("Conjugation number: " + conjugationNumber);

// Gets the proper dictionary entry 
var thisDictEntry = 0;

if ((conjugationNumber === 1 || conjugationNumber === 2) && (tense === 1 || tense === 2 || tense === 3)) {
	thisDictEntry = 2;
} else if ((conjugationNumber === 3 || conjugationNumber === 4) && (tense === 1 || tense === 2 || tense === 3)) {
	thisDictEntry = 1;
} else if ((tense === 4 || tense === 5 || tense === 6) && (voice === 1)) {
	thisDictEntry = 3;
} else if ((tense === 4 || tense === 5 || tense === 6) && (voice === 2)) {
	thisDictEntry = 4;
} else {
	console.log("Error 2");
};

console.log("This dict entry: " + thisDictEntry);

// Gets the stem 
var stem = 0;
var first = thisVerb[0];
var third = thisVerb[2];
var fourth = thisVerb[3];
var stemroot = 0;



if ((thisDictEntry === 2) && (conjugationNumber != 2)) {
	stemroot = second;
	stem = stemroot.substring(0, stemroot.length - 2);
} else if (thisDictEntry === 1) {
	stemroot = first;
	stem = stemroot.substring(0, stemroot.length - 1);
} else if (thisDictEntry === 3) {
	stemroot = third;
	stem = stemroot.substring(0, stemroot.length - 1);
} else if (thisDictEntry === 4) {
	stem = fourth;
} else if ((thisDictEntry === 2) && (conjugationNumber === 2)) {
	stemroot = second;
	stem = stemroot.substring(0, stemroot.length - 8);
	stem = stem + "e";
} else {
	console.log("error 3");
};	

console.log("Stem: " + stem);

// Adds endings 
var verb = 0;

// First/Second present, future, and imperfect 
if (conjugationNumber === 1 || conjugationNumber === 2) {
	if (tense === 1) {
		if (voice === 1) {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "o";
				} else if (person === 2) {
					verb = stem + "s";
				} else {
					verb = stem + "t";
				};
			} else {
				if (person === 1) {
					verb = stem + "mus";
				} else if (person === 2) {
					verb = stem + "tis";
				} else {
					verb = stem + "nt";
				};
			};
		} else {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "or";
				} else if (person === 2) {
					verb = stem + "ris";
				} else {
					verb = stem + "tur";
				};
			} else {
				if (person === 1) {
					verb = stem + "mur";
				} else if (person === 2) {
					verb = stem + "mini";
				} else {
					verb = stem + "ntur";
				};
			};
		};
	} else if (tense === 2) {
			if (voice === 1) {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "bo";
				} else if (person === 2) {
					verb = stem + "bis";
				} else {
					verb = stem + "bit";
				};
			} else {
				if (person === 1) {
					verb = stem + "bimus";
				} else if (person === 2) {
					verb = stem + "bitis";
				} else {
					verb = stem + "bunt";
				};
			};
		} else {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "bor";
				} else if (person === 2) {
					verb = stem + "beris";
				} else {
					verb = stem + "bitur";
				};
			} else {
				if (person === 1) {
					verb = stem + "bimur";
				} else if (person === 2) {
					verb = stem + "bimini";
				} else {
					verb = stem + "buntur";
				};
			};
		};
	} else if (tense === 3) {
		if (voice === 1) {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "bam";
				} else if (person === 2) {
					verb = stem + "bas";
				} else {
					verb = stem + "bat";
				};
			} else {
				if (person === 1) {
					verb = stem + "bamus";
				} else if (person === 2) {
					verb = stem + "batis";
				} else {
					verb = stem + "bant";
				};
			};
		} else {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "bar";
				} else if (person === 2) {
					verb = stem + "baris";
				} else {
					verb = stem + "batur";
				};
			} else {
				if (person === 1) {
					verb = stem + "bamur";
				} else if (person === 2) {
					verb = stem + "bamini";
				} else {
					verb = stem + "bantur";
				};
			};
		};
	};
};
					
// Third and Fourth present, future, and imperfect 
if (conjugationNumber === 3 || conjugationNumber === 4) {
	if (tense === 1) {
		if (voice === 1) {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "o";
				} else if (person === 2) {
					verb = stem + "s";
				} else {
					verb = stem + "t";
				};
			} else {
				if (person === 1) {
					verb = stem + "mus";
				} else if (person === 2) {
					verb = stem + "tis";
				} else {
					verb = stem + "unt";
				};
			};
		} else {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "or";
				} else if (person === 2) {
					verb = stem + "ris";
				} else {
					verb = stem + "tur";
				};
			} else {
				if (person === 1) {
					verb = stem + "mur";
				} else if (person === 2) {
					verb = stem + "mini";
				} else {
					verb = stem + "untur";
				};
			};
		};
	} else if (tense === 2) {
			if (voice === 1) {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "am";
				} else if (person === 2) {
					verb = stem + "es";
				} else {
					verb = stem + "et";
				};
			} else {
				if (person === 1) {
					verb = stem + "emus";
				} else if (person === 2) {
					verb = stem + "etis";
				} else {
					verb = stem + "ent";
				};
			};
		} else {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "ar";
				} else if (person === 2) {
					verb = stem + "eris";
				} else {
					verb = stem + "etur";
				};
			} else {
				if (person === 1) {
					verb = stem + "emur";
				} else if (person === 2) {
					verb = stem + "emini";
				} else {
					verb = stem + "entur";
				};
			};
		};
	} else if (tense === 3) {
		if (voice === 1) {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "ebam";
				} else if (person === 2) {
					verb = stem + "ebas";
				} else {
					verb = stem + "ebat";
				};
			} else {
				if (person === 1) {
					verb = stem + "ebamus";
				} else if (person === 2) {
					verb = stem + "ebatis";
				} else {
					verb = stem + "ebant";
				};
			};
		} else {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "ebar";
				} else if (person === 2) {
					verb = stem + "ebaris";
				} else {
					verb = stem + "ebatur";
				};
			} else {
				if (person === 1) {
					verb = stem + "ebamur";
				} else if (person === 2) {
					verb = stem + "ebamini";
				} else {
					verb = stem + "ebantur";
				};
			};
		};
	};
};

// Perfect, Pluperfect, and Future Perfect active, all tenses 
if (voice === 1) {	
	if (tense === 4) {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "i";
				} else if (person === 2) {
					verb = stem + "isti";
				} else {
					verb = stem + "it";
				};
			} else {
				if (person === 1) {
					verb = stem + "imus";
				} else if (person === 2) {
					verb = stem + "istis";
				} else {
					verb = stem + "erunt";
				};
			};
	} else if (tense === 5) {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "eram";
				} else if (person === 2) {
					verb = stem + "eras";
				} else {
					verb = stem + "erat";
				};
			} else {
				if (person === 1) {
					verb = stem + "eramus";
				} else if (person === 2) {
					verb = stem + "eratis";
				} else {
					verb = stem + "erant";
				};
			};
	} else if (tense === 6) {
			if (number === 1) {
				if (person === 1) {
					verb = stem + "ero";
				} else if (person === 2) {
					verb = stem + "eris";
				} else {
					verb = stem + "erit";
				};
			} else {
				if (person === 1) {
					verb = stem + "erimus";
				} else if (person === 2) {
					verb = stem + "eritis";
				} else {
					verb = stem + "erint";
				};
			};
		};
	};


// Perfect, Pluperfect, and Future Perfect passive, all conjugations 
	if (voice === 2) {
		if (tense === 4) {
			if (number === 1) {
				if (person === 1) {
					verb = stem + " sum";
				} else if (person === 2) {
				verb = stem + " es";
				} else {
					verb = stem + " est";
				};
			} else {
				if (person === 1) {
					verb = stem + " sumus";
				} else if (person === 2) {
					verb = stem + " estis";
				} else {
					verb = stem + " sunt";
				};
			};
		} else if (tense === 5) {
			if (number === 1) {
				if (person === 1) {
					verb = stem + " eram";
				} else if (person === 2) {
					verb = stem + " eras";
				} else {
					verb = stem + " erat";
				};
			} else {
				if (person === 1) {
					verb = stem + " eramus";
				} else if (person === 2) {
					verb = stem + " eratis";
				} else {
					verb = stem + " erant";
				};
			};
		} else {
			if(tense === 6) {
				if (number === 1) {
					if (person === 1) {
						verb = stem + " ero";
					} else if (person === 2) {
						verb = stem + " eris";
					} else {
						verb = stem + " erit";
				};
			} else {
				if (person === 1) {
					verb = stem + " erimus";
				} else if (person === 2) {
					verb = stem + " eritis";
				} else {
					verb = stem + " erunt";
				};
			};
		};
	};
};

//Display verb forms and conjugated verb	
document.getElementById("verb").innerHTML = verb;
document.getElementById("fullVerb").innerHTML = thisVerb.join(', ');

//Accesses button labels
tense1 = document.getElementById("tense1");
tense2 = document.getElementById("tense2");
tense3 = document.getElementById("tense3");
tense4 = document.getElementById("tense4");
tense5 = document.getElementById("tense5");
tense6 = document.getElementById("tense6");
person1 = document.getElementById("person1");
person2 = document.getElementById("person2");
person3 = document.getElementById("person3");
number1 = document.getElementById("number1");
number2 = document.getElementById("number2");
voice1 = document.getElementById("voice1");
voice2 = document.getElementById("voice2");

//Resets all the colors to black
tense1.style.color = "black";
tense2.style.color = "black";
tense3.style.color = "black";
tense4.style.color = "black";
tense5.style.color = "black";
tense6.style.color = "black";
person1.style.color = "black";
person2.style.color = "black";
person3.style.color = "black";
number1.style.color = "black";
number2.style.color = "black";
voice1.style.color = "black";
voice2.style.color = "black";

//Accesses the buttons
tense1button = document.getElementById("tense1button");
tense2button = document.getElementById("tense2button");
tense3button = document.getElementById("tense3button");
tense4button = document.getElementById("tense4button");
tense5button = document.getElementById("tense5button");
tense6button = document.getElementById("tense6button");
person1button = document.getElementById("person1button");
person2button = document.getElementById("person2button");
person3button = document.getElementById("person3button");
number1button = document.getElementById("number1button");
number2button = document.getElementById("number2button");
voice1button = document.getElementById("voice1button");
voice2button = document.getElementById("voice2button");

//Resets all the radio buttons
tense1button.checked = false;
tense2button.checked = false;
tense3button.checked = false;
tense4button.checked = false;
tense5button.checked = false;
tense6button.checked = false;
person1button.checked = false;
person2button.checked = false;
person3button.checked = false;
number1button.checked = false;
number2button.checked = false;
voice1button.checked = false;
voice2button.checked = false;
};














//Function to check if answers are correct, and color them accordingly

function check() {

//Finds out which button is selected
var tense1buttonChecked = tense1button.checked;
var tense2buttonChecked = tense2button.checked;
var tense3buttonChecked = tense3button.checked;
var tense4buttonChecked = tense4button.checked;
var tense5buttonChecked = tense5button.checked;
var tense6buttonChecked = tense6button.checked;
var person1buttonChecked = person1button.checked;
var person2buttonChecked = person2button.checked;
var person3buttonChecked = person3button.checked;
var number1buttonChecked = number1button.checked;
var number2buttonChecked = number2button.checked;
var voice1buttonChecked = voice1button.checked;
var voice2buttonChecked = voice2button.checked;

// Colors labels according to right or wrong
	if (tense === 1) {
		tense1.style.color = "#00FF00";
		if (tense2buttonChecked) {
			tense2.style.color = "red";
		} 
		if (tense3buttonChecked) {
			tense3.style.color = "red";
		} 
		if(tense4buttonChecked) {
			tense4.style.color = "red";
		} 
		if (tense5buttonChecked) {
			tense5.style.color = "red";
		} 
		if (tense6buttonChecked) {
			tense6.style.color = "red";
		}
	} else if (tense === 2) {
		tense2.style.color = "#00FF00";
		if (tense1buttonChecked) {
			tense1.style.color = "red";
		} 
		if (tense3buttonChecked) {
			tense3.style.color = "red";
		} 
		if(tense4buttonChecked) {
			tense4.style.color = "red";
		} 
		if (tense5buttonChecked) {
			tense5.style.color = "red";
		} 
		if (tense6buttonChecked) {
			tense6.style.color = "red";
		}
	} else if (tense === 3) {
		tense3.style.color = "#00FF00";
		if (tense2buttonChecked) {
			tense2.style.color = "red";
		} 
		if (tense1buttonChecked) {
			tense1.style.color = "red";
		} 
		if(tense4buttonChecked) {
			tense4.style.color = "red";
		} 
		if (tense5buttonChecked) {
			tense5.style.color = "red";
		} 
		if (tense6buttonChecked) {
			tense6.style.color = "red";
		}
	} else if (tense === 4) {
		tense4.style.color = "#00FF00";
		if (tense2buttonChecked) {
			tense2.style.color = "red";
		} 
		if (tense3buttonChecked) {
			tense3.style.color = "red";
		} 
		if(tense1buttonChecked) {
			tense1.style.color = "red";
		} 
		if (tense5buttonChecked) {
			tense5.style.color = "red";
		} 
		if (tense6buttonChecked) {
			tense6.style.color = "red";
		}
	} else if (tense === 5) {
		tense5.style.color = "#00FF00";
		if (tense2buttonChecked) {
			tense2.style.color = "red";
		} 
		if (tense3buttonChecked) {
			tense3.style.color = "red";
		} 
		if(tense4buttonChecked) {
			tense4.style.color = "red";
		} 
		if (tense1buttonChecked) {
			tense1.style.color = "red";
		} 
		if (tense6buttonChecked) {
			tense6.style.color = "red";
		}
	} else {
		tense6.style.color = "#00FF00";
		if (tense2buttonChecked) {
			tense2.style.color = "red";
		} 
		if (tense3buttonChecked) {
			tense3.style.color = "red";
		} 
		if(tense4buttonChecked) {
			tense4.style.color = "red";
		} 
		if (tense5buttonChecked) {
			tense5.style.color = "red";
		} 
		if (tense1buttonChecked) {
			tense1.style.color = "red";
		}
	};

	if (person === 1) {
		person1.style.color = "#00FF00";
		if (person2buttonChecked) {
			person2.style.color = "red";
		}
		if (person3buttonChecked) {
			person3.style.color = "red";
		}
	} else if (person === 2) {
		person2.style.color = "#00FF00";
		if (person1buttonChecked) {
			person1.style.color = "red";
		}
		if (person3buttonChecked) {
			person3.style.color = "red";
		}
	} else {
		person3.style.color = "#00FF00";
		if (person2buttonChecked) {
			person2.style.color = "red";
		}
		if (person1buttonChecked) {
			person1.style.color = "red";
		}
	};

	if (number === 1) {
		number1.style.color = "#00FF00";
		if (number2buttonChecked) {
			number2.style.color = "red";
		}
	} else {
		number2.style.color = "#00FF00";
		if (number1buttonChecked) {
			number1.style.color = "red";
		}
	};

	if (voice === 1) {
		voice1.style.color = "#00FF00";
		if (voice2buttonChecked) {
			voice2.style.color = "red";
		}
	} else {
		voice2.style.color = "#00FF00";
		if (voice1buttonChecked) {
			voice1.style.color = "red";
		}
	};
};

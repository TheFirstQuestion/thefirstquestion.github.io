var gradeType;

function buttonSelected() { 
	var forty = document.getElementById("forty").checked;
	var eighty = document.getElementById("eighty").checked;
	
	if (eighty == true) {
		gradeType = 42;
		document.getElementById("firstQuarterLabel").innerHTML = "Semester Grade: ";
		document.getElementById("secondQuarterLabel").style.display = "none";
		document.getElementById("grade2").style.display = "none";
	} else {
		gradeType = 1;
		document.getElementById("firstQuarterLabel").innerHTML = "First Quarter Grade: ";
		document.getElementById("secondQuarterLabel").style.display = "inline-block";
		document.getElementById("grade2").style.display = "inline-block";
	}
}

function calculate() {
	var grade1 = document.getElementById("grade1").value;
	var x = document.getElementById("finalPercent");
	var finalPercent = x.options[x.selectedIndex].value;
	
	if (gradeType == 1) {
		var quarterPercent = (1 - finalPercent) / 2;
		var grade2 = document.getElementById("grade2").value;
		var grade2weight = grade2 * quarterPercent;
		var grade1weight = grade1 * quarterPercent;
		var gradeWeight = grade1weight;
		var gradeWeight = grade1weight + grade2weight;
	} else {
		var quarterPercent = (1 - finalPercent);
		var grade1weight = grade1 * quarterPercent;
		var gradeWeight = grade1weight;
	}
	
	var A = round((93 - gradeWeight) / finalPercent);
	var A1 = round((90 - gradeWeight) / finalPercent);		// note: can't use + or - in variable names
	var B0 = round((87 - gradeWeight) / finalPercent);
	var B = round((83 - gradeWeight) / finalPercent);
	var B1 = round((80 - gradeWeight) / finalPercent);
	var C0 = round((77 - gradeWeight) / finalPercent);
	var C = round((73 - gradeWeight) / finalPercent);
	var C1 = round((70 - gradeWeight) / finalPercent);
	var D0 = round((67 - gradeWeight) / finalPercent);
	var D = round((62 - gradeWeight) / finalPercent);
	var D1 = round((60 - gradeWeight) / finalPercent);
	
	var minimums = [A, "A", A1, "A1", B0, "B0", B, "B", B1, "B1", C0, "C0", C, "C", C1,"C1", D0,"D0", D, "D", D1, "D1"];
	
	for (i = 0; i < 22; i = i + 2) {
		var currentValue = minimums[i];
		var currentName = minimums[i + 1];
		
		document.getElementById(currentName).innerHTML = currentValue;
		
		if (currentValue < 0) {
			document.getElementById(currentName).parentNode.style.background = 'rgba(0, 255, 0, 0.3)';
		} else if (currentValue > 100) {
			document.getElementById(currentName).parentNode.style.background = 'rgba(255, 0, 0, 0.3)';
		} else if (0 < currentValue < 100) {
			document.getElementById(currentName).parentNode.style.background = 'white';
		} 
	}
	
	document.getElementById("insertHere").innerHTML = A;
}

function round(num) {
    return Math.ceil(num * 100) / 100;
}
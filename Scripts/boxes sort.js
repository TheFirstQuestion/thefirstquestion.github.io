function checkClass(id, className) {
 	var x = document.getElementById(id).checked;  
 	var a = document.getElementsByClassName(className);
		if (x === false) {     								
			for (var i = 0; i < a.length; i++) {				 
    			a[i].style.display = "none";
    				a[i].nextSibling.style.display = "none";			
			};
		};
		if (x === true) {								
			for (var i = 0; i < a.length; i++) {						
				a[i].style.display = "inline-block";
				a[i].nextSibling.style.display = "inline-block";
			};
		};
}

function checkId(box, id) {
 	var x = document.getElementById(box).checked;  
 	var a = document.getElementById(id);
		if (x === false) {     												 
    			a.style.display = "none";					
		};
		if (x === true) {														
				a.style.display = "inline-block";
		};
}

function check(id, className) {
 	var x = document.getElementById(id).checked;  
 	var a = document.getElementsByClassName(className);
		if (x === false) {     								
			for (var i = 0; i < a.length; i++) {				 
    			a[i].style.display = "none";			
			};
		};
		if (x === true) {								
			for (var i = 0; i < a.length; i++) {						
				a[i].style.display = "block";
			};
		};
}
function check() {
		
			 var CW = document.getElementById("classicWhoBox").checked;   // sees if the box is checked  
			if (CW === false) {     //if not
				var a = document.getElementsByClassName("CWEpisode");   //store everything with id "CWEpisode" in an array
					for (var i = 0; i < a.length; i++) {				//go though the array
    					a[i].style.display = "none";					// remove them from the page
					};
					var k = document.getElementsByClassName("serialTitle");
					for (var i = 0; i < k.length; i++) {
    					k[i].style.display = "none";
					};
					var l = document.getElementsByClassName("classicSeasonHeading");
					for (var i = 0; i < l.length; i++) {
    					l[i].style.display = "none";
					};
					var p = document.getElementsByClassName("classic");
					for (var i = 0; i < p.length; i++) {
    					p[i].style.display = "none";
					};
					var br = document.getElementsByClassName("CWbr");
					for (var i = 0; i < br.length; i++) {
    					br[i].style.display = "none";
					};
					
			};
			
			
			
			 var NW = document.getElementById("newWhoBox").checked;     
			if (NW === false) {     
				var b = document.getElementsByClassName("NWEpisode");
					for (var i = 0; i < b.length; i++) {
    					b[i].style.display = "none";
					};
				var r = document.getElementsByClassName("newSeriesHeading");
					for (var i = 0; i < r.length; i++) {
    					r[i].style.display = "none";
					};	
			};
			
			
			
			
			var TW = document.getElementById("torchwoodBox").checked;     
			if (TW === false) {     
				var c = document.getElementsByClassName("TWEpisode");
					for (var i = 0; i < c.length; i++) {
    					c[i].style.display = "none";
					};
				var w = document.getElementsByClassName("TWheading");
					for (var i = 0; i < w.length; i++) {
    					w[i].style.display = "none";
					};
				var x = document.getElementsByClassName("tw");
					for (var i = 0; i < x.length; i++) {
    					x[i].style.display = "none";
					};			
			};
			
			
			
			var SJA = document.getElementById("SJABox").checked;     
			if (SJA === false) {     
				var d = document.getElementsByClassName("SJAEpisode");
					for (var i = 0; i < d.length; i++) {
    					d[i].style.display = "none";
					};
				var s = document.getElementsByClassName("SJAheading");
					for (var i = 0; i < s.length; i++) {
    					s[i].style.display = "none";
					};	
				var y = document.getElementsByClassName("AFheading");
					for (var i = 0; i < y.length; i++) {
    					y[i].style.display = "none";
					};
				var z = document.getElementsByClassName("AFEpisodes");
					for (var i = 0; i < z.length; i++) {
    					z[i].style.display = "none";
					};		
			};
			
			
			
			var m = document.getElementById("minisodeBox").checked;     
			if (m === false) {     
				var e = document.getElementsByClassName("minisode");
					for (var i = 0; i < e.length; i++) {
    					e[i].style.display = "none";
					};
			};
			
			
			
			var AF = document.getElementById("alienFileBox").checked;     
			if (AF === false) {     
				var f = document.getElementsByClassName("AFEpisode");
					for (var i = 0; i < f.length; i++) {
    					f[i].style.display = "none";
					};
				var z = document.getElementsByClassName("AFEpisodes");
					for (var i = 0; i < z.length; i++) {
    					z[i].style.display = "none";
					};	
				var bb = document.getElementsByClassName("AFheading");
					for (var i = 0; i < bb.length; i++) {
    					bb[i].style.display = "none";
					};	
			};
			
			
			
			var o = document.getElementById("otherBox").checked;     
			if (o === false) {     
				var g = document.getElementsByClassName("other");
					for (var i = 0; i < g.length; i++) {
    					g[i].style.display = "none";
					};
				var n = document.getElementsByClassName("otherTitle");
					for (var i = 0; i < n.length; i++) {
    					n[i].style.display = "none";
					};
				var cc = document.getElementsByClassName("otherHeading");
					for (var i = 0; i < cc.length; i++) {
    					cc[i].style.display = "none";
					};	
			};
			
			
			
			var me = document.getElementById("meBox").checked;     
			if (me === false) {     
				var h = document.getElementsByClassName("missing");
					for (var i = 0; i < h.length; i++) {
    					h[i].style.display = "none";
					};
			};
			
			
			
			var ie = document.getElementById("ieBox").checked;     
			if (ie === false) {     
				var j = document.getElementsByClassName("CWEpisode");
					for (var i = 0; i < j.length; i++) {
    					j[i].style.display = "none";
					};
				var q = document.getElementsByClassName("NWEpisode");
					for (var i = 0; i < q.length; i++) {
    					q[i].style.display = "none";
					};
				var t = document.getElementsByClassName("TWEpisode");
					for (var i = 0; i < t.length; i++) {
    					t[i].style.display = "none";
					};
				var u = document.getElementsByClassName("SJAEpisode");
					for (var i = 0; i < u.length; i++) {
    					u[i].style.display = "none";
					};	
				var v = document.getElementsByClassName("AFEpisode");
					for (var i = 0; i < v.length; i++) {
    					v[i].style.display = "none";
					};	
				var aa = document.getElementsByClassName("AFEpisodes");
					for (var i = 0; i < aa.length; i++) {
    					aa[i].style.display = "none";
					};	
			};
		};		
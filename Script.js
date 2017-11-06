var add = document.getElementsByClassName("add");
var lines = document.getElementsByClassName("line");
var cell = lines[0].getElementsByClassName("cell")[0];
var tableWidth = 272;
var addButLeft = 350;
add[0].onclick = function(){
	var addLine = lines[0].cloneNode(true);
	document.body.getElementsByTagName("div")[0].appendChild(addLine);
	
};
add[1].onclick = function() {
	for(var i = 0; i < lines.length; i++){
		lines[i].appendChild(cell.cloneNode(true));
	}
	tableWidth += 68;
	document.body.getElementsByTagName("div")[0].style.width = tableWidth + "px";
	addButLeft += 68;
	add[1].style.left = addButLeft + "px";
};

var del = document.getElementsByClassName("del"); 

del[0].onclick = function(){
	if(document.getElementsByClassName("line")[0].getElementsByClassName("cell").length !== 1){
		
		for(var i = 0; i < lines.length; i++){
		
		lines[i].removeChild(lines[i].getElementsByClassName("cell")[0]);
			
		}
	tableWidth -=68;
	document.body.getElementsByTagName("div")[0].style.width = tableWidth + "px";
	addButLeft -= 68;
	add[1].style.left = addButLeft + "px";
	}
}

del[1].onclick = function(){
	if(lines.length !== 1){
		document.body.getElementsByTagName("div")[0].removeChild(lines[lines.length-1]);
		}
} 

for(var i = 0; i < lines.length; i++){
 	lines[i].onmouseover = function(event){
		
		var br = event.currentTarget.getBoundingClientRect();
		document.getElementsByClassName("del")[1].style.top = br.top + "px";
		
		var cells = event.currentTarget.getElementsByClassName("cell")
		
		for(var i = 0; i < cells.length; i++){
	
			cells[i].onmouseover = function(event){
			
			var br=event.currentTarget.getBoundingClientRect();
			document.getElementsByClassName("del")[0].style.left = br.left + "px";

			};
		}
	};
}
	
	



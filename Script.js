var add = document.getElementsByClassName("add");

var cell;
var tableWidth = 272;
var addButLeft = 356;

add[0].onclick = function(){
	var lines = document.getElementsByClassName("line");
	
	var addLine = lines[0].cloneNode(true);
	document.body.getElementsByTagName("div")[0].appendChild(addLine);
	
};
add[1].onclick = function() {
	var lines = document.getElementsByClassName("line");
	cell = lines[0].getElementsByClassName("cell")[0]
	for(var i = 0; i < lines.length; i++){
		lines[i].appendChild(cell.cloneNode(true));
	}
	tableWidth += 68;
	document.body.getElementsByTagName("div")[0].style.width = tableWidth + "px";
	addButLeft += 68;
	add[1].style.left = addButLeft + "px";
};

var del = document.getElementsByClassName("del"); 





del[1].onclick = function(){
	var lines = document.getElementsByClassName("line");
	if (lines.length !== 1){
		for(var i = 0; i < lines.length; i++){
		
			if(lines[i].getBoundingClientRect().top+2 === del[1].getBoundingClientRect().top){
				lines[i].remove();
			}
		}
	}
	del[0].style.visibility = del[1].style.visibility = "hidden";
}



del[0].onclick = function(){
	var lines = document.getElementsByClassName("line");
	var cells = document.getElementsByClassName("cell");
	if (cells.length !== lines.length){
		for(var i = 0; i < cells.length; i++){
			
			if (cells[i].getBoundingClientRect().left === del[0].getBoundingClientRect().left){
				cells[i].remove();
			}	
		}
		tableWidth -= 68;
		document.body.getElementsByTagName("div")[0].style.width = tableWidth + "px";
		addButLeft -= 68;
		add[1].style.left = addButLeft + "px";
	}
	del[0].style.visibility = del[1].style.visibility = "hidden";
}	

// Глянь тут почему кнопки смещаются при прокрутке страницы
document.getElementsByTagName("div")[0].onmouseover  = function(){
	var cells = document.getElementsByClassName("cell");
	for(var i = 0; i < cells.length; i++){
		
			cells[i].onmouseover = function(event){
			var cells = document.getElementsByClassName("cell");
			var lines = document.getElementsByClassName("line");
			if (lines.length !== 1){del[1].style.visibility = "visible";}
			if (cells.length !== lines.length){del[0].style.visibility = "visible";}
			del[1].style.top = event.currentTarget.getBoundingClientRect().top + "px";
			del[0].style.left = event.currentTarget.getBoundingClientRect().left + "px";
			
		}
	}
}

	
	
	
	
	
	
	
	
	
	
/*


*/

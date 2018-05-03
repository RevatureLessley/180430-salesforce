function retrieve(){
	var pkid=document.getElementById("pkminID").value;
	var xhr=new XMLHttpRequest();//STATE 0
	console.log("XHR STATE: "+xhr.readyState);
	var url="https://pokeapi.co/api/v2/pokemon/"+pkid+"/";
	xhr.open("GET",url); //STATE 1
	
	xhr.onreadystatechange=function(){
		console.log("XHR STATE: "+xhr.readyState);
		if(xhr.readyState==4 && xhr.status==200){
			var response=JSON.parse(xhr.response);
			let pkid=document.createTextNode(response.id);
			let pkname=document.createTextNode(response.name);
			let pksprite=document.createTextNode(response.sprites.front_default);
			let td1=document.createElement('td');
			let td2=document.createElement('td');
			let td3=document.createElement('td');
			let img=document.createElement('img');
			img.setAttribute("border","2px");
			img.setAttribute("src",pksprite);
			
			let tr=document.createElement('tr');
			let table=document.createElement('table');
			table.setAttribute("border","2px");
			
			td1.appendChild(pkid);
			td2.appendChild(pkname);
			td3.appendChild(img);
			tr.appendChild(td1);
			tr.appendChild(td2);
			table.appendChild(tr);
			console.log(pksprite);
			document.getElementById("pkminDiv").append(table);
		}else if(xhr.readyState==4){
			console.log("ERROR");
		}
	}
	xhr.send(); //STATE 2
}
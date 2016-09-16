var texto = '{ "employees" : [' +
			'{ "login":"Pablo" , "senha":"123" , "nome_facul":"ABC" , "disciplina":"D1" , "nota":"10"},' +
			'{ "login":"Rezende" , "senha":"456" , "nome_facul":"DEF" , "disciplina":"D1" , "nota":"7" },' +
			'{ "login":"Rezende" , "senha":"456" , "nome_facul":"DEF" , "disciplina":"D2" , "nota":"8" },' +
			'{ "login":"Mayer" , "senha":"789" , "nome_facul":"GHI" , "disciplina":"D1" , "nota":"9"} ]}';
			
var obj = JSON.parse(texto);

function loadDoc(){
	var login = document.getElementById("id_login").value;
	var senha = document.getElementById("id_senha").value;
	
	if(login == "" && senha == "")
		document.getElementById("mensagem").innerHTML = "Login ou senha invalidos. Tente novamente.";
	else{
		document.getElementById("mensagem").innerHTML = "";
		verificaDados(login, senha); 
	}
}

function verificaDados(lg, sn){
	var table = "<tr><th>DISCIPLINA</th><th>NOTA</th></tr>";
	var nome_ins = "Nao ha notas.";
	for(var i = 0; i<obj.employees.length; i++){
		if((obj.employees[i].login == lg) && (obj.employees[i].senha == sn)){
			nome_ins = obj.employees[i].nome_facul;
			table += "<tr><td>" + obj.employees[i].disciplina + "</td><td>" + obj.employees[i].nota + "</td></tr>";
		}
	}
	document.getElementById("tabelaDados").innerHTML = table;
	document.getElementById("mensagem").innerHTML = nome_ins;
}
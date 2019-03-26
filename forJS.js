
function app(){
	var div = document.getElementById('app');
	var message = 'Привет, Vue!';
	var elem = document.createElement("p");
	var elemText = document.createTextNode(message);
	elem.appendChild(elemText);
	div.appendChild(elem);
}

function app2(){
	var div = document.getElementById('app-2').childNodes[1];
	div.setAttribute('title', 'Вы загрузили эту страницу: ' + new Date().toLocaleString());

}

function app3(){
	var seen = true;
	if (seen == false){
		document.getElementById("app-3").childNodes[1].style.display = 'none';
	}
}

function app4(){
	var div = document.getElementById('app-4').childNodes[1];
	var todos = [
	  { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue' },
      { text: 'Создать что-нибудь классное' }
    ];
    for (let i = 0; i < todos.length; i++){
    	let elem = document.createElement('li');
    	let elemText = document.createTextNode(todos[i].text);
    	elem.appendChild(elemText);
    	div.appendChild(elem);
    }
}
function app5(){
	var message = 'Привет, Vue.js!';
	var div = document.getElementById('app-5');
	var par = document.createElement('p');
	var text = document.createTextNode(message);
	par.appendChild(text);
	div.insertBefore(par, div.firstChild);
	function change(){
		message = message.split('').reverse().join('');
		par.textContent = message;
	}
	document.getElementById('btn').addEventListener("click", change);
}
function app6(){
	var message = 'Привет, Vue!';
	var div = document.getElementById('app-6');
	var par = document.createElement('p');
	var text = document.createTextNode(message);
	par.appendChild(text);
	div.appendChild(par);
	function change(){
		par.textContent = input.value;
	}
	var inputText = document.getElementById('input');
	inputText.addEventListener("change", change);
}
app();
app2();
app3();
app4();
app5();
app6();





















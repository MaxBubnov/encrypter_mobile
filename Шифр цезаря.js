var outtext = document.querySelector("#outtext");
var intext = document.querySelector("#intext");
var key = document.querySelector("#key");
var encrypt = document.querySelector("#encrypt");
var unencrypt = document.querySelector("#unencrypt");
encrypt.onclick = function(){
	intext = intext.value;
	console.log(intext);
	key = key.value;
	key = parseInt(key);
	for (var i = 0; intext.length > i; i++) {
		outtext.innerText += String.fromCharCode(intext.charCodeAt(i) + key);
	}
}
unencrypt.onclick = function(){
	intext = intext.value;
	key = key.value;
	key = parseInt(key);
	for (var i = 0; intext.length > i; i++) {
		outtext.innerText += String.fromCharCode(intext.charCodeAt(i) - key);
	}
}
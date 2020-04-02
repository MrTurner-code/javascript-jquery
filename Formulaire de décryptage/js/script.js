var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
document.getElementById("mdpAcrypter").value = "";
document.getElementById("mdpCrypt").value = "" ;
function cryptage(mdp) {
	var password = document.getElementById("mdpAcrypter").value;
	document.getElementById("mdpAcrypter").value = "";
    var result = '';
    for (var i=0; i<password.length; i++) {
        result += alphabet.indexOf(password.substring(i, i+1)) + 1;
    
}document.getElementById("mdpCrypt").style.backgroundColor = "black";
document.getElementById("mdpCrypt").style.color = "white";
	document.getElementById("mdpCrypt").value = result;
	
	






}
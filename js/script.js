/* Author: DavidMitchel.com

*/

sjcl.random.startCollectors();

$('#secret').submit(function() {
	var secretKey = sjcl.random.randomWords(1);
	var secretObj = jQuery.parseJSON(sjcl.encrypt(secretKey, document.secret.message.value));
	alert(secretObj.ct);
	return false;
});

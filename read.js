$(document).ready(function() {
    $('#nav').load('nav.html', null, function(responseText, textStatus, xhr) {
        alert(textStatus);
    });
});
$(function(){
    $('#gen').click(function(){
        console.log($('#urlText').val());
        
        
        var longUrl = $('#urlText').val();
		$.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ "longUrl": longUrl }),
            url: "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBefmtDT1cu2ypVQv-2mkF3Ux2icREUu5E",
            success: function(data) {
                //do something with the shortened url json data
//                var returnToken = data.id.replace('http://goo.gl/', '');
//                if(returnToken === userToken) {
//                	window.location = 'http://frozenluo.github.io/pages/success.html';
//                }else {
//                	console.log('expected token:' + returnToken + '; instead get:' + userToken);
//                }
                $('#keyText').val(data.id);
            },
            error: function() {
                alert('please try again.');
            }
        });
    });
});
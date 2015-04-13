$(function () {
    $('#keySubmit').click(function () {
        var shortUrl = 'http://goo.gl/' + $('#keyText').val();
        $.ajax({
            type: "GET",
            url: "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBefmtDT1cu2ypVQv-2mkF3Ux2icREUu5E&shortUrl=" + shortUrl,
            success: function (data) {
                var url = data.longUrl;
                if (url.indexOf('http://www.ariesphotography.com.au/') === 0) {
                    window.location.href = data.longUrl;
                } else {
                    $('#errorHint').show();
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#errorHint').show();
            }
        });
    });
});

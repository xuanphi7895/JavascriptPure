// https://smartlearning.vn/account/login/submit

$(document).ready(function() {
    $("form").submit(function(event) {
        var formData = {
            username: $("#username").val(),
            password: $("#password").val(),
        };

        $.ajax({
            type: "POST",
            url: "https://smartlearning.vn/account/login/submit",
            data: JSON.stringify(formData),
            dataType: "json",
            encode: true,
            contentType: "application/json; charset=utf-8",
        }).done(function(data) {
            if (data.statusCode === 200) {
                alert("Login thành công!");
            } else {
                alert("Login không thành công!");
            }
        });

        event.preventDefault();
    });
});
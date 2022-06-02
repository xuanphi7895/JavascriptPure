// https://smartlearning.vn/account/login/submit

$(document).ready(function() {
    $('#tab-login').on('click', function() {
        $('#form-login').css("display", "block");
        $('#form-signup').css("display", "none");
    });
    $('#tab-signup').on('click', function() {
        $('#form-signup').css("display", "block");
        $('#form-login').css("display", "none");
    });

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
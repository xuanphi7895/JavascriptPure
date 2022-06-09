// https://smartlearning.vn/account/login/submit

$(document).ready(function() {
    $('#login').on('click', function() {
        $(".nav-pills .nav-link").removeClass("active");
        $(this).addClass("active");
        $('#form-login').css("display", "block");
        $('#form-signup').css("display", "none");

        $('#form-login').addClass("tab-active");
        // $('#form-signup').removeClass("tab-active");
    });
    $('#signup').on('click', function() {
        $(".nav-pills .nav-link").removeClass("active");
        $(this).addClass("active");
        $('#form-login').removeClass("tab-active");
        // $('#form-signup').addClass("tab-active");
        $('#form-signup').css("display", "block");
        $('#form-login').css({ "display": "none" });
    });

    $("#form-login").submit(function(event) {
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
                alert("Login sucess!");
            } else {
                alert("Login not success!");
            }
        });

        event.preventDefault();
    });
    $("#form-signup").submit(function(event) {
        var formData = {
            username: $("#username1").val(),
            password: $("#password1").val(),
            email: $("#email").val(),
            firstName: "TRAN",
            lastName: "Phi",
            confirmPassword: $("#password1").val(),
            mobile: "12345678",
            address: "Hue",
            birthDate: "2022-06-07",
            gender: 1
        };
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "https://smartlearning.vn/register/submit",
            data: JSON.stringify(formData),
            dataType: "json",
            encode: true,
            contentType: "application/json; charset=utf-8",
        }).done(function(data) {
            if (data.statusCode === 200) {
                alert("Sign up success!");
            } else {
                alert("Sign up not success!");
            }
        });

        event.preventDefault();
    });
});
$(function() {
    $(".btn").click(function() {
        $(".form-signin").toggleClass("form-signin-left");
        $(".form-signup").toggleClass("form-signup-left");
        $(".frame").toggleClass("frame-long");
        $(".signup-inactive").toggleClass("signup-active");
        $(".signin-active").toggleClass("signin-inactive");
        // $(".forgot").toggleClass("forgot-left");
        // $(this).removeClass("idle").addClass("active");
    });

    //Login
    $(".btn-signin").click(function() {
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
                // window.location.href = "https://smartlearning.vn/";
                //window.location.replace('https://smartlearning.vn/account/change-password');
            } else {
                alert("Login not success!");
            }
        });
        event.preventDefault();
    });

    //Sign Up
    $(".btn-signup").click(function() {
        var formData = {
            firstName: "Tran Xuan",
            lastName: "Phi",
            username: $("#username").val(),
            password: $("#password").val(),
            confirm: $("#confirmpassword").val(),
            mobile: "0379731767",
            email: $("#email").val(),
            address: "TT Hue",
            birthDate: "2022-06-09",
            gender: 1,
        };

        $.ajax({
            type: "POST",
            url: "https://smartlearning.vn/register/submit",
            data: JSON.stringify(formData),
            dataType: "json",
            encode: true,
            contentType: "application/json; charset=utf-8",
        }).done(function(data) {
            if (data.statusCode === 200) {
                alert("Sign Up sucess!");
            } else {
                alert("Sign Up not success!");
            }
        });
        event.preventDefault();
    });

});
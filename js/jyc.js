document.querySelector('.tableBtn').addEventListener('click', function (event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    // 获取用户输入的账号和密码
    var username = document.getElementById('userName').value;
    var password = document.querySelector('input[name="password"]').value;

    // 获取存储的用户数据
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // 验证用户信息
    var userFound = users.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (userFound) {
        alert('登录成功！');

        // 更新登录按钮文本和链接
        $("#login").text(userFound.nickname);
        $("#login").attr("href", "../views/Personal_central.html");
        $("#register").attr("href", "../views/xiaoxi.html");

        // 登录成功后跳转到主页或其他页面
        window.location.href = '../index.html';
    } else {
        alert('账号或密码错误，请重新输入');
    }
});

$(document).ready(function () {
    $("#topbar-cart").hover(function () {
        $("#load").slideToggle("fast");
    });

    var xx = $.getUrlParam('id');
    console.log(xx);

    if (xx != null) {
        flag = 1;
        $("#login").text("admin");
        $("#register").text("消息通知");
        $("#dd").text("我的订单");
        $("#login").attr("href", "../views/Personal_central.html");
        $("#register").attr("href", "../views/xiaoxi.html");
    }
});

function navallOver() {
    document.getElementById("navbar").style.display = "block";
}

function navallOut() {
    document.getElementById("navbar").style.display = "none";
}

(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
})(jQuery);

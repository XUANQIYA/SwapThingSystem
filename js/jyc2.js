// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function () {
    // 获取登录按钮
    const loginBtn = document.getElementById('loginBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', function (event) {
            event.preventDefault();

            // 获取用户输入
            var username = document.getElementById('userName').value;
            var password = document.querySelector('input[name="password"]').value;

            if (!username || !password) {
                alert('请输入用户名和密码！');
                return;
            }

            // 从localStorage获取用户数据
            var users = JSON.parse(localStorage.getItem('users')) || [];

            // 查找用户
            var user = users.find(function (user) {
                return user.username === username && user.password === password;
            });

            if (user) {
                // 登录成功
                alert('登录成功！');
                // 存储登录状态和用户信息
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('isLoggedIn', 'true');
                // 跳转到首页
                window.location.href = '../index.html';
            } else {
                // 登录失败
                alert('用户名或密码错误！');
            }
        });
    }
});

// index.html 页面加载完成后执行的代码
$(document).ready(function () {
    // 检查登录状态
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    var currentUser = localStorage.getItem('currentUser');

    if (isLoggedIn === 'true' && currentUser) {
        currentUser = JSON.parse(currentUser);
        // 更新顶部栏
        $("#login").text(currentUser.nickname);
        $(".login-link").text(currentUser.nickname);
        $("#register").text("消息通知");
        $("#dd").text("个人中心");
        $("#login").attr("href", "Personal_central.html");
        $("#register").attr("href", "xiaoxi.html");
    }
});

// 退出登录函数
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}
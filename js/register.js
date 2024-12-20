document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // 阻止表单默认提交行为 
    //获取用户输入的值 
    var nickname = document.getElementById('nickname').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    // 检查密码是否匹配 
    if (password !== confirmPassword) {
        alert('密码不匹配，请重新输入');
        return;
    }
    // 获取现有用户数据 
    var users = JSON.parse(localStorage.getItem('users')) || [];
    // 添加新用户 
    users.push({ nickname: nickname, username: username, password: password });
    // 存储更新后的用户数据 
    localStorage.setItem('users', JSON.stringify(users));
    // 提示注册成功并跳转到登录页面 
    alert('注册成功！');
    window.location.href = '../views/Account.html';
});
// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var image = document.querySelector('.image-container img');

    image.addEventListener('click', function() {
        var currentSrc = image.src;
        var newSrc = (currentSrc.includes('1.jpg')) ? '2.jpg' : '1.jpg';
        image.src = newSrc;
    });
});
function login() {
    // 弹出对话框要求用户输入名字
    var name = prompt("请输入你的名字：");
  
    // 检查用户是否输入了名字
    if (name !== null && name.trim() !== '') {
      // 显示欢迎信息
      var welcomeText = '你好，' + name + '！';
      document.getElementById('welcomeMessage').innerText = welcomeText;
    } else {
      // 如果用户没有输入名字或点击了取消，可以在这里处理
      alert('登录失败，请输入名字！');
    }
  }
  
  


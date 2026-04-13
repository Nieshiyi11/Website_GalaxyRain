//表单验证
let submitBtn=document.querySelector('#submit-btn');
submitBtn.addEventListener('click',function(){
    let username=document.querySelector('#username').value;
    let password=document.querySelector('#password').value;
    if(username==''){
        alert('用户名称不能为空！');
    }else if(password==''){
        alert('请输入密码');
    }else{
        alert('发送成功！银河已成功接收您的信号！');
    }
});

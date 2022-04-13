$(function(){
    getUserInfo()
     
    var  layer=layui.layer
    $('#btntc').on('click',function(){
        layer.confirm('确定退出吗?', {icon: 3, title:'提示'}, function(index){
            localStorage.removeItem('token');
            location.href='/04-四阶段：前后端交互阶段资料新/项目一大事件/login.html';
            
            layer.close(index);
          });
    })
})

function getUserInfo(){
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        // headers:{Authorization:localStorage.getItem('token')} || '',
        success:function(res){
            if(res.status !== 0){
                return layer.msg(res.message);
            }
            readerAvatar(res.data)
        }
       
    })
}
function readerAvatar(user){
        var name1=user.nikename || user.username
        $('#welcome').html('欢迎&nbsp;&nbsp'+name1)
        if(user.user_pic !==null){
            $('.layui-nav-img').attr('src',user.user_pic).show();
            $('.text-avatar').hide()
        }else{
            
            var first=name1[0].toUpperCase();
            $('.text-avatar').html(first).show();
            $('.layui-nav-img').hide();

        }
}
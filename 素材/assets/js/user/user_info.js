$(function(){
    var form=layui.form
    var layer=layui.layer
    form.verify({
        nickname:function(value){
            if(value.length>6){
                return '必须在1-6个字节'
            }
        }
    })

    initUserInfo()

    function initUserInfo(){
        $.ajax({
            method:'GET',
            url:'/my/userinfo',
            success:function(res){
                console.log(res);
                if(res.status!==0){
                    return layer.mag('获取用户信息失败')
                }
                form.val('formUserInfo',res.data)
            }
        })
    }

    $('#btncz').on('click',function(e){
        e.preventDefault();
        initUserInfo();
    })

    $('.layui-form').on('submit',function(e){
         e.preventDefault();
         $.ajax({
             method:'POST',
             url:'/my/userinfo',
             data:$(this).serialize(),
             success:function(res){
                 if(res.status !==0){
                     return layer.msg('更新失败')
                 }
                 layer.msg('更新成功')
                 window.parent.getUserInfo()
             }
         })
    })



})
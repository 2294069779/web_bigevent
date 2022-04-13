$(function(){
    var form=layui.form
    var layer=layui.layer
    form.verify({
        pass: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ] ,
          samPwd:function(value){
              if(value === $('[name=oldPwd]').val()){
                  return '不能和原密码相同'
              }
          },
          rePwd:function(value){
            if(value !== $('[name=newPwd]').val()){
                return '两次输入密码不一致'
            }
        }
        
    })

   

    $('.layui-form').on('submit',function(e){
         e.preventDefault();
         $.ajax({
             method:'POST',
             url:'/my/updatepwd',
             data:$(this).serialize(),
             success:function(res){
                 if(res.status !==0){
                     return layer.msg('更新失败')
                 }
                 layer.msg('更新成功')
                 $('.layui-form')[0].reset()
             }
         })
    })



})
$(function(){

    $('#link_login').on('click',function(){
        $('.dr').show()
        $('.zc').hide();
       
    }) 
   $('#link_reg').on('click',function(){
   
    $('.dr').hide()
    $('.zc').show();
   }) 
   
   var form=layui.form;
   var layer=layui.layer;
   form.verify({
    pass: [
        /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
      ] ,

    rews: function(value){
       var di= $('.zc [name=password]').val()
       if(di !==value){
           di==''
           
           return '密码不一致'
       }
    }
   })
   $("#form_login").on('submit',function(e){
       e.preventDefault()
      $.ajax({
            type:'POST',
            url:'/api/reguser',
            data:{
                username:$("#form_login [name=username]").val(),
                password:$("#form_login [name=password]").val()

            },
            success:function(res){
                if(res.status !==0){
                   return layer.msg(res.message);
                }
                layer.msg(res.message);
                $('#link_login').click()
            }
      })
   })

   $("#formdr").submit(function(e){
    e.preventDefault()
   $.ajax({
        url:'/api/login',
         method:'POST',
         data: $(this).serialize() ,
         success:function(res){
             if(res.status !==0){
                return layer.msg(res.message);
             }
            
             layer.msg(res.message)
            
             location.href='/04-四阶段：前后端交互阶段资料新/项目一大事件/index.html'
            //  $(location).attr('href', 'file:///D:/%E9%BB%91%E9%A9%ACv7/%E9%BB%91%E9%A9%AC%E6%9C%80%E6%96%B0%E5%89%8D%E7%AB%AF%E5%9C%A8%E7%BA%BF%E5%B0%B1%E4%B8%9A%E7%8F%AD%E9%85%8D%E5%A5%97%E8%AF%BE%E4%BB%B6%E5%92%8C%E8%B5%84%E6%96%99%20%E8%BD%AF%E4%BB%B6/%E9%BB%91%E9%A9%AC%E6%9C%80%E6%96%B0%E5%89%8D%E7%AB%AF%E5%9C%A8%E7%BA%BF%E5%B0%B1%E4%B8%9A%E7%8F%AD%E9%85%8D%E5%A5%97%E8%AF%BE%E4%BB%B6%E5%92%8C%E8%B5%84%E6%96%99%20%E8%BD%AF%E4%BB%B6%E3%80%90%E6%B5%B7%E9%87%8F%E8%B5%84%E6%BA%90%E5%B0%BD%E5%9C%A8%20666java.com%E3%80%91/04-%E5%9B%9B%E9%98%B6%E6%AE%B5%EF%BC%9A%E5%89%8D%E5%90%8E%E7%AB%AF%E4%BA%A4%E4%BA%92%E9%98%B6%E6%AE%B5%E8%B5%84%E6%96%99%E6%96%B0/%E9%A1%B9%E7%9B%AE%E4%B8%80%E5%A4%A7%E4%BA%8B%E4%BB%B6/index.html');
     
            
             
             localStorage.setItem('token',res.token)  
             
             console.log(res);
             
         }
   })
})






})
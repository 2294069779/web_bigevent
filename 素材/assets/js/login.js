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

   $("#formdr").on('submit',function(e){
    e.preventDefault()
   $.ajax({
         type:'POST',
         url:'/api/login',
         data: $(this).serialize()
         ,
         success:function(res){
             if(res.status !==0){
                return layer.msg(res.message);
             }
             console.log(res);
             layer.msg(res.message);
             localStorage.setItem('token',res.token)  
            //  location.href='/index.html'
             console.log(res);
             
         }
   })
})






})
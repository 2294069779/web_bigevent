$.ajaxPrefilter(function(options){
    
    options.url='http://www.liulongbin.top:3007'+options.url
    
    if(options.url.indexOf('/my') !== -1){
        options.headers={
            Authorization:localStorage.getItem('token') || ''
    }
    }

    options.complete=function(res){
       
        if(res.responseJSON.status===1 && res.responseJSON.message==='身份认证失败！'){
            localStorage.removeItem('token')
            location.href='/04-四阶段：前后端交互阶段资料新/项目一大事件/login.html';
        }
    }
   
})
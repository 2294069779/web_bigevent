$(function(){
    initAtrCate();

    var layer=layui.layer
    var form=layui.form
    function initAtrCate(){
        $.ajax({
            method:"GET",
            url:'/my/article/cates',
            success:function(res){
                if(res.status !==0){
                    return alert('获取失败')
                }
              var htmlStr= template('tal-table',res)
              $('tbody').html(htmlStr)
            }
        })
    }
    var index1=null;
    $('#btnAddCate').on('click',function(){
        index1=layer.open({
            type:1,
            title: '添加文章类别',
            area:['500px','250px']

            ,content: $('#tcc').html()
          });  

    })


    $('body').on('submit','#form-add',function(e){
        e.preventDefault()
        $.ajax({
            method:'POST',
            url:'/my/article/addcates',
            data:$(this).serialize(),
            success:function(res){
                if(res.status !==0){
                    return layer.msg('新增分类失败')
                }
                initAtrCate()
                layer.msg('新增分类成功')
                layer.close(index1)
            }
        })
    })

        var index2=null
    $('tbody').on('click','.btn-edit', function(e){

        index2=layer.open({
            type:1,
            title: '修改文章类别',
            area:['500px','250px']

            ,content: $('#tcc1').html()
          });  
      
          var id=$(this).attr('data-id')
          console.log(id);
        $.ajax({
            method:'GET',
            url:'/my/article/cates/'+id,
            success:function(res){
               form.val('form-edit',res.data)

            }
        })
    })
    
    // 修改
    $('body').on('submit','#form-edit',function(e){
        e.preventDefault()
        $.ajax({
            method:'POST',
            url:'/my/article/updatecate',
            data:$(this).serialize(),
            success:function(res){
                if(res.status !==0){
                    return layer.msg('更新分类失败')
                }
                
                layer.msg('更新分类成功')
                layer.close(index2)
                initAtrCate()
            }
        })
    })
    //删除
    $('tbody').on('click','.btn-delete', function(e){
        var id=$(this).attr('data-id')
        layer.confirm('是否确定删除', {icon: 3, title:'提示'}, function(index){

            $.ajax({
                method:'GET',
                url:'/my/article/deletecate/'+id,
                success:function(res){
                    if(res.status !==0){
                        return layer.msg('删除分类失败')
                    }
                    initAtrCate()
                    layer.msg('删除分类成功')
                    layer.close(index)
                }
            })
            
            
            layer.close(index);
          });
         
    })



})
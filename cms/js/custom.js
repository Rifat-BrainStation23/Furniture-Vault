

//edit function
function EditTextField(textfield_id,editbuttonid,tablename,text_coulmn_name,change_value,primary_column,primary_id,edittype){
       // debugger
        if(textfield_id!=''){
        $("#"+textfield_id).removeAttr('disabled');
        $("#"+textfield_id).removeAttr('readonly');
    }
        if(editbuttonid!=''){
        if(edittype!=''){
            $("#"+editbuttonid).attr('class','fa fa-check');
        }else{
           $("#"+editbuttonid).text('Save');
        }
    }
        $("#"+editbuttonid).attr('onclick','saveTextFieldValue(\''+textfield_id+'\',\''+editbuttonid+'\',\''+tablename+'\',\''+text_coulmn_name+'\',\''+change_value+'\',\''+primary_column+'\',\''+primary_id+'\',\''+edittype+'\')');
  
}
//save function
function saveTextFieldValue(textfield_id,editbuttonid,tablename,text_coulmn_name,change_value,primary_column,primary_id,edittype){
    
    
    if(textfield_id!=''){
        $("#"+textfield_id).attr('disabled','disabled');
        $("#"+textfield_id).attr('readonly','true');
    }
    if(editbuttonid!=''){
    
    if(edittype!=''){
            $("#"+editbuttonid).attr('class','fa  fa-pencil-square-o');
    }else{
            $("#"+editbuttonid).text('Edit');
    }
     var textfielddata=$("#"+textfield_id).val();

    if (textfield_id == 'Modeldetailstext') {
      textfielddata = tinymce.get('Modeldetailstext').getContent();
    }

    $("#"+editbuttonid).attr('onclick','EditTextField(\''+textfield_id+'\',\''+editbuttonid+'\',\''+tablename+'\',\''+text_coulmn_name+'\',\''+change_value+'\',\''+primary_column+'\',\''+primary_id+'\',\''+edittype+'\')');    
   }
    if(change_value!=''){
        textfielddata=change_value;
    }
    $.ajax({
       url:"process/common.php",
       method:"post",
       data:{
           textfielddata:textfielddata,
           tablename:tablename,
           text_coulmn_name:text_coulmn_name,
           change_value:change_value,
           primary_id:primary_id,
           primary_coulmn_name:primary_column
       },
       success:function(data){
          
           if(data=='Success'){
               successmsg('');
           }else{
                console.log(data);
           }
       }
        
    });
}
//save category policy to db
function savegrouppolicy(fieldvalue,categoryid,usegroupid){
     $.ajax({
       url:"process/ajaxcalls.php",
       method:"post",
       data:{
           model:'category',
           function:'updategrouppolicy',
           fieldvalue:fieldvalue,
           categoryid:categoryid,
           usergorupid:usegroupid
       },
       success:function(data){
          
           if(data=='Success'){
               successmsg('');
           }else{
                console.log(data);
           }
       }
        
    });
}

function onchangeloaddropdown(currentid,where_column_id,selected_id,column_id,column_name,table_name,dropdownid){
    $.ajax({
       url:"process/ajaxcalls.php",
       method:"post",
       data:{
           model:'datamodel',
           function:'getdropddown',
           currentid:currentid,
           where_column_id:where_column_id,
           column_id:column_id,
           column_name:column_name,
           table_name:table_name,
           selected_id:selected_id
       },
       success:function(data){
          
           if(data){
              $("#"+dropdownid).html(data);
           }
       }
        
    });
}

function deletedata(primary_id,primary_column,tablename,fieldid,isadminpassrequired){
    
     //if we need admin authorization 
    if(isadminpassrequired=='true'){
  
    }
    
    //normal yes no to confirm
    swal({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.value) {
    

    
    $.ajax({
       url:"process/ajaxcalls.php",
       method:"post",
       data:{
           model:'common',
           function:'deletedata',
           tablename:tablename,
           primary_id:primary_id,
           primary_coulmn_name:primary_column
       },
       success:function(data){
           if(data){
             $("#"+fieldid).hide();
             successmsg('data successfully deleted');
           }
        }
     });
   }
 })
}

function successmsg(msg){
     var notyf = new Notyf({
        delay:1000,
        showDuration: 150,
        elementPosition: 'bottom right',
        clickToHide: true
    });
      if(msg==''){
        msg='Data successfully chnaged';
    }
    notyf.confirm(msg);
    
}
function errormsg(msg){
     var notyf = new Notyf({
        delay:1000,
        showDuration: 150,
        elementPosition: 'bottom right',
        clickToHide: true
    });
    if(msg==''){
        msg='Something went wrong';
    }
    notyf.alert(msg);
}

function approveuser(userid,status,type,modeluserid){
    if(status==1){
        msg="Approve";
    }else{
        msg="Disapprove";
    }
    swal({
  title: 'Are you sure?',
  text: "You want to "+msg+" this "+type+"!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, '+msg+' it!'
}).then((result) => {
  if (result.value) {
    

    
    $.ajax({
       url:"process/ajaxcalls.php",
       method:"post",
       data:{
           model:'common',
           function:'approveuser',
           status:status,
           userid:userid,
           type:type,
       },
       success:function(data){
           if(data){
               if(type=='model'){
                    result=sendusersuccessemail(modeluserid,userid,status);
               }else{
                    result=sendusersuccessemail(userid,modeluserid,status);
                }
            $("#rowid"+userid).hide();
             successmsg(type+' successfully '+msg);
           }
        }
     });
   }
 })
}
function sendusersuccessemail(userid,modelid,status){
   var data='';
    $.ajax({
                url:"process/senduseremail.php",
                method:"post",
                data:{
                    modelid:modelid,
                    userid:userid,
                    status:status,
                },
                success:function(data){
                    console.log(data);
                    if(data.trim()=='true'){
                        successmsg('Email sent successfully');
                    }else{
                       errormsg('Email Has not been sent'); 
                    }
                 }
              });
              return data;
}
function gettagssuggetion(currentid,fieldid){
    
  var  tag=$("#"+currentid).val();
    var pieces = tag.split(/[\s,]+/);
    tag=(pieces[pieces.length-1]); 
    $.ajax({
       url:"process/ajaxcalls.php",
       method:"post",
       data:{
           model:'common',
           function:'gettagssuggetion',
           tag:tag,
           fieldid:currentid,
          
       },
       success:function(data){
           if(data){
            $("#"+fieldid).show();
            }
           $("#"+fieldid).html(data);
        }
     })

}
function gettitlesuggetion(currentid,fieldid){
    
  var  tag=$("#"+currentid).val();
    var pieces = tag.split(/[\s,]+/);
    tag=(pieces[pieces.length-1]); 
    $.ajax({
       url:"process/ajaxcalls.php",
       method:"post",
       data:{
           model:'common',
           function:'gettitlesuggetion',
           tag:tag,
           fieldid:currentid,
          
       },
       success:function(data){
           if(data){
            $("#"+fieldid).show();
            }
           $("#"+fieldid).html(data);
        }
     })

}

function pagination(start){
    $("#pageno").val(start);
    $("#paginationform").submit()
}

function assigtagname(fieldid,name){
    var s=$("#"+fieldid).val();
    var lastIndex = s.lastIndexOf(",")
    $("#"+fieldid).val(s.substring(0, lastIndex+1) + name);
     $("#loadmoretag").hide();
     $("#"+fieldid).focus();
}
$(window).click(function(e) {
   // gives the elements class(es)
    $("#loadmoretag").hide();
    $(".subtask-pick").hide();
});
function expanddescription(filedid,primayid){
   $("#Modeldetailstext").val($("#"+filedid).val());
  tinymce.get('Modeldetailstext').setContent($("#"+filedid).val());
   $("#descriptionsave").val(primayid);
   $("#expand_fieldid").val(filedid);
    $("#myModal").modal({
         
        });
}
function assignexpandvalue(){
    
  var filedid=$("#expand_fieldid").val();
  // $("#"+filedid).val($("#Modeldetailstext").val());
  $("#"+filedid).val(tinymce.get('Modeldetailstext').getContent());
}

/********** Start Function Created by Jaydeep Shah ****************/

//function for check All data
function checkAll(){
    if($('#checkAll').is(':checked'))
    {       
      $('input:checkbox[id^="select_model_"]').each(function(){
        var temp_id = $(this).attr('id');

        $('#'+temp_id).prop('checked', true);
      });
    } else {      
      $('input:checkbox[id^="select_model_"]').each(function(){
        var temp_id = $(this).attr('id');

        $('#'+temp_id).prop('checked', false);
      });
    }
}

function isLabelChecked(model_id) 
{
  var singlePageIds = [];

  var ischecked = $('#select_model_'+model_id).is(':checked');

  if(ischecked){
      var temp_count = 0;
      var result_count = 0;
      $('input:checkbox[id^="select_model_"]').each(function(){
        var temp_id = $(this).attr('id');

        if($('#'+temp_id).is(':checked')){
          temp_count++;
        }
        result_count++;
      });

      if(temp_count==result_count){
        $('#checkAll').prop('checked', true);
      } else {
        $('#checkAll').prop('checked', false);
      }

  } else {
    $('#checkAll').prop('checked', false);
  }
}


function bulkApproveUser(status,type)
{
  var singlePageIds = [];
  var modeluserids = [];

  $('input:checkbox[id^="select_model_"]').each(function(){
      var temp_id = $(this).attr('id');

      if($('#'+temp_id).is(':checked')){
        singlePageIds.push($(this).val());
        modeluserids.push($(this).attr('user_id'));
      }
  });

  if(singlePageIds.length > 0)
  {
    if(status==1){
        msg="Approve";
    }else{
        msg="Disapprove";
    }
    swal({
      title: 'Are you sure?',
      text: "You want to "+msg+" this "+type+"!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, '+msg+' it!'
    }).then((result) => {
      if (result.value) {      
        $.ajax({
          url:"process/ajaxcalls.php",
          method:"post",
          data:{
             model:'common',
             function:'approveuser',
             status:status,
             userid:'',
             userids : singlePageIds,
             type:type,
          },
          success:function(data){
              if(data){
                 if(type=='model'){
                    for (i = 0; i < singlePageIds.length; ++i) {
                      // result=sendusersuccessemail(modeluserids[i],singlePageIds[i],status);
                      $("#rowid"+singlePageIds[i]).hide();
                    }
                 }
                 // else{
                 //      result=sendusersuccessemail(userid,modeluserid,status);
                 //  }
                
                successmsg(type+' successfully '+msg);
              }
            }
        });
      }
    })
  }
}


function bulkDeletedata(primary_column,tablename,isadminpassrequired){
    
    //if we need admin authorization 
    if(isadminpassrequired=='true'){
  
    }    
    var singlePageIds = [];

    $('input:checkbox[id^="select_model_"]').each(function(){
        var temp_id = $(this).attr('id');

        if($('#'+temp_id).is(':checked')){
          singlePageIds.push($(this).val());
        }
    });

    if(singlePageIds.length > 0)
    {
      //normal yes no to confirm
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) 
        {
          $.ajax({
            url:"process/ajaxcalls.php",
            method:"post",
            data:{
               model:'common',
               function:'deletedata',
               tablename:tablename,
               primary_id:'',
               primary_ids:singlePageIds,
               primary_coulmn_name:primary_column
            },
            success:function(data){
              if(data){
                for (i = 0; i < singlePageIds.length; ++i) {
                  $("#rowid"+singlePageIds[i]).hide();
                }
                successmsg('data successfully deleted');
              }
            }
          });
        }
      })
    }
}

//function for open modal
function openEditModal(primary_id,counter) 
{
    var title  = $("#textfield_"+counter).val();
    var description = $("#textfield1_"+counter).val();
    var style = $("#textfield2_"+counter).val();
    var categoryid = $("#1_textfield3_"+counter).val();
    var subcategoryid = $("#textfield3_"+counter).val();
    var tags  = $("#textfield4_"+counter).val();
    var manufacturer  = $("#textfield5_"+counter).val();
    var status  = $("#textfield6_"+counter).val();

    $("#title"+counter+'_'+primary_id).val(title);
    $("#description"+counter+'_'+primary_id).val(description);
    $("#style"+counter+'_'+primary_id).val(style);
    $("#categoryid"+counter+'_'+primary_id).val(categoryid);
    $("#tags"+counter+'_'+primary_id).val(tags);
    $("#manufacturer"+counter+'_'+primary_id).val(manufacturer);
    $("#status"+counter+'_'+primary_id).val(status);

     onchangeloaddropdown(categoryid,'Category_ID','','Subcategory_ID','Subcategory_Name','subcategory','subcategoryid'+counter+'_'+primary_id);            
     
     $("#textfield4_"+counter).val(tags);
     $("#textfield5_"+counter).val(manufacturer);
     $("#textfield6_"+counter).val(status);

     setTimeout(function(){ $("#subcategoryid"+counter+'_'+primary_id).val(subcategoryid); }, 100);

     $('#modifymyModal_'+primary_id).modal('show');
}

//funcation for save data
function updateModel(tablename,primary_coulmn_name,fieldid,primary_id,counter)
{
  var title = $("#title"+fieldid).val();
  // var description = tinymce.get('Modeldetailstext').getContent();
  // var description = $("#description"+fieldid).val();
  // if (textfield_id == 'Modeldetailstext') {
  var description = tinymce.get('description'+fieldid).getContent();

  // console.log(description);
  // return false;
    // }

  var style = $("#style"+fieldid).val();
  var categoryid = $("#categoryid"+fieldid).val();
  var subcategoryid = $("#subcategoryid"+fieldid).val();
  var tags = $("#tags"+fieldid).val();
  var manufacturer = $("#manufacturer"+fieldid).val();
  var status = $("#status"+fieldid).val();

  $.ajax({
     url:"process/common.php",
     method:"post",
     data:{
         title:title,
         description:description,
         style:style,
         categoryid:categoryid,
         subcategoryid:subcategoryid,
         tags:tags,
         manufacturer:manufacturer,
         status:status,
         tablename:tablename,
         primary_id:primary_id,
         primary_coulmn_name:primary_coulmn_name,
         save_all_data: 1
     },
     success:function(data){
        
         if(data=='Success'){

            $('#modifymyModal_'+primary_id).modal('hide');
             successmsg('');

             $("#textfield_"+counter).val(title);
             $("#textfield1_"+counter).val(description);
             $("#textfield2_"+counter).val(style);
             $("#1_textfield3_"+counter).val(categoryid);

             onchangeloaddropdown(categoryid,'Category_ID','','Subcategory_ID','Subcategory_Name','subcategory','textfield3_'+counter);            
             
             $("#textfield4_"+counter).val(tags);
             $("#textfield5_"+counter).val(manufacturer);
             $("#textfield6_"+counter).val(status);
             setTimeout(function(){ $("#textfield3_"+counter).val(subcategoryid); }, 100);

             // $("#textfield_"+counter).val(title);


         }else{
              console.log(data);
         }
     }
      
  });
}
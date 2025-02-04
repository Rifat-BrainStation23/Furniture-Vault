<!--<script>tinymce.init({ selector:'textarea' });</script>-->
<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/common.php';
require_once 'models/datamodel.php';
require_once 'models/model.php';
$msg=$errors='';
if (isset($_SESSION['msg'])) {
    $msg = $_SESSION['msg'];
    unset($_SESSION['msg']);
}
if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}
if (isset($_SESSION['objp'])) {
    $objcommon = $_SESSION['objcommon'];
} else {
    $objcommon = new common();
}
if(isset($_SESSION['objmodel'])){
    $objmodel=unserialize($_SESSION['objmodel']);
    unset($_SESSION['objmodel']);
}else{
    $objmodel=new model();
}


$categoryid=$objmodel->categoryid;
$getcategory=datamodel::getdropddown($categoryid,'Category_ID','Category_Name','category');
$styleid=$objmodel->styleid;
$style=datamodel::getdropddown($styleid,'style_id','style_name','style');
$manufacturerid=$objmodel->manufacturerid;
$manufacturer=datamodel::getdropddown($manufacturerid,'manufacturer_id','manufacturer_name','manufacturer');
$subcatid=$objmodel->subcategoryid;
?>
<script src="tinymce/js/tinymce/tinymce.min.js"></script>
 <script>tinymce.init({ selector:'textarea' });</script>
<style>
    .modal {
  text-align: center;
  padding: 0!important;
}

.modal:before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -4px;
}

.modal-dialog {
  display: inline-block;
  text-align: left;
  vertical-align: middle;
}
</style>
<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h3 class="page-header">Batch Upload</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <?php ?>
                <div <?=$msg==''?"style='display:none'":""?> class="alert alert-success">
                    <?= $msg; ?>
                </div>
                
                <hr>
            <?php ?>
                <div id="Errordiv" <?=$errors==''?"style='display:none'":""?> class="alert alert-danger">
                    <?= $errors; ?>
                </div>
                
                <hr>
            <?php  ?>
        </div>

    </div>
    <div class="row">
        <div class="col-md-6">
            <form class="form-horizontal" action="process/modelprocess.php" enctype="multipart/form-data" method="post">
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Title*:</label>
                    <div class="col-sm-10 col-md-8">
                        <input type="text" id="title" required="" value="<?=$objmodel->title?>" class="form-control" required=""  placeholder="Title" name="title">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >3D Models/Preview*:</label>
                    <div class="col-sm-10 col-md-8">
                        <input type="file" required="" name="modelfiles[]" onchange="javascript:updateList()" multiple="" maxlength="100" id="modelfiles" class="form-control" required=""  placeholder="Title" >
                         <span class="help-text">3D model and image name should be same</span>

                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Category*:</label>
                    <div class="col-sm-10 col-md-8">
                        <select required="" class="form-control" id="category" name="category" onchange="onchangeloaddropdown(this.value,'Category_ID','','Subcategory_ID','Subcategory_Name','subcategory','subcategory')">
                            <?=$getcategory?>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Sub Category*:</label>
                    <div class="col-sm-10 col-md-8">
                        <select required="" class="form-control" name="subcategory" id="subcategory">
                            <option>Select Subcategory</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Style*:</label>
                    <div class="col-sm-10 col-md-8">
                        <select required="" class="form-control" name="style" id="style">
                            <?=$style?>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Manufacturer*:</label>
                    <div class="col-sm-10 col-md-8">
                        <select required="" class="form-control" name="manufacturer" id="manufacturer">
                            <?=$manufacturer?>
                        </select>
                    </div>
                </div>
                 <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Tags*:</label>
                    <div class="col-sm-10 col-md-8">
                        <input type="text" required="" autocomplete="off" id="modeltags" onkeyup="gettagssuggetion('modeltags','loadmoretag')" value="<?=$objmodel->tags?>" maxlength="255" name="tags" class="form-control" required=""  placeholder="Comma seprated tags" >
                        `                                                                           
                        <ul class="subtask-pick" id='loadmoretag'> 
                                    </ul>
                        <span class="help-text">Tags should be comma seprated</span>
                    </div>
                </div>
                 <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Description*:</label>
                    <div class="col-sm-10 col-md-8">
                        <textarea rows="8"  id="description" class="form-control" name="description"><?=$objmodel->description?></textarea>
                    </div>
                </div>
                        
                <div class="col-md-offset-4">
                    
                </div>
                <div class="form-group">
                    <br>
                    <div class="col-sm-offset-6 col-sm-10">
                        <button type="button" onclick="uploadFile()" id="uploadbutton" class="btn btn-success ">Upload</button>
                    </div>
                </div>
            </form>
            
        </div>
        <div class="col-md-6">
            
            <div class="col-md-8" >
                <h4 id="fileListheading" class="display-none">Selected files list:</h4>
                <div id="fileList">
                    
                </div>
                
            </div>
        </div>
    </div>

<div class="modal" id="myModal" role="dialog">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        
        <div class="modal-body text-center">
            <div class="col-md-offset-1 col-md-10">
          <progress id="progressBar" value="0" max="100" style="height: 25px;width:100%;display: none;"></progress>
          </div>
                    <h3 id="status"></h3>
                    <p id="loaded_n_total"></p>
                    
        </div>
        
      </div>
    </div>
</div>
</div>
<script>
    
    updateList = function() {
        var input = document.getElementById('modelfiles');
        var output = document.getElementById('fileList');
        $("#fileListheading").show();
        output.innerHTML = '<ul class="list-group">';
        for (var i = 0; i < input.files.length; ++i) {
          output.innerHTML += '<li class="list-group-item">' + input.files.item(i).name + '</li>';
        }
        output.innerHTML += '</ul>';
        }
        onchangeloaddropdown('<?=$categoryid?>','Category_ID','<?=$subcatid?>','Subcategory_ID','Subcategory_Name','subcategory','subcategory');
    </script>

    <script>
    function _(el){
    return document.getElementById(el);
}
function addvalidationerror(fieldid){
    $("#"+fieldid).attr('style','border:solid red 1px;');
    $("#"+fieldid).focus();
    $("#"+fieldid).addClass('errorvalidation');
    $("#"+fieldid).attr('onclick','removevalidationerror("'+fieldid+'")');
}
function removevalidationerror(fieldid){
     $("#"+fieldid).attr('style','border:1px solid #ccc');
     $("#"+fieldid).removeAttr('onclick');
}
function uploadFile(){
        
        $("#Errordiv").hide();
         $(".errorvalidation").attr('style','border:1px solid #ccc');
    var title=$("#title").val();
    var modelfiles=$("#modelfiles").val();
    var category=$("#category").val();
    var subcategory=$("#subcategory").val();
    var style=$("#style").val();
    var manufacturer=$("#manufacturer").val();
    var modeltags=$("#modeltags").val();
        tinyMCE.triggerSave();
    var description=$("#description").val();
        var error=0;
        if(title==''){
            addvalidationerror('title');
            error++;
        }
        if(modelfiles==''){
           addvalidationerror('modelfiles');
            error++;
        }
        if(category==''){
            addvalidationerror('category');
            error++;
        }
        if(subcategory==''){
            addvalidationerror('subcategory');
            error++;
        }
        if(manufacturer==''){
            addvalidationerror('manufacturer');
            error++;
        }
       
        if(style==''){
            addvalidationerror('style');
            error++;
        }
       
        if(modeltags==''){
            addvalidationerror('modeltags');
            error++;
        }
        if(description==''){
         
            error++;
        }
    
        if(error>0){
            $("#Errordiv").show();
            $("#Errordiv").html("Please fill all field.");
            return false;
            exit;
        }
        $("#myModal").modal({
            backdrop: 'static',
            keyboard: false
        });
        $("#uploadbutton").hide();
        $("#progressBar").show();
    var formdata = new FormData();
    var ins = document.getElementById('modelfiles').files.length;
        for (var x = 0; x < ins; x++) {
            formdata.append("modelfiles[]", document.getElementById('modelfiles').files[x]);
        }
        formdata.append("title", _("title").value);
        formdata.append("category", _("category").value);
        formdata.append("style", _("style").value);
        formdata.append("subcategory", _("subcategory").value);
        formdata.append("tags", _("modeltags").value);
        formdata.append("description", _("description").value);
        formdata.append("manufacturer", _("manufacturer").value);
    var ajax = new XMLHttpRequest();
    ajax.upload.addEventListener("progress", progressHandler, false);
    ajax.addEventListener("load", completeHandler, false);
    ajax.addEventListener("error", errorHandler, false);
    ajax.addEventListener("abort", abortHandler, false);
    ajax.open("POST", "process/modelprocess.php");
    ajax.send(formdata);
}
function progressHandler(event){
    _("loaded_n_total").innerHTML = "Uploaded "+bytesToSize(event.loaded)+" of "+bytesToSize(event.total);
    var percent = (event.loaded / event.total) * 100;
            _("progressBar").value = Math.round(percent);
            if(percent==100){
                _("status").innerHTML =" Moving files... please wait";
            }else{
            _("status").innerHTML = Math.round(percent)+"% uploaded... please wait";
            }
        
}
function completeHandler(event){
//    _("progressBar").value = 0;
    if(event.target.responseText==='upload is completesuccess'){
            window.location.href = 'approvemodels.php';
        }
   else{
       window.location.href = '';
   }
        
}
function errorHandler(event){
    _("status").innerHTML = "Upload Failed";
}
function abortHandler(event){
    _("status").innerHTML = "Upload Aborted";
}

function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  for (var i = 0; i < sizes.length; i++) {
    if (bytes <= 1024) {
      return bytes + ' ' + sizes[i];
    } else {
      bytes = parseFloat(bytes / 1024).toFixed(2)
    }
  }
  return bytes + ' P';
}
</script>
<?php
require_once 'views/footer.php';
?>
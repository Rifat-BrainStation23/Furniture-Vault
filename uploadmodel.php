<?php
require_once 'views/header.php';
require_once 'cms/models/datamodel.php';
require_once 'cms/models/model.php';
require_once 'cms/models/common.php';
$objcommon=new common();
$msg='';
if (isset($_SESSION['msg'])) {
    $msg = $_SESSION['msg'];
    unset($_SESSION['msg']);
}
if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}
if(isset($_SESSION['objmodel'])){
    $objmodel=unserialize($_SESSION['objmodel']);
    unset($_SESSION['objmodel']);
}else{
    $objmodel=new model();
}
$categoryid='';
$getcategory=datamodel::getdropddown($categoryid,'Category_ID','Category_Name','category');
$styleid=$objmodel->styleid;
$style=datamodel::getdropddown($styleid,'style_id','style_name','style');
$manufacturerid=$objmodel->manufacturerid;;
$manufacturer=datamodel::getdropddown($manufacturerid,'manufacturer_id','manufacturer_name','manufacturer');
$subcatid=$objmodel->subcategoryid;


try{
$categorydata=$objcommon->getcategories();
} catch (Exception $ex){
   echo $ex->getMessage();
}


?>

<div id="models_load_block">
    <h1 class="models_load">
        Model upload        </h1>
    <?=$msg?>
    <div class="bg">
        <div class="form">
            <form onsubmit="uploadstart()" action="cms/process/modelprocess.php" method="post" enctype="multipart/form-data">
                <input type="hidden" name="usermodel" value="true">
                <input type="hidden" name="category" value="0">
                <dl>
                    <dt>Title</dt>
                    <dd>
                        <input type="text" id="sky_bundle_modelsbundle_modeltype_title" value="<?=$objmodel->title?>" name="title" required="required" class="text_button" />
                    </dd>
                    <dt>
                        <label for="model_file">3D Model</label>
                    </dt>
                    <dd>
                        <div class="prompt">Size up to 1GB, zip or rar file format</div>
                        <div class="input_file">
                            <input type="file" id="sky_bundle_modelsbundle_modeltype_file" name="zipfile" required="required" size="35" />
                            <div class="search">Upload</div>
                            <div class="val"></div>
                        </div>
                    </dd>
                    <dt >
                        <label for="f3d_file">preview</label>
                    </dt>
                    <dd  class="model_image_holder">
                        <div class="prompt">Size up to 1Mb, jpeg/png file format</div>
                        <div class="input_file">
                            <input type="file" id="sky_bundle_modelsbundle_modeltype_images_0_file" name="imagefile" size="35" />
                            <input type="hidden" id="sky_bundle_modelsbundle_modeltype_images_0_id" name="sky_bundle_modelsbundle_modeltype[images][0][id]" />
                            <div class="search">Upload</div>
                            <div class="val"></div>
                        </div>
                    </dd>
                   
                    <dt>
                        <label for="model_chapter">Category</label>
                    </dt>
                    <dd>
                        <div class="select_block">
                            <div class="val"></div>
                            <select id="sky_bundle_modelsbundle_modeltype_category" name="subcategory"  required="required">
                                <option></option>
                                <?php
                
                                foreach ($categorydata as $category){
                                    $categoryid= $category->Category_ID;
                                    $categoryname=$category->Category_Name;
                                    $subcount=$category->subcount;
                                    if($subcount>0){
                                    ?>
                                <optgroup label="<?=$categoryname?>">
                                <?php
                            $result='true';
                            try{
                             $subcategorydata=$objcommon->getsubcategories($categoryid);
                            } catch (Exception $ex){
                                $ex->getMessage();
                                $result='';
                            }
                            if($result){
                            foreach ($subcategorydata as $subcategory){
                               
                                $subname=$subcategory->Subcategory_Name;
                                $subid=$subcategory->Subcategory_ID;
                                
                            ?>
                                    <option <?=$subid==$subcatid?"selected":"";?> value="<?=$subid?>"><?=$subname?></option>
                           
                            <?php }} ?>
                                </optgroup>
                                  <?php
                                            }
                                        }
                                        ?>
                                
                                <optgroup label="Scripts">
                                    <option value="110">Scripts</option>
                                </optgroup>
                            </select>
                        </div>
                    </dd>
                    <dt>
                        <label for="model_style">Style</label>
                    </dt>
                    <dd>
                        <div class="select_block">
                            <div class="val"></div>
                            <select id="sky_bundle_modelsbundle_modeltype_style" name="style" required="required">
                                <option value="" selected="selected"></option>
                                    <?=$style?>
                            </select>
                        </div>
                    </dd>
                    <dt>
                        <label for="model_platforma">Manufacturer</label>
                    </dt>
                    <dd>
                        <div class="select_block">
                            <div class="val"></div>
                            <select id="sky_bundle_modelsbundle_modeltype_platform" name="manufacturer" required="required">
                                <?=$manufacturer?>
                            </select>
                        </div>
                    </dd>
                   
                    <dt>Tags</dt>
                    <dd>
                        <div class="prompt">Separate by comm</div>
                        <input type="text" required="" autocomplete="off" id="modeltags1" onkeyup="gettagssuggetion_user('modeltags1','loadmoretag1')" class="text_button" value="<?=$objmodel->tags?>" maxlength="255" name="tags" required=""  placeholder="Comma seprated tags" >
                        <div id="lasttags" style="display: none"></div>
                        <ul class="subtask-pick" id='loadmoretag1'> 
                                    </ul>
                        <!--<input type="text" id="sky_bundle_modelsbundle_modeltype_tags" required="" name="tags" value="<?=$objmodel->tags?>" class="text_button" />-->
                    </dd>
                    <dt>Description</dt>
                    <dd>
                        <textarea id="sky_bundle_modelsbundle_modeltype_description"  name="description" required="required" class="text_button"><?=$objmodel->description?></textarea>
                    </dd>
                </dl>
                <div class="agree">
                    <input type="checkbox" class="checkbox" checked="" name="agree_inp" id="agree_inp" required="true">
                    <label for="agree_inp">
                        <a href="/faq/31/show">I accept the user agreement</a>
                        </a>
                    </label>
                    
                    <br>
                    
                    <div id="upload-bar" style="display: none">
                        <br>
                    Uploading
                    <img src="images/uploading.gif">
                    </div>
                    <div id="submitbutton">
                        <button type="submit" class="sub_button_green" id="submit_model_button">
                        Upload                        </button>
                    </div>
                </div>
                
            </form>
        </div>
        <div class="requirements_block">
            <h2 class="requirements">Requirements</h2>
            <p>
                <strong>Upload models created by yourself only.</strong>
                <br>
                Models created by somebody else and uploaded by you will be deleted and you will be banned from the site.
            </p>
            <p>
                <strong>Models requirements.</strong>
                <br>
                1. Square model preview. 
                Minimum size is 640x640pix.
                <br>Preview must show only model itself.
                <br> Displaing trademark is not allowed. We do not accept photos.
            </p>
            <p>2. Scene must contain only model itself, no other geometry, cameras or lights.</p>
            <p>3. All models created in 3D Studio Max 2010 or higher must have a copy in FBX or obj format</p>
            <p>
                <strong>Moderation takes 1-2 days.</strong>
                <br>
                If your model didn't pass moderation, you will receive a message stating why.
                <br> Models that pass moderation will be displayed on your profile.
            </p>
            <p>
                <a href="/files/3ddd_studio.zip">Render studio for 3ds Max 2009 and higher</a>
                <br>
        </div>
        <div class="clear"></div>
    </div>
</div>
<div id="sidebar" class="eng"></div>
<script>
    
        onchangeloaddropdown('<?=$categoryid?>','Category_ID','<?=$subcatid?>','Subcategory_ID','Subcategory_Name','subcategory','subcategory');

function uploadstart(){
    $('#upload-bar').show();
    $('#submitbutton').hide();
}

function assigtagname(fieldid,name){
    var s=$("#"+fieldid).val();
    var lastIndex = s.lastIndexOf(",")
    $("#"+fieldid).val(s.substring(0, lastIndex+1) + name);
     $("#loadmoretag").hide();
     $("#"+fieldid).focus();
}

function gettagssuggetion(currentid,fieldid){
    
  var  tag=$("#"+currentid).val();
    var pieces = tag.split(/[\s,]+/);
    tag=(pieces[pieces.length-1]); 
    $.ajax({
       url:"cms/process/ajaxcalls.php",
       method:"post",
       data:{
           model:'common',
           function:'gettagssuggetion',
           tag:tag,
           fieldid:currentid,
          
       },
       success:function(data){
           $("#loadmoretag").show();
           $("#"+fieldid).html(data);
        }
     })

}
</script>
<?php
require_once 'views/footer.php';
?>


<?php
require_once 'views/header.php';
require_once 'cms/models/model.php';
require_once 'cms/models/common.php';
$objmodel = new model();
$objcommon = new common();

$modelid = isset($_GET['m']) ? $_GET['m'] : 0;
if ($modelid == 0) {
    header("location:index.php");
}
$filter = "and model_id=$modelid and model_is_active=1";
$resultmodel = $objmodel->getmodels($filter, $pagination = '');
$wishlistfilter = "and model_id = $modelid";
if(isset($_SESSION['User_Info_ID'])){
$resultwishlistfolder = $objmodel->getmodelwishlistfolder($_SESSION['User_Info_ID'],$wishlistfilter);
$loggedin = true;

$downloadright = $objmodel->getUserDownloadRight($_SESSION['User_Info_ID']);
}

else{
 $resultwishlistfolder = array();  
 $loggedin = false;
}
if (!$resultmodel) {
    header("location:index.php");
}
foreach ($resultmodel as $data) {
    $result = $data;
}
$model_total_rating = $objmodel->getmodelrating($modelid);
if(isset($_SESSION['User_Info_ID'])){
$model_user_rating = $objmodel->getmodeluserrating($_SESSION['User_Info_ID'],$modelid);
//$usergroup = $user->usergroup_id;
}
else{
   $model_user_rating = 0; 
}
$imagepath = $result->image_media_save_path;
if (!file_exists($imagepath)) {
    $imagepath = "images/dummy-image.png";
}
$userimagepath = "users/images/" . $data->userid . "/" . $data->userid . ".png";
if (!file_exists($userimagepath)) {
    $userimagepath = "users/images/default/blank.gif";
}
?>
<div id="content" style="margin-bottom: 17px;"></div>
<div id="model_card_block" class="model-card1 eng">
    <div class="user">
        <a href="#">
            <img width="46" height="46" src="<?= $userimagepath ?>" class="avatar">
        </a>
        <div class="title">
            <!--<div class="pro">Free</div>-->
            <h1>
                <?= $result->title ?>
            </h1>
        </div>
        <div class="username icon_autor_dark">
            <a href="#">
                <?= $result->nickname ?>
            </a>
        </div>
    </div>
    <div class="big_foto">
        <div class="redact_block"></div>
        <img src="<?= $imagepath ?>" alt="
        <?= $result->title ?>
             " />
    </div>
    <div class="characteristics_block">
        <ul class="little_fotos">
            <li class="active">
                <a href="<?= $imagepath ?>">
                    <img height="90" width="90" src="<?= $imagepath ?>" />
                </a>
            </li>

        </ul>
        <ul class="characteristics_list">
<!--            <li class="icon_program">
                <b>3dsMax 2014 + fbx (Corona)</b>
            </li>-->
            <li class="icon_weight">
                <b><?= model::formatSizeUnits($result->zip_size) ?></b>
            </li>
            <li class="icon_date2">
                <b>
                    <?= $result->date ?>
                </b>
            </li>
            <li class="icon_type">
                <b>
                    <?= $result->style ?>
                </b>
            </li>
            <li class="icon_tags">
                <?php
                $i = 1;
                $tags = $result->tags;
                $tagsarray = explode(",", $tags);
                $len = sizeof($tagsarray);
                foreach ($tagsarray as $tag) {
                    ?>
                    <a href="index.php?tag=<?= $tag ?>"><?= $tag ?></a><?= $i != $len ? "," : '' ?>
                    <?php $i++;
                }
                ?>
            </li>
            <li>
                <div class="show_pre_description"><?= $result->description ?></div>
            </li>
        </ul>
        <div class="card_raiting">
            
            <div class="number" id="average_rating" style="width: 17px;" >
                <?=$model_total_rating;?>
            </div>
            <div class="rait_stars">
                <span onclick="modelrating('<?=$modelid?>','1')" class="star one <?php if($model_user_rating==1){echo 'active';}?>"></span>
                <span onclick="modelrating('<?=$modelid?>','2')" class="star two <?php if($model_user_rating==2){echo 'active';}?>"></span>
                <span onclick="modelrating('<?=$modelid?>','3')" class="star three <?php if($model_user_rating==3){echo 'active';}?>"></span>
                <span onclick="modelrating('<?=$modelid?>','4')" class="star four <?php if($model_user_rating==4){echo 'active';}?>"></span>
                <span onclick="modelrating('<?=$modelid?>','5')" class="star five <?php if($model_user_rating==5){echo 'active';}?>"></span>
            </div>
            <div style="padding-top: 5px;display: none">&nbsp;&nbsp;(<span id="total_ratings">2</span> Ratings)</div>
            
        </div>
        <?php
        $downloadurl = "show_captcha();open_popup('#avtorisation_popup');";
        $secretkey = 0;
        if (isset($_SESSION['User_Info_ID'])) {
            $downloadurl = "downloadmodel('$result->id')";
            $secretkey = $_SESSION['secretkey'] = md5(rand(10000, 100000000));
        }
        ?>

        <?php if($downloadright==1){?>
        <a href="javascript:" onclick="<?= $downloadurl ?>" class=" blue_button blue_button blue_button11">
            Download
        </a>
        <?php } ?>

        <div class="clear"></div>
        <?php if($loggedin){?>
        <div style="padding-top: 20px" id="in_book_marks_heart" class="model-card1 bookmark_block add-block js_add_to_bookmarks"><a href="javascript:" onclick="modelfavourite('<?= $result->id ?>');" id="modelfavourite" class="tabs-btn  bookmark_toggle_link <?php if ($objmodel->getdetailfavourite($result->id, $_SESSION['User_Info_ID'])) {
            echo 'icon_heart_red';
        } else {
            echo 'icon_heart';
        } ?>"><span class="icon_heart_hover"></span>bookmark
            </a>
            <form action="process/modelwishlist.php" method="post" id="wishlist_form" >
                <div class="add-to">
                    add to
                </div>
                <div id="down-list_bg" style="display: none;"></div>
                <div class="down-list" style="display: none;">
                    <div class="collections_form">
                        <div class="form-title">Your folders</div>
                        <div class="collections_placeholder_clock" style="display: none;"></div>
                        <div class="collections_placeholder scroll" style="display: block;">
                            <?php 
                            if($resultwishlistfolder){
                            foreach ($resultwishlistfolder as $wish) {
                                ?>
                            <p class="bookmark_collection_line">
                                <input type="checkbox" class="" <?php if($wish->modelinwishlist=='yes'){echo 'checked=""';} ?> value="<?=$wish->modelwishlistfolder_name?>" name="modelwishlistfolder_name[]" id="modelwishlistfolder_name" onclick="deleteforwishlist(this,'<?=$wish->modelwishlistfolder_name?>',<?=$result->id?>)" data-collectionid="">
                                <label onclick="deleteforwishlist(this,'<?=$wish->modelwishlistfolder_name?>',<?=$result->id?>)" id="modelwishlistfolder_name"><?=$wish->modelwishlistfolder_name?></label>
                            </p>
                            <?php 
                            }
                            } ?>
                            
                        </div>
                        <input type="hidden" id="model_id" name="id" value="<?=$result->id?>">
                        <input type="text" name="modelwishlistfolder_name[]" class="new-cat" id="new-cat" placeholder="New folder">
                        <button type="button" onclick="modelwishlist()" class="blue_button">Add</button>
                    </div>
                </div>
            </form>
        </div>
        <form action="downloadmodel.php" method="post" id="downloadmodel">
            <input type="hidden" name="secretkey" value="<?= $secretkey ?>">
            <input type="hidden" name="modelid" value="<?= $result->id ?>">
            <input type="hidden" name="modelname" value="<?= $result->title ?>">
        </form>
        <?php } ?>
    </div>

    <div class="clear"></div>
</div>
<!--bredcramps begin-->
<!--            <div id="bredcramps" class="eng">
                <ul>
                    <li>
                        <a href="/3dmodels/category/mebel">
                            Furniture
                        </a>
                    </li>
                    <li>
                        <a href="/3dmodels/category/ofisnaya_mebel">
                            Office furniture
                        </a>
                    </li>
                    <li>
                        <a href="/3dmodels/show/reception_3_1">
                            Reception 3
                        </a>
                    </li>
                </ul>
            </div>-->
<!--bredcramps end-->
<!--            <div id="coments_block">
                <h2 class="last_on_forum">Comments (0)</h2>
                <div class="comments_list">
                    <script type="text/javascript">
                        $(document).ready(function () {
                            $('.delete_comment_submit').click(function () {
                                if (confirm('Ã?â€”Ã?Â°Ã?Â¿Ã?Â¸Ã‘ï¿½Ã‘Å’ Ã?Â±Ã‘Æ’Ã?Â´Ã?ÂµÃ‘â€š Ã‘Æ’Ã?Â´Ã?Â°Ã?Â»Ã?ÂµÃ?Â½Ã?Â°')) {
                                    $('#delete_comment_form_' + $(this).attr('comment_id')).submit();
                                }
                                return false;
                            });
                        });
                    </script>
                </div>
            </div>-->
<?php
$userid=isset($_SESSION['User_Info_ID'])?$_SESSION['User_Info_ID']:0;
$filter="and model_id=$modelid";
$count = common::getcount('modelcomments',$filter);
$result=$objmodel->germodelcomments($modelid);
?>
<div id="coments_block">
   <h2 class="last_on_forum">Comments (<?=$count?>)</h2>
   <div class="comments_list">
      <div class="level" id="comment_3157381" data-id="3157381"  level="0" children="1">
          <?php
           while ($data=$result->fetch_object()){
               $commentuserimagepath = "users/images/" . $data->userid . "/" . $data->userid . ".png";
                if (!file_exists($commentuserimagepath)) {
                    $commentuserimagepath = "users/images/default/blank.gif";
                }
          ?>
          <div class="main_level" id="rowid<?=$data->comment_id?>">

                <img width="35" height="35" src="<?=$commentuserimagepath?>" alt="<?=$data->nickname?>" class="avatar">
            <div class="avtor_time">
                    <?=$data->nickname?>
               <time datetime="2012-02-13T11:52" class="time">
               <?=$data->created_date?>
               </time>
            </div>
            <div class="message ">
               <?=$data->comment?>
            </div>
             <?php
             if($data->userid==$userid){
                 
             ?>
            <div class="edit_comment">
               <!--<a class="edit_link" href="javascript:">Edit</a>-->
               <a class="delete_comment_submit" href="javascript:" onclick="deletecommentdata('<?=$data->comment_id?>','comment_id','modelcomments','rowid<?=$data->comment_id?>','')"  comment_id="3157381">Delete</a>
            </div>
            <div style="clear: both"></div>
         </div>
         
          <?php
           }
           }
          ?>
<!--         <div class="level" id="comment_3157385" data-id="3157385"  level="1" children="0">
            <div class="main_level">
               <div class="buttons null"><span class="reiting null">0</span><a href="/vote/down/3157385/1" class="del"></a><a href="/vote/up/3157385/1" class="ok"></a></div>
               <a href="/users/umarmajeed_pk" title="umarmajeed.pk"><img width="35" height="35" src="https://b.3ddd.ru/media/cache/sky_user_avatar_comment/avatar/users/5a2428e5a3795.jpeg" alt="umarmajeed.pk" class="avatar"></a>
               <div class="avtor_time"><a href="/users/umarmajeed_pk" class="avtor">
                  umarmajeed.pk
                  </a><time datetime="2012-02-13T11:52" class="time">
                  2018.01.14 16:16
                  </time>
               </div>
               <div class="edit_comment">
                  <a class="edit_link" href="/comments/edit/3157385">Edit</a>
                  <a class="delete_comment_submit" href="#" comment_id="3157385">Delete</a>
               </div>
               <div style="clear: both"></div>
            </div>
         </div>-->
      </div>

   </div>
   <div class="comments_form" id="main_comment_form_holder">
       <?php
       
       $loginuserimagepath = "users/images/" . $userid . "/" . $userid . ".png";
        if (!file_exists($userimagepath)) {
            $loginuserimagepath = "users/images/default/blank.gif";
        }
       ?>
    <img width="35" height="35" src="<?=$loginuserimagepath?>" alt="IMG" class="avatar">
      
      <div class="form">
          <form class="comment_form" action="process/comments.php" method="post" >
             <label><span class="placeholder">Comment...</span>
                 <textarea id="" name="comment" required="required" class="text_button"></textarea>
                 <input type="hidden" name="modelid" value="<?=$modelid?>">
             </label><br>
             <button type="submit" class="blue_button">Send</button>
         </form>
      </div>
      <div style="clear: both;"></div>
   </div>
 
</div>
<div id="sidebar" class="eng">
</div>
<div id="sidebar" class="eng"></div>


<script>
    function downloadmodel(id) {
        $("#downloadmodel").submit();
        $.ajax({
            url: "process/modeldownloadincrement.php",
            method: "post",
            data: {
                id: id
            },
            success: function (data) {
                
            }
        });
    }

    function modelwishlist(){
        $("#wishlist_form").submit();
    }
    
    function deleteforwishlist(obj, folder, id){
        if(!$(obj).is(":checked")){
            $.ajax({
            url: "process/deletefromwishlist.php",
            method: "post",
            data: {
                id: id,
                folder: folder
            },
            success: function (data) {
                
            }
        });
        }
    }
    
    $("#yourSelector").live("click", function(){
        var id = parseInt($(this).val(), 10);
        if($(this).is(":checked")) {
            // checkbox is checked -> do something
        } else {
            // checkbox is not checked -> do something different
        }
});

    function modelfavourite(id) {
        $.ajax({
            url: "process/modelfavourite.php",
            method: "post",
            data: {
                id: id
            },
            success: function (data) {

                if (data) {
                    $('#modelfavourite').removeClass("icon_heart").addClass("icon_heart_red");
                } else {
                    $('#modelfavourite').removeClass("icon_heart_red").addClass("icon_heart");
                }
            }

        });
    }
    
    function modelrating(id,rating){
        $.ajax({
            url: "process/modelrating.php",
            method: "post",
            data: {
                id: id,
                rating: rating
            },
            success: function (data) {
                if(data!=='failed'){
            $("#average_rating").html(data);
                }
            }

        });
    }
    
</script>
<?php
require_once 'views/footer.php';
?>
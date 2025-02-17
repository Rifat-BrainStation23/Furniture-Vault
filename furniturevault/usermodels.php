<?php
require_once 'views/header.php';
require_once 'cms/models/model.php';
if(!isset($_SESSION['User_Info_ID'])){
    header("location:index.php");
}
if(isset($_SESSION['objmodel'])){
    $objmodel=unserialize($_SESSION['objmodel']);
    unset($_SESSION['objmodel']);
}else{
    $objmodel=new model();
}
if (isset($_SESSION['msg'])) {
    $msg = $_SESSION['msg'];
    unset($_SESSION['msg']);
}
if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}

try {
    $filter="and userid=".$_SESSION['User_Info_ID'];
   $usermodels=model::getusermodels($filter);
} catch (Exception $ex) {
    echo $ex->getMessage();
}
require_once 'views/userheader.php';
?>

        <div class="create_article_list"><a href="uploadmodel.php" class="sub_button_green">
            Upload Model
        </a>
            
            <div id="models" class="profile">
            <div class="model_list">
              <?php
               foreach ($usermodels as $usermodel)
               {
                   $title=$usermodel->title;
                   $imgname=$usermodel->image_name;
                   $imgsavepath=$usermodel->image_media_save_path;
                   
                    if(!file_exists($imgsavepath)){
                        $imgsavepath='images/dummy-image.png';
                    }
                   $status=$usermodel->	model_is_active;
                   if($status==1){
                       $status_msg='Approved';
                   }elseif ($status==2) {
                             $status_msg='Rejected/Disapproved';
                     }else{
                         $status_msg='On moderation';
                     }
                   ?>
             
           <div class="item moderation">
           <div class="delete_overlay" confirm="" wl="true" url="#" style="display: none;"></div>
           <img src="<?=$imgsavepath?>" width="170" height="170" alt="
           <?=$title?>
        "><div class="icons hover"><?=$status_msg?></div><div class="load">
           <img src="" alt="">
           </div>
           </div>
                <?php  }
              ?>
            </div>
            </div>
            <div style="clear: both;"></div>
                
        </div>
    
    </div></div>
            
            
<?php
require_once 'views/footer.php';
?>
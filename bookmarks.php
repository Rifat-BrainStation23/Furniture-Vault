<?php
require_once 'views/header.php';
require_once 'cms/models/model.php';
$objmodel = new model();
$msg = $errors='';
if (isset($_SESSION['msg'])) {
    $msg = $_SESSION['msg'];
    unset($_SESSION['msg']);
}

if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}

try {
    $objuser->getprofile();
} catch (Exception $ex) {
    echo $ex->getMessage();
}
$fav_count=0;
$resultmodel=array();
$resultmodel = $objmodel->getfavouritemodels($_SESSION['User_Info_ID']);
$wishlistfilter = "";
$resultwishlistfolder = $objmodel->getmodelwishlistfolder($_SESSION['User_Info_ID'],$wishlistfilter);
require_once 'views/userheader.php';

?>




<!--        <div class="category">
            <div class="search-form" id="search" style="display: none;">
                <form action="" method="get">
                    <input type="text" name="query" class="txt" value="">
                    <input type="submit" class="sub" value>
                </form>
            </div>
        </div>-->

        <article class="result_item result_item2">
            <div class="model_list">
                <div style="color: green; font-size: 15px">
    <?=$msg?>
</div>
                <div style="color: red; font-size: 15px">
    <?=$errors?>
</div>
                <div class="row">
                    <div class="item" data-id="2329951">
                        <div class="img-block">
                            <?php 
                            foreach ($resultmodel as $data) {
                            $fav_count = $data->fav_count;
                            }
                            
                            $i = 1;
                            foreach ($resultmodel as $data) {
                                
                        $imagepath=$data->image_media_save_path;
                        if(!file_exists($imagepath)){
                            $imagepath='';
                        }
                        ?>
                            <a href="bookmarkslist.php">
                                <img src="<?=$imagepath?>" alt="" width="116" height="108">
                            </a>
                            
                            <?php
                            
                            if($i++ == 4){
                                break;;
                            }
                        }
                        if($fav_count<4){
                                for($j=1; $j<=4-$fav_count; $j++){ ?>
                            <a href="bookmarkslist.php">
                                <img src="" alt="" width="116" height="108">
                            </a>        
                              <?php  }
                            }
                        ?>
                        </div>
                        <div class="item-text">
                            <a href="bookmarkslist.php" title="All other">Favourites</a>
                            <span> <?=$fav_count?></span>
                            <img src="assets/skypages/images/en/heart-hover.png" alt="">
                            <div class="clear"></div>
                        </div>
                    </div>
                    <?php
                        foreach ($resultwishlistfolder as $value) {
                            ?>
                    
                    <div class="item" data-id="2419571">
                        <div class="img-block">
                            <?php
                            $i = 1;
                            $resultwishlist = $objmodel->getwishlistmodels($_SESSION['User_Info_ID'],$value->modelwishlistfolder_name);
                            foreach ($resultwishlist as $wishlist) {
                            $wish_count = $wishlist->wish_count;
                            }
                            foreach ($resultwishlist as $wishlist) { 
                                $imagepath=$wishlist->image_media_save_path;
                        if(!file_exists($imagepath)){
                            $imagepath='';
                        }
                        ?>
                            <a href="wishlist.php?name=<?=$value->modelwishlistfolder_name?>">
                                <img src="<?=$imagepath?>" alt="" width="116" height="108">
                            </a>
                           <?php 
                           if($i++ == 4){
                                break;
                            }
                        }
                        if($wish_count<4){
                                for($j=1; $j<=4-$wish_count; $j++){ ?>
                            <a href="wishlist.php?name=<?=$value->modelwishlistfolder_name?>">
                                <img src="" alt="" width="116" height="108">
                            </a>        
                              <?php  }
                            }
                        ?>
                            ?>
                            
                            
                        </div>

                        <div class="item-text">
                            <a href="wishlist.php?name=<?=$value->modelwishlistfolder_name?>" title="<?=$value->modelwishlistfolder_name?>"><?=$value->modelwishlistfolder_name?></a>
                            
                                <a><img src="assets/skypages/images/en/trash" alt="" width="10" height="10"aria-hidden="true">

                                    </i> <?=$wish_count?>
                                </span>
                                <div class="clear">
                                    <span>
                                        <i class="fa fa-envelope" id="myBtn" onclick="sendemail('<?=$value->modelwishlistfolder_name?>')"></i>
                                    </span>
                                </div>

                                    
                        </div>\
                        <!-- <div class="item-text">
                                   
                     <span>
                            <a href="wishlist.php?name=<?=$value->modelwishlistfolder_name?>" title="<?=$value->modelwishlistfolder_name?>"><?=$value->modelwishlistfolder_name?></a>
 
                            <span><i class="fa fa-envelope" id="myBtn" onclick="sendemail('<?=$value->modelwishlistfolder_name?>','<?=$value->modelwishlistfolder_id?>')" aria-hidden="true"></i> <?=$wish_count?></span>
                            
                            <a href=""><i class="fa fa-trash" id="myBtn" onclick="return confirm('Are you sure you want to delete this list?')" aria-hidden="true" > </i></a>
                    

                    </span>
                             
                            
                        </div>-->
                    </div>
                    
                    <?php
                        }
                    ?>
                    
                </div>
            </div>
        </article>
        
        <div class="new-item-block">
            <a href="javascript:open_popup('#reduct_popup')">
                <span>+</span> New collection
            </a>
        </div>
        
    </div>
</div>
</div>
<div id="popups_block">
            <div id="popup_bg" style=""></div>
                    
            
    <!--gallery_popup begin-->
    <div id="gallery_popup" class="popup_window"></div>
    <!--gallery_popup end-->

            <div id="reduct_popup" class="popup_window">
            <div class="close_popup" onclick="close_popup('#reduct_popup')">×</div>
            <div class="title">New collection</div>
            <form action="process/addwishlistfolder.php" method="post">
                <label for="name-rubric">title</label>
                <input type="text" name="modelwishlistfolder_name" id="name-rubric" >
                <div class="btn-block">
                    <button type="submit" class="blue_button">Save</button>
                </div>
            </form>
        </div>
       </div>



<!--<div id="popups_block">
            <div id="popup_bg" style=""></div>
                    
            
    gallery_popup begin
    <div id="gallery_popup" class="popup_window"></div>
    gallery_popup end

            <div id="reduct_popup" class="popup_window">
            <div class="close_popup" onclick="close_popup('#reduct_popup')">×</div>
            <div class="title">New collection</div>
            <form action="process/sendsharedlist.php" method="post">
                <label for="name-rubric">Receiver Email</label>
                <input type="text" name="remail" id="name-rubric" >
                <input type="hidden" name="semail" >
                <input type="hidden" name="list_name">
                <input type="id" name="id">
                <div class="btn-block">
                    <button type="submit" class="blue_button">Send</button>
                </div>
            </form>
        </div>
       </div>-->


<style>
.modal {
    display: none; 
    position: fixed;
    z-index: 1; 
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 39%;
}

/* The Close Button */
.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
#myBtn:hover{
    cursor: pointer;
}
</style>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <div id="email_popup">
    <div class="title">Share Collection via Email</div>
            <form action="process/sendsharedlist.php" method="post">
                <label for="name-rubric">Receiver Email</label>
                <input type="text" required="" name="remail" style="width: 96%;" id="remail" >
                <input type="hidden" name="semail" value="<?=$objuser->email;?>">
                <input type="hidden" name="list_name" id="list_name">
                <input type="hidden" name="list_id"  id="list_id">
                <div class="btn-block">
                         <div id="loading" style="display: none">
             <img  src="images/loading.svg">
         </div>
                    <button type="submit" id="resetbutton" onclick="loading()" class="blue_button">Send</button>
                </div>
            </form>
    </div>
  </div>

</div>
<script>
    function loading(){
        if($("#remail").val()!=''){
     $("#loading").show();
     $("#resetbutton").prop('disabled',true);   
        }
    }
    </script>
<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
//btn.onclick = function() {
//    
//}

function sendemail(list,id){
    $("#list_name").val(list);
    $("#list_id").val(id);
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>


<?php
require_once 'views/footer.php';
?>
<?php
require_once 'views/header.php';
require_once 'cms/models/model.php';
$objmodel = new model();
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

$resultmodel = $objmodel->getfavouritemodels($_SESSION['User_Info_ID']);
require_once 'views/userheader.php';
?>


<!--        <div class="category">
            <div class="search-form" id="search"  style="display: none;">
                <form action="" method="get">
                    <input type="text" name="query" class="txt" value="">
                    <input type="submit" class="sub" value>
                </form>
            </div>
        </div>-->
        <article class="result_item">
            <div class="heading heading1">

                Favourite 
            </div>
            <!--model_list_block begin-->
            <div id="model_list_block" class="eng">
                <div class="model_list">
                    <?php
                    $i=0;
                    foreach ($resultmodel as $data) {
                        $imagepath=$data->image_media_save_path;
                        if(!file_exists($imagepath)){
                            $imagepath='images/dummy-image.png';
                        }
                        ?>
                    <!--sorting_block end-->
                    
                        <div class="item" data-slug="divan_fendi_casa_artu_sofa_1">
                            <a class="link" href="detail.php?m=<?=$data->id?>" rel="<?=$data->title?>" rev="<?=$imagepath?>">
                                <img src="<?=$imagepath?>" width="170" height="170" alt="Sofa fendi casa artu sofa" />
                            </a>
                            <div class="model_item_footer">
                                
                                <div class="icons hover">
                                    <a href="detail.php?m=<?=$data->id?>">
                                        <i class="fa fa-star" aria-hidden="true"></i> <?php if($data->modelrating_stars==0){echo '0';} else {echo $data->modelrating_stars;}?>
                                    </a>
                                    <a href="detail.php?m=<?=$data->id?>">
                                        <i class="fa fa-heart" aria-hidden="true"></i> <?=$data->total_fav_count?>
                                    </a>
                                    <a href="detail.php?m=<?=$data->id?>" >
                                        <i class="fa fa-file-text" aria-hidden="true"></i> <?=$data->total_wish_count?>
                                    </a>
                                    <a href="detail.php?m=<?=$data->id?>">
                                        <i class="fa fa-download" aria-hidden="true"></i> <?=$data->model_downloads?>
                                    </a>
                                </div>
                            </div>
                        </div>

               
                    <?php } ?>
                     </div>
                </div>
            </div>
        </article>
        
    </div>
</div>


                
<?php
require_once 'views/footer.php';
?>
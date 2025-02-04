<?php
require_once 'views/header.php';
require_once 'cms/models/common.php';
require_once 'cms/models/model.php';
require_once 'cms/models/datamodel.php';
$objmodel = new model();
$objcommon = new common();
$filter="";
$pagination="";
$title="";
$keyword="";
$style="";
$subcategoryid="";
$syleid='';
$manufacturerid='';

$status="";
$limit=36;
$start=1;
$pageno=1;



$filter.=" and model_is_active ='1' ";
$subfiter='';
if(isset($_REQUEST['cat']) && $_REQUEST['cat']!=''){
     $count=sizeof($_REQUEST['cat']);
    foreach ($_REQUEST['cat'] as $key=>$value){
                
                $subfiter.="$value";
                $subfiter.=$count!=$key+1?",":"";
    }
    $subfiter=" and model_Subcategory in($subfiter) ";
}
 $filter.=$subfiter;
if(isset($_REQUEST['search'])){
    
    if($_REQUEST['subcategory']!=''){
         $subcategory=$_REQUEST['subcategory'];
        $filter.=" and model_Subcategory = '$subcategory'";
    }
    if($_REQUEST['category']!=''){
         $categoryid=$_REQUEST['category'];
        $filter.=" and model_Subcategory  in (select Subcategory_ID from subcategory where Category_ID='$categoryid')";
    }
   if($_REQUEST['style']!=''){
         $syleid=$_REQUEST['style'];
        $filter.=" and style_id = '$syleid'";
    } 
    if($_REQUEST['manyfactrer']!=''){
         $manufacturerid=$_REQUEST['manyfactrer'];
        $filter.=" and manufacturer_id = '$manufacturerid'";
    }
}
if(isset($_REQUEST['tag'])){
    $tag=$_REQUEST['tag'];
    $filter.=" and model_tags like '%$tag%'";
}
$searchfilter='';
if(isset($_REQUEST['keyword'])){
    $keyword=$_REQUEST['keyword'];
    $searchfilter=" and (model_tags like '%$keyword%' OR model_title like '%$keyword%' OR model_description like '%$keyword%')";

    $filter.=$searchfilter;
}   
if(isset($_REQUEST['pageno'])){
     $start=$pageno=$_REQUEST['pageno'];
     $filter=$_REQUEST['filter'];
    
    
}

$val = max(0, $start - 1) * 36 + 1;
$pagination="limit $limit offset $val";
$resultmodel = $objmodel->getmodels($filter,$pagination);
$count = common::getcount('model',$filter);

$getstyles=datamodel::getdropddown($syleid,'style_id','style_name','style');

$getmanyfactrer=datamodel::getdropddown($manufacturerid,'manufacturer_id','manufacturer_name','manufacturer');
$objcommon=new common();
$categorydata=array()   ;
try{
$categorydata=$objcommon->getcategories($type='user');
} catch (Exception $ex){
    $ex->getMessage();
}

?>

            <div id="content">
                   <!--categories_block begin-->
                <div id="categories_block">
                    
                <?php
                
                foreach ($categorydata as $category){
                   $categoryid= $category->Category_ID;
                   $categoryname=$category->Category_Name;
                   $subcount=$category->subcount;
                   if($subcount>0){
                   ?>
                    <div class="list">
                        <h2>
                            <a onclick="searchfilter('category','<?=$categoryid?>');"  href="javascript:">
                                <?=$categoryname?>
                            </a>
                        </h2>
                        <ul>
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
                            <li>
                                <a onclick="searchfilter('subcategory','<?=$subid?>');" href="javascript:">
                                    <?=$subname?>
                                </a>
                            </li>
                            <?php }} ?>
                        </ul>
                    </div>
                    <?php
                    }
                }
                ?>
             
                </div>
                <?php if(isset($_REQUEST['keyword']) && !empty($_REQUEST['keyword']))
                {?>
                    <h2 class="sresults">
                    Search results <?= $_REQUEST['keyword']?></h2>
                    <div class="results_list">
                        <article class="result_item eng" id="model_list_block">
                            <div class="heading">
                        3d Models (<?=$count?>)
                    </div>
                    </div>
                <?php } ?>

                <!--categories_block end-->
                <div id="model_list_block" class="eng">
                    <!--sorting_block begin-->
                    <div id="sorting_block">
                    <form action="" method="post" class="searchform" id="searchform" name="searchform">
                        <ul class="kind_list">
                            <li class="active">
                                <a href="index.php?date=true">Date</a>
                            </li>
                           
                            <li class="">
                                <a href="index.php?toprate=true">Top Rated</a>
                            </li>
                        </ul>
                        <div class="in_all_models">
                    
                        <input id="category" value="" type="hidden" name="category">
                        <input id="subcategory" value="" type="hidden" name="subcategory">
                        <input id="date" value="" type="hidden" name="date">
                        <input id="top" value="" type="hidden" name="top">
                        <input id="" value="true" type="hidden" name="search">


                            <select name="style" class="form-control" onchange="$('#searchform').submit()">
                                <?=$getstyles?>
                            </select>
                            <select name="manyfactrer" class="form-control" onchange="$('#searchform').submit()">
                                <?=$getmanyfactrer?>
                            </select>
                            Files: <?=$count?>
                           
                        </div>
                         </form>
                    </div>
                    </form>
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
                                        <i class="fa fa-heart" aria-hidden="true"></i> <?=$data->fav_count?>
                                    </a>
                                    <a href="detail.php?m=<?=$data->id?>" >
                                        <i class="fa fa-file-text" aria-hidden="true"></i> <?=$data->wish_count?>
                                    </a>
                                    <a href="detail.php?m=<?=$data->id?>">
                                        <i class="fa fa-download" aria-hidden="true"></i> <?=$data->model_downloads?>
                                    </a>
                                </div>
                            </div>
                        </div>

               
                    <?php } ?>
                     </div>
                 <!--paginator begin-->
                <div id="paginator" class="paginator_block  eng" >
                    <form method="post" id="paginationform">
                            <input type="hidden" value="<?=$filter?>" name="filter">
                            <input type="hidden" value="1" name="pageno" id="pageno"> 
                      <ul class="paginator">

                          
                        <?php
                        $totalpages=ceil($count/$limit);
                        $pageno=$start;
                        
                        $l = min($totalpages, $start+4);

                        for($i=$start;$i<=$l;$i++){
                            $r=($pageno/$limit)+1;
                            $active=$r==$i?"active":"";

                            
                            if($i!=1 && $i==$l-4) echo "<li class='back' onclick='pagination($i-1)'><a href='javascript:'>Backward</a></li>";
                            
                            if($totalpages>1){
                               
                                if($i == $pageno) echo "<li class='current' onclick='pagination($i)'><a href='javascript:' style='color: #73bae6'>$i</a></li>";
                                else echo "<li class='active' onclick='pagination($i)'><a href='javascript:'>$i</a></li>";

                            }
                            $start=$start+$limit;

                            if($i==$l) echo "<li class='next' onclick='pagination( $i+1)'><a href='javascript:'>Forward</a></li>";   
                            
                        }

                        ?>
                        

                      </ul>
                    </form> 
                    
                </div>
                </div>
              
                <!--paginator end-->
            </div>

  <?php
         $result='true';
        try{
         $subcategorydata=$objcommon->getsubcategories('',$searchfilter);
        } catch (Exception $ex){
            $ex->getMessage();
            $result='';
        }
        if($result && $searchfilter!=''){
        ?>
<div id="sidebar" class="eng">
   <!--sections_list begin-->
   <div id="sections_list">
      <h2 class="sections">Choose section</h2>
      <form method="post" id="Catform">
      <ul class="list">
        <?php
        
        foreach ($subcategorydata as $subcategory){
             $subname=$subcategory->Subcategory_Name;
             $subid=$subcategory->Subcategory_ID;
             
             $selected='';
             if(isset($_REQUEST['cat']) && $_REQUEST['cat']!=''){
                if(in_array($subid, $_REQUEST['cat'])){
                    $selected='checked';
                }
               
//                 $url= explode('&',$actual_link);
                 // print_r($url);
             }
       ?>
          
          <li class="cat_filter_item">
              <input class="cat_checkbox"  <?=$selected?> onclick="$('#Catform').submit()" type="checkbox" name="cat[]" slug="<?=$subname?>" value="<?=$subid?>"><label>
            <?=$subname?>
            </label>
            <div class="clearfix"></div>
         </li>
          
     <?php
     }?>
      </ul>
   </form>
   </div>
   </div>
<?php }else{ ?>
 <div id="sidebar" class="eng">
                <h2 class="in_base">
                    Database</h2>
                <a href="uploadmodel.php" class=" blue_button load_3d_model">
                    Add 3D model</a>
                <!--prompt_block begin -->
                <div id="prompt_block">
                    <div class="border">
                        <div class="heading">Help</div>
                        <div class="text">3dsMax 2012 or higher 
                            versions models will 
                            have obj or fbx file in 
                            zip arhive</div>
                    </div>
                </div>
                <!--prompt_block end -->
            </div>

<?php } ?>
<script>
function searchfilter(filedid,value){
    $("#"+filedid).val(value);
    $("#searchform").submit();
    
}
</script>
<?php
require_once 'views/footer.php';

?>
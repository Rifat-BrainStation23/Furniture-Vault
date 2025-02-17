<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/model.php';
require_once 'models/common.php';
$objmodel = new model();
$filter="";
$pagination="";
$usergroupid="";
$keyword='';
$limit=200;
$start=0;
if(isset($_REQUEST['Search'])){
    
    if($_REQUEST['keyword']!=''){
        $keyword=$_REQUEST['keyword'];
        $filter.=" and modeltag_name like'%$keyword%'";
    }
}
if(isset($_SESSION['msg'])){
    echo '<script>successmsg("Tag added successfylly")</script>';
    unset($_SESSION['msg']);
}
if(isset($_SESSION['error'])){
    echo '<script>errormsg("Invalid/Missing data submitted")</script>';
    unset($_SESSION['error']);
}
if(isset($_REQUEST['pageno'])){
     $start=$_REQUEST['pageno'];
     $filter=$_REQUEST['filter'];
     $limit=$_REQUEST['pagelimit'];
    
}
 $pagination="limit $limit offset $start";
$count = common::getcount('modeltags',$filter);

$result = $objmodel->getmodetags($filter,$pagination);
?>

<div id="page-wrapper"> 
            <h3 class="page-header">Tags (<?=$count?>)</h3>
 <div class="search">
      
          <div class="row">
            <div class="col-md-8 col-md-offset-4">
              <div class="form-section">
                <div class="row">
                    <form role="form" action="process/addtags.php" method="post">
                           <div class="col-md-4">
                        <div class="form-group">
                             
                          <label class="sr-only" for="looking">Add Tag</label>
                          <input type="text" value="" name="addtags" class="form-control" placeholder="Tags">
                        </div>
                      </div>
                 
                      <div class="col-md-2">
                        
                          <input type="submit" name="add" class="btn btn-default btn-primary" value="Add Tags">
                   
                      </div>
                    </form>
                        <form role="form" method="post">
                      <div class="col-md-3">
                        <div class="form-group">
                             
                          <label class="sr-only" for="looking">Keyword</label>
                          <input type="text" value="<?=$keyword?>" name="keyword" class="form-control" placeholder="keyword">
                        </div>
                      </div>
                 
                      <div class="col-md-2">
                        
                          <input type="submit" name="Search" class="btn btn-default btn-primary" value="Search">
                   
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    <!-- /.row -->
    <div class="row">
        <div class="col-md-12">
                            <?php
                            $i=1;
                            while($data= $result->fetch_object()) {?>
                          <div class="col-md-4 " style="margin-bottom:10px;" id="rowid<?=$i?>">
                                  <input type="text" id="textfield_<?=$i?>" disabled="" value="<?=$data->modeltag_name?>">
                                
                                    <span class="fa fa-pencil-square-o "  id="editbuttonid_<?=$i?>" onclick="EditTextField('textfield_<?=$i?>','editbuttonid_<?=$i?>','modeltags','modeltag_name','','modeltag_id','<?=$data->modeltag_id?>')" ></span>
                                    <a  href="javascript:" onclick="deletedata('<?=$data->modeltag_id?>','modeltag_id','modeltags','rowid<?=$i?>','')">X</a>
                               
                             
                        </div>
                          <?php
                          $i++;
                          } ?>
            <div class="clearfix"></div>
        <form method="post" id="paginationform">
                            <input type="hidden" value="<?=$filter?>" name="filter">
                            <input type="hidden" value="1" name="pageno" id="pageno"> 
                            <div class="form-group col-xs-2 pull-right">
                                
                <select title="Records per page" class="form-control " name="pagelimit" onchange="$('#paginationform').submit()">
                     <?php
                    
                     for($i=50;$i<=1000;$i=$i+150){
                         $selected=$limit==$i?'selected':'';
                         echo "<option $selected value='$i'>$i</option>";
                     }
                     ?>
                 </select>
                            </div>
                            <div class=" pull-left">
                        <ul class="pagination">
                          
                        <?php
                        $totalpages=ceil($count/$limit);
                        $pageno=$start;
                        $start=0;
                        for($i=1;$i<=$totalpages;$i++){
                            $r=($pageno/$limit)+1;
                            $active=$r==$i?"active":"";
                            if($totalpages>1){
                               
                                echo "<li class='$active' onclick='pagination($start)'><a href='javascript:'>$i</a></li>";
                            }
                            $start=$start+$limit;
                            
                        }
                        ?>
                            
                             </div>
                            
              
                    </form> 
    </div>

</div>
</div>


<?php
require_once 'views/footer.php';
?>
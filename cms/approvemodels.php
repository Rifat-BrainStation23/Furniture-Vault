<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/model.php';
require_once 'models/common.php';
require_once 'models/datamodel.php';
$objmodel = new model();
$objcommon = new common();
$filter="and model_is_active=0";
$pagination=$msg="";
$limit=20;
$start=0;
$pageno=0;
if(isset($_REQUEST['pageno'])){
     $start=$pageno=$_REQUEST['pageno'];
     $filter=$_REQUEST['filter'];
     $limit=$_REQUEST['pagelimit'];
    
}
try{
    $pagination="limit $limit offset $start";
$result = $objmodel->getpendingapprovemodels($filter,$pagination);
} catch (Exception $ex){
    echo $ex->getMessage();
}
if (isset($_SESSION['msg'])) {
    $msg = $_SESSION['msg'];
    unset($_SESSION['msg']);
}
$count = common::getcount('model',$filter);
?>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Pending approval Model list</h1>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <div class="alert alert-success" <?=$msg==""?"style='display:none'":""?>>
                    <?= $msg; ?>
                </div>
                <div class="clearfix"></div>
                <hr>
    <!-- /.row -->
    <div class="row">
        <div class="col-lg-12">  
            <div class="pull-right">
                <button type="button" class="btn btn-gray" onclick="bulkApproveUser('1','model')" title="Approve"><span class="glyphicon glyphicon-ok" style="font-size:22px;"></span></button>
                <button type="button" class="btn btn-gray" onclick="bulkApproveUser('2','model')" title="Disapprove"><span class="glyphicon glyphicon-remove" style="font-size:22px;"></span></button>
                <button type="button" class="btn btn-gray" onclick="bulkDeletedata('model_id','model','true')" title="Delete"><span class="glyphicon glyphicon-trash" style="font-size:22px;"></span></button>
            </div>
        </div>
        <div class="clearfix"></div>

        <br>
        <div class="col-lg-12">            
            <div class="panel panel-default">
                <?php if($result){?>                
                <div class="panel-body">                    
                    <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                        <thead>
                            <tr>
                                <th><input type="checkbox" id="checkAll" onclick="checkAll()"></th>
                                <th>IMG</th>                               
                                <th>Title</th>
                                <th>Description</th>
                                <th>Tags</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php 
                            $i=0;
                            while($data= $result->fetch_object()) {
                                $filepath=$data->image_path;
                                // print_r($filepath);
                                if(!file_exists('../'.$data->image_path)){
                                    $filepath='images/dummy-image.png';
                                }
                                ?>
                            <tr class="gradeU" id="rowid<?=$data->model_id;?>">
                                <td><input type="checkbox" id="select_model_<?=$data->model_id;?>" value="<?=$data->model_id?>" user_id="<?= $data->userid?>" onclick="isLabelChecked(<?= $data->model_id;?>)"></td>
                                <td><img src="../<?=$filepath?>" height="80" width="80"></td>
                               
                                 <td>
                                    <input type="text" id="textfield_<?=$i?>" readonly="" value="<?=$data->model_title;?>">
                                    <span class="fa fa-pencil-square-o " id="editbuttonid_<?=$i?>" onclick="EditTextField('textfield_<?=$i?>','editbuttonid_<?=$i?>','model','model_title','','model_id','<?=$data->model_id?>')"></span>
                                </td>
                               
                                <td>
                                    <textarea style="height: 85%;"   readonly=""  id="textfield1_<?=$i?>"><?=$data->model_description;?></textarea>
                                    <span class="fa fa-pencil-square-o " id="editbuttonid1_<?=$i?>" onclick="EditTextField('textfield1_<?=$i?>','editbuttonid1_<?=$i?>','model','model_description','','model_id','<?=$data->model_id?>')"></span>
                                </td>
                                <td>
                                    <input type="text" onkeyup="gettagssuggetion('textfield4_<?=$i?>','loadmoretag')" id="textfield4_<?=$i?>" readonly="" value="<?=$data->model_tags;?>">
                                    <ul class="subtask-pick" id='loadmoretag'> 
                                    </ul>
                                    <span class="fa fa-pencil-square-o " id="editbuttonid4_<?=$i?>" onclick="EditTextField('textfield4_<?=$i?>','editbuttonid4_<?=$i?>','model','model_tags','','model_id','<?=$data->model_id?>')"></span>
                                </td>
                                <td>
                                 <?=$data->model_created_date;?>
                                </td>
                             
                              
                                <td>
                                    <a id="approvebtn<?=$data->model_id?>" href="javascript:" onclick="approveuser('<?=$data->model_id?>','1','model',<?=$data->userid?>)">Approve</a>&nbsp;
                                    <a id="disapprovebtn<?=$data->model_id?>" href="javascript:" onclick="approveuser('<?=$data->model_id?>','2','model',<?=$data->userid?>)">Disapprove</a>&nbsp;&nbsp;
                                    <a href="javascript:" onclick="deletedata('<?=$data->model_id?>','model_id','model','rowid<?=$data->model_id?>','true')">Delete</a>
                                </td>
                            </tr>
                            <?php  
                            $i++;
                            } ?>
                        </tbody>
                    </table>
                    
                    

                </div>
                <?php }else {?>
                <tr>
                    No Pending Approvel Found.
                </tr>
                <?php  } ?>
            </div>
           
        </div>
        <form method="post" id="paginationform">
                            <input type="hidden" value="<?=$filter?>" name="filter">
                            <input type="hidden" value="1" name="pageno" id="pageno"> 
                            <div class="form-group col-xs-2 pull-right">
                  <?php if($count>0){ ?>     
                <select title="Records per page" class="form-control " name="pagelimit" onchange="$('#paginationform').submit()">
                     <?php
                    
                     for($i=5;$i<=100;$i=$i+15){
                         $selected=$limit==$i?'selected':'';
                         echo "<option $selected value='$i'>$i</option>";
                     }
                     ?>
                 </select>
                            </div>
                            <?php } ?>
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

<?php
require_once 'views/footer.php';
?>
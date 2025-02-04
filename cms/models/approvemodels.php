<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/model.php';
require_once 'models/common.php';
require_once 'models/datamodel.php';
$objmodel = new model();
$objcommon = new common();
$filter="and model_is_active=0";
$pagination="";
try{
$result = $objmodel->getpendingapprovemodels($filter,$pagination);
} catch (Exception $ex){
    echo $ex->getMessage();
}
?>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Pending approval Model list</h1>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <?php if($result){?>
                <div class="panel-body">
                    <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                        <thead>
                            <tr>
                                
                                <th>IMG</th>
                                <th>Nick</th>
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
                                if(!file_exists($data->image_path)){
                                    $filepath='images/dummy-image.png';
                                }
                                ?>
                            <tr class="gradeU" id="rowid<?=$data->model_id;?>">
                                <td><img src="../<?=$filepath?>" height="80" width="80"></td>
                                <td><?=$data->nickname?></td>
                                 <td>
                                    <input type="text" id="textfield_<?=$i?>" readonly="" value="<?=$data->model_title;?>">
                                    <span class="fa fa-pencil-square-o " id="editbuttonid_<?=$i?>" onclick="EditTextField('textfield_<?=$i?>','editbuttonid_<?=$i?>','model','model_title','','model_id','<?=$data->model_id?>')"></span>
                                </td>
                               
                                <td>
                                    <textarea style="height: 85%;"   readonly=""  id="textfield1_<?=$i?>"><?=$data->model_description;?></textarea>
                                    <span class="fa fa-pencil-square-o " id="editbuttonid1_<?=$i?>" onclick="EditTextField('textfield1_<?=$i?>','editbuttonid1_<?=$i?>','model','model_description','','model_id','<?=$data->model_id?>')"></span>
                                </td>
                                <td>
                                    <input type="text" id="textfield4_<?=$i?>" readonly="" value="<?=$data->model_tags;?>">
                                    <span class="fa fa-pencil-square-o " id="editbuttonid4_<?=$i?>" onclick="EditTextField('textfield4_<?=$i?>','editbuttonid4_<?=$i?>','model','model_tags','','model_id','<?=$data->model_id?>')"></span>
                                </td>
                                <td>
                                 <?=$data->model_created_date;?>
                                </td>
                             
                              
                                <td>
                                    <a id="approvebtn<?=$data->model_id?>" href="javascript:" onclick="approveuser('<?=$data->model_id?>','1','model')">Approve</a>&nbsp;
                                    <a id="disapprovebtn<?=$data->model_id?>" href="javascript:" onclick="approveuser('<?=$data->model_id?>','2','model')">Disapprove</a>
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
        
    </div>

</div>

<?php
require_once 'views/footer.php';
?>
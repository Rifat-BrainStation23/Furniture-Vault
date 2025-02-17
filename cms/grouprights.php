<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/common.php';
$objcommon = new common();
$result = $objcommon->getuserrights();
?>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Group Policy Rights</h1>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                
                <div class="panel-body">
                    <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                        <thead>
                            <tr>
                                <th>User Group</th>
                                <th>View Model</th>
                                <th>Download Model</th>
                                <th>Upload Model</th>
                                <th>Delete Model</th>
                                <th>CMS Model</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($result as $data) {?>
                              
                            <tr class="gradeU">
                                <td><?=$data->usergroup_name;?></td>
                                <td>
                                    <label class="radio-inline">
                                        <input type="radio" <?php if($data->view_model=='1'){echo 'checked="checked"';} ?> onclick="saveTextFieldValue('','','grouprights','view_model','1','grouprights_id','<?=$data->grouprights_id?>')" name="viewmodel[<?=$data->grouprights_id?>]">Yes
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" <?php if($data->view_model=='0'){echo 'checked="checked"';} ?> onclick="saveTextFieldValue('','','grouprights','view_model','0','grouprights_id','<?=$data->grouprights_id?>')" name="viewmodel[<?=$data->grouprights_id?>]">No
                                    </label>
                                </td>
                                <td>
                                    <label class="radio-inline">
                                        <input type="radio" <?php if($data->download_model=='1'){echo 'checked="checked"';} ?> onclick="saveTextFieldValue('','','grouprights','download_model','1','grouprights_id','<?=$data->grouprights_id?>')" name="downloadmodel[<?=$data->grouprights_id?>]">Yes
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" <?php if($data->download_model=='0'){echo 'checked="checked"';} ?> onclick="saveTextFieldValue('','','grouprights','download_model','0','grouprights_id','<?=$data->grouprights_id?>')" name="downloadmodel[<?=$data->grouprights_id?>]">No
                                    </label>
                                </td>
                                <td>
                                    <label class="radio-inline">
                                        <input type="radio" <?php if($data->upload_model=='1'){echo 'checked="checked"';} ?> onclick="saveTextFieldValue('','','grouprights','upload_model','1','grouprights_id','<?=$data->grouprights_id?>')" name="uploadmodel[<?=$data->grouprights_id?>]">Yes
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" <?php if($data->upload_model=='0'){echo 'checked="checked"';} ?> onclick="saveTextFieldValue('','','grouprights','upload_model','0','grouprights_id','<?=$data->grouprights_id?>')" name="uploadmodel[<?=$data->grouprights_id?>]">No
                                    </label>
                                </td>
                                <td>
                                    <label class="radio-inline">
                                        <input type="radio" <?php if($data->delete_model=='1'){echo 'checked="checked"';} ?> onclick="saveTextFieldValue('','','grouprights','delete_model','1','grouprights_id','<?=$data->grouprights_id?>')" name="deletemodel[<?=$data->grouprights_id?>]">Yes
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" <?php if($data->delete_model=='0'){echo 'checked="checked"';} ?> onclick="saveTextFieldValue('','','grouprights','delete_model','0','grouprights_id','<?=$data->grouprights_id?>')" name="deletemodel[<?=$data->grouprights_id?>]">No
                                    </label>
                                </td>
                                <td>
                                    <label class="radio-inline">
                                        <input type="radio" <?php if($data->cms_model=='1'){echo 'checked="checked"';} ?> onclick="saveTextFieldValue('','','grouprights','cms_model','1','grouprights_id','<?=$data->grouprights_id?>')" name="deletemodel[<?=$data->grouprights_id?>]">Full
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" <?php if($data->cms_model=='2'){echo 'checked="checked"';} ?> onclick="saveTextFieldValue('','','grouprights','cms_model','2','grouprights_id','<?=$data->grouprights_id?>')" name="deletemodel[<?=$data->grouprights_id?>]">Half
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" <?php if($data->cms_model=='0'){echo 'checked="checked"';} ?> onclick="saveTextFieldValue('','','grouprights','cms_model','0','grouprights_id','<?=$data->grouprights_id?>')" name="deletemodel[<?=$data->grouprights_id?>]">
                                        No
                                    </label>
                                </td>
                            </tr>
                            <?php   
                            } ?>
                        </tbody>
                    </table>
                    
                    

                </div>
               
            </div>
           
        </div>
        
    </div>

</div>

<?php
require_once 'views/footer.php';
?>
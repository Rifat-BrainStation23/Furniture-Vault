<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/common.php';
$objcommon = new common();
$result = $objcommon->getcategories();
$resultgroup=$objcommon->getusergroup('');
?>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Category View by User</h1>
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
                                <th>Category</th>
                                <?php 
                                foreach ($resultgroup as $res){
                                    echo "<th>$res->usergroup_name</th>";
                                }
                                ?>
                              
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                             $j=0;
                                 foreach ($result as $data) { 
                                     
                                     ?>
                            <tr class="gradeU">
                                <td><?=$data->Category_Name?></td>
                                <?php
                                $isallow='';
                                foreach ($resultgroup as $res){
                                    $isallow=$objcommon->getcatergorypolicy($data->Category_ID,$res->usergroup_id);
                                    ?>
                                <td>
                                    <label class="radio-inline">
                                        <input type="radio"  <?php if($isallow==1){echo 'checked="checked"';} ?> onclick="savegrouppolicy('1','<?=$data->Category_ID?>','<?=$res->usergroup_id?>')" name="<?=$data->Category_ID.$res->usergroup_name?>">Yes
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio"  <?php if($isallow==0){echo 'checked="checked"';} ?> onclick="savegrouppolicy('0','<?=$data->Category_ID?>','<?=$res->usergroup_id?>')" name="<?=$data->Category_ID.$res->usergroup_name?>">No
                                    </label>
                                </td>
                                <?php
                                
                                }
                                ?>
                                
                            </tr>
                                 <?php $j++;
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
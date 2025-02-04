<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/common.php';
require_once 'models/datamodel.php';
$objcommon = new common();
$filter="and active=0";
$pagination="";
try{
$result = $objcommon->getuserlist($filter,$pagination);
} catch (Exception $ex){
    echo $ex->getMessage();
}
?>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Pending approval user list</h1>
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
                                <th>ID</th>
                                <th>Nick Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>User Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php 
                            $i=0;
                            while($data=$data = $result->fetch_object()) {
                                $usergroupid=$data->usergroup_id;
                                $usergroup=datamodel::getdropddown($usergroupid,'usergroup_id','usergroup_name','usergroup');
                                ?>
                            <tr class="gradeU" id="rowid<?=$data->userid;?>">
                                <td><?=$data->userid;?></td>
                                <td>
                                    <?=$data->nickname;?>
                                </td>
                                <td>
                                   <?=$data->email;?>
                                </td>
                                <td>
                                 <?=$data->signupdate;?>
                                </td>
                             
                                <td>
                                    <select disabled="" id="textfield5_<?=$i?>">
                                        <?=$usergroup?>
                                    </select>
                                    <span class="fa fa-pencil-square-o " id="editbuttonid5_<?=$i?>" onclick="EditTextField('textfield5_<?=$i?>','editbuttonid5_<?=$i?>','user','usergroup_id','','userid','<?=$data->userid?>','true')"></span>
                                </td>
                                <td>
                                    <a id="approvebtn<?=$data->userid?>" href="javascript:" onclick="approveuser('<?=$data->userid?>','1','user','')">Approve</a>&nbsp;
                                    <a id="disapprovebtn<?=$data->userid?>" href="javascript:" onclick="approveuser('<?=$data->userid?>','2','user','')">Disapprove</a>
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
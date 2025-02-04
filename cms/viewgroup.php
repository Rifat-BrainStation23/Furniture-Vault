<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/common.php';
$objcommon = new common();
$result = $objcommon->getusergroup();
?>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">View/Edit Group</h1>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
        <div class="col-lg-8">
            <div class="panel panel-default">
                
                <div class="panel-body">
                    <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                        <thead>
                            <tr>
                                <th>Group Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $i=1;
                            foreach ($result as $data) { ?>
                            <tr class="gradeU" id="rowid<?=$i?>">
                                   <td><input type="text" id="textfield_<?=$i?>" disabled="" value="<?=$data->usergroup_name?>"></td>
                                <td>
                                    &nbsp;&nbsp;<a href="javascript:" id="editbuttonid_<?=$i?>" onclick="EditTextField('textfield_<?=$i?>','editbuttonid_<?=$i?>','usergroup','usergroup_name','','usergroup_id','<?=$data->usergroup_id?>')" >Edit</a>
                                    <a  href="javascript:" onclick="deletedata('<?=$data->usergroup_id?>','usergroup_id','usergroup','rowid<?=$i?>','')">Delete</a>
                                </td>
                                
                            </tr> 
                          <?php
                          $i++;
                          } ?>
                            
                        </tbody>
                    </table>
                    
                    

                </div>
               
            </div>
           
        </div>
        
    </div>

</div>
<script src="vendor/datatables/js/jquery.dataTables.min.js"></script>
<script src="vendor/datatables-plugins/dataTables.bootstrap.min.js"></script>
<script src="vendor/datatables-responsive/dataTables.responsive.js"></script>
<!--<script>
    $(document).ready(function () {
        $('#dataTables-example').DataTable({
            responsive: true
        });
    });
</script>-->
<?php
require_once 'views/footer.php';
?>
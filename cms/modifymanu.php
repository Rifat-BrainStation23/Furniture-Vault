<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/common.php';
$objcommon = new common();
$result = $objcommon->getmanufacturer();
?>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">View/Edit Manufacturer</h1>
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
                                <th>Manufacturer Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $i=0;
                            foreach ($result as $data) { ?>
                            <tr class="gradeU" id="rowid<?=$i?>">
                                   <td><input type="text" disabled="" id="textfield_<?=$i?>" value="<?=$data->manufacturer_name?>"></td>
                                <td>
                                    &nbsp;&nbsp;<a href="javascript:" id="editbuttonid_<?=$i?>" onclick="EditTextField('textfield_<?=$i?>','editbuttonid_<?=$i?>','manufacturer','manufacturer_name','','manufacturer_id','<?=$data->manufacturer_id?>','')">Edit</a> &nbsp;&nbsp;&nbsp;&nbsp; 
                                     <a  href="javascript:" onclick="deletedata('<?=$data->manufacturer_id?>','manufacturer_id','manufacturer','rowid<?=$i?>','')">Delete</a>
                                </td>
                                
                            </tr> 
                          <?php $i++;  } ?>
                            
                        </tbody>
                    </table>
                    
                    

                </div>
               
            </div>
           
        </div>
        
    </div>

</div>
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
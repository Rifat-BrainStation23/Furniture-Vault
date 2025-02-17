<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/common.php';
$objcommon = new common();
$result = $objcommon->getcategories();
?>
<!--<style>
    #table-column{
    column-count:2;
    -moz-column-count:2;
    -webkit-column-count:2;
    
    width:100%;
    }
</style>-->
<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Modify Category / Subcategory</h1>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
        <?php
        $j=0;
        foreach ($result as $data) { ?>
        <div class="col-lg-7">
            <div class="panel panel-default">
                <div class="panel-body">
                    <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                        <thead>
                            
                            <tr  id="rowid<?=$j?>">
                                   <th><input type="text" disabled="" id="textfield_<?=$j?>" value="<?=$data->Category_Name?>"></th>
                                 <th>
                                    &nbsp;&nbsp;<a href="javascript:" id="editbuttonid_<?=$j?>" onclick="EditTextField('textfield_<?=$j?>','editbuttonid_<?=$j?>','category','Category_Name','','Category_ID','<?=$data->Category_ID?>','')">Edit</a> &nbsp;&nbsp;&nbsp;&nbsp; 
                                    <?php if($data->subcount==0){ ?> 
                                    <a  href="javascript:" onclick="deletedata('<?=$data->Category_ID?>','Category_ID','category','rowid<?=$j?>','')">Delete</a>
                                    <?php } ?>
                                 </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <?php 
                            $result='true';
                            try{
                            $subresult = $objcommon->getsubcategories($data->Category_ID);
                            }
                            catch (Exception $ex){
                                $result='';
                            }
                            ?>
                             <?php
                             if($result){
                                 
                            $i=$j;
                            foreach ($subresult as $subdata) { ?>
                            <tr class="gradeU" id="rowid<?=$j.$i?>">
                                   <td><input type="text" disabled="" id="textfield_<?=$j.$i?>" value="<?=$subdata->Subcategory_Name?>"></td>
                                <td>
                                    &nbsp;&nbsp;<a href="javascript:" id="editbuttonid_<?=$j.$i?>" onclick="EditTextField('textfield_<?=$j.$i?>','editbuttonid_<?=$j.$i?>','subcategory','Subcategory_Name','','Subcategory_ID','<?=$subdata->Subcategory_ID?>','')">Edit</a> &nbsp;&nbsp;&nbsp;&nbsp; 
                                     <a  href="javascript:" onclick="deletedata('<?=$subdata->Subcategory_ID?>','Subcategory_ID','subcategory','rowid<?=$j.$i?>','')">Delete</a>
                                </td>
                                
                            </tr> 
                             <?php $i++;  } }?>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <?php $j++; } ?>
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
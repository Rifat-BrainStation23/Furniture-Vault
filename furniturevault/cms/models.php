<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/model.php';
require_once 'models/common.php';
require_once 'models/datamodel.php';
$objmodel = new model();

$objcommon = new common();
$filter="";
$pagination="";
$title="";
$keyword="";
$style="";
$subcategoryid="";
$status="";
$limit=25;
$start=0;
$pageno=0;
if(isset($_REQUEST['Search'])){
    if($_REQUEST['title']!=''){
         $title=$_REQUEST['title'];
        $filter.=" and model_title like '%$title%'";
    }
    if($_REQUEST['keyword']!=''){
        $keyword=$_REQUEST['keyword'];
        $filter.=" and (model_title like '%$keyword%' or  model_description like '%$keyword%' or  model_tags like '%$keyword%') ";
    }
//    if($_REQUEST['style']!=''){
//         $style=$_REQUEST['style'];
//        $filter.=" and style_id ='$style'";
//    }
    if($_REQUEST['subcategoryid']!=''){
        $subcategoryid=$_REQUEST['subcategoryid'];
        $filter.=" and model_subcategory ='$subcategoryid'";
    }
    if($_REQUEST['status']!=''){
        $status=$_REQUEST['status'];
        $filter.=" and model_is_active ='$status'";
    }
}
if(isset($_REQUEST['pageno'])){
     $start=$pageno=$_REQUEST['pageno'];
     $filter=$_REQUEST['filter'];
     $limit=$_REQUEST['pagelimit'];
    
}
$pagination="limit $limit offset $start";
$result = $objmodel->getmodels($filter,$pagination);
$count = common::getcount('model',$filter);



$categoryid=$objmodel->categoryid;
$getcategory=datamodel::getdropddown($categoryid,'Category_ID','Category_Name','category');
//$result = $objmodel->getmodels($categoryid,$start,$limit);
//$count = $objmodel->getmodelscount($categoryid);



?>
 <script>tinymce.init({ selector:'.frmdescription' });</script>
<div id="page-wrapper">
 
    <br>
    <h4>Uploded Models (<?=$count?>)</h4>
    <div class="search">
      
          <div class="row">
            <div class="col-md-8 col-md-offset-4">
              <div class="form-section">
                <div class="row">
                    <form role="form" method="post">
                      <div class="col-md-2">
                        <div class="form-group">
                             
                            <input type="text" value="<?=$keyword?>" id="searchtag"  autocomplete="off"   onkeyup="gettagssuggetion('searchtag','loadmoretag_Search')"  name="keyword" class="form-control" placeholder="keyword">
                        <ul class="subtask-pick" id='loadmoretag_Search'> 
                            
                                    </ul>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                            <input type="text" value="<?=$title?>" id="searchtitle" autocomplete="off"  onkeyup="gettitlesuggetion('searchtitle','loadmoretitle_Search')"   name="title" class="form-control" placeholder=" Model Title">
                                <ul class="subtask-pick " id='loadmoretitle_Search'> 
                            
                                    </ul>
                        </div>
                      </div>
                       
                      <div class="col-md-3">
                        <div class="form-group">
                         
                             <select class="form-control"  name="subcategoryid" >
                                 <option value="">Select Category</option>
                                <?php
                                $categorydata=$objcommon->getcategories();
                                foreach ($categorydata as $category){
                                    $categoryid= $category->Category_ID;
                                    $categoryname=$category->Category_Name;
                                    $subcount=$category->subcount;
                                    if($subcount>0){
                                    ?>
                                <optgroup label="<?=$categoryname?>">
                                <?php
                            $categoryresult='true';
                            try{
                             $subcategorydata=$objcommon->getsubcategories($categoryid);
                            } catch (Exception $ex){
                                $ex->getMessage();
                                $categoryresult='';
                            }
                            if($categoryresult){
                            foreach ($subcategorydata as $subcategory){
                               
                                $subname=$subcategory->Subcategory_Name;
                                $subid=$subcategory->Subcategory_ID;
                                
                            ?>
                                    <option <?=$subid==$subcategoryid?"selected":"";?> value="<?=$subid?>"><?=$subname?></option>
                           
                            <?php }} ?>
                                </optgroup>
                                  <?php
                                            }
                                        }
                                        ?>
                                
                                <optgroup label="Scripts">
                                    <option value="110">Scripts</option>
                                </optgroup>
                            </select>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">
                            <select name="status" class="form-control">
                                <option value="">All</option>
                                        <option value="1" <?=$status=='1'?"selected":""?>>Active</option>
                                        <option value="0" <?=$status=='0'?"selected":""?>>Deactive</option>
                                        <option value="2" <?=$status=='2'?"selected":""?>>Block/Disapprove</option>
                                        <option value="3" <?=$status=='3'?"selected":""?>>Archived</option>
                                        
                            </select>
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
<!--    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
              
                <div class="panel-body">
                    <table  class="" id="dataTables-example">-->
     <div class="row">
        <?php 
        if($_SESSION['cms_model']=='1')
        {?>
        <div class="col-lg-12">  
            <div class="pull-right">
                <button type="button" class="btn btn-gray" onclick="bulkDeletedata('model_id','model','true')" title="Delete"><span class="glyphicon glyphicon-trash" style="font-size:22px;"></span></button>
            </div>
        </div>
        <?php } ?>
        <div class="clearfix"></div>

        <br>
        <div class="col-xs-12">
            <div class="panel panel-default">
                 <?php if($result){ ?>
                <div class="panel-body table-responsive">
                    <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                       
                        
                        <thead>
                            <tr>
                                <th><input type="checkbox" id="checkAll" onclick="checkAll()"></th>
                                <th>IMG</th>
                                <th>Action</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Style</th>
                                <th>Category</th>
                                <th>Subcategory</th>
                                <th>Tags</th>
                                <th>Manufacturer</th>
                                <th>Status</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            
                            <?php
                            $i=0;
                            foreach ($result as $data) {
                                $styleid=$data->styleid;
                                $subcategoryid=$data->subcategoryid;
                                $categoryid=$data->categoryid;
                                $manufacturerid=$data->manufacturerid;
                                 $filepath=$data->image_media_save_path;
                                if(!file_exists('../'.$data->image_media_save_path)){
                                    $filepath='images/dummy-image.png';
                                }
                                ?>
                              
                            <tr class="gradeU" id="rowid<?=$data->id?>">
                                <td><input type="checkbox" id="select_model_<?=$data->id?>" value="<?=$data->id?>" user_id="<?= $data->userid?>" onclick="isLabelChecked(<?=$data->id?>)"></td>
                               <td><img src="../<?=$filepath?>" height="80" width="80"></td>
                               <td>&nbsp;&nbsp;&nbsp;
                                    <?php 
                                    if($_SESSION['cms_model']=='1')
                                    {?>
                                    <a href="javascript:" onclick="deletedata('<?=$data->id?>','model_id','model','rowid<?=$data->id?>','true')">delete</a>&nbsp;&nbsp;&nbsp;
                                    <?php } ?>
                                    <a href="javascript:" onclick="openEditModal('<?= $data->id?>','<?=$i?>')">edit</a></td>
                                <td>
                                    <input type="text" id="textfield_<?=$i?>" readonly="" value="<?=$data->title;?>">
                                    <span class="fa fa-pencil-square-o " id="editbuttonid_<?=$i?>" onclick="EditTextField('textfield_<?=$i?>','editbuttonid_<?=$i?>','model','model_title','','model_id','<?=$data->id?>')"></span>
                                </td>
                               
                                <td>
                                    <textarea style="height: 85%;"   readonly=""  id="textfield1_<?=$i?>"><?=$data->description;?></textarea>
                                    <span class="fa fa-pencil-square-o " id="editbuttonid1_<?=$i?>" onclick="EditTextField('textfield1_<?=$i?>','editbuttonid1_<?=$i?>','model','model_description','','model_id','<?=$data->id?>')"></span>
                                    <span class="fa fa-search-plus" onclick="expanddescription('textfield1_<?=$i?>','<?=$data->id?>')"></span>
                                </td>
                                
                                <td>
                                    <select disabled="" id="textfield2_<?=$i?>">
                                    <?=$style=datamodel::getdropddown($styleid,'style_id','style_name','style');?>
                                    </select>
                                    <span class="fa fa-pencil-square-o " id="editbuttonid2_<?=$i?>" onclick="EditTextField('textfield2_<?=$i?>','editbuttonid2_<?=$i?>','model','style_id','','model_id','<?=$data->id?>')"></span>
                                </td>
                                <td>
                                    <select disabled="" id="1_textfield3_<?=$i?>"  onchange="onchangeloaddropdown(this.value,'Category_ID','','Subcategory_ID','Subcategory_Name','subcategory','textfield3_<?=$i?>')">
                                        <?=$getcategory=datamodel::getdropddown($categoryid,'Category_ID','Category_Name','category');?>
                                    </select>
                                    <span class="fa fa-pencil-square-o " id="1_editbuttonid3_<?=$i?>" onclick="EditTextField('1_textfield3_<?=$i?>','1_editbuttonid3_<?=$i?>','','','','','<?=$data->id?>')"></span>
                                </td>
                                <td>
                                    <select disabled="" id="textfield3_<?=$i?>">
                                    <?=$style=datamodel::getdropddown($subcategoryid,'Subcategory_ID','Subcategory_Name','subcategory',$categoryid,'Category_ID');?>
                                    </select>
                                    <span class="fa fa-pencil-square-o " id="editbuttonid3_<?=$i?>" onclick="EditTextField('textfield3_<?=$i?>','editbuttonid3_<?=$i?>','model','model_subcategory','','model_id','<?=$data->id?>')"></span>
                                </td>
                                 <td>
                                    <input type="text" onkeyup="gettagssuggetion('textfield4_<?=$i?>','loadmoretag')" id="textfield4_<?=$i?>" readonly="" value="<?=$data->tags;?>">
                                    <ul class="subtask-pick" id='loadmoretag'> 
                                    </ul>
                                    <span class="fa fa-pencil-square-o " id="editbuttonid4_<?=$i?>" onclick="EditTextField('textfield4_<?=$i?>','editbuttonid4_<?=$i?>','model','model_tags','','model_id','<?=$data->id?>')"></span>
                                </td>
                                <td>
                                    <select disabled="" id="textfield5_<?=$i?>">
                                    <?=$manufacturer=datamodel::getdropddown($manufacturerid,'manufacturer_id','manufacturer_name','manufacturer');?>
                                    </select>
                                    <span class="fa fa-pencil-square-o " id="editbuttonid5_<?=$i?>" onclick="EditTextField('textfield5_<?=$i?>','editbuttonid5_<?=$i?>','model','manufacturer_id','','model_id','<?=$data->id?>')"></span>
                                </td>
                                <td>
                                <select disabled="" id="textfield6_<?=$i?>">
                                   <?php $modelstatus=$data->model_is_active;?>
                                        <option value="1" <?=$modelstatus=='1'?"selected":""?>>Active</option>
                                        <option value="0" <?=$modelstatus=='0'?"selected":""?>>Deactive</option>
                                        <option value="2" <?=$modelstatus=='2'?"selected":""?>>Block/Disapprove</option>
                                        <option value="3" <?=$modelstatus=='3'?"selected":""?>>Archived</option>
                                        
                            </select>
                                    <span class="fa fa-pencil-square-o " id="editbuttonid6_<?=$i?>" onclick="EditTextField('textfield6_<?=$i?>','editbuttonid6_<?=$i?>','model','model_is_active','','model_id','<?=$data->id?>')"></span>
                                   </td>
                                
                           
                            </tr>
                            
                            <div id="modifymyModal_<?= $data->id?>" class="modal fade" role="dialog">
                              <div class="modal-dialog modal-lg">

                                <!-- Modal content-->
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Edit Models</h4>
                                  </div>
                                  <div class="modal-body">
                                    <div class="col-md-6">
                                            <img src="../<?=$filepath?>" class="img-responsive">
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="title">Title:</label>
                                            <input type="title" class="form-control" id="title<?=$i.'_'.$data->id?>" value="<?=$data->title;?>">
                                        </div>                                        
                                        <div class="form-group">
                                            <label for="style">Style:</label>
                                            <select class="form-control" id="style<?=$i.'_'.$data->id?>">
                                                <?=$style=datamodel::getdropddown($styleid,'style_id','style_name','style');?>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="category">Category:</label>
                                            <select class="form-control" id="categoryid<?=$i.'_'.$data->id?>" onchange="onchangeloaddropdown(this.value,'Category_ID','','Subcategory_ID','Subcategory_Name','subcategory','subcategoryid<?=$i.'_'.$data->id?>')">
                                                <?=$getcategory=datamodel::getdropddown($categoryid,'Category_ID','Category_Name','category');?>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="subcategory">Subcategory:</label>
                                            <select class="form-control" id="subcategoryid<?=$i.'_'.$data->id?>">
                                                <?=$style=datamodel::getdropddown($subcategoryid,'Subcategory_ID','Subcategory_Name','subcategory',$categoryid,'Category_ID');?>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="tags">Tags:</label>
                                            <input type="text" class="form-control" onkeyup="gettagssuggetion('tags<?=$i.'_'.$data->id?>','loadmoremodaltag')" id="tags<?=$i.'_'.$data->id?>" value="<?=$data->tags;?>">
                                            <ul class="subtask-pick" id='loadmoremodaltag'> 
                                            </ul>
                                        </div>
                                        <div class="form-group">
                                            <label for="manufacturer">Manufacturer:</label>
                                            <select class="form-control" id="manufacturer<?=$i.'_'.$data->id?>">
                                                <?=$manufacturer=datamodel::getdropddown($manufacturerid,'manufacturer_id','manufacturer_name','manufacturer');?>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="status">Status:</label>
                                            <select class="form-control" id="status<?=$i.'_'.$data->id?>">
                                                <?php $modelstatus=$data->model_is_active;?>
                                                <option value="1" <?=$modelstatus=='1'?"selected":""?>>Active</option>
                                                <option value="0" <?=$modelstatus=='0'?"selected":""?>>Deactive</option>
                                                <option value="2" <?=$modelstatus=='2'?"selected":""?>>Block/Disapprove</option>
                                                <option value="3" <?=$modelstatus=='3'?"selected":""?>>Archived</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="Description">Description:</label>
                                            <textarea class="form-control frmdescription" row="3" id="description<?=$i.'_'.$data->id?>"><?=$data->description;?></textarea>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" onclick="updateModel('model','model_id','<?=$i.'_'.$data->id?>','<?= $data->id?>','<?= $i ?>')">Update</button>
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <?php   
                             
                            $i++;
                            }
                            ?>
                        </tbody>
                    </table>
                   
                            
                            
                            
                            </div>
                   
                </div>
               
               <?php }else{
                   echo "No Record found";
               } ?>
            </div>
         <form method="post" id="paginationform">
                            <input type="hidden" value="<?=$filter?>" name="filter">
                            <input type="hidden" value="1" name="pageno" id="pageno"> 
                            <div class="form-group col-xs-2 pull-right">
                  <?php if($count>0){ ?>     
                <select title="Records per page" class="form-control " name="pagelimit" onchange="$('#paginationform').submit()">
                     <?php
                    
                     for($i=10;$i<=100;$i=$i+15){
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

</div>


<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content" id="modalcontainer">
      <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Model Description</h4>
            </div>
     <div class="modal-body">
                <div class="row text-center">
                    <div class="col-md-12">
                <textarea id="Modeldetailstext" cols="100" rows="10">
                    
                </textarea>
          
      </div>
      </div>
      </div>
            <input type="hidden" id="sample">
            <input type="hidden" id="expand_fieldid" value="">
      <div class="modal-footer">
          <button type="button" data-dismiss="modal" id="descriptionsave" value=""  onclick="saveTextFieldValue('Modeldetailstext','sample','model','model_description','','model_id',this.value);assignexpandvalue();"  class="btn btn-primary">Save</button>
          <!-- <button type="button" data-dismiss="modal" id="descriptionsave" value=""  onclick="saveTextFieldValue('Modeldetailstext','sample','model','model_description','','model_id',tinyMCE.get('Modeldetailstext').getContent());assignexpandvalue();"  class="btn btn-primary">Save</button> -->
                <button type="button" data-dismiss="modal" class="btn btn-default">Close</button>

            </div>
</div>
        </div>
        </div>
<?php
require_once 'views/footer.php';
?>

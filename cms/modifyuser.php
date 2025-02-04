<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/common.php';
require_once 'models/datamodel.php';
$objcommon = new common();
$filter="";
$pagination="";
$usergroupid="";
$status="";
$nick="";
$mail="";
$limit=5;
$start=0;
if(isset($_REQUEST['Search'])){
    if($_REQUEST['mail']!=''){
         $mail=$_REQUEST['mail'];
        $filter.=" and email like '%$mail%'";
    }
    if($_REQUEST['nick']!=''){
        $nick=$_REQUEST['nick'];
        $filter.=" and nickname like '%$nick%'";
    }
    if($_REQUEST['usergroup']!=''){
         $usergroupid=$_REQUEST['usergroup'];
        $filter.=" and usergroup_id ='$usergroupid'";
    }
    if($_REQUEST['status']!=''){
        $status=$_REQUEST['status'];
        $filter.=" and active ='$status'";
    }
}
if(isset($_REQUEST['pageno'])){
     $start=$_REQUEST['pageno'];
     $filter=$_REQUEST['filter'];
     $limit=$_REQUEST['pagelimit'];
    
}
 $pagination="order by userid desc limit $limit offset $start";
$result = $objcommon->getuserlist($filter,$pagination);
$count = common::getcount('user',$filter);
?>

<div id="page-wrapper">
    <br>
    <h4>All users list (<?=$count?>)</h4>
    
<div class="search">
      
          <div class="row">
            <div class="col-md-8 col-md-offset-4">
              <div class="form-section">
                <div class="row">
                    <form role="form" method="post">
                      <div class="col-md-2">
                        <div class="form-group">
                             
                          <label class="sr-only" for="looking">Nickname</label>
                          <input type="text" value="<?=$nick?>" name="nick" class="form-control" placeholder="Nickname">
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                            <input type="text" value="<?=$mail?>" name="mail" class="form-control" placeholder="email">
                        </div>
                      </div>
                       
                      <div class="col-md-3">
                        <div class="form-group">
                          <select name="usergroup" class="form-control">
                              <?= $usergroup=datamodel::getdropddown($usergroupid,'usergroup_id','usergroup_name','usergroup');?>
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
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                
                <div class="panel-body">
                    <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                        <thead>
                            <tr>
                                <th>IMG</th>
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
                                $imgpath="../users/images/$data->userid/$data->userid.png";
                                if(!file_exists($imgpath)){
                                    $imgpath="../users/images/default/blank.gif";
                                }
                                
                                ?>
                            <tr class="gradeU" id="rowid<?=$data->userid;?>">
                               
                                <td>
                                    <img src="<?=$imgpath?>" height="50" width="50">
                                </td>
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
                                    <select disabled="" id="textfield6_<?=$i?>">
                                        <option value="1" <?=$data->active=='1'?"selected":""?>>Active</option>
                                        <option value="0" <?=$data->active=='0'?"selected":""?>>Deactive</option>
                                        <option value="2" <?=$data->active=='2'?"selected":""?>>Block/Disapprove</option>
                                        
                                    </select>
                                    <span class="fa fa-pencil-square-o " id="editbuttonid6_<?=$i?>" onclick="EditTextField('textfield6_<?=$i?>','editbuttonid6_<?=$i?>','user','active','','userid','<?=$data->userid?>','true')"></span>
                                </td>
                               
                            </tr>
                            <?php  
                            $i++;
                            } ?>
                        </tbody>
                 
                    </table>
                         <form method="post" id="paginationform">
                            <input type="hidden" value="<?=$filter?>" name="filter">
                            <input type="hidden" value="1" name="pageno" id="pageno"> 
                            <div class="form-group col-xs-2 pull-right">
                                
                <select title="Records per page" class="form-control " name="pagelimit" onchange="$('#paginationform').submit()">
                     <?php
                    
                     for($i=5;$i<=100;$i=$i+25){
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
        
    </div>

</div>

<?php
require_once 'views/footer.php';
?>
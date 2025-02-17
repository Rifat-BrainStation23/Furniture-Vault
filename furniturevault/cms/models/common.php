<?php

require_once 'dbconnectiontrait.php';

class common {

    use dbconnection;

    public $usergroup_id;
    public $usergroup_name;
    public $view_model;
    public $download_model;
    public $upload_model;
    public $delete_model;
    public $grouprights_id;
    public $Category_ID;
    public $Subcategory_ID;
    public $Category_Name;
    public $Subcategory_Name;
    public $Category_Is_Active;
    public $Subcategory_Is_Active;
    public $style_id;
    public $style_name;
    public $subcount;
    public $manufacturer_name;
    public $manufacturer_id;
    
    public function addusergroup() {
        $objdb = $this->objdb();
        $queryinsert = "INSERT INTO `usergroup`(`usergroup_name`) "
                . "VALUES ('$this->usergroup_name')";
        $objdb->query($queryinsert);
        if ($objdb->errno) {
            throw new Exception("Unable to add item-$objdb->error");
        }
        $this->usergroup_id = $objdb->insert_id;
    }

    public function addgrouppolicy() {
        $objdb = $this->objdb();
        $queryinsert = "INSERT INTO `grouprights`(`usergroup_id`, `view_model`, `download_model`, `upload_model`, `delete_model`) "
                . "VALUES ($this->usergroup_id, $this->view_model, $this->download_model, $this->upload_model, $this->delete_model)";
        $objdb->query($queryinsert);
        if ($objdb->errno) {
            throw new Exception("Unable to add item-$objdb->error");
        }
    }

    public function getusergroup($usergroup='') {
        $objdb = $this->objdb();
        $wherecondition=$sub='';
        if($usergroup!=''){
            $wherecondition=" and cat.catergory_id=$usergroup";
            $sub=" ,(select isallowtoview
                        from catergorypolicy  cat
                        where cat.usergroup_id=ugroup.usergroup_id
                        $wherecondition
                        )as view_model";
        }
        $queryselect = "SELECT `usergroup_id`, `usergroup_name`
                       $sub
                        FROM `usergroup` ugroup";
        $result = $objdb->query($queryselect);
        if ($objdb->errno) {
            throw new Exception("Error in Query");
        }
        if ($result->num_rows == 0) {
            throw new Exception("No item Found");
        }
        $group = array();
        while ($data = $result->fetch_object()) {
            $temp = new common();
            $temp->usergroup_id = $data->usergroup_id;
            $temp->usergroup_name = $data->usergroup_name;
            if(isset($data->view_model)){
            $temp->view_model = $data->view_model;
            }
            $group[] = $temp;
        }
        return $group;
    }

    public function getuserrights() {
        $objdb = $this->objdb();
        $queryselect = "SELECT ug.usergroup_id, ug.usergroup_name, gr.* from usergroup ug, grouprights gr WHERE ug.usergroup_id = gr.usergroup_id";
        $result = $objdb->query($queryselect);
        if ($objdb->errno) {
            throw new Exception("Error in Query");
        }
        if ($result->num_rows == 0) {
            throw new Exception("No item Found");
        }
        $group = array();
        while ($data = $result->fetch_object()) {
            $temp = new common();
            $temp->usergroup_id = $data->usergroup_id;
            $temp->usergroup_name = $data->usergroup_name;
            $temp->grouprights_id = $data->grouprights_id;
            $temp->view_model = $data->view_model;
            $temp->delete_model = $data->delete_model;
            $temp->download_model = $data->download_model;
            $temp->upload_model = $data->upload_model;
            $temp->cms_model = $data->cms_model;
            $group[] = $temp;
        }
        return $group;
    }
    
    public function createcategory() {
        $objdb = $this->objdb();
        $queryinsert = "INSERT INTO `category`(`Category_Name`) "
                . "VALUES ('$this->Category_Name')";
        $objdb->query($queryinsert);
        if ($objdb->errno) {
            throw new Exception("Unable to add item-$objdb->error");
        }
        $last_id = $objdb->insert_id;
        foreach ($_REQUEST['catergoryview'] as $key=>$value){
             $queryinsert="insert into catergorypolicy(catergory_id,usergroup_id)values('$last_id','$value')";
        $objdb->query($queryinsert);
        }
    }
    
    public function createsubcategory() {
        $objdb = $this->objdb();
        $queryinsert = "INSERT INTO `subcategory`(`Category_ID`, Subcategory_Name) "
                . "VALUES ($this->Category_ID, '$this->Subcategory_Name')";
        $objdb->query($queryinsert);
        if ($objdb->errno) {
            throw new Exception("Unable to add item-$objdb->error");
        }
    }
    
    public function getcategories($type='admin') {
        $objdb = $this->objdb();
        $userquery='';
        if(isset($_SESSION['User_Info_ID']) && $type=='user'){
            $userid=$_SESSION['User_Info_ID'];
            $userquery="AND
                        (
                        select count(*)
                        FROM
                        catergorypolicy
                        where 
                         isallowtoview=1
                         and
                        catergory_id=Category_ID
                        AND
                        usergroup_id=(
                                    SELECT usergroup_id
                                    from user where userid=$userid
                                     )
                            )>0";
        }
        $queryselect = "SELECT *"
                . ",(select count(*) "
                . "from subcategory sub where sub.Category_ID=cat.Category_ID )as subcount from category cat where 1=1 $userquery";
        $result = $objdb->query($queryselect);
        if ($objdb->errno) {
            throw new Exception("Error in Query");
        }
        
        $group = array();
        while ($data = $result->fetch_object()) {
            $temp = new common();
            $temp->Category_ID = $data->Category_ID;
            $temp->Category_Name = $data->Category_Name;
            $temp->subcount = $data->subcount;
            $group[] = $temp;
        }
        return $group;
    }
    
    public function getsubcategories_old($category_id='',$searchfilter='') {
        $objdb = $this->objdb();
        $catquery='';
        if($category_id!=''){
            $catquery=" and Category_ID=$category_id";
        }else{
            $catquery=" and (select count(model_subcategory) from model where model_subcategory=Category_ID and model_is_active=1 $searchfilter)>0 ";
        }
        $queryselect = "SELECT * from subcategory where 1=1  $catquery";
        $result = $objdb->query($queryselect);
        if ($objdb->errno) {
            throw new Exception("Error in Query");
        }
        if ($result->num_rows == 0) {
            throw new Exception("No item Found");
        }else{
        $group = array();
        while ($data = $result->fetch_object()) {
            $temp = new common();
            $temp->Category_ID = $data->Category_ID;
            $temp->Subcategory_ID = $data->Subcategory_ID;
            $temp->Subcategory_Name = $data->Subcategory_Name;
            $group[] = $temp;
        }
        return $group;
    }
    }

    public function getsubcategories($category_id='',$searchfilter='') {
        $objdb = $this->objdb();
        $catquery='';
        if($category_id!=''){
            $catquery="SELECT * from subcategory where 1=1 and Category_ID=$category_id";
        }else{
            // $catquery="SELECT * from subcategory where (select count(model_subcategory) from model where model_subcategory=Category_ID and model_is_active=1 $searchfilter)>0 ";
            // $searchfilter = trim($searchfilter,'and');
            $catquery = "Select sub.* from model INNER JOIN subcategory as sub ON model.model_subcategory=sub.Subcategory_ID where model.model_is_active=1".$searchfilter.' group by model.model_subcategory';
        }
        // $queryselect = "SELECT * from subcategory where 1=1  $catquery";
        $result = $objdb->query($catquery);

        if ($objdb->errno) {
            throw new Exception("Error in Query");
        }
        if ($result->num_rows == 0) {
            throw new Exception("No item Found");
        }else{
        $group = array();
        while ($data = $result->fetch_object()) {
            $temp = new common();
            $temp->Category_ID = $data->Category_ID;
            $temp->Subcategory_ID = $data->Subcategory_ID;
            $temp->Subcategory_Name = $data->Subcategory_Name;
            $group[] = $temp;
        }
        return $group;
    }
    }
    
    public function createstyle() {
        $objdb = $this->objdb();
        $queryinsert = "INSERT INTO `style`(`style_name`) "
                . "VALUES ('$this->style_name')";
        $objdb->query($queryinsert);
        if ($objdb->errno) {
            throw new Exception("Unable to add item-$objdb->error");
        }
    }
    public function createmanufacturer() {
        $objdb = $this->objdb();
        $queryinsert = "INSERT INTO `manufacturer`(`manufacturer_name`) "
                . "VALUES ('$this->manufacturer_name')";
        $objdb->query($queryinsert);
        if ($objdb->errno) {
            throw new Exception("Unable to add item-$objdb->error");
        }
    }
    
    public function getstyle() {
        $objdb = $this->objdb();
        $queryselect = "SELECT * from style";
        $result = $objdb->query($queryselect);
        if ($objdb->errno) {
            throw new Exception("Error in Query");
        }
        if ($result->num_rows == 0) {
            throw new Exception("No item Found");
        }
        $group = array();
        while ($data = $result->fetch_object()) {
            $temp = new common();
            $temp->style_id = $data->style_id;
            $temp->style_name = $data->style_name;
            $group[] = $temp;
        }
        return $group;
    }
    public function getmanufacturer() {
        $objdb = $this->objdb();
        $queryselect = "SELECT * from manufacturer";
        $result = $objdb->query($queryselect);
        if ($objdb->errno) {
            throw new Exception("Error in Query");
        }
        if ($result->num_rows == 0) {
            throw new Exception("No item Found");
        }
        $group = array();
        while ($data = $result->fetch_object()) {
            $temp = new common();
            $temp->manufacturer_id = $data->manufacturer_id;
            $temp->manufacturer_name = $data->manufacturer_name;
            $group[] = $temp;
        }
        return $group;
    }

    function savedata(){
        $objdb = $this->objdb();
        $textfielddata=$_REQUEST['textfielddata'];
        $tablename=$_REQUEST['tablename'];
        $text_coulmn_name=$_REQUEST['text_coulmn_name'];
        $change_value=$_REQUEST['change_value'];
        $primary_coulmn_name=$_REQUEST['primary_coulmn_name'];
        $primary_id=$_REQUEST['primary_id'];
        $query="update $tablename set $text_coulmn_name='$textfielddata' where $primary_coulmn_name=$primary_id";
        $result = $objdb->query($query);
        if($result)
            echo 'Success';
    }

    function saveAlldata(){
        $objdb = $this->objdb();
        $title=$_REQUEST['title'];
        $description=$_REQUEST['description'];
        $style=$_REQUEST['style'];
        $categoryid=$_REQUEST['categoryid'];
        $subcategoryid=$_REQUEST['subcategoryid'];
        $tags=$_REQUEST['tags'];
        $manufacturer=$_REQUEST['manufacturer'];
        $status=$_REQUEST['status'];


        $tablename=$_REQUEST['tablename'];
        $primary_coulmn_name=$_REQUEST['primary_coulmn_name'];
        $primary_id=$_REQUEST['primary_id'];
        $query="update $tablename set model_title='".$title."',model_description='".$description."',style_id='".$style."',model_subcategory='".$subcategoryid."',manufacturer_id='".$manufacturer."', model_tags='".$tags."',model_is_active='".$status."' where $primary_coulmn_name=$primary_id";
        $result = $objdb->query($query);
        if($result)
            echo 'Success';
    }

    function deletedata(){
        $objdb = $this->objdb();
        $tablename=$_REQUEST['tablename'];
        

        $primary_coulmn_name=$_REQUEST['primary_coulmn_name'];
        $primary_id=$_REQUEST['primary_id'];
        $primary_ids=@$_REQUEST['primary_ids'];
        if(!empty($primary_ids)){
            $query="delete from $tablename where $primary_coulmn_name IN (".implode($primary_ids,',').")";
        } else {
            $query="delete from $tablename where $primary_coulmn_name=$primary_id";
        }
     
        $result = $objdb->query($query);
        if($tablename=='model'){
            if(!empty($primary_ids)){

                $all_medias="select model_id,media_save_path,media_type_id from media where model_id IN (".implode($primary_ids,',').")";
                $all_media_result = $objdb->query($all_medias);

                if(!empty($all_media_result))
                {
                    foreach ($all_media_result as $all_key => $all_value) {

                        if($all_value['media_type_id']==2){
                            $defaultpath = $all_value['media_save_path'];

                            unlink($defaultpath);   
                        } else if($all_value['media_type_id']!=2){

                            $defaultpath = '../../'.$all_value['media_save_path'];

                            unlink($defaultpath); 
                        }
                        

                        // unlink($defaultpath);
                    }
                }

                //delete media by model id
                $mquery="delete from media where model_id IN (".implode($primary_ids,',').")";
                $mresult = $objdb->query($mquery);

                //delete modelwishlist by model id
                $mwquery="delete from modelwishlist where model_id IN (".implode($primary_ids,',').")";
                $mwresult = $objdb->query($mwquery);

                //delete modelcomments by model id
                $mcquery="delete from modelcomments where model_id IN (".implode($primary_ids,',').")";
                $mcresult = $objdb->query($mcquery);

                //delete modelrating by model id
                $mrquery="delete from modelrating where model_id IN (".implode($primary_ids,',').")";
                $mrresult = $objdb->query($mrquery);

                //delete modelfavourite by model id
                $mfquery="delete from  modelfavourite where model_id IN (".implode($primary_ids,',').")";
                $mfresult = $objdb->query($mfquery);
            } else {

                //unlink folder zip
                $all_medias="select model_id,media_save_path,media_type_id from media where model_id=$primary_id";
                $all_media_result = $objdb->query($all_medias);

                if(!empty($all_media_result))
                {
                    foreach ($all_media_result as $all_key => $all_value) {

                        if($all_value['media_type_id']==2){
                            $defaultpath = $all_value['media_save_path'];

                            unlink($defaultpath);   
                        } else if($all_value['media_type_id']!=2){

                            $defaultpath = '../../'.$all_value['media_save_path'];

                            unlink($defaultpath); 
                        }                        
                    }
                }

                //delete media by model id
                $mquery="delete from media where model_id=$primary_id";
                $mresult = $objdb->query($mquery);

                //delete modelwishlist by model id
                $mwquery="delete from modelwishlist where model_id=$primary_id";
                $mwresult = $objdb->query($mwquery);

                //delete modelcomments by model id
                $mcquery="delete from modelcomments where model_id=$primary_id";
                $mcresult = $objdb->query($mcquery);

                //delete modelrating by model id
                $mrquery="delete from modelrating where model_id=$primary_id";
                $mrresult = $objdb->query($mrquery);

                //delete modelfavourite by model id
                $mfquery="delete from modelfavourite where model_id=$primary_id";
                $mfresult = $objdb->query($mfquery);
            }            
        }
       
        if($result)
            echo 'Success';
    }

    function getuserlist($filter,$pagination){
        $objdb = $this->objdb();
        $query="SELECT * FROM `user` where 1=1 $filter $pagination";
        $result = $objdb->query($query);
        return $result;
        
    }
    
    function approveuser(){
        $status=$_REQUEST['status'];
        $userid=$_REQUEST['userid'];
        $userids=@$_REQUEST['userids'];
        $type=$_REQUEST['type'];
        $objdb = $this->objdb();
        if($type=='model'){
            if(!empty($userids)){
                $query="update `model` set model_is_active=$status where 1=1 and model_id IN (".implode($userids,',').")";
            } else {
                $query="update `model` set model_is_active=$status where 1=1 and model_id=$userid";
            }
        }else{
            $query="update `user` set active=$status where 1=1 and userid=$userid";
        }
        $result = $objdb->query($query);
        return $result;
        
    }
    
   public static function getcount($table='',$filter='') {
        $objdb = self::objdb();
       $querycount = "select count(*) ' count' from $table where 1=1 $filter";
        $result = $objdb->query($querycount);
        $data = $result->fetch_object();
        return $data->count;    
    }
    
    public function gettagssuggetion(){
       $tag=$_REQUEST['tag'];
       $fieldid=$_REQUEST['fieldid'];
       $objdb = $this->objdb();
       $query="select modeltag_name from modeltags where modeltag_name like '$tag%' limit 10 offset 0";
       $result = $objdb->query($query);
       while ($data = $result->fetch_object()) {    
        ?>
        <li ><a href="javascript:" class="tooltip1 tooltipstered" onclick="assigtagname('<?=$fieldid?>','<?=$data->modeltag_name?>')"><?=$data->modeltag_name?></a></li>
        <?php
        }
       
    }
    public function gettitlesuggetion(){
       $tag=$_REQUEST['tag'];
       $fieldid=$_REQUEST['fieldid'];
       $objdb = $this->objdb();
       $query="select model_title from model where model_title like '$tag%' limit 10 offset 0";
       $result = $objdb->query($query);
       while ($data = $result->fetch_object()) {    
        ?>
        <li ><a href="javascript:" class="tooltip1 tooltipstered" onclick="assigtagname('<?=$fieldid?>','<?=$data->model_title?>')"><?=$data->model_title?></a></li>
        <?php
        }
       
    }
    
    public static function getcatergorypolicy($catergoryid,$usergorupid){
       $objdb = self::objdb();
       $query="SELECT count(*)  count FROM `catergorypolicy` where 1=1 and catergory_id=$catergoryid and usergroup_id=$usergorupid and  isallowtoview=1";
     
      $result = $objdb->query($query);
       $data = $result->fetch_object();
         $count=$data->count; 
         return $count;
    }
    
    public static function getsitesettings(){
        $objdb = self::objdb();
       $query="SELECT * FROM `settings`";
     
      $result = $objdb->query($query);
      $data = $result->fetch_object();
      return $data;
    }
    
}

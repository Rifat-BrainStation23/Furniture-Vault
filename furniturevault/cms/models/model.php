<?php

require_once 'dbconnectiontrait.php';

class model{
    use dbconnection;
    public $id;
    public $title;
    public $image;
    public $zip;
    public $categoryid;
    public $subcategoryid;
    public $styleid;
    public $tags;
    public $description;
    public $model_is_active;
    public $userid;
    public $usergroup_id;
    public $manufacturerid;
    public $zip_size;
    public $image_size;
    public $image_name;
    public $zip_name;
    public $image_media_save_path;
    public $zip_media_save_path;
    public $date;
    public $style;
    public $fav_count;
    public $wish_count;
    public $modelwishlistfolder_id;
    public $modelwishlistfolder_name;
    public $modelinwishlist;
    public $total_fav_count;
    public $total_wish_count;
    public $modelrating_stars;
    public $model_downloads;

    public function btchmodelupload(){
        $objdb=  $this->objdb();
        $adminid= isset($_SESSION['Admin_ID'])?$_SESSION['Admin_ID']:0;
        $countdata=0;
        $insertid=$adminid;
        $total_file_size = '';


        foreach ($_FILES['modelfiles']['size'] as $ffvalue) 
        {
            $total_file_size = (int) $total_file_size + (int) $ffvalue;
        }
        
        if(!empty($total_file_size))
        {
            $total_file_size = round($total_file_size / 1024 / 1024 / 1024,4);
        }

        if($total_file_size<=1)
        {
            if($insertid>0){
                if (isset($_FILES) && $_FILES['modelfiles']['type'] != '') {
                   $current_year='upload_'.date('Y');
                $current_month='upload_'.date('m');
                $current_day='upload_'.date('d');   
                $dots='../../';
                $defaultpath = "massupload/$current_year/$current_month/$current_day/$insertid";

                // check for local drive space and create local path
                $localPath = $this->selectDrive() . ':/uploads/';

                $pathImg=$dots.$defaultpath;
                $path=$localPath.$defaultpath;
                if (!is_dir($pathImg)) {
                    mkdir($pathImg,0777, true);
                }
                if (!is_dir($path)) {
                    mkdir($path,0777, true);
                }
                $zipfiles=array();
                $imagefiles=array();
                $i=$j=1;
                $type_Array=array('jpeg','png','jpg');
            
                foreach($_FILES['modelfiles']['tmp_name'] as $value=>$key) {
                   
                    $filename=$_FILES['modelfiles']['name'][$value];
                    $ext = pathinfo($filename, PATHINFO_EXTENSION);
                    if (in_array(strtolower($ext), array("rar", "zip", "arj", "tar.gz", "gz", "tgz", "7z", "s7z", "sitx","tar"))) {
                    // if($ext=='zip' || $ext=='rar'){
                       $zipfiles[]= $value;
                    }
                    else if(in_array($ext,$type_Array)){
                       $imagefiles[]= $value;
                    }
                }
                
                foreach ($zipfiles as $key=>$value){
                    $_FILES['modelfiles']['name'][$value];
                    $zipfilename=$_FILES['modelfiles']['name'][$value];
                    $zipext = pathinfo($zipfilename, PATHINFO_EXTENSION);
                    $ziptype= explode('.', $zipfilename);
                    $zipprefilename=strtolower(str_Replace('.','',$ziptype[0]));
                    
                    $uniqueid=substr(date('dmyhis'),0,-2);
                    $uniqueid=$uniqueid*rand(1000, 1000);
                    $zipsavename=$zipprefilename.'_'.$insertid.'_'.$uniqueid.'.'.$zipext;
                    // $zipsavepath=$defaultpath.'/'.$zipsavename;
                    $zipsavepath=$path.'/'.$zipsavename;
                    $zipserverpath=$_FILES['modelfiles']['tmp_name'][$value];
                    $zipsize=$_FILES['modelfiles']['size'][$value];
                    
                        foreach ($imagefiles as $key=>$value){
                            $_FILES['modelfiles']['name'][$value];
                            $imgfilename=$_FILES['modelfiles']['name'][$value];
                            $imgext = pathinfo($imgfilename, PATHINFO_EXTENSION);
                            $imgtype= explode('.', $imgfilename);
                            $imgprefilename= strtolower(str_Replace('.','',$imgtype[0]));
                            if($zipprefilename==$imgprefilename){
                                $imageavailbale='true';
                                $uniqueid=substr(date('dmyhis'),0,-2);
                                $imgsavename=$imgprefilename.'_'.$insertid.'_'.$uniqueid.'.png';
                                $imagesavepath=$defaultpath.'/'.$imgsavename;
                                $imageserverpath=$_FILES['modelfiles']['tmp_name'][$value];
                                $imagesize=$_FILES['modelfiles']['size'][$value];
                            }else{
                                $imageavailbale='';
                            }
                            
                            if($imageavailbale=='true'){
                                $title=$this->title.' '. $countdata;
                                $queryinsert="insert into model(model_subcategory,userid,usergroup_id,style_id,manufacturer_id,model_title,model_description,model_tags,model_is_active)"
                                . "values('$this->subcategoryid','$adminid','1','$this->styleid','$this->manufacturerid','$title','$this->description','$this->tags','0')";
                                $objdb->query($queryinsert);
                                //$error=$objdb->error;
                                $modelinsertid = $objdb->insert_id;
                                
                                $dirpath=$pathImg.'/'.$imgsavename;
                                if (move_uploaded_file($imageserverpath,$dirpath)) {
                                    $queryinsert="insert into media(model_id,media_type,media_save_path,media_name,media_size,media_type_id) values('$modelinsertid','$imgext','$imagesavepath','$imgprefilename','$imagesize','1')";
                                    $objdb->query($queryinsert);
                                }
                                $dirpath=$path.'/'.$zipsavename;
                                if (move_uploaded_file($zipserverpath,$dirpath)) {
                                    $queryinsert="insert into media(model_id,media_type,media_save_path,media_name,media_size,media_type_id) values('$modelinsertid','$zipext','$zipsavepath','$zipprefilename','$zipsize','2')";
                                    $objdb->query($queryinsert);
                                }
                                $countdata++;
                            }
                            
                        }

                    $this->savemodeltags($this->tags);
                }
                
            }
               if($countdata==0){
                   throw new Exception("you have zero matching model");
               }
            }
        }
        else
        {
            throw new Exception("you can not upload more than 1 GB data");
        }
        echo "upload is complete";
    }
    
    
    public function usermodelupload(){
        $objdb=  $this->objdb();
        $userid= isset($_SESSION['User_Info_ID'])?$_SESSION['User_Info_ID']:0;
        $profileImage=$_FILES['imagefile'];
        extract($profileImage);
        if ($error == 4) {
            throw new Exception("No file selected");
        }

        
        if ($size > 1000000) {
            throw new Exception("file size too large maximum 1 MB allowed");
        }
        $imagesize=$size;
        $imagename=$name;
        $imageserverpath=$tmp_name;
        $imagedata = getimagesize($tmp_name);
        if (!$imagedata) {
            throw new Exception("Not a valid image");
        }
        if ($type == "image/jpeg" || $type == "image/png" || $type== "image/jpg") {
           
        }else{
             throw new Exception("File format not correct only jpeg/png allowed");
        }
      
        $zipname=$_FILES['zipfile']['name'];
        $zipsize= $_FILES['zipfile']['size'];
        $zipserverpath=$_FILES['zipfile']['tmp_name'];
        if ($zipsize > 1000000000) {
            throw new Exception("file size too large maximum 1 GB allowed");
        }
        $zipext = pathinfo($zipname, PATHINFO_EXTENSION);
       
        // if ($zipext == "rar" || $zipext == "zip" ) {
        if (in_array(strtolower($zipext), array("rar", "zip", "arj", "tar.gz", "gz", "tgz", "7z", "s7z", "sitx","tar"))) {
           
        }else{
             throw new Exception("File format not correct only rar/zip allowed");
        }
        
        
        
        
        $queryinsert="insert into model(model_subcategory,userid,usergroup_id,style_id,manufacturer_id,model_title,model_description,model_tags,model_is_active)"
            . "values('$this->subcategoryid','$userid','5','$this->styleid','$this->manufacturerid','$this->title','$this->description','$this->tags','0')";
            $objdb->query($queryinsert);
            $modelinsertid = $objdb->insert_id;
        
        $insertid=$modelinsertid;
        if($insertid>0){
            $current_year='upload_'.date('Y');
            $current_month='upload_'.date('m');
            $current_day='upload_'.date('d');

            $dots='../../';
            $defaultpath = "massupload/$current_year/$current_month/$current_day/$userid/$insertid";

            // check for local drive space and create local path
            $localPath = $this->selectDrive() . ':/uploads/';

            $pathImg=$dots.$defaultpath;
            $path=$localPath.$defaultpath;
            if (!is_dir($pathImg)) {
                mkdir($pathImg,0777, true);
            }
            if (!is_dir($path)) {
                mkdir($path,0777, true);
            }

            $uniqueid=substr(date('dmyhis'),0,-2);
            
            $imgfilename=$_FILES['imagefile']['name'];
            $imgext = pathinfo($imgfilename, PATHINFO_EXTENSION);
            $imgtype= explode('.', $imgfilename);
            $imgprefilename= strtolower(str_Replace('.','',$imgtype[0]));  
            $imageserverpath=$_FILES['imagefile']['tmp_name'];
            $imagesize=$_FILES['imagefile']['size'];
            $imgsavename=$imgprefilename.'_'.$insertid.'_'.$uniqueid.'.png';
            $imagesavepath=$defaultpath.'/'.$imgsavename;
           
            $zipfilename=$_FILES['zipfile']['name'];
            $zipext = pathinfo($zipfilename, PATHINFO_EXTENSION);
            $ziptype= explode('.', $zipfilename);
            $zipprefilename=strtolower(str_Replace('.','',$ziptype[0]));
            $uniqueid=substr(date('dmyhis'),0,-2);
            $uniqueid=$uniqueid*rand(1000, 1000);
            $zipserverpath=$_FILES['zipfile']['tmp_name'];
            $zipsize=$_FILES['zipfile']['size'];
            $zipsavename=$zipprefilename.'_'.$insertid.'_'.$uniqueid.'.'.$zipext;
            // $zipsavepath=$defaultpath.'/'.$zipsavename;
            $zipsavepath=$path.'/'.$zipsavename;
            
           
           
            $dirpath=$pathImg.'/'.$imgsavename;
            if (move_uploaded_file($imageserverpath,$dirpath)) {
            $queryinsert="insert into media(model_id,media_type,media_save_path,media_name,media_size,media_type_id)"
            . "values('$modelinsertid','$imgext','$imagesavepath','$imgprefilename','$imagesize','1')";
                $objdb->query($queryinsert);
            }
            $dirpath=$path.'/'.$zipsavename;
            if (move_uploaded_file($zipserverpath,$dirpath)) {
            $queryinsert="insert into media(model_id,media_type,media_save_path,media_name,media_size,media_type_id)"
            . "values('$modelinsertid','$zipext','$zipsavepath','$zipprefilename','$zipsize','2')";
                $objdb->query($queryinsert);
            }
            $this->savemodeltags($this->tags);
           
        }
        
    }

    public function selectDrive($i = 'D') {
        $drive = '';

        for ($i = 'D'; $i <= 'Z'; $i++) {
            if (file_exists($i . ':')) {
                if (disk_free_space($i . ':') > 6000000000) { //target is to keep around 5GB space on drive
                    $drive = $i;
                    break;
                }
            }
        }

        if(!empty($drive)){
            return $drive;
        } else {
            throw new Exception("There is no sufficient space in drives");
        }
    }

    //save tags to the db
    public  function savemodeltags($tags){
         $objdb= $this->objdb();
         $tags= explode(',', $tags);
         $userid= isset($_SESSION['User_Info_ID'])?$_SESSION['User_Info_ID']:0;
         foreach ($tags as $key=>$value){
               $query_Select="select modeltag_id
                     from modeltags
                     where modeltag_name='$value'
                    ";
               $result=$objdb->query($query_Select);
              
               if($result->num_rows==0){
                    $query="
                        insert into modeltags
                        (modeltag_name,userid)
                        values('$value',$userid);
                    ";
               $result=$objdb->query($query);
               }
         }
    
       
    }

    public static function getmodelfilter($categoryid){
        $objdb=  self::objdb();
        $fitler='';
        if($categoryid!=''){
            $query="select Subcategory_ID
                     from subcategory
                     where Category_ID=$categoryid
                    ";
            $result=$objdb->query($query);
            $subcatitem='0';
        while ($data=$result->fetch_object()){
            $subcatitem.=','.$data->Subcategory_ID;
        
        }
        $fitler=" and model_subcategory in($subcatitem)";
           return $fitler;
        }
    }
    public static function getmodelscount($categoryid){
        $objdb=  self::objdb();
        $fitler= self::getmodelfilter($categoryid);
        $querycount="select count(*) as count from model where 1=1 $fitler";
        $result=$objdb->query($querycount);
        $data=$result->fetch_object();
        $count=$data->count;
        return $count;
    }
    
    
    
    public static function getusermodels($fitler='',$categoryid='',$start='',$limit='',$pagination=''){
         $objdb=  self::objdb();
        
        $queryselect="SELECT *,(
                            select media_name 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=1
                            limit 1 offset 0
                            )as image_name
                            ,(
                            select media_name 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=2
                            limit 1 offset 0
                            )as zip_name
                            ,(
                            select media_save_path 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=1
                            limit 1 offset 0
                            )as image_media_save_path
                            ,(
                            select  media_save_path 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=2
                            limit 1 offset 0
                            )as zip_media_save_path
                            ,(
                            select category_id 
                            from subcategory scat
                            where scat.Subcategory_ID=model.model_subcategory
                            limit 1 offset 0
                            )as category_id
                        FROM model model
                        where 1=1
                        $fitler
                        
                        order by model_id desc
                        $pagination
                  
                       ";
    
        $result=$objdb->query($queryselect);
        if($objdb->errno){
            throw new Exception("Error in Query $objdb->error");
        }
        
        $models=array();
        while ($data=$result->fetch_object()){
            $temp=new model();
            $temp->id=$data->model_id;
            $temp->title=$data->model_title;
            $temp->tags=$data->model_tags;
            $temp->description=$data->	model_description;
            $temp->styleid=$data->style_id;
            $temp->subcategoryid=$data->model_subcategory;
            $temp->model_is_active=$data->model_is_active;
            $temp->userid=$data->userid;
            $temp->usergroup_id=$data->usergroup_id;
            $temp->categoryid=$data->category_id;
          
            $temp->image_name=$data->image_name;
            $temp->zip_name=$data->zip_name;
            $temp->manufacturerid=$data->manufacturer_id;
            $temp->image_media_save_path=$data->image_media_save_path;
            $temp->zip_media_save_path=$data->zip_media_save_path;
            $models[]=$temp;
        }
        return $models;
    }

    public static function getmodels($filter='',$pagination=''){
      $objdb=  self::objdb();
        $queryselect="SELECT *,(
                            select media_name 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=1
                            limit 1 offset 0
                            )as image_name
                            ,(
                            select media_name 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=2
                            limit 1 offset 0
                            )as zip_name
                            ,(
                            select media_size 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=1
                            limit 1 offset 0
                            )as image_size
                            ,(
                            select media_size 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=2
                            limit 1 offset 0
                            )as zip_size
                            ,(
                            select category_id 
                            from subcategory scat
                            where scat.Subcategory_ID=model.model_subcategory
                            limit 1 offset 0
                            )as category_id
                            ,(
                            select count(modelfavourite_id)
                            from modelfavourite mfav
                            where mfav.model_id = model.model_id
                            ) as fav_count 
                            ,(
                            select count(modelwishlist_id)
                            from modelwishlist mwish
                            where mwish.model_id = model.model_id
                            ) as wish_count
                            ,(
                            SELECT round(AVG(modelrating_stars),1) 
                            FROM modelrating mrating 
                            WHERE mrating.model_id=model.model_id
                            ) as modelrating_stars
                            ,(
                            select media_save_path 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=1
                            limit 1 offset 0
                            )as image_media_save_path
                            ,(
                            select nickname 
                            from user user
                            where user.userid=model.userid
                            limit 1 offset 0
                            )as nickname
                            ,(
                            select style_name 
                            from style style
                            where style.style_id=model.	style_id
                            limit 1 offset 0
                            )as style
                        FROM model model
                        where 1=1
                        $filter
                        order by model_id desc
                        $pagination
                  
                       ";
                       // echo $queryselect;exit;
        $result=$objdb->query($queryselect);
        if($objdb->errno){
            throw new Exception("Error in Query");
        }
        
        $models=array();
        while ($data=$result->fetch_object()){
            $temp=new model();
            $temp->id=$data->model_id;
            $temp->title=$data->model_title;
            $temp->tags=$data->model_tags;
            $temp->description=$data->	model_description;
            $temp->styleid=$data->style_id;
            $temp->subcategoryid=$data->model_subcategory;
            $temp->model_is_active=$data->model_is_active;
            $temp->userid=$data->userid;
            $temp->usergroup_id=$data->usergroup_id;
            $temp->categoryid=$data->category_id;
            $temp->zip_size=$data->zip_size;
            $temp->image_size=$data->image_size;
            $temp->image_name=$data->image_name;
            $temp->zip_name=$data->zip_name;
            $temp->manufacturerid=$data->manufacturer_id;
            $temp->image_media_save_path=$data->image_media_save_path;
            $temp->nickname=$data->nickname;
            $temp->date=$data->model_created_date;
            $temp->style=$data->style;
            $temp->fav_count = $data->fav_count;
            $temp->wish_count = $data->wish_count;
            $temp->modelrating_stars = $data->modelrating_stars;
            $temp->model_downloads = $data->model_downloads;
            $models[]=$temp;
        }
        return $models;
        
    
    }
    public static function getpendingapprovemodels($filter='',$pagination=''){
         $objdb=  self::objdb();
        
        $queryselect="SELECT *,(
                            select nickname 
                            from user user
                            where user.userid=model.userid
                            limit 1 offset 0
                            )as nickname
                            ,(
                            select media_save_path 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=1
                            limit 1 offset 0
                            )as image_path
                           
                        FROM model model
                        where 1=1
                        $filter
                        order by model_id desc
                        $pagination
                  
                       ";
    
         $result=$objdb->query($queryselect);
       
        if($objdb->errno){
            throw new Exception("Error in Query");
        }
          return $result;
    }

    public static function getmodeldetail($id){
        $objdb=  self::objdb();
         $queryselect="select * from models where Category_ID=$id";
        $result=$objdb->query($queryselect);
        if($objdb->errno){
            throw new Exception("Error in Query");
        }
       
        $models=array();
        while ($data=$result->fetch_object()){
            $temp=new model();
            $temp->id=$data->Item_ID;
            $temp->name=$data->Item_Name;
            $temp->categoryid=$data->Category_ID;
            $temp->url=$data->Item_Url;
           
        
            $models[]=$temp;
        }
        return $models;
        
    }
        public function modeldetail($id){
          $objdb= $this->objdb();
      $queryselect="select * from models where Item_ID=$id";
        $result=$objdb->query($queryselect);

        if($objdb->errno){
            throw new Exception("Error in Query");
        }
        if($result->num_rows==0){
            throw new Exception("No models Found");
        }
      
       $data=$result->fetch_object();
          
       $this->id=$data->Item_ID;
        $this->name=$data->Item_Name;
        $this->categoryid=$data->Category_ID;
        $this->url=$data->Item_Url;
    }


   public function updatemodel(){
            $objdb=  $this->objdb();
            $queryupdate="update models set Item_Name='$this->name',Item_Url='$this->url',Category_ID='$this->categoryid' where 	Item_ID=$this->id";
            $objdb->query($queryupdate);
            if($objdb->errno){
                throw new Exception("UNable to update-$queryupdate");
            }
        
    }
      

    public function delete($id){
         $objdb = $this->objdb();
        $querydel = "delete from models where Item_ID=$id";
        $result = $objdb->query($querydel);
        
    } 
    public function getmodetags($filter='',$pagination=''){
        $objdb= $this->objdb();
      $queryselect="select * from modeltags where 1=1 $filter  order by modeltag_id desc $pagination";
        $result=$objdb->query($queryselect);
        return $result;
    }
    
    
  public static function formatSizeUnits($bytes)
    {
        if ($bytes >= 1073741824)
        {
            $bytes = number_format($bytes / 1073741824, 2) . ' GB';
        }
        elseif ($bytes >= 1048576)
        {
            $bytes = number_format($bytes / 1048576, 2) . ' MB';
        }
        elseif ($bytes >= 1024)
        {
            $bytes = number_format($bytes / 1024, 2) . ' KB';
        }
        elseif ($bytes > 1)
        {
            $bytes = $bytes . ' bytes';
        }
        elseif ($bytes == 1)
        {
            $bytes = $bytes . ' byte';
        }
        else
        {
            $bytes = '0 bytes';
        }

        return $bytes;
}
public static function modelmediapath($modelid,$typeid){
    
        $objdb= self::objdb();
      $queryselect="select * from media where 1=1 and model_id=$modelid and media_type_id=$typeid";
        $result=$objdb->query($queryselect);
        return $result;
        
}

public function modelfavourite() {
    $objdb=  $this->objdb();
    $query = "select * from modelfavourite where model_id = $this->id and user_id = $this->userid";
    $result = $objdb->query($query);
    if($result->num_rows > 0){
        $delete = "delete from modelfavourite where model_id = $this->id and user_id = $this->userid";
        $objdb->query($delete);
        echo FALSE;
    }
    else{
            $queryinsert="INSERT INTO `modelfavourite`(`model_id`, `user_id`) VALUES ($this->id, $this->userid)";
            $objdb->query($queryinsert);
            echo TRUE;
    }
}

public function getdetailfavourite($modelid,$userid) {
    $objdb=  $this->objdb();
    $query = "select * from modelfavourite where model_id = $modelid and user_id = $userid";
    $result = $objdb->query($query);
    if($result->num_rows > 0){
        return TRUE;
    } else {
        return FALSE;    
    }
}

public static function getfavouritemodels($userid){
      $objdb=  self::objdb();
        $queryselect="SELECT *,(
                            select media_name 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=1
                            limit 1 offset 0
                            )as image_name
                            ,(
                            select media_name 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=2
                            limit 1 offset 0
                            )as zip_name
                            ,(
                            select media_size 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=1
                            limit 1 offset 0
                            )as image_size
                            ,(
                            select media_size 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=2
                            limit 1 offset 0
                            )as zip_size
                            ,(
                            select category_id 
                            from subcategory scat
                            where scat.Subcategory_ID=model.model_subcategory
                            limit 1 offset 0
                            )as category_id
                            ,(
                            select count(modelfavourite_id)
                            from modelfavourite mfav
                            where mfav.user_id = $userid
                            ) as fav_count 
                            ,(
                            select count(modelfavourite_id)
                            from modelfavourite mfav
                            where mfav.model_id = model.model_id
                            ) as total_fav_count
                            ,(
                            SELECT round(AVG(modelrating_stars),1) 
                            FROM modelrating mrating 
                            WHERE mrating.model_id=model.model_id
                            ) as modelrating_stars
                            ,(
                            select count(modelwishlist_id)
                            from modelwishlist mwish
                            where mwish.model_id = modelfavourite.model_id 
                            ) as total_wish_count 
                            ,(
                            select media_save_path 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=1
                            limit 1 offset 0
                            )as image_media_save_path
                            ,(
                            select nickname 
                            from user user
                            where user.userid=model.userid
                            limit 1 offset 0
                            )as nickname
                            ,(
                            select style_name 
                            from style style
                            where style.style_id=model.	style_id
                            limit 1 offset 0
                            )as style
                        FROM model model join modelfavourite 
                        where modelfavourite.model_id = model.model_id
                        and modelfavourite.user_id = $userid
                        order by modelfavourite.modelfavourite_id desc
                  
                       ";
   // echo $queryselect;
        $result=$objdb->query($queryselect);
        if($objdb->errno){
            throw new Exception("Error in Query");
        }
        
        $models=array();
        while ($data=$result->fetch_object()){
            $temp=new model();
            $temp->id=$data->model_id;
            $temp->title=$data->model_title;
            $temp->tags=$data->model_tags;
            $temp->description=$data->	model_description;
            $temp->styleid=$data->style_id;
            $temp->subcategoryid=$data->model_subcategory;
            $temp->model_is_active=$data->model_is_active;
            $temp->userid=$data->userid;
            $temp->usergroup_id=$data->usergroup_id;
            $temp->categoryid=$data->category_id;
            $temp->zip_size=$data->zip_size;
            $temp->image_size=$data->image_size;
            $temp->image_name=$data->image_name;
            $temp->zip_name=$data->zip_name;
            $temp->manufacturerid=$data->manufacturer_id;
            $temp->image_media_save_path=$data->image_media_save_path;
            $temp->nickname=$data->nickname;
            $temp->date=$data->model_created_date;
            $temp->style=$data->style;
            $temp->fav_count = $data->fav_count;
            $temp->total_fav_count = $data->total_fav_count;
            $temp->total_wish_count = $data->total_wish_count;
            $temp->modelrating_stars = $data->modelrating_stars;
            $temp->model_downloads = $data->model_downloads;
            $models[]=$temp;
        }
        return $models;
        
    
    }
    
    public function getmodelwishlistfolder($userid, $wishlistfilter) {
        $objdb=  $this->objdb();
    $query = "SELECT * FROM `modelwishlistfolder` WHERE user_id = $userid";
    $result = $objdb->query($query);
    if($objdb->errno){
            throw new Exception("Error in Query");
        }
        
        $wishlist=array();
        while ($data=$result->fetch_object()){
            $temp=new model();
          $temp->modelwishlistfolder_id=$data->modelwishlistfolder_id;
            $temp->modelwishlistfolder_name = $data->modelwishlistfolder_name;
                $query = "SELECT * FROM `modelwishlist` WHERE user_id = $userid and modelwishlistfolder_name = '$data->modelwishlistfolder_name' $wishlistfilter";
    $result1 = $objdb->query($query);
    if($result1->num_rows>0){
        $temp->modelinwishlist = 'yes';
    }
            $wishlist[]=$temp;
        }
        return $wishlist;
    }
    
    public function modelwishlist($wishlistfolder) {
        $objdb=  $this->objdb();
    $query = "SELECT * FROM `modelwishlistfolder` WHERE user_id = $this->userid and modelwishlistfolder_name = '$wishlistfolder'";
    $result = $objdb->query($query);
    if($result->num_rows == 0){
        $query = "INSERT INTO `modelwishlistfolder`(`modelwishlistfolder_name`, `user_id`) VALUES ('$wishlistfolder',$this->userid)";
    $objdb->query($query);
    }
    $query = "SELECT * FROM `modelwishlist` WHERE user_id = $this->userid and modelwishlistfolder_name = '$wishlistfolder' and model_id = $this->id";
    $result = $objdb->query($query);
    if($result->num_rows == 0){
        $query = "INSERT INTO `modelwishlist`(`modelwishlistfolder_name`, model_id, `user_id`) VALUES ('$wishlistfolder',$this->id,$this->userid)";
    $objdb->query($query);
    }
    }
    public function addwishlistfolder() {
        $objdb=  $this->objdb();
    $query = "SELECT * FROM `modelwishlistfolder` WHERE user_id = $this->userid and modelwishlistfolder_name = '$this->modelwishlistfolder_name'";
    $result = $objdb->query($query);
    if($result->num_rows == 0){
        $query = "INSERT INTO `modelwishlistfolder`(`modelwishlistfolder_name`, `user_id`) VALUES ('$this->modelwishlistfolder_name',$this->userid)";
    $objdb->query($query);
    }
    }
    
    public function updatewishlistfolder() {
        $objdb=  $this->objdb();
        $query = "SELECT * FROM `modelwishlistfolder` WHERE user_id = $this->userid and modelwishlistfolder_id = '$this->modelwishlistfolder_id'";
    $result = $objdb->query($query);
    while($data=$result->fetch_object()){
        $oldfolder = $data->modelwishlistfolder_name;
    }
       $query = "update `modelwishlistfolder` set `modelwishlistfolder_name`='$this->modelwishlistfolder_name' WHERE user_id = $this->userid and modelwishlistfolder_id = '$this->modelwishlistfolder_id'";
    $objdb->query($query); 
       $query = "update `modelwishlist` set `modelwishlistfolder_name`='$this->modelwishlistfolder_name' WHERE user_id = $this->userid and modelwishlistfolder_name = '$oldfolder'";
    $objdb->query($query); 
    }
    
    public static function getwishlistmodels($userid,$wishlistfolder,$id=''){
      $objdb=  self::objdb();
      $filter="";
      if($id!=''){
          $filter="and modelwishlist.modelwishlistfolder_name =
                    (
                    select modelwishlistfolder_name
                    from modelwishlistfolder
                    where modelwishlistfolder_Id=$id
                    )";
      }else{
          $filter="and modelwishlist.modelwishlistfolder_name = '$wishlistfolder' ";
      }
        $queryselect="SELECT *,(
                            select media_name 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=1
                            limit 1 offset 0
                            )as image_name
                            ,(
                            select media_name 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=2
                            limit 1 offset 0
                            )as zip_name
                            ,(
                            select media_size 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=1
                            limit 1 offset 0
                            )as image_size
                            ,(
                            select media_size 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=2
                            limit 1 offset 0
                            )as zip_size
                            ,(
                            select category_id 
                            from subcategory scat
                            where scat.Subcategory_ID=model.model_subcategory
                            limit 1 offset 0
                            )as category_id
                            ,(
                            select count(modelfavourite_id)
                            from modelfavourite mfav
                            where mfav.model_id = modelwishlist.model_id
                            ) as total_fav_count
                            ,(
                            select count(modelwishlist_id)
                            from modelwishlist mwish
                            where mwish.model_id = model.model_id 
                            ) as total_wish_count 
                            ,(
                            select count(modelwishlist_id)
                            from modelwishlist mwish
                            where mwish.user_id = $userid and mwish.modelwishlistfolder_name = '$wishlistfolder'
                            ) as wish_count 
                            ,(
                            SELECT round(AVG(modelrating_stars),1) 
                            FROM modelrating mrating 
                            WHERE mrating.model_id=model.model_id
                            ) as modelrating_stars
                            ,(
                            select modelwishlistfolder_id
                            from modelwishlistfolder mwishfolder
                            where mwishfolder.user_id = $userid and mwishfolder.modelwishlistfolder_name = '$wishlistfolder'
                            ) as modelwishlistfolder_id 
                            ,(
                            select media_save_path 
                            from media med
                            where med.model_id=model.model_id
                            and med.media_type_id=1
                            limit 1 offset 0
                            )as image_media_save_path
                            ,(
                            select nickname 
                            from user user
                            where user.userid=model.userid
                            limit 1 offset 0
                            )as nickname
                            ,(
                            select style_name 
                            from style style
                            where style.style_id=model.	style_id
                            limit 1 offset 0
                            )as style
                        FROM model model join modelwishlist 
                        where modelwishlist.model_id = model.model_id
                        and modelwishlist.user_id = $userid 
                        $filter
                        order by modelwishlist.modelwishlist_id desc
                  
                       ";
    //echo $queryselect;
        $result=$objdb->query($queryselect);
        if($objdb->errno){
            throw new Exception("Error in Query");
        }
        
        $models=array();
        while ($data=$result->fetch_object()){
            $temp=new model();
            $temp->id=$data->model_id;
            $temp->title=$data->model_title;
            $temp->tags=$data->model_tags;
            $temp->description=$data->	model_description;
            $temp->styleid=$data->style_id;
            $temp->subcategoryid=$data->model_subcategory;
            $temp->model_is_active=$data->model_is_active;
            $temp->userid=$data->userid;
            $temp->usergroup_id=$data->usergroup_id;
            $temp->categoryid=$data->category_id;
            $temp->zip_size=$data->zip_size;
            $temp->image_size=$data->image_size;
            $temp->image_name=$data->image_name;
            $temp->zip_name=$data->zip_name;
            $temp->manufacturerid=$data->manufacturer_id;
            $temp->image_media_save_path=$data->image_media_save_path;
            $temp->nickname=$data->nickname;
            $temp->date=$data->model_created_date;
            $temp->style=$data->style;
            $temp->wish_count = $data->wish_count;
            $temp->total_fav_count = $data->total_fav_count;
            $temp->total_wish_count = $data->total_wish_count;
            $temp->modelwishlistfolder_id = $data->modelwishlistfolder_id;
            $temp->modelrating_stars = $data->modelrating_stars;  
            $temp->model_downloads = $data->model_downloads;
            $models[]=$temp;
        }
        return $models;
        
    
    }
    
    public function deletemodelwishlist($wishlistfolder) {
        $objdb=  $this->objdb();
    $query = "SELECT * FROM `modelwishlist` WHERE user_id = $this->userid and modelwishlistfolder_name = '$wishlistfolder' and model_id = $this->id";
    $result = $objdb->query($query);
    if($result->num_rows > 0){
        $query = "delete FROM `modelwishlist` WHERE user_id = $this->userid and modelwishlistfolder_name = '$wishlistfolder' and model_id = $this->id";
    $objdb->query($query);
    }
    }
    
    public function deletemodelwishlistfolder($wishlistfolder) {
        $objdb=  $this->objdb();
    $query = "SELECT * FROM `modelwishlistfolder` WHERE user_id = $this->userid and modelwishlistfolder_name = '$wishlistfolder'";
    $result = $objdb->query($query);
    if($result->num_rows > 0){
        $query = "delete FROM `modelwishlistfolder` WHERE user_id = $this->userid and modelwishlistfolder_name = '$wishlistfolder'";
    $objdb->query($query);
    }
    $query = "delete FROM `modelwishlist` WHERE user_id = $this->userid and modelwishlistfolder_name = '$wishlistfolder'";
    $objdb->query($query);
    }
    
    public function modelrating() {
        $objdb=  $this->objdb();
    $query = "SELECT * FROM modelrating WHERE user_id = $this->userid and model_id = $this->id";
    $result = $objdb->query($query);
    if($result->num_rows > 0){
        $query = "update modelrating set modelrating_stars=$this->modelrating_stars WHERE user_id = $this->userid and model_id = $this->id";
    $objdb->query($query);
    }
    else{
        $query = "INSERT INTO `modelrating`(`model_id`, `user_id`, `modelrating_stars`) VALUES ($this->id,$this->userid,$this->modelrating_stars)";
        $objdb->query($query);
    }
    
    }
    
    public function getmodelrating($model_id) {
        $objdb=  $this->objdb();
    $query = "SELECT * FROM modelrating WHERE model_id = $model_id";
    $result = $objdb->query($query);
    $rated_by = 0;
    $rating = 0;
    while($data = $result->fetch_object()){
        $rating = $rating + (int)$data->modelrating_stars;
        $rated_by++;
    }
    if($rated_by == 0 or $rating == 0){
        $average = 0;
    }else{
        $average = $rating/$rated_by;  
    }
    
    return number_format($average,1);
    }
    
    public function getmodeluserrating($userid, $model_id) {
        $objdb=  $this->objdb();
    $query = "SELECT * FROM modelrating WHERE model_id = $model_id and user_id = $userid";
    $result = $objdb->query($query);
    $rating = 0;
    while($data = $result->fetch_object()){
        $rating = $rating + (int)$data->modelrating_stars;
    }
    return $rating;
    }
    
    public function gettotalwishlistandfavourite($userid) {
        $objdb=  $this->objdb();
        $total = 0;
    $query = "SELECT count(modelwishlist_id) as wishlistcount FROM modelwishlist WHERE user_id = $userid ";
    $result = $objdb->query($query);
    if($data = $result->fetch_object()){
        $total = $total + (int)$data->wishlistcount;
    }
    $query = "SELECT count(modelfavourite_id) as favouritecount FROM modelfavourite WHERE user_id = $userid";
    $result = $objdb->query($query);
    if($data = $result->fetch_object()){
        $total = $total + (int)$data->favouritecount;
    }
    return $total;
    }
    
    public function modeldonwloadincrement($modelid) {
        $objdb=  model::objdb();
        $query = "update model set model_downloads=model_downloads+1 where model_id=$modelid";
        $objdb->query($query);
    }
    
    
    public function savecomment($comment,$modelid){
         $objdb=  model::objdb();
         $userid=isset($_SESSION['User_Info_ID'])?$_SESSION['User_Info_ID']:'';
        $query = "insert into modelcomments (model_id,userid,comment)values('$modelid','$userid','$comment')";
        $objdb->query($query);
    }
    
    public function germodelcomments($modelid){
         $objdb=  model::objdb();
        $query = "select *,(
                            select nickname 
                            from user user
                            where user.userid=comment.userid
                            limit 1 offset 0
                            )as nickname
                            from modelcomments comment where model_id=$modelid";
        $result=$objdb->query($query);
        return $result;
    }
}

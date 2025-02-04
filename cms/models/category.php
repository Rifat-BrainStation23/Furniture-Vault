<?php

require_once 'dbconnectiontrait.php';

class category{
    use dbconnection;
    public $id;
    public $name;
    public $date;
    public $catergoryview;
    
    public function addcategory(){
        $objdb=  $this->objdb();
        $queryinsert="insert into category(Category_Name)values('$this->name')";
        $objdb->query($queryinsert);
        if($objdb->errno){
            throw new Exception("Unable to add category-$objdb->error");
        }
        $last_id = $objdb->insert_id;
       
        
    }
     public static function getcategory(){
        $objdb=  self::objdb();
        $queryselect="select * from category";
        $result=$objdb->query($queryselect);
        if($objdb->errno){
            throw new Exception("Error in Query");
        }
        if($result->num_rows==0){
            throw new Exception("No category Found");
        }
        $category=array();
        while ($data=$result->fetch_object()){
            $temp=new category();
            $temp->id=$data->Category_ID;
            $temp->name=$data->Category_Name;
            $temp->date=$data->Category_Created_Date;
        
            $category[]=$temp;
        }
        return $category;
        
    }
        public function categorydetail($id){
          $objdb= $this->objdb();
      $queryselect="select * from category where Category_ID=$id";
        $result=$objdb->query($queryselect);

        if($objdb->errno){
            throw new Exception("Error in Query");
        }
        if($result->num_rows==0){
            throw new Exception("No Category Found");
        }
      
       $data=$result->fetch_object();
          
       $this->id=$data->Category_ID;
        $this->name=$data->Category_Name;
       
    }
       public function updatecategory(){
            $objdb=  $this->objdb();
            $queryupdate="update category set Category_Name='$this->name' where Category_ID=$this->id";
            $objdb->query($queryupdate);
            if($objdb->errno){
                throw new Exception("UNable to update-$queryupdate");
            }
  
    }
    
     public function delete($id){
         $objdb = $this->objdb();
        $querydel = "delete from category where Category_ID=$id";
        $result = $objdb->query($querydel);
      
       
    } 
    public static function getcount() {
        $objdb = self::objdb();
        $querycount = "select count(Category_ID) ' count' from category";
        $result = $objdb->query($querycount);
        $data = $result->fetch_object();
        return $data->count;    
    }
    
    public function updategrouppolicy(){
        $val=$_REQUEST['fieldvalue'];
        $categoryid=$_REQUEST['categoryid'];
        $usergourpid=$_REQUEST['usergorupid'];
        $objdb = $this->objdb();
        $querydel = "delete from catergorypolicy where catergory_id=$categoryid and usergroup_id=$usergourpid";
        $result = $objdb->query($querydel);
        
        $queryinsert="insert into catergorypolicy(catergory_id,usergroup_id,isallowtoview)values('$categoryid','$usergourpid',$val)";
        $result = $objdb->query($queryinsert);
        if($result){
            echo "Success";
        }
        
    }
    
    
}



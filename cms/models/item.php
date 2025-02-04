<?php

require_once 'dbconnectiontrait.php';

class item{
    use dbconnection;
    public $id;
    public $name;
    public $categoryid;
    public $categoryname;
    public $date;
    public $url;
    
    public function additem(){
        $objdb=  $this->objdb();
        $queryinsert="insert into items(Category_ID,Item_Name,Item_Url)"
                . "values('$this->categoryid','$this->name','$this->url')";
        $objdb->query($queryinsert);
        if($objdb->errno){
            throw new Exception("Unable to add item-$objdb->error");
        }
        $last_id = $objdb->insert_id;
      
        
    }
    public static function getitems($categoryid){
        $objdb=  self::objdb();
        $fitler='';
        if($categoryid!=''){
            $fitler="where Category_ID=$categoryid";
        }
        $queryselect="SELECT *,
                        (
                            SELECT Category_Name
                            FROM category
                            WHERE Category_ID=item.Category_ID
                        )as categoryname
                        FROM items item
                        $fitler
                       ";
        $result=$objdb->query($queryselect);
        if($objdb->errno){
            throw new Exception("Error in Query");
        }
        if($result->num_rows==0){
            throw new Exception("No item Found");
        }
        $items=array();
        while ($data=$result->fetch_object()){
            $temp=new item();
            $temp->id=$data->Item_ID;
            $temp->name=$data->Item_Name;
            $temp->categoryname=$data->categoryname;
            $temp->date=$data->Item_Created_Date;
            $temp->url=$data->Item_Url;
        
            $items[]=$temp;
        }
        return $items;
        
    }
    public static function getitemdetail($id){
        $objdb=  self::objdb();
         $queryselect="select * from items where Category_ID=$id";
        $result=$objdb->query($queryselect);
        if($objdb->errno){
            throw new Exception("Error in Query");
        }
        if($result->num_rows==0){
            throw new Exception("No item Found");
        }
        $items=array();
        while ($data=$result->fetch_object()){
            $temp=new item();
            $temp->id=$data->Item_ID;
            $temp->name=$data->Item_Name;
            $temp->categoryid=$data->Category_ID;
            $temp->url=$data->Item_Url;
           
        
            $items[]=$temp;
        }
        return $items;
        
    }
        public function itemdetail($id){
          $objdb= $this->objdb();
      $queryselect="select * from items where Item_ID=$id";
        $result=$objdb->query($queryselect);

        if($objdb->errno){
            throw new Exception("Error in Query");
        }
        if($result->num_rows==0){
            throw new Exception("No items Found");
        }
      
       $data=$result->fetch_object();
          
       $this->id=$data->Item_ID;
        $this->name=$data->Item_Name;
        $this->categoryid=$data->Category_ID;
        $this->url=$data->Item_Url;
    }


   public function updateitem(){
            $objdb=  $this->objdb();
            $queryupdate="update items set Item_Name='$this->name',Item_Url='$this->url',Category_ID='$this->categoryid' where 	Item_ID=$this->id";
            $objdb->query($queryupdate);
            if($objdb->errno){
                throw new Exception("UNable to update-$queryupdate");
            }
        
    }
           public static function getcount() {
        $objdb = self::objdb();
        $querycount = "select count(Item_ID) ' count' from items";
        $result = $objdb->query($querycount);
        $data = $result->fetch_object();
        return $data->count;    
    }

    public function delete($id){
         $objdb = $this->objdb();
        $querydel = "delete from items where Item_ID=$id";
        $result = $objdb->query($querydel);
        
       
    } 
    
}

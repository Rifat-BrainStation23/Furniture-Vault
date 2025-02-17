<?php



require_once('dbconnectiontrait.php');

class order {

    use dbconnection;
    public $id;
    public $productname;
    public $username;
    public $useremail;
    public $usercontact;
    public $useraddress;
    public $ordertime;



    
    public static function getcount() {
        $objdb = self::objdb();
        $querycount = "select count(*) ' count' from orders";
        $result = $objdb->query($querycount);
        $data = $result->fetch_object();
        return $data->count;
    }
    public static function getorders(){
        $objdb= self::objdb();
        $queryselect="select * from orders order by id desc";
        $result=$objdb->query($queryselect);
        if($objdb->errno){
            throw new Exception("Error in select query");
        }
        if(!$result->num_rows>0){
            throw new Exception("No Order found");
        }
        $orders=array();
        while($data=$result->fetch_object()){
            $temp=new order();
            $temp->id=$data->id;
            $temp->productname=$data->productname;
            $temp->username=$data->username;
            $temp->useremail=$data->useremail;
            $temp->usercontact=$data->usercontact;
            $temp->useraddress=$data->useraddress;
            $temp->ordertime=$data->ordertime;
      
            $orders[]=$temp;
        }
        return $orders;
    }
      public function addorder(){
        $objdb=  $this->objdb();
        $queryinsert="insert into orders(productname, `username`,`useremail`,usercontact, useraddress,ordertime)"
                . "values('$this->productname','$this->username','$this->useremail','$this->usercontact','$this->useraddress',CURRENT_DATE)";
        $objdb->query($queryinsert);
        if($objdb->errno){
            throw new Exception("Unable to add order-");
        }
    }
    
    public function deleteorders($id){
         $objdb = $this->objdb();
        $querydel = "delete from orders where id=$id";
        $result = $objdb->query($querydel);
       
       
    } 
       
       
    

}

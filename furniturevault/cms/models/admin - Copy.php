<?php
require_once 'dbconnectiontrait.php';

class admin  {
    use dbconnection;
    private $adminid;
    private $username;
    private $email;
    private $password;
//    private $secretcode;
    private $loginstatus;
    
    
    public $name;
    public $title;
    public $headerlogo;
    public $footerlogo;
    public $favicon;
    public $copyright;

    public function __set($name, $value) {
          $method = "set$name";
        if (!method_exists($this, $method)) {
            throw new Exception("set method not found for  $name");
        }

        $this->$method($value);
    }

    public function __get($name) {
        $method = "get$name";
        if (!method_exists($this, $method)) {
            throw new Exception("GET Method not found for $name");
        }
        return $this->$method();
    }

    private function setusername($username) {
//        $reg = "/^[a-z0-9]{6,16}$/";
//        if (!preg_match($reg, $username)) {
//            throw new Exception("Invalid/missing username");
//        }
        $this->username=$username;
    }

    private function getusername() {
        return $this->username;
    }

    private function setemail($email) {
        $reg = "/^[a-z][a-z0-9_.-]*@[a-z0-9]+.[a-z]{2,6}/";
        if (!preg_match($reg, $email)) {
            throw new Exception("Invalid/missing Email");
        }
        $this->email=$email;
    }

    private function getemail() {
                return $this->email;
    }

    private function setpassword($password) {
        $reg = "/^([a-z0-9]{6,16})$/i";
        if (!preg_match($reg, $password)) {
            throw new Exception("Invalid/Missing password");
        }
        $this->password=sha1($password);
    }

    private function getpassword() {
                return $this->password;
    }

//    private function setsecretcode($secretcode) {
//       $reg = "/^[a-z0-9]{8,16}$/i";
//        if (!preg_match($reg, $secretcode)) {
//            throw new Exception("Invalid/Missing secretcode");
//        }
//        $this->secretcode= sha1($secretcode);
//    }
//
//    private function getsecretcode() {
//                return $this->secretcode;
//    }
    private function getloggedin() {
                return $this->loginstatus;
    }
    private function setadminid($adminid){
        $this->adminid=$adminid;
    }
    private function getadminid(){
        return $this->adminid;
    }

    

    ////////////////////////////////////////////////////////////////////////////
    ////////PUBLIC FUNCTIONS//////////////////////////////////////
    //////////////////////////////////////
    public static function checkpassword($password) {
        $reg = "/^([a-z0-9]{6,16})$/i";
        if (!preg_match($reg, $password)) {
            throw new Exception("Invalid/Missing new Password");
        }
    }

    public static function comparepassword($password, $cpassword) {
        if ($cpassword != $password) {
            throw new Exception("Password did not match");
        }
    }
    public function changepassword($password) {
        $objdb = $this->objdb();
        $querymatch = "select adminid from admin where adminid='$this->adminid'"
                . " and password='$this->password'";
        $result = $objdb->query($querymatch);
        if ($objdb->errno) {
            throw new Exception("Error in matching password -$objdb->error");
        }
        if (!$result->num_rows > 0) {
            throw new Exception("Your old password did not match");
        }
        $password = sha1($password);

        $result = $queryupdate = "update admin set password='$password' where adminid=$this->adminid and password='$this->password'";
        $objdb->query($queryupdate);
        if ($objdb->errno) {
            throw new Exception("error in update query -$objdb->error");
        }
        if (!$objdb->affected_rows) {
            throw new Exception("Your old and new password could not be same");
        }
    }
    
    public function signin(){
        $objdb= $this->objdb();
        $queryinsert="select adminid,username from admin where "
                . "username='$this->username' and"
                . " password='$this->password'";

        $result=$objdb->query($queryinsert);
        if($objdb->errno){
            throw new Exception("Error in select query -$objdb->error");
        }
        if(!$result->num_rows>0)
        {
            throw new Exception("Invalid Username/Password");
        }
          $data = $result->fetch_object();
         $this->adminid=$data->adminid;
         $this->username=$data->username;
         $this->loginstatus=TRUE;
         $stradmin= $this;
         $_SESSION['Admin_ID']= $this->adminid;
         $_SESSION['objadmin']= serialize($stradmin);
        
        }
        
           public static function getcount() {
        $objdb= self::objdb();
       $querycount="select count(userid) ' user' from user";
        $result=$objdb->query($querycount);
          $data= $result->fetch_object();
       return $data->user;
    }
    public  function logout(){
        if(isset($_SESSION['objadmin'])){
            unset($_SESSION['objadmin']);
        }
        if(isset($_SESSION['Admin_ID'])){
            unset($_SESSION['Admin_ID']);
        }
    }
    ///////////////////userslist////////////////////////////////////
//        public function userlist(){
//            $objdb= $this->objdb();
//            $queryselect="select userid,fname,lname,email,active,signupdate from users";
//            $result=$objdb->query($queryselect);
//            if($objdb->error){
//                throw new Exception("error in select query -$objdb->error");
//            }
//            if(!$result->num_rows>0){
//                throw new Exception("no users found ");
//            }
//            $data=$result->fetch_object();
//            while (count($data)){
//                
//            }
//            
//            }
            
    
     public function getsettings(){
          $objdb= $this->objdb();
      $queryselect="select * from settings where id=1";
        $result=$objdb->query($queryselect);

        if($objdb->errno){
            throw new Exception("Error in Query");
        }
        if($result->num_rows==0){
            throw new Exception("No settings Found");
        }
      
       $data=$result->fetch_object();
          
       $this->name=$data->name;
        $this->title=$data->title;
        $this->email=$data->supportemail;
        $this->copyright=$data->copyright;
     
    }
    public function updatesettings(){
         $objdb=  $this->objdb();
            $queryupdate="update settings set name='$this->name',title='$this->title',copyright='$this->copyright',supportemail='$this->email' where id=1";
            $objdb->query($queryupdate);
            if($objdb->errno){
                throw new Exception("Unable to update-$queryupdate");
            }
            
              if (isset($_FILES) && $_FILES['headerlogo']['type'] != '') {
            $path = "../../images/sitelogo";
            $name = $path . '/' . 'haederlogo' . '.png';
            if (!is_dir($path)) {
                mkdir($path);
            }

            $tmp_name = $_FILES['headerlogo']['tmp_name'];
            if (!move_uploaded_file($tmp_name, $name)) {
                throw new Exception("Record updated but Unable to add headerlogo");
            }
        }
            if (isset($_FILES) && $_FILES['footerlogo']['type'] != '') {
            $path = "../../images/sitelogo";
            $name = $path.'/'.'footerlogo'.'.png';
            if (!is_dir($path)) {
                mkdir($path);
            }

            $tmp_name = $_FILES['footerlogo']['tmp_name'];
            if (!move_uploaded_file($tmp_name, $name)) {
                throw new Exception("Record updated but Unable to add footerlogo");
            }
        }
            if (isset($_FILES) && $_FILES['favicon']['type'] != '') {
            $path = "../../images/sitelogo";
             $name = $path.'/'.'favicon'.'.png';
            if (!is_dir($path)) {
                mkdir($path);
            }

            $tmp_name = $_FILES['favicon']['tmp_name'];
            if (!move_uploaded_file($tmp_name, $name)) {
                throw new Exception("Record updated but Unable to add favicon image");
            }
        }
            
    }
}

?>
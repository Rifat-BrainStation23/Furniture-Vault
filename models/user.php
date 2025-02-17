<?php
require_once 'baseuser.php';

class user extends baseuser{

 
    private $userid;
    private $fname;
    private $nickname;
    private $lname;
    private $email;
    private $password;
    private $cpassword;
    private $gender;
    private $birthday;
    protected $city;
    protected $state;
    protected $country;
    protected $phonenumber;
    private $loginstatus;
    private $active;
    private $signupdate;
    private $profileid;
    public $location;
    public $specialization;
    public $site;
    public $signature;
    public $usergroup_id;

    public function __construct() {
        
    }

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
            throw new Exception("get method for $name not found");
        }
        return $this->$method();
    }

    private function setuserid($userid) {
        if (!is_numeric($userid)) {
            throw new Exception("invalid user id must be a integer");
        }

        $this->userid = $userid;
    }

    private function getuserid() {
        return $this->userid;
    }

    private function setfname($fname) {
        $this->fname = $fname;
    }

    private function getfname() {
        return $this->fname;
    }
    private function setnickname($nickname) {
        
        $this->nickname = $nickname;
    }

    private function getnickname() {
        return $this->nickname;
    }

    private function setlname($lname) {
        $reg = "/^[a-z]{3,15}$/";
        if (!preg_match($reg, $lname)) {
            throw new Exception("Invalid/Missing Last name");
        }
        $this->lname = $lname;
    }

    private function getlname() {
        return $this->lname;
    }

    private function setemail($email) {
        $reg = "/^[a-z][a-z0-9_.-]*@[a-z0-9]+.[a-z]{2,6}/";
        if (!preg_match($reg, $email)) {
            throw new Exception("Invalid/Missing Email");
        }
        $this->email = $email;
    }

    private function getemail() {
        return $this->email;
    }

    private function setpassword($password) {
        //$reg = "(?=.{8,})";
         if (strlen($password)<6) {
            throw new Exception("Invalid/Missing Password");
        }
        $this->password = sha1($password);
    }

    private function getpassword() {
        return $this->password;
    }

    private function setcpassword($cpassword) {
        //$reg = "(?=.{8,})";
        if (strlen($cpassword)<6) {
            throw new Exception("Invalid/Missing Cpassword");
        }
        $cpassword = sha1($cpassword);
        if ($cpassword != $this->password) {
            throw new Exception("Password did not match");
        }
        $this->cpassword = $cpassword;
    }

  
    private function getcpassword() {

        return $this->cpassword;
    }

    private function setgender($gender) {
        $reg = "/Male|Female/";
        if (!preg_match($reg, $gender)) {
            throw new Exception("Invalid/Missing Gender");
        }
        $this->gender = $gender;

    }

    private function getgender() {

        return $this->gender;
    }

    private function setbirthday($birthday) {
        $reg = "//";
        if (!preg_match($reg, $birthday)) {
            throw new Exception("Invalid Birthday Format or missing Birthday ");
        }
        $this->birthday = $birthday;
    }

    private function getbirthday() {
        return $this->birthday;
    }

    protected function setcity($city) {
        if ($city != NULL) {
            parent::setcity($city);
        }
        $this->city = $city;
    }

    protected function getcity() {
        return $this->city;
    }

    protected function setstate($state) {
        if ($state != NULL) {
            parent::setstate($state);
            }
        
        $this->state = $state;
    }

    protected function getstate() {
        return $this->state;
    }

    protected function setcountry($country) {
        if ($country != NULL) {
            parent::setcountry($country);
            
        }
        $this->country = $country;
    }

    protected function getcountry() {
        return $this->country;
    }

    protected function setphonenumber($phonenumber) {
         if ($phonenumber != NULL) {
            parent::setphonenumber($phonenumber);
            
        }
        $this->phonenumber=$phonenumber;
    }

    protected function getphonenumber() {
        return $this->phonenumber;
    }

    private function getloggedin() {
        return $this->loginstatus;
    }

    private function getsignupdate() {
        return $this->signupdate;
    }

    private function getactive() {
        return $this->active;
    }

    private function getprofileid() {
        return $this->profileid;
    }

//    private function setimage($image){
//        extract($image);
//        if($error==4){
//            throw new Exception("Missing file");
//        }
//        if($type!='image/jpeg'){
//            throw new Exception("File format not correct");
//        }
//        if($size>1000000){
//            throw new Exception("Exceed maximum size");
//        }
//         $imagedata = getimagesize($tmp_name);
//        if(!$imagedata){
//            throw new Exception("invalid size");
//        }
//        $pathinfo= pathinfo($name);
//        extract($pathinfo);  
//        $strpath="E:\xamp\htdocs\$name";
//        move_uploaded_file($tmp_name, $strpath);
//    
//        
//    }
    public function setprofileImage($profileImage) {
        $site_folder = "/3dsky";
        extract($profileImage);
        if ($error == 4) {
            throw new Exception("No file selected");
        }


        if ($size > 5000000) {
            throw new Exception("file size too large maximum 500kb allowed");
        }
        $imagedata = getimagesize($tmp_name);
        if (!$imagedata) {
            throw new Exception("Not a valid image");
        }
        if ($type == "image/jpeg" || $type == "image/png" || $type== "image/jpg") {
           
        }else{
             throw new Exception("File format not correct only jpeg/png allowed");
        }
        $pathinfo = pathinfo($name);
        extract($pathinfo);
        $filename = $this->userid . "." . "png";
        $strpath ="../users/images/$this->userid/$filename";
        
        if (!is_dir("../users/images/$this->userid")) {
            if (!mkdir("../users/images/$this->userid/")) {
                throw new Exception("Unable to upload to server-$strpath");
            }
        }
        $result = move_uploaded_file($tmp_name, $strpath);
        if (!$result) {
            throw new Exception("unable to upload file ");
        }
    }

    private function getprofileimage() {
        $strpath = $_SERVER['DOCUMENT_ROOT'] . "/users/images/$this->userid/$this->userid.jpeg";

        if (is_file($strpath)) {
            // echo    $filepath = $_SERVER['DOCUMENT_ROOT'] . "/users/images/$this->userid/$this->userid.jpeg";
            $filepath = BASE_URL . BASE_FOLDER . "users/images/$this->userid/$this->userid.jpeg";
        } else {
            $filepath = BASE_URL . BASE_FOLDER . "users/images/no-file-found-jpg";
        }

        return $filepath;
    }

    public static function checkpassword($password) {
        //$reg = "(?=.{8,})";
        if (strlen($password)<6) {
            throw new Exception("Invalid/Missing new Password,Must be 6 digit password");
        }
    }

    public static function comparepassword($password, $cpassword) {
        if ($cpassword != $password) {
            throw new Exception("Password did not match");
        }
    }

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////PUBLIC FUNCTION //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////signup function////////////////////////////////////////

    public function signup() {
        $objdb = $this->objdb();
        $queryselect = "select userid from user where nickname='$this->nickname'";
        $result = $objdb->query($queryselect);
        if ($objdb->errno) {
            throw new Exception("Error in Selecting data from db--$objdb->error");
        }
        if ($result->num_rows) {
            throw new Exception("This Nickname is already registerd");
        }
        $queryselect = "select userid from user where email='$this->email'";
        $result = $objdb->query($queryselect);
        if ($objdb->errno) {
            throw new Exception("Error in Selecting data from db--$objdb->error");
        }
        if ($result->num_rows) {
            throw new Exception("This Email is already registerd");
        }
        $active=0;
        if(isset($_REQUEST['isadmin'])){
            $active=1;
        }
        $signupdate = date("y-m-d H:i:s");
        $queryinsert = "INSERT INTO user"
                . "(userid,fname,nickname,email,password,gender,signupdate,resetcode,usergroup_id,active)"
                . "VAlUES(NULL,' ','$this->nickname','$this->email','$this->password',"
                . "' ','$signupdate',' ','$this->usergroup_id',$active)";

        $objdb->query($queryinsert);
        if ($objdb->errno) {
            throw new Exception("ERROR-No data inserted-$objdb->errno-$objdb->error");
        }

        $this->userid = $objdb->insert_id;
        $queryinsert = "INSERT INTO userprofile(profileid,userid)VALUES(Null,$this->userid)";

        $objdb->query($queryinsert);
        if ($objdb->errno) {
            throw new Exception("Failed to Insert in Profile");
        }
    }

///////////////////////////Activation function////////////////////////////////////////
    public function activate($actcode) {
        $objdb = $this->objdb();
        $reg = "/[a-z0-9]{32}/i";
        if (!preg_match($reg, $actcode)) {

            throw new Exception("Invalid Missing Activation code-$actcode-$this->userid");
        }
        $queryselect = "SELECT userid,resetcode,active,signupdate from user where userid=$this->userid";

        $result = $objdb->query($queryselect);
        if ($objdb->errno) {
            throw new Exception("Error In Selection Query $objdb->errno-$objdb->error");
        }
        if (!$result->num_rows > 0) {
            throw new Exception("no such user found");
        }
        $data = $result->fetch_object();
        if ($data->active) {
            throw new Exception("User already register Click <a href='http://localhost:8080/php/Cosmetico/signin.php'>Login</a>");
        }
   
        if ($actcode != $data->resetcode) {
            throw new Exception("Invalid Activaton Code");
        }
        $now = time();
        $expirytime = strtotime($data->signupdate) + (60 * 60 * 24 * 3);
        if ($now > $expirytime) {
            $querydelete = "DELETE FROM user"
                    . " where userid=$this->userid";
            $objdb->query($querydelete);
            if ($objdb->errno) {
                throw new Exception("Error in Deleteing user-$objdb->errorno-$objdb->error");
            }
            throw new Exception("Your link is expired register Again");
        }

        $queryupdate = "UPDATE user SET active=1,resetcode=NULL WHERE userid=$this->userid";
        if ($objdb->errno) {
            throw new Exception("Query-UPDATE not exectued-$objdb->error--Try again or contact support center");
        }
        $result = $objdb->query($queryupdate);
        if (!$objdb->affected_rows) {
            throw new Exception("No row Updated");
        }
        $queryinsert = "INSERT INTO userprofile(profileid,userid)VALUES(Null,$this->userid)";

        $objdb->query($queryinsert);
        if ($objdb->errno) {
            throw new Exception("Failed to Insert in Profile");
        }

        //   throw new Exception("Successfully Activated Click <a href='http://localhost:8080/php/Cosmetico/signin.php'>Login</a>");
    }

    ///////////////////////////Signin function////////////////////////////////////////

    public function signin($remember = false) {

        $objdb = $this->objdb();
        $queryselect = "select * from user where nickname='$this->nickname' and password='$this->password'";
        $result = $objdb->query($queryselect);
        if ($objdb->errno) {
            throw new Exception("ERROR-Select Query-$objdb->error");
        }
        if (!$result->num_rows) {
            throw new Exception("Invalid Nickname/Password");
        }
        $data = $result->fetch_object();
        
        if (!$data->active) {
            throw new Exception("Your account is not activated");
        }
        $this->userid = $data->userid;
        $this->fname = $data->fname;
        $this->lname = $data->lname;
        $this->password = NULL;
        $this->loginstatus = TRUE;
        $strUser = serialize($this);

        $_SESSION['objUser'] = $strUser;
        $_SESSION['User_Info_ID']=$this->userid;
        if ($remember) {
            $expiry = time() + (60 * 60 * 24 * 15);
            setcookie("objuser", $struser, $expiry, "/");
        }
    }

    ///////////////////////////Logout function////////////////////////////////////////

    public function signout() {
        if (isset($_SESSION['objUser'])) {
            unset($_SESSION['objUser']);
            unset($_SESSION['User_Info_ID']);
        }
        if (isset($_COOKIE['objuser'])) {
            
            setcookie("objuser", "a", "1", "/");
        }
    }

    ///////////////////////////Profile info function////////////////////////////////////////

    public function getprofile() {
        $objdb = $this->objdb();
        $queryselect = "Select userprofile.*,user.* from user join userprofile 
                on user.userid=userprofile.userid where
                 user.userid=$this->userid";

        $result = $objdb->query($queryselect);
        if ($objdb->errno) {
            throw new Exception("Error in fetching your data form DB");
        }
        if (!$result->num_rows) {
            throw new Exception();
        }
        $data = $result->fetch_object();
        if (!$data->active) {
            throw new Exception("Your accont is deactivated Contact Support Center");
        }
        $this->fname = $data->fname;
        $this->userid = $data->userid;
        $this->gender = $data->gender;
        $this->location = $data->location;
        $this->specialization = $data->specialization;
        $this->site = $data->site;
        $this->birthday = $data->birthday;
        $this->email = $data->email;
        $this->signupdate = $data->signupdate;
        $this->signature = $data->signature;
        
    }

///////////////////////////Update info function////////////////////////////////////////
    public function updateprofile() {
        $objdb = $this->objdb();
        $result = $queryupdate = "update  user set email='$this->email', fname='$this->fname',gender='$this->gender' where userid=$this->userid";
        $objdb->query($queryupdate);
        if ($objdb->errno) {
            throw new Exception("Failed to update Your account Data-$objdb->error");
        }


        $result = $queryinsert = "update  userprofile set birthday='$this->birthday',site='$this->site',"
                . "location='$this->location',signature='$this->signature',specialization='$this->specialization' where userid=$this->userid";
        $objdb->query($queryinsert);
        if ($objdb->errno) {
            throw new Exception("Failed to update your account data-$objdb->error");
        }
    }

    ///////////////////////////Update password function////////////////////////////////////////
    public function changepassword($password) {
        $objdb = $this->objdb();
        $querymatch = "select userid from user where userid='$this->userid'"
                . " and password='$this->password'";
        $result = $objdb->query($querymatch);
        if ($objdb->errno) {
            throw new Exception("Error in matching password -$objdb->error");
        }
        if (!$result->num_rows > 0) {
            throw new Exception("Your old password did not match");
        }
        $password = sha1($password);

        $result = $queryupdate = "update user set password='$password' where userid=$this->userid and password='$this->password'";
        $objdb->query($queryupdate);
        if ($objdb->errno) {
            throw new Exception("error in update query -$objdb->error");
        }
        if (!$objdb->affected_rows) {
            throw new Exception("Your old and new password could not be same");
        }
    }
    public function userInfo($email){
        $objdb= $this->objdb();
        $queryselect="select userid,fname,nickname,email from user where email='$email' OR userid='$email'";
        $result=$objdb->query($queryselect);
        
        if($objdb->errno){
            throw new Exception("Error in select query");
        }
        if($result->num_rows==0){
            throw new Exception("Email does not exsist");
        }

        $row = $result->fetch_array(MYSQLI_ASSOC);
        return $row;
    }
    public function forgot($resetcode){
        $objdb= $this->objdb();
        $queryselect="select userid,fname,nickname,email from user where email='$this->email'";
        $result=$objdb->query($queryselect);
        
        if($objdb->errno){
            throw new Exception("Error in select query");
        }
        if($result->num_rows==0){
            throw new Exception("Email does not exsist");
        }
        $queryupdate="update user set resetcode='$resetcode' where email='$this->email'";
        $objdb->query($queryupdate);
       
        if($objdb->errno){
            throw new Exception("Error in update Query");
        }

        $row = $result->fetch_array(MYSQLI_ASSOC);
        return $row;
    }
    public function resetpassword($resetcode){
        $objdb= $this->objdb();
        $queryselect="select userid from user where email='$this->email' and resetcode='$resetcode'";
        $result=$objdb->query($queryselect);
        if($objdb->errno){
            throw new Exception("error in Query");
        }
        if($result->num_rows==0){
            throw new Exception("INVLID ACTIVATION link you have 2 more chances else your account will suspend");
        }
        $data=$result->fetch_object();
        $this->userid=$data->userid;
                
    }
    public function newpassword($password){
        $objdb= $this->objdb();
        $password= sha1($password);
        $queryupdate="update user set password='$password',resetcode='' where userid='$this->userid'";
        $objdb->query($queryupdate);
        if($objdb->errno){
            throw new Exception("Unable to update your password");
        }
        if(!$objdb->affected_rows){
            throw new Exception("Unable to update your password");
        }
        
        
        
    }

/////////////////////////////////////////////////////////////////////////////////////////////
    ////ADmin functions Start////////////
/////////////////////////////////////////////////////////////////////////////////
    public static function getcount() {
        $objdb = self::objdb();
        $querycount = "select count(userid) ' user' from user";
        $result = $objdb->query($querycount);
        $data = $result->fetch_object();
        return $data->count;
    }

    public static function getusers($type) {
        $objdb = self::objdb();
        $queryselect = "select userid,fname,lname,email,gender,active,signupdate from user  ";
        if ($type == "0") {
            $queryselect .= "where active=0";
        }
        if ($type == "1") {
            $queryselect .= "where active=1";
        }
        if ($type == "all") {
            $queryselect .= "order by "
                    . "userid desc";
        }
        $result = $objdb->query($queryselect);
        if ($objdb->errno) {
            throw new Exception("Error in select query get users");
        }
        if (!$result->num_rows > 0) {
            throw new Exception("No user found");
        }
        $users = array();
        while ($data = $result->fetch_object()) {
            $temp = new user();
            $temp->userid = $data->userid;
            $temp->fname = $data->fname;
            $temp->lname = $data->lname;
            $temp->email = $data->email;
            $temp->gender = $data->gender;
            $temp->signupdate = $data->signupdate;
            if ($data->active == 0) {
                $temp->active = "Deactive";
            } else {
                $temp->active = "Active";
            }
            $users[] = $temp;
        }
        return $users;
    }

    public static function userstatus($status, $id) {
        $objdb = self::objdb();
        $queryupdate = "update user set active=$status where userid=$id";
        $objdb->query($queryupdate);
        if ($objdb->errno) {
            throw new Exception("error in Query update-$queryupdate");
        }
        if (!$objdb->affected_rows > 0) {
            throw new Exception("Unable to update user");
        }
    }

    public function userdetail($id) {
        $objdb = $this->objdb();
        $queyselect = "select profileid,userid,birthday,city,state,country from"
                . " userprofile where userid=$id";
        $result = $objdb->query($queyselect);
        if ($objdb->errno) {
            throw new Exception("Error in select query-$queyselect");
        }
        if (!$result->num_rows > 0) {
            throw new Exception("No user Found");
        }
        $data = $result->fetch_object();
        $this->profileid = $data->profileid;
        $this->userid = $data->userid;
        $this->birthday = $data->birthday;
        $this->city = $data->city;
        $this->state = $data->state;
        $this->country = $data->country;
    }

    public function getUserDownloadRight($id){
        $objdb = $this->objdb();
        $queyselect = "SELECT usergroup_id FROM user WHERE userid=$id";
        $usergroupid = $objdb->query($queyselect);

        $sql = "SELECT download_model FROM grouprights WHERE usergroup_id = $usergroupid";
        $download_right = $objdb->query($sql);

        return $download_right;

    }

}

?>
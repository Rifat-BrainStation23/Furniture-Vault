
<?php
session_start();
require_once '../models/user.php';


$objuser= unserialize($_SESSION['objUser']);

try{
        $objuser->signout();
    $_SESSION['msgright']="You are successfully logout";

}catch(Exception $ex){
    $_SESSION['msgright']= $ex->getMessage();
   
}
 header("location:../msg.php");

?>
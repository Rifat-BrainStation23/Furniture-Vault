<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();
require_once '../models/user.php';
require_once '../phpmailer/phpmailer.php';

$uid = $_SESSION['User_Info_ID'];
$list_name = $_REQUEST['list_name'];
$list_id = $_REQUEST['list_id'];
$semail = $_REQUEST['semail'];
$remail = $_REQUEST['remail'];
$link = "http://$_SERVER[HTTP_HOST]/" . ((strpos($_SERVER['HTTP_HOST'], 'localhost') !== false) ? explode('/', $_SERVER['REQUEST_URI'])[1] : '') . "/sharedlist.php?u=$uid&i=$list_id";
$validemail=filter_var($remail, FILTER_VALIDATE_EMAIL);
if(!$validemail){
     $_SESSION['errors']="Invalid email format.";
     header("Location: ../bookmarks.php");
}

$objuser = new user;
$userInfo = $objuser->userInfo($semail);
$company = "FURNITURE VAULT";

$recerivermsg = "Hi," . 
    "<br /><br /><b>" . (empty($userInfo['fname']) ? $userInfo['nickname'] : $userInfo['fname']) . "</b>(" . $userInfo['email'] . ") has shared a Wish list named <b><a target='_blank' href='$link'>$list_name</a></b> with you. Click on it to view." .
    "<br /><br />Cheers," .
    "<br /><b>$company</b> Team";

$sendermsg = "Hi <b>" . (empty($userInfo['fname']) ? $userInfo['nickname'] : $userInfo['fname']) . "</b>," .
    "<br /><br />You have share a Wish list named <b><a target='_blank' href='$link'>$list_name</a></b> with $remail." .
    "<br /><br />Cheers," .
    "<br /><b>$company</b> Team";

if(phpmail($remail, "Wishlist Share - $list_name", $recerivermsg) && phpmail($semail, "Wishlist Share - $list_name", $sendermsg)){
    $_SESSION['msg']="Email sent successully-$msg"; 
    header("Location: ../bookmarks.php");
}else{
    header("Location: ../bookmarks.php");
}
?>

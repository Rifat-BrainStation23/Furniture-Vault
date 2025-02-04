<?php
session_start();
require_once '../models/model.php';
$objmodel = new model();
if(isset($_REQUEST['add'])){
    
    if($_REQUEST['addtags']!=''){
        $addtags=$_REQUEST['addtags'];
        $objmodel->savemodeltags($addtags);
        $_SESSION['msg']='data Sucessfully added';
        header("location:../tags.php");
    }else{
         $_SESSION['error']='No data is inserted';
        header("location:../tags.php");
    }
}
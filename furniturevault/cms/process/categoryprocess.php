<?php
session_start();
require_once '../models/category.php';
$objcategory=new category();
$errors=array();
if(isset($_GET['delete'])){
    try{
        $objcategory->delete($_GET['id']);
        $_SESSION['msg']="Sucessfully delete";
        header("location:../category.php");
    } catch (Exception $ex) {
         $_SESSION['msg']=$ex->getMessage();
        header("location:../category.php");
    }
}
else{
try{
    $objcategory->name=$_POST['name'];
    $objcategory->catergoryview=$_POST['catergoryview'];
} catch (Exception $ex) {
    $errors['name']=$ex->getMessage();
}


if(isset($_POST['updatecategory'])){
    try{
    $objcategory->id=$_POST['id'];
} catch (Exception $ex) {
    $errors['id']=$ex->getMessage();
}
    if($errors){
    $_SESSION['msg']="Please Check the Errors";
    $_SESSION['objcategory']=  serialize($objcategory);
    $_SESSION['errors']=  $errors;
    header("location:../category.php");
}
else{
    try{
                $_SESSION['msg']="Sucessfullu updated";

        $objcategory->updatecategory();
                    header("location:../category.php");

    } catch (Exception $ex) {
        $_SESSION['msg']=$ex->getMessage();
            header("location:../category.php");


    }
}
}
else{
if($errors){
    $_SESSION['msg']="Please Check the Errors";
    $_SESSION['objcategory']=  serialize($objcategory);
    $_SESSION['errors']=  $errors;
    header("location:../addcategory.php");
}
else{
    try{
                $_SESSION['msg']="Sucessfully added";

        $objcategory->addcategory();
                    header("location:../category.php");

    } catch (Exception $ex) {
        $_SESSION['msg']=$ex->getMessage();
            header("location:../addcategory.php");


    }
    
}}
}
?>
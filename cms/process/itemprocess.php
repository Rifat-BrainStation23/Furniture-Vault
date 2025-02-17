<?php
session_start();
require_once '../models/item.php';
$objitem=new item();
$errors=array();
if(isset($_GET['delete'])){
    try{
        $objitem->delete($_GET['id']);
        $_SESSION['msg']="Sucessfully delete";
        header("location:../items.php");
    } catch (Exception $ex) {
         $_SESSION['msg']=$ex->getMessage();
        header("location:../items.php");
    }
}
else{
try{
    $objitem->name=$_POST['name'];
} catch (Exception $ex) {
    $errors['name']=$ex->getMessage();
}
try{
        $objitem->url=$_POST['url'];

} catch (Exception $ex) {
    $errors['url']=$ex->getMessage();

}
try{
    $objitem->categoryid=$_POST['categoryid'];
    
} catch (Exception $ex) {
    $errors['categroyid']=$ex->getMessage();

}





if(isset($_POST['updateitem'])){
    try{
    $objitem->id=$_POST['id'];
} catch (Exception $ex) {
    $errors['id']=$ex->getMessage();
}
    if($errors){
    $_SESSION['msg']="Please Check the Errors";
    $_SESSION['objitem']=  serialize($objitem);
    $_SESSION['errors']=  $errors;
    header("location:../items.php");
}
else{
    try{
                $_SESSION['msg']="Sucessfullu updated";

        $objitem->updateitem();
                    header("location:../items.php");

    } catch (Exception $ex) {
        $_SESSION['msg']=$ex->getMessage();
            header("location:../items.php");


    }
}
}
else{
if($errors){
    $_SESSION['msg']="Please Check the Errors";
    $_SESSION['objitem']=  serialize($objitem);
    $_SESSION['errors']=  $errors;
    header("location:../additem.php");
}
else{
    try{
                $_SESSION['msg']="Sucessfully added";

        $objitem->additem();
                    header("location:../items.php");

    } catch (Exception $ex) {
        $_SESSION['msg']=$ex->getMessage();
            header("location:../additem.php");


    }
    
}}
}
?>
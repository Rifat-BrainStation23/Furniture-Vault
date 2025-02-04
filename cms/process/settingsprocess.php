<?php
session_start();
require_once '../models/admin.php';
$objsettings=new admin();
$errors=array();
try{
    $objsettings->name=$_POST['name'];
} catch (Exception $ex) {
    $errors['name']=$ex->getMessage();
}
try{
        $objsettings->title=$_POST['title'];

} catch (Exception $ex) {
    $errors['title']=$ex->getMessage();

}
try{
    $objsettings->copyright=$_POST['copyright'];
    
} catch (Exception $ex) {
    $errors['copyright']=$ex->getMessage();

}
try{
    $objsettings->email=$_POST['email'];
    
} catch (Exception $ex) {
    $errors['email']=$ex->getMessage();

}
 $type_Array=array('image/jpeg','image/png','image/jpg');
if(isset($_FILES) && $_FILES['headerlogo']['type']!=''){
   
if(!in_array($_FILES['headerlogo']['type'],$type_Array)){
     $errors['headerlogo']="Imagen Invalida";
}
}if(isset($_FILES) && $_FILES['footerlogo']['type']!=''){
    
if(!in_array($_FILES['footerlogo']['type'],$type_Array)){
     $errors['footerlogo']="Imagen Invalida";
}
}if(isset($_FILES) && $_FILES['favicon']['type']!=''){
   
if(!in_array($_FILES['favicon']['type'],$type_Array)){
     $errors['favicon']="Imagen Invalida";
}
}

if($errors){
    $_SESSION['msg']="Please Check the Errors";
    $_SESSION['objsettings']=  serialize($objsettings);
    $_SESSION['errors']=  $errors;
    header("location:../settings.php");
}
else{
    try{
                $_SESSION['msg']="Sucessfully updated";

        $objsettings->updatesettings();
                    header("location:../settings.php");

    } catch (Exception $ex) {
        $_SESSION['msg']=$ex->getMessage();
            header("location:../settings.php");


    }
}
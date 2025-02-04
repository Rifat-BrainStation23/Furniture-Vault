<?php
session_start();
require_once '../models/item.php';
$objitem=new item();
 try{
        $objitem->deletesubscriber($_GET['id']);
        $_SESSION['msg']="Sucessfully delete";
        header("location:../subscribers.php");
    } catch (Exception $ex) {
         $_SESSION['msg']=$ex->getMessage();
        header("location:../subscribers.php");
    }
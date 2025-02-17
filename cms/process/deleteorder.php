<?php
session_start();
require_once '../models/order.php';
$objitem=new order();
 try{
        $objitem->deleteorders($_GET['id']);
        $_SESSION['msg']="Sucessfully delete";
        header("location:../orders.php");
    } catch (Exception $ex) {
         $_SESSION['msg']=$ex->getMessage();
        header("location:../orders.php");
    }
<?php
require_once '../../models/user.php';
require_once '../models/common.php';
require_once '../models/model.php';
require_once '../../phpmailer/phpmailer.php';
error_reporting(E_ALL);
$objcommon=new common();
if(isset($_REQUEST['userid'])){
    $userid=$_REQUEST['userid'];
    $filter="and userid=$userid";
    $resulruser=$objcommon->getuserlist($filter,'');
    $data = $resulruser->fetch_object();
    $nick=$data->nickname;
    $email=$data->email;

    $objuser = new user;
    $userInfo = $objuser->userInfo($email);
    $company = "FURNITURE VAULT";
     
     $modelid=@$_REQUEST['modelid'];
     $status=@$_REQUEST['status'];
     if($modelid!=''){
         $filter="";
         $modelresult= model::getpendingapprovemodels($filter='',$pagination='');
         $datamodel = $modelresult->fetch_object();
         $mmodelname=$datamodel->model_title;
     }
     if($status==1){
         //for approval
         $subject="$company - Your Upload Successfully Approved";
     if($modelid==''){
         //user approval
         $msg="Congratulation your account has been successfylly approved with this username $nick";
         
     }else{
          //model approval
         $msg="Congratulation your Model $mmodelname has been successfylly approved";
         $msg.="<br>below link will take you to the model";
         $msg.="<br><a href='http://debugger.ga/3dsky/detail.php?m=$modelid'>".$_SERVER['HTTP_HOST']."/3dsky/detail.php?m=$modelid</a>";
     }
     }else{
         $subject="$company - Sorry DisApproved";
        if($modelid==''){
           //user disapprove
         $msg="Sorry your account has not been  approved with this username $nick";
         
     }else{
         //model disapprove
         $msg="Sorry your Model $mmodelname has not been  approved";
     } 
     }
    
    $emailText = "Hi <b>" . (empty($userInfo['fname']) ? $userInfo['nickname'] : $userInfo['fname']) . "</b>," . 
            "<br /><br />$msg" . 
            "<br /><br />Cheers," .
            "<br /><b>$company</b> Team";
        
    if(phpmail($email, $subject, $emailText))
    {
        echo "true";
    }else{
        echo "false";
    }
}
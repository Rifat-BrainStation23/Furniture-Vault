<?php
if(isset($_REQUEST['model']) && $_REQUEST['function']){
$model=$_REQUEST['model'];
$function=$_REQUEST['function'];


require_once '../models/'.$model.'.php';

$objmodel=new $model();

$result=$objmodel->$function();
echo $result;
}


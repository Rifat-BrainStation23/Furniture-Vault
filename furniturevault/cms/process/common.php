<?php
require_once '../models/common.php';
$objcommon=new common();

if(!empty($_REQUEST['save_all_data']))
{
	$objcommon->saveAlldata();
}
else
{
	$objcommon->savedata();	
}

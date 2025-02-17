<?php
session_start();
require_once 'cms/models/model.php';
if(isset($_POST['secretkey']) && $_POST['secretkey']!=''){
    if($_POST['secretkey']==$_SESSION['secretkey']){
        $id=$_REQUEST['modelid'];
        $modelname=$_REQUEST['modelname'];
        $result= model::modelmediapath($id,'2');
        $data=$result->fetch_object();
        $data->media_type;
        $data->	media_name;
        $file=$data->media_save_path;
        $name="3D_Model_".$modelname.".".$data->media_type;

        if(file_exists($file) && $file!=''){
            header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename="'.$name.'"');
            //header('Content-Disposition: attachment; filename=' .$name);
            header('Content-Transfer-Encoding: binary');
            header('Expires: 0');
            header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
            header('Pragma: public');
            header('Content-Length: ' . filesize($file));
            ob_clean();
            flush();
            readfile($file);
            exit;

        } else {
            header("location:index.php");
        }
    } else {
        header("location:index.php");
    }
} else {
    header("location:index.php");
}

header("location:index.php");
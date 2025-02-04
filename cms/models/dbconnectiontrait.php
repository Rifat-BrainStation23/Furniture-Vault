<?php
trait  dbconnection{
protected static function objdb(){
      
         $host="localhost";
        $user="root";
        $password="";
        $datbase="furniturevault";
        $objdb=new mysqli();
        $objdb->connect($host, $user, $password);
        if($objdb->connect_errno)
        {
            throw new Exception("Connection Error with DB-$objdb->connect_errorno-$objdb->connect_error");
        }
        $objdb->select_db($datbase);
        if($objdb->errno){
            throw new Exception("ERROR-no DB Exsit or connection Error-$objdb->errno-$objdb->error");
        }
        return $objdb;
}
}
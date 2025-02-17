<?php

require_once('dbconnectiontrait.php'); 

class datamodel {

        
    use dbconnection;
    public static function getdropddown($id='',$coulmn_id='',$coulmn_name='',$table_name='',$currentid='',$where_column_id='') {
        $objdb = self::objdb();
        //routine id for normal dropdown
        $id=isset($_REQUEST['selected_id'])?$_REQUEST['selected_id']:$id;
         //current selected id of sub column
        $currentid=isset($_REQUEST['currentid'])?$_REQUEST['currentid']:$currentid;
        //when we have to choose sub column like sub category
        $where_column_id=isset($_REQUEST['where_column_id'])?$_REQUEST['where_column_id']:$where_column_id;
        //when we have to choose sub column like sub category
        $coulmn_id=isset($_REQUEST['column_id'])?$_REQUEST['column_id']:$coulmn_id;
        $coulmn_name=isset($_REQUEST['column_name'])?$_REQUEST['column_name']:$coulmn_name;
        $table_name=isset($_REQUEST['table_name'])?$_REQUEST['table_name']:$table_name;
       // $queryselect = "select Category_ID,Category_Name from category";
        $queryselect = "select $coulmn_id,$coulmn_name from $table_name";
        if($where_column_id!='' && $currentid!=''){
            $queryselect.=" where $where_column_id=$currentid";
        }
        $result = $objdb->query($queryselect);
        if ($objdb->errno) {
            throw new Exception("Error in items-$objdb->error");
        }
       $output='';
      $output="<option value=''>Select $table_name</option>";
        while ($data = $result->fetch_object()) {
       
          $selected='';
            if($id==$data->$coulmn_id){
                $selected='selected';
            }
            $dataid=$data->$coulmn_id;
            $dataname=$data->$coulmn_name;
            $output .= "<option $selected value='$dataid'";
                  $output .= "> ";
                  $output .=$dataname;
            $output .= "</option>";
        }
   

        return $output;
    }
    

}

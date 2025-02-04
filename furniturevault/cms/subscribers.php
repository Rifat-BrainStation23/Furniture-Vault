<?php
require_once 'views/header.php';
require_once 'models/item.php';
$objitem=new item();
try {
    $result= item::getsubscribers();
} catch (Exception $ex) {
    echo $ex->getMessage();
}
if(isset($_SESSION['msg'])){
    echo $_SESSION['msg'];
    unset($_SESSION['msg']);
}
?>
<a class="btn btn-default col-xs-1" href="<?php echo $_SERVER['HTTP_REFERER']; ?>">BACK</a>
<h4 class="  text-info text-center  h3">subscribers</h4>
<a class="btn btn-warning" href="download.php">Download in text file</a>

<table class="table col-xs-5 container">
    <thead>
        <tr>
      
            <th>email</th>
            <th>action</th>

        </tr>
    </thead>
    <tbody>
       <?php
       foreach ($result as $re){
       ?>
        <tr>
            
            <td><?php echo $re->email ?></td>
            <td><a href="process/deletesubscribe.php?id=<?php echo $re->id ?>">delete</a></td>
          
          
        </tr>
        <?php
       }
        ?>
    </tbody>
</table>

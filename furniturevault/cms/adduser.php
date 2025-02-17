<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/common.php';
require_once 'models/datamodel.php';
require_once '../models/user.php';

if (isset($_SESSION['msg'])) {
    $msg = $_SESSION['msg'];
    unset($_SESSION['msg']);
}
if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}
if (isset($_SESSION['objuser']) && 1==2) {
    
     $objuser = unserialize($_SESSION['objuser']);
} else {
    $objuser = new user();
}
$usergroupid=$objuser->usergroup_id;
 $usergroup=datamodel::getdropddown($usergroupid,'usergroup_id','usergroup_name','usergroup');
?>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="page-header">Add New User</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <?php if (isset($msg)) { ?>
                <div class="alert alert-success">
                    <?= $msg; ?>
                </div>
                <div class="clearfix"></div>
                <hr>
            <?php } if (isset($errors)) { ?>
                <div class="alert alert-danger">
                    <?= print_r($errors); ?>
                </div>
                <div class="clearfix"></div>
                <hr>
            <?php } ?>
        </div>

    </div>
    <div class="row">
        <div class="col-md-6">
            <form class="form-horizontal" action="process/adduserprocess.php" method="post">
                <input type="hidden" name="isadmin" value="1">
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Nick Name:</label>
                    <div class="col-sm-10 col-md-8">
                        <input type="text" class="form-control" value="<?=$objuser->nickname?>" required=""  placeholder="Nick name" name="nickname">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Email:</label>
                    <div class="col-sm-10 col-md-8">
                        <input type="email" class="form-control" value="<?=$objuser->email?>" required=""  placeholder="Email" name="email">
                       </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Password:</label>
                    <div class="col-sm-10 col-md-8">
                        <input type="text" class="form-control" value="" minlength="8" required=""  placeholder="Password" name="password">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >confirm Password:</label>
                    <div class="col-sm-10 col-md-8">
                        <input type="text" class="form-control" value="" minlength="8" required=""  placeholder="Confirm password" name="cpassword">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >User Type:</label>
                    <div class="col-sm-10 col-md-8">
                        <select class="form-control" name="usergroup_id" required="">
                            <?=$usergroup?>
                        </select>
                    </div>
                </div>            

                <div class="form-group">        
                    <div class="col-sm-offset-4 col-sm-10">
                        <button type="submit" class="btn btn-success">Add User</button>
                    </div>
                </div>
            </form>
        </div>
    </div>


</div>

<?php
require_once 'views/footer.php';
?>
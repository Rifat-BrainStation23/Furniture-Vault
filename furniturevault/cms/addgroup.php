<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/common.php';

if (isset($_SESSION['msg'])) {
    $msg = $_SESSION['msg'];
    unset($_SESSION['msg']);
}
if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}
if (isset($_SESSION['objp'])) {
    $objcommon = $_SESSION['objcommon'];
} else {
    $objcommon = new common();
}
?>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="page-header">Add New Group</h2>
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
                    <?= $errors; ?>
                </div>
                <div class="clearfix"></div>
                <hr>
            <?php } ?>
        </div>

    </div>
    <div class="row">
        <div class="col-md-6">
            <form class="form-horizontal" action="process/addgroupprocess.php" method="post">
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Group Name:</label>
                    <div class="col-sm-10 col-md-8">
                        <input type="text" class="form-control" required=""  placeholder="" name="group_name">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >View Model:</label>
                    <div class="col-sm-10 col-md-8">
                        <label class="radio-inline"><input type="radio" required="" required="" value="1" name="view_model">Yes</label>
                        <label class="radio-inline"><input type="radio" value="0" name="view_model">No</label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Download Model:</label>
                    <div class="col-sm-10 col-md-8">
                        <label class="radio-inline"><input type="radio" required="" value="1" name="download_model">Yes</label>
                        <label class="radio-inline"><input type="radio" value="0" name="download_model">No</label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Upload Model:</label>
                    <div class="col-sm-10 col-md-8">
                        <label class="radio-inline"><input type="radio" required="" value="1" name="upload_model">Yes</label>
                        <label class="radio-inline"><input type="radio" value="0" name="upload_model">No</label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" >Delete Model:</label>
                    <div class="col-sm-10 col-md-8">
                        <label class="radio-inline"><input type="radio" required="" value="1" name="delete_model">Yes</label>
                        <label class="radio-inline"><input type="radio" value="0" name="delete_model">No</label>
                    </div>
                </div>                

                <div class="form-group">        
                    <div class="col-sm-offset-4 col-sm-10">
                        <button type="submit" class="btn btn-success">Add</button>
                    </div>
                </div>
            </form>
        </div>
    </div>


</div>

<?php
require_once 'views/footer.php';
?>
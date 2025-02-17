<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
if (isset($_SESSION['msg'])) {
    $msg = $_SESSION['msg'];
    unset($_SESSION['msg']);
}
if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}
?>


<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="page-header">Create New Manufacturer</h2>
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
            <form class="form-horizontal" action="process/createmanuprocess.php" method="post">
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-3" >manufacturer Name:</label>
                    <div class="col-sm-10 col-md-8">
                        <input type="text" class="form-control" required="" placeholder="" name="manufacturer_name">
                    </div>
                </div>

                <div class="form-group">        
                    <div class="col-sm-offset-3 col-sm-10">
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
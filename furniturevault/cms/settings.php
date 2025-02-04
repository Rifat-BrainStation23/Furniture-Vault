<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/admin.php';
if(isset($_SESSION['msg'])){
    $msg= $_SESSION['msg'];
    unset($_SESSION['msg']);
}

if(isset($_SESSION['errors'])){
    $errors=($_SESSION['errors']);
    unset($_SESSION['errors']);
}

if(isset($_SESSION['objadmin'])){
    $objsettings=  unserialize($_SESSION['objadmin']);
//    unset($_SESSION['objsettings']);
}
 else {
    
    $objsettings=new admin();    
}

try{
    $objsettings->getsettings();
} catch (Exception $ex) {
    echo $ex->getMessage();
}

?>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">System Settings</h1>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
        <div class="col-lg-8">
            <div class="panel panel-default">
                
                <div class="panel-body">
                    
            <div class="container">
                <div class="text-warning h4">
                <?php if(isset($msg)){ echo $msg; } ?>
                </div>
                <form class="form-horizontal" action="process/settingsprocess.php" method="post" enctype="multipart/form-data">
                    
                    <br>
                    <br>
                  
                <div class="form-group col-md-9">
                    <label for="mobile" class="col-md-4 control-label">*Website Name: </label>
                    <span class="col-md-3 pull-right text-danger"><?php if(isset($errors['name'])){ echo $errors['name'];  } ?></span>
                    <div class="col-md-5">
                        <input type="text" name="name" placeholder="Website Name" class="form-control" value="<?php echo $objsettings->name; ?>" required >
                        
                    </div>
                    
                </div>
                <div class="form-group col-md-9">
                    <label for="mobile" class="col-md-4 control-label">*Website Title: </label>
                    <span class="col-md-3 pull-right text-danger"><?php if(isset($errors['title'])){ echo $errors['title'];  } ?></span>
                    <div class="col-md-5">
                        <input type="text" name="title" placeholder="Website title" class="form-control" value="<?php echo $objsettings->title; ?>" required >
                        
                    </div>
                </div>
                <div class="form-group col-md-9">
                    <label for="mobile" class="col-md-4 control-label">*Website Copyright: </label>
                    <span class="col-md-3 pull-right text-danger"><?php if(isset($errors['copyright'])){ echo $errors['copyright'];  } ?></span>
                    <div class="col-md-5">
                        <input type="text" name="copyright" placeholder="Website Copyright" class="form-control" value="<?php echo $objsettings->copyright; ?>" required >
                        
                    </div>
                </div>
                <div class="form-group col-md-9">
                    <label for="mobile" class="col-md-4 control-label">*Support Email: </label>
                    <span class="col-md-3 pull-right text-danger"><?php if(isset($errors['email'])){ echo $errors['email'];  } ?></span>
                    <div class="col-md-5">
                        <input type="email" name="email" placeholder="Support Email" class="form-control" value="<?php echo $objsettings->email; ?>" required >
                        
                    </div>
                </div>
              
                <div class="form-group col-md-9">
                    <label for="mobile" class="col-md-4 control-label">*Website header logo: </label>
                    <span class="col-md-3 pull-right text-danger"><?php if(isset($errors['headerlogo'])){ echo $errors['headerlogo'];  } ?></span>
                    <div class="col-md-5">
                        <input type="file" name="headerlogo"  class="form-control"  >
                        
                    </div>
                </div>
                <div class="form-group col-md-9">
                    <label for="mobile" class="col-md-4 control-label">*Website footer logo: </label>
                    <span class="col-md-3 pull-right text-danger"><?php if(isset($errors['footerlogo'])){ echo $errors['footerlogo'];  } ?></span>
                    <div class="col-md-5">
                        <input type="file" name="footerlogo"  class="form-control">
                        
                    </div>
                </div>
                <div class="form-group col-md-9">
                    <label for="mobile" class="col-md-4 control-label">*Website Favicon: </label>
                    <span class="col-md-3 pull-right text-danger"><?php if(isset($errors['favicon'])){ echo $errors['favicon'];  } ?></span>
                    <div class="col-md-5">
                        <input type="file" name="favicon"  class="form-control"  >
                        
                    </div>
                </div>
                  
                    <div class="form-group col-md-9">
                    <div class="col-md-3 col-md-offset-5">
                        <input type="submit" name="updatesettings" class="btn btn-primary btn-block" value="Update settings">
                    </div>
                </div>
                </form>
            </div>

                </div>
               
            </div>
           
        </div>
        
    </div>

</div>

<!--<script>
    $(document).ready(function () {
        $('#dataTables-example').DataTable({
            responsive: true
        });
    });
</script>-->
<?php
require_once 'views/footer.php';
?>
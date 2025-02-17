<?php
require_once 'views/header.php';
$msg=$errors='';
if (isset($_SESSION['msg'])) {
    $msg = $_SESSION['msg'];
    unset($_SESSION['msg']);
}
if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}
?>

<div id="registration_block" class="eng">
   <h1 class="register">Password reset</h1>
    
   <div class="form">
       <div class="row">
    <div class="col-md-6">
    <?php if (isset($msg)) { ?>
    <div class="alert alert-success">
    <?= $msg; ?>
    </div>
    <div class="clearfix"></div>
    <?php } ?>
    <div class="alert alert-success">
    <?=$errors?>
    </div
    </div>

    </div>
    </div>
       <form name="fos_user_resetting_form" method="post" action="process/forgotpasswordprocess.php" class="fos_user_resetting_reset">
         <dl>
            <dt>
               New password                
            </dt>
            <dd><input type="password" id="fos_user_resetting_form_plainPassword_first" name="password" required="required" autocomplete="off" class="text_button" /></dd>
            <dt>
               Confirm password                
            </dt>
            <dd><input type="password" id="fos_user_resetting_form_plainPassword_second" name="cpassword" required="required" autocomplete="off" class="text_button" /></dd>
         </dl>
          
           <div class="agree"><button type="submit" name="resetpassword" class="blue_button">
            Change password
            </button>
         </div>
      </form>
   </div>
</div>
<div id="sidebar" class="eng">
</div>
<?php
require_once 'views/footer.php';
?>

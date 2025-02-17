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
        <form action="process/forgotpasswordprocess.php" method="POST" class="fos_user_resetting_request">
            <div>
                <dl>
                       <div class="row">
        <div class="col-md-6">
            <?php if (isset($msg)) { ?>
                <div class="alert alert-success">
                    <?= $msg; ?>
                </div>
                <div class="clearfix"></div>
            <?php } ?>
        </div>

    </div>
                    <dt>
                        <label for="username">Email address</label>
                    </dt>
              
                    <dd>
                        <input type="text" id="username" name="email" required="required" class="text_button"/>
                        
                    </dd>
                </dl>
            </div>
                   <div id="loading" style="display: none">
             <img  src="images/loading.svg">
         </div>
            <div class="agree">
                <button type="submit" name="forgotpassword" id="resetbutton" onclick="loading()"  class="blue_button">
                    Reset password
                </button>
            </div>
        </form>
    </div>
</div>
<div id="sidebar" class="eng"></div>

<?php
require_once 'views/footer.php';
?>
<script>
    function loading(){
        if($("#username").val()!=''){
     $("#loading").show();
     $("#resetbutton").prop('disabled',true);   
        }
    }
    </script>
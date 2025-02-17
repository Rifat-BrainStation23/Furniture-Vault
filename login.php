<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/models/user.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/views/header.php';

if (isset($_SESSION['msg'])) {
    $msg = $_SESSION['msg'];
    unset($_SESSION['msg']);
}
if (isset($_SESSION['msgrights'])) {
    $msgrights = $_SESSION['msgrights'];
    unset($_SESSION['msgrights']);
}
if(isset($_SESSION['errormsg']))
{
    $msg=$_SESSION['errormsg'];
    unset($_SESSION['errormsg']);
}
if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}
if(isset($_SESSION['objuser']))
{
    $objuser=$_SESSION['objuser'];
}
else
{
    $objuser=new user();
}
?>

<!--content begin-->
<div id="content">
    <!--private_data_block begin-->
    <div id="avtorisation_page">
        <h2 class="avtorisation">Authorization</h2>
        <form action="process/loginprocess.php" method="post" id="autorisation_form" novalidate="novalidate">
            <?php 
            if(isset($msgrights)){
                echo "<div style='padding-top: 5px; padding-left:15px; color: red;'>"
                .$msgrights."</div>";
            }
            ?>
            <dl>
                <?php if(isset($msg))
    { ?>
                <dt>&nbsp;</dt>
                <dd class="form_error">
                            <?=$msg;?>
                        </dd>
                    <?php }?>
                
                <dt>
                    <label for="aut_login">Nickname</label>
                </dt>
                <dd>
                    <input type="text" class="text_button" id="username" name="nickname" required="required">
                  
                </dd>
                <dt>
                    <label for="aut_password">Password</label>
                </dt>
                <dd>
                    <input type="password" class="text_button" id="password" name="password" required="required" autocomplete="off">
              
              
                   <span class="form_error">
                        <?=isset($errors['password'])?$errors['password']:''?>
                    </span> 
                      </dd>
            </dl>
            <input type="hidden" id="sky_user_login__remember_me" name="sky_user_login[_remember_me]" value="true" />
            <div class="butons">
                <button type="submit" class="sub_button_green" id="login_form_submit">Login</button>
                <span class="forget_password">
                    <a href="forgotpassword.php">Forgot password or nickname?</a>
                </span>
            </div>
            <div class="register">Not registered yet? 
                <a href="register.php">Sign up now</a>
            </div>
        </form>
    </div>
    <!--private_data_block end-->
</div>
<!--content end-->
<div id="sidebar" class="eng"></div>

<?php
require_once 'views/footer.php';
?>
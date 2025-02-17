<?php
require_once 'views/header.php';

require_once('models/user.php');


if (isset($_SESSION['msg'])) {
    $msg = $_SESSION['msg'];
    unset($_SESSION['msg']);
}
//if(isset($_SESSION['errormsg']))
//{
//    $msg=$_SESSION['errormsg'];
//}
if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}

if(isset($_SESSION['objuser']))
{
    $objuser=@unserialize($_SESSION['objuser']);
}
else
{
    $objuser=new user();
}

?>
<div id="registration_block" class="eng">
                <h1 class="register">Registration</h1>
                <div class="form">
                    <form action="process/registerprocess.php" method="post" id="registration_form">
                        <dl>
                            <dt>
                                Nickname                </dt>
                            <dd>
                                <?php
                
                if (isset($errors['nickname'])) { ?>
                                <div class="incorrect_text"><div class="close"><span></span></div>
                            <?=$errors['nickname'];?>
                        </div>
                <?php }
                ?>
                                <?php
                
                if (isset($msg)) { ?>
                                <div class="incorrect_text"><div class="close"><span></span></div>
                            <?=$msg;?>
                        </div>
                <?php }
                ?>
                                
                                <input type="text" value="<?php echo $objuser->nickname;  ?>" id="fos_user_registration_form_username" name="nickname" required="required" maxlength="25" pattern=".{1,}" class="text_button" />
                            </dd>
                            <dt>
                                E-mail
                            </dt>
                            <dd>
                                <?php
                
                if (isset($errors['email'])) { ?>
                                <div class="incorrect_text"><div class="close"><span></span></div>
                            <?=$errors['email'];?>
                        </div>
                <?php }
                ?>
                               
                                <input type="email" value="<?php echo $objuser->email;  ?>" id="fos_user_registration_form_email" name="email" required="required" class="text_button email" />
                            </dd>
                            <dt>
                                Password                </dt>
                            <dd>
                                <?php
                
                if (isset($errors['password'])) { ?>
                                <div class="incorrect_text"><div class="close"><span></span></div>
                            <?=$errors['password'];?>
                        </div>
                <?php }
                ?>
                                <input type="password"  id="fos_user_registration_form_plainPassword_first" name="password" required="required" class="text_button" autocomplete="off" />
                            <br><label generated="true" class="">Password must contain Number and alphabits and should be minimum of 6 Digits.</label>
                            </dd>
                            <dt>
                                Verify Password                </dt>
                            <dd>
                                <?php
                
                if (isset($errors['cpassword'])) { ?>
                                <div class="incorrect_text"><div class="close"><span></span></div>
                            <?=$errors['cpassword'];?>
                        </div>
                <?php }
                ?>
                                <input type="password" id="fos_user_registration_form_plainPassword_second" name="cpassword" required="required" class="text_button" autocomplete="off" />
                            </dd>
                            
                        </dl>
                        <div class="agree">
                            <p>
                                <label>
                                    <input checked="" type="checkbox" class="checkbox" name="agree_inp">
                                    <a href="#">I accept the user agreement</a>
                                </label>
                            </p>
                            <p>
<!--                                <label  for="fos_user_registration_form_isReceiveEmails">
                                    <input type="checkbox" id="fos_user_registration_form_isReceiveEmails" name="fos_user_registration_form[isReceiveEmails]" class="checkbox" value="1" checked="checked" />Receive a notification e-mail
                                </label>-->
                            </p>
                            <button type="submit" class="blue_button">
                                Register                </button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div id="sidebar" class="eng"></div>
            
            <?php

require_once 'views/footer.php';

?>
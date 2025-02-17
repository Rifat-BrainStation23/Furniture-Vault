<?php
require_once 'views/header.php';
require_once 'cms/models/model.php';

?>
<div id="feed_back_block">
   <h1 class="feed_back">Feedback</h1>
   <div id="sucessmsg" class="flash-notice" style="margin-top: 20px; color: green;display: none;">
                Your message successfully sent!            </div>
   <div class="form">
       <form id="feed_back_form" action="" method="post" >
         <dl>
            <dt><label for="login_inp">Name</label></dt>
            <dd><input type="text" id="name" name="name" required="required" maxlength="255" class="text_button" /></dd>
            <dt><label for="email_inp">E-mail</label></dt>
            <dd><input type="text" id="email" name="email" required="required" maxlength="255" class="text_button email" /></dd>
            <dt><label for="password_inp_1">Theme</label></dt>
            <dd class="long"><input type="text" id="theme" name="theme" required="required" maxlength="255" class="text_button" /></dd>
         </dl>
         <p class="long2"><textarea id="text" name="text" required="required" class="text_button"></textarea></p>
         <div>
       
         </div>
         <div id="loading" style="display: none">
             <img  src="images/loading.svg">
         </div>
         <p class="long2"><button id="feedback_submit" type="button" onclick="SendContactForm()" class="blue_button">Send</button></p>
      </form>
   </div>
</div>
<div id="sidebar" class="eng">
</div>
<?php
require_once 'views/footer.php';

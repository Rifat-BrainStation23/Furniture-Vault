<div class="pfooter"></div>
        </div>
        <!-- footer begin -->
        <footer id="footer" class="eng">
            <div class="wrap">
                <nav>
                    <ul>
<!--                        <li>
                            <a href="faq.php">FAQ</a>
                        </li>
                        <li>
                            <a href="terms.php">Terms of use</a>
                        </li>
                       -->
                        <li>
                            <a href="contact.php">Support</a>
                        </li>
                    </ul>
                </nav>
                
                <!--<a target="_blank" class="sound" href="/3dmodels/rss"></a>-->
                <a href="index.php">
                    <!-- <img src="images/sitelogo/footerlogo.png" alt="" width="271" height="55" class="flogo"> -->
                    <img src="images/sitelogo/footerlogo.png" alt="" width="227" height="43" class="flogo">
                </a>
                <div class="copiright" style="margin-right: 68px;"><?=sitecopyrights?></div>
           
            </div>
        </footer>
        <!-- footer end -->
        <div id="popups_block">
            <div id="popup_bg" style=""></div>
            <div id="avtorisation_popup" class="popup_window eng">
                <div class="close_popup" onclick="close_popup('#avtorisation_popup')">×</div>
                <h2 class="avtorisation">Login</h2>
                <form action="process/loginprocess.php" method="post" id="autorisation_form" novalidate="novalidate">
                    
                    <dl>
                        <dt>
                            <label for="aut_login">Nickname</label>
                        </dt>
                        <dd>
                            <input type="text" class="text_button" id="username" name="nickname" value="" required="required">
                        </dd>
                        <dt>
                            <label for="aut_password">Password</label>
                        </dt>
                        <dd>
                            <input type="password" class="text_button" id="password" name="password" required="required" autocomplete="off">
                        </dd>
                      
                    </dl>
                    <input type="hidden" id="sky_user_login__remember_me" name="remember" value="on" />
                    <div class="butons">
                        <button type="submit" class="blue_button">Login</button>
                        <span class="forget_password">
                            <a href="forgotpassword.php">Forgot password or nickname?</a>
                        </span>
                    </div>
                    <div class="register">Not registered yet? 
                        <a href="register.php">Sign up now</a>
                    </div>
                </form>
            </div>
            <div class="popup_big_foto">
                <div class="foto">
                    <img src="" alt="" width="640">
                </div>
                <div class="name">
                    <div class="icon"></div>
                    <span class="txt"></span>
                </div>
            </div>
            <div id="top_link">
                <div class="arr">Up</div>
            </div>
        </div>
        <div id="javascripts_block"></div>
    </body>
</html>
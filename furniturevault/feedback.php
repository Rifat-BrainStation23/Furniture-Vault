<!DOCTYPE html>
<!--[if lt IE 7 ]>
<html class="no-js ie6" lang="ru">
        <![endif]-->
<!--[if IE 7 ]>
<html class="no-js ie7" lang="ru">
        <![endif]-->
<!--[if IE 8 ]>
<html class="no-js ie8" lang="ru">
        <![endif]-->
<!--[if (gte IE 9)|!(IE)]>
<!-->
<html class="no-js" lang="ru">
    <!--
    <![endif]-->
    <head>
        <meta name="cluster_hostname" content="frontend99">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
        <meta name='yandex-verification' content='46f114f2009500df' />
        <title></title>
        <meta name="description" content="">
        <meta name="keywords" content="">
        <link rel="stylesheet" href="css/custom.css" />
        <script type="text/javascript" src="js/custom.js"></script>
        <link href="/3dsky.ico" rel="shortcut icon" type="image/x-icon" />
    </head>
    <body>
        <script>
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-2056989-5', '3dsky.org');
            ga('send', 'pageview');

        </script>
        <!-- Yandex.Metrika counter -->
        <script type="text/javascript">
            (function (d, w, c) {
                (w[c] = w[c] || []).push(function () {
                    try {
                        w.yaCounter32914285 = new Ya.Metrika({
                            id: 32914285,
                            clickmap: true,
                            trackLinks: true,
                            accurateTrackBounce: true
                        });
                    } catch (e) {
                    }
                });

                var n = d.getElementsByTagName("script")[0],
                        s = d.createElement("script"),
                        f = function () {
                            n.parentNode.insertBefore(s, n);
                        };
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://mc.yandex.ru/metrika/watch.js";

                if (w.opera == "[object Opera]") {
                    d.addEventListener("DOMContentLoaded", f, false);
                } else {
                    f();
                }
            })(document, window, "yandex_metrika_callbacks");
        </script>
        <noscript>
        <div>
            <img src="https://mc.yandex.ru/watch/32914285" style="position:absolute; left:-9999px;" alt="" />
        </div>
        </noscript>
        <!-- /Yandex.Metrika counter -->
        <div class="top_line"></div>
        <div id="wrap">
            <header id="header" class="en">
                <h1>
                    <a href="/">
                        <img src="/assets/skypages/images/en/3dsky_logo.png" style="" alt="" id="logo">
                    </a>
                </h1>
                <!--top_search begin-->
                <div id="search" class="eng js_hint_search_container">
                    <form action="/search" method="get" class="js_hint_form" autocomplete="off">
                        <input id="search_inp_top" type="text" name="query" class="txt js_hint_input" value="" placeholder="Search" autocomplete="off">
                        <input type="submit" class="sub" value="">
                    </form>
                </div>
                <!--top_search end-->
                <div class="user_field">
                    <a href="#" onclick="show_captcha();
                            open_popup('#avtorisation_popup');" class="user_login">Login</a>
                    <a href="/register/" class="user_join">Join</a>
                </div>
            </header>
            <div id="feed_back_block">
                <h1 class="feed_back">Feedback</h1>
                <div class="form">
                    <form id="feed_back_form" action="/feedbacks/create" method="post" >
                        <dl>
                            <dt>
                                <label for="login_inp">Name</label>
                            </dt>
                            <dd>
                                <input type="text" id="sky_bundle_feedbacksbundle_feedbackstype_name" name="sky_bundle_feedbacksbundle_feedbackstype[name]" required="required" maxlength="255" class="text_button" />
                            </dd>
                            <dt>
                                <label for="email_inp">E-mail</label>
                            </dt>
                            <dd>
                                <input type="text" id="sky_bundle_feedbacksbundle_feedbackstype_email" name="sky_bundle_feedbacksbundle_feedbackstype[email]" required="required" maxlength="255" class="text_button email" />
                            </dd>
                            <dt>
                                <label for="password_inp_1">Theme</label>
                            </dt>
                            <dd class="long">
                                <input type="text" id="sky_bundle_feedbacksbundle_feedbackstype_theme" name="sky_bundle_feedbacksbundle_feedbackstype[theme]" required="required" maxlength="255" class="text_button" />
                            </dd>
                        </dl>
                        <p class="long2">
                            <textarea id="sky_bundle_feedbacksbundle_feedbackstype_text" name="sky_bundle_feedbacksbundle_feedbackstype[text]" required="required" class="text_button"></textarea>
                        </p>
                        <div>
                            <div class="captcha_box" style="">
                                <dl>
                                    <dt>Text in the box</dt>
                                    <dd>
                                        <div class="capcha">
                                            <script type="text/javascript">
                                                function reload_captcha_5a24125f10957() {
                                                    var img = document.getElementById('captcha_5a24125f10957');
                                                    img.src = '/generate-captcha/gcb_captcha_feedback?n=b261e0197ff04ca98181b94dc45600d8?n=' + (new Date()).getTime();
                                                }
                                            </script>
                                            <a class="captcha_reload" href="javascript:reload_captcha_5a24125f10957();">
                                                <img id="captcha_5a24125f10957" src="/generate-captcha/gcb_captcha_feedback?n=b261e0197ff04ca98181b94dc45600d8?8a9a65a27ed8ea3d790061b824e24733" alt="" title="captcha" width="81" height="32" />
                                            </a>
                                        </div>
                                        <input type="text" id="sky_bundle_feedbacksbundle_feedbackstype_captcha_feedback" name="sky_bundle_feedbacksbundle_feedbackstype[captcha_feedback]" required="required" class="text_button capcha_inp" />
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <input type="hidden" id="sky_bundle_feedbacksbundle_feedbackstype__token" name="sky_bundle_feedbacksbundle_feedbackstype[_token]" value="72DRiE0CJ1JM0WpMkx6NfO8HU1KXJve6oFhWX7JqaVk" />
                        <p class="long2">
                            <button id="feedback_submit" type="submit" class="blue_button">Send</button>
                        </p>
                    </form>
                </div>
            </div>
            <div id="sidebar" class="eng"></div>
            <div class="pfooter"></div>
        </div>
        <!-- footer begin -->
        <footer id="footer" class="eng">
            <div class="wrap">
                <nav>
                    <ul>
                        <li>
                            <a href="/faq/">FAQ</a>
                        </li>
                        <li>
                            <a href="http://3dsky.org/faq/category/8/show">Terms of use</a>
                        </li>
                        <li>
                            <a href="/user/account">Buy 3d models</a>
                        </li>
                        <li>
                            <a href="/feedbacks/new">Support</a>
                        </li>
                    </ul>
                </nav>
                <a target="_blank" class="sound" href="/3dmodels/rss"></a>
                <a href="/">
                    <img src="/assets/skypages/images/en/f-3dsky_logo.png" alt="" width="113" height="47" class="flogo">
                </a>
                <div class="copiright">3dsky.org 2006-2017 </div>
            </div>
        </footer>
        <!-- footer end -->
        <div id="popups_block">
            <div id="popup_bg" style=""></div>
            <div id="avtorisation_popup" class="popup_window eng">
                <div class="close_popup" onclick="close_popup('#avtorisation_popup')">×</div>
                <h2 class="avtorisation">Login</h2>
                <form action="/login_check" method="post" id="autorisation_form" novalidate="novalidate">
                    <input type="hidden" name="_csrf_token" value="0pqvkmoYEHcdiF-tGVsAYuOF4Q3odHGARgHUYY442BM" />
                    <dl>
                        <dt>
                            <label for="aut_login">Nickname</label>
                        </dt>
                        <dd>
                            <input type="text" class="text_button" id="username" name="_username" value="" required="required">
                        </dd>
                        <dt>
                            <label for="aut_password">Password</label>
                        </dt>
                        <dd>
                            <input type="password" class="text_button" id="password" name="_password" required="required" autocomplete="off">
                        </dd>
                        <dt>
                            <label for="aut_bots">Text in the box</label>
                        </dt>
                        <dd>
                            <div class="capcha">
                                <script type="text/javascript">
                                    function reload_captcha_5a24125f1493a() {
                                        var img = document.getElementById('captcha_5a24125f1493a');
                                        img.src = '/generate-captcha/gcb_captcha_login?n=1f005a3acfca1203679267223b6c6389?n=' + (new Date()).getTime();
                                    }
                                </script>
                                <a class="captcha_reload" href="javascript:reload_captcha_5a24125f1493a();">
                                    <img id="captcha_5a24125f1493a" class="captcha_image" src="" alt="" title="captcha" width="81" height="32" />
                                </a>
                            </div>
                            <input type="text" id="sky_user_login_captcha_login" name="sky_user_login[captcha_login]" required="required" class="text_button capcha_inp" />
                            <div style="display: none;" id="captcha_image_url_container" captcha_url="/generate-captcha/gcb_captcha_login?n=1f005a3acfca1203679267223b6c6389?130214d369d555e15e6b1621771809ad"></div>
                        </dd>
                    </dl>
                    <input type="hidden" id="sky_user_login__remember_me" name="sky_user_login[_remember_me]" value="on" />
                    <div class="butons">
                        <button type="submit" class="blue_button">Login</button>
                        <span class="forget_password">
                            <a href="/resetting/request">Forgot password or nickname?</a>
                        </span>
                    </div>
                    <div class="register">Not registered yet? 
                        <a href="/register/">Sign up now</a>
                    </div>
                </form>
            </div>
            <div id="top_link">
                <div class="arr">Up</div>
            </div>
        </div>
        <div id="javascripts_block"></div>
    </body>
</html>

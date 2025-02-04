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
                    <a href="/user/bookmarks/models" class="pro icon_bookmarks">Bookmarks</a>
                    <a href="/user/messages" class="user_mails active"></a>
                    <a href="/user/" class="user_name">amirhu...</a>
                    <span>&frasl;</span>
                    <a href="/logout" class="user_logout">Logout</a>
                </div>
            </header>
            <!--edit_form_block begin-->
            <div id="edit_form_block" class="eng">
                <h1>Edit</h1>
                <div class="user_photo_block">
                    <div class="user_photo">
                        <img width="80" height="80" src="https://b3.3ddd.ru/media/cache/sky_user_avatar_profile/avatar/users/blank.gif" alt="amirhuxain1" class="avatar">
                    </div>
                    <a href="javascript:;" onclick="open_popup('#change_photo_popup')" class="blue_button">Change photo</a>
                    <a href="javascript:;" onClick="open_popup('#change_password_popup')" class="blue_button">Change password</a>
                </div>
                <form action="/user/edit" method="post" id="edit_form_block_form" >
                    <dl>
                        <dt>
                            <label for="fio_inp">Name:</label>
                        </dt>
                        <dd>
                            <input type="text" id="fos_user_profile_form_fio" name="fos_user_profile_form[fio]" class="text_button" />
                        </dd>
                        <dt>
                            <label for="specialty_inp">Specialization:</label>
                        </dt>
                        <dd>
                            <input type="text" id="fos_user_profile_form_occupation" name="fos_user_profile_form[occupation]" class="text_button" />
                        </dd>
                        <dt>
                            <label for="adress_inp">Locations:</label>
                        </dt>
                        <dd>
                            <input type="text" id="fos_user_profile_form_location" name="fos_user_profile_form[location]" class="text_button" />
                        </dd>
                        <dt>
                            <label for="email_inp">E-mail:</label>
                        </dt>
                        <dd>
                            <input type="text" id="fos_user_profile_form_email" name="fos_user_profile_form[email]" class="text_button" value="amirhuxain@gmail.com" />
                        </dd>
                        <dt>
                            <label for="adress_site_inp">Site:</label>
                        </dt>
                        <dd>
                            <input type="text" id="fos_user_profile_form_site" name="fos_user_profile_form[site]" class="text_button" />
                        </dd>
                        <dt>
                            <label for="pol_inp">Gender:</label>
                        </dt>
                        <dd class="radio">
                            <div style="display: block; margin-left: 17px;">
                                <div id="fos_user_profile_form_gender">
                                    <input type="radio" id="fos_user_profile_form_gender_0" name="fos_user_profile_form[gender]" required="required" value="0" />
                                    <label for="fos_user_profile_form_gender_0" class="required">Male</label>
                                    <input type="radio" id="fos_user_profile_form_gender_1" name="fos_user_profile_form[gender]" required="required" value="1" />
                                    <label for="fos_user_profile_form_gender_1" class="required">Female</label>
                                </div>
                            </div>
                        </dd>
                        <dt>
                            <label for="birthday_inp">Date of birth:</label>
                        </dt>
                        <dd>
                            <input type="text" id="fos_user_profile_form_birthdate" name="fos_user_profile_form[birthdate]" class="text_button" placeholder="DD.MM.YYYY" />
                        </dd>
                        <dt>
                            <label for="signature_inp">Signature:</label>
                        </dt>
                        <dd>
                            <input type="text" id="fos_user_profile_form_sign" name="fos_user_profile_form[sign]" class="text_button" />
                        </dd>
                        <dt>
                            <label for="is_receibve_emails_inp">Receive email notifications:</label>
                        </dt>
                        <dd  class="radio">
                            <div style="display: block; margin-left: 17px;">
                                <input type="checkbox" id="fos_user_profile_form_isReceiveEmails" name="fos_user_profile_form[isReceiveEmails]" value="1" checked="checked" />
                            </div>
                        </dd>
                        <input type="hidden" id="fos_user_profile_form__token" name="fos_user_profile_form[_token]" value="MsTM1gp0Xj5Ti9_x93Qve4OpY8Xr0vvMAzK65vGpETA" />
                    </dl>
                    <script>
                        $("#fos_user_profile_form_birthdate").datepicker({
                            dateFormat: "dd.mm.yy",
                            changeYear: true,
                            yearRange: "1920:2010"
                        });
                        /* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
                        /* Written by Andrew Stromnov (stromnov@gmail.com). */
                        jQuery(function ($) {
                            $.datepicker.regional['ru'] = {
                                closeText: 'Закрыть',
                                prevText: '&#x3c;Пред',
                                nextText: 'След&#x3e;',
                                currentText: 'Сегодня',
                                monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                                    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                                monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
                                    'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                                dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
                                dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
                                dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                                weekHeader: 'Не',
                                dateFormat: 'dd.mm.yy',
                                firstDay: 1,
                                isRTL: false,
                                showMonthAfterYear: false,
                                yearSuffix: ''};
                            $.datepicker.setDefaults($.datepicker.regional['en']);
                        });
                    </script>
                    <div class="sub_bg">
                        <button type="submit" class="blue_button">Save</button>
                    </div>
                </form>
            </div>
            <!--edit_form_block end-->
            <div class="pfooter"></div>
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
            <!--change_password_popup begin-->
            <div id="change_password_popup" class="popup_window">
                <div class="close_popup" onClick="close_popup('#change_password_popup')">&times;</div>
                <h2>Change password</h2>
                <form action="/user/save_password" method="post" id="autorisation_form" >
                    <dl>
                        <dt>
                            <label for="old_password">Old password</label>
                        </dt>
                        <dd>
                            <input type="password" id="sky_user_profile_old_pass" name="sky_user_profile[old_pass]" required="required" class="text_button" />
                        </dd>
                        <dt>
                            <label for="new_password">New password</label>
                        </dt>
                        <dd>
                            <input type="password" id="sky_user_profile_plainPassword_first" name="sky_user_profile[plainPassword][first]" required="required" class="text_button" />
                        </dd>
                        <dt>
                            <label for="repeat_password">Repeat password</label>
                        </dt>
                        <dd>
                            <input type="password" id="sky_user_profile_plainPassword_second" name="sky_user_profile[plainPassword][second]" required="required" class="text_button" />
                        </dd>
                    </dl>
                    <input type="hidden" id="sky_user_profile__token" name="sky_user_profile[_token]" value="MsTM1gp0Xj5Ti9_x93Qve4OpY8Xr0vvMAzK65vGpETA" />
                    <button type="submit" class="sub_button_green">Change password</button>
                </form>
            </div>
            <!--change_password_popup end-->
            <!--change_photo_popup begin-->
            <div id="change_photo_popup" class="popup_window">
                <div class="close_popup" onClick="close_popup('#change_photo_popup')">&times;</div>
                <h2>Change photo</h2>
                <form action="/user/save_avatar" method="post" id="autorisation_form" enctype="multipart/form-data">
                    <dl>
                        <dt>
                            <label for="work_foto">Avatar</label>
                        </dt>
                        <dd>
                            <div class="input_file">
                                <input type="file" id="sky_user_profile_file" name="sky_user_profile[file]" required="required" />
                                <div class="search">Upload</div>
                                <div class="val"></div>
                            </div>
                            <div class="max_size">80x80 pix Max 1 Mb</div>
                        </dd>
                    </dl>
                    <input type="hidden" id="sky_user_profile__token" name="sky_user_profile[_token]" value="MsTM1gp0Xj5Ti9_x93Qve4OpY8Xr0vvMAzK65vGpETA" />
                    <button type="submit" class="sub_button_green">Upload</button>
                </form>
            </div>
            <!--change_photo_popup end-->
            <div id="top_link">
                <div class="arr">Up</div>
            </div>
        </div>
        <div id="javascripts_block">
            <div id="evercookie_container" class="hidden">
                <script>
                    var ec = new evercookie();
                    ec.get("3ddd_session_id", function (value) {
                        if (!value) {
                            ec.set("3ddd_session_id", '5c1359dfc95cdf58faebaf8044c320cc');
                        }
                    });
                </script>
            </div>
        </div>
    </body>
</html>

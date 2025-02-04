<?php
require_once 'views/header.php';
$msg='';
if (isset($_SESSION['msg'])) {
    $msg = $_SESSION['msg'];
   
    unset($_SESSION['msg']);
}
if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}

try {
    $objuser->getprofile();
} catch (Exception $ex) {
    echo $ex->getMessage();
}
?>

<div id="edit_form_block" class="eng">
    <h1>Edit</h1> <?=$msg?>
    <div class="user_photo_block">
        <div class="user_photo">
            <img width="80" height="80" src="<?php if(is_file("users/images/".$objuser->userid."/".$objuser->userid.".png")){ echo "users/images/".$objuser->userid."/".$objuser->userid.".png"; } 
            else {     echo 'users/images/default/blank.gif'; } ?>" alt="<?=$objuser->nickname;?>" class="avatar">
        </div>
       
        <a href="javascript:;" onclick="open_popup('#change_photo_popup')" class="blue_button">Change photo</a>
        <a href="javascript:;" onClick="open_popup('#change_password_popup')" class="blue_button">Change password</a>
    </div>
    <form action="process/editprofile.php" method="post" id="edit_form_block_form" >
        <dl>
            <dt>
                <label for="fio_inp">Name:</label>
            </dt>
            <dd>
                <input type="text" value="<?=$objuser->fname;?>" id="fos_user_profile_form_fio" name="fname" class="text_button" />
            </dd>
            <dt>
                <label for="specialty_inp">Specialization:</label>
            </dt>
            <dd>
                <input type="text" value="<?=$objuser->specialization;?>" id="fos_user_profile_form_occupation" name="specialization" class="text_button" />
            </dd>
            <dt>
                <label for="adress_inp">Locations:</label>
            </dt>
            <dd>
                <input type="text" value="<?=$objuser->location;?>" id="fos_user_profile_form_location" name="location" class="text_button" />
            </dd>
            <dt>
                <label for="email_inp">E-mail:</label>
            </dt>
            <dd>
                <input type="text"  value="<?=$objuser->email;?>" id="fos_user_profile_form_email" name="email" class="text_button" />
            </dd>
            <dt>
                <label for="adress_site_inp">Site:</label>
            </dt>
            <dd>
                <input type="text"  value="<?=$objuser->site;?>" id="fos_user_profile_form_site" name="site" class="text_button" />
            </dd>
            <dt>
                <label for="pol_inp">Gender:</label>
            </dt>
            <dd class="radio">
                <div style="display: block; margin-left: 17px;">
                    <div id="fos_user_profile_form_gender">
                        <input <?php if($objuser->gender == 'Male'){echo 'checked';}?> type="radio" id="fos_user_profile_form_gender_0" name="gender" required="required" value="Male" />
                        <label for="fos_user_profile_form_gender_0" class="required">Male</label>
                        <input <?php if($objuser->gender == 'Female'){echo 'checked';}?> type="radio" id="fos_user_profile_form_gender_1" name="gender" required="required" value="Female" />
                        <label for="fos_user_profile_form_gender_1" class="required">Female</label>
                    </div>
                </div>
            </dd>
            <dt>
                <label for="birthday_inp">Date of birth:</label>
            </dt>
            <dd>
                <input type="text"  value="<?=$objuser->birthday;?>" id="fos_user_profile_form_birthdate" name="birthday" class="text_button" placeholder="DD.MM.YYYY" />
            </dd>
            <dt>
                <label for="signature_inp">Signature:</label>
            </dt>
            <dd>
                <input type="text" value="<?=$objuser->signature;?>" id="fos_user_profile_form_sign" name="signature" class="text_button" />
            </dd>
<!--            <dt>
                <label for="is_receibve_emails_inp">Receive email notifications:</label>
            </dt>
            <dd  class="radio">
                <div style="display: block; margin-left: 17px;">
                    <input type="checkbox" id="fos_user_profile_form_isReceiveEmails" name="fos_user_profile_form[isReceiveEmails]" value="1" checked="checked" />
                </div>
            </dd>-->
            <input type="hidden" id="fos_user_profile_form__token" name="fos_user_profile_form[_token]" value="kGQw6sgndPT5Jiabm3IBLIJVcD97ieSngfq8OMsJRGc" />
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
<div id="popups_block">
    <div id="popup_bg" style=""></div>
    <!--change_password_popup begin-->
    <div id="change_password_popup" class="popup_window">
        <div class="close_popup" onClick="close_popup('#change_password_popup')">&times;</div>
        <h2>Change password</h2>
        <form action="process/changepassword.php" method="post" id="autorisation_form" >
            <dl>
                <dt>
                    <label for="old_password">Old password</label>
                </dt>
                <dd>
                    <input type="password" id="sky_user_profile_old_pass" name="opassword" required="required" class="text_button" />
                </dd>
                <dt>
                    <label for="new_password">New password</label>
                </dt>
                <dd>
                    <input type="password" id="sky_user_profile_plainPassword_first" name="password" required="required" class="text_button" />
                </dd>
                <dt>
                    <label for="repeat_password">Repeat password</label>
                </dt>
                <dd>
                    <input type="password" id="sky_user_profile_plainPassword_second" name="cpassword" required="required" class="text_button" />
                </dd>
            </dl>
            <button type="submit" class="sub_button_green">Change password</button>
        </form>
    </div>
    <!--change_password_popup end-->
    <!--change_photo_popup begin-->
    <div id="change_photo_popup" class="popup_window">
        <div class="close_popup" onClick="close_popup('#change_photo_popup')">&times;</div>
        <h2>Change photo</h2>
        <form action="process/changeimage.php" method="post" id="autorisation_form" enctype="multipart/form-data">
            <dl>
                <dt>
                    <label for="work_foto">Avatar</label>
                </dt>
                <dd>
                    <div class="input_file">
                        <input type="file" id="sky_user_profile_file" name="image" required="required" />
                        <div class="search">Upload</div>
                        <div class="val"></div>
                    </div>
                    <div class="max_size">80x80 pix Max 1 Mb</div>
                </dd>
            </dl>
            <button type="submit" class="sub_button_green">Upload</button>
        </form>
    </div>
    <!--change_photo_popup end-->
    <div id="top_link">
        <div class="arr">Up</div>
    </div>
</div>

<?php
require_once 'views/footer.php';
?>
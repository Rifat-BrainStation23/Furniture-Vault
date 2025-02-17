<?php
session_start();
define( "BASE_URL", "http://" . $_SERVER[ 'HTTP_HOST' ] );
define( "BASE_FOLDER", "" );

require_once $_SERVER['DOCUMENT_ROOT'] . '/models/user.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/cms/models/common.php';

$settings=common::getsitesettings();

define('sitecopyrights',$settings->copyright);
define('sitename', $settings->name);
define('siteslogam', $settings->title);

if ( isset( $_COOKIE[ 'objuser' ] ) ) {

	$_SESSION[ 'objuser' ] = $_COOKIE[ 'objuser' ];
}

if ( isset( $_SESSION[ 'objUser' ] ) ) {

	$objuser = unserialize( $_SESSION[ 'objUser' ] );
} else {

	$objuser = new user();
}



 $current = basename($_SERVER[ 'PHP_SELF' ]);
//echo($current);



$publicPages = array(
	BASE_FOLDER . "register.php",
	BASE_FOLDER . "login.php",
	BASE_FOLDER . "forgotpassword.php",
	BASE_FOLDER . "resetpassword.php"
);
$restrictedPages = array(
	BASE_FOLDER . "profile.php",
	BASE_FOLDER . "editprofile.php",
	BASE_FOLDER . "uploadmodel.php",
	BASE_FOLDER . "bookmarks.php",
	BASE_FOLDER . "bookmarkslist.php",
	BASE_FOLDER . "wishlist.php",
);

if(!isset($_SESSION['User_Info_ID']) && $current!='register.php' && $current!='login.php' && $current!='forgotpassword.php' && $current!='resetpassword.php' ){
     //$_SESSION[ 'msgrights' ] = "You must login to view this page";
    header( "Location:login.php");
}

if ( !$objuser->loggedin && in_array( $current, $restrictedPages) ) {
	 $_SESSION[ 'msgrights' ] = "You must login to view this page";
	header( "Location:login.php" );
}

if ( $objuser->loggedin && in_array( $current, $publicPages ) ) {
	header( "Location:" . BASE_URL . BASE_FOLDER  );
}

?>
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
            <link rel="shortcut icon" type="image/png" href="images/sitelogo/favicon.png"/>
        <meta name="cluster_hostname" content="frontend99">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
        <meta name='yandex-verification' content='46f114f2009500df' />
        <title><?=sitename?> - <?=siteslogam?></title>
        <meta name="description" content="3d model furniture, bathroom, nursery, materials, decoration, lighting and other 3d models, textures, kitchen, appliances, exterior, scripts - download in 3d max, Materials Vray, Mental Ray">
        <meta name="keywords" content="3d model, download">
        <link rel="stylesheet" href="css/custom.css" />
        <script type="text/javascript" src="js/custom.js"></script>
        <link href="images/sitelogo/favicon.png" rel="shortcut icon" type="image/x-icon" />
        <link rel="alternate" type="application/rss+xml" title="RSS" href="/3dmodels/rss" />
        <script src="cms/js/custom.js" type="text/javascript"></script>
        <link href="cms/css/custom.css" rel="stylesheet" type="text/css"/>
        <link href="cms/css/notyf.min.css" rel="stylesheet" type="text/css"/>
        <script src="cms/js/notyf.min.js" type="text/javascript"></script>
        <!--<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>-->
        <link href="css/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        
         <link href="cms/css/sweetalert2.css" rel="stylesheet" type="text/css"/>
        <script src="cms/js/sweetalert2.js" type="text/javascript"></script>
    </head>
    <body>
       
        <div class="top_line"></div>
        <div id="wrap">
            <header id="header" class="en">
                <h1>
                    <a href="index.php">
                        <img src="images/sitelogo/haederlogo.png"  style="" alt="" id="logo">
                    </a>
                </h1>
                <!--top_search begin-->
                <div id="search" class="eng js_hint_search_container">
                    <form action="index.php" method="get" class="js_hint_form" autocomplete="ON">
                        <input id="search_inp_top" type="text" onkeyup="gettagssuggetion_user('search_inp_top','loadmoretag')" name="keyword" class="txt" value="<?= isset($_REQUEST['keyword'])?$_REQUEST['keyword']:''?>" placeholder="Search" autocomplete="off">
                        <ul class="subtask-pick" id='loadmoretag' style="border-radius:10px;margin-top:27px;width:326px;"> 
                        </ul>
                        <input type="submit" id="resetbutton" onclick="loadingstart('resetbutton','loadingid')" class="sub" value="">
                    </form>
                </div>
                <!--js_hint_input top_search end-->
                
                <div class="user_field">
                    <?php 
                if(!$objuser->loggedin){
                    ?>
                    <a href="javascript:" onclick="show_captcha();
                            open_popup('#avtorisation_popup');" class="user_login">Login</a>
                    <a href="register.php" class="user_join">Join</a>
                <?php } else {
                   ?>
                    <a href="bookmarks.php" class="pro icon_bookmarks">Bookmarks</a>
                    <a href="profile.php"><?=$objuser->nickname?></a> &nbsp;
                    <a href="logout.php">Logout</a>
                <?php } ?>
                </div>
            </header>


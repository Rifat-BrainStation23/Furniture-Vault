<?php
$bookmarkscount = $objmodel->gettotalwishlistandfavourite($_SESSION['User_Info_ID']);
$page = basename($_SERVER['REQUEST_URI']);
?>
<div id="content" class="pdb_block"><div id="private_data_block" class="eng"><div class="person">
            <img width="80" height="80" src="<?php
if (is_file("users/images/" . $objuser->userid . "/" . $objuser->userid . ".png")) {
    echo "users/images/" . $objuser->userid . "/" . $objuser->userid . ".png";
} else {
    echo 'users/images/default/blank.gif';
}
?>" alt="<?= $objuser->nickname; ?>" class="avatar">
            <div class="name"><h1>
                    <?= $objuser->nickname ?>




                    <div class="cards1 cards_top"><div class="ban_cards cards"></div></div></h1></div><div class="reputation">
                <!--Reputation 0-->
            </div>
            <!-- <div class="stat">
             <div class="profive"><a href="/user/account">0 PRO</a><div class="prohint">PRO models are given once and not extended daily.
            You can use your access at any time. Minimum purchase - 2 PRO models.
            If you already have PRO access, any future purchases will be added up.
            In case of a loss or download failure of a model, you can restore it
            in the purchase history.</div></div><div class="threefree"><a href="/user/account">3 FREE</a><div class="prohint">30 FREE and Om models are given daily as a part of the paid period. Subscription does not allow to download PRO models. PRO access is charged separately and per model.</div></div></div>-->

             <div class="clear"></div></div><div class="person_data_menu">
            <ul>
                <li <?php if($page=='profile.php'){echo 'class="active"';}?>><a href="profile.php">Profile</a></li>
                <li <?php if($page=='usermodels.php'){echo 'class="active"';}?>><a href="usermodels.php">3D Models </a></li>
                <li <?php if($page!='profile.php' && $page!='usermodels.php'){echo 'class="active"';}?>><a href="bookmarks.php">Bookmarks (<?=$bookmarkscount?>)</a></li>
                
            </ul>
             </div>
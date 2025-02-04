<?php
require_once 'views/header.php';
require_once 'cms/models/model.php';
$objmodel = new model();
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
require_once 'views/userheader.php';
?>


<div id="user_info"><dl><dt>
            Name:
        </dt><dd><?=$objuser->fname;?></dd><dt>
            Date of registration:
        </dt><dd>
                            <?=$objuser->signupdate;?>
                    </dd><dt>
            Specialization:
        </dt><dd><?=$objuser->specialization;?></dd><dt>
            Locations:
        </dt><dd><?=$objuser->location;?></dd><dt>
            E-mail:
        </dt><dd>
            <?=$objuser->email;?>
        </dd><dt>
            Site:
        </dt><dd><?=$objuser->site;?></dd><dt>
            Gender:
        </dt><dd><?=$objuser->gender;?></dd><dt>
            Date of birth:
        </dt><dd><?=$objuser->birthday;?></dd><dt>
            Signature:
        </dt><dd><?=$objuser->signature;?></dd></dl><a href="editprofile.php" class="button_type_1 blue_button">
        Edit    </a></div></div></div>
            
            
<?php
require_once 'views/footer.php';
?>
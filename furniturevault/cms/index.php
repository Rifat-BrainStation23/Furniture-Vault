<?php
session_start();
if(isset($_SESSION['Admin_ID'])){
 header("location:dashboard.php"); 

}
$msg='';
$errormsg='';
if (isset($_SESSION['msg'])) {
      $msg = $_SESSION['msg'];
      unset($_SESSION['msg']);
}
if(isset($_SESSION['errormsg']))
{
    $errormsg=$_SESSION['errormsg'];
    unset($_SESSION['errormsg']);
    
}
if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
}
require_once 'models/common.php';
$settings=common::getsitesettings();
define('sitecopyrights',$settings->copyright);
define('sitename', $settings->name);
define('siteslogam', $settings->title);
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><?=sitename?> - Admin Login</title>
    <link rel="shortcut icon" type="image/png" href="../images/sitelogo/favicon.png"/>
    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div class="container">
        <div class="row">
            <div class="row">
            <div class="col-md-4 col-md-offset-4">
                
                <div class="login-panel panel panel-default">
                    <div style="background-color: #535353;text-align: center;">
                    <img alt="<?=sitename?>" src="../images/sitelogo/haederlogo.png">
                    </div>
                    <div class="panel-heading">
                        <h3 class="panel-title">Sign In</h3>
                        
                    </div>
                    <div class="text-center">
                   <span class="text-danger"><?=$msg?></span>
                        <span class="text-warning"><?=$errormsg?></span>
                    </div>
                    <div class="panel-body">
                         
                        <form role="form" action="process/adminprocess.php" method="post">
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Username" name="username" type="text" autofocus>
                                <span class="text-danger">
				<?php 
                                if(isset($errors['username']))
                                {
                                    echo $errors['username'];
                                }
                            	?>
			</span>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Password" name="password" type="password" value="">
                                	<span class="text-danger">
                                        <?php 
                                        if(isset($errors['password']))
                                        {
                                            echo $errors['password'];
                                        }
                                        ?>
                                    </span>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input name="remember" type="checkbox" value="Remember Me">Remember Me
                                    </label>
                                </div>
                                <!-- Change this to a button or input when using this as a form -->
                                <button class="btn btn-lg btn-success btn-block">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="js/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="js/sb-admin-2.js"></script>

</body>

</html>

<?php 
session_start();
if(!isset($_SESSION['Admin_ID'])){
    header("location:index.php");
}
require_once 'models/admin.php';
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
//require_once("../models/admin.php");
if(isset($_SESSION['objadmin'])){
	$objadmin=unserialize($_SESSION['objadmin']);
}
else{
	$objadmin=new admin();
}
$current=$_SERVER['PHP_SELF'];
$publicpages=array(
	
	"admin.php"
				  );

if(!$objadmin->loggedin && !in_array($current, $publicpages)){
   
   $_SESSION['msg']="You must loggedin to view this page";
    header("location:index.php");
}
require_once 'models/common.php';
$settings=common::getsitesettings();
define('sitecopyrights',$settings->copyright);
define('sitename', $settings->name);
define('siteslogam', $settings->title);
?>
    <head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><?=sitename?> - Admin Panel</title>
    <link rel="shortcut icon" type="image/png" href="../images/sitelogo/favicon.png"/>
    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin-2.css" rel="stylesheet">
    <link href="css/sweetalert2.css" rel="stylesheet" type="text/css"/>
    <link href="css/notyf.min.css" rel="stylesheet" type="text/css"/>
    <!-- Morris Charts CSS -->
    <link href="vendor/morrisjs/morris.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet" type="text/css"/>
    <!-- Custom Fonts -->
    <link href="fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <script src="js/jquery.min.js"></script>
    <script src="js/custom.js" type="text/javascript"></script>
    <script src="js/notyf.min.js" type="text/javascript"></script>
    <script src="js/sweetalert2.js" type="text/javascript"></script>
    
    
    <script src="vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script src="vendor/datatables-plugins/dataTables.bootstrap.min.js"></script>
    <script src="vendor/datatables-responsive/dataTables.responsive.js"></script>

    <script src="js/tinymce/tinymce.min.js"></script>
    <script>
        tinymce.init({ 
            selector:'#Modeldetailstext', 
            plugins: "autolink",
            default_link_target: "_blank"
        });
    </script>
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="dashboard.php">Admin Panel</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i><?php echo $objadmin->username; ?> &nbsp;<i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="adminprofile.php"><i class="fa fa-user fa-fw"></i>Change password</a>
                        </li>
                        <?php
                        if($_SESSION['cms_model']=='1')
                        {?>
                        <li><a href="settings.php"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <?php 
                        }?>
                        <li class="divider"></li>
                        <li><a href="process/logoutadmin.php"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    
                </li>
                <!-- /.dropdown -->
            </ul>
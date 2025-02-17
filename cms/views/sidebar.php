<?php
// session_start();//
// echo '<pre>';
// print_r($_SESSION);
// exit;
?>

<div class="navbar-default sidebar" role="navigation">
    <div class="sidebar-nav navbar-collapse">
        <ul class="nav" id="side-menu">
            <?php
            if($_SESSION['cms_model']=='1')
            {?>
            <li>
                <a href="index.php"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
            </li>
            <li>
                <a href="settings.php"><i class="fa fa-building fa-fw"></i> Company Info</a>
            </li>
            <li>
                <a href="#"><i class="fa fa-users fa-fw"></i> Users<span class="fa arrow"></span></a>
                <ul class="nav nav-second-level">
                    <li>
                        <a href="adduser.php">Add</a>
                    </li>
                    <li>
                        <a href="approveusers.php">Approve</a>
                    </li>
                    <li>
                        <a href="modifyuser.php">View/Edit</a>
                    </li>
                </ul>
            </li>
            
            <li>
                <a href="#"><i class="fa fa-group fa-fw"></i> Groups<span class="fa arrow"></span></a>
                <ul class="nav nav-second-level">
                    <li>
                        <a href="addgroup.php">Add Group</a>
                    </li>
                    <li>
                        <a href="viewgroup.php">View/Edit Group</a>
                    </li>
                </ul>
            </li>
            
            <li>
                <a href="#"><i class="fa fa-certificate fa-fw"></i> Group Policy<span class="fa arrow"></span></a>
                <ul class="nav nav-second-level">
                    <li>
                        <a href="grouprights.php">Rights</a>
                    </li>
                    <li>
                        <a href="categoryview.php">Category viewing by user</a>
                    </li>
                </ul>    
            </li>
            
            <li>
                <a href="#"><i class="fa fa-tags fa-fw"></i> Category / Subcategory<span class="fa arrow"></span></a>
                <ul class="nav nav-second-level">
                    <li>
                        <a href="createcategory.php">Create</a>
                    </li>
                    <li>
                        <a href="modifycategory.php">Modify</a>
                    </li>
                </ul>
            </li>
            
            <li>
                <a href="#"><i class="fa fa-paperclip fa-fw"></i> Style<span class="fa arrow"></span></a>
                <ul class="nav nav-second-level">
                    <li>
                        <a href="createstyle.php">Create Style</a>
                    </li>
                    <li>
                        <a href="modifystyle.php">Modify Style</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#"><i class="fa fa-paperclip fa-fw"></i> Manufacturer<span class="fa arrow"></span></a>
                <ul class="nav nav-second-level">
                    <li>
                        <a href="createmanu.php">Create Manufacturer</a>
                    </li>
                    <li>
                        <a href="modifymanu.php">Modify Manufacturer</a>
                    </li>
                </ul>
            </li>
            <?php
            }
            ?>            
            <li>
                <a href="#"><i class="fa fa-modx fa-fw"></i> Models<span class="fa arrow"></span></a>
                <ul class="nav nav-second-level">
                    <?php
                    if($_SESSION['cms_model']=='1')
                    {?>
                    <li>
                        <a href="approvemodels.php">Approval</a>
                    </li>
                    <?php 
                    }
                    ?>
                    <li>
                        <a href="models.php">Modify</a>
                    </li>
                    <li>
                        <a href="addmodels.php">Mass Upload</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="tags.php"><i class="fa  fa-tags"></i> Tags</a>
            </li>
            <?php
            if($_SESSION['cms_model']=='1')
            {?>
            <li>
                <a href="settings.php"><i class="fa fa-cogs fa-fw"></i> Settings</a>
            </li>
            <?php
            }
            ?>
        </ul>
    </div>
   
</div>

</nav>


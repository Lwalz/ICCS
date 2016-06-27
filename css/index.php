<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ICCS-Rome</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans:700,400" rel="stylesheet" type="text/css">

</head>

<body>


    <!--Top header of page-->
    <section id="top-banner">

        <!--Image for top of page, within top-banner, Desktop-->
        <a href="index.html"><img src="images/banner3.png" id="banner" alt="ICCS Banner"></a>
    </section>

    <!-- Banner, mobile -->
    <section id="top"><img src="images/banner4.png" id="mobilebanner" alt="ICCS Banner"></section>

    <!--Slideshow for mobile-->
    <div id="carousel1" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carousel1" data-slide-to="0" class="active"></li>
            <li data-target="#carousel1" data-slide-to="1"></li>
            <li data-target="#carousel1" data-slide-to="2"></li>
        </ol>

        <!--Image library for slides-->
        <div class="carousel-inner" role="listbox">
            <div class="item active"><img src="images/bridge.jpg" alt="First slide image" class="center-block"> </div>
            <div class="item"><img src="images/walking.jpg" alt="Second slide image" class="center-block"> </div>
            <div class="item"><img src="images/night.jpg" alt="Third slide image" class="center-block"> </div>
        </div>
        <a class="left carousel-control" href="#carousel1" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#carousel1"
            role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>

    <!--Contains main options of page-->
<div id="container">

        <section id="menu">
            <div id="about" class="o-bar"><a href="pages/about.html" title="about">about us</a></div>
            <div id="academics" class="o-bar"><a href="pages/academics.html" title="academics">academics</a></div>
            <div id="sites" class="o-bar"><a href="pages/sites.html" title="sites">where we go</a></div>
            <div id="costs" class="o-bar"><a href="pages/cost.html" title="costs">costs</a></div>
        </section>

        <section id="info-bar2">
            <div id="info-text2">
              For over 50 years we have offered the best Classics students the privilege of a

semester of study in Rome. Our double-credit Ancient City course will bring you into

direct contact with the ancient monuments and give you an understanding and

appreciation of the Classical World which you could not hope to get in the North

American classroom.<br><br>

Our classes in Ancient Greek and Latin will keep you on track towards your Classics

degree, while our Italian and Art History classes offer you substantial contact with

postclassical and modern Italian culture.

Our facilities in Rome’s gracious, tree-lined Monteverde Vecchio neighborhood are

complete with a well stocked library, a cool garden, and famously good meals.</div>
        </section>


        <div role="tabpanel" id="tabz">
         <ul class="nav nav-tabs" role="tablist">
           <li class="active"><a href="#home1" data-toggle="tab" role="tab">useful links</a></li>
           <li><a href="#paneTwo1" data-toggle="tab" role="tab">people</a></li>
         </ul>
         <div id="tabContent1" class="tab-content">
           <div class="tab-pane fade in active" id="home1">
             <a href="http://iccsnews.com">alumni, donations, further information</a><a href="https://www.studyabroad101.com/programs/iccs-centro-rome-the-intercollegiate-center-for-classical-studies-in-rome">abroad 101</a><a href="https://en.wikipedia.org/wiki/Intercollegiate_Center_for_Classical_Studies">wikipedia article on the ICCS Rome</a><a href="https://www.facebook.com/groups/212322858795713/">facebook alumni page</a>
           </div>
           <div class="tab-pane fade" id="paneTwo1">
             People<br>People<br>People<br>People<br>People<br>People<br>People<br>People<br>People
           </div>
        </div>
        </div>


        <section id="apply">
            <div id="applyButton">apply
            </div>
        </section>

    </div>

    <?php include 'footer.php';?>

    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/jquery-1.11.2.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/index.js" type="text/javascript"></script>

</body>

</html>

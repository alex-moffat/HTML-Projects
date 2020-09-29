# HTML-Projects
Projects contained in this folder are using HTML5, CSS3, and JavaScript. Some projects are very small and were created in a few minutes and other took up to 1 - 4 days. The content menu highlights a cross section of projects and code samples of various complexity.   

## CONTENTS
- [Bootstrap One-Page Website](#bootstrap-one-page-website)
- [Vanilla One-Page Website](#vanilla-one-page-website)

## Bootstrap One-Page Website
Basic Bootstrap HTML, CSS, JavaScript website created in about 1.5 days from concept to complete. 

### Commit
- Sticky navbar with links
- Basic colors 
- Jumbotron
- Flexbox/Rows/Columns
- Cards/deck
- Modal Form
- Carousel
- Newletter link

### Video
<a href="http://www.youtube.com/watch?feature=player_embedded&v=NuLyN63lnTA" target="_blank"><img src="https://github.com/alex-moffat/HTML-Projects/blob/master/Bootstrap4_project/Screenshot_cinema_1.jpg" alt="Bootstrap_Website" border="10" /></a>

### HTML
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
     <!-- REQUIRED (Bootstrap) meta tags -->
    <title>Academy Cinemas</title>
    <link rel="icon" href="./img/logo/favicon.ico" type="image/x-icon">    
    <meta name="author" content="Alex Moffat">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- BOOTSTRAP CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
      <!--========== NAVIGATION ==========-->
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-info">
        <!-- Keep code to maintain collapsing menu for responsive screen size - remove text from <a> tag -->
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link text-light" href="#about">About</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link text-light" href="#showtimes">Showtimes</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link text-light" href="#deals">Deals</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search">
            <button class="btn btn-primary my-2 my-sm-0 text-light" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <!--========== BANNER - Jumbotron ==========-->  
      <div class="jumbotron jumbotron-fluid bg-info text-center">
          <div class="container">
            <h1 class="display-4 text-light">Academy Cinemas</h1>
            <p class="lead text-light">Sit back, relax, and enjoy the show...</p>
          </div>
      </div>
        
      <!--========== ABOUT - 3 columns ==========-->
      <div id="about" class="container mt-5">
        <div class="row pt-5">
          
          <div class="col-sm pt-3">
            <img src="./img/pdx.jpg" class="img-fluid" alt="Responsive image">
          </div>
            
          <div class="col-sm pt-3">
            <h3>Accommodations</h3>
            <p>Located in beautiful Portland, Oregon’s Pearl district, our reels have been spinning since 1959.</p>
            <p>Showing our guests a great time is our passion and seeing their smiles is our pleasure!</p>
            <p>All our auditoriums are equipped with brand new Christy 3D&reg; sound systems!</p>
            <p>Relax in our, extra wide, plush cushioning recliners. Seating arrangement is disability friendly &#9855;.</p>
          </div>
          
          <div class="col-sm pt-3">
            <h3>Now Playing</h3>
            <ul class="list-group">
                <li class="list-group-item">
                    <a class="nav-link" href="#showtimes">Kong: Skull Island</a>
                </li>
                <li class="list-group-item">
                    <a class="nav-link" href="#showtimes">Ghost in the Shell</a>
                </li>
                <li class="list-group-item">
                    <a class="nav-link" href="#showtimes">Beauty and the Beast</a>
                </li>                        
            </ul>                
          </div>

        </div>
      </div>

      <!--========== CAROUSEL - 4 latest movies ==========-->
      <div id="carouselExampleIndicators" class="carousel slide mt-3" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" data-pause=false data-interval="2000"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" data-pause=false data-interval="2000"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" data-pause=false data-interval="2000"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3" data-pause=false data-interval="2000"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./img/aquaman_w.jpg" class="d-block w-100" alt="Aquaman">
          </div>
          <div class="carousel-item">
            <img src="./img/thor_w.jpg" class="d-block w-100" alt="Thor">
          </div>
          <div class="carousel-item">
            <img src="./img/brave_w.jpg" class="d-block w-100" alt="Brave">
          </div>
          <div class="carousel-item">
            <img src="./img/300_w.jpg" class="d-block w-100" alt="300">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>



      <!--========== SHOWTIMES ==========-->
      <div id="showtimes" class="container mt-5">
          <h3 class="mb-4">Showtimes:</h3>
          <div class="card-deck">
              <div class="card shadow">
                <img class="card-img-top" src="./img/kongskullisland.jpg" alt="Kong Skull Island">
                <div class="card-body">
                  <h5 class="card-title">Kong Skull Island</h5>
                  <p class="card-text">A team of scientists explore an uncharted island in the Pacific, venturing into the domain of mighty Kong, and must fight to escape a primal Eden.</p>
                </div>
                <div>
                  <p class="card-block text-center">
                      <span class="badge badge-pill badge-info">1:00pm</span>
                      <span class="badge badge-pill badge-info">3:00pm</span>
                      <span class="badge badge-pill badge-info">5:30pm</span>
                      <span class="badge badge-pill badge-info">7:00pm</span>
                      <span class="badge badge-pill badge-info">9:30pm</span>
                  </p>    
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div class="card shadow">
                <img class="card-img-top" src="./img/ghostintheshell.jpg" alt="Ghost in the Shell">
                <div class="card-body">
                  <h5 class="card-title">Ghost in the Shell</h5>
                  <p class="card-text">In the future, Major Mila Killian is the first of her kind: A human saved from a terrible crash, who is cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.</p>
                </div>
                <div>
                  <p class="card-block text-center">
                      <span class="badge badge-pill badge-info">1:00pm</span>
                      <span class="badge badge-pill badge-info">3:00pm</span>
                      <span class="badge badge-pill badge-info">5:30pm</span>
                      <span class="badge badge-pill badge-info">7:00pm</span>
                      <span class="badge badge-pill badge-info">9:30pm</span>
                  </p>    
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div class="card shadow">
                <img class="card-img-top" src="./img/beautyandthebeast.jpg" alt="Beauty and the Beast">
                <div class="card-body">
                  <h5 class="card-title">Beauty and the Beast</h5>
                  <p class="card-text">A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman, he keeps prisoner.</p>
                </div>
                <div>
                  <p class="card-block text-center">
                      <span class="badge badge-pill badge-info">1:00pm</span>
                      <span class="badge badge-pill badge-info">3:00pm</span>
                      <span class="badge badge-pill badge-info">5:30pm</span>
                      <span class="badge badge-pill badge-info">7:00pm</span>
                      <span class="badge badge-pill badge-info">9:30pm</span>
                  </p>    
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
          </div>              
      </div>

      <!--========== DEAL - Jumbotron ==========-->  
      <div id="deals" class="jumbotron jumbotron-fluid bg-info text-center mt-5">
        <div class="container">
          <h1 class="display-4 text-light">Movie Deals</h1>
          <p class="lead text-light">Have more fun and save a bundle with our monthly deals.</p>                
        </div>
        <button type="submit" class="btn btn-outline-light p-3" data-toggle="modal" data-target="#register">See monthly movie deals!</button>
      </div>

      <!--========== REWARDS - email ==========-->
      <div id="rewards" class="text-center mt-5">
        <form>
          <h1 class="text-primary pt-5 mb-4">Sign up for Movie Club Rewards!</h1>
          <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <button type="submit" class="btn btn-primary popover-dismiss" data-container="body" data-toggle="popover" data-placement="right" title="MEMBER REWARDS" data-content="Submit your email to receive exclusive flash sale deals right to your inbox. Opt out at any time.">
            Submit
          </button>
        </form>
      </div>
      
      <!--========== MODAL - form ==========-->
      <div id="register" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Register to receive movie deals</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="fName">First Name</label>
                  <input type="text" class="form-control" id="fName" placeholder="Firstname">
                </div>
                <div class="form-group">
                  <label for="lName">Last Name</label>
                  <input type="text" class="form-control" id="lName" placeholder="Lastname">
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Email Address" aria-describedby="emailHelp">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="pWord">Password</label>
                  <input type="password" class="form-control" id="pWord" placeholder="Password">
                </div>
                <p>Check all the options you want:</p>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked>
                  <label class="form-check-label" for="inlineCheckbox1">Weekly Newsletter</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                  <label class="form-check-label" for="inlineCheckbox2">Special Event Invites</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                  <label class="form-check-label" for="inlineCheckbox3">Vendor Promotions</label>
                </div>                
              </form>              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <!--========== BOTTOM ==========-->
      <div class="container my-5">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <small><a class="nav-link active" href="#deals">Movie Rewards</a></small>
          </li>
          <li class="nav-item">
            <small><a class="nav-link" href="#">Movies@news.org</a></small>
          </li>
          <li class="nav-item">
            <small><a class="nav-link" href="#">Info@academycinemas.com</a></small>
          </li>
          <li class="nav-item">
            <small class="nav-link">&copy;2019 Academy Cinemas&reg;</small>
          </li>
        </ul>
      </div>
    </div>
    
    
    <!--=========================================
                BOOTSTRAP SCRIPTS 
    ==========================================-->
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>        
  
    <script>
      $('.popover-dismiss').popover({
        trigger: 'hover',
        delay: {'show':500, 'hide':200}
      })
    </script>

  </body>
</html>
```

## Vanilla One-Page Website
Basic vanilla HTML, CSS, JavaScript website created in about 4 days. No Frameworks or templates were used. This project was done to satisfy requirements for The Tech Academy Bootcamp.

### Commit
- Fixed Menu with logo and JS animated buttons
- Custom color themes and fonts
- Signin JS popup with sticky positioning
- Embedded Youtube video
- Background Video with autoplay
- Form with JS validation
- Popup lightbox with associated titles and text
- Custom rollover effects
- JS ticker tape effect
- JS Intro text fade effect

### Video
<a href="http://www.youtube.com/watch?feature=player_embedded&v=Haga0Cn2OuA" target="_blank"><img src="https://github.com/alex-moffat/HTML-Projects/blob/master/One_Page%20Website/Screenshot_mandelkorn_studio.jpg"  
alt="One-Page-Website" border="10" /></a>

### HTML
```HTML
<!DOCTYPE html>
<html lang="en">
	<head>
		<link rel="icon" href="./images/icons/Studio_Logo.png" type="image/gif" sizes="16x16">
		<title>Mandelkorn Studio</title>
		<meta charset="utf-8">
		<meta name="author" content="Alex_Moffat">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="./css/one_page_website.css">
		<script src="./JS/one-page_website.js"></script>
	</head>
	<body onLoad='loadMe()'>
		<!-- HEADER -->
		<header>
			<img src="./images/icons/Studio_Logo.png" width="50">
			&nbsp; Mandelkorn Studio				
		</header>
		<!--End Header -->
		
		<!--========== NAV -->
		<nav>
			<div>
				<ul class="menu">
					<li><a href="#home">HOME</a></li>
					<li><a href="#services">SERVICES</a></li>
					<li><a href="#about">ABOUT</a></li>
					<li><a href="#contact">CONTACT</a></li>
					<li><a class="btn" onclick="openForm()" href='#home'>LOGIN</a></li>					
				</ul>
			</div>
		</nav>
				
		<!--========== LOGIN POPUP -->
		<div class="form-popup" id="Login_Popup" >
			<form action="" class="form-container" onsubmit="return validateForm()" method="post">
				<h3>LOGIN</h3>
			
				<label for="email"><b>Email</b></label>
				<input type="email" placeholder="Enter Email" name="email" required>
			
				<label for="psw"><b>Password</b></label>
				<input type="password" placeholder="Enter Password" name="psw" required>
			
				<button type="submit" class="btn">Login</button>
				<button type="submit" class="btn" onclick="closeForm()">Close</button>
			</form>
		</div>


		<!---------- HOME -->
		<div id="home">
			<div class="container">
				<video autoplay muted loop>
					<source src="./video/bannerVideo.mp4" type="video/mp4" id="backVideo">
					Your browser does not support this video type.
				</video>
				<div class="centeredBox">
					<span class="head-main">Professional Vocal Training and Performance</span>
					<h2 class='fade'>Music Theater &nbsp;|&nbsp Opera &nbsp;|&nbsp Pop</h2>												
				</div>
				
			</div>
		</div>
		<!-- END HOME -->
		<div class='stinky-container'>
			<button class="sticky-btn" onclick="openForm()">LOGIN</button>
		</div>		

		<!--========== LIGHTBOX ==========-->
		<section id="Lightbox">
			<h1>PERFORMANCE READY</h1>
			<div class="ticker-tape">
				<h3 class="tape">Get yourself performance ready for all different venues and situations. Get the skillsets you need with custom tailored training for the goals you have as an artist. &nbsp;</h3>
			</div>
			
			<!--========== Images used to open the lightbox -->
			<div class="Row">
				<div class="Thumb">
					<img class='Img_Thumb' src="./images/auditorium.jpg" alt='Small House' onclick="openLightBox(1)">
					<p class='Thumb_Text'>Click</p>
				</div>
				<div class="Thumb">
					<img class='Img_Thumb' src="./images/sydney-opera-house.jpg" alt='Big House' onclick="openLightBox(2)">
					<p class='Thumb_Text'>Click</p>
				</div>
				<div class="Thumb">
					<img class='Img_Thumb' src="./images/moulin-rouge.jpg" alt='Broadway' onclick="openLightBox(3)">
					<p class='Thumb_Text'>Click</p>
				</div>
				<div class="Thumb">
					<img class='Img_Thumb' src="./images/ballet.jpg" alt='Chorus' onclick="openLightBox(4)">
					<p class='Thumb_Text'>Click</p>
				</div>
				<div class="Thumb">
					<img class='Img_Thumb' src="./images/chorus.jpg" alt='Soloist' onclick="openLightBox(5)">
					<p class='Thumb_Text'>Click</p>
				</div>
				<div class="Thumb">
					<img class='Img_Thumb' src="./images/pop-star.jpg" alt='Pop Star' onclick="openLightBox(6)">
					<p class='Thumb_Text'>Click</p>
				</div>
			</div>

			<!--========== The Lightbox -->
			<div id="Light_Box" class="Light_Box">
				<span class="Close Cursor" onclick="closeLightBox()">&times;</span>
				<div class="Box_Content">
					<!--===== SLIDE 1 -->
					<div class="Slide">
						<img class='Img_Full' src="./images/auditorium.jpg" alt='Small House' data-caption='Connection with your character and music translates to the audience.'>
						<div class='Img_Text'></div>
					</div>
					<!--===== SLIDE 2 -->
					<div class="Slide">
						<img class='Img_Full' src="./images/sydney-opera-house.jpg" alt='Big House' data-caption='Technical perfection, projection, placement and stage presence.'>
						<div class='Img_Text'></div>
					</div>
					<!--===== SLIDE 3 -->
					<div class="Slide">
						<img class='Img_Full' src="./images/moulin-rouge.jpg" alt='Broadway' data-caption='Communication through text and music with belt and mixed-belt technique.'>
						<div class='Img_Text'></div>
					</div>
					<!--===== SLIDE 4 -->
					<div class="Slide">
						<img class='Img_Full' src="./images/ballet.jpg" alt='Chorus' data-caption='Finding the right part for your voice and using good technique, even in a crowd.'>
						<div class='Img_Text'></div>
					</div>
					<!--===== SLIDE 5 -->
					<div class="Slide">
						<img class='Img_Full' src="./images/chorus.jpg" alt='Soloist' data-caption='Projecting, finding your unique voice and communication through text.'>
						<div class='Img_Text'></div>
					</div>
					<!--===== SLIDE 6 -->
					<div class="Slide">
						<img class='Img_Full' src="./images/pop-star.jpg" alt='Pop Star' data-caption='Microphone technique, pop style and spot-on riffing key to this game.'>
						<div class='Img_Text'></div>
					</div>

					<!--===== ARROW NAVIGATION -->
					<div class="prev" onclick="changeSlide(-1)">&#10094;</div>
					<div class="next" onclick="changeSlide(1)">&#10095;</div>
			
					<!--===== CAPTION TEXT -->
					<div class="Container_Caption">
						<p id="Caption"></p>
					</div>
			
					<!--===== THUMBNAIL NAVIGATION -->
					<div class="Column">
						<img class='Demo' src="./images/auditorium.jpg" alt='Small House' onclick="slideShow(1)">
					</div>
					<div class="Column">
						<img class='Demo' src="./images/sydney-opera-house.jpg" alt='Big House' onclick="slideShow(2)">
					</div>
					<div class="Column">
						<img class='Demo' src="./images/moulin-rouge.jpg" alt='Broadway' onclick="slideShow(3)">
					</div>
					<div class="Column">
						<img class='Demo' src="./images/ballet.jpg" alt='Chorus' onclick="slideShow(4)">
					</div>
					<div class="Column">
						<img class='Demo' src="./images/chorus.jpg" alt='Soloist' onclick="slideShow(5)">
					</div>
					<div class="Column">
						<img class='Demo' src="./images/pop-star.jpg" alt='Pop Star' onclick="slideShow(6)">
					</div>					
				</div>
			</div>			
		</section>		
		
		<!---------- SERVICES -->
		<section>
			<div id="services">
				<h1>SERVICES</h1>
				<div>
					<!---------- PHOTO-CONTAINER 1 -->
					<div> <!-- Package border -->
						<div> <!-- Image -->
							<img src="./Images/Thumb/voice.jpg" width="400" alt="Voice Lesson">
							<div> <!-- Overlay -->
								<h3>Voice Lesson</h3>
								<p>Personalized voice technique: 50 minutes one-on-one.</p>
							</div>
						</div>					
					</div>
					<!-- END PHOTO-CONTAINER 1 -->
					
					<!---------- PHOTO-CONTAINER 2 -->
					<div> <!-- Package border -->
						<div> <!-- Image -->
							<img src="./Images/Thumb/coach.jpg" width="400" alt="Vocal Coaching">
							<div> <!-- Overlay -->
								<h3>Vocal Coaching</h3>
								<p>Song presentation and diction: 50 minutes one-on-one.</p>
							</div>
						</div>					
					</div>
					<!-- END PHOTO-CONTAINER 2 -->
					
					<!---------- PHOTO-CONTAINER 3 -->
					<div> <!-- Package border -->
						<div> <!-- Image -->
							<img src="./Images/Thumb/audition.jpg" width="400" alt="Audition Prep">
							<div> <!-- Overlay -->
								<h3>Audition Preparation</h3>
								<p>Repertoire, character and presentation development: 50 minutes one-on-one.</p>
							</div>
						</div>					
					</div>
					<!-- END PHOTO-CONTAINER 3 -->
										
				</div>
			</div>
		</section>
		<!-- END SERVICES -->
		
		<!---------- ABOUT -->
		<div id="about">
			<div>
				<h1>ABOUT ME</h1>
				<div class='container40-center'>
					<img class='scale-20' src="./Images/Lisa.jpg" alt="Lisa Mandelkorn">
				</div>
				<h2 class='center_text'>Lisa Mandelkorn</h2>				
				<DIV><!-- Overlay -->
					<h3><span>Professional Singer, Director, Librettist and Teacher</span></h3>
					<p>Prior to moving to Seattle from New York City in 2010, Lisa Mandelkorn was performing roles such as Adele in Die Fledermaus, Rosina in Barber of Seville, and Gretel in Hansel and Gretel in such opera houses as New York City Opera, Lincoln Center Festival, and Glimmerglass Opera. After the move she decided she wanted to try music theater and other more modern forms of vocal performance, so she tried her hand at such roles as Mary Poppins (Bainbridge Performing Arts), Judy Garland in Judy Garland’s Scary Little Christmas (ArtsWest), and Donna in Mamma Mia (Seattle Musical Theater). She has been nominated twice for Best Actress by the Kitsap Sun and South Sound Critics Award. Lisa has a thriving vocal studio with students from age 14 - 74 of all voice types. She loves helping her students find their true voices, giving them all the tools they need to make music their own way.</p>		
					<iframe width="1195" height="672" src="https://www.youtube.com/embed/Ugee4sTtmXM?start=39" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</DIV>
			</div>
		</div>
		<!-- END HOME -->
		
		<!---------- CONTACT -->
		<section>
			<div id="contact">
				<h1>CONTACT</h1>
				<div class="padBottom">
					<div class=formBox>
						<h2 class="center_text">Time to get serious about your voice.</h2>
						<h3>What I want to know about you:</h3>
						<div class="contactForm">
							<form name='contactForm' action="" onsubmit="return validateForm()" method="post">
								<label for="fName">First Name </label><input name='fName' class="rsvp" type="text" value="" placeholder="First Name"><br>
								<label for="lName">Last Name </label><input name='lName' class="rsvp" type="text" value="" placeholder="Last Name"><br>
								<label for="email">Email </label><input name='email' class="rsvp" type="email" value="" placeholder="Email Address"><br>
								<label for="phone">Phone </label><input name='phone' class="rsvp" type="tel" value="" placeholder="206-123-4569" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"><br>
								<label for="goals">Goals </label><input name='goals' class="rsvp" type="text" value="" placeholder="Briefly describe previous experience and your goals for professional training"><br>
								<div class="container clearfix marginTop">
									<div class="column_2">
										Voice:<br>
										<input class="voice" type="radio" name="voice" value="Soprano"> Soprano<br>
										<input class="voice" type="radio" name="voice" value="Alto"> Alto<br>
										<input class="voice" type="radio" name="voice" value="Tenor"> Tenor<br>
										<input class="voice" type="radio" name="voice" value="Baritone"> Baritone<br>
										<input class="voice" type="radio" name="voice" value="Bass"> Bass
									</div>
									<div class="column_2">
										Gender:<br>
										<input class="gender" type="radio" name="gender" value="Male"> Male<br>
										<input class="gender" type="radio" name="gender" value="Female"> Female<br>
										<input class="gender" type="radio" name="gender" value="Other"> Other<br>
									</div>									
								</div>
								<div class="container marginTop">
									<input type="submit" value="Submit">									
								</div>
							</form>
						</div>		
					</div>
				</div>
			</div>
		</section>
		<!-- END CONTACT -->
		
		
		<!-- FOOTER -->
		<footer>
			www.mandelkornstudio.com &nbsp;|&nbsp; &copy; 2020
		</footer>	
		<!-- END FOOTER -->		
	</body>
</html>
```

### JS
```JS
//========== DECLARE GLOBAL VARIABLES & CONSTANTS ==========
//==========================================================
var SlideList, DemoList, ImgList, SlideCount, SlideIndex;


//========== AUTO FIRE - AFTER PAGE LOAD ==========
//=================================================
 
function loadMe() {
    //========== LOG
    console.log("Page Loaded");
    //===== LOAD LISTS - global variables
    loadLists();
    //========== LOAD TEXT
    loadAltText();
    console.log("Number of slides: " + SlideCount); 
    console.log(DemoList);
    //========== FADE IN
    fade(1); // 1= fade in 0= fadeout

}

//========== FUNCTIONS & METHODS ===============
//==============================================

 //===== LOAD LISTS SlideList, Demolist, ImgList | set slideShow to first slide | console log
 function loadLists() {
    SlideList = document.getElementsByClassName("Slide"); // finds all slides by class and puts them in a list
    ImgList = document.getElementsByClassName('Img_Full'); // finds all full size photos by class and puts them in a list
    DemoList = document.getElementsByClassName("Demo"); // finds all demo photos by class and puts them in a list
    console.log(DemoList);
    SlideCount = SlideList.length;
    SlideIndex = 1;
}

//========== LOAD TEXT - pull alt text from images and put into captions over photos
function loadAltText() {
    var textArray = document.getElementsByClassName('Img_Text');
    for (let i=0; i < ImgList.length; i++) {
        textArray[i].innerHTML = ImgList[i].alt;
        console.log(ImgList[i].alt);
    }
}

//========== OPEN LIGHTBOX
function openLightBox(n) {
    document.getElementById("Light_Box").style.display = "block";
    if (n != undefined) {
        SlideIndex = n;
    } else {
        SlideIndex = 1;
    }    
    slideShow();
}

//========== CLOSE LIGHTBOX
function closeLightBox() {
    document.getElementById("Light_Box").style.display = "none";
}

//========== CHANGE SLIDE - increment/decrement slide number
function changeSlide(n) {
    SlideIndex += n;
    //===== Upper or lower limit exceeded - pass through - set global variable SlideIndex
     if (SlideIndex > SlideCount) { 
        SlideIndex = 1;
    } else if (SlideIndex < 1) {
        SlideIndex = SlideCount;
    }     
    slideShow();
}

//========== SLIDESHOW - Display change of slides and demo
function slideShow(n) {
    if (n != undefined) {
        SlideIndex = n;
    }
    var captionText = '';
    var captionElement = document.getElementById('Caption');
    console.log("slideShow() --> SlideIndex = " + SlideIndex);
   //===== Conditional loop - repeat through all slides  
    for (var i = 0; i < SlideCount; i++) {
        //===== ADD/REMOVE CLASS - style active/inactive slides
        if (i == SlideIndex-1) {
            SlideList[i].style.display = "block";
            DemoList[i].classList.add("active");
            //===== SET CAPTION
            captionText = ImgList[i].getAttribute("data-caption");
        } else {
            SlideList[i].style.display = "none";    
            DemoList[i].classList.remove("active");            
        }    
    } 
    document.getElementById('Caption').innerHTML = captionText;    
} 

//========== FADE
function fade(n) {
    let fList = document.getElementsByClassName('fade');
    for (i = 0; i < fList.length; i++) {
        if (n=1) {
            fList[i].classList.add('fade-in');
        } else {
            fList[i].classList.remove('fade-in');
        }        
    }
}

//========== FORM VALIDATION
function validateForm() {
    var nList = ['fName','lName','email','phone','goals','voice','gender']; // preload all the form inputs to be checked
    var a = "Please make sure your form is complete.";
    for (i=0; i<nList.length; i++) {
        console.log(document.forms["contactForm"][nList[i]].value);
        if (document.forms["contactForm"][nList[i]].value == '') {
            alert(a);
            return false;
        }
    }    
}

//========== POPUP LOGIN
function openForm() {
    document.getElementById("Login_Popup").style.display = "block";
}
  
function closeForm() {
    document.getElementById("Login_Popup").style.display = "none";
}
```

### CSS
```CSS
/*=======================================
        GENERIC STYLES
=======================================*/
html {
    font-family: sans-serif;
    font-size: 62%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
 
nav {
    height: 100%;
    width: 100%;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    text-align: center;
    z-index: 100;
}

header {
    position: fixed;
    color: darkslateblue;
    background-color: rgba(255, 255, 255,.8);
    font-size: 30px;
    line-height: 50px;
    font-weight: 900;
    text-transform: uppercase;
    text-shadow: 2px 2px 8px rgba(0,0,0,.5);
    top: 0;
    left: 0;
    padding: 10px;
    text-align: left;
    display: inline-block;
    width: 100%;
    z-index:99;
}

footer {
    display: block;
    background-color:silver;
    color:white;
    text-shadow: 2px 2px 8px rgba(0,0,0,.5);
    padding: 30px;
    text-align: center;
}

body {
    font-size: 14px;
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.5;
    color: #111825;
    background-color: #ffffff;
}

section {
    padding-top: 50px;
    margin-top: 50px;
}

/*=======================================
        MENU SECTION
=======================================*/

/* ADDED <a> TAG INSTRUCTIONS WITH PADDING TO ENLARGE CLICK BOX */
a:link, a:visited, a:active { 
    text-decoration: none; 
    display:block;
    padding: 15px 40px;
    color: darkslateblue; 
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
    transition-property: color;
    transition-duration:.5s;
    transition-delay: 0s;
    transition-timing-function: ease-in-out;
}

a:hover {
    color:lavender;
}

.menu {
    text-align: center;
    display: inline;
    margin: auto;
    padding: 0;
    list-style: none;    
}

.menu li {
    display: inline-block;
    position:relative;
    background-color: lavender;
    margin: 12px auto;
    padding: 0; /* collapsed padding around <a> tags extra padding */
    border: 1px solid silver;
    box-shadow: 2px 2px 8px 0 rgba(0,0,0,.5);
    border-radius: 6px;
    cursor: pointer;
    transition-property: background-color;
    transition-duration:.5s;
    transition-delay: 0s;
    transition-timing-function: ease-in-out;
}

.menu li:hover {
    background-color: darkslateblue;
}

/*=======================================
        PAGES
=======================================*/

/* ---------- HOME ----------*/
#home {
    padding-top: 0px; /* spacer before main title */
    padding-bottom: 100px; /* spacer after main title */
    color: #fff;
}

.container {
    position: relative;    
}

.container video{
    position: relative; 
    width: 100%;
    height: auto;
    z-index: -1;   
}

.centeredBox {
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    /** Position should be absolute */
    position: absolute;
    /** And box must have a width, any width */
    width: 100%;
    padding-top: 500px;
    z-index:1;
    text-align: center;    
}

.head-main {
    text-shadow:2px 4px 5px rgba(0,0,0,.9);
    font-variant: small-caps;
    color: #fff;
    letter-spacing: 5pt;
    word-spacing: 21pt;
    font-size: 40px;
    text-align: center;
    font-family: impact, san-serif;
    line-height:2;
    font-weight: 900;
    border: 5px double #ffffff;
    padding: 20px; 
}

.content-center {
    position: relative;
    left: -75%;     
}

/* ---------- HEADERS ----------*/
h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
}

h1 {
    line-height: 50px;
    font-weight: 900;
    font-size: 50px;
    text-transform: uppercase;
    text-align: center;
    color: darkslateblue;
    border-top: 3px solid darkslateblue;
    border-bottom: 3px solid darkslateblue;
    text-shadow: 2px 2px 4px rgba(0,0,0,.5);
    display: block;
    width: 400px;
    margin: 50px auto;
}

h2 {
    font-size: 30px;
    line-height: 50px;
    color: lavender;
    text-shadow: 2px 2px 4px rgba(0,0,0,.5);
}

h3 {
    line-height: 30px;
    padding-bottom: 20 px;
}

h4 {
    padding-top: 25px;
    line-height: 40px;
    padding-bottom: 0px;
    font-size: 22px;
    font-weight: 900;
}

/* ---------- PARAGRAPH ----------*/
p {
    font-weight: 300;
    line-height: 30px;
    padding-bottom: 15px;
}

/* ---------- CLASSES ----------*/


.heading-padding {
    padding-bottom: 40px;
}

.navbar {
    height: 105px;
    max-height: 340px;
    display: block;
}

.container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.row {
    margin-right: -15px;
    margin-left: -15px;
}

/* ---------- FIXES ----------*/
.clearfix:after {
    clear: both;
    display: table;
    content:" ";
}


/* ---------- CONTACT ----------*/
.flex-container {
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    padding: 20px;
    border-radius: 8px;
    margin: auto auto;
    background-color: rgba(100,65,0,.3);
    box-shadow: 2px 2px 10px 0 rgba(0,0,0,.5);
}

#contact {
    background-color: #f5f3f3;
}

.reservation {
    width: 60%;
    padding: 10px;
    border-radius: 8px;
    margin: 0px auto;
    background-color: rgba(100,65,0,.3);
    box-shadow: -1px -1px 1px rgba(0,0,0,.1), 1px 2px 10px rgba(0,0,0,.5);
}

.reservation h2 {
    width: 70%;
    text-align: center;
    margin: 0 auto;
    color: #13161B;
    font-weight: 500;
    font-size: 1.3em;
    letter-spacing: 0pt;
    word-spacing: 0pt;
}

.reservation h2 span {
    width: 70%;
    text-align: center;
    margin: 0 auto;
    color: #13161B;
    font-weight: 900;
    font-size: 1.5em;
    font-variant: small-caps;
    letter-spacing: .4pt;
    word-spacing: .3pt;
}

.reservation p {
    color: #13161B;
    text-align: center; /* added to correct alignment */
    /* width: 50%; */
    margin: 0 auto;
}

.reservation form {
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    outline: none;
    font-weight: 600;
    color: #8d8d8d;
    padding: 12px 12px;
    width: 70%;
    border: 1px solid #808080;
    margin: 2% auto;
    border-radius: 7px;
    background: #e3dede;
    box-shadow: 2px 3px 3px 0px rgba(0,0,0,.3);    
}

.reservation input {
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    outline: none;
    font-weight: 600;
    color: #8d8d8d;
    padding: 2% 1% 2% 7%;
    width: 80%;
    border-top: 1px solid #090b0d;
    border-right: 2px solid #424549;
    border-bottom: 2px solid #424549;
    border-left: 1px solid #090b0d;
    margin: 10px 1em;
    border-radius: 7px;
    background: #13161B;
    box-shadow: inset 0px 3px 0px 0px rgba(5,5,5,.15);    
}

.reservation input[class="rsvp"]:hover {
    box-shadow: 0 0 18px rgba(165,65,0,.8);    
}

.form-spacer {
    padding: 30px 39px;
}

.terms {
    margin: 8% 6% 0 0; /* changed code here to correct display position */
    padding-left: 40px;
    font-size: 14px;
    line-height: 5px;
    color: #000000;
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    position: relative;
    display: inline;
    float: right;
}

.terms:hover {
    color: orange;
    text-decoration: underline;
}

.submit input[type="submit"] {
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 900;
    text-align: center;
    border: none;
    outline: none;
    font-weight: 900;
    color: rgb(225,225,225);
    padding: 7px 0px;
    width: 25%;
    margin: 10px 3%;
    border-radius: 7px;
    background-color: #797a7b;
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,.3);
    transition: border-color 0.3s color 0.3s background-color 0.3s;
}

.submit input[type="submit"]:hover {
    color:#000000;
    background-color: #8d8e6f;
    box-shadow: inset 1px 2px 15px 0 rgba(0,0,0,.5);
}
```

# HTML-Projects

## CONTENTS
- [One-Page Vanilla Website](#one-page-vanilla-website)

## One-Page Vanilla Website
Basic vanilla HTML, CSS, JavaScript website created in about 4 days. No Frameworks or templates were used. This project was done to satisfy requirements for The Tech Academy Bootcamp.

### Video
<a href="http://www.youtube.com/watch?feature=player_embedded&v=Haga0Cn2OuA" target="_blank"><img src="https://github.com/alex-moffat/HTML-Projects/blob/master/One_Page%20Website/Screenshot_mandelkorn_studio.jpg"  
alt="One-Page-Website" border="10" /></a>

### Code
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

var quotes = [
{quote: 'Boy, these pretzels are makin\' me thirsty. –Kramer', name: "Kramer"},
{quote:'If you know what happened in the Mets game don\'t tell me, I taped it. Hello? – Jerry Seinfeld', name: "Jerry"},
{quote:'It became very clear to me sitting out there today that every decision I\'ve made in my entire life has been wrong. My life is the complete opposite of everything I want it to be. Every instinct I have, in every aspect of life, be it something to wear, something to eat - it\'s all been wrong. – George Costanza', name: "George"},
{quote:'I\'m not a lesbian. I hate men, but I\'m not a lesbian. –Elaine Benes', name: "Elaine"},
{quote:'Yo Yo Ma. –Kramer', name: "Kramer"},
{quote:'Looking at cleavage is like looking at the sun. You don\'t stare at it. It\'s too risky. Ya get a sense of it and then you look away. –Jerry Seinfeld', name: "Jerry"},
{quote:'You have the chicken, the hen, and the rooster. The chicken goes with the hen... So who is having sex with the rooster? –Frank Costanza', name: "Frank"},
{quote:'The cat - mrrreeeooowww - is out of the bag! –Kramer', name: "Kramer"},
{quote:'Jerry, just remember, it\'s not a lie if you believe it. – George Costanza', name: "George"},
{quote:'Do you ever get down on your knees and thank God you know me and have access to my dementia? – George Costanza', name: "George"},
{quote:'We don\'t know how long this will last. They are a very festive people. –Elaine Benes', name: "Elaine"},
{quote:'I had a dream last night that a hamburger was eating me. –Jerry Seinfeld', name: "Jerry"},
{quote:'You know I always wanted to pretend I was an architect. – George Costanza', name: "George"},
{quote:'If you\'re not gonna be a part of a civil society, then just get in your car and drive on over to the East Side. –Kramer', name: "Kramer"},
{quote:'I\'m speechless. I have no speech. –George Costanza', name: "George"},
{quote:'Jerry: You will be stunned. Elaine: Stunned by soup? Jerry: You can\'t eat this soup standing up. Your knees buckle.', name: "Elaine Jerry"},
{quote:'George Costanza: I want to make a good entrance. I never makes good entrances. Jerry: You have made some good exits.', name: "George Jerry"},
{quote:'All right, hey, you\'ve been great! See you at the cafeteria. –Jerry Seinfeld', name: "Jerry"},
{quote:'Elaine: Ugh, I hate people. Jerry: Yeah, they\'re the worst.', name: "Elaine Jerry"},
{quote:'I have been performing feats of strength all morning. – Frank Costanza', name: "Frank"},
{quote:'I lie every second of the day. My whole life is a sham. – George Costanza', name: "George"},
{quote:'Newman: Hello, Jerry. Jerry: Hello, Newman.', name: "Newman Jerry"},
{quote:'I\'m on the Mexican, whoa oh oh, radio. –Kramer', name: "Kramer"},
{quote:'I have a bad feeling that whenever a lesbian looks at me they think "That\'s why I\'m not a heterosexual." –George Costanza', name: "George"},
{quote:'Hi, my name is George, I\'m unemployed and I live with my parents. –George Costanza', name: "George"},
{quote:'George Costanza: What kind of a person are you? Jerry: I think I\'m pretty much like you, only successful.', name: "George Jerry"},
{quote:'Just remember, when you control the mail, you control... information. –Newman', name: "Newman"},
{quote:'I don\'t trust the guy. I think he regifted, then he degifted, and now he\'s using an upstairs invite as a springboard to a Super owl sex romp. –Jerry Seinfeld', name: "Jerry"},
{quote:'I don\'t think I\'ve ever been to an appointment in my life where I wanted the other guy to show up. –George Costanza', name: "George"},
{quote:'Mr. Ross: I don\'t think there\'s any greater tragedy than when parents outlive their children. George Costanza: Yes, I hope my parents die long before I do.', name: "George"},
{quote:'Jerry: George Costanza... Is getting *married*! Elaine: Get out!', name: "Elaine Jerry"},
{quote:'Boy, a little too much chlorine in that gene pool. –Jerry Seinfeld', name: "Jerry"},
{quote:'Let\'s watch them slice this fat bastard up. –Jerry Seinfeld', name: "Jerry"},
{quote:'Do you have any idea how much time I waste in this apartment? –Kramer', name: "Kramer"},
{quote:'See, this is what the holidays are all about. Three buddies sitting around chewing gum. –Kramer', name: "Kramer"},
{quote:'Jerry: What the hell is that crap? Kramer: It\'s Pagliacci, Jerry.', name: "Kramer Jerry"},
{quote:'Puddy: Well, I\'ve got a ten kroner, a five kroner, a twenty kroner. A fifty kroner? How much is that? Elaine: We have to break up.', name: "Elaine Puddy"},
{quote:'George Costanza: You\'ve got to apologize. Jerry: Why? George Costanza: Because it’s the mature and adult thing to do. Jerry: How does that affect me?', name: "George Jerry"},
{quote:'Jerry: Is that your "chicken" making all that noise? Kramer: Oh, Little Jerry loves the morning. Jerry: Who? Kramer: Little Jerry Seinfeld. Yeah I named my chicken after you.', name: "Kramer Jerry"},
{quote:'The carpet sweeper is the biggest scam perpetrated on the American public since One Hour Martinizing. –Kramer', name: "Kramer"},
{quote:'Kramer: C’mon, what’d you say? George: Mulva! Jerry: Mulva?', name: "Jerry George Kramer"},
{quote:'You know, it\'s so nice when it happens good. –Jerry Seinfeld', name: "Jerry"},
{quote:'He fires people like it\'s a bodily function! –George Costanza', name: "George"},
{quote:'Here\'s to feeling good all the time. –Kramer', name: "Kramer"},
{quote:'Kramer: Well, I\'ve got gonorrhea. Elaine: That seems about right.', name: "Kramer Elaine"},
{quote:'I\'ll be back. We\'ll make out. –David Puddy', name: "Puddy"},
{quote:'You very bad man, Jerry. Very bad man. – Babu Bhatt', name: "Babu"},
{quote:'Ah, look, I? I\'m sorry to bother you, but I\'m a US postal worker and my mail truck was just ambushed by a band of backwoods ail-hating survivalists. –Newman', name: "Newman"},
{quote:'George Costanza: You\'re gonna over-dry your laundry. Jerry: You can\'t over-dry. George Costanza: Why not? Jerry: Same reason you can\'t over-wet.', name: "Jerry George"},
{quote:'Elaine: Why does everything have to be so... jokey with you? Jerry: I\'m a comedian.', name: "Jerry Elaine"},
];

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber].quote;
}

function jerryfilter() {
	var ul = document.getElementById("quotelist");
	ul.innerHTML = "";
	for (line in quotes){
		if (quotes[line].name.includes("Jerry")){
			var ul = document.getElementById("quotelist");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(quotes[line].quote));
			ul.appendChild(li);
		}
	}
}

function georgefilter() {
	var ul = document.getElementById("quotelist");
	ul.innerHTML = "";
	for (line in quotes){
		if (quotes[line].name.includes("George")){
			var ul = document.getElementById("quotelist");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(quotes[line].quote));
			ul.appendChild(li);
		}
	}
}

function elainefilter() {
	var ul = document.getElementById("quotelist");
	ul.innerHTML = "";
	for (line in quotes){
		if (quotes[line].name.includes("Elaine")){
			var ul = document.getElementById("quotelist");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(quotes[line].quote));
			ul.appendChild(li);
		}
	}
}

function kramerfilter() {
	var ul = document.getElementById("quotelist");
	ul.innerHTML = "";
	for (line in quotes){
		if (quotes[line].name.includes("Kramer")){
			var ul = document.getElementById("quotelist");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(quotes[line].quote));
			ul.appendChild(li);
		}
	}
}

function frankfilter() {
	var ul = document.getElementById("quotelist");
	ul.innerHTML = "";
	for (line in quotes){
		if (quotes[line].name.includes("Frank")){
			var ul = document.getElementById("quotelist");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(quotes[line].quote));
			ul.appendChild(li);
		}
	}
}

function puddyfilter() {
	var ul = document.getElementById("quotelist");
	ul.innerHTML = "";
	for (line in quotes){
		if (quotes[line].name.includes("Puddy")){
			var ul = document.getElementById("quotelist");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(quotes[line].quote));
			ul.appendChild(li);
		}
	}
}

function babufilter() {
	var ul = document.getElementById("quotelist");
	ul.innerHTML = "";
	for (line in quotes){
		if (quotes[line].name.includes("Babu")){
			var ul = document.getElementById("quotelist");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(quotes[line].quote));
			ul.appendChild(li);
		}
	}
}

function newmanfilter() {
	var ul = document.getElementById("quotelist");
	ul.innerHTML = "";
	for (line in quotes){
		if (quotes[line].name.includes("Newman")){
			var ul = document.getElementById("quotelist");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(quotes[line].quote));
			ul.appendChild(li);
		}
	}
}

function nofilter() {
	var ul = document.getElementById("quotelist");
	ul.innerHTML = "";
	for (line in quotes){
		if (quotes[line].name.includes("")){
			var ul = document.getElementById("quotelist");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(quotes[line].quote));
			ul.appendChild(li);
		}
	}
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

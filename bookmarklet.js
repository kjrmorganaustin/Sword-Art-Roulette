javascript:(function(){
/* invoke math random to make a random number from 1-100, if the number is 1 or less, then */
var r = Math.random()*100;
if(r<=1) {
/* alert with a false error and redirect to SAO Alicization Lycoris subreddit */
alert("ERR. Log Out Disabled. Project SEA TURTLE activated")
window.location.replace("https://www.reddit.com/r/AlicizationLycoris/");
} else 
/* any other number */
{
/* Alert with “Welcome to Sword Art Online!”*/
alert("Welcome to Sword Art Online!") 
/* redirect to SAO subreddit */
window.location.replace("https://www.reddit.com/r/swordartonline/")
}
})();

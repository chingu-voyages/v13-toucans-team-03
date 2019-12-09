var myQuotes = ["Failure is success if you learn from it.", 
				"Push yourself, because no one else is going to do it for you.", 
				"Sometimes later becomes never. Do it now.", 
				"Dream it. Wish it. Do it.",
				"Do something today that your future self will thank you for.",
				"Do not let the behavior of others destroy your inner peace.",
				"When you make peace with yourself, you make peace with the world.",
				"Be so busy loving your life that you have no time for hate, regret or fear.",
				"The beginning is the most important part of the work.",
				"You are never too old to set another goal or to dream a new dream.",
				"Act as if what you do makes a difference. It does.",
				"Celebrate what you want to see more of.",
				"Try to be a rainbow in someone else's cloud.",
				"It always seems impossible until it's done.",
				"Light tomorrow with today.",
				"Sometimes you will never know the value of a moment, until it becomes a memory."];

function showQuote() {
	var chosenQuote = Math.floor(Math.random() * myQuotes.length);
	document.getElementsByClassName("quotes__text")[0].innerHTML = myQuotes[chosenQuote];
}

document.addEventListener("load", showQuote());
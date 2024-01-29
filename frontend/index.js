function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here

  const widgets = document.querySelectorAll("section>div");
  widgets.forEach((widget, idx) => {
    widget.classList.add("widget");
    widget.setAttribute('tabindex', idx + 1 + "")
  })
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here

  const randomIndex = Math.floor(Math.random(quotes) * 10);

  const randomQuote = quotes[randomIndex]

  const quote = document.createElement("div")

  const quoteText = randomQuote.quote;

  quote.textContent = quoteText

  const widget1 = document.querySelector(".quoteoftheday");widget1.appendChild(quote);

  const authorDate = document.createElement("div");

  const {author, date} = randomQuote;

  authorDate.textContent = `${author || "Anonymous"} in ${date || "an unknown date"}`;

  widget1.appendChild(authorDate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here

  const corporateText = document.createElement("div")

  const randomVerbIndex = Math.floor(Math.random(verbs) * verbs.length);
  const randomVerbText = verbs[randomVerbIndex];

  const randomAdverbIndex = Math.floor(Math.random(adverbs) * adverbs.length);
  const randomAdverbText = adverbs[randomAdverbIndex];

  const randomNounIndex = Math.floor(Math.random(nouns) * nouns.length);
  const randomNounText = nouns[randomNounIndex];

  const corporateJargon = `We need to ${randomVerbText} our ${randomNounText} ${randomAdverbText} in order to ${randomVerbText} our ${randomNounText} ${randomAdverbText}.`

  corporateText.textContent = corporateJargon


  const widget2 = document.querySelector(".corporatespeak");
  widget2.appendChild(corporateText)




  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownWidget = document.querySelector(".countdown");

  let count = 5;

  const countdown = document.createElement("p");

  countdown.textContent = `T-minus ${count}...`;

  countdownWidget.appendChild(countdown);

  setInterval(() => {
    if (count === 1) {
      countdown.textContent = "Liftoff! 🚀"
    } else {
      count--;
      countdown.textContent = `T-minus ${count}...`;
    }
  }, 1000)


  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const friendsWidget = document.querySelector(".friends");

  const personIdx = Math.floor(Math.random(people) * people.length)
  
  const person = people[personIdx]

  const personParagraph = document.createElement("p");

  document.querySelector(".friends").appendChild(personParagraph);

 const year = person.dateOfBirth.split('-')[0];

let sentence = `${person.fname} ${person.lname} was born in ${year} and `;

   if (!person.friends.length) {
     sentence += 'has no friends.'
   } else {
     sentence += "is friends with ";
     for (let i = 0; i < person.friends.length; i++) {
      const friendId = person.friends[i]
      const friend = people.find(p => p.id === friendId)
      const fullName = `${friend.fname} ${friend.lname}`;
      let isLast = i === person.friends.length - 1;
      let isNextToLast = i === person.friends.length - 2;

      if (isLast) {
        sentence += `${fullName}.`
      } else if (isNextToLast) {
        sentence += `${fullName} and `
      } else {
        sentence += `${fullName}, `
      }
     }
     
   }

   personParagraph.textContent = sentence

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()

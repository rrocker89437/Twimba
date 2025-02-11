import { tweetsData } from "./data.js";
console.log(tweetsData); // Output: [ { id: 1, tweet: 'Hello World' } ]

const tweetInput = document.querySelector("#tweet-input");
const tweetBtn = document.querySelector("#tweet-btn");
const tweetDetails = document.querySelector("#tweet-detail");

tweetBtn.addEventListener("click", () => {
  console.log("clicked");
  // Get the value of the tweet input
  const tweet = tweetInput.value;
});

document.addEventListener("click", (e) => {
  // Check if the clicked element has the data-like attribute
  if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like);
    // Check if the clicked element has the data-reply attribute
  } else if (e.target.dataset.reply) {
    console.log("Reply", e.target.dataset.reply);
    // Check if the clicked element has the data-retweet attribute
  } else if (e.target.dataset.retweet) {
    console.log("ReTweet", e.target.dataset.retweet);
    // If none of the above conditions are met, return
  } else {
    return;
  }
});

function handleLikeClick(tweetId) {
  // Find the tweet object from the tweetsData array
  const targetTweetObj = tweetsData.filter(function (tweet) {
    // Check if the tweetId matches the uuid of the tweet object
    return tweet.uuid === tweetId;
    // Return the first object that matches the condition
  })[0];
  // Increment the likes property of the targetTweetObj
  targetTweetObj.likes++;
  console.log(tweetsData);
}

function getFeedHtml() {
  let feedHtml = ``;
  tweetsData.forEach((tweet) => {
    feedHtml += `
     <div class="tweet">
         <div class="tweet-inner">
             <img src="${tweet.profilePic}" class="profile-pic">
             <div>
                 <p class="handle">${tweet.handle}</p>
                 <p class="tweet-text">${tweet.tweetText}</p>
                 <div class="tweet-details"> 
                    <span class="tweet-detail">
                        <i class="fa-solid fa-heart" data-like  = "${tweet.uuid}"></i>
                        ${tweet.likes}
                    </span>
                    <span class="tweet-detail">
                        <i class="fa-regular fa-comment-dots" data-reply  = "${tweet.uuid}"></i>
                        ${tweet.replies.length}
                    </span>
                    <span class="tweet-detail">
                        <i class="fa-solid fa-retweet" data-retweet = "${tweet.uuid}"></i>
                        ${tweet.retweets}
                    </span>
                 </div>
             </div>
         </div>
     </div>
     `;
  });
  return feedHtml;
}

function renderFeed() {
  // Get the feed container and set the innerHTML to the feedHtml
  document.querySelector("#feed").innerHTML = getFeedHtml();
}

renderFeed();

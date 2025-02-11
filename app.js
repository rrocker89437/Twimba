import { tweetsData } from "./data.js";
console.log(tweetsData); // Output: [ { id: 1, tweet: 'Hello World' } ]

const tweetInput = document.querySelector("#tweet-input");
const tweetBtn = document.querySelector("#tweet-btn");
const tweetDetails = document.querySelector("#tweet-detail");

tweetBtn.addEventListener("click", () => {
  console.log("clicked");
  const tweet = tweetInput.value;
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.like) {
    console.log("Like", e.target.dataset.like);
  } else if (e.target.dataset.reply) {
    console.log("Reply", e.target.dataset.reply);
  } else if (e.target.dataset.retweet) {
    console.log("ReTweet", e.target.dataset.retweet);
  } else {
    return;
  }
});

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
  document.querySelector("#feed").innerHTML = getFeedHtml();
}

renderFeed();

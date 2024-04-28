import { useState, useEffect } from "react";
import {
  CreateProfile,
  StatsInfo,
  Shop,
  BackToTop,
  VolumeSlider,
  Quests,
} from "../components";
import {
ClickButton, 
  ClickContainer,
  ClickImg,
  Offline,
  Points,
  ShareButton,
} from "../styles";
import { compactFormat, playSound, showToast } from "../utils";
import { achievements } from "../constants";
import "react-toastify/dist/ReactToastify.css";
import HoneyJar from "../assets/honey-jar.png";
import ClickSound from "../assets/sounds/click.mp3";
import { UserProfileProps } from "../types/userProfileProps";
import { Share, WifiOff } from "@mui/icons-material";
import { useOnlineStatus } from "../hooks";

export const Game = ({ userProfile, setUserProfile }: UserProfileProps) => {
  const userProfileProps = { userProfile, setUserProfile };
  const [clicks, setClicks] = useState<number>(userProfile.clicks);
  const [addedPoints, setAddedPoints] = useState<number>(0);
  const [showAddedPoints, setShowAddedPoints] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const isOnline = useOnlineStatus();
  // Function to handle clicking on the honey jar
  const handleClick = () => {
    // Play click sound
    playSound(ClickSound, userProfile.audioVolume);
    // Add points based on user's multiplier
    handleAddPoints(userProfile.points + userProfile.multiplier);
    setAddedPoints(userProfile.multiplier);
    !showAddedPoints && setShowAddedPoints(true);
    //TODO: display the number of added points next to the button after clicking
    // Increment click count
    setClicks(clicks + 1);
    //animation

    if (!isClicked) {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 150);
    }
    // Check for unlocked click achievements
    const unlockedClickAchievements = Object.values(achievements).filter(
      (achievement) =>
        achievement.clicksRequired !== undefined &&
        clicks + 1 >= achievement.clicksRequired &&
        !userProfile.achievements.includes(achievement.name)
    );
    // If there are unlocked click achievements, show toast notifications and update user profile
    if (unlockedClickAchievements.length > 0) {
      unlockedClickAchievements.forEach((achievement) => {
        showToast({
          header: `${achievement.name} unlocked!`,
          text: achievement.description,
          emoji: achievement.emoji,
          volume: userProfile.audioVolume,
        });
      });
      const newAchievements = userProfile.newAchievements + 1;
      // Add unlocked click achievements to user profile
      setUserProfile({
        ...userProfile,
        achievements: [
          ...userProfile.achievements,
          ...unlockedClickAchievements.map((achievement) => achievement.name),
        ],
        dateAchievements: {
          ...userProfile.dateAchievements,
          ...userProfile.dateAchievements,
          [unlockedClickAchievements[0].name]: new Date(),
        },
        newAchievements: newAchievements,
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowAddedPoints(false);
    }, 250);
  }, [showAddedPoints]);

  // Function to add points to user's profile
  const handleAddPoints = (points: number) => {
    const newPoints = points;
    const newMaxPoints = Math.max(newPoints, userProfile.maxPoints);

    // Check for unlocked achievements
    const unlockedAchievements = Object.values(achievements).filter(
      (achievement) =>
        achievement.requirement !== undefined &&
        newMaxPoints >= achievement.requirement &&
        userProfile.maxPoints < achievement.requirement &&
        !userProfile.achievements.includes(achievement.name)
    );
    // If there are unlocked achievements, show toast notifications and update user profile
    if (unlockedAchievements.length > 0) {
      // Show toast notification for each unlocked achievement
      unlockedAchievements.forEach((achievement) => {
        showToast({
          header: `${achievement.name} unlocked!`,
          text: achievement.description,
          emoji: achievement.emoji,
          volume: userProfile.audioVolume,
        });
      });
      const newAchievements = userProfile.newAchievements + 1;
      // Add unlocked achievements to user profile
      setUserProfile({
        ...userProfile,
        points: newPoints,
        maxPoints: newMaxPoints,
       clicks: clicks,
        achievements: [
          ...userProfile.achievements,
          ...unlockedAchievements.map((achievement) => achievement.name),
        ],
        newAchievements: newAchievements,
        dateAchievements: {
          ...userProfile.dateAchievements,
          ...userProfile.dateAchievements,
          [unlockedAchievements[0].name]: new Date(),
        },
      });
    } else {
      setUserProfile({
        ...userProfile,
        points: newPoints,
        maxPoints: newMaxPoints,
        
      });
    }
  };

  useEffect(() => {
    if (userProfile.name !== null) {
      //Points per second interval
      const intervalId = setInterval(() => {
        const pointsPerSecond = (
          userProfile.points +
          userProfile.perSecond / 100
        ).toFixed(3);
        handleAddPoints(Number(pointsPerSecond));
      }, 10);

      return () => {
        clearInterval(intervalId);
      };
    }
  });

  useEffect(() => {
    document.title = `PaysGram - ${compactFormat(userProfile.points)}`;
  }, [userProfile.points]);

  useEffect(() => {
    if (userProfile.name === null) {
      setClicks(0);
    }
  }, [userProfile]);

  const handleShareClick = async () => {
    //unlock share achievement
    const shareAchievementName = "ShareGameEnthusiast";
    const shareAchievement = achievements[shareAchievementName];
    const newAchievements = userProfile.newAchievements + 1;
    if (!userProfile.achievements.includes(shareAchievement.name)) {
      const updatedAchievements = [
        ...userProfile.achievements,
        shareAchievement.name,
      ];
      const updatedPoints =
        userProfile.points +
        (shareAchievement.reward ? shareAchievement.reward : 0);

      setUserProfile({
        ...userProfile,
        achievements: updatedAchievements,
        points: updatedPoints,
        newAchievements: newAchievements,
clicks: clicks,
        dateAchievements: {
          ...userProfile.dateAchievements,
          ...userProfile.dateAchievements,
          [shareAchievement.name]: new Date(),
        },
      });
      showToast({
        header: `${shareAchievement.name} unlocked!`,
        text: (
          <span>
            {shareAchievement.description}{" "}
            {shareAchievement.reward && (
              <b>Reward: 🍯{shareAchievement.reward}</b>
            )}
          </span>
        ),
        emoji: shareAchievement.emoji,
        volume: userProfile.audioVolume,
      });
    }
    //share
    try {
      await navigator.share({
        title: "PaysGram",
        text: "Simple yet addictive progressive web game where you can earn points by clicking on a honey jar. You can use your points to upgrade your clicking power and unlock achievements.",
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <>
      {userProfile.name === null ? (
        <CreateProfile {...userProfileProps} />
      ) : (
        <>
          <VolumeSlider {...userProfileProps} />

          <ShareButton onClick={handleShareClick}>
            <Share /> &nbsp; Share
          </ShareButton>

         <ClickContainer onTouchStart={(e) => e.preventDefault()}>
             {/* <ClickButton
              aria-label="Honey Jar"
              className={isClicked ? "clicked" : ""}
              onClick={handleClick}
              onTouchStart={(e) => e.preventDefault()}
            >*/}
              <ClickImg
                draggable="false"
                src={HoneyJar}
                alt="Honey Jar Image"
              />
            {/*</ClickButton>*/}
          </ClickContainer> 
      

          {/* TODO: improve the animation of added points  */}
          {/* <Points show={showAddedPoints}>+{addedPoints}</Points> */}
          <StatsInfo userProfile={userProfile} />
          {/*TODO: Implement the quests component as it is not done yet. */}
          {/* <Quests {...userProfileProps} /> */}
          <Shop {...userProfileProps} />
          {!isOnline && (
            <Offline>
              <WifiOff /> &nbsp; You're <span> offline </span> but you can still
              play the game!
            </Offline>
          )}
          <BackToTop />
        </>
      )}
    </>
  );
};


<!doctype html>
<html lang="en">
 <head> 
  
  <title>ECHOZONE </title> 
  <link rel="stylesheet" href="./style.css"> 
 <style type="text/css" id="dcoder_stylesheet">@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  max-height: 900vh;
}
.page {
  max-width: 1220px;
  padding: 10px;
  margin: 0 auto;
}
.page p {
  margin-bottom: 15px;
}
.title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 15px;
}
.title__h3 {
  margin-bottom: 15px;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 200%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  pointer-events: none;
  opacity: 0;
  transition: all 0.7s ease;
}
.popup.active {
  opacity: 1;
  pointer-events: auto;
}
.popup__box {
  position: fixed;
  top: 50%;
  left: 50%;
 height: 500px; 
  background-color: red;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fefefe;
  transform: translate(-50%, calc(-50% + 50px));
  padding: 10px;
  box-shadow: 0 6px 55px -10px rgba(0, 0, 0, 0.7);
  opacity: 0;
}
.popup.active .popup__box {
  opacity: 1;
}
.popup__skip-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 14px;
  font-weight: 700;
  background-color: #000;
  border-radius: 4px;
  padding: 10px;
  cursor: not-allowed;
}
.popup__skip-btn.cursor {
  cursor: pointer;
}
.popup__logo {
  margin-bottom: 20px;
}
.popup__title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
}
.popup__text { 
  margin-bottom: 60px;
  line-height: 1.8;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}
.popup__link {
  display: inline-block;
  color: #000;
  background-color: #eee;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 10px;
	height: 500px;
}
.popup__link:hover {
  text-decoration: underline;
}</style></head> 
 <body> <!-- partial:index.partial.html --> <!-- Created based on Youtube [Live Blogger](https://www.youtube.com/@LiveBlogger) --> <!-- Random text--> 
  <div class="page"> 
   <h1 class="title"> </h1> 
   <h3 class="title__h3"></h3> 
  </div> <!--Popup--> 
  <div class="popup"> 
   <div class="popup__box" style="
          background-image: url(https://catherineasquithgallery.com/uploads/posts/2021-02/1613224247_68-p-fon-sinii-kosmos-95.jpg);
        "> 
    <div class="popup__content"> 
     <div class="popup__skip-btn">
       Skip in 23s 
     </div> 
  <!---lagay kung free👇--->
        <p class="popup__logo">                           
           </p> 
     <h3 class="popup__title"></h3> 
     <p class="popup__text">
       
Payoffs can be made only by users
who have replenished the account from 0.5 USD. or ₱28.00
This is a measure to protect the project from bots.
You can replenish your account in the «Add funds» section,  once replenishment is created this popup alert is in vacation mode  until payday. and you can start collecting points with no popup like a pro. 

in this section, The funds will be spent on advertisement of your refferal link by our marketing partners and we do not guarantee the effectiveness of the promotion.


           
        
  
<!---palit ng counter👇--->
      <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fpoetic-choux-da9fed.netlify.app&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=recent+visitor&edge_flat=false"/></a>

      </div>
          </p></div> 
   </div> 
  </div> <!-- partial --> 
  <script src="./script.js"></script> 
 
<script type="text/javascript" id="dcoder_script">const popup = document.querySelector('.popup');
const skipBtn = document.querySelector('.popup__skip-btn');
const visitBtn = document.querySelector('.popup__link');

let remainingTime = 20;
let allowedToSkip = false;
let popupTimer;

const createPopupCookie = () => {
  let expiresDays = 1;
  let date = new Date();
  date.setTime(date.getTime() + expiresDays * 12 * 60 * 60* 1000);
  let expires = 'expires=' + date.toUTCString();
  document.cookie = `popupCookie=true; ${expires}; path=/;`;
};

const showAd = () => {
  popup.classList.add('active');
  popupTimer = setInterval(() => {
    skipBtn.innerHTML = `      ${remainingTime}s.`;
    remainingTime--;

    if (remainingTime < 0) {
      allowedToSkip = false;
      skipBtn.innerHTML = ''
      skipBtn.classList.add('cursor');
      clearInterval(popupTimer);
    }
  }, 1000);
};

const skipAd = () => {
  popup.classList.remove('active');
  createPopupCookie();
};

skipBtn.addEventListener('click', () => {
  if (allowedToSkip) {
    skipAd();
  }
});

const startTimer = () => {
  if (window.scrollY > 100) {
    showAd();
    window.removeEventListener('scroll', startTimer);
  }
};

if (!document.cookie.match(/^(.*;)?\s*popupCookie\s*=\s*[^;]+(.*)?$/)) {
  window.addEventListener('scroll', startTimer);
}</script></body></html>
 
	
	

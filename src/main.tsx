import html from 'template.html'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    updateSW(true);
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
var html = '<!DOCTYPE html>
<html lang="en" >
<head>
<meta name="viewport" content="width=device-width"> 
 	
 <meta charset="UTF-8">
<title>E-cart rental</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,600" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'>
<link rel='stylesheet' href='https://cdn.jsdelivr.net/jquery.selectric/1.10.1/selectric.css'>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css'><link rel="stylesheet" href="./style.css">
</head>
<body>
<!-- partial:index.partial.html -->
<nav class="navbar navbar-dark sticky-top flex-md-nowrap p-0">
<a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">E-crates Rental</a>
<ul class="navbar-nav px-3">
<li class="nav-item text-nowrap">
<a class="nav-link" href="#">JERYAN ROYATE (VERIFIED RENTER) </a>
</li>
</ul>
</nav>
<div class="container-fluid">
<div class="row">
<nav class="col-md-2 d-none d-md-block sidebar">
<div class="sidebar-sticky">
<ul class="nav flex-column">
<li class="nav-item">
<a class="nav-link active" href="#">
<i class="zmdi zmdi-widgets"></i>
Dashboard <span class="sr-only">(current)</span>
</a>
</li>
<li class="nav-item">
<a class="nav-link" href="/">
<i class="zmdi zmdi-file-text"></i>
HOME
</a>
</li>
</ul>
</div>
</nav>
<!---start😍--->
<main role="main" class="col-md-9 ml-sm-auto col-lg-10 my-3">
<div class="card-list">
<div class="row">
<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
<div class="card blue">
<div class="title">E-CRATES</div>
<i class="zmdi zmdi-upload"></i>
<div class="value">20</div>
<div class="stat"><b>RENTED CRATES</b></div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
<div class="card green">
<div class="title">EMPTY CRATES</div>
<i class="zmdi zmdi-upload"></i>
<div class="value">0/20</div>
<div class="stat"><b></b>Empty/Rented</div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
<div class="card orange">
<div class="title">Total Sales</div>
<i class="zmdi zmdi-download"></i>
<div class="value">₱0</div>
<div class="stat"><b>low</b>risk</div>
</div>
</div>
<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
<div class="card red">
<div class="title">Happy Customers</div>
<i class="zmdi zmdi-download"></i>
<div class="value">0</div>
<div class="stat"><b></b></div>
</div>
</div>
	<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
<div class="card purple">
<div class="title">Refferals</div>
<div class="title">1/5</div>
<i class="zmdi zmdi-download"></i>
<div class="value">₱5.00</div>
<div class="stat"><b>(please add max. of 5 refferal)</b></div>
<div class="stat"><b>👤Armijoy burgos</b></div>

</div>
</div>
	<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
<div class="card purple">
<div class="title">💎Special bonus</div>
<div class="title">Rented= 8/10000</div>
<i class="zmdi zmdi-download"></i>
<div class="value">₱0.00</div>
<div class="stat"><b>(Level1=Obtain at least 10000 rented e-crates to receive ₱4000)</b></div>
</div>
	</div>
</div>
</div>
<div class="projects mb-4">
<div class="projects-inner">
<header class="projects-header">
<div class="title">Items inside E-crates</div>
<div class="count">3</div>
<i class="zmdi zmdi-download"></i>
</header>
<table class="projects-table">
<thead><tr>
	<th>Crates no.</th>
        <th>Listed until</th>
	<th>Item</th>
	<th>Amount</th>
        <th>Status</th>
	<th class="text-right">Customer satisfaction rate</th>
</tr></thead>
<!----🟥ORDER🟥--->
	<!----☑️----->
<tr>
<td><p>E-crates</p><p>#1</p></td>
<td><p>yyyymmdd</p>
	<p class="text-danger">Unsettled</p></td>
<td class="member">
        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGipU49E3pSdDGhsAzrwdX-gobDq05oBtKcqpNkfMGw9BEb53&s" /></figure>
	<div class="member-info">
	<p>Random items</p>
	<p>over the counter</p></div></td>
<td><p>₱30.00</p><p>Unsettled</p></td>
<td class="status">
        <span class="status-text status-blue">Waiting for customer</span></td>
<td><form class="form" action="#" method="POST">
	<select class="action-box">
	<option>₱0.00</option></select></form></td></tr>
<tr class="danger-item">

<td>
<p>E-crates</p><p>#2</p></td>
<td><p>yyyymmdd</p><p class="text-danger">unsettled</p></td>
<td class="member">
	<figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGipU49E3pSdDGhsAzrwdX-gobDq05oBtKcqpNkfMGw9BEb53&s" /></figure>
<div class="member-info">
	<p>Random items</p>
	<p>over the counter</p>
</div></td>
<td><p>₱30.00</p><p>Unsettled</p></td>
<td class="status">
        <span class="status-text status-blue">Waiting for customer</span></td>
<td>
<form class="form" action="#" method="POST">
<select class="action-box">
<option>₱30.00</option></select>
</form>
</td>
</tr>

<tr><td>
<p>E-crates</p><p>#3</p></td>
<td><p>yyyymmdd</p><p class="text-danger">Unsettled</p></td>
<td class="member">
	<figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGipU49E3pSdDGhsAzrwdX-gobDq05oBtKcqpNkfMGw9BEb53&s" /></figure>
<div class="member-info">
	<p>Random items</p>
	<p>over the counter</p>
</div></td>
<td><p>₱30.00</p><p>Unsettled</p></td>
<td class="status">
        <span class="status-text status-blue">Waiting for customer</span></td>
<td>
<form class="form" action="#" method="POST">
<select class="action-box">
<option>₱0.00</option></select>
</form>
</td>
</tr>

<tr><td>
<p>E-crates</p><p>#4</p></td>
<td><p>yyyymmdd</p><p class="text-danger">Unsettled</p></td>
<td class="member">
	<figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGipU49E3pSdDGhsAzrwdX-gobDq05oBtKcqpNkfMGw9BEb53&s" /></figure>
<div class="member-info">
	<p>Random items</p>
	<p>over the counter</p>
</div></td>
<td><p>₱30.00</p><p>Unsettled</p></td>
<td class="status">
        <span class="status-text status-blue">Waiting for customer</span></td>
<td>
<form class="form" action="#" method="POST">
<select class="action-box">
<option>₱0.00</option></select>
</form>
</td>
</tr>

<tr><td>
<p>E-crates</p><p>#5</p></td>
<td><p>yyyymmdd</p><p class="text-danger">Unsettled</p></td>
<td class="member">
	<figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGipU49E3pSdDGhsAzrwdX-gobDq05oBtKcqpNkfMGw9BEb53&s" /></figure>
<div class="member-info">
	<p>Random items</p>
	<p>over the counter</p>
</div></td>
<td><p>₱30.00</p><p>Unsettled</p></td>
<td class="status">
        <span class="status-text status-blue">Waiting for customer</span></td>
<td>
<form class="form" action="#" method="POST">
<select class="action-box">
<option>₱0.00</option></select>
</form>
</td>
</tr>

<tr><td>
<p>E-crates</p><p>No.6</p></td>
<td><p>yyyymmdd</p><p class="text-danger">Unsettled</p></td>
<td class="member">
	<figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGipU49E3pSdDGhsAzrwdX-gobDq05oBtKcqpNkfMGw9BEb53&s" /></figure>
<div class="member-info">
	<p>Random items</p>
	<p>over the counter</p>
</div></td>
<td><p>₱30.00</p><p>Unsettled</p></td>
<td class="status">
        <span class="status-text status-blue">Waiting for customer</span></td>
<td>
<form class="form" action="#" method="POST">
<select class="action-box">
<option>₱0.00</option></select>
</form>
</td>
</tr>

<tr><td>
<p>E-crates</p><p>No.7</p></td>
<td><p>yyyymmdd</p><p class="text-danger">Unsettled</p></td>
<td class="member">
	<figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGipU49E3pSdDGhsAzrwdX-gobDq05oBtKcqpNkfMGw9BEb53&s" /></figure>
<div class="member-info">
	<p>Random items</p>
	<p>over the counter</p>
</div></td>
<td><p>₱30.00</p><p>Unsettled</p></td>
<td class="status">
        <span class="status-text status-blue">Waiting for customer</span></td>
<td>
<form class="form" action="#" method="POST">
<select class="action-box">
<option>₱0.00</option></select>
</form>
</td>
</tr>

<tr><td>
<p>E-crates</p><p>No.8</p></td>
<td><p>yyyymmdd</p><p class="text-danger">Unsettled</p></td>
<td class="member">
	<figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGipU49E3pSdDGhsAzrwdX-gobDq05oBtKcqpNkfMGw9BEb53&s" /></figure>
<div class="member-info">
	<p>Random items</p>
	<p>over the counter</p>
</div></td>
<td><p>₱30.00</p><p>Unsettled</p></td>
<td class="status">
        <span class="status-text status-blue">Waiting for customer</span></td>
<td>
<form class="form" action="#" method="POST">
<select class="action-box">
<option>₱0.00</option></select>
</form>
</td>
</tr>

<tr><td>
<p>E-crates</p><p>No.9</p></td>
<td><p>yyyymmdd</p><p class="text-danger">Unsettled</p></td>
<td class="member">
	<figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGipU49E3pSdDGhsAzrwdX-gobDq05oBtKcqpNkfMGw9BEb53&s" /></figure>
<div class="member-info">
	<p>Random items</p>
	<p>over the counter</p>
</div></td>
<td><p>₱30.00</p><p>Unsettled</p></td>
<td class="status">
        <span class="status-text status-blue">Waiting for customer</span></td>
<td>
<form class="form" action="#" method="POST">
<select class="action-box">
<option>₱0.00</option></select>
</form>
</td>
</tr>

<tr><td>
<p>E-crates</p><p>No.10</p></td>
<td><p>yyyymmdd</p><p class="text-danger">Unsettled</p></td>
<td class="member">
	<figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGipU49E3pSdDGhsAzrwdX-gobDq05oBtKcqpNkfMGw9BEb53&s" /></figure>
<div class="member-info">
	<p>Random items</p>
	<p>over the counter</p>
</div></td>
<td><p>₱30.00</p><p>Unsettled</p></td>
<td class="status">
        <span class="status-text status-blue">Waiting for customer</span></td>
<td>
<form class="form" action="#" method="POST">
<select class="action-box">
<option>₱0.00</option></select>
</form>
</td>
</tr>

<tr><td>

	<!--Button-->
<center>
 <table align="center" cellspacing="0" cellpadding="0" width="100%">
   <tr>
     <td align="left" style="padding: 10px;">
       <table border="0" class="mobile-button" cellspacing="0" cellpadding="0">
         <tr>
           <td align="left" bgcolor="#0b8706" style="background-color: #0b8706; margin: auto; max-width: 600px; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; padding: 15px 20px; " width="100%">
           <!--[if mso]>&nbsp;<![endif]-->
               <a href="https://share.paybiz.ph/items/GSl9b4gtx4r8lxkUYoXk0m" target="_blank" style="16px; font-family: Helvetica, Arial, sans-serif; color: #ece2e2; font-weight:normal; text-align:center; background-color: #0b8706; text-decoration: none; border: none; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; display: inline-block;">
                   <span style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: #ece2e2; font-weight:normal; line-height:1.5em; text-align:center;">E-crates safeguard(partial)</span>
             </a>
           <!--[if mso]>&nbsp;<![endif]-->
           </td>
         </tr>
       </table>
     </td>
   </tr>
 </table>
</center>



	<!----add order here---->
</table></div></div>
<!-- partial -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'></script>
<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'></script>
<script src='https://cdn.jsdelivr.net/jquery.selectric/1.10.1/jquery.selectric.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.bundle.min.js'></script><script  src="./script.js"></script>
</body>
</html>
 
 
 
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
 
	
	'

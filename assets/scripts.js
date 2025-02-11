// const owlCarousel = require("./assets/owlcarousel/owl.carousel.min.js");

// const formContainer = document.querySelector("#formContainer");
// const form = document.querySelector("form#waitlistForm");
// const input = document.querySelector("input#waitlistInput");
// const submitBtn = document.querySelector("#waitlistSubmitBtn");
// const waitlistHeading = document.querySelector("#waitlistHeading");
// const beforeWaitlistHeading = document.querySelector("#beforeWaitlistHeading");
// const successEl = document.querySelector("#waitlistSuccess");
// const responseEl = document.querySelector("#waitlistResponse");
// const messageBox = document.querySelector("#waitlistMsgBox");
// let userInfo = { isWebUser: true };
// const downloadLinks = document.getElementById("download-links");

// // const waitlistURL = "http://zorro-api.ap-south-1.elasticbeanstalk.com";
// // const waitlistURL = "http://localhost:7000";
const waitlistURL = "https://zorro-api.joinzorro.com";


// const handleSubmit = (event) => {
//   event.preventDefault();
//   submitBtn.disabled = true;
//   userInfo.contactDetail = form.elements["contact-details"].value;
//   postData(`${waitlistURL}/v1/api/beta/waitlist`, userInfo).then((data) => {
//     messageResponse(data);
//   });
//   form.elements["contact-details"].value = "";
//   userInfo.contactDetail = "";
// };

// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response.json();
// }

// function messageResponse(response) {
//   if (response.message === "success") {
//     formContainer.style.height = "0";
//     formContainer.style.opacity = "0";
//     form.style.transform = "scale(0)";
//     beforeWaitlistHeading.style.transform = "scale(1)";
//     waitlistHeading.style.fontSize = "2.2rem";
//     beforeWaitlistHeading.style.height = "90px";
//     waitlistHeading.innerText = "Congratulations!";
//     setTimeout(() => {
//       formContainer.style.display = "none";
//       beforeWaitlistHeading.style.transform = "none";
//     }, 200);
//     successEl.innerText =
//       "You have successfully subscribed to our waiting list 🎉";
//     messageBox.classList.add("hidden");
//     // setTimeout(timer, 4000);
//   } else {
//     submitBtn.disabled = false;
//     responseEl.innerText = `⚠️ ${response.message}`;
//     messageBox.style.color = "#ffb02e";
//     messageBox.classList.remove("hidden");
//     messageBox.classList.add("visible");
//     // setTimeout(timer, 4000);
//   }
// }
// function timer() {
//   document.querySelector(".message-box").classList.remove("Visible");
//   document.querySelector(".message-box").classList.add("hidden");
//   document.querySelector(".message-box").style.backgroundColor = "black";
// }
// form.addEventListener("submit", handleSubmit);

const form = document.querySelector(".waitlist-section");
const submitButton = document.querySelector(".submit-button");
const responseBox = document.querySelector(".response-box");
const heading = document.querySelector(".response-heading");
const text = document.querySelector(".text-message");
let userInfo = { isWebUser: true };

const handleSubmit = (event) => {
  event.preventDefault();
  submitButton.disabled = true;
  userInfo.contactDetail = form.elements["contact-details"].value;
  postData(`${waitlistURL}/v1/api/beta/waitlist`, userInfo).then((data) => {
    messageResponse(data);
  });
  form.elements["contact-details"].value = "";
  userInfo.contactDetail = "";
};

async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function messageResponse(response) {
  if (response.message === "success") {
    form.style.height = "0";
    form.style.opacity = "0";
    form.style.transform = "scale(0)";
    heading.innerText = "Congratulations!";
    text.innerText = "You have successfully joined the waiting list! 🎉";
    responseBox.classList.remove("hidden");
    // responseBox.style.transform = "scale(1)";
  } else {
    submitButton.disabled = false;
    text.innerText = `⚠️ ${response.message}`;
  }
}

// form.addEventListener("submit", handleSubmit);

$(document).ready(function () {
  // $(".press-carousel").owlCarousel({
  //   loop: true,
  //   margin: 15,
  //   responsiveClass: true,
  //   autoplay: true,
  //   autoplayTimeout: 2000,
  //   autoplayHoverPause: true,
  //   responsive: {
  //     0: {
  //       items: 2,
  //       nav: false,
  //     },
  //     600: {
  //       items: 4,
  //       nav: false,
  //     },
  //     1000: {
  //       items: 6,
  //       nav: false,
  //       loop: true,
  //     },
  //   },
  // });
  $(".press-logo-carousel").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    infinite: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".press-carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    infinite: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // $(".owl-carousel").flickity({
  //   loop: true,
  //   margin: 15,
  //   responsiveClass: true,
  //   autoplay: true,
  //   autoplayTimeout: 2000,
  //   autoplayHoverPause: true,
  //   responsive: {
  //     0: {
  //       items: 2,
  //       nav: false,
  //     },
  //     600: {
  //       items: 4,
  //       nav: false,
  //     },
  //     1000: {
  //       items: 6,
  //       nav: false,
  //       loop: true,
  //     },
  //   },
  // });
});

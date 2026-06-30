const ctaBtn = document.querySelector("#cta-btn"); //queryselector berfungsi untuk mencari id si komponen yang ingin kita manipulate
const ctaFeedback = document.querySelector("#cta-feedback");
let counter = 0;
ctaBtn.addEventListener("click", () => {
  counter++;
  console.log(counter);

  if (counter == 1) {
    ctaFeedback.classList.remove("hidden");
    ctaFeedback.textContent = "Click 1";
  } else if (counter == 2) {
    ctaFeedback.textContent = "Click ke 2";
  } else {
    ctaBtn.remove();
  }
}); //addeventlistener bakal dengerin / notificated / follow apapun yang akan dilakukan sama apa yang kita execute
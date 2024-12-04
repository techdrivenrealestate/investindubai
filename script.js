//document.addEventListener("DOMContentLoaded", () => {
//    const steps = document.querySelectorAll(".form-step");
//    const nextButtons = document.querySelectorAll(".next-button");
//    const prevButtons = document.querySelectorAll(".prev-button");
//    const form = document.getElementById("multiStepForm");
//    let currentStep = 0;
//
//    // Show the first step
//    steps[currentStep].classList.add("active");
//
//    // Handle Next button
//    nextButtons.forEach((button) => {
//        button.addEventListener("click", () => {
//            steps[currentStep].classList.remove("active");
//            currentStep++;
//            steps[currentStep].classList.add("active");
//        });
//    });
//
//    // Handle Back button
//    prevButtons.forEach((button) => {
//        button.addEventListener("click", () => {
//            steps[currentStep].classList.remove("active");
//            currentStep--;
//            steps[currentStep].classList.add("active");
//        });
//    });
//
//    // Handle Form Submission
//    form.addEventListener("submit", (e) => {
//        e.preventDefault();
//        alert("Thank you for submitting your details!");
//        form.reset();
//        currentStep = 0;
//        steps.forEach((step) => step.classList.remove("active"));
//        steps[currentStep].classList.add("active");
//    });
//});
//

// script.js

// Placeholder for future JavaScript functionality

// Example: Smooth scroll to form section when 'Register Now' button is clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


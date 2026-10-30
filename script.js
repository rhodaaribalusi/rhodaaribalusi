
document.addEventListener("DOMContentLoaded", function () {
    // Update the copyright year.
    document.querySelectorAll(".current-year").forEach(function (element) {
      element.textContent = new Date().getFullYear();
    });
  
    // Mobile navigation menu.
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");
  
    if (menuButton && navigation) {
      menuButton.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.textContent = isOpen ? "✕" : "☰";
      });
  
      navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          navigation.classList.remove("open");
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.textContent = "☰";
        });
      });
    }
  
    // Prepare an email from the contact form.
    const contactForm = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");
  
    if (contactForm && feedback) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        if (!contactForm.checkValidity()) {
          contactForm.reportValidity();
          return;
        }
  
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
  
        const recipient = "rhodaaribalusi@gmail.com";
        const emailSubject = encodeURIComponent(subject);
        const emailBody = encodeURIComponent(
          "Name: " + name +
          "\nEmail: " + email +
          "\n\nMessage:\n" + message
        );
  
        feedback.textContent =
          "Opening your email application. Review the message and send it there.";
  
        window.location.href =
          "mailto:" + recipient +
          "?subject=" + emailSubject +
          "&body=" + emailBody;
      });
    }
  });
  
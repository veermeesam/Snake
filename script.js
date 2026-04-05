document.getElementById("joinForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    qualification: document.getElementById("qualification").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value
  };

  emailjs.send("service_8skfm5g", "template_o9qkjk8", data)
    .then(function(response) {
      document.getElementById("message").innerText =
        "Form submitted successfully. Please wait for our response.";
    }, function(error) {
      document.getElementById("message").innerText =
        "Error sending application. Try again.";
    });
});
window.onload = function() {
  var modal = document.getElementById('contactModal');

  var btn = document.getElementById("openModal");

  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
      modal.style.display = "block";
  }

  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  var form = document.getElementById("contactForm");

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  form.onsubmit = function() {
    var email = document.getElementById("emailInput").value;
    var valid = validateEmail(email);
    if (!valid) {
      alert("Please enter a valid email address");
      return;
    }
    var subject = document.getElementById("contactSubject").value;
    var body = document.getElementById("contactMessage").value;
    var cc = document.getElementById("contactcc").checked;
    if (cc) {
      window.open(`mailto:christensen.corym@gmail.com?subject=${subject}&body=${body}&cc=${email}`);
    } else {
      window.open(`mailto:christensen.corym@gmail.com?subject=${subject}&body=${body}`);
    }
  }

};

// Greeting
let userName = prompt("Masukkan nama kamu:");
if (userName) {
  document.getElementById("welcomeText").innerText = `Hi ${userName}, Welcome To Website`;
}

// Current Time
function updateTime() {
  const now = new Date();
  document.getElementById("time").innerText = now.toString();
}
setInterval(updateTime, 1000);

// Form Logic
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const message = document.getElementById("messageInput").value;

  if (!name || !birthdate || !gender || !message) {
    alert("Harap isi semua kolom sebelum submit!");
    return;
  }

  document.getElementById("outputName").innerText = name;
  document.getElementById("outputBirthdate").innerText = birthdate;
  document.getElementById("outputGender").innerText = gender;
  document.getElementById("outputMessage").innerText = message;

  this.reset();
});

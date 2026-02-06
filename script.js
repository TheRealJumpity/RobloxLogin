const user = document.getElementById("user");
const pass = document.getElementById("pass");
const btn = document.getElementById("loginBtn");

function validate() {
  if (user.value.length >= 3 && pass.value.length >= 6) {
    btn.disabled = false;
    btn.classList.add("enabled");
  } else {
    btn.disabled = true;
    btn.classList.remove("enabled");
  }
}

user.addEventListener("input", validate);
pass.addEventListener("input", validate);

btn.addEventListener("click", () => {
  alert("get trolled noob");
});

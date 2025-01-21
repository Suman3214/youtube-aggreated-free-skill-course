// Function to enroll the user
function enrollCourse() {
    const button = document.getElementById("enroll-btn");
    button.textContent = "You are enrolled!";
    button.disabled = true;
    button.style.backgroundColor = "#2ecc71";
  }
  
  // Function to toggle completion of lessons
  document.querySelectorAll(".lesson").forEach((lesson) => {
    lesson.addEventListener("click", () => {
      lesson.classList.toggle("completed");
    });
  });
const popup = document.querySelector(".popup");
const popupP = document.querySelector(".popup p");

console.log("Popup elements found:", { popup, popupP });

// Flag to track if quiz result is being shown
let isShowingQuizResult = false;

const showTempPopup = (message = "Checking...") => {
  // Don't show temp popup if quiz result is being displayed
  if (isShowingQuizResult) {
    console.log("Skipping temp popup because quiz result is being shown");
    return;
  }
  
  console.log("showTempPopup called with message:", message);
  popupP.innerText = message;
  popup.classList.remove("d-none");
  popup.classList.add("animation-running");
  setTimeout(() => {
    popup.classList.add("d-none");
    popup.classList.remove("animation-running");
    popupP.innerText = "";
  }, 1200);
};

const showQuizResultPopup = (data) => {
  console.log("showQuizResultPopup called with data:", data);
  
  // Handle missing or invalid data
  if (!data || typeof data !== 'object') {
    console.error("Invalid data received:", data);
    showTempPopup("Error: Invalid quiz data received");
    return;
  }
  
  const { score, time, totalQuestions, correctAnswers } = data;
  
  // Validate required fields
  if (score === undefined || time === undefined || totalQuestions === undefined || correctAnswers === undefined) {
    console.error("Missing required data fields:", { score, time, totalQuestions, correctAnswers });
    showTempPopup("Error: Missing quiz result data");
    return;
  }
  
  // Format time as MM:SS
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  // Create detailed result message
  const resultMessage = `
    <div class="result-item mb-3">
      <h3 class="text-primary mb-2">Quiz Completed! 🎉</h3>
    </div>
    <div class="result-item mb-2">
      <strong>Score:</strong> ${score}/10
    </div>
    <div class="result-item mb-2">
      <strong>Correct Answers:</strong> ${correctAnswers}/${totalQuestions}
    </div>
    <div class="result-item mb-4">
      <strong>Time Taken:</strong> ${formattedTime}
    </div>
  `;
  
  console.log("Setting modal content:", resultMessage);
  
  // Get modal elements
  const modal = document.getElementById('quizResultModal');
  const content = document.getElementById('quizResultContent');
  
  // Set content and show modal
  content.innerHTML = resultMessage;
  modal.classList.remove("d-none");
};

// Function to close the quiz result modal
const closeQuizResultModal = () => {
  const modal = document.getElementById('quizResultModal');
  modal.classList.add("d-none");
};

// Make functions globally accessible
window.showTempPopup = showTempPopup;
window.showQuizResultPopup = showQuizResultPopup;
window.closeQuizResultModal = closeQuizResultModal;

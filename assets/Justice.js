// Select elements
const tapMessage = document.querySelector('.tap-message');
const playPauseButton = document.querySelector('.play-pause-button');
const innerCircle = document.querySelector('.inner-circle');
const instruction = document.querySelector('.breathing-instruction');

// Breathing phases text
const phases = ["Breathe in...", "Hold...", "Breathe out...", "Hold..."];
let phaseIndex = 0;
let animationActive = false;  // Track animation state
let breathingTimeout;         // Timeout for instruction text

// Function to update breathing instruction text in sync with animation
function updateBreathingInstruction() {
    instruction.textContent = phases[phaseIndex];
    phaseIndex = (phaseIndex + 1) % phases.length; // Cycle through phases

    // Schedule the next phase update after 2 seconds (for 8 seconds total)
    breathingTimeout = setTimeout(updateBreathingInstruction, 2000);
}

function startBreathing() {
    innerCircle.classList.add('breathing');  // Apply animation only to inner circle
    playPauseButton.textContent = 'Pause';
    tapMessage.style.display = 'none';
    animationActive = true;

    // Reset phase index and start the instruction text update loop
    phaseIndex = 0;
    updateBreathingInstruction();
}

// Stop breathing animation and text
function stopBreathing() {
    innerCircle.classList.remove('breathing');  // Stop CSS animation on the inner circle
    clearTimeout(breathingTimeout);             // Stop updating text
    playPauseButton.textContent = 'Play';
    animationActive = false;
}

// Event listener for initial tap to start the breathing
document.addEventListener('click', (event) => {
    if (!animationActive && event.target !== playPauseButton) {
        startBreathing();
    }
}, { once: true });  // Runs only once to start the animation

// Event listener for play/pause button
playPauseButton.addEventListener('click', () => {
    if (animationActive) {
        stopBreathing();
    } else {
        startBreathing();
    }
});

// Select elements
const quizModal = document.getElementById('quizModal');
const modalQuizButton = document.querySelector('.modal-quiz');
const closeButton = document.querySelector('.close-button');
const quizForm = document.getElementById('quizForm');
const quizResult = document.getElementById('quizResult');

// Function to open the modal
function openModal() {
    quizModal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    quizModal.style.display = 'none';
}

// Open the modal when the "Sure!" button is clicked
modalQuizButton.addEventListener('click', openModal);

// Close the modal when the close button is clicked
closeButton.addEventListener('click', closeModal);

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === quizModal) {
        closeModal();
    }
});

// Handle quiz form submission
quizForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Count each answer type selected by the user
    const answerCounts = {
        neuro: 0,
        depression: 0,
        anxiety: 0,
        personality: 0
    };

    // Get the selected answers
    const formData = new FormData(quizForm);
    formData.forEach((value) => {
        // Increase the count for the selected category
        if (value === 'neuro') {
            answerCounts.neuro++;
        } else if (value === 'depression') {
            answerCounts.depression++;
        } else if (value === 'anxiety') {
            answerCounts.anxiety++;
        } else if (value === 'personality') {
            answerCounts.personality++;
        }
    });

    // Debugging: Log answer counts
    console.log('Answer Counts:', answerCounts);

    // Determine the result based on the highest count
    let resultMessage = '';
    const maxAnswer = Object.keys(answerCounts).reduce((a, b) => answerCounts[a] > answerCounts[b] ? a : b);

    if (maxAnswer === 'neuro') {
        resultMessage = 'You may struggle with Neurodivergence.';
    } else if (maxAnswer === 'depression') {
        resultMessage = 'You may struggle with Depression.';
    } else if (maxAnswer === 'anxiety') {
        resultMessage = 'You may struggle with an Anxiety Disorder.';
    } else if (maxAnswer === 'personality') {
        resultMessage = 'You may struggle with a Personality Disorder.';
    }

    // Display the result on the main page
    quizResult.textContent = resultMessage;
    closeModal(); // Close the modal after submission
});

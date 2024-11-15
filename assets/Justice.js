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

// Select the "No, thank you" button
const noThanksButton = document.querySelector('.no.thanks');

// Function to display all sources
function displayAllResources() {
    const allResources = `
        <h3>Here are some resources that might help:</h3>
        <ul>
            <li><a href="https://www.health.harvard.edu/blog/what-is-neurodiversity-202111232645" target="_blank">Learn more about Neurodivergence</a></li>
            <li><a href="https://www.who.int/news-room/fact-sheets/detail/depression" target="_blank">Learn more about Depression</a></li>
            <li><a href="https://www.nimh.nih.gov/health/topics/anxiety-disorders" target="_blank">Learn more about Anxiety Disorders</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Personality_disorder" target="_blank">Learn more about Personality Disorders</a></li>
            <li><a href="https://growtherapy.com/wp/grow-brd/?g_acctid=735-200-2909&g_adgroupid=136246792271&g_adid=582218976177&g_adtype=search&g_campaign=Grow-Therapy%7CClient%7CSEM%7CAll%7CBRD%7CPhrase&g_campaignid=16220885160&g_keyword=grow%20therapy&g_keywordid=kwd-399665747887&g_network=g&utm_device=c&network=g&matchtype=p&geoid=9010227&utm_source=google&utm_medium=cpc&utm_campaign=136246792271&utm_content=582218976177&utm_term=grow%20therapy&cc_opt_out=true&gclid=CjwKCAiA3Na5BhAZEiwAzrfagGEIRkvC7a9U1dSyYaWlvZLkQsBy9iWfufhJ8qmXsPl9smbpFz0f6xoCvVwQAvD_BwE" target="_blank">Find therapy resources</a></li>
        </ul>
    `;

    // Display the resources in the quizResult section
    quizResult.innerHTML = allResources;
}

// Attach the event listener to the "No, thank you" button
noThanksButton.addEventListener('click', displayAllResources);

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
        answerCounts[value]++;
    });

    // Determine the result based on the highest count
    let resultMessage = '';
    const maxAnswer = Object.keys(answerCounts).reduce((a, b) => answerCounts[a] > answerCounts[b] ? a : b);

    // Detailed result messages with links
    const detailedResults = {
        neuro: `
            <p>You may struggle with Neurodivergence. Neurodivergent is a term used to describe people whose brains process information differently than most people, resulting in different strengths and challenges. Neurodivergent people may have conditions such as autism spectrum disorder, attention deficit hyperactivity disorder, dyslexia, or obsessive-compulsive disorder. They may also have different strengths, such as better memory or the ability to solve complex math calculations in their head.</p>
            <a href="https://www.health.harvard.edu/blog/what-is-neurodiversity-202111232645" target="_blank">Learn more about Neurodivergence</a>
            <br>
            <a href="https://growtherapy.com/wp/grow-brd/?g_acctid=735-200-2909&g_adgroupid=136246792271&g_adid=582218976177&g_adtype=search&g_campaign=Grow-Therapy%7CClient%7CSEM%7CAll%7CBRD%7CPhrase&g_campaignid=16220885160&g_keyword=grow%20therapy&g_keywordid=kwd-399665747887&g_network=g&utm_device=c&network=g&matchtype=p&geoid=9010227&utm_source=google&utm_medium=cpc&utm_campaign=136246792271&utm_content=582218976177&utm_term=grow%20therapy&cc_opt_out=true&gclid=CjwKCAiA3Na5BhAZEiwAzrfagGEIRkvC7a9U1dSyYaWlvZLkQsBy9iWfufhJ8qmXsPl9smbpFz0f6xoCvVwQAvD_BwE" target="_blank">Find therapy resources</a>
        `,
        depression: `
            <p>You may struggle with Depression. Depression is a serious mental health condition that involves a persistent low mood and loss of interest in activities. Symptoms include feeling sad, loss of interest, poor concentration, and feelings of low self-worth.</p>
            <a href="https://www.who.int/news-room/fact-sheets/detail/depression" target="_blank">Learn more about Depression</a>
            <br>
            <a href="https://growtherapy.com/wp/grow-brd/?g_acctid=735-200-2909&g_adgroupid=136246792271&g_adid=582218976177&g_adtype=search&g_campaign=Grow-Therapy%7CClient%7CSEM%7CAll%7CBRD%7CPhrase&g_campaignid=16220885160&g_keyword=grow%20therapy&g_keywordid=kwd-399665747887&g_network=g&utm_device=c&network=g&matchtype=p&geoid=9010227&utm_source=google&utm_medium=cpc&utm_campaign=136246792271&utm_content=582218976177&utm_term=grow%20therapy&cc_opt_out=true&gclid=CjwKCAiA3Na5BhAZEiwAzrfagGEIRkvC7a9U1dSyYaWlvZLkQsBy9iWfufhJ8qmXsPl9smbpFz0f6xoCvVwQAvD_BwE" target="_blank">Find therapy resources</a>
        `,
        anxiety: `
            <p>You may struggle with an Anxiety Disorder. Anxiety disorders cause excessive fear and worry that persist over time. Symptoms may include physical effects like a rapid heartbeat or mental symptoms like poor concentration and trouble sleeping.</p>
            <a href="https://www.nimh.nih.gov/health/topics/anxiety-disorders" target="_blank">Learn more about Anxiety Disorders</a>
            <br>
            <a href="https://growtherapy.com/wp/grow-brd/?g_acctid=735-200-2909&g_adgroupid=136246792271&g_adid=582218976177&g_adtype=search&g_campaign=Grow-Therapy%7CClient%7CSEM%7CAll%7CBRD%7CPhrase&g_campaignid=16220885160&g_keyword=grow%20therapy&g_keywordid=kwd-399665747887&g_network=g&utm_device=c&network=g&matchtype=p&geoid=9010227&utm_source=google&utm_medium=cpc&utm_campaign=136246792271&utm_content=582218976177&utm_term=grow%20therapy&cc_opt_out=true&gclid=CjwKCAiA3Na5BhAZEiwAzrfagGEIRkvC7a9U1dSyYaWlvZLkQsBy9iWfufhJ8qmXsPl9smbpFz0f6xoCvVwQAvD_BwE" target="_blank">Find therapy resources</a>
        `,
        personality: `
            <p>You may struggle with a Personality Disorder. Personality disorders are patterns of thinking and behavior that can cause distress and difficulties in relationships. They are often divided into clusters such as Cluster A (odd) and Cluster B (dramatic).</p>
            <a href="https://en.wikipedia.org/wiki/Personality_disorder" target="_blank">Learn more about Personality Disorders</a>
            <br>
            <a href="https://growtherapy.com/wp/grow-brd/?g_acctid=735-200-2909&g_adgroupid=136246792271&g_adid=582218976177&g_adtype=search&g_campaign=Grow-Therapy%7CClient%7CSEM%7CAll%7CBRD%7CPhrase&g_campaignid=16220885160&g_keyword=grow%20therapy&g_keywordid=kwd-399665747887&g_network=g&utm_device=c&network=g&matchtype=p&geoid=9010227&utm_source=google&utm_medium=cpc&utm_campaign=136246792271&utm_content=582218976177&utm_term=grow%20therapy&cc_opt_out=true&gclid=CjwKCAiA3Na5BhAZEiwAzrfagGEIRkvC7a9U1dSyYaWlvZLkQsBy9iWfufhJ8qmXsPl9smbpFz0f6xoCvVwQAvD_BwE" target="_blank">Find therapy resources</a>
        `
    };

    // Display the detailed result
    quizResult.innerHTML = detailedResults[maxAnswer];
    closeModal(); // Close the modal after submission
});
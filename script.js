// Theme Engine Switcher
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    themeIcon.className = 'fa-solid fa-sun';
  } else {
    themeIcon.className = 'fa-solid fa-moon';
  }
});

// Mobile Navigation Drawer Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// AI Sandbox Simulation Logic
const runAiBtn = document.getElementById('runAiBtn');
const aiPrompt = document.getElementById('aiPrompt');
const aiOutput = document.getElementById('aiOutput');

const mockResponses = [
  "> Analyzing neural data stream... Connection established.\n> Result: Optimal execution model generated with 99.4% accuracy rate.",
  "> Synthesizing natural language request...\n> Done: Custom Python pipeline created for automated processing.",
  "> Processing vector database query...\n> Found 1,420 matched entries across global edge network in 8.2ms."
];

function executeAi() {
  const query = aiPrompt.value.trim();
  if (!query) return;

  aiOutput.innerHTML = `<p class="system-msg">> Query received: "${query}"</p><p style="color:#eab308">> Thinking...</p>`;
  
  setTimeout(() => {
    const randomRes = mockResponses[Math.floor(Math.random() * mockResponses.length)];
    aiOutput.innerHTML = `<p class="system-msg">> Executed: "${query}"</p><p style="color:#4ade80">${randomRes.replace(/\n/g, '<br>')}</p>`;
    aiPrompt.value = '';
  }, 1000);
}

runAiBtn.addEventListener('click', executeAi);
aiPrompt.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') executeAi();
});

// Dynamic Pricing Toggle (Monthly vs Yearly)
const pricingSwitch = document.getElementById('pricingSwitch');
const priceAmounts = document.querySelectorAll('.amount');

pricingSwitch.addEventListener('change', () => {
  const isYearly = pricingSwitch.checked;
  
  priceAmounts.forEach(amountEl => {
    const value = isYearly ? amountEl.getAttribute('data-yearly') : amountEl.getAttribute('data-monthly');
    amountEl.textContent = value;
  });
});
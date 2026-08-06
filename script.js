// 1. Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Typewriter Effect for Hero Section
const typeText = "Abdullah's Portfolio";
const typeElement = document.getElementById('typewriter-text');
let textIndex = 0;

function typeWriter() {
  if (textIndex < typeText.length) {
    typeElement.textContent += typeText.charAt(textIndex);
    textIndex++;
    // 100 represents the speed in milliseconds. Lower is faster!
    setTimeout(typeWriter, 100); 
  }
}

// Start the animation as soon as the page loads
document.addEventListener('DOMContentLoaded', typeWriter);

// 2. Experience Tab Switcher
/* const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove active state from all buttons and panels
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    tabPanels.forEach((panel) => panel.classList.remove('active'));

    // Add active state to clicked button
    button.classList.add('active');

    // Activate corresponding panel using the data-tab attribute
    const targetTabId = button.getAttribute('data-tab');
    const targetPanel = document.getElementById(targetTabId);
    
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  });
}); */
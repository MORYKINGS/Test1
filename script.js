// Updated script.js to create a rotating laser heart effect

document.addEventListener("DOMContentLoaded", function () {
  // Create heart container
  const heartContainer = document.createElement('div');
  heartContainer.className = 'heart-container';
  document.body.appendChild(heartContainer);

  // Add laser beams to heart container
  for (let i = 0; i < 10; i++) {
    const laser = document.createElement('div');
    laser.className = 'laser';
    heartContainer.appendChild(laser);
  }

  // Add a button to start/stop rotation (optional)
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Heart Rotation';
  toggleButton.style.position = 'absolute';
  toggleButton.style.bottom = '20px';
  toggleButton.style.left = '50%';
  toggleButton.style.transform = 'translateX(-50%)';
  toggleButton.style.padding = '10px 20px';
  toggleButton.style.fontSize = '16px';
  toggleButton.style.backgroundColor = '#ff4081';
  toggleButton.style.color = '#fff';
  toggleButton.style.border = 'none';
  toggleButton.style.borderRadius = '5px';
  toggleButton.style.cursor = 'pointer';
  document.body.appendChild(toggleButton);

  // Toggle animation on button click
  toggleButton.addEventListener('click', () => {
    if (heartContainer.style.animationPlayState === 'paused') {
      heartContainer.style.animationPlayState = 'running';
    } else {
      heartContainer.style.animationPlayState = 'paused';
    }
  });
});

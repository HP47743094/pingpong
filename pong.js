const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

// Create the paddle
const paddleWidth = 10;
const paddleHeight = 100;
const player = {
  x: 0,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: "#fff",
};
const computer = {
  x: canvas.width - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: "#fff",
};

// Create the ball
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  speed: 4,
  dx: 4,
  dy: 4,
  color: "#fff",
};

// Draw the paddle
function drawPaddle(x, y, width, height, color) {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}

// Draw the ball
function drawBall(x, y, radius, color) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, false);
  context.closePath();
  context.fill();
}

// Update game objects
function update() {
  // Move the paddle
  player.y += 8;

  // Move the ball
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Detect collision with walls
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy *= -1;
  }

  // Detect collision with paddles
  if (
    ball.y + ball.radius > player.y &&
    ball.y - ball.radius < player.y + player.height &&
    ball.dx < 0
  ) {
    ball.dx *= -1;
  } else if

$(document).ready(function() {
    const BOARD_SIZE = 20;
    let snake = [{ x: 10, y: 10 }];
    let food = { x: 15, y: 12 };
    let dx = 1;
    let dy = 0;
    let score = 0;
    let gameInterval;
    let timerInterval;
    let timeLeft = 60;

    function createBoard() {
        $("#game-board").empty();
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                $("#game-board").append("<div class='cell' data-x='" + j + "' data-y='" + i + "'></div>");
            }
        }
    }

    function drawSnake() {
        $(".snake").remove();
        for (let i = 0; i < snake.length; i++) {
            $("#game-board").append("<div class='snake' style='left: " + snake[i].x * 20 + "px; top: " + snake[i].y * 20 + "px;'></div>");
        }
    }

    function drawFood() {
        $(".food").remove();
        $("#game-board").append("<div class='food' style='left: " + food.x * 20 + "px; top: " + food.y * 20 + "px;'></div>");
    }

    function moveSnake() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };
        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            score++;
            generateFood();
        } else {
            snake.pop();
        }
    }

    function generateFood() {
        food = {
            x: Math.floor(Math.random() * BOARD_SIZE),
            y: Math.floor(Math.random() * BOARD_SIZE)
        };
    }

    function checkCollision() {
        const head = snake[0];
        if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
            return true;
        }
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }
        return false;
    }

    function updateTimer() {
        timeLeft--;
        $("#timer").text("Time Left: " + timeLeft);
        if (timeLeft <= 0) {
            gameOver();
        }
    }

    function gameOver() {
        clearInterval(gameInterval);
        clearInterval(timerInterval);
        alert("Game Over! Score: " + score);
        $("#start-button").show();
        $("#restart-button").show();
    }

    function gameLoop() {
        moveSnake();
        if (checkCollision()) {
            gameOver();
        }
        drawSnake();
        drawFood();
    }

    $("#start-button").click(function() {
        console.log("hola")
        $(this).hide();
        $("#restart-button").hide();
        createBoard();
        snake = [{ x: 10, y: 10 }];
        food = { x: 15, y: 12 };
        dx = 1;
        dy = 0;
        score = 0;
        timeLeft = 60;
        $("#timer").text(timeLeft);
        gameInterval = setInterval(gameLoop, 100);
        timerInterval = setInterval(updateTimer, 1000);
    });

    $("#restart-button").click(function() {
        $("#start-button").click();
    });

    $(document).keydown(function(event) {
        if (gameInterval) {
            switch (event.which) {
                case 37:
                    dx = -1;
                    dy = 0;
                    break;
                case 38:
                    dx = 0;
                    dy = -1;
                    break;
                case 39:
                    dx = 1;
                    dy = 0;
                    break;
                case 40:
                    dx = 0;
                    dy = 1;
                    break;
            }
        }
    });

    $("#restart-button").hide();
});
document.addEventListener('DOMContentLoaded', () => {

    const scoreDisplay = document.getElementById('score')
    const lifeDisplay = document.getElementById('life')
    const width = 28;
    let score = 0;
    let life = 3;
    let username = document.get
    const level = document.querySelector('.level')
    const levelElements = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,1,1,
        1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,4,1,1,1,1,1,0,1,1,0,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,4,1,1,1,1,1,0,1,1,0,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,1,1,0,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,4,1,
        1,1,1,0,1,1,0,1,1,4,1,1,0,0,0,0,1,1,4,1,1,0,1,1,1,1,4,1,
        1,1,1,0,1,1,0,1,1,4,1,0,0,0,0,0,0,1,4,1,1,0,1,1,1,1,4,1,
        4,4,4,4,4,4,0,0,0,4,1,0,0,0,0,0,0,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,0,1,1,0,1,1,4,1,0,0,1,1,0,0,1,4,1,1,0,1,1,1,1,4,1,
        1,1,1,0,1,1,0,1,1,4,1,0,5,4,4,5,0,1,4,1,1,0,1,1,1,1,0,1,
        1,1,1,0,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,4,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,4,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ];

    const squares = [];
    var x = document.getElementById("myAudio");

    function playAudio() {
        x.play();
    }

    function pauseAudio() {
        x.pause();
    }


    //create level
    function createBoard() {
        for (let i = 0; i < levelElements.length; i++) {
            const square = document.createElement('div')
            level.appendChild(square)
            squares.push(square)

            //add layout to the board
            if(levelElements[i] === 0) {
                squares[i].classList.add('pac-dot')
            } else if (levelElements[i] === 1) {
                squares[i].classList.add('wall')
            } else if (levelElements[i] === 2) {
                squares[i].classList.add('ghost-lair')
            } else if (levelElements[i] === 3) {
                squares[i].classList.add('cherry')
            } else if (levelElements[i] === 4) {
                squares[i].classList.add('empty')
            } else if (levelElements[i] === 5) {
                squares[i].classList.add('heart')
            }

        }
    }
    createBoard();


    //create Characters
    //draw pacman onto the board
    let pacmanCurrentIndex = 290;

    squares[pacmanCurrentIndex].classList.add('pac-man')

    //get the coordinates of pacman on the grid with X and Y axis
    // function getCoordinates(index) {
    //   return [index % width, Math.floor(index / width)]
    // }

    // console.log(getCoordinates(pacmanCurrentIndex))

    //move pacman
    function movePacman(e) {
        playAudio();
        squares[pacmanCurrentIndex].classList.remove('pac-man')
        let key = e.which;
        switch(key) {
            case 37:
                if(
                    pacmanCurrentIndex % width !== 0 &&
                    !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex -= 1;
                if (squares[pacmanCurrentIndex -1] === squares[363]) {
                    pacmanCurrentIndex = 391
                }
                break;
            case 38:
                if(
                    pacmanCurrentIndex - width >= 0 &&
                    !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex -= width;
                break;
            case 39:
                if(
                    pacmanCurrentIndex % width < width - 1 &&
                    !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex += 1;
                if (squares[pacmanCurrentIndex +1] === squares[392]) {
                    pacmanCurrentIndex = 364
                }
                break;
            case 40:
                if (
                    pacmanCurrentIndex + width < width * width &&
                    !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex += width;
                break
        }
        squares[pacmanCurrentIndex].classList.add('pac-man');
        eatDot();
        eatCherry();
        eatHeart();
        loseLife();
        checkForWin();
    }
    document.addEventListener('keydown', movePacman);

    function eatDot() {
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
            score++;
            scoreDisplay.innerHTML = score;
            squares[pacmanCurrentIndex].classList.remove('pac-dot');
            squares[pacmanCurrentIndex].classList.add('empty')
        }
    }

    function eatCherry() {
        if (squares[pacmanCurrentIndex].classList.contains('cherry')) {
            score +=10;
            scoreDisplay.innerHTML = score;
            ghosts.forEach(ghost => ghost.isScared = true);
            setTimeout(unScareGhosts, 10000);
            squares[pacmanCurrentIndex].classList.remove('cherry');
            squares[pacmanCurrentIndex].classList.add('empty')
        }
    }

    function eatHeart() {
        if (squares[pacmanCurrentIndex].classList.contains('heart')) {
            score +=10;
            life = life+1;
            scoreDisplay.innerHTML = score;
            lifeDisplay.innerHTML = life;
            squares[pacmanCurrentIndex].classList.remove('heart');
            squares[pacmanCurrentIndex].classList.add('empty')
        }
    }
    function unScareGhosts() {
        ghosts.forEach(ghost => ghost.isScared = false)
    }

    //ghost constructor
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className;
            this.startIndex = startIndex;
            this.speed = speed;
            this.currentIndex = startIndex;
            this.isScared = false;
            this.timerId = NaN
        }
    }

    // create 5 ghosts
    ghosts = [
        new Ghost('red', 376, 200),
        new Ghost('pink', 377, 180),
        new Ghost('blue', 378, 160),
        new Ghost('orange', 379, 140),
        new Ghost('purple', 375, 120)
    ]

    //draw ghosts
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className);
        squares[ghost.currentIndex].classList.add('ghost')
    })

    //move ghosts
    ghosts.forEach(ghost => moveGhost(ghost));

    function moveGhost(ghost) {
        const directions =  [-1, +1, width, -width];
        let direction = directions[Math.floor(Math.random() * directions.length)];

        ghost.timerId = setInterval(function() {
            if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
                !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
                squares[ghost.currentIndex].classList.remove(ghost.className);
                squares[ghost.currentIndex].classList.remove('ghost', 'scared');
                ghost.currentIndex += direction;
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
            } else direction = directions[Math.floor(Math.random() * directions.length)];


            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared')
            }

            if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared');
                ghost.currentIndex = 351;
                score +=100;
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
            }
            loseLife()
        }, ghost.speed)
    }

    function loseLife(){
        if(squares[pacmanCurrentIndex].classList.contains('ghost') &&
            !squares[pacmanCurrentIndex].classList.contains('scared')){
            squares[pacmanCurrentIndex].classList.remove('ghost');
            squares[pacmanCurrentIndex].classList.remove('pac-man');
            pacmanCurrentIndex = 290;
            life = life-1;
            if (life < 1){
                ghosts.forEach(ghost => clearInterval(ghost.timerId));
                document.removeEventListener('keyup', movePacman);
                setTimeout(function(){ alert("Game Over :("); }, 500)
            }
            lifeDisplay.innerHTML = life;

        }
    }

    function checkForWin() {
        if (score >= 400) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId));
            document.removeEventListener('keyup', movePacman);
            setTimeout(function(){ alert("You have WON! :)"); }, 500)
        }
    }
});
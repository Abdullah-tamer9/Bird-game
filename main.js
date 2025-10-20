const wall = document.getElementById("wall");
const hole = document.getElementById("hole");
const bird = document.getElementById("bird");
const yourscore = document.getElementById("score")
let score = 0;



hole.addEventListener("animationiteration", () => {
    let rand = Math.random() * (500 - 150);
    hole.style.top = rand + "px";

    score++;

});

setInterval(() => {
    let birdtop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
    if (!isjumbing) { bird.style.top = birdtop + 3 + "px" }
    yourscore.innerHTML = score;
    let wallleft = parseInt(getComputedStyle(wall).getPropertyValue("left"));
    let holetop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
    if (birdtop > 480 || wallleft < 25 && (birdtop > holetop + 150 || birdtop < holetop)) {
        alert(`GAME OVER. your score is: ${score}`)
        score = 0;

        bird.style.top = 100 + "px";
        wall.style.left = "100%";
        hole.style.left = "100%";
        // hole.style.animation = "none";


    }

}, 10)

let isjumbing = false;
document.addEventListener("keydown", (down) => {
    if (down.code === "ArrowUp") {
        isjumbing = true;
        let jumpTimer = 0;

        let jumbinterval = setInterval(() => {
            jumpTimer++
            let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
            if (birdTop > 0 && jumpTimer < 20) {
                bird.style.top = birdTop - 3 + "px"

            }

            if (jumpTimer > 20) {
                clearInterval(jumbinterval);
                isjumbing = false;
                jumbinterval = 0;

            }
        }, 10)
    }
})
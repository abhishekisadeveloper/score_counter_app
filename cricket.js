let MatchScore = 0;
let totalTarget = 1;
let Ball = 0;

function matchScore1(){
    MatchScore += 1;
    Ball += 1
    Target = MatchScore + totalTarget;
    document.getElementById("target-el").textContent = Target;
    document.getElementById("balls-el").textContent = Ball;
    document.getElementById("score").textContent = MatchScore;
}
function matchScore2(){
    MatchScore += 2;
    Ball += 1
    Target = MatchScore + totalTarget;
    document.getElementById("target-el").textContent = Target;
    document.getElementById("balls-el").textContent = Ball;
    document.getElementById("score").textContent = MatchScore;
}
function matchScore3(){
    MatchScore += 3;
    Ball += 1
    Target = MatchScore + totalTarget;
    document.getElementById("target-el").textContent = Target;
    document.getElementById("balls-el").textContent = Ball;
    document.getElementById("score").textContent = MatchScore;
}
function matchScore4(){
    MatchScore += 4;
    Ball += 1
    Target = MatchScore + totalTarget;
    document.getElementById("target-el").textContent = Target;
    document.getElementById("balls-el").textContent = Ball;
    document.getElementById("score").textContent = MatchScore;
}
function matchWide() {
    MatchScore += 1;
    Target = MatchScore + totalTarget;
    document.getElementById("target-el").textContent = Target;
    document.getElementById("score").textContent = MatchScore;
}
function matchBall(){
    Ball += 1
    document.getElementById("balls-el").textContent = Ball;
    
}
function matchReset(){
    MatchScore = 0;
    Ball = 0;
    Target = 0;
    document.getElementById("target-el").textContent = Target;
    document.getElementById("balls-el").textContent = Ball;
    document.getElementById("score").textContent = MatchScore;
}
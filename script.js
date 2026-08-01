// ==========================================
// Girlfriend's Day Surprise
// script.js
// ==========================================

const doors = document.querySelectorAll(".door");
const overlay = document.getElementById("overlay");
const prizeText = document.getElementById("prize");
const messageText = document.getElementById("message");
const claimButton = document.getElementById("claimButton");
const loveLetter = document.getElementById("loveLetter");
const secretHeart = document.getElementById("secretHeart");
const confettiContainer = document.getElementById("confetti");

let gamePlayed = false;
let heartClicks = 0;

// ==========================================
// RANDOMIZE PRIZES
// ==========================================

let prizes = [
    {
        amount: "₦15,000",
        message: "Jackpot! Looks like today is smiling back at you. ❤️"
    },
    {
        amount: "₦10,000",
        message: "A little surprise for someone incredibly special."
    },
    {
        amount: "₦1,000",
        message: "Even the smallest gifts carry the biggest love."
    }
];

// Fisher-Yates Shuffle
function shuffle(array){

    for(let i = array.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

}

shuffle(prizes);

// ==========================================
// DOOR CLICK
// ==========================================

doors.forEach((door,index)=>{

    door.addEventListener("click",()=>{

        if(gamePlayed) return;

        gamePlayed = true;

        // Open chosen door
        door.classList.add("open");

        // Fade others
        doors.forEach(d=>{

            if(d!==door){

                d.classList.add("fade");

            }

        });

        // Reveal after animation

        setTimeout(()=>{

            prizeText.textContent = prizes[index].amount;
            messageText.textContent = prizes[index].message;

            overlay.classList.remove("hidden");

            createConfetti();

        },1300);

    });

});

// ==========================================
// CLAIM BUTTON
// ==========================================

claimButton.addEventListener("click",()=>{

    overlay.classList.add("hidden");

    setTimeout(()=>{

        loveLetter.classList.remove("hidden");

    },300);

});

// ==========================================
// SECRET HEART
// ==========================================

secretHeart.addEventListener("click",()=>{

    heartClicks++;

    if(heartClicks>=5){

        loveLetter.classList.remove("hidden");

    }

});

// ==========================================
// CONFETTI
// ==========================================

function createConfetti(){

    confettiContainer.innerHTML="";

    const colors=[
        "#FFD700",
        "#F7D774",
        "#FFC0CB",
        "#F8E7EE",
        "#FFFFFF"
    ];

    for(let i=0;i<160;i++){

        const piece=document.createElement("div");

        piece.style.position="absolute";

        piece.style.width=Math.random()*8+5+"px";

        piece.style.height=Math.random()*14+8+"px";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-30px";

        piece.style.borderRadius="3px";

        piece.style.opacity=".9";

        piece.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.transform=
        `rotate(${Math.random()*360}deg)`;

        piece.style.transition=
        `transform ${Math.random()*3+3}s linear,
         top ${Math.random()*3+3}s linear`;

        confettiContainer.appendChild(piece);

        setTimeout(()=>{

            piece.style.top="110vh";

            piece.style.transform=
            `translateX(${Math.random()*250-125}px)
             rotate(${Math.random()*720}deg)`;

        },50);

        setTimeout(()=>{

            piece.remove();

        },7000);

    }

}

// ==========================================
// CLOSE LOVE LETTER
// Click Anywhere
// ==========================================

loveLetter.addEventListener("click",()=>{

    loveLetter.classList.add("hidden");

});

// ==========================================
// Floating Sparkles
// ==========================================

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top="105vh";

    sparkle.style.fontSize=Math.random()*12+12+"px";

    sparkle.style.pointerEvents="none";

    sparkle.style.opacity=".7";

    sparkle.style.transition="all 8s linear";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.style.top="-50px";

        sparkle.style.transform=
        `translateX(${Math.random()*120-60}px)
         rotate(${Math.random()*360}deg)`;

        sparkle.style.opacity="0";

    },50);

    setTimeout(()=>{

        sparkle.remove();

    },8500);

}

setInterval(createSparkle,800);

// ==========================================
// Soft Door Hover Sound (Optional)
// ==========================================

doors.forEach(door=>{

    door.addEventListener("mouseenter",()=>{

        door.animate(

            [

                {transform:"translateY(0px)"},

                {transform:"translateY(-8px)"},

                {transform:"translateY(0px)"}

            ],

            {

                duration:450

            }

        );

    });

});

console.log("Happy Girlfriend's Day ❤️");
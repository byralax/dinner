function createSparkles() {
    const container = document.getElementById('sparklesContainer');
    const sparkleCount = 25;
    const symbols = ['✦', '✧', '⋆', '❋'];
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(sparkle);
    }
}

function createHearts() {
    const container = document.getElementById('heartsContainer');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '♥';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(heart);
    }
}

function handleResponse(answer) {
    const responseMessage = document.getElementById('responseMessage');
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(btn => {
        btn.style.opacity = '0.5';
        btn.style.pointerEvents = 'none';
    });

    responseMessage.style.display = 'block';
    if (answer === 'Accepted') {
        responseMessage.innerHTML = "💖 Magnifique! I can't waitttt...";
        createHearts();
    } else {
        responseMessage.innerHTML = "🌹 Your elegance will be missed...";
    }

    document.getElementById('responseInput').value = answer;
    fetch(document.getElementById('proposalForm').action, {
        method: 'POST',
        body: new URLSearchParams(new FormData(document.getElementById('proposalForm'))),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (!response.ok) throw new Error('Failed to submit');
    }).catch(error => {
        responseMessage.innerHTML += "<br>⚠️ Please send me direct message!";
    });
}

window.onload = createSparkles;

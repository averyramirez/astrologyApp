{
    const moonPhase = {
    url: 'https://api.farmsense.net/v1/moonphases/?d=',
    time: Math.floor(Date.now() / 1000)
}

const {url, time} = moonPhase
const todaysMoon = `${url}${time}`

async function getMoon(){
    const response = await fetch(todaysMoon);
    const data = await response.json();
    if(data[0]["Phase"] === "New Moon" ) {
        var img = new Image(); 
        var div = document.getElementById('moonPhase'); 
        img.onload = function() { 
        div.appendChild(img); 
    }; img.src = 'phases/newMoon.png';
    } 
    if(data[0]["Phase"] === "Waxing Crescent" ) {
        var img = new Image(); 
        var div = document.getElementById('moonPhase'); 
        img.onload = function() { 
        div.appendChild(img); 
    }; img.src = 'phases/waxingCrescent.png';
    } 
    if(data[0]["Phase"] === "First Quarter" ) {
        var img = new Image(); 
        var div = document.getElementById('moonPhase'); 
        img.onload = function() { 
        div.appendChild(img); 
    }; img.src = 'phases/firstQuarter.png';
    } 
    if(data[0]["Phase"] === "Waxing Gibbous" ) {
        var img = new Image(); 
        var div = document.getElementById('moonPhase'); 
        img.onload = function() { 
        div.appendChild(img); 
    }; img.src = 'phases/waxingGibbous.png';
    } 
    if(data[0]["Phase"] === "Full Moon" ) {
        var img = new Image(); 
        var div = document.getElementById('moonPhase'); 
        img.onload = function() { 
        div.appendChild(img); 
    }; img.src = 'phases/fullMoon.png';
    } 
    if(data[0]["Phase"] === "Waning Gibbous" ) {
        var img = new Image(); 
        var div = document.getElementById('moonPhase'); 
        img.onload = function() { 
        div.appendChild(img); 
    }; img.src = 'phases/waningGibbous.png';
    } 
    if(data[0]["Phase"] === "3rd Quarter" ) {
        var img = new Image(); 
        var div = document.getElementById('moonPhase'); 
        img.onload = function() { 
        div.appendChild(img); 
    }; img.src = 'phases/lastQuarter.png';
    } 
    if(data[0]["Phase"] === "Waning Crescent" ) {
        var img = new Image(); 
        var div = document.getElementById('moonPhase'); 
        img.onload = function() { 
        div.appendChild(img); 
    }; img.src = 'phases/waningCrescent.png';
    }
    document.getElementById('phaseInfo').innerText = `The moon is ${(data[0]["Illumination"]) * 100}% illuminated and is in its ${(data[0]["Phase"])} phase.`;
}

getMoon();
}
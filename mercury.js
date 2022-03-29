{
    const mercuryRetrograde = {
    url: 'https://mercuryretrogradeapi.com?date=',
    date: new Date().toISOString().slice(0, 10),
}

const {url, date} = mercuryRetrograde
const isRetrograde = `${url}${date}`

async function getMercury(){
    const response = await fetch(isRetrograde);
    const data = await response.json();
    if(data["is_retrograde"] === true){
    //     var img = new Image(); 
    //     var div = document.getElementById('mercurySymbol'); 
    //     img.onload = function() { 
    //     div.appendChild(img); 
    // }; 
    // img.src = 'mercury.png';
    document.getElementById('mercuryRetrograde').innerText = `Mercury is currently in retrograde. Tread carefully.`;
    // console.log(data)
    }
    else {
        document.getElementById('mercuryRetrograde').innerText = `Mercury is not currently in retrograde.`;
        console.log("Mercury is not currently in Retrograde.")
    }
}

getMercury();
}
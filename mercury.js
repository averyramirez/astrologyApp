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
    console.log(data)
}

getMercury();
}
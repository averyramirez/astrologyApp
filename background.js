var images = [
    //Woods
    'https://images.unsplash.com/photo-1502252430442-aac78f397426?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    // //Pink Sunset
    // 'https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    // //Blue Mountains
    // 'https://images.unsplash.com/photo-1491466424936-e304919aada7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80',
    // //Mushroom 
    // 'https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
    // //Purple Night
    // 'https://images.unsplash.com/photo-1498026474556-93048b8493d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80',
    // //Cityscape
    // 'https://images.unsplash.com/photo-1546083381-2bed38b42cac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
    ];

    var n = Math.floor(Math.random()*images.length);
    document.body.style.backgroundImage = 'url(' + images[n] + ')';

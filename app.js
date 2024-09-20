fetch ('api/spotify') 
    .then (response => response.json())
    .then (data => {
        
        const currentPlaying = document.getElementById('current-playing');
        
        data.item.artists.forEach(track => {
            currentPlaying.innerHTML += `<p>${track.name}</p>`;
            
        });

    });

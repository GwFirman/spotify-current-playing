fetch ('api/spotify') 
    .then (response => response.json())
    .then (data => {
        
        const currentPlaying = document.getElementById('current-playing');
        
        data.item.artists.forEach(track => {
            
            const currentPlayingContainer = document.createElement('div');
            currentPlayingContainer.classList.add('p-2', 'lg:p-4', 'flex', 'items-center');
      
            const img = document.createElement('img');
            img.id = 'cover';
            img.src = track.item.album.images[0].url;
            img.alt = `Cover image for ${track.item.name}`;
            img.classList.add('rounded-md', 'mr-4', 'lg:size-16', 'size-12');
      
            const textContainer = document.createElement('div');
            textContainer.classList.add('text-sm', 'lg:text-md');
      
            const songTitle = document.createElement('p');
            songTitle.id = 'judul-lagu';
            songTitle.classList.add('font-medium');
            songTitle.textContent = track.item.name;
      
            const artistName = document.createElement('p');
            artistName.id = 'nama-artis';
            artistName.textContent = track.item.artists.map(artist => artist.name).join(', ');
      
            textContainer.appendChild(songTitle);
            textContainer.appendChild(artistName);
      
            currentPlayingContainer.appendChild(img);
            currentPlayingContainer.appendChild(textContainer);
      
            currentPlaying.appendChild(currentPlayingContainer);
        });

    });

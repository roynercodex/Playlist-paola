// Elementos del DOM
        const audioPlayer = document.getElementById('audio-player');
        const playBtn = document.getElementById('play-btn');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const progressContainer = document.getElementById('progress-container');
        const progressBar = document.getElementById('progress-bar');
        const currentTimeEl = document.getElementById('current-time');
        const durationEl = document.getElementById('duration');
        const lyricsContainer = document.getElementById('lyrics-container');
        const songDisplay = document.getElementById('song-display');
        const lyricsDisplay = document.getElementById('lyrics-display');
        const currentSongNameEl = document.getElementById('current-song-name');
        const currentArtistEl = document.getElementById('current-artist');
        const currentCoverEl = document.getElementById('current-cover');
        const coverLoading = document.getElementById('cover-loading');
        const songsList = document.getElementById('songs-list');
        const playerFullscreen = document.getElementById('player-fullscreen');
        const closeBtn = document.getElementById('close-btn');
        const lyricsToggleBtn = document.getElementById('lyrics-toggle-btn');
        const favoritePlayerBtn = document.getElementById('favorite-player-btn');
        const allSongsBtn = document.getElementById('all-songs-btn');
        const favoritesBtn = document.getElementById('favorites-btn');
        const emptyFavorites = document.getElementById('empty-favorites');

        // Variables de estado
        let isPlaying = false;
        let currentSongIndex = 0;
        let isLyricsVisible = false;
        let showingFavorites = false;
        let lyricsLines = [];

        // Lista de canciones
        const songs = [
            {
                name: "Una Mujer Como Tú",
                artist: "Eddie Santiago",
                audioSrc: "https://raw.githubusercontent.com/roynercodex/roynercode/principal/Una%20Mujer%20Como%20t%C3%BA.mp3",
                lyricsFile: "Una mujer como tú (2).lrc",
                coverImage: "Albums/Una mujer mujer como tu.png"
            },
            {
                name: "De Sol a Sol",
                artist: "Salserin",
                audioSrc: "music/de_sol_a_sol.mp3",
                lyricsFile: "Lyrics/de_sol_a_sol.lrc",
                coverImage: "Albums/De sol a sol.png"
            },
            {
                name: "La Magia de Tus Besos",
                artist: "Grupo Niche",
                audioSrc: "music/la_magia_de_tus_besos.mp3",
                lyricsFile: "Lyrics/la_magia_de_tus_besos.lrc",
                coverImage: "Albums/la magia de tus besos.png"
            },
            {
                name: "Solo Te Quiero Amar",
                artist: "Calle Ciega",
                audioSrc: "music/solo_te_quiero_amar.mp3",
                lyricsFile: "Lyrics/solo_te_quiero_amar.lrc",
                coverImage: "Albums/Solo te quiero amar.png"
            },
            {
                name: "23",
                artist: "Morat",
                audioSrc: "music/23.mp3",
                lyricsFile: "Lyrics/23.lrc",
                coverImage: "Albums/23.png"
            },
            {
                name: "Cuando Nadie Ve",
                artist: "Morat",
                audioSrc: "music/cuando_nadie_ve.mp3",
                lyricsFile: "Lyrics/cuando_nadie_ve.lrc",
                coverImage: "Albums/Cuando nadie ve.png"
            },
            {
                name: "Chachachá",
                artist: "Jósean Log",
                audioSrc: "music/chachacha.mp3",
                lyricsFile: "Lyrics/chachacha.lrc",
                coverImage: "Albums/Chachachá.png"
            },
            {
                name: "Tiroteo",
                artist: "Marc Segui",
                audioSrc: "music/tiroteo.mp3",
                lyricsFile: "Lyrics/tiroteo.lrc",
                coverImage: "Albums/Tiroteo.png"
            },
            {
                name: "Hechizo de Luna",
                artist: "Edgar Joel",
                audioSrc: "music/hechizo_de_luna.mp3",
                lyricsFile: "Lyrics/hechizo_de_luna.lrc",
                coverImage: "Albums/Hechizo de luna.png"
            },
            {
                name: "Voy a Conquistar Tu Amor",
                artist: "Johnny Rivera",
                audioSrc: "music/voy_a_conquistar_tu_amor.mp3",
                lyricsFile: "Lyrics/voy_a_conquistar_tu_amor.lrc",
                coverImage: "Albums/Voy a conquistar tu amor.png"
            },
            {
                name: "En Guerra",
                artist: "Sebastian Yatra",
                audioSrc: "music/voy_a_conquistar_tu_amor.mp3",
                lyricsFile: "Lyrics/voy_a_conquistar_tu_amor.lrc",
                coverImage: "Albums/en guerra.png"
            },
            {
                name: "No Hace Falta",
                artist: "Sunny",
                audioSrc: "music/voy_a_conquistar_tu_amor.mp3",
                lyricsFile: "Lyrics/voy_a_conquistar_tu_amor.lrc",
                coverImage: "Albums/No hace falta.png"
            },
            {
                name: "Corazón Sin Cara",
                artist: "Prince Royce",
                audioSrc: "music/voy_a_conquistar_tu_amor.mp3",
                lyricsFile: "Lyrics/voy_a_conquistar_tu_amor.lrc",
                coverImage: "Albums/corazón sin cara.png"
            },
            {
                name: "Mi Niña Bonita",
                artist: "Chino y Nacho",
                audioSrc: "music/voy_a_conquistar_tu_amor.mp3",
                lyricsFile: "Lyrics/voy_a_conquistar_tu_amor.lrc",
                coverImage: "Albums/Niña bonita - chino y nacho.png"
            },
            {
                name: "A Thousand Years",
                artist: "Kevin & Karla",
                audioSrc: "music/voy_a_conquistar_tu_amor.mp3",
                lyricsFile: "Lyrics/voy_a_conquistar_tu_amor.lrc",
                coverImage: "Albums/A thousand years.png"
            },
            {
                name: "Te Hizo Tan Bella",
                artist: "Adolescents Orquesta",
                audioSrc: "music/voy_a_conquistar_tu_amor.mp3",
                lyricsFile: "Lyrics/voy_a_conquistar_tu_amor.lrc",
                coverImage: "Albums/Te hizo  tan bella.jpg"
            },
            {
                name: "Que Hay De Malo",
                artist: "Jerry Rivera",
                audioSrc: "music/voy_a_conquistar_tu_amor.mp3",
                lyricsFile: "Lyrics/voy_a_conquistar_tu_amor.lrc",
                coverImage: "Albums/Que hay de malo.jpg"
            },
            {
                name: "Tú No Lo Amas",
                artist: "Anuel AA",
                audioSrc: "music/voy_a_conquistar_tu_amor.mp3",
                lyricsFile: "Lyrics/voy_a_conquistar_tu_amor.lrc",
                coverImage: "Albums/Tú no lo amas.jpg"
            },
            {
                name: "Follow",
                artist: "Anuel, Karol G",
                audioSrc: "music/voy_a_conquistar_tu_amor.mp3",
                lyricsFile: "Lyrics/voy_a_conquistar_tu_amor.lrc",
                coverImage: "Albums/follow.png"
            },
            {
                name: "Eres Mi Sueño",
                artist: "Fonseca",
                audioSrc: "music/voy_a_conquistar_tu_amor.mp3",
                lyricsFile: "Lyrics/voy_a_conquistar_tu_amor.lrc",
                coverImage: "Albums/eres mi sueño.png"
            },
            {
                name: "La Bella Y La Bestia",
                artist: "Anuel AA",
                audioSrc: "music/voy_a_conquistar_tu_amor.mp3",
                lyricsFile: "Lyrics/voy_a_conquistar_tu_amor.lrc",
                coverImage: "Albums/la bella y la bestia.png"
            },
            {
                name: "Those Eyes",
                artist: "New West",
                audioSrc: "music/voy_a_conquistar_tu_amor.mp3",
                lyricsFile: "Lyrics/voy_a_conquistar_tu_amor.lrc",
                coverImage: "Albums/Those eyes.png"
            }
        ];

        // Cargar las canciones en el DOM
        function renderSongs(songsToRender = songs) {
            songsList.innerHTML = '';

            if (songsToRender.length === 0) {
                emptyFavorites.style.display = 'block';
                return;
            } else {
                emptyFavorites.style.display = 'none';
            }

            songsToRender.forEach((song, index) => {
                const songElement = document.createElement('div');
                songElement.className = 'cancion';
                songElement.innerHTML = `
                    <div class="portada">
                        <div class="loading-image"></div>
                        <img src="${song.coverImage}" alt="${song.name}" onload="this.style.display='block'; this.previousElementSibling.style.display='none'" onerror="this.previousElementSibling.style.display='none'">
                    </div>
                    <div class="nombre"><h4>${song.name}</h4></div>
                    <div class="artista"><p>${song.artist}</p></div>
                `;
                songElement.addEventListener('click', () => playSong(songs.indexOf(song)));
                songsList.appendChild(songElement);
            });
        }

        // Función para reproducir una canción
        function playSong(index) {
            currentSongIndex = index;
            const song = songs[index];
            currentSongNameEl.textContent = song.name;
            currentArtistEl.textContent = song.artist;

            // Mostrar loading de imagen
            coverLoading.style.display = 'block';
            currentCoverEl.style.display = 'none';

            // Cargar imagen
            currentCoverEl.src = song.coverImage;
            currentCoverEl.onload = function() {
                coverLoading.style.display = 'none';
                currentCoverEl.style.display = 'block';
            };
            currentCoverEl.onerror = function() {
                coverLoading.style.display = 'none';
                // Si la imagen no carga, mostrar un placeholder
                currentCoverEl.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250' viewBox='0 0 24 24'%3E%3Cpath fill='%236a11cb' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E";
                currentCoverEl.style.display = 'block';
            };

            audioPlayer.src = song.audioSrc;
            // Cargar letras desde el archivo .lrc
            loadLyrics(song);
            // Actualizar botón de favoritos en el reproductor
            updateFavoritePlayerButton();
            playerFullscreen.style.display = 'flex';
            audioPlayer.play();
            isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }

        // Cargar letras desde archivo .lrc
        function loadLyrics(song) {
            lyricsContainer.innerHTML = '<div class="loading">Cargando letra...</div>';
            lyricsLines = [];

            fetch(song.lyricsFile)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Archivo de letras no encontrado');
                    }
                    return response.text();
                })
                .then(data => {
                    lyricsContainer.innerHTML = '';
                    const lines = data.split('\n');
                    let lyricData = [];

                    lines.forEach(line => {
                        // Parsear líneas con formato [mm:ss.xx] texto
                        const timeMatch = line.match(/\[(\d{2}):(\d{2}\.\d{2})\](.*)/);
                        if (timeMatch) {
                            const minutes = parseInt(timeMatch[1]);
                            const seconds = parseFloat(timeMatch[2]);
                            const text = timeMatch[3].trim();
                            const time = minutes * 60 + seconds;

                            if (text) {
                                lyricData.push({ time, text });
                            }
                        }
                    });

                    // Ordenar por tiempo
                    lyricData.sort((a, b) => a.time - b.time);

                    // Crear elementos de letra
                    lyricData.forEach(line => {
                        const lyricLine = document.createElement('div');
                        lyricLine.className = 'lyrics-line';
                        lyricLine.textContent = line.text;
                        lyricLine.dataset.time = line.time;
                        lyricsContainer.appendChild(lyricLine);
                        lyricsLines.push(lyricLine);
                    });

                    if (lyricData.length === 0) {
                        lyricsContainer.innerHTML = '<div class="loading">Letra no disponible</div>';
                    }
                })
                .catch(error => {
                    console.error('Error cargando letra:', error);
                    lyricsContainer.innerHTML = '<div class="loading">Error cargando letra</div>';
                });
        }

        // Actualizar botón de favoritos en el reproductor
        function updateFavoritePlayerButton() {
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            const song = songs[currentSongIndex];
            const isFavorite = favorites.some(fav => fav.audioSrc === song.audioSrc);

            if (isFavorite) {
                favoritePlayerBtn.classList.add('active');
                favoritePlayerBtn.innerHTML = '<i class="fas fa-heart"></i>';
            } else {
                favoritePlayerBtn.classList.remove('active');
                favoritePlayerBtn.innerHTML = '<i class="far fa-heart"></i>';
            }
        }

        // Eventos del reproductor
        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                audioPlayer.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                audioPlayer.play();
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        });

        // Botón de siguiente canción
        nextBtn.addEventListener('click', () => {
            if (currentSongIndex < songs.length - 1) {
                currentSongIndex++;
            } else {
                currentSongIndex = 0; // Volver al inicio si es la última canción
            }
            playSong(currentSongIndex);
        });

        // Botón de canción anterior
        prevBtn.addEventListener('click', () => {
            if (currentSongIndex > 0) {
                currentSongIndex--;
            } else {
                currentSongIndex = songs.length - 1; // Ir a la última canción si es la primera
            }
            playSong(currentSongIndex);
        });

        audioPlayer.addEventListener('timeupdate', () => {
            const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.style.width = `${progress}%`;
            const minutes = Math.floor(audioPlayer.currentTime / 60);
            const seconds = Math.floor(audioPlayer.currentTime % 60);
            currentTimeEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            // Sincronizar la letra
            const currentTime = audioPlayer.currentTime;
            let activeLineIndex = -1;
            lyricsLines.forEach((line, index) => {
                const time = parseFloat(line.dataset.time);
                if (currentTime >= time) {
                    activeLineIndex = index;
                }
            });

            if (activeLineIndex >= 0) {
                lyricsLines.forEach((line, index) => {
                    line.classList.remove('active', 'previous');

                    if (index === activeLineIndex) {
                        line.classList.add('active');
                    } else if (index === activeLineIndex - 1) {
                        line.classList.add('previous');
                    }
                });

                // Desplazar las letras para que la línea activa esté en el centro
                const activeLine = lyricsLines[activeLineIndex];
                if (activeLine) {
                    const containerHeight = lyricsDisplay.clientHeight;
                    const lineHeight = activeLine.offsetHeight;
                    const offsetTop = activeLine.offsetTop;
                    const scrollPosition = offsetTop - (containerHeight / 2) + (lineHeight / 2);
                    lyricsContainer.style.transform = `translateY(-${scrollPosition}px)`;
                }
            }
        });

        audioPlayer.addEventListener('loadedmetadata', () => {
            const minutes = Math.floor(audioPlayer.duration / 60);
            const seconds = Math.floor(audioPlayer.duration % 60);
            durationEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        });

        progressContainer.addEventListener('click', (e) => {
            const progressWidth = progressContainer.clientWidth;
            const clickedOffsetX = e.offsetX;
            const duration = audioPlayer.duration;
            audioPlayer.currentTime = (clickedOffsetX / progressWidth) * duration;
        });

        // Cerrar reproductor en pantalla completa (NO pausa la canción)
        closeBtn.addEventListener('click', () => {
            playerFullscreen.style.display = 'none';
            // NO pausamos la canción aquí
            // Solo restablecemos la visualización
            songDisplay.style.display = 'block';
            lyricsDisplay.style.display = 'none';
            lyricsToggleBtn.classList.remove('active');
            isLyricsVisible = false;
        });

        // Alternar entre portada y letra con el nuevo botón
        lyricsToggleBtn.addEventListener('click', () => {
            isLyricsVisible = !isLyricsVisible;
            if (isLyricsVisible) {
                songDisplay.style.display = 'none';
                lyricsDisplay.style.display = 'block';
                lyricsToggleBtn.classList.add('active');
            } else {
                songDisplay.style.display = 'block';
                lyricsDisplay.style.display = 'none';
                lyricsToggleBtn.classList.remove('active');
            }
        });

        // Función para marcar como favorita desde el reproductor
        favoritePlayerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            const song = songs[currentSongIndex];
            const songIndex = favorites.findIndex(fav => fav.audioSrc === song.audioSrc);
            if (songIndex === -1) {
                favorites.push(song);
                favoritePlayerBtn.classList.add('active');
                favoritePlayerBtn.innerHTML = '<i class="fas fa-heart"></i>';
            } else {
                favorites.splice(songIndex, 1);
                favoritePlayerBtn.classList.remove('active');
                favoritePlayerBtn.innerHTML = '<i class="far fa-heart"></i>';
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));

            // Si estamos viendo favoritos, actualizar la lista
            if (showingFavorites) {
                showFavorites();
            }
        });

        // Mostrar todas las canciones
        allSongsBtn.addEventListener('click', () => {
            showingFavorites = false;
            allSongsBtn.classList.add('active');
            favoritesBtn.classList.remove('active');
            renderSongs();
        });

        // Mostrar favoritos
        favoritesBtn.addEventListener('click', () => {
            showingFavorites = true;
            favoritesBtn.classList.add('active');
            allSongsBtn.classList.remove('active');
            showFavorites();
        });

        function showFavorites() {
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            renderSongs(favorites);
        }

        // Pausar la canción cuando el usuario salga de la página
        window.addEventListener('beforeunload', () => {
            if (isPlaying) {
                audioPlayer.pause();
            }
        });

        // Pausar la canción cuando la pestaña pierda el foco
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && isPlaying) {
                audioPlayer.pause();
                isPlaying = false;
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });

        // Inicializar la página
        renderSongs();
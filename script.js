// ===== DADOS EDITÁVEIS - ADICIONE AQUI SUAS FOTOS E MÚSICAS ===== 

// EDITE AQUI: Adicione suas fotos
// Formato: { id: número, image: 'caminho/foto.jpg', title: 'Título', date: 'Data', description: 'Descrição' }
const galleryPhotos = [
    // Adicione suas fotos aqui
    // Exemplo:
    // { id: 1, image: "imagens/foto1.jpg", title: "Nosso Primeiro Encontro", date: "15 de Maio de 2023", description: "Descrição da foto..." }
];
// Preencher com as 4 primeiras fotos da pasta `img/`
const photoPhrasesKey = (id) => `photo_phrase_${id}`;
const photoTitleKey = (id) => `photo_title_${id}`;
galleryPhotos.push(
    { id: 1, image: "img/photo-01.jpeg", title: "Nossa foto 1", date: "", description: "" },
    { id: 2, image: "img/photo-02.jpeg", title: "Nossa foto 2", date: "", description: "" },
    { id: 3, image: "img/photo-04.jpeg", title: "Nossa foto 3", date: "", description: "" },
    { id: 4, image: "img/photo-03.jpeg", title: "Nossa foto 4", date: "", description: "" }
);

// ===== NOSSAS MEMÓRIAS (fotos 6 a 10) =====
const memoryPhotos = [
    { id: 6, image: "img/photo-06.jpeg", title: "Nossa memória 6", date: "", description: "" },
    { id: 7, image: "img/photo-07.jpeg", title: "Nossa memória 7", date: "", description: "" },
    { id: 8, image: "img/photo-08.jpeg", title: "Nossa memória 8", date: "", description: "" },
    { id: 9, image: "img/photo-09.jpeg", title: "Nossa memória 9", date: "", description: "" },
    { id: 10, image: "img/photo-10.jpeg", title: "Nossa memória 10", date: "", description: "" }
];

// Reuse keys for titles and phrases for memories as well
const memoryTitleKey = photoTitleKey;
const memoryPhraseKey = photoPhrasesKey;

function renderMemories() {
    const memoriesGrid = document.getElementById('memoriesGrid');
    if (!memoriesGrid) return;
    memoriesGrid.innerHTML = '';

    memoryPhotos.forEach((mem, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.style.animationDelay = `${index * 0.1}s`;

        const savedTitle = localStorage.getItem(memoryTitleKey(mem.id)) || mem.title;
        const savedPhrase = localStorage.getItem(memoryPhraseKey(mem.id)) || mem.description || '';

        card.innerHTML = `
            <div class="memory-image">
                <img src="${mem.image}" alt="${savedTitle}">
                <div class="memory-overlay"><div class="memory-overlay-icon">→</div></div>
            </div>
        `;

        const imgElement = card.querySelector('img');
        const infoOverlay = document.createElement('div');
        infoOverlay.className = 'photo-info-overlay';
        infoOverlay.style.display = 'none';
        infoOverlay.innerHTML = `<h3>${savedTitle}</h3><p>${savedPhrase}</p>`;
        
        const imageContainer = card.querySelector('.memory-image');
        imageContainer.appendChild(infoOverlay);
        
        imgElement.addEventListener('click', (e) => {
            e.stopPropagation();
            infoOverlay.style.display = infoOverlay.style.display === 'none' ? 'flex' : 'none';
        });
        
        imageContainer.addEventListener('click', (e) => {
            if (e.target === imgElement) return;
            infoOverlay.style.display = 'none';
            openPhotoModal({
                id: mem.id,
                image: mem.image,
                title: savedTitle,
                date: mem.date || '',
                description: savedPhrase
            });
        });

        memoriesGrid.appendChild(card);
    });
}

// EDITE AQUI: Adicione suas músicas (ordem solicitada)
// Formato: { id: número, title: 'Nome', artist: 'Artista', duration: 'tempo', url: 'link ou caminho' }
const songs = [
    { id: 1, title: "Dilemas da Vida Moderna", artist: "Carol Biazin", duration: "3:35", url: "https://www.youtube.com/watch?v=oG4OGcjUrck" },
    { id: 2, title: "Ter o Coração no Chão", artist: "Ana Vitória", duration: "3:45", url: "https://www.youtube.com/watch?v=7P6EI7FzfMc" },
    { id: 3, title: "Wondering Why", artist: "The Red Clay Strays", duration: "4:00", url: "https://www.youtube.com/watch?v=JbxfFKvoAU4" },
    { id: 4, title: "Desnecessário", artist: "Ana Gabriela com Carol Biazin", duration: "3:20", url: "https://www.youtube.com/watch?v=_qaBNgYjYIU" },
    { id: 5, title: "Deusa do BK", artist: "BK", duration: "3:15", url: "https://www.youtube.com/watch?v=nk6e6RW042s" }
];

// ===== VARIÁVEIS GLOBAIS ===== 
let currentSongIndex = 0;
let isPlaying = false;
const audioPlayer = document.getElementById('audioPlayer');

// ===== RENDERIZAR GALERIA ===== 
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    
    if (galleryPhotos.length === 0) {
        galleryGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #b3b3b3; padding: 3rem;">Nenhuma foto adicionada ainda. Edite o script.js para adicionar suas fotos!</p>';
        return;
    }
    
    galleryPhotos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.animationDelay = `${index * 0.1}s`;
        const savedPhrase = localStorage.getItem(photoPhrasesKey(photo.id)) || '';
        const savedTitle = localStorage.getItem(photoTitleKey(photo.id)) || photo.title;

        item.innerHTML = `
            <img src="${photo.image}" alt="${savedTitle}">
            <div class="gallery-overlay">
                <div class="gallery-overlay-content">
                    <p class="gallery-overlay-title" data-photo-id="${photo.id}">${savedTitle}</p>
                    <div class="gallery-overlay-icon">→</div>
                </div>
            </div>
            <div class="photo-info-overlay" style="display: none;">
                <h3>${savedTitle}</h3>
                <p>${savedPhrase}</p>
            </div>
        `;
        
        const img = item.querySelector('img');
        const infoOverlay = item.querySelector('.photo-info-overlay');
        
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            infoOverlay.style.display = infoOverlay.style.display === 'none' ? 'flex' : 'none';
        });
        
        item.addEventListener('click', () => {
            infoOverlay.style.display = 'none';
            openPhotoModal(photo);
        });
        galleryGrid.appendChild(item);
    });
}

// ===== ABRIR MODAL DE FOTO ===== 
function openPhotoModal(photo) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalDescription = document.getElementById('modalDescription');

    modalImage.src = photo.image;
    // carregar título salvo (se houver) e permitir edição
    const savedTitle = localStorage.getItem(photoTitleKey(photo.id)) || photo.title;
    modalTitle.textContent = savedTitle;
    modalTitle.contentEditable = true;
    modalTitle.dataset.photoId = photo.id;

    // salvar título ao perder foco
    modalTitle.onblur = () => {
        const val = modalTitle.textContent.trim();
        localStorage.setItem(photoTitleKey(photo.id), val);
        // atualizar título no grid
        const titlePreview = document.querySelector(`.gallery-overlay-title[data-photo-id="${photo.id}"]`);
        if (titlePreview) titlePreview.textContent = val;
    };
    modalDate.textContent = photo.date ? `📅 ${photo.date}` : '';

    // carregar frase salva e permitir edição inline
    const saved = localStorage.getItem(photoPhrasesKey(photo.id)) || '';
    modalDescription.textContent = saved || 'Clique aqui para adicionar uma frase...';
    modalDescription.contentEditable = true;
    modalDescription.dataset.photoId = photo.id;
    modalDescription.focus();

    // salvar ao perder o foco
    modalDescription.onblur = () => {
        const value = modalDescription.textContent.trim();
        localStorage.setItem(photoPhrasesKey(photo.id), value);
        // atualizar o preview na galeria
        const preview = document.querySelector(`.gallery-phrase[data-photo-id="${photo.id}"]`);
        if (preview) preview.textContent = value;
    };

    modal.classList.add('active');
}

// ===== FECHAR MODAL ===== 
function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    const modalDescription = document.getElementById('modalDescription');
    if (modalDescription) {
        modalDescription.contentEditable = false;
        modalDescription.onblur = null;
        delete modalDescription.dataset.photoId;
    }
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) {
        modalTitle.contentEditable = false;
        modalTitle.onblur = null;
        delete modalTitle.dataset.photoId;
    }
    modal.classList.remove('active');
}

// ===== RENDERIZAR PLAYLIST ===== 
function renderPlaylist() {
    const songsList = document.getElementById('songsList');
    songsList.innerHTML = '';
    
    if (songs.length === 0) {
        songsList.innerHTML = '<p style="text-align: center; color: #b3b3b3; padding: 2rem;">Nenhuma música adicionada ainda. Edite o script.js para adicionar suas músicas!</p>';
        return;
    }
    
    songs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.className = 'song-item';
        songItem.style.animationDelay = `${index * 0.05}s`;
        songItem.id = `song-${song.id}`;
        
        songItem.innerHTML = `
            <span class="song-number">${index + 1}</span>
            <div class="song-info">
                <p class="song-title">${song.title}</p>
                <p class="song-artist">${song.artist}</p>
            </div>
            <span class="song-duration">${song.duration}</span>
            <button class="song-play-btn" onclick="openYoutubeSong(${index})">▶</button>
        `;
        
        songItem.addEventListener('click', () => openYoutubeSong(index));
        songsList.appendChild(songItem);
    });
}

// ===== ABRIR MÚSICA NO YOUTUBE (OU TOCAR LOCAL) =====
function openYoutubeSong(index) {
    if (songs.length === 0) return;
    currentSongIndex = index;
    const song = songs[index];
    if (!song || !song.url) return;

    // Se for link do YouTube, abre em nova aba com autoplay
    const isYouTube = song.url.includes('youtube.com') || song.url.includes('youtu.be');
    if (isYouTube) {
        const separator = song.url.includes('?') ? '&' : '?';
        const url = song.url + separator + 'autoplay=1';
        window.open(url, '_blank');
    } else {
        // Caso seja arquivo local, reproduz no player embutido
        playSong(index);
    }

    updatePlayUI();
}

// ===== TOCAR MÚSICA ===== 
function playSong(index) {
    if (songs.length === 0) return;
    
    currentSongIndex = index;
    const song = songs[index];
    
    audioPlayer.src = song.url;
    audioPlayer.play();
    isPlaying = true;
    
    updatePlayUI();
    document.getElementById('playPauseBtn').textContent = '⏸';
    document.getElementById('mainPlayBtn').textContent = '⏸';
    document.getElementById('mainPlayBtn').classList.add('playing');
}

// ===== ATUALIZAR UI DA PLAYLIST ===== 
function updatePlayUI() {
    document.querySelectorAll('.song-item').forEach((item, index) => {
        if (index === currentSongIndex) {
            item.classList.add('playing');
        } else {
            item.classList.remove('playing');
        }
    });
}

function updateCountdown() {
    const targetDate = new Date(2025, 7, 5, 0, 0, 0); // 05/08/2025
    const now = new Date();
    let delta = Math.abs(targetDate - now);
    const labelText = 'O tempo não mede o nosso amor; ele apenas registra há quanto tempo tenho a sorte de amar você.';

    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((delta / (1000 * 60)) % 60);
    const seconds = Math.floor((delta / 1000) % 60);

    const pad = (value) => String(value).padStart(2, '0');

    const labelEl = document.getElementById('countdownLabel');
    if (labelEl) labelEl.textContent = labelText;
    const daysEl = document.getElementById('countdownDays');
    const hoursEl = document.getElementById('countdownHours');
    const minutesEl = document.getElementById('countdownMinutes');
    const secondsEl = document.getElementById('countdownSeconds');
    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minutesEl) minutesEl.textContent = pad(minutes);
    if (secondsEl) secondsEl.textContent = pad(seconds);
}

function startCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== PLAY/PAUSE ===== 
function togglePlayPause() {
    if (songs.length === 0) return;
    
    if (audioPlayer.src === '') {
        // Se primeiro item for YouTube, abra no YouTube; caso contrário, toque localmente
        const firstIsYouTube = songs[0] && (songs[0].url.includes('youtube.com') || songs[0].url.includes('youtu.be'));
        if (firstIsYouTube) {
            openYoutubeSong(0);
            return;
        }
        playSong(0);
        return;
    }
    
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        document.getElementById('playPauseBtn').textContent = '▶';
        document.getElementById('mainPlayBtn').textContent = '▶';
        document.getElementById('mainPlayBtn').classList.remove('playing');
    } else {
        audioPlayer.play();
        isPlaying = true;
        document.getElementById('playPauseBtn').textContent = '⏸';
        document.getElementById('mainPlayBtn').textContent = '⏸';
        document.getElementById('mainPlayBtn').classList.add('playing');
    }
}

// ===== PRÓXIMA MÚSICA ===== 
function nextSong() {
    if (songs.length === 0) return;
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    // Se for YouTube, abra no YouTube; senão, toque localmente
    const next = songs[currentSongIndex];
    if (next && (next.url.includes('youtube.com') || next.url.includes('youtu.be'))) {
        openYoutubeSong(currentSongIndex);
    } else {
        playSong(currentSongIndex);
    }
}

// ===== MÚSICA ANTERIOR ===== 
function previousSong() {
    if (songs.length === 0) return;
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    const prev = songs[currentSongIndex];
    if (prev && (prev.url.includes('youtube.com') || prev.url.includes('youtu.be'))) {
        openYoutubeSong(currentSongIndex);
    } else {
        playSong(currentSongIndex);
    }
}

// ===== CONTROLAR PROGRESSO ===== 
function seek(value) {
    const time = (value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = time;
}

// ===== ATUALIZAR PROGRESSO ===== 
audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('progressRange').value = progress;
    
    document.getElementById('currentTime').textContent = formatTime(audioPlayer.currentTime);
    document.getElementById('duration').textContent = formatTime(audioPlayer.duration);
});

// ===== FORMATAR TEMPO ===== 
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ===== PRÓXIMA MÚSICA AUTOMÁTICA ===== 
audioPlayer.addEventListener('ended', () => {
    nextSong();
});

// ===== PLAY DO BOTÃO PRINCIPAL ===== 
function toggleMainPlay() {
    if (songs.length === 0) return;
    if (audioPlayer.src === '') {
        const firstIsYouTube = songs[0] && (songs[0].url.includes('youtube.com') || songs[0].url.includes('youtu.be'));
        if (firstIsYouTube) {
            openYoutubeSong(0);
            return;
        }
        playSong(0);
    } else {
        togglePlayPause();
    }
}

// ===== FECHAR MODAL AO CLICAR FORA ===== 
document.getElementById('photoModal').addEventListener('click', (e) => {
    if (e.target.id === 'photoModal') {
        closePhotoModal();
    }
});

// ===== INICIALIZAR ===== 
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    renderPlaylist();
    renderMemories();
    startCountdown();
    console.log('✨ Nosso Spotify Romântico carregado com sucesso!');
});
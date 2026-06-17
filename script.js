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
    { id: 1, image: "img/photo-01.jpeg", title: "Viajem", date: "", description: "Pela primeira vez, viajamos juntas. Mesmo tendo sido para uma cidade vizinha, essa primeira viagem significou muito para mim, meu amor. Estar ao seu lado torna tudo mais bonito, leve e especial. Foi um dos nossos primeiros finais de ano juntas e também uma das nossas primeiras aventuras compartilhadas. Cada momento vivido ao seu lado ficou guardado no meu coração e se transformou em uma lembrança que levarei para sempre comigo. O que mais me encanta é saber que essa foi apenas a primeira de muitas viagens, experiências e histórias que ainda vamos construir juntas. Porque, independentemente do destino, o meu lugar favorito sempre será ao seu lado." },
    { id: 2, image: "img/photo-02.jpeg", title: "Cooking", date: "", description: "Eu sempre gostei de cozinhar, amor, mas com você tudo ganha um significado ainda mais especial. Ao seu lado, tenho vontade de descobrir novas receitas, experimentar novos sabores e preparar algo gostoso, seja na sua companhia ou especialmente para você. O que antes já era algo que eu amava fazer, hoje se tornou ainda melhor, porque cada momento na cozinha se transforma em um momento nosso. Entre uma receita e outra, planejamos o nosso futuro, conversamos sobre tudo o que aconteceu na semana e compartilhamos nossos sonhos." },
    { id: 3, image: "img/photo-04.jpeg", title: "Fitness", date: "", description: "Seja fazendo exercícios juntas ou aproveitando a preguiça de um domingo em casa, cada momento ao seu lado tem mais qualidade, intensidade e significado. Você transforma até os instantes mais simples em lembranças especiais. Admiro a forma como você me motiva e me apoia em todas as minhas decisões, objetivos e sonhos. Principalmente quando se trata da minha saúde e do meu bem-estar, você está sempre presente, me incentivando a ser a minha melhor versão. Obrigada por cuidar tão bem de mim, por preservar e construir esses momentos tão preciosos ao meu lado. São nesses gestos que percebo o quanto sou feliz por ter você na minha vida." },
    { id: 4, image: "img/photo-03.jpeg", title: "Saidinhas", date: "", description: "Toda saída com você, independentemente do lugar, se torna incrível. Só de estar na sua companhia, tudo já ganha mais cor, mais graça e mais significado. Estar ao seu lado é uma das minhas sensações favoritas. Eu amo a sua presença, o seu toque, a sua risada e a forma como você torna qualquer momento especial sem nem perceber. Amo as nossas comilanças, os passeios sem rumo e até mesmo as fofocas no meio do filme, quando começamos a criticar os personagens ou tentar adivinhar o final antes que ele aconteça. Porque tudo fica melhor quando é compartilhado com você. Cada conversa, cada risada e cada momento ao seu lado se transformam em lembranças que guardo com muito carinho." }
);

// ===== NOSSAS MEMÓRIAS (fotos 5 a 10) =====
const memoryPhotos = [
    { id: 5, image: "img/photo-05.jpeg", title: "PRIMEIRA VEZ", date: "", description: "Uma das primeiras vezes em que você veio aqui em casa ficou muito marcada para mim. Eu lembro que estava bastante nervosa e não sabia muito bem o que fazer ou falar. Mas, com o seu jeito, você fez tudo parecer mais leve e natural. Foi naquele momento que as coisas começaram a se tornar reais para mim. Em meio aos medos e às incertezas que eu tinha, comecei a enxergar um futuro ao seu lado. E acho que o que mais me tranquilizava era saber que, no meio de tudo isso, eu tinha você." },
    { id: 6, image: "img/photo-06.jpeg", title: "ARRAIA", date: "", description: "Pela primeira vez, você veio a uma festa de família aqui em casa. Talvez nós duas ainda não entendêssemos muito bem, mas aquele foi um grande passo para nós como casal. Esse dia foi muito divertido, e ver como minha família te acolheu aqueceu o meu coração. Em meio a tantos desafios que ainda enfrentamos, cada pequeno passo que damos tem um significado enorme para mim. Ter você ao meu lado, disposta a lutar pelo nosso amor, me faz perceber o quanto sou sortuda por ter encontrado alguém como você. Obrigada por toda a sua paciência, cumplicidade e por permanecer firme ao meu lado, mesmo diante das dificuldades que vivenciamos diariamente. Você faz com que cada desafio pareça mais leve e cada conquista muito mais especial." },
    { id: 7, image: "img/photo-07.jpeg", title: "NIGHT", date: "", description: "Essa é a primeira noite que temos registrada, e pelo meu olhar dá para perceber o quanto eu estava feliz. Pela primeira vez, eu não sentia medo de te acordar com a minha respiração, nem passava a noite inteira nervosa só por você estar na mesma cama que eu. Desde então, passei a esperar ansiosamente pela semana para ter mais algumas noites ao seu lado. Você me aquece, eu roubo a sua coberta, e esses pequenos momentos se tornaram alguns dos meus favoritos. As melhores noites são aquelas que passo com você. Ao seu lado me sinto segura, confortável e em paz. Você se tornou o meu lar, o lugar onde consigo descansar sem preocupações, sabendo que estou abraçada em você e cercada pelo seu carinho." },
    { id: 8, image: "img/photo-08.jpeg", title: "SENAI", date: "", description: "Eu odiava ir para o SENAI. Te ver e não poder te ter por perto do jeito que eu queria, ouvir você falar das suas coisas e te ver ao lado das meninas, rindo e se divertindo, mexia muito comigo e me deixava confusa sobre tudo o que eu sentia. Com o tempo, porém, isso foi ficando mais leve. E depois que voltamos, os dias de SENAI passaram a ser os que eu mais esperava. Eu ficava ansiosa para te ver, conversar com você e compartilhar aqueles pequenos momentos que faziam toda a diferença. Enfrentar o transporte público ao seu lado, dormir no seu ombro durante o caminho e simplesmente estar com você se tornaram alguns dos meus momentos favoritos. Eram essas coisas simples que faziam eu esquecer o cansaço e tudo o que tinha acontecido nos outros dias." },
    { id: 9, image: "img/photo-09.jpeg", title: "TREININ", date: "", description: "Pela primeira vez treinamos juntas e, para ser sincera, conversamos mais do que treinamos. Mas passar esse tempo ao seu lado, fazendo algo que nós duas gostamos, tornou aquele momento muito especial para mim. Senti uma sensação de dever cumprido, comigo mesma, com você e com nós duas. Por mais que seja apenas a musculação, ela representa muito para a forma como nos enxergamos e para os objetivos que buscamos alcançar. Ter você ao meu lado nesse processo, me apoiando e incentivando porque sabe o quanto isso é importante para mim, fez toda a diferença. Foi um momento simples, mas muito significativo, e que guardo com muito carinho. Espero que possamos viver muitos outros momentos assim, sempre apoiando uma à outra em nossos sonhos e objetivos, sejam eles compartilhados ou individuais. Afinal, saber que tenho você torcendo por mim faz qualquer desafio parecer mais leve." },
    { id: 10, image: "img/photo-10.jpeg", title: "LEGENDS", date: "", description: "Ter você ao meu lado torna tudo mais leve e melhor. Com você, me sinto amada, acolhida e digna do amor que compartilhamos. Não precisar me esconder, não ser um segredo, poder olhar para o lado e encontrar você ali, e ter a liberdade de mostrar ao mundo que sou sua, é algo que tem um significado enorme para mim. Eu sei que tudo isso ainda é muito novo para nós e que temos muitas coisas para aprender, melhorar e amadurecer juntas. Mas, quando olho para tudo o que construímos até aqui, sinto um orgulho imenso da nossa história. Prometo continuar me esforçando para ser uma pessoa melhor para você, para mim e para nós. Você é o meu lugar seguro, a minha paz nos dias difíceis e a pessoa que faz meu coração se sentir em casa. E, de alguma forma, nunca imaginei que poderia pertencer a alguém que não fosse você. Obrigada por ter voltado para a minha vida, por me aceitar como sou e por nos dar uma nova chance. Nada do que construímos, da intensidade que vivemos e do amor que compartilhamos seria possível sem você." }
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
            <div class="memory-caption">
                <h3 class="memory-caption-title" data-photo-id="${mem.id}">${savedTitle}</h3>
                <p class="memory-caption-text memory-phrase" data-photo-id="${mem.id}">${savedPhrase}</p>
            </div>
        `;

        card.addEventListener('click', () => {
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
        const savedPhrase = localStorage.getItem(photoPhrasesKey(photo.id)) || photo.description || '';
        const savedTitle = localStorage.getItem(photoTitleKey(photo.id)) || photo.title;

        item.innerHTML = `
            <div class="gallery-image">
                <img src="${photo.image}" alt="${savedTitle}">
                <div class="gallery-overlay">
                    <div class="gallery-overlay-content">
                        <p class="gallery-overlay-title" data-photo-id="${photo.id}">${savedTitle}</p>
                        <div class="gallery-overlay-icon">→</div>
                    </div>
                </div>
            </div>
            <div class="gallery-caption">
                <h3 class="gallery-caption-title" data-photo-id="${photo.id}">${savedTitle}</h3>
                <p class="gallery-caption-text gallery-phrase" data-photo-id="${photo.id}">${savedPhrase}</p>
            </div>
        `;
        
        item.addEventListener('click', () => {
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
        const titlePreviews = document.querySelectorAll(
            `.gallery-overlay-title[data-photo-id="${photo.id}"], .gallery-caption-title[data-photo-id="${photo.id}"], .memory-caption-title[data-photo-id="${photo.id}"]`
        );
        titlePreviews.forEach((element) => {
            element.textContent = val;
        });
    };
    modalDate.textContent = photo.date ? `📅 ${photo.date}` : '';

    // carregar frase salva e permitir edição inline
    const saved = localStorage.getItem(photoPhrasesKey(photo.id)) || photo.description || 'Clique aqui para adicionar uma frase...';
    modalDescription.textContent = saved;
    modalDescription.contentEditable = true;
    modalDescription.dataset.photoId = photo.id;
    modalDescription.focus();

    // salvar ao perder o foco
    modalDescription.onblur = () => {
        const value = modalDescription.textContent.trim();
        localStorage.setItem(photoPhrasesKey(photo.id), value);
        const phrasePreviews = document.querySelectorAll(
            `.gallery-phrase[data-photo-id="${photo.id}"], .memory-phrase[data-photo-id="${photo.id}"]`
        );
        phrasePreviews.forEach((element) => {
            element.textContent = value;
        });
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
    // Valores fixos solicitados
    const labelText = 'O tempo não mede o nosso amor; ele apenas registra há quanto tempo tenho a sorte de amar você.';
    const daysValue = '-254';
    const hoursValue = '-6.096';
    const minutesValue = '-365.760';
    const secondsValue = '-21.945.600';

    const labelEl = document.getElementById('countdownLabel');
    if (labelEl) labelEl.textContent = labelText;
    const daysEl = document.getElementById('countdownDays');
    const hoursEl = document.getElementById('countdownHours');
    const minutesEl = document.getElementById('countdownMinutes');
    const secondsEl = document.getElementById('countdownSeconds');
    if (daysEl) daysEl.textContent = daysValue;
    if (hoursEl) hoursEl.textContent = hoursValue;
    if (minutesEl) minutesEl.textContent = minutesValue;
    if (secondsEl) secondsEl.textContent = secondsValue;
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
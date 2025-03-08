
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let users = [{
    "userId": "1",
    "username": "Escamilla",
    "email": "angel@gmail.com",
    "password": "123",
    "role": "artist",
    "likedSongs": []
},{
    "userId": "2",
    "username": "Escamilla2",
    "email": "angel2@gmail.com",
    "password": "567",
    "role": "listener",
    "likedSongs": []
}
];
let albums = [{
    "albumId": "1",
    "title":"Album",
    "description":"Un album",
    "coverImage":"img.png",
    "releaseDate":"01/01/2001",
    "artistId":"1",
    "songs": []
}];
let songs = [            {
    "songId": "1",
    "title": "Cancion",
    "duration": "180",
    "audioFile": "audio.mp3",
    "albumId": "1"
}];
let playlists = [
    {
        "playlistId": "1",
        "name": "Playlist1",
        "description": "Una playlist",
        "userId": "2",
        "songs": ["1"]
    }
];

let playqueue = [];

app.get('/', (req, res) => {
    res.send('Holamundo!');
});

//SIGNUP
app.post('/auth/signup', (req, res) => {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
        return res.status(400).send('Faltan datos');
    }

    const user = {
        userId: `${users.length + 1}`,
        username,
        email,
        password,
        role,
        likedSongs: []
    };
    users.push(user);

    res.status(201).send({
        message: 'Usuario registrado',
        userId: user.userId,
        role
    });
});

// Get users
app.get('/users', (req, res) => {
    const userList = [];
    
    users.forEach(user => {
        userList.push({
            userId: user.userId,
            username: user.username,
            email: user.email,
            role: user.role,
            likedSongs: user.likedSongs
        });
    });

    res.status(200).send(userList);
});

// Login
app.post('/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send('Faltan datos.');
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).send('Correo o contraseña incorrectos.');
    }

    res.status(200).send({
        message: 'Inicio de sesion correcto',
        userId: user.userId,
        role: user.role
    });
});

// Create Album
app.post('/albums', (req, res) => {
    const { title, description, coverImage, releaseDate, artistId } = req.body;
    if (!title || !description || !coverImage || !releaseDate || !artistId) {
        return res.status(400).send('Faltan datos.');
    }

    const album = {
        albumId: `${albums.length + 1}`,
        title,
        description,
        coverImage,
        releaseDate,
        artistId,
        songs: []
    };
    albums.push(album);

    res.status(201).send({
        message: 'Album creado',
        albumId: album.albumId
    });
});

//Get albums

app.get('/albums', (req, res) => {
    const albumList = [];

    albums.forEach(album => {
        const albumSongs = songs.filter(song => song.albumId === album.albumId);

        albumList.push({
            albumId: album.albumId,
            title: album.title,
            description: album.description,
            coverImage: album.coverImage,
            releaseDate: album.releaseDate,
            artistId: album.artistId,
            songs: albumSongs
        });
    });

    res.status(200).send(albumList);
});

// Create Song
app.post('/albums/:albumId/songs', (req, res) => {
    const { albumId } = req.params;
    const { title, duration, audioFile } = req.body;
    if (!title || !duration || !audioFile) {
        return res.status(400).send('Faltan datos.');
    }

    const song = {
        songId: `${songs.length + 1}`,
        title,
        duration,
        audioFile,
        albumId
    };
    songs.push(song);

    const album = albums.find(a => a.albumId === albumId);
    if (album) {
        album.songs.push(song);
    }

    res.status(201).send({
        message: `Canción añadida a ${albumId}`,
        songId: song.songId
    });
});

//Get All Songs
app.get('/songs', (req, res) => {
    const songList = [];

    songs.forEach(song => {
        songList.push({
            songId: song.songId,
            title: song.title,
            duration: song.duration,
            audioFile: song.audioFile,
            albumId: song.albumId
        })
    })
    res.status(200).send(songList);
});

// Get 1 Song
app.get('/songs/:songId', (req, res) => {
    const { songId } = req.params;
    const song = songs.find(s => s.songId === songId);
    
    if (!song) {
        return res.status(404).send('Canción no encontrada.');
    }
    
    playqueue.length = 0;
    playqueue.push(songId);

    res.status(200).send(song);
});


//Add song to queue
app.get('/queue/:songId', (req, res) => {
    const { songId } = req.params;
    const song = songs.find(s => s.songId === songId);
    
    if (!song) {
        return res.status(404).send('Canción no encontrada.');
    }
    
    playqueue.push(songId);

    res.status(200).send(song);
});

//Get play queue
app.get('/queue', (req, res) => {
    // Map songIds in playlistQueue to their full details from the songs array
    const detailedQueue = playqueue.map(songId => songs.find(s => s.songId === songId)).filter(Boolean);
    
    res.status(200).send(detailedQueue);
});

// Create Playlist
app.post('/playlists', (req, res) => {
    const { name, description, userId } = req.body;
    if (!name || !description || !userId) {
        return res.status(400).send('Faltan datos.');
    }

    const playlist = {
        playlistId: `${playlists.length + 1}`,
        name,
        description,
        userId,
        songs: []
    };
    playlists.push(playlist);

    res.status(201).send({
        message: 'Playlist creada.',
        playlistId: playlist.playlistId
    });
});

// Get Playlists
app.get('/playlists', (req, res) => {
    const detailedPlaylists = playlists.map(playlist => {
        const detailedSongs = playlist.songs.map(songId => 
            songs.find(song => song.songId === songId)
        );

        return {
            ...playlist,
            songs: detailedSongs
        };
    });

    res.status(200).send(detailedPlaylists);
});


//Add song to playlist
app.post('/playlists/songs', (req, res) => {
    const { playlistId, songId } = req.body;
    if (!playlistId || !songId) {
        return res.status(400).send('Faltan datos.');
    }

    const playlist = playlists.find(p => p.playlistId === playlistId);
    const song = songs.find(s => s.songId === songId);

    if (!playlist) return res.status(404).send('Playlist no encontrada.');
    if (!song) return res.status(404).send('Canción no encontrada.');

    playlist.songs.push(songId);

    res.status(200).send({
        message: 'Canción añadida a la playlist'
    });
});

// Add Song to Liked Playlist
app.post('/playlists/liked/songs', (req, res) => {
    const { userId, songId } = req.body;
    if (!userId || !songId) {
        return res.status(400).send('Faltan datos.');
    }

    const user = users.find(u => u.userId === userId);
    const song = songs.find(s => s.songId === songId);

    if (!user) return res.status(404).send('Usuario no encontrado.');
    if (!song) return res.status(404).send('Canción no encontrada.');

    user.likedSongs.push(songId);

    res.status(200).send({
        message: 'Canción añadida a canciones que te gustan'
    });
});


// Search
app.get('/search', (req, res) => {
    const query = req.query.query?.toLowerCase();
    if (!query) {
        return res.status(400).send('Faltan datos.');
    }

    const foundSongs = songs.filter(s => s.title.toLowerCase().includes(query));
    const foundAlbums = albums.filter(a => a.title.toLowerCase().includes(query));
    const foundArtists = users.filter(u => u.role === 'artist' && u.username.toLowerCase().includes(query));

    res.status(200).send({
        songs: foundSongs,
        albums: foundAlbums,
        artists: foundArtists
    });
});


// Start the server
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

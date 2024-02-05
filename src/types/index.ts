interface ISongs {
    "success": boolean,
"message": string,
"song": []
}

interface Song {
    "_id": string,
"title": string,
"artist": string,
"album": string,
"genre": string,
"createdAt": string,
"updatedAt": string
}

interface SongState {
    "songs" : Song[],
    "isLoading": boolean,
    "error": string
}

interface IState {
    songs: SongState
}
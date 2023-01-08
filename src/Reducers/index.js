import {combineReducers}  from  'redux';

const songReducer = () => {
    return (
        [
            {title:'Kesariya', duration:'4:8'},
            {title:'Teri Galliyon Se', duration:'3:05'},
            {title:'Tera Fitoor',duration:"5:10"},
            {title:'Tujh me rab dikhta hai',duration:"3:07"}
        ]
    )
}

const selectedSongReducers = (SelectedSong=null, action) => {
    console.log("test")
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return SelectedSong;
}

export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongReducers,
})
import { Box, Button, Divider, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import selectSong from "../Actions";

class SongList extends React.Component {
  render() {
    console.log("printing props",this.props);
    const RenderSongList = this.props.songs.map((song) => {
      return (
           <Box key={song.title} m={2}>
          <ListItem button disablePadding>
            <ListItemText primary={song.title} />
            <Button onClick={()=>this.props.selectSong(song)} sx={{marginLeft:"16px"}} variant="contained">Select</Button>
          </ListItem>
          <Divider />
          </Box>
      );
    });
    return <Box flex={1} p={2}>{RenderSongList}</Box>;
  }
}

const mapStateToProps = (state) => {
   console.log("printing state",state) 
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);

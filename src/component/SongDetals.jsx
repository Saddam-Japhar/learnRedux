import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import {connect} from 'react-redux'


class SongDetails extends React.Component{
    
    render(){
      if(!this.props.song){
        return (
            <Box flex={2} p={2}>Select Song</Box>
        )
      }
    return (
        <Box flex={2} p={2}>
        <Box sx={{justifyContent:"center", alignItems:'center'}} >  
        <Typography>Details of Song</Typography>
        <Divider />
          <Typography sx={{marginTop:"8px"}} component="h4" variant="h5">{this.props.song.title}</Typography>
          <Typography sx={{marginTop:"8px"}} component="h4" variant="span"> Duration: {this.props.song.duration}</Typography>
        
        
        </Box>  
        </Box>
    )
    }
}
const mapStateToProps = (state) => {
    return {
        song:state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails);
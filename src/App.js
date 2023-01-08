
import SongList from "./component/SongList";
import SongDetails  from "./component/SongDetals";
import { Stack } from "@mui/system";
import { Box, Divider } from "@mui/material";

function App() {
  return (
    <Box>
    <Stack direction='row' spacing={2} justifyContent='space-between'>
    <SongList/>
    <SongDetails/>
    </Stack>
    </Box>
  );
}

export default App;

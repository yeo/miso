import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import {
  Avatar,
  Button, ButtonGroup,
   Card, CardMedia, CardContent, CardActionArea, CardActions,
} from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import AvatarImg from '../assets/avatar-v.png';

export default function Home() {
  return (
    <div>
      <Box
        sx={{
          mx: 'auto',
          color: '#fff',
          p: 1,
          m: 1,
          borderRadius: 1,
          textAlign: 'center',
        }}>
        <Avatar sx={{
          mx: 'auto',
          width: 100,
          height: 100, }}
          alt="Cindy Baker" src={AvatarImg} />
      </Box>

      <Card sx={{ maxWidth: 500, mx: 'auto' }}>
        <CardActionArea>
          {/*<CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />*/}

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bánh Mì Trứng
            </Typography>
            <Divider />

            <Box sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Ethereum" secondary="0x0f154a27FB9136fb17c3cf4874B8a130D2f554f7" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Polygon" secondary="0x0f154a27fb9136fb17c3cf4874b8a130d2f554f7" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary="v@miso.is" />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText primary="Website" secondary="miso.is"></ListItemText>
                </ListItem>
              </List>
            </Box>

            <Box sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}>
              <p>
                dig v @miso.is txt
              </p>
            </Box>

          </CardContent>
        </CardActionArea>

        <CardActions>
          <ButtonGroup sx={{mx: 'auto'}} variant="outlined" aria-label="outlined button group">
            <Button size="small" color="primary">
              Buy me a coffee
            </Button>

            <Button size="small" color="primary">
              Share secret
            </Button>

            <Button size="small" color="primary">
              Request signature
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </div>
  );
}

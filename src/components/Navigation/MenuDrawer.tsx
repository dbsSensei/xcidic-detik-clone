import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Grid, Typography } from '@material-ui/core';

const MenuDrawer = ():any => {
  return (
    <div>
      <Typography
        style={{
          fontWeight: 'bold',
          paddingTop: 20,
          paddingLeft: 20,
          fontSize: 18,
        }}
      >
        Kategory Berita
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <List>
            {['News', 'Teknologi', 'Sport', 'Otomotif'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon style={{ color: 'Green' }} />
                  ) : (
                    <MailIcon style={{ color: 'Blue' }} />
                  )}
                </ListItemIcon>
                <ListItemText secondary={text} />
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={6}>
          <List>
            {['Food', 'Wolipop', '20Detik', 'Finance'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon style={{ color: 'purple' }} />
                  ) : (
                    <MailIcon style={{ color: 'Red' }} />
                  )}
                </ListItemIcon>
                <ListItemText secondary={text} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Divider />

      <Typography
        style={{
          fontWeight: 'bold',
          paddingLeft: 20,
          paddingTop: 20,
          fontSize: 18,
        }}
      >
        Layanan
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <List>
            {['Pasang Mata', 'Forum', 'detikPoint', 'Ads Smart'].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <InboxIcon style={{ color: 'salmon' }} />
                    ) : (
                      <MailIcon style={{ color: 'orange' }} />
                    )}
                  </ListItemIcon>
                  <ListItemText secondary={text} />
                </ListItem>
              ),
            )}
          </List>
        </Grid>

        <Grid item xs={6}>
          <List>
            {['detikEvent', 'Trans Snow', 'Trans Cibubur', 'Trans Bali'].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <InboxIcon style={{ color: 'brown' }} />
                    ) : (
                      <MailIcon style={{ color: 'chocolate' }} />
                    )}
                  </ListItemIcon>
                  <ListItemText secondary={text} />
                </ListItem>
              ),
            )}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default MenuDrawer;

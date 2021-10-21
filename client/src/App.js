import './App.css';
import { Avatar, Button, Divider, FormControl, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles({
  form: {
    alignItems: 'center',
    display: "flex",
    position: "relative",
    top: 50,

  },
  input: {
    width: 500
  }




})
function App() {

  const classes = useStyles();
  return (
    <div className={classes.App}>
      <FormControl className={classes.form}>

        <TextField
          className={classes.input}
          required
          variant="outlined"
          id="title"
          label="Title"

        />
        <br />
        <TextField
          className={classes.input}
          variant="outlined"
          required
          id="details"
          label="Details"


        />
        <br />
        <TextField
          className={classes.input}
          variant="outlined"
          type="date"
          id="details"


        />
        <br />

        <Button variant="contained" color="primary">Submit</Button>
      

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem  alignItems="flex-start">
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </>
          }
        />
      </ListItem>
    </List>
    </FormControl>


    </div>
  );
}

export default App;

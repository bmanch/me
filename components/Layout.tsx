import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DownloadIcon from '@material-ui/icons/GetAppRounded';

// Internal
import { Routes } from '../lib/routes';
import InternalButtonLink from './InternalButtonLink';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    }
  })
);

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Avatar alt='Bmanch' src='/public/logo.png' />
          <Typography variant='h6' className={classes.title}>Brian Manchester</Typography>
          <InternalButtonLink
            href={Routes.HOME}
            text='Home'
            variant='text'
          />
          <InternalButtonLink
            href={Routes.ABOUT}
            text='About'
            variant='text'
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
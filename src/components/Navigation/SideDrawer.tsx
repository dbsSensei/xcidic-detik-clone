import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      width: 400,
    },
    fullList: {
      width: 'auto',
    },
    drawer: {
      width: 400,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 400,
      //   marginTop: 73,   // nurunin drawernya
      zIndex: 0,
    },
  }),
);

type Anchor = 'top' | 'left' | 'bottom' | 'right';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function SideDrawer({ children }: any):any {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="ppresentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MenuDrawer />
    </div>
  );

  return (
    <React.Fragment key={'left'}>
      <Button onClick={toggleDrawer('left', true)}>{children}</Button>
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {list('left')}
      </Drawer>
    </React.Fragment>
  );
}

// import { Container, makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import React from 'react';
import Main from './Main';
import Sidebar from './Sidebar';

// const useStyles = makeStyles(() => ({
//   mainGrid: {
//     marginRight: 50,
//     marginLeft: 50,
//     clear: 'left',
//   },
// }));

export default function Content():any {
  // const classes = useStyles();
  return (
    <Container>
      <div
        style={{
          width: 1010,
          height: 'auto',
          //   backgroundColor: 'red',
          marginLeft: 110,
          //   marginRight: 110,
        }}
      >
        <div
          style={{
            width: '70%',
            height: 1500,
            // backgroundColor: 'lightblue',
            float: 'left',
            borderWidth: 2,
            // borderStyle: 'solid',
            // borderColor: 'black',
          }}
        >
          <Main />
        </div>
        <div
          style={{
            width: '29%',
            height: 1500,
            // backgroundColor: 'salmon',
            float: 'right',
            // borderWidth: 2,
            // borderStyle: 'solid',
            // borderColor: 'black',
          }}
        >
          <Sidebar />
        </div>
      </div>
    </Container>
  );
}

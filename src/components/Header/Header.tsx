import { Container, makeStyles, createStyles } from '@material-ui/core';
import detikImage from '../../assets/images/detik-logo.jpg';
import ads from '../../assets/images/ads.png';
import Ads from '../Ads/Ads';

const useStyles = makeStyles(() =>
  // ========= STYLING AREA ========== //
  createStyles({
    wrapperDetikImage: {
      display: 'flex',
      flexDirection: 'row',
      // justifyContent: 'space-between',
      margin: '80px auto 10px auto',
      width: 1046,
    },
    wrapperAds: {
      width: '60%',
      height: 100,
      paddingLeft: '30px',
      // backgroundColor: 'salmon',
    },
    listNavTop: {
      display: 'flex',
      justifyContent: 'center',
      padding: '5px',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 6,
      width: '1000px',
      background:
        'linear-gradient(to right, navy , navy, navy, navy, navy, lightBlue)',
    },
    listTextTop: {
      textDecoration: 'none',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 14,
      display: 'inline-block',
      '&:hover': {
        color: 'orange',
        transition: '.4s',
      },
    },
    listNavBottom: {
      display: 'flex',
      justifyContent: 'center',
      padding: '5px',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 6,
      width: '1000px',
      backgroundColor: '	 #e6f2ff',
    },
    listTextBottom: {
      textDecoration: 'none',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 14,
      display: 'inline-block',
      '&:hover': {
        color: 'blue',
        transition: '.4s',
      },
    },
  }),
);
// ========= LAST STYLING AREA ========== //

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Header = ({ data }: any):any => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div></div>
      <div className={classes.wrapperDetikImage}>
        <img src={detikImage} alt="detikcom" style={{ width: 265 }} />
        <div className={classes.wrapperAds}>
          <img src={ads} alt="ads" />
        </div>
      </div>
      {/* ========== LIST TOP ========== */}
      <div className={classes.listNavTop}>
        {data.listNavTop.map((list: any) => {
          return (
            <ul
              key={Math.random()}
              style={{ display: 'inline-block', paddingLeft: 20 }}
            >
              <li style={{ listStyle: 'none' }}>
                <a href="#" className={classes.listTextTop}>
                  {list.nameList}
                </a>
              </li>
            </ul>
          );
        })}
      </div>
      {/* ========== LAST LIST TOP ========== */}

      {/* ========== LIST BOTTOM ========== */}
      <div className={classes.listNavBottom}>
        {data.listNavBottom.map((list: any) => {
          return (
            <ul
              key={Math.random()}
              style={{ display: 'inline-block', paddingLeft: 20 }}
            >
              <li style={{ listStyle: 'none' }}>
                <a href="#" className={classes.listTextBottom}>
                  {list.nameList}
                </a>
              </li>
            </ul>
          );
        })}
      </div>
      <Ads />
      {/* ========== LAST LIST BOTTOM ========== */}

      <div
        style={{
          marginLeft: 100,
          marginRight: 100,
          padding: 8,
          width: 190,
          height: 190,
          display: 'flex',
          flexDirection: 'row',
          paddingBottom: 40,
        }}
      >
        {data.newNews.map((news: any) => {
          return (
            <div
              key={Math.random()}
              style={{
                display: 'inline-block',
                padding: 8,
                width: 190,
                height: 190,
              }}
            >
              <div className="card-featured">
                <img
                  src={news.imageUrl}
                  alt={news.name}
                  style={{
                    height: 130,
                    width: 190,
                    borderRadius: 4,
                  }}
                />
              </div>
              <p style={{ fontSize: 14, fontWeight: 'bold' }}>{news.title}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Header;

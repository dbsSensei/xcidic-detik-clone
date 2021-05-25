// import { Container, Grid, Divider } from '@material-ui/core';
import { Container, Grid} from '@material-ui/core';
import detikImage from '../../assets/images/detik-logo.jpg';

const Footer = ():any => {
  return (
    <Container>
      <Grid
        container
        style={{
          width: 1010,
          height: 300,
          //   backgroundColor: 'lightGray',
          marginLeft: 110,
          //   marginRight: 110,
          //   borderWidth: 2,
          //   borderStyle: 'solid',
          //   borderColor: 'black',
          clear: 'left',
        }}
      >
        <div
          style={{ backgroundColor: 'dodgerBlue', height: 8, width: '100%' }}
        />
        <div style={{ marginTop: 70 }}>
          <img src={detikImage} alt="detikcom" style={{ width: 230 }} />
          <p style={{ marginLeft: 10, color: 'gray' }}>
            Copyright @ 2021 detikcom.{' '}
          </p>
          <p style={{ marginLeft: 50, color: 'gray' }}>All right reserved</p>
        </div>
        <Grid xs={3}>
          <h2 style={{ marginLeft: 40 }}>Kategori</h2>
          <div>
            <ul>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  News
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Edukasi
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Finance
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Teknologi
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Entertaiment
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Sport
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Sepakbola
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Otomotif
                </a>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid xs={3}>
          <h2 style={{ marginLeft: 40 }}>Layanan</h2>
          <div>
            <ul>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Pasang Mata
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Adsmart
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Forum
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  detikEvent
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  detikPoint
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  DetikX
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Trans Studio
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Trans Snow
                </a>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid xs={3}>
          <h2 style={{ marginLeft: 40 }}>Informasi</h2>
          <div>
            <ul>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Redaksi
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Pedoman Media
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Karir
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Kotak Pos
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Media Partner
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Info Iklan
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Privasi Policy
                </a>
              </li>
              <li style={{ listStyle: 'none', paddingBottom: 5 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

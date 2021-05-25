import ImageMainContent1 from '../../assets/images/main-content-1.jpg'
import ImageMainContent2 from '../../assets/images/main-content-2.jpg'
import ImageMainContent3 from '../../assets/images/main-content-3.jpg'
import ImageMainContent4 from '../../assets/images/main-content-4.jpg'
import ImageMainYoutube1 from '../../assets/images/main-content-yt1.jpg'
import ImageMainYoutube2 from '../../assets/images/main-content-yt2.jpg'
import ImageMainYoutube3 from '../../assets/images/main-content-yt3.jpg'




import './Content.css';


const Main = ():any => {
  return (
    <div>
      {/* MAIN CONTENT KE 1 */}
      <a>
      <p style={{ color :'#21409A', fontSize: 18, marginLeft: 20, fontWeight: 'bold'  }}>News Feed</p>
      <div style={{marginTop: 100, paddingBottom: 320}}>
        <div style={{float: 'left', width: 300, marginLeft: 20}}>
        <p style={{ color :'#ef672f', fontSize: 12, marginLeft: 10, fontWeight: 'bold'  }}>Foto News</p>
          <p style={{ color :'black', fontSize: 24, marginLeft: 10, fontWeight: 'bold'  }}>Warga Gaza Bangun Tenda di Atas Reruntuhan Bangunan</p>
          <p style={{ color :'gray', fontSize: 12, marginLeft: 10, fontWeight: 'bold'  }}>3 jam yang lalu</p>
        </div>
          <img src={ImageMainContent1} alt="imageMainContent" style={{float: 'right', width: 350, height: 240, borderRadius: 7, marginRight:10}}/>
      </div>
      </a>

      {/* MAIN CONTENT KE 2  */}
      <a style={{marginBottom:50}} >
        <div style={{float: 'left', marginLeft: 20}}>
        <img src={ImageMainContent2} alt="imageMainContent" style={{width: 210 , height: 190, borderRadius: 8}}/>
        </div>
        <div style={{float: 'right', width: 450, paddingBottom: 100}}>
            <p style={{fontSize: 20, color: 'black',marginTop: 60, fontWeight: 550}} >Vaksin AstraZeneca 66% Kurangi Gejala Kesakitan COVID-19 Varian Inggris</p>
        </div>
      </a>

      <a style={{marginBottom:50}} >
        <div style={{float: 'left', marginLeft: 20}}>
        <img src={ImageMainContent3} alt="imageMainContent" style={{width: 210 , height: 190, borderRadius: 8}}/>
        </div>
        <div style={{float: 'right', width: 450, paddingBottom: 100}}>
            <p style={{fontSize: 20, color: 'black',marginTop: 30, fontWeight: 550}} >Kasus Investasi Bodong, Ketua Koperasi 212 Mart Samarinda Diperiksa Polisi</p>
        </div>
      </a>

      <a style={{marginTop: 100,}}>
        <div style={{float: 'left', marginLeft: 20}}>
        <img src={ImageMainContent4} alt="imageMainContent" style={{width: 210 , height: 190, borderRadius: 8}}/>
        </div>
        <div style={{float: 'right', width: 450,}}>
            <p style={{fontSize: 20, color: 'black',marginTop: 20, fontWeight: 550}} >ICW ke Mabes Polri, Minta Kapolri Tarik Firli Bahuri dari KPK</p>
        </div>
      </a>
      <div style={{border: '1px solid #eee', marginTop: 650}} />
 
 {/* Video Component */}
 <div className='main-contet-yt'>
      <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src={ImageMainYoutube1}
          alt=""
        />
        <p className="time">9.12</p>
      </div>
      <p className="title">BREAKING NEWS Detik-detik Penangkapan Sekretaris Umum FPI di Rumahnya</p>
      <p className="desc">4 hari yang lalu</p>
    </div>

    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src={ImageMainYoutube2}
          alt=""
        />
        <p className="time">7.12</p>
      </div>
      <p className="title">KPK: 51 Pegawai KPK Tak Lolos Warnanya Sudah Merah, Tak Mungkin Dibina Lagi!</p>
      <p className="desc">18 jam yang lalu</p>
    </div> 
    
       <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src={ImageMainYoutube3}
          alt=""
        />
        <p className="time">5.43</p>
      </div>
      <p className="title">Breaking News! Detik-detik Ledakan Gereja Katedral Makassar</p>
      <p className="desc">3 hari yang lalu</p>
    </div>
  </div>
    </div>
  );
};

export default Main;

import Image1 from '../../assets/images/content-image-1.jpg';
import Image2 from '../../assets/images/content-image-2.jpg';
import Image3 from '../../assets/images/content-image-3.jpg';




const Sidebar = ():any => {
  return (
    <div>
      <p style={{ textAlign: 'center' }}>Sidebar</p>
      <div style={{borderBottom: '2px solid #eee', paddingBottom: 30}}>
        <img src="https://cdnstatic.detik.com/live/2021/05/cpm_regular/src/210509-tantangan-300x250.jpg" alt="Dummy Iklan" style={{marginLeft: 15,width: 270, height: 230  }}/>
        <img src="https://cdnstatic.detik.com/live/2021/05/cpm_regular/westin-bali/210517-westine-300x250-r2.jpg" alt="Dummy Iklan 2" style={{marginTop: 10, marginLeft: 15, width: 270, height: 230 }} />
      </div>
      <div>
        <img src="https://cdn.detik.net.id/detikcom/images/dym_logo.png?v=5c18ebe5" alt="" style={{width: 200, height : 28, paddingLeft: 10, paddingTop: 6, paddingBottom: 10}}/>
        <div style={{display: 'flex', flexDirection: 'row'}}> 
          <p style={{ fontFamily: 'Montserrat-FF, Arial, Tahoma, sans-serif',
           fontSize: 12, paddingLeft: 4, position: 'static', color: '#666'}}>Bagi Anda yang menemukan masalah <br /> perkotaan, silakan kabarkan ke kami <br /> lewat klik tombol kirim.</p>
        <button style={{height: 25, backgroundColor: '#ef672f', color: '#fff',
         fontWeight: 'bold', border: 'none', borderRadius: 3, marginLeft: 10, marginTop: 10 }} 
         >Kirim →</button>
        </div>
        <a style={{ display: 'flex', flexDirection: 'row', paddingBottom: 10}} >
          <img src={Image1} alt="ImageSideBar" style={{width: 110, height: 90, paddingLeft: 4, borderRadius: 4}}/>
          <p style={{marginTop: -2, fontSize: 15, marginLeft:7 }}>Tidak ada lagi Lubang Di JL Cikaret Motor Hingga Mobil Lancar Melaju 
          <br/>
          <span style={{fontSize: 12 , color: 'gray', paddingTop: 10}}>3 Jam yang Lalu</span> </p>
        </a>
        <a style={{ display: 'flex', flexDirection: 'row', paddingBottom: 10}} >
          <img src={Image2} alt="ImageSideBar" style={{width: 110, height: 90, paddingLeft: 4, borderRadius: 4}}/>
          <p style={{marginTop: -2, fontSize: 15, marginLeft:7 }}>Jl Raya Cikaret yang Sempat Rusak dan Berlubang Kini Telah Diaspal 
          <br/>
          <span style={{fontSize: 12 , color: 'gray', paddingTop: 10}}>5 Jam yang Lalu</span> </p>
        </a>  
              <a style={{ display: 'flex', flexDirection: 'row',paddingBottom: 10}} >
          <img src={Image3} alt="ImageSideBar" style={{width: 110, height: 90, paddingLeft: 4, borderRadius: 4}}/>
          <p style={{marginTop: -2, fontSize: 15, marginLeft:7 }}>Got Halangi Pintu Rumah Warga di Jakbar, Perbaikan Mulai Dilakukan 
          <br/>
          <span style={{fontSize: 12 , color: 'gray', paddingTop: 10}}>6 Jam yang Lalu</span> </p>
        </a>
      <div style={{border: '1px solid #eee'}} />
      <div>
        <div>
        <p style={{fontSize: 18, color: '#21409A', fontWeight: 'bold'}}>Tag Terpopuler</p>
        </div>
        <p style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}><span style={{color: 'gray', fontSize: 18}}>#</span> Ganjar VS Puan</p>
        <p style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}><span style={{color: 'gray', fontSize: 18}}>#</span> Ganip warsito</p>
        <p style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}><span style={{color: 'gray', fontSize: 18}}>#</span> Palestina</p>
        <p style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}><span style={{color: 'gray', fontSize: 18}}>#</span> kebocoran Data</p>
        <p style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}><span style={{color: 'gray', fontSize: 18}}>#</span> KPK</p>


      </div>

      </div>
    </div>
  );
}
export default Sidebar;

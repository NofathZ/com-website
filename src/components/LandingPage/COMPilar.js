import './COMPilar.scss'

function COMPilar() {
  return(
    <div className="container pilar-container">
      <div className="row">
        <div className="col-md header-pilar-left"></div>
        <div className="col-md">
          <center>
            <h1 className="heading-three heading-underline">Nilai Utama</h1>
          </center>
        </div>
        <div className="col-md header-pilar-right"></div>
      </div>
      <div className="row">
        <div className="col-md header-pilar-left">
          <p className="d-none d-md-block lead-three heading-underline">COM</p>
        </div>
        <div className="col-md"></div>
        <div className="col-md header-pilar-right">
          <p className="d-none d-md-block lead-three heading-underline">Individu</p>
        </div>
      </div>

      <div className="col-md d-md-none mt-4"></div>
      <div className="row">
        <div className="col-md d-md-none d-flex justify-content-center align-items-center">
          <div className="pilar-box bg-tangerine-orange-50 lead-two">Kepemimpinan</div>
        </div>
        <div className="col-md d-flex justify-content-end align-items-end">
          <div>
            <p className="d-md-none lead-one" style={{marginBottom:"0", marginTop:"5px"}}>COM</p>
            <p className="pilar-left body-one">Menjadi yang terdepan dalam memberikan solusi terbaik kepada para pemuda/-i di seluruh Indonesia</p>
          </div>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <div className="d-none d-md-block pilar-box bg-tangerine-orange-50 lead-two">Kepemimpinan</div>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <div>
            <p className="d-md-none lead-one" style={{marginBottom:"0", marginTop:"5px"}}>Individu</p>
            <p className="pilar-right body-one">Kemampuan pengambilan keputusan dan bertanggungjawab atas pilihannya, serta menjadi teladan bagi orang di sekitarnya</p>
          </div>
        </div>
      </div>
      
      <div className="col-md d-md-none mt-4"></div>
      <div className="row">
        <div className="col-md d-md-none d-flex justify-content-center align-items-center">
          <div className="pilar-box bg-tangerine-orange-50 lead-two">Profesionalitas</div>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <div>
            <p className="d-md-none lead-one" style={{marginBottom:"0", marginTop:"5px"}}>COM</p>
            <p className="pilar-left body-one">Mengutamakan kepentingan bersama diatas kepentingan pribadi</p>
          </div>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <div className="d-none d-md-block pilar-box bg-tangerine-orange-50 lead-two">Profesionalitas</div>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <div>
            <p className="d-md-none lead-one" style={{marginBottom:"0", marginTop:"5px"}}>Individu</p>
            <p className="pilar-right body-one">Penunjukan rasa hormat dengan rekan atas peran dan bagian tugas yang dimiliki masing-masing</p>
          </div>
        </div>
      </div>
      
      <div className="col-md d-md-none mt-4"></div>
      <div className="row">
        <div className="col-md d-md-none d-flex justify-content-center align-items-center">
          <div className="pilar-box bg-tangerine-orange-50 lead-two">Keseimbangan</div>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center flex-direction-column">
          <div>
            <p className="d-md-none lead-one" style={{marginBottom:"0", marginTop:"5px"}}>COM</p>
            <p className="pilar-left body-one">Mendukung dua badan yang berbeda (perusahaan dan komunitas) secara merata</p>
          </div>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <div className="d-none d-md-block pilar-box bg-tangerine-orange-50 lead-two">Keseimbangan</div>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <div>
            <p className="d-md-none lead-one" style={{marginBottom:"0", marginTop:"5px"}}>Individu</p>
            <p className="pilar-right body-one">Penyesuaian prioritas yang dikembalikan kepada setiap anggota atas keperluannya tanpa meninggalkan komitmen bersama</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default COMPilar
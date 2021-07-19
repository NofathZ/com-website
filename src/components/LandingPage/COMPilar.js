import './COMPilar.scss'

function COMPilar() {
  return(
    <div className="container pilar-container">
      <div className="row">
        <div className="col-md header-pilar-left">
          <p className="d-none d-md-block lead-three heading-underline">COM</p>
        </div>
        <div className="col-md">
          <h1>Pilar</h1>
        </div>
        <div className="col-md header-pilar-right">
          <p className="d-none d-md-block lead-three heading-underline">Individu</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md d-md-none d-flex justify-content-center align-items-center">
          <div className="pilar-box bg-tangerine-orange-50 lead-two">Kepemimpinan</div>
        </div>
        <div className="col-md d-flex justify-content-end align-items-end">
          <p className="pilar-left">Menjadi yang terdepan dalam memberikan solusi terbaik kepada para pemuda/-i di seluruh Indonesia</p>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <div className="d-none d-md-block pilar-box bg-tangerine-orange-50 lead-two">Kepemimpinan</div>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <p className="pilar-right">Kemampuan pengambilan keputusan dan bertanggungjawab atas pilihannya, serta menjadi teladan bagi orang di sekitarnya</p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md d-md-none d-flex justify-content-center align-items-center">
          <div className="pilar-box bg-tangerine-orange-50 lead-two">Profesionalitas</div>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <p className="pilar-left">Mengutamakan kepentingan bersama diatas kepentingan pribadi</p>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <div className="d-none d-md-block pilar-box bg-tangerine-orange-50 lead-two">Profesionalitas</div>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <p className="pilar-right">Penunjukan rasa hormat dengan rekan atas peran dan bagian tugas yang dimiliki masing-masing</p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md d-md-none d-flex justify-content-center align-items-center">
          <div className="pilar-box bg-tangerine-orange-50 lead-two">Keseimbangan</div>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <p className="pilar-left">Mendukung dua badan yang berbeda (perusahaan dan komunitas) secara merata</p>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <div className="d-none d-md-block pilar-box bg-tangerine-orange-50 lead-two">Keseimbangan</div>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <p className="pilar-right">Penyesuaian prioritas yang dikembalikan kepada setiap anggota atas keperluannya tanpa meninggalkan komitmen bersama</p>
        </div>
      </div>
    </div>
  )
}

export default COMPilar
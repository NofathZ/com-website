import './COMVision.scss'

function COMVision() {
  return(
    <div class="container container-vision" data-aos="fade-left">
      <div class="row">
        <div class="col-md d-md-none image-vision-mission">
          <div className="img-vision-box"></div>
        </div>
        <div class="col-md">
          <div className="d-none d-md-block" style={{marginBottom:"16px"}}>
            <h1 className="heading-three heading-underline">Visi</h1>
          </div>
          <div className="d-md-none d-flex justify-content-center align-items-center" style={{marginBottom:"16px"}}>
            <h1 className="heading-three heading-underline">Visi</h1>
          </div>
          <p className="body-one" style={{textAlign: "justify"}}>Menciptakan wadah serta ruang kolaborasi bagi siswa/-i dan mahasiswa/-i aktif di Indonesia untuk memulai atau menambah pengalaman dalam dunia perusahaan dan/atau komunitas.</p>
        </div>
        <div class="col-md d-none d-md-block" >
          <div className="d-flex justify-content-end align-items-start" style={{width:"100%", height: "100%"}}>
            <div className="img-vision-box"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default COMVision
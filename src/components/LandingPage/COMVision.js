import './COMVision.scss'

function COMVision() {
  return(
    <div class="container mt-5" data-aos="fade-up">
      <div class="row">
        <div class="col-md d-md-none image-vision-mission">
          <div className="img-vision-box"></div>
        </div>
        <div class="col-md">
          <div className="d-none d-md-block">
            <h1 className="heading-three heading-underline">Visi</h1>
          </div>
          <div className="d-md-none d-flex justify-content-center align-items-center">
            <h1 className="heading-three heading-underline">Visi</h1>
          </div>
          <p className="body-one">Menciptakan wadah serta ruang kolaborasi bagi siswa/-i dan mahasiswa/-i aktif di Indonesia untuk memulai atau menambah pengalaman dalam dunia perusahaan dan/atau komunitas.</p>
        </div>
        <div class="col-md d-none d-md-block">
          <div className="img-vision-box"></div>
        </div>
      </div>
    </div>
  )
}

export default COMVision
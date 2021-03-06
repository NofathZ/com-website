import './COMVision.scss'

function COMVision() {
  return(
    <div className="container container-vision" data-aos="fade-left">
      <div className="row">
        <div className="col-md d-md-none image-vision-mission">
          <div className="img-vision-box"></div>
        </div>
        <div className="col-md">
          <div className="d-none d-md-block" style={{marginBottom:"16px"}}>
            <h1 className="heading-three heading-underline">Visi</h1>
          </div>
          <div className="d-md-none d-flex justify-content-center align-items-center" style={{marginBottom:"16px"}}>
            <h1 className="heading-three heading-underline" style={{marginTop:"16px"}}>Visi</h1>
          </div>
          <p className="body-one" style={{textAlign: "justify"}}>Memajukan Indonesia melalui ekosistem perusahaan dan komunitas dengan menjunjung transparansi melalui pemuda/-i Indonesia.</p>
        </div>
        <div className="col-md d-none d-md-block" >
          <div className="d-flex justify-content-end align-items-start" style={{width:"100%", height: "100%"}}>
            <div className="img-vision-box"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default COMVision
import { useEffect } from 'react'
import './COMMission.scss'

function COMMission() {
  return(
    <div class="container mt-5" data-aos="fade-up">
      <div class="row">
        <div class="col image-vision-mission">
          <div className="img-mission-box"></div>
        </div>
        <div class="col">
          <div className="d-none d-md-block">
            <h1 className="heading-three heading-underline">Misi</h1>
          </div>
          <div className="d-md-none d-flex justify-content-center align-items-center">
            <h1 className="heading-three heading-underline">Misi</h1>
          </div>
          <ul class="list-group list-group-flush d-none d-md-block list-mission">
            <li className="body-one">Mendirikan perusahaan serta komunitas berbasis teknologi dan kultur yang berpusat di berbagai kota besar di Indonesia sebagai media belajar dan berkembang</li>
            <li className="body-one">Mendorong dan mendukung pemuda/-i Indonesia untuk mencapai kemandirian dan kebebasan finansial serta sosial di usia dini dengan tetap memprioritaskan pendidikan sebagai kebutuhan dasar dan kewajiban yang harus dipenuhi</li>
            <li className="body-one">Berpartisipasi dalam memajukan Indonesia melalui karya/produk dan tindakan nyata oleh internal maupun eksternal</li>
          </ul>
          <ul class="list-group list-group-flush d-md-none list-mission-md">
            <li className="body-one">Mendirikan perusahaan serta komunitas berbasis teknologi dan kultur yang berpusat di berbagai kota besar di Indonesia sebagai media belajar dan berkembang</li>
            <li className="body-one">Mendorong dan mendukung pemuda/-i Indonesia untuk mencapai kemandirian dan kebebasan finansial serta sosial di usia dini dengan tetap memprioritaskan pendidikan sebagai kebutuhan dasar dan kewajiban yang harus dipenuhi</li>
            <li className="body-one">Berpartisipasi dalam memajukan Indonesia melalui karya/produk dan tindakan nyata oleh internal maupun eksternal</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default COMMission
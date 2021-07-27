import CoreCard from '../templates/CoreCard'
import './CoreValues.scss'

function CoreValues() {
  return(
    <div className="container vision-mission-container" style={{marginBottom:"70px"}}>
      <div className="row">
        <div className="col d-flex justify-content-center" style={{marginBottom:"30px"}}>
          <CoreCard
            title="Kepemimpinan"
            content="Secara proaktif mengelola perubahan untuk mempertimbangkan dan membuat keputusan terbaik serta dapat menyatakan nya secara tegas."
            bgcolor="bg-tangerine-orange-20"
          />
        </div>
        <div className="col d-flex justify-content-center" style={{marginBottom:"30px"}}>
          <CoreCard
            title="Profesionalitas"
            content="Memenuhi hak dan kewajiban tiap peran yang diampu secara kompeten dan komitmen."
            bgcolor="bg-tangerine-orange-20"
          />
        </div>
        <div className="col d-flex justify-content-center" style={{marginBottom:"30px"}}>
          <CoreCard
            title="Keseimbangan"
            content="Menggunakan sumber daya yang dimiliki dalam proporsi yang sesuai serta mengetahui dan menyampaikan batasan diri secara terbuka."
            bgcolor="bg-tangerine-orange-20"
          />
        </div>
      </div>
    </div>
  )
}

export default CoreValues
import CoreCard from '../templates/CoreCard'
import './CoreValues.scss'
import Edera1 from '../../asset/img/Company/Edera1.png'
import Edera2 from '../../asset/img/Company/Edera2.png'
import Edera3 from '../../asset/img/Company/Edera3.png'

function CoreValues() {
  return(
    <div className="container vision-mission-container" style={{marginBottom:"70px"}}>
      <div className="row">
        <div className="col d-flex justify-content-center" style={{marginBottom:"30px"}} data-aos="fade-up">
          <CoreCard
            title="Kepemimpinan"
            content="Secara proaktif mengelola perubahan untuk mempertimbangkan dan membuat keputusan terbaik serta dapat menyatakan nya secara tegas."
            bgcolor="bg-tangerine-orange-20"
            source={Edera1}
          />
        </div>
        <div className="col d-flex justify-content-center" style={{marginBottom:"30px"}} data-aos="fade-up">
          <CoreCard
            title="Profesionalitas"
            content="Memenuhi hak dan kewajiban tiap peran yang diampu secara kompeten dan komitmen."
            bgcolor="bg-tangerine-orange-20"
            source={Edera2}
          />
        </div>
        <div className="col d-flex justify-content-center" style={{marginBottom:"30px"}} data-aos="fade-up">
          <CoreCard
            title="Keseimbangan"
            content="Menggunakan sumber daya yang dimiliki dalam proporsi yang sesuai serta mengetahui dan menyampaikan batasan diri secara terbuka."
            bgcolor="bg-tangerine-orange-20"
            source={Edera3}
          />
        </div>
      </div>
    </div>
  )
}

export default CoreValues
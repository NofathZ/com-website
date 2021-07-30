import CoreCard from '../templates/CoreCard'
import './CoreValues.scss'
import Lentera1 from '../../asset/img/Community/Lentera1.png'
import Lentera2 from '../../asset/img/Community/Lentera2.png'
import Lentera3 from '../../asset/img/Community/Lentera3.png'

function CoreValues() {
  return(
    <div className="container vision-mission-container" style={{marginBottom:"70px"}}>
      <div className="row">
        <div className="col d-flex justify-content-center" style={{marginBottom:"30px"}}>
          <CoreCard
            title="Kepemimpinan"
            content="Mampu bijak dalam berinisiatif ketika mengambil langkah dengan memperhatikan kepekaan sosial."
            bgcolor="bg-emerald-green-20"
            source={Lentera1}
          />
        </div>
        <div className="col d-flex justify-content-center" style={{marginBottom:"30px"}}>
          <CoreCard
            title="Profesionalitas"
            content="Antusias dan bertanggung jawab penuh dalam melaksanakan kegiatan dengan menimbang etika sosial."
            bgcolor="bg-emerald-green-20"
            source={Lentera2}
          />
        </div>
        <div className="col d-flex justify-content-center" style={{marginBottom:"30px"}}>
          <CoreCard
            title="Keseimbangan"
            content="Berkomunikasi secara efektif seraya mendahulukan kepentingan bersama di atas kepentingan pribadi dengan memedulikan keadaan sosial."
            bgcolor="bg-emerald-green-20"
            source={Lentera3}
          />
        </div>
      </div>
    </div>
  )
}

export default CoreValues
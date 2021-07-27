import CoreCard from '../templates/CoreCard'
import './CoreValues.scss'

function CoreValues() {
  return(
    <div className="container vision-mission-container" style={{marginBottom:"70px"}}>
      <div className="row">
        <div className="col d-flex justify-content-center" style={{marginBottom:"30px"}}>
          <CoreCard
            title="Kepemimpinan"
            content="Mampu bijak dalam berinisiatif ketika mengambil langkah dengan memperhatikan kepekaan sosial."
            bgcolor="bg-emerald-green-20"
          />
        </div>
        <div className="col d-flex justify-content-center" style={{marginBottom:"30px"}}>
          <CoreCard
            title="Profesionalitas"
            content="Antusias dan bertanggung jawab penuh dalam melaksanakan kegiatan dengan menimbang etika sosial."
            bgcolor="bg-emerald-green-20"
          />
        </div>
        <div className="col d-flex justify-content-center" style={{marginBottom:"30px"}}>
          <CoreCard
            title="Keseimbangan"
            content="Berkomunikasi secara efektif seraya mendahulukan kepentingan bersama di atas kepentingan pribadi dengan memedulikan keadaan sosial."
            bgcolor="bg-emerald-green-20"
          />
        </div>
      </div>
    </div>
  )
}

export default CoreValues
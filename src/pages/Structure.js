import './Structure.scss'
import Jumbotron from '../components/Structure/Header'
import SupportingOrgans from '../components/Structure/SupportingOrgans'
import Member from '../components/Structure/Member'

function Structure() {
  return(
    <>
      <h1>Structure</h1>
      <Jumbotron />
      <SupportingOrgans />
      <Member />
    </>
  )
}

export default Structure
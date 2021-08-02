import { useState } from 'react'
import './FormApply.scss'
import backoffice from '../../api/backoffice'
import Swal from 'sweetalert2'

function FormApply(props) {
  let AllRole = props.RoleCompany.concat(props.RoleCommunity)

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [university, setUniversity] = useState('')
  const [major, setMajor] = useState('')
  const [department_id, setdepartment_id] = useState(1)
  const [attachUser, setAttachUser] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
      let formData = new FormData()
      formData.append('name', name)
      formData.append('address', address)
      formData.append('email', email)
      formData.append('university', university)
      formData.append('major', major)
      formData.append('department_id', department_id)
      formData.append('attachment', attachUser)

      Swal.fire({
        title: 'Uploading...',
        html: 'Please wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: async () => {
          Swal.showLoading()
          const rest = await backoffice.post('/api/v1/user/jobApplications', formData)
          Swal.close()
          Swal.fire(
            'Uploaded!',
            'Your file has been uploaded.',
            'success'
          )
        }
      });

    }
    catch(err) {
      console.log(err)
    }
  }

  return(
    <div className="form-apply-container bg-emerald-green-20 green-section" style={{marginTop:"145px"}}>
      <div className="container-md">
        <div className="d-flex justify-content-center align-items-center" style={{marginBottom:"40px"}}>
          <h1 className="heading-three heading-underline">Apply Now</h1>
        </div>
        <form onSubmit={handleSubmit} className="form-input" method="POST" enctype="multipart/form-data">
          <div style={{marginBottom:"24px"}}>
            <input onChange={(event) => setName(event.target.value)} name="name" type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="Full Name" value={name} required />
          </div>
          <div style={{marginBottom:"24px"}}>
            <input onChange={(event) => setAddress(event.target.value)} name="address" type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="Address" value={address} required />
          </div>
          <div style={{marginBottom:"24px"}}>
            <input onChange={(event) => setEmail(event.target.value)} name="email" type="email" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="Email" value={email} required />
          </div>
          <div style={{marginBottom:"24px"}}>
            <input onChange={(event) => setUniversity(event.target.value)} name="university" type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="University" value={university} required />
          </div>
          <div style={{marginBottom:"24px"}}>
            <input onChange={(event) => setMajor(event.target.value)} name="major" type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="Major" value={major} required />
          </div>
          <div style={{marginBottom:"24px"}}>
            <select onChange={(event) => setdepartment_id(event.target.value)} className="form-select dropdown-input" aria-label="Default select example" value={department_id} required>
              {AllRole.map(data => (
                <option key={data.id} value={data.id}>{data.name}</option>
              ))}
            </select>
          </div>
          <div style={{marginBottom:"40px"}}>
            <label for="attachment" className="form-label">Drop your documents here</label>
            <input onChange={(event) => setAttachUser(event.target.files[0])} className="form-control" type="file" id="attachment" name="attachment" required />
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{marginBottom:"40px"}}>
            <button type="submit" className="btn btn-primary btn-submit bg-tangerine-orange-100 body-two" style={{border: "none"}}>Join Now</button>            
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormApply
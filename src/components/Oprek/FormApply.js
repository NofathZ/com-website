import './FormApply.scss'

function FormApply() {
  return(
    <div className="form-apply-container bg-emerald-green-20 green-section" style={{marginTop:"145px"}}>
      <div className="container-md">
        <div className="d-flex justify-content-center align-items-center" style={{marginBottom:"40px"}}>
          <h1 className="heading-three heading-underline">Apply Now</h1>
        </div>
        <form className="form-input">
          <div style={{marginBottom:"24px"}}>
            <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="Full Name" />
          </div>
          <div style={{marginBottom:"24px"}}>
            <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="Address" />
          </div>
          <div style={{marginBottom:"24px"}}>
            <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="Email" />
          </div>
          <div style={{marginBottom:"24px"}}>
            <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="University" />
          </div>
          <div style={{marginBottom:"24px"}}>
            <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="Major" />
          </div>
          <div style={{marginBottom:"24px"}}>
            <select class="form-select dropdown-input" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div style={{marginBottom:"40px"}}>
            <label for="formFile" class="form-label">Default file input example</label>
            <input class="form-control" type="file" id="formFile" />
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
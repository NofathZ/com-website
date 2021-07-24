import { useState, useEffect } from 'react'
import './QuestionPlusAnswer.scss'
import backoffice from '../../api/backoffice'

function QuestionPlusAnswer() {
  const [FAQ, setFAQ] = useState([])

  useEffect(async () => {
    await backoffice.get('/api/v1/user/faqs').then(resp => {
      console.log(resp.data.data)
      setFAQ(resp.data.data)
    })
  }, [])
  return(
    <>
      <div className="container-md container-QNA">
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="heading-one">FAQ</h1>
        </div>
        {FAQ.map(data => (
          <div className="accordion accordion-flush accordion-box" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header button-accordion body-one" id="flush-headingOne" >
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${data.id}`} aria-expanded="false" aria-controls="flush-collapseOne">
                  <label className="body-one">{data.question}</label>
                </button>
              </h2>
              <div id={`flush-collapse${data.id}`} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body body-one">{data.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default QuestionPlusAnswer
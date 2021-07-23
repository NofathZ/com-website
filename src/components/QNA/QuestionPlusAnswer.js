import './QuestionPlusAnswer.scss'

function QuestionPlusAnswer() {
  return(
    <>
      <div className="container-md container-QNA">
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="heading-one">FAQ</h1>
        </div>
        <div class="accordion accordion-flush accordion-box" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header button-accordion body-one" id="flush-headingOne" >
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <label className="body-one">Accordion Item #1</label>
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body body-one">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>
        </div>
        <div class="accordion accordion-flush accordion-box" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header button-accordion body-one" id="flush-headingTwo" >
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <label className="body-one">Accordion Item #2</label>
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body body-one">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionPlusAnswer
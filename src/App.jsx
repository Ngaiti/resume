import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <>
      <div className="p-3 p-lg-5 text-center">
        <h1 className="about-me-section  theme-bg-light">Kevin Yap Lee Han
          <p>葉禮漢</p></h1>
        <h2>Software Developer</h2>
      </div>
      <div>
        <Experience1 className />
        <Experience2 className />
      </div>
    </>
  )
}

function Experience1() {
  return (
    <div className='mb-5'>
      <div className="py-2 px-5 bg-secondary text-white">
        <h3>Cabin Crew</h3>
        <p className=""> 2018 - 2022</p>
        <h4>Qatar Airways</h4>
      </div>
      <div className="py-2 px-4">
        <ul className="list-group ">
          <li className="list-group-item border-0"> <p className="fw-bold"> Brand Ambassador</p>- Being a brand ambassador to the company, upholding company values and keeping up with the latest products and information. Publicly representing the company brand and image by following the standards set.</li>
          <li className="list-group-item border-0"><p className="fw-bold">Service </p>- Deliver exceptional world class customer service and utilize available resources to ensure the best on board experience and comfort for all customers.</li>
          <li className="list-group-item border-0"><p className="fw-bold">Safety </p>- Uphold safety protocols as per company standards to ensure the safety of both the passengers and the cabin. Certified in air safety and first aid procedures, such as aircraft equipment handling and application of emergency responses.</li>
        </ul>
      </div>
    </div>
  )
}

function Experience2() {
  return (
    <>
      <div className="py-2 px-5 bg-secondary text-white">
        <h3>Cabin Crew</h3>
        <p className=""> 2018 - 2022</p>
        <h4>Qatar Airways</h4>
      </div>
      <div className="py-2 px-4">
        <ul className="list-group ">
          <li className="list-group-item border-0"> <p className="fw-bold"> Brand Ambassador</p>- Being a brand ambassador to the company, upholding company values and keeping up with the latest products and information. Publicly representing the company brand and image by following the standards set.</li>
          <li className="list-group-item border-0"><p className="fw-bold">Service </p>- Deliver exceptional world class customer service and utilize available resources to ensure the best on board experience and comfort for all customers.</li>
          <li className="list-group-item border-0"><p className="fw-bold">Safety </p>- Uphold safety protocols as per company standards to ensure the safety of both the passengers and the cabin. Certified in air safety and first aid procedures, such as aircraft equipment handling and application of emergency responses.</li>
        </ul>
      </div>
    </>
  )
}



export default App

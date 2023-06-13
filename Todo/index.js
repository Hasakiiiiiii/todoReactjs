import {useState, useRef} from "react"

function App() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState([])
    const jobRef = useRef()
    const handleSubmit = () =>{
     setJobs(prev => {
      const newJobs = [...prev,job]
      return newJobs
    })
    setJob('')
    jobRef.current.focus()
    
    }
    const handleDelete = (index) =>{
      const newJobs = [...jobs]
      setJobs(prev => {
        const newJobs = [...prev]
        newJobs.splice(index, 1)
        return newJobs
      })
    }
  

  return(
    <div className="main">
    <div className="header">
      <div className="grid">
        <h1 className="heading">ToDo List</h1>
        <div className="find">
          <input
          value={job}
          ref={jobRef}
          onChange={e => setJob(e.target.value)}
          type="text"
          className="finding"
          placeholder="Enter..."
          />
          <button
           className="btn-add"
           onClick={handleSubmit}
           ><p className="add">Add</p></button>
        </div>
      </div>
    </div>
    <div>
      <ul className="list">
        {jobs.map((job,index) => (
          <li key={index}>{job} <i onClick={() => handleDelete(index)} className="ti-close">	&times;</i></li>
        ))}
      </ul>
      
    </div>
    </div>
  )
  }



export default App;

import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateJob} from '../../store/job'
import {useParams} from 'react-router'


const UpdateJob = () => {

  // need to get the existing job with the _id then change the state with the code below and send the changes to the updatejob thunk

  const job = useSelector(state => state.job)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const obj = {
      _id: job._id,
      title,
      contactEmail,
      location
    }
    dispatch(updateJob(obj))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </label>
        <label>
          Job Contact Email:
          <input
            type="text"
            value={contactEmail}
            onChange={event => setContactEmail(event.target.value)}
          />
        </label>
        <label>
          Job Location:
          <input
            type="text"
            value={location}
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <button type="submit">Update Job</button>
      </form>
    </div>
  )
}

export default UpdateJob
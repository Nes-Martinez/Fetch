import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {getSingleJob} from '../../store/job'
import UpdateJob from './UpdateJob'

const SingleJob = props => {
  const id = props.match.params.id
  const job = useSelector(state => state.job, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleJob(id))
  }, [])
  console.log(job)

  return (
    <div>
      <UpdateJob />
      <h3>{job.title}</h3>
      <p>Estimated Salary: {job.salary}</p>
      <p>Contact Email: {job.contactEmail}</p>
      <p>Location: {job.location}</p>
      <p>Position: {job.roleType}</p>
      <p>Experience: {job.experienceLevel}</p>
      <p>Date Posted: {job.datePosted}</p>
    </div>
  )
}

export default SingleJob

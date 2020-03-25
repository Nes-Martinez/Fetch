import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateSingleUser} from '../../store/single-user'
import {useParams} from 'react-router'
import UploadFile from './Upload'

const UpdateSingleUser = () => {
  const user = useSelector(state => state.singleUser)
  console.log('Current User', user)
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const data = {
      _id: user._id,
      firstName,
      lastName,
      email
    }
    dispatch(updateSingleUser(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Current Name: {user.firstName}
          <br />
          Update First Name:
          <input
            type="text"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
        </label>
        <label>
          Preferred Email:
          <input
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <button type="submit">Update Job</button>
      </form>
      <UploadFile user={user} />
    </div>
  )
}

export default UpdateSingleUser

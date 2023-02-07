import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TimeblockDisplay from '../components/timeblockDisplay'
import Spinner from '../components/Spinner'

// import {getTimeblocks, reset} from '../features/timeblocks/timeblockSlice'
// import TimeblockForm from '../components/timeblockForm'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const {isLoading} = useSelector((state) => state.auth)

  useEffect(() => {


    if (!user) {
      navigate('/login')
    }

  
  }, [user, navigate, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  
  return (
    <>
  <section className="content">
    <p>Plan Your Day</p>
  </section>

  </>
  )
}

export default Dashboard
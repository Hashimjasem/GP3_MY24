import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TimeblockForm from '../components/timeblockForm'
import TimeblockDisplay from '../components/timeblockDisplay'
import Spinner from '../components/Spinner'
// import {getTimeblocks, reset} from '../features/timeblocks/timeblockSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { timeblocks, isLoading, isError, message } = useSelector(
    (state) => state.timeblocks
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

  
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  const reRoute = () => {
    navigate('/create')
  }
  
  return (
    <>
      <section className='content'>
        {timeblocks.length > 0 ? (
          <div className='timeblocks'>
            {timeblocks.map((goal) => (
              <TimeblockDisplay key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <div>
            <h3>You have not set any timeblocks for this date</h3>
            <button className="btn" onClick={reRoute}>
              Create Timeblocks
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default Dashboard
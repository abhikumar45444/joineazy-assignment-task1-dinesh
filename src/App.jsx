import './App.css'
import { useState, useEffect } from 'react'
import { USERS, ASSIGNMENTS, assignmentsKey, currentUserKey} from './data/seedData'

function App() {
  const [users, setUsers] = useState(USERS);

  const [assignments, setAssignments] = useState(() => {
    const isSaved = localStorage.getItem(assignmentsKey);
    return isSaved ? JSON.parse(isSaved) : ASSIGNMENTS;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const isCurrentUserExists = localStorage.getItem(currentUserKey);
    return isCurrentUserExists ? JSON.parse(isCurrentUserExists) : null;
  })

  useEffect(() => {
    const newAssignments = JSON.stringify(assignments);
    localStorage.setItem(assignmentsKey, newAssignments);
  }, [assignments]);

  useEffect(() => {
    if(currentUser !== null){
      localStorage.setItem(currentUserKey, JSON.stringify(currentUser));
    }
    else{
      localStorage.removeItem(currentUserKey);
    }
  }, [currentUser]);
  
  return (
    <>
      <div className='h-dvh'>
        <h1 className='text-center'>Home Page</h1>
        <div className='flex flex-col w-full p-76'>
          <h3 className='items-center text-center'>Total users count: {users.length}</h3>
          <h3 className='items-center text-center'>Total assignments count: {assignments.length}</h3>
          <button className='bg-amber-500 w-36 mt-10 mb-10 p-2 cursor-pointer m-auto rounded' onClick={() => setCurrentUser(users[0])}>Log in as user 1</button>
          {currentUser !== null && <p className='text-center'>logged in!!</p>}
        </div>
      </div>
    </>
  )
}

export default App

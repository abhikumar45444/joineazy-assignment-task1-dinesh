import './App.css'
import { useState, useEffect } from 'react'
import { USERS, ASSIGNMENTS, assignmentsKey, currentUserKey} from './data/seedData'
import LoginView from './views/LoginView';

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
        <LoginView users={users} onSelectUser={setCurrentUser} />
      </div>
    </>
  )
}

export default App

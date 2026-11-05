import { useState, useEffect } from 'react'
import { USERS, ASSIGNMENTS, assignmentsKey, currentUserKey} from './data/seedData'
import LoginView from './views/LoginView';
import Navbar from './components/Navbar';


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
  
  function logoutUser(){
    localStorage.removeItem(currentUserKey);
    setCurrentUser(null);
  }

  return (
    <>
      <div className='h-dvh'>
        {
          !currentUser ? <LoginView users={users} onSelectUser={setCurrentUser} /> :
          <>
            <Navbar currentUser={currentUser} onLogout={logoutUser} />
            <div className='text-center m-5'>
              {
                currentUser.role === "admin" ? <p>Welcome Admin {currentUser.name}</p> : <p>Welcome Student {currentUser.name}</p>
              }  
            </div>
          </>
        }
      </div>
    </>
  )
}

export default App

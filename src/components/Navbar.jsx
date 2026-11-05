const Navbar = ({currentUser, onLogout}) => {
  return (
    <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex gap-10 items-center">
            <p className="font-bold">Joineazy</p>
            <p className="bg-slate-200 p-2.5 pt-1 pb-1 rounded-md capitalize">{currentUser.role} Dashboard</p>
        </div>
        <div className="flex gap-10 items-center">
            <p>{currentUser.name}</p>
            <button className="border shadow-gray-300 shadow-md border-gray-300 p-2.5 pt-1 pb-1 rounded-md cursor-pointer" onClick={onLogout}>Logout / Switch User</button>
            {/* <button className="border shadow-gray-300 shadow-md border-gray-300 p-2.5 pt-1 pb-1 rounded-md cursor-pointer" onClick={onLogout}>Switch User</button> */}
        </div>
    </div>
  )
}
export default Navbar
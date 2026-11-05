const LoginView = ({ users, onSelectUser }) => {
    // function filterUsers(){
    const students = users.filter((user) => user.role === "student");
    const admins = users.filter((user) => user.role === "admin");
    // }

    return (
        <div className="min-h-screen flex flex-col justify-center bg-slate-50 p-4 w-full max-w-xl mx-auto">
            <h1 className="text-center text-3xl">Assignment Portal</h1>

            <div className="flex flex-col m-2 mb-10 mt-10 ">
                <h2 className="p-2">Professors (Admins)</h2>
                <div className="flex gap-5 flex-wrap justify-start w-full">
                    {admins.map((admin) => (
                        <button
                            className="flex items-center justify-between p-3 border border-slate-200 bg-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition cursor-pointer text-left"
                            key={admin.id}
                            onClick={() => onSelectUser(admin)}
                        >
                            <div>
                                <p className="font-medium text-slate-800">
                                    {admin.name}
                                </p>
                                <p className="text-xs text-slate-500">
                                    {admin.email}
                                </p>
                            </div>
                            <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded capitalize">
                                {admin.role}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col place-self-start m-2 mb-10 mt-10 ">
                <h2 className="p-2">Students</h2>
                <div className="flex flex-wrap gap-5 justify-start w-full">
                    {students.map((student) => (
                        <button
                            className="flex items-center justify-between p-3 border border-slate-200 bg-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition cursor-pointer text-left"
                            key={student.id}
                            onClick={() => onSelectUser(student)}
                        >
                            <div>
                                <p className="font-medium text-slate-800">
                                    {student.name}
                                </p>
                                <p className="text-xs text-slate-500">
                                    {student.email}
                                </p>
                            </div>
                            <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded capitalize">
                                {student.role}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default LoginView;

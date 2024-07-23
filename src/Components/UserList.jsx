// // import React, { useEffect, useState } from "react";

// // const UserList = () => {
// //   const [users, setUsers] = useState([]);
// //   const [managers, setManagers] = useState([]);
// //   const [admins, setAdmins] = useState([]);
// //   const [userList, setUserList] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch("http://192.168.1.49:5000/api/user/fetch", {
// //           method: "GET",
// //           headers: {
// //             Accept: "application/json",
// //             "Content-Type": "application/json",
// //             "Auth-token": localStorage.getItem("authToken"),
// //           },
// //         });
// //         const responseData = await response.json();

// //         if (responseData?.Detail) {
// //           if (responseData.Detail.Admin) {
// //             setAdmins(responseData.Detail.Admin);
// //           }
// //           if (responseData.Detail.Manager) {
// //             setManagers(responseData.Detail.Manager);
// //           }
// //           if (responseData.Detail.Users) {
// //             setUsers(responseData.Detail.Users);
// //           }
// //         }
// //         console.log(responseData);
// //       } catch (error) {
// //         console.error("Error fetching user data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   useEffect(() => {
// //     const combinedUserList = [...users, ...managers, ...admins];
// //     setUserList(combinedUserList);
// //   }, [users, managers, admins]);

// //   const userDelete=async(deleteThisUser)=>{

// //     await fetch(`http://192.168.1.49:5000/api/user/delete/${deleteThisUser}`,{
// //         method:"delete",
// //         headers:{
// //             Accept: "application/json",
// //             "Content-Type": "application/json",
// //             "Auth-token": localStorage.getItem("authToken"),
// //         }
// //     })
// //     console.log(deleteThisUser);
// //   }

// //   return (
// //     <div className="h-screen pt-20">
// //       <div className="container mx-auto p-4 h-full flex flex-col">
// //         <h1 className="text-2xl font-bold mb-4">User List</h1>
// //         <div className="bg-white shadow-md rounded-lg overflow-hidden flex-grow flex flex-col">
// //           <div className="overflow-hidden flex-grow flex flex-col">
// //             <div className="overflow-y-scroll flex-grow">
// //               <table className="min-w-full bg-white">
// //                 <thead className="bg-gray-800 text-white sticky top-0">
// //                   <tr>
// //                     <th className="w-1/6 py-3 h-12 px-4 uppercase font-semibold text-sm">Sr.No.</th>
// //                     <th className="w-1/6 py-3 h-12 px-4 uppercase font-semibold text-sm">Email</th>
// //                     <th className="w-1/6 py-3 h-12 px-4 uppercase font-semibold text-sm">Role</th>
// //                     <th className="w-1/6 py-3 h-12 px-4 uppercase font-semibold text-sm">Action</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="text-gray-700">
// //                   {userList.map((user, index) => (
// //                     <tr key={index} className="w-1/6 py-3 px-4 my-9 text-center">
// //                       <td>{index + 1}</td>
// //                       <td>{user.email}</td>
// //                       <td>{user.role}</td>
// //                       <td className="flex gap-2 w-30 my-3 justify-center">
// //                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
// //                           Edit
// //                         </button>
// //                         <button onClick={()=>userDelete(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
// //                           Delete
// //                         </button>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserList;

// import React, { useEffect, useState } from "react";
// import './UserListRole.css'

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [managers, setManagers] = useState([]);
//   const [admins, setAdmins] = useState([]);
//   const [userList, setUserList] = useState([]);
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "http://192.168.1.49:5000/api/user/fetch",
//           {
//             method: "GET",
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//               "Auth-token": localStorage.getItem("authToken"),
//             },
//           }
//         );
//         const responseData = await response.json();

//         if (responseData?.Detail) {
//           if (responseData.Detail.Admin) {
//             setAdmins(responseData.Detail.Admin);
//           }
//           if (responseData.Detail.Manager) {
//             setManagers(responseData.Detail.Manager);
//           }
//           if (responseData.Detail.Users) {
//             setUsers(responseData.Detail.Users);
//           }
//         }
//         console.log(responseData);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const combinedUserList = [...users, ...managers, ...admins];
//     setUserList(combinedUserList);
//   }, [users, managers, admins]);

//   const userEdit = async (editThisUser) => {
//       await fetch(
//         `http://192.168.1.49:5000/api/user/update/${editThisUser}`,
//         {
//           method: "PUT",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             "Auth-token": localStorage.getItem("authToken"),
//           },
//           body: JSON.stringify({
//             role
//           }),
//         }
//       );
//   };

//   const userDelete = async (deleteThisUser) => {
//     try {
//       const response = await fetch(
//         `http://192.168.1.49:5000/api/user/delete/${deleteThisUser}`,
//         {
//           method: "DELETE",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             "Auth-token": localStorage.getItem("authToken"),
//           },
//         }
//       );

//       if (response.ok) {
//         // Filter out the deleted user from the userList state
//         const updatedUserList = userList.filter(
//           (user) => user.id !== deleteThisUser
//         );
//         setUserList(updatedUserList);
//         console.log(`User ${deleteThisUser} deleted successfully`);
//       } else {
//         console.error("Failed to delete user");
//       }
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   return (
//     <div className="h-screen pt-20">
//       <div className="container mx-auto p-4 h-full flex flex-col">
//         <h1 className="text-2xl font-bold mb-4">User List</h1>
//         <div className="bg-white shadow-md rounded-lg overflow-hidden flex-grow flex flex-col">
//           <div className="overflow-hidden flex-grow flex flex-col">
//             <div className="overflow-y-scroll flex-grow">
//               <table className="min-w-full bg-white">
//                 <thead className="bg-gray-800 text-white sticky top-0">
//                   <tr>
//                     <th className="w-1/6 py-3 h-12 px-4 uppercase font-semibold text-sm">
//                       Sr.No.
//                     </th>
//                     <th className="w-1/6 py-3 h-12 px-4 uppercase font-semibold text-sm">
//                       Email
//                     </th>
//                     <th className="w-1/6 py-3 h-12 px-4 uppercase font-semibold text-sm">
//                       Role
//                     </th>
//                     <th className="w-1/6 py-3 h-12 px-4 uppercase font-semibold text-sm">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-gray-700">
//                   {userList.map((user, index) => (
//                     <tr
//                       key={index}
//                       className="w-1/6 py-3 px-4 my-9 text-center"
//                     >
//                       <td>{index + 1}</td>
//                       <td>{user.email}</td>

//                       <td>
//                         <div class="dropdown">
//                           <select name="role" id="role">
//                             <option>{user.role}</option>
//                             <option value="User" onClick={() => { userEdit(user._id); setRole("User"); }}>User</option>
//                             <option value="Manager" onClick={() => { userEdit(user._id); setRole("Manager"); }}>Manager</option>
//                             <option value="Admin" onClick={() => { userEdit(user._id); setRole("Admin"); }}>Admin</option>
//                           </select>
//                         </div>
//                       </td>

//                       <td className="flex gap-2 w-30 my-3 justify-center">
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => userDelete(user._id)}
//                           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;

import React, { useEffect, useState } from "react";


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [managers, setManagers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [userList, setUserList] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.49:5000/api/user/fetch",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Auth-token": localStorage.getItem("authToken"),
            },
          }
        );
        const responseData = await response.json();

        if (responseData?.Detail) {
          if (responseData.Detail.Admin) {
            setAdmins(responseData.Detail.Admin);
          }
          if (responseData.Detail.Manager) {
            setManagers(responseData.Detail.Manager);
          }
          if (responseData.Detail.Users) {
            setUsers(responseData.Detail.Users);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const combinedUserList = [...users, ...managers, ...admins];
    setUserList(combinedUserList);
  }, [users, managers, admins]);

  const userEdit = async (editThisUser) => {
    try {
      const response = await fetch(
        `http://192.168.1.49:5000/api/user/update/${editThisUser}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Auth-token": localStorage.getItem("authToken"),
          },
          body: JSON.stringify({
            role
          }),
        }
      );

      if (response.ok) {
        // Update user list after successful edit
        const updatedUserList = userList.map(user => {
          if (user._id === editThisUser) {
            return { ...user, role };
          }
          return user;
        });
        setUserList(updatedUserList);
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const userDelete = async (deleteThisUser) => {
    try {
      const response = await fetch(
        `http://192.168.1.49:5000/api/user/delete/${deleteThisUser}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Auth-token": localStorage.getItem("authToken"),
          },
        }
      );

      if (response.ok) {
        // Filter out the deleted user from the userList state
        const updatedUserList = userList.filter(
          (user) => user._id !== deleteThisUser
        );
        setUserList(updatedUserList);
        console.log(`User ${deleteThisUser} deleted successfully`);
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="h-screen pt-20">
      <div className="container mx-auto p-4 h-full flex flex-col">
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex-grow flex flex-col">
          <div className="overflow-hidden flex-grow">
            <div className="overflow-y-scroll">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white sticky top-0">
                  <tr>
                    <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                      Sr.No.
                    </th>
                    <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                      Email
                    </th>
                    <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                      Role
                    </th>
                    <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {userList.map((user, index) => (
                    <tr key={index} className="w-1/6 py-3 px-4 my-9 text-center">
                      <td>{index + 1}</td>
                      <td>{user.email}</td>
                      <td>
                        <div className="dropdown">
                          <select
                            name="role"
                            id="role"
                            onClick={() => userEdit(user._id)}
                            value={user.role}
                            onChange={(e) => setRole(e.target.value)}
                            className="bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          >
                            <option value="User">User</option>
                            <option value="Manager">Manager</option>
                            <option value="Admin">Admin</option>
                          </select>
                        </div>
                      </td>
                      <td className="flex gap-2 w-30 my-3 justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Edit
                        </button>
                        <button
                          onClick={() => userDelete(user._id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;


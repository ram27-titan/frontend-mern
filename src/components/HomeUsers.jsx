import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomeUsers = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get('http://localhost:8000/users');
    setUser(res.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);
      getUsers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" mt-20 ">
      <Link to="add" className="bg-green-500 hover:border-2 hover:border-green-700 hover:bg-white hover:text-green-500 p-3 rounded-xl text-white text-lg font-medium ml-5 duration-300 ">
        Product +
      </Link>
      <div className="mx-5 mt-5">
        <table className=" border-collapse border border-slate-500 mx-auto w-full ">
          <thead>
            <tr>
              <th className="border-[3px] bg-slate-500 text-white border-slate-800 p-2">No</th>
              <th className=" bg-slate-500 text-white border-[3px] border-slate-800 p-2">Name</th>
              <th className=" bg-slate-500 text-white border-[3px] border-slate-800">Price</th>
              <th className="border-[3px] bg-slate-500 text-white border-slate-800  p-2">Stock</th>
              <th className=" bg-slate-500 text-white border-[3px] border-slate-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="border-[3px] bg-slate-500 text-white font-semibold border-slate-700 p-2 text-center ">{index + 1}</td>
                <td className="border-2 border-slate-700 p-2 text-center">{user.name}</td>
                <td className="border-2 border-slate-700 p-2 text-center">{user.price}</td>
                <td className="border-2 border-slate-700 p-2 text-center">{user.stock}</td>
                <td className="border-2 border-slate-700 p-2 text-center ">
                  <Link to={`detail/${user._id}`} className="bg-blue-500 p-2 px-3 rounded-xl text-white duration-300 font-semibold mr-3 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500  ">
                    Detail
                  </Link>
                  <Link to={`edit/${user._id}`} className=" mt-2 bg-green-500 p-2 px-5 rounded-xl text-white font-semibold mr-3 hover:bg-white hover:text-green-500 hover:border hover:border-green-500  duration-300">
                    Edit
                  </Link>
                  <button onClick={() => deleteUser(user._id)} className=" mt-4 bg-red-500 p-2 px-3 duration-300 rounded-xl text-white font-semibold mr-3 hover:bg-white hover:text-red-500 hover:border hover:border-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeUsers;

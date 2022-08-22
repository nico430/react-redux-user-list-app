import React, { useEffect } from "react";

// redux
import { fetchAllUsers } from "../store/slices/users";
import { useDispatch, useSelector } from "react-redux";

export default function UserList() {
  // use the state  with useSelector hook
// with useSelector we can access to all the application state but we only need the users slides stateso:
// and from the users slice state i only want the list so i desestructured it and renamed as users
const { list: users } = useSelector(state => state.users)

  // call the action throush a useDispath hook
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers()) // it needs to be called by a dispatcher other way it will not be executed
  }, [dispatch])
  

  return (
    <div className="container mt-4" >
      <div className="row">
        {users.map((user, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card">
              <img src={user.avatar} alt="avatar" />
              <div className="card-body">
                <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

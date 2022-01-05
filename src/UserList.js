const UserList = ({ userData }) => {
    return (
      <div>
        {userData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
    );
  };
  
  export default UserList;

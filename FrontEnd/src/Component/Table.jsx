import './TableCSS.css'

const Table = ({info}) => {
    if (!info || !Array.isArray(info) || info.length === 0) {
        return <div>No data available</div>;
    }
    
    return (
      <div className="table-container">
        <h1>User Information</h1>
        <table className="table">
        
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
            </tr>
          </thead>

          <tbody>
          {info.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.userName}</td>
            </tr>
          ))}
        </tbody>
          
        </table>
      </div>
    );
  };
  
  export default Table;
  
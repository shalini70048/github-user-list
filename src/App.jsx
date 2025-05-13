import { useState } from 'react';
import { userList } from './list';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [list,setList] = useState(userList);

  const filterGithubUser = list.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteHandler = (userId) =>{
    console.log(userId) 
    const updatedList = list.filter((user) => {
      return user.id !== userId
      
    })
    setList(updatedList);
  }


  return (
    <div style={{ padding: '30px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>GitHub User Profiles</h1>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Search by name or username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '300px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px'  }}>
        {filterGithubUser.length > 0 ? (
          filterGithubUser.map((item) => (
            <div
              className='contact-card'
              key={item.id}
              style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                width: '280px',
                textAlign: 'center',
                transition: 'transform 0.2s',
                position: 'relative',
                
              }}
            >
              <button
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '15px',
                  backgroundColor: '#dc3545',
                  cursor:'pointer',
                  border:'none',
                  padding:'4px 8px',
                  color:'white'
                  
                }}
                onClick={() =>{deleteHandler(item.id)}}
              >Delete</button>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px',
                  marginBottom: '10px',
                  border: '3px solid #007bff'
                }}
              />
              <h2 style={{ fontSize: '20px', color: '#007bff', margin: '5px 0', }}>{item.name}</h2>
              <p style={{ color: '#555', fontStyle: 'italic', fontWeight: 'bold' }}>@{item.username}</p>
              <p style={{ margin: '10px 0', fontSize: '14px', color: '#333' }}>{item.bio}</p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '15px',
                fontSize: '14px',
                color: '#444'
              }}>
                <div><span style={{ fontWeight: 'bold' }}>Repos:</span> {item.repos}</div>
                <div><span style={{ fontWeight: 'bold' }}>Followers:</span> {item.followers}</div>
                <div><span style={{ fontWeight: 'bold' }}>Following:</span> {item.following}</div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: '#888', marginTop: '30px' }}>No users found.</p>
        )}
      </div>
    </div>
  );
}

export default App;

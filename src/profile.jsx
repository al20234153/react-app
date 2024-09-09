import React, { useState } from 'react';

function Profile() {
  const registeredUser = {
      username: 'user',
      firstName: 'Petar',
      lastName: 'Petrovic',
      email: 'petar@example.com',
  };

  const [user, setUser] = useState(registeredUser);
  const [isEditing, setIsEditing] = useState(false);
  
  const handleInputChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      const updatedUser = {
          ...user,
          [name]: value,
      };
      setUser(updatedUser);      
  };

  const handleSaveClick = (e) => {
      e.preventDefault();
      setIsEditing(false);      
      setUser(user);
      console.log(user);
      return user;      
  };

  return (    
      <div className='profile-container'>          
          <h2>My profile: {user.firstName} {user.lastName}</h2>
          <div className='profile-info'>
              {isEditing ? (
                  <div>
                    <p>
                        <strong>First name:  </strong>
                        <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleInputChange}
                        />
                    </p>
                    <p>
                        <strong>Last name:  </strong>
                        <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleInputChange}
                        />
                    </p>
                    <p>
                        <strong>Email:  </strong>
                        <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        />
                    </p>
                  </div>
              ) : ( 
                  <div>
                    <p> 
                        <strong>First name: </strong> {user.firstName}
                    </p>
                    <p>
                        <strong>Last name: </strong> {user.lastName}
                    </p>
                    <p>
                        <strong>Email: </strong> {user.email}                        
                    </p>
                  </div>  
              )}
              {isEditing ? (
                  <button onClick={handleSaveClick}>Save</button>
              ) : (
                  <button onClick={() => setIsEditing(true)}>Edit profile</button>
              )}
          </div>         
      </div>
  );
}

export default Profile;
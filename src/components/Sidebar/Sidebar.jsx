import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar-container" style={{
      width: '90px',
      height: '100%',
      backgroundColor: '#f5f5f5',
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
    }}>
    <div className="home" style={{
      width: '100%',
      height: '50px',
      backgroundColor: 'red',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      fontWeight: 'bold',
    }}>
      Home
    </div>
    <div className="home" style={{
      width: '100%',
      height: '50px',
      backgroundColor: 'red',
      alignSelf: 'flex-end',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      fontWeight: 'bold',
    }}>
      Library
    </div>
    </div>
  )
}

export default Sidebar
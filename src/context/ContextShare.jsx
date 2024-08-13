import React, { createContext, useState } from 'react'
export const updateResponseContext = createContext()

function Contextshare({ children }) {
  // edit project
  const [editResponse, setEditResponse] = useState("")
  return (
    <>
      <updateResponseContext.Provider value={{ editResponse, setEditResponse }}>
        {children}
      </updateResponseContext.Provider>
    </>
  )
}

export default Contextshare
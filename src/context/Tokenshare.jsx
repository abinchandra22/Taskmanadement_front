import React, { createContext, useState, useEffect } from 'react'
export const tokenAuthContext = createContext()
function TokenShare({ children }) {
  const [isAuthorised, setIsAuthorised] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsAuthorised(true)
    } else {
      setIsAuthorised(false)
    }
  }, [isAuthorised])
  return (
    <>
      <tokenAuthContext.Provider value={{ isAuthorised, setIsAuthorised }}>
        {children}
      </tokenAuthContext.Provider>

    </>
  )
}

export default TokenShare
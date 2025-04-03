import React from 'react'
import { useState } from 'react'
import { LightContext } from './LightContext'

export function LightProvider( {children} ) {
  const [lightMode, setLightMode] = useState(true)


  return (
    <LightContext.Provider value={{lightMode, setLightMode}}>
        {children}
    </LightContext.Provider>
  )
}


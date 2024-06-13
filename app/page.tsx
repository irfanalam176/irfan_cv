import Aside from '@/components/Aside'
import Header from '@/components/Header'
import TabData from '@/components/TabData'
import React from 'react'

function App() {
  return (
    <>
      <main className='mainContainer'>
      <Header/>
      <div className="mainData">
        <Aside/>
        <div className="tabContent">
          <TabData/>
        </div>
      </div>
      </main>
    </>
  )
}

export default App
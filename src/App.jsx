import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import UploadImage from './components/UploadImage'
import ImagesGrid from './components/ImagesGrid'
import Modal from './components/Modal'

function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className='App'>
      <Title />
      <UploadImage />
      <ImagesGrid />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={selectedImg} />
      )}
    </div>
    )
}

export default App

import React, { useRef, useCallback, useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import Webcam from 'react-webcam'
import { Button } from './styles'

export const WebcamComponent = () => {
  const webcamRef = useRef(null)
  const [image, setImage] = useState('')

  const [videoConstraints, setvideoConstraints] = useState({
    width: 720,
    height: window.innerHeight,
    facingMode: 'user'
  })

  useEffect(() => {
    //@ts-ignore
    if (!webcamRef.current) {
      window.location = window.location
    }
    setvideoConstraints({
      width: 720,
      height: window.innerHeight,
      facingMode: 'user'
    })
  }, [])

  const capture = React.useCallback(() => {
    //@ts-ignore
    const imageSrc = webcamRef.current.getScreenshot()
    setImage(imageSrc)
    /* var link = document.createElement("a");
    link.href = imageSrc;
    link.download = "Download.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); */
  }, [webcamRef])
  return (
    <>
      {image.length == 0 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Webcam
            audio={false}
            ref={webcamRef}
            width={'100%'}
            height={'100%'}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            style={{ borderRadius: 20 }}
          />
          <Button onClick={capture}></Button>
        </div>
      )}

      {image.length > 0 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column'
          }}
        >
          <AiOutlineClose
            size={30}
            color={'white'}
            style={{
              marginBottom: -40,
              zIndex: 1,
              marginRight: 20,
              cursor: 'pointer'
            }}
            onClick={() => {
              setImage('')
            }}
          ></AiOutlineClose>
          <img
            src={image}
            width={'100%'}
            height={'100%'}
            style={{ borderRadius: 20 }}
          />
        </div>
      )}
    </>
  )
}

import React, { useState, useRef } from 'react'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const UPLOAD_DELAY = 5000

export const ImageUploader = () => {
  const inputImageRef = useRef<HTMLInputElement | null>(null)
  const fileRef = useRef<File | null>(null)
  const [message, setMessage] = useState<string | null>('')

  const onClickText = () => {
    if (inputImageRef.current !== null) {
      inputImageRef.current.click()
    }
  }

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files !== null && files.length > 0) {
      fileRef.current = files[0]
    }
  }

  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      await sleep(UPLOAD_DELAY)
      setMessage(`${fileRef.current.name} has been successfully uploaded`)
    }
  }

  return (
    <>
      <p style={{ textDecoration: 'underline' }} onClick={onClickText}>Upload picture</p>
      <input type="file"
        ref={inputImageRef}
        accept="image/*"
        onChange={onChangeImage}
        style={{ visibility: 'hidden' }} />
      <br />
      <button onClick={onClickUpload}>Upload</button>
      {message !== null && <p>{message}</p>}
    </>
  )
}
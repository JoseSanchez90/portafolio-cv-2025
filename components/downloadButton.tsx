"use client"

import React from 'react'
import { Button } from './ui/button'

const DownloadButton: React.FC = () => {

    const handleDownload = () => {
        const fileId = "1ehSOKFdDXIBVyuM6ACQntajY4oKK7H9R"
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`

        const a = document.createElement("a")
        a.href = downloadUrl
        a.download = "CV-RESUME.pdf"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

  return (
    <Button
        onClick={handleDownload}
        className="hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-700 dark:hover:text-white "
    >Descargar CV

    </Button>
  )
}

export default DownloadButton
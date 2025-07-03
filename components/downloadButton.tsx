"use client"

import React from 'react'
import { Button } from './ui/button'

const DownloadButton: React.FC = () => {

    const handleDownload = () => {
        const fileId = "15JX4nd-WzK0zRYJY4xmg_psixJqhpDPZ"
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
        className="border-2 border-black hover:bg-white hover:text-black dark:border-white dark:hover:bg-gray-900 dark:hover:text-white"
    >Download CV

    </Button>
  )
}

export default DownloadButton
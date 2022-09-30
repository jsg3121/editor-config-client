type FileDownloadType = (
  data: ConfigTypes.DetailDataType['configDetail'] | {}
) => void

export const fileDownload: FileDownloadType = (data) => {
  console.log(data)
  const blob = new Blob([JSON.stringify(data)], {
    type: `application/json`,
  })

  const fileUrl = window.URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = fileUrl
  link.style.display = 'none'

  link.download = 'prettierrc'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

import React from 'react'
// Assuming this is your button component
export function PythonTrigger(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('trigger-python')
  return (
    <div>
      <button onClick={ipcHandle}>Trigger Python</button>
    </div>
  )
}

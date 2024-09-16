import electronLogo from './assets/electron.svg'
import { PythonTrigger } from './components/python-trigger'
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div>login</div>
      <div>
        {' '}
        {/* <SignedOut>
          <SignInButton fallbackRedirectUrl="/" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </div>
      <PythonTrigger />
    </>
  )
}

export default App

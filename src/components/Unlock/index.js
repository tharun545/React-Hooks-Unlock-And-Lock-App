// Write your code here

import {useState} from 'react'

import {MainContainer, Button, LockImage, Heading} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)
  const onClickLock = () => {
    setIsLocked(prevLock => !prevLock)
  }

  return (
    <MainContainer>
      {isLocked ? (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      <Heading>
        {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Heading>
      <Button onClick={onClickLock}>{isLocked ? 'Unlock' : 'Lock'}</Button>
    </MainContainer>
  )
}
export default Unlock

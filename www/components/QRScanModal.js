import React, { useState } from 'react'
import styled from 'styled-components'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import Button from './Button'
import { Body } from './Type'
import QRReader from './QRReader'

const StyledDialogOverlay = styled(DialogOverlay)`
  &[data-reach-dialog-overlay] {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
`

const StyledDialogContent = styled(DialogContent)`
  &[data-reach-dialog-content] {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
  }
`

const ScanHeader = styled.span`
  display: flex;
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  font-weight: 600;
  z-index: 2;
`
const StyledHeaderText = styled(Body)`
  padding-top: 1rem;
  padding-left: 1rem;
`

const CloseButton = styled(Button)`
  background-color: black;
  color: white;
  font-size: 30px;
  padding: 0px;
  margin: 0;
  min-width: 48px;
  min-height: 48px;
  font-weight: 400;
`

export default function QRScanModal({ isOpen, onDismiss, onAddress }) {
  const [error, setError] = useState()
  const [legacy, setLegacy] = useState(false)

  return (
    <StyledDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <StyledDialogContent>
        <ScanHeader>
          <StyledHeaderText textStyle="gradient">Scan QR Code.</StyledHeaderText>
          <CloseButton variant="outlined" onClick={onDismiss}>
            ✗
          </CloseButton>
        </ScanHeader>
        <QRReader
          onAddress={onAddress}
          forceLegacy={legacy}
          onError={error => {
            console.error(error)
            setError(error)
          }}
        />
        {error &&
          (!legacy ? (
            <p>
              Camera not working? <u onClick={() => setLegacy(true)}>Upload an image instead</u>.
            </p>
          ) : (
            <p>Make sure your image is clear and well-lit.</p>
          ))}
      </StyledDialogContent>
    </StyledDialogOverlay>
  )
}

import styled from 'styled-components'
import { transparentize } from 'polished'

import GradientText from './GradientText'

// HEADING

const StyledHeading = styled.p`
  color: ${({ theme }) => theme.colors.greys[6]};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  @media only screen and (max-width: 480px) {
    opacity: 0;
    height: 0px;
    margin: 0px;
  }
`

const StyledBoldHeading = styled.p`
  color: ${({ theme }) => theme.colors.greys[6]};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  width: 100%;
`

export function Heading({ children, textStyle }) {
  if (textStyle === 'bold') {
    return <StyledBoldHeading>{children}</StyledBoldHeading>
  } else {
    return <StyledHeading>{children}</StyledHeading>
  }
}

// TITLE

const StyledTitle = styled.h1`
  margin: 0;
  font-size: ${({ size }) => (size ? size + 'px' : '5rem')};
  font-weight: 900;
  font-style: italic;
  color: ${({ color }) => (color ? color : 'initial')} !important;
  mix-blend-mode: exclusion;
  @media only screen and (max-width: 480px) {
    font-size: ${({ size }) => (size ? size + 'px' : '3.5rem')};
  }
`

const StyledGradientTitle = styled(GradientText)`
  /* font-family: 'Rubik', sans-serif; */
  margin: 0;
  font-size: ${({ size }) => (size ? size + 'px' : '4rem')};
  font-weight: 700;
  mix-blend-mode: exclusion;
  @media only screen and (max-width: 480px) {
    font-size: ${({ size }) => (size ? size + 'px' : '3.5rem')};
  }
`

export function Title({ children, textStyle, ...rest }) {
  if (textStyle === 'gradient') {
    return <StyledGradientTitle {...rest}>{children}</StyledGradientTitle>
  } else {
    return <StyledTitle {...rest}>{children}</StyledTitle>
  }
}

// BODY

const StyledGradientBody = styled(GradientText)`
  /* width: 100%; */
  font-size: ${({ size }) => (size ? size + 'px' : '18px')};
  line-height: 150%;
  margin: 0.125rem;
`

const StyledBody = styled.p`
  width: 100%;
  font-size: ${({ size }) => (size ? size + 'px' : '24px')};
  margin: 0.125rem;
  line-height: 150%;
  color: ${({ color }) => (color ? color : 'initial')} !important;
`

export function Body({ children, textStyle, ...rest }) {
  if (textStyle === 'gradient') {
    return <StyledGradientBody {...rest}>{children}</StyledGradientBody>
  } else {
    return <StyledBody {...rest}>{children}</StyledBody>
  }
}

// DESC

const StyledDesc = styled.p`
  color: ${({ theme }) => transparentize(0.2, theme.colors.textColor)};
  font-size: 16px;
  line-height: 183.5%;
  max-width: 250px;
  a {
    color: ${({ theme }) => transparentize(0.2, theme.colors.textColor)};
    /* text-decoration: none; */
  }
`

export function Desc({ children, ...rest }) {
  return <StyledDesc {...rest}>{children}</StyledDesc>
}

// BUTTON

const StyledButtonText = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
`

export function ButtonText({ children }) {
  return <StyledButtonText>{children}</StyledButtonText>
}

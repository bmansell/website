import React from 'react'
import styled from 'styled-components'
import code from '../../img/code.svg';
import { Flex, Image, Text } from 'pcln-design-system'

const imgSizes = ['50px', null, null, '75px']

const SpinningIcon = styled(Image)`
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: logo-spin infinite 15s linear;
`

const NameText = styled(Text)`
  text-transform: uppercase;
  font-family: 'Barlow', sans-serif;
  font-weight: bolder;
`

const Header = () => (
  <Flex flexDirection='column' alignItems='center' pt={1}>
    <SpinningIcon src={code} alt='Spinning code logo' width={imgSizes} height={imgSizes} />
    <NameText color='text.dark' fontSize={['28px', 5, null, 6, 7]}>
      Brianna<Text.span color='primary.base'>Mansell</Text.span>
    </NameText>
  </Flex>
)

export default Header
import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'
import { Box, Flex, Text } from 'pcln-design-system'

const colours = {
  orange: '#FF8636',
  yellow: '#EEC644',
  green: '#82B807',
  blue: '#81AEFF'
}

const Background = styled(Box)`
  min-height: 200px;
`

const TerminalText = styled(Text)`
  font-family: 'Monaco', monospace;
`

const Terminal = () => (
  <Background width={[1, 0.8, null, null, 2/3]} color='background.dark' mt={[4, null, null, 5]} mb={3} p={3}>
    <TerminalText fontSize={[0, null, null, 1, 2]} fontWeight='bold' color='text.lightest'>
      <Text.span color={colours.orange}>briannamansell</Text.span> at&nbsp;
      <Text.span color={colours.yellow}>World-Wide-Web</Text.span> in&nbsp;
      <Text.span color={colours.green}>~/workspace</Text.span> on&nbsp;
      <Text.span color={colours.blue}>develop</Text.span>
      <Flex my={1}>
        <Typist><Text.span pr={2}>$</Text.span>Hello, world!</Typist>
      </Flex>
    </TerminalText>
  </Background>
)

export default Terminal
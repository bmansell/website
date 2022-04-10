import React from 'react'
import { Flex, Image, Link, Text } from 'pcln-design-system'
import email from '../../img/email.svg'
import github from '../../img/github.svg'
import linkedin from '../../img/linkedin.svg'

const imgSizes = ['40px', null, null, '60px']

const Footer = () => (
  <Flex flexDirection='column' alignItems='center' mt={[2, null, null, 4]}>
    <Flex>
      <Link p={2} href='mailto:briannajmansell@gmail.com'>
        <Image height={imgSizes} width={imgSizes} src={email} alt='Email Contact'/>
      </Link>
      <Link p={2} href='https://github.com/bmansell' target='blank'>
        <Image height={imgSizes} width={imgSizes}  src={github} alt='Github Profile'/>
      </Link>
      <Link p={2} href='https://www.linkedin.com/in/briannamansell/' target='blank'>
        <Image height={imgSizes} width={imgSizes} src={linkedin} alt='LinkedIn Profile'/>
      </Link>
    </Flex>
    <Text fontSize={0} color='text.base' mt={2}>
      &copy; Brianna Mansell. All rights reserved.
    </Text>
  </Flex>
)

export default Footer
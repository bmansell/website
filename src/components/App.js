import { Flex, ThemeProvider } from 'pcln-design-system'
import Footer from './Footer'
import Header from './Header'
import Terminal from './Terminal'
import { theme } from '../theme'

const App = () => (
  <div className='app'>
    <ThemeProvider theme={theme}>
      <Flex flexDirection='column' alignItems='center' p={[2, 4, null, null, 5]}>
        <Header />
        <Terminal />
        <Footer />
      </Flex>
    </ThemeProvider>
  </div>
)

export default App

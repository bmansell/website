import Typing from './Typing'

const Terminal = () => (
  <section className='terminal'>
    <div className='terminal-text'>
      <span className='orange'>briannamansell</span> at&nbsp;
      <span className='yellow'>World-Wide-Web</span> in&nbsp;
      <span className='green'>~/workspace</span> on&nbsp;
      <span className='blue'>develop</span>
      <div className='terminal-prompt'>
        <span className='prompt-symbol'>$</span>
        <Typing text='Hello, world!' />
      </div>
    </div>
  </section>
)

export default Terminal

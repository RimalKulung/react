import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  

  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const ReactElement= {
//   type:'a',
//   props:{
//       href:'https:/google.com',
//       target:'_black'
//   },
//   children:'click me to visit react'
// }

const anotherElement = (
  <a href="https:/google.com" target='_blank'>Visit Google</a>
)

const anotherUser='Chai AUR REACT'

const reactElement =React.createElement(
  'a', 
  {href:'https://google.com', target:'_blank'},
  'Click me to visit GOOGLE ',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App/>
    reactElement
)

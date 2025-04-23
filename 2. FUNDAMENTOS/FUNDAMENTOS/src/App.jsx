import './App.css'
import FirstComponent from './components/FirstComponent'

// hierarquia
import MyComponent from './components/MyComponent'

// template
import TemplateExpression from './components/TemplateExpression'

// Event
import Events from './components/Events'

function App() {

  return (
    <>
      <div className='App'>
        <h1>Hello world</h1>
        <FirstComponent />
        <TemplateExpression />
        <MyComponent />
        <Events />
      </div>
    </>
  )
}

export default App

import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.youtube.com',
        target: '_blank'
    },
    children: 'Youtube app'
}

function MyApp() {
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}
const AnotherElement = (
    <a href='https://www.google.com' target='_blank'>Vist Google </a>
)
createRoot(document.getElementById('root')).render(
    AnotherElement
)

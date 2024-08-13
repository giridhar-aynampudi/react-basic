function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerText = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement);
    */
    
    const domElement = document.createElement(reactElement.type)
    domElement.innerText = reactElement.children
    for (const prop in reactElement.props) {
        // if (prop!== 'children') {
            domElement.setAttribute(prop, reactElement.props[prop])
        // }
    }
    container.appendChild(domElement);
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.youtube.com',
        target: '_blank'
    },
    children: 'Youtube app'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);
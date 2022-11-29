import React from 'react'

function WithLogging(WrappedComponent) {
    const compName = WrappedComponent.displayName || WrappedComponent.name || 'Component'
    class HOComp extends React.Component {

        componentDidMount() { 
            console.log(`Component ${compName} is mounted`)
         }
         componentWillUnmount() {
            console.log(`Component ${compName} is going to unmount`)
          }
        render(){
            return <WrappedComponent {...this.props} /> 
        }
    }
    HOComp.displayName = `WithLogging(${compName})`
    return HOComp
}

export default WithLogging;
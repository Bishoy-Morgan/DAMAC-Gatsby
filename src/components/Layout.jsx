import React from 'react'
import Navbar from './Navbar'

const Layout = ( { children, formOpen } ) => {
    return (
        <div>
            <Navbar formOpen={formOpen}/>
            <div>
                { children }
            </div>
        </div>
    )
}

export default Layout

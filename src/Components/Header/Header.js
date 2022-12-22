import React from 'react'
import NavExpand from './NavExpand'
import NavMovile from './NavMovile'

const Header = () => {
    return (
        <header>
            <div className="header_section">
                <div className="header_main">
                    <NavMovile />
                    <NavExpand />
                </div>
            </div>
        </header>
    )
}

export default Header
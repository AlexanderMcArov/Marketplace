import React, { Suspense } from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Layout({children}) {
    return (
        <div>
            <Header />
            <Suspense fallback={<div>Loading</div>}>
                {children}
            </Suspense>
            <Footer />
        </div>
    )
}

export default Layout

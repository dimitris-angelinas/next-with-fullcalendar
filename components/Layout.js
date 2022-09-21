import React from 'react'
import {Container} from 'react-bootstrap'
import Header from "./header/header";

const Layout = ({children}) => {
    return (
        <>
            <main>
               <Header/>
                <Container className={`py-4`} >
                    { children }
                </Container>
            </main>
        </>
    )
}

export default Layout
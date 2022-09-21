import React, { useEffect, useState } from "react";

import '@fullcalendar/common/main.css'
import '@fullcalendar/timeline/main.css'
import '@fullcalendar/resource-timeline/main.css'
import '../styles/globals.css'
import Layout from "../components/Layout";
import { GlobalContext } from '../context/globalcontext'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

    const router = useRouter()

    const [user,setUser] = useState({
        username: '',
        uuid: '',
    })

    return (
        <GlobalContext.Provider value={{user, setUser}}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </GlobalContext.Provider>
    )
}

export default MyApp

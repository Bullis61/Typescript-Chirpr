import { BrowserRouter } from "";
import { useEffect } from "react";
import { GetChirps } from "../server/chirpstore";






const getChirp = async () => {
    let r = await fetch ('/api/chrips')
    let chirpsArr = await r.json()
    console.log('chirp', chirpsArr)
    getChirp()
}


useEffect(() => {
    getChirp()
}, [])
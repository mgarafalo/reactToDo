import { useEffect, useState } from "react";

export default function UseLocaleStorage(key, defaultVal) {
    const [state, setState] = useState(() => {
        let val
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        } catch (err) {
            console.log(err)
            val = defaultVal
        }
        return val
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]
}
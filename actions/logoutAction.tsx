"use server"

import { cookies } from "next/headers";


async function handleLogout() {
    try {
        const c = await cookies()
        c.set("token", "", {
            expires : new Date(0)
        })
    } catch (err) {
        console.log(err)
        return err
    }
}

export default handleLogout
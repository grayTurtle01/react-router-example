function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

export async function getVans() {
    // await sleep(1000)
    const res = await fetch("/api/vans")
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getVan(id) {
    // await sleep(1000)
    const res = await fetch(`/api/vans/${id}`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch van",
            statusText: res.statusText,
            status: res.status
        }
    }

    try {

        const data = await res.json()
        return data.vans

    }catch(err){
        console.log( '---> catch');
        throw new Error('That id does not exist ') 
    }
}


export async function getHostVans() {
    await sleep(1000)
    const res = await fetch("/api/host/vans")
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
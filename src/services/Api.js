const apiFetch = "https://produtos-json-server.christophersil5.repl.co"

async function readAll(name, api=null) {
  if(api === null){
    api = apiFetch
  }
    const res = await fetch(`${api}/${name}`)
    const data = await res.json()
    return data
}

async function create(produto, api=null){
    if(api === null){
      api = apiFetch
    }
    const res = await fetch(`${api}/computadores)`,{
        method: "post",
        body: JSON.stringify(produto),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })

    const data = await res.json()
    return data
}

export default {readAll, create};

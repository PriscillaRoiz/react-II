import axios from 'axios'

const config = {
  baseURL: `https://isbnsearch.org/isbn/${Input}`,
  timeout: 1000
}

const protocolo = axios.create(config)

export function getMensagens () {
  const endpoint = 'Input'
  return protocolo.get(endpoint)
}


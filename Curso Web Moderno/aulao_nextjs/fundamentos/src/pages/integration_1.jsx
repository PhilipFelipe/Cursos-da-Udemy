import Layout from '../components/Layout';
import { useState } from 'react'

export default function Integration() {

    const [code, setCode] = useState(1)
    const [client, setClient] = useState({})

    
    async function getClient() {
        const response = await fetch(`http://localhost:3000/api/Customers/${code}`)
        const data = await response.json()
        setClient(data)

        /* fetch(`http://localhost:3000/api/Customers/${code}`)
            .then(resp => resp.json())
            .then(data => setClient(data)) */
    }

    return (
        <Layout>
            <div>
                <input type="number" value={code} 
                onChange={event => setCode(event.target.value)} />
                <button onClick={getClient}>Get Client</button>
            </div>
            <ul>
                <li>Code: {client.id}</li>
                <li>Name: {client.nome}</li>
                <li>Email: {client.email}</li>
            </ul>
        </Layout>
    )
}
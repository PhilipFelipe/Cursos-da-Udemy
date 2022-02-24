import { useEffect, useState } from "react";
import ClientCollection from "../backend/database/clientCollection";
import Client from "../core/client";
import ClientRepository from "../core/clientRepository";
import useTableOrForm from "./useTableorForm";



export default function useClients() {
    const repo: ClientRepository = new ClientCollection();

    const { visibleTable, visibleForm, displayForm, displayTable } = useTableOrForm();

    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            displayTable()
        })
    }

    function selectedClient(client: Client) {
        setClient(client)
        displayForm()
    }

    async function deleteClient(client: Client) {
        await repo.delete(client)
        getAll()
    }

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()
    }

    function newClient(client: Client) {
        setClient(Client.empty())
        displayForm()
    }

    return {
        newClient,
        saveClient,
        deleteClient,
        selectedClient,
        getAll,
        client,
        clients,
        visibleTable,
        displayTable
    }
}
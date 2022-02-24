import Client from "../core/client";
import { editIcon, trashIcon } from "./Icons";



interface TableProps {
    clients: Client[]
    selectedClient?: (client: Client) => void
    excludedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

    const showActions = props.excludedClient || props.selectedClient

    function headerRender() {
        return (
            <tr>
                <th className="text-left p-4">Code</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                {showActions ? <th className="text-center p-4">Actions</th> : false}
            </tr>
        )
    }

    function dataRender() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showActions ? renderActios(client) : false}
                </tr>
            )
        })
    }

    function renderActios(client: Client) {
        return (
            <td className="flex justify-center">
                {props.selectedClient ? (
                    <button onClick={() => props.selectedClient?.(client)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                        `}>
                        {editIcon}
                    </button>

                ) : false}
                {props.excludedClient ? (
                    <button onClick={() => props.excludedClient?.(client)} className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>
                        {trashIcon}
                    </button>

                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-200
            `}>
                {headerRender()}
            </thead>
            <tbody>
                {dataRender()}
            </tbody>
        </table>
    )

}
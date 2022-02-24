import { useState } from "react";
import Client from "../core/client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client
    clientChanged?: (client: Client) => void
    calledOff?: () => void  //calledOff = Cancelado
}

export default function Form(props: FormProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id ? (
                <Input
                    text="Code"
                    value={id}
                    onlyRead
                    className="mb-5"
                />
            ) : false}
            <Input
                text="Name"
                value={name}
                valueChanged={setName}
                className="mb-5"
            />
            <Input
                text="Age"
                value={age}
                type="number"
                valueChanged={setAge}
            />
            <div className="flex justify-end mt-3">
                <Button color="green" className="mr-3"
                onClick={() => props.clientChanged?.(new Client(name, +age, id))}>
                    {id ? 'Change' : 'Save'}
                </Button>
                <Button color="gray" onClick={props.calledOff}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}
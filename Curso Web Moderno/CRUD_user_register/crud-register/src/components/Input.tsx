interface InputProps {
    type?: 'text' | 'number'
    text: string
    value: any
    onlyRead?: boolean
    className?: string
    valueChanged?: (value: any) => void
}  

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">
                {props.text}
            </label>
            <input
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.onlyRead}
                onChange={event => props.valueChanged?.(event.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.onlyRead ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}
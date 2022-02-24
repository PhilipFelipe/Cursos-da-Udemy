interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: (client: any) => void
}

export default function Button(props: ButtonProps) {
    const color = props.color

    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${color}-300 to-${color}-600
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}
import Layout from "../components/Layout"

export default function JSX() {
    const titulo = <h1>Jsx é um conceito central!</h1>

    function subtitle() {
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Understanding JSX">
            <div>
                {titulo}
                {subtitle()}
                <p>
                    {JSON.stringify({ nome: 'João', idade: 30 })}
                </p>
            </div>
        </Layout>
    )
}
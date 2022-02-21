import Cabecalho from "../components/Cabecalho";
import Layout from '../components/Layout'

export default function Exemplo() {
    return (
        <Layout titulo="Using Components">
            <Cabecalho title="NextJS and React" />
            <Cabecalho title="Learn next by practice!" />
        </Layout>
    )
}
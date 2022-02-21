import Layout from "../components/Layout";

//Static
/* export async function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
} */

//Dynamic
export async function getServerSideProps() {
    const code = Math.floor(Math.random() * 100)

    const resp = await fetch(`http://localhost:3000/api/Customers/${code}`)
    const data = await resp.json()

    return { props: { data } }
}

export default function Static({ data }) {
    return (
        <Layout titulo="Static Content">
            <div>ID: {data.id}</div>
            <div>Name: {data.name}</div>
            <div>E-mail: {data.email}</div>
        </Layout>
    )
}
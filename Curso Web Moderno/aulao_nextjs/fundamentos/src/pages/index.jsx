import Navigator from '../components/Navegador'

export default function Inicio() {

    // "<h1>Titulo</h1>"
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navigator text="Stylish "destiny="/estiloso" />
            <Navigator text="Example" destiny="/exemplo" cor="darkviolet" />
            <Navigator text="Jsx" destiny="/jsx" cor="crimson" />
            <Navigator text="Simple Navigation" destiny="/navigation" cor="green" />
            <Navigator text="Dynamic Navigation" destiny="/Customer/sp-2/321" cor="blue" />
            <Navigator text="Component with State" destiny="/State" cor="pink" />
            <Navigator text="API Integration #01" destiny="/integration_1" cor="skyblue" />
            <Navigator text="Static & Dynamic Content" destiny="/static" cor="#ffad87"/>
        </div>
    )
}


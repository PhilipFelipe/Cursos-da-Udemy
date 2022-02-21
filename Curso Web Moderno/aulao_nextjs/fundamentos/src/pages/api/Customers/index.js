export default function handler(req, res) {
    //res.status(204).send()
    if (req.method === "GET") {
        handleGet(req, res)
    } else {
        res.status(405).send()
    }
}

function handleGet(req, res) {
    res.status(200).json({
        id: 4,
        name: "Mary",
        email: "marymaryland@email.com"
    })
}
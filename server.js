const http = require("http")

const server = http.createServer((req, res) => {
    res.writeHead(200{'Content-Type': 'application/json'})k
    res.end(JSON.stringify(products))
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
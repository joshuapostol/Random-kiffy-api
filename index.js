const app = require('express')()
const port = process.env.PORT || 8080; 
const axios = require('axios')

app.get('/', (req, res) => {
res.send('hi')
})

app.get('/random-picture-page', async function (req, res) {
    const links = [
    "https://i.ibb.co/k9RHyvw/images-1.jpg",
    "https://i.ibb.co/sFj15Yq/images-10.jpg",
    "https://i.ibb.co/K771CC4/images-2.jpg",
    "https://i.ibb.co/HtnQ5Gy/images-3.jpg",
];  
    const url = links[Math.floor(Math.random() * links.length)];

    const img = (await axios.get(url, {
      responseType: "arraybuffer"
    })).data
    res.writeHead(200, {
      'Content-Type': 'image/png'
    })
    res.end(img)
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
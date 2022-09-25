const newsId = document.querySelector(".news-id")
const newsTxt = document.querySelector(".news-txt")
const btn = document.querySelector("button");
const container = document.querySelector(".container")
const image = document.querySelector("img")

const colors = ["red", "blue", "brown", "purple", "orange", "blueviolet", "gray", "burlywood", "darkblue", "darkcyan", "darkgreen", "darkred", "goldenrod"]

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8463d3306bmsh3d21cbf24ce20d2p112c45jsnbf193af68fea',
		'X-RapidAPI-Host': 'newsx.p.rapidapi.com'
	}
};

function genNews() {
    fetch('https://newsx.p.rapidapi.com/search?q=startup%2Ctech&limit=50&skip=0', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        const randomNews = Math.random() * response.length
        const randomId = Math.floor(randomNews)
        const randomKing = response[randomId].summary
        const randomTitle = response[randomId].title
        const poster = response[randomId].image
        console.log(randomTitle)
        console.log(randomKing)

        let randomColor = Math.floor(Math.random() * colors.length)
        container.style.backgroundColor = colors[randomColor]

        newsId.innerHTML = randomTitle
        image.setAttribute("src", poster)
        newsTxt.innerHTML = randomKing

    })

	.catch(err => console.error(err));
}

btn.addEventListener("click", genNews)


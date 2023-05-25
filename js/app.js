//Reqesting data
$.ajax("https://api.jikan.moe/v4/anime?q=")
// geting the data
.then((data) => {
    console.log(data)
})
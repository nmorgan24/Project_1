const $searchForm = $("form");




$searchForm.on("submit", event => {
    event.preventDefault();

    //generate data from the target object
    const formData = new FormData(event.target);
    console.log(formData)

    //get the value from the generated data where the name value is "Anime" (on the form)
    const anime = formData.get("anime").toLowerCase();

    const url = `https://api.jikan.moe/v4/anime?q=${anime}`

    console.log(url);
    
    const $screen = $(".screen");
    const $result = $(".result");

    //empty out the input field
    $('[name="anime"]')[0].value = "";
    const $animeImg = $(".anime-image")
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        $animeImg.html(
            `<img src=${data} alt=${data.name}>`
        );
        $result.html(`
            <div>
                <b>name:&nbsp;</b> ${data.name}
            </div>

        `)
    })
    .catch(() => {
        $result.html(`<div> there was an error...</div>`)
    });
});

        


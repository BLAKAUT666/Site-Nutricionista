document.addEventListener('click', () => {
    const title = document.getElementById('title');
    const NewTitle = "Nutriciniste";

    title.addEventListener('click', function(){
        title.innerHTML = NewTitle;
        title.style.color = "#fff";
    })
})
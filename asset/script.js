

function GetAllTheRelease(){
    fetch('https://api.github.com/repos/brotherzhafif/SMERB/releases')
    .then((res) => {
    return res.json()
}).then((data) => {
    console.log(data[0].assets)
    data[0].assets.forEach((elm, idx) => {
        document.getElementById("Assets").innerHTML += 
        `
        <li><a href='${elm.browser_download_url}'>${elm.name}</a></li>
        `
    });
}).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
});
}

window.addEventListener("load", () => {
    AOS.init();
    GetAllTheRelease();
})
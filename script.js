console.log("Running..");

function scrollToTop() {
    document.getElementById('homeSection').scrollIntoView({behavior: 'smooth'});
}

document.getElementsByClassName('logo')[0].addEventListener('click', () =>
{
    window.location.href = "index.html";
});
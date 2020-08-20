
function stackCards() {
    const scroll = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
    const firstStack = Array.from(document.getElementsByClassName("row justify-content-center project-row"));
    const secondStack = document.getElementById('third-row');
    console.log(scroll)
    if (scroll === 0) {
        console.log('first')
        firstStack.forEach(element => element.style.transform = `translateY(${-260}%)`);
        secondStack.style.transform = `translateY(${-280}%)`;
    } else if (scroll > 20 && scroll < 260) {
        console.log('second')
        firstStack.forEach(element => element.style.transform = `translateY(${-280+scroll}%)`);
        secondStack.style.transform = `translateY(${-280+(scroll/2.7)}%)`
    } else if (scroll > 260 && scroll < 660) {
        console.log('fourth')
        secondStack.style.transform = `translateY(${-280+(scroll/2.7)}%)`
        firstStack.forEach(element => element.style.transform = `translateY(${0}%)`);
    } else if (scroll > 600) {
        console.log('fifth')
        secondStack.style.transform = `translateY(${0}%)`
        firstStack.forEach(element => element.style.transform = `translateY(${0}%)`);
    }
}


window.addEventListener('scroll', (e) => {
    stackCards()
    });
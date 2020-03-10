function spanTitle() {
    let title = document.querySelector('.title');
    let text = title.innerHTML.trim();
    let letters = text.split('');
    let spans = letters.map(
        function(letter) {
        let elem = document.createElement("span");
        elem.innerText = letter;
        return elem;
        }
    );
    
    title.innerHTML = '';
    spans.forEach(span => title.appendChild(span));
}
spanTitle();
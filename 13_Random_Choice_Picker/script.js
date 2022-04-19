const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// automatically focus the textarea when you are on the screen
textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === 'Enter') {
        e.target.value = '';
        randomSelect();
    }
});

// filter method insuring that there is no empty string
// map method removing the spaces between letters and convert them into single word
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerHTML = tag;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 30;

    // this interval causing changing animation
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    // this interval remove animation after times*100 = 3000ms and pic a random tag and highlight it
    setTimeout(() => {
        clearInterval(interval);
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}
const result = document.getElementById("result text");
const inputBar = document.getElementById("inputBar");
const submitBtn = document.getElementById("submitBtn");

const startArray = ["🎉","✨","𝓼𝔀𝓪𝓰","𝓪𝔀𝓮𝓼𝓸𝓶𝓮","𝓯𝓻𝓮𝓪𝓴𝔂", "𝓼𝓲𝓵𝓵𝔂", "★", "bread", "🌟"];

const endArray = [":3", "★", "😎", "💥", "🌟"];

function sillyfyText(str) {
    let sillifiedText = "";
    let toAdd = "";
    let toAddEnd = " ";
    for(let i = 0; i < 2; i++) {
        const silly = startArray[Math.floor(Math.random() * startArray.length)]
        toAdd += silly + " ";
    }
    for(let i = 0; i < 3; i++) {
        const silly = endArray[Math.floor(Math.random() * endArray.length)]
        toAddEnd += silly + " ";
    }
    sillifiedText = toAdd.trim() + " " + str + " " + toAddEnd.trim()
    return sillifiedText
}

submitBtn.addEventListener('click', function() {
    const yeah = document.getElementById("yeah");
    yeah.load();
    result.textContent = sillyfyText(inputBar.value);
    yeah.play();
});

window.addEventListener('load', function() {
    const hi = document.getElementById("hi");
    hi.load()
    hi.play()
})

window.addEventListener('beforeunload', function() {
    const bye = document.getElementById("bye");
    bye.load()
    bye.play()
})

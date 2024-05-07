const smallCups = document.querySelectorAll(".small-cup");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const left = document.getElementById("left");
const text = document.querySelector(".text");



smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index));
});

function highlightCups(index) {
    if (index === 11 && smallCups[index].classList.contains("full")) {
        index--;
    } else if (smallCups[index].classList.contains("full") && !smallCups[index].nextElementSibling.classList.contains("full")) {
        index--;
    }

    smallCups.forEach((cup, index2) => {
        index2 <= index ? cup.classList.add("full") : cup.classList.remove("full");
    });


    updateBigCup();
}

function updateBigCup() {
    const filledCups = document.querySelectorAll(".small-cup.full").length;
    const totalCups = smallCups.length;

    if (filledCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(filledCups / totalCups) * 300}px`;
        let percent = ((filledCups / totalCups) * 100).toFixed(1);
        console.log(percent)
        percentage.innerText = `${percent}%`;

    }
    
    if (filledCups === totalCups) {
        left.style.visibility = "hidden";
        left.style.height = 0;
        text.innerText = "Congratulations!"
    } else {
        left.style.visibility = "visible";
        liters.innerText = `${3 - (250 * filledCups) / 1000}L`
        text.innerText = "Select how many glasses of water you have drunk"
    }
    
    
}
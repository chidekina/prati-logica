
function parOuImpar() {
    const answer1 = document.getElementById('task1');
    if (answer1) {
        console.log(answer1.value);
    } else {
        console.error("Element with ID 'task1' not found.");
    }
}
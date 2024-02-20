function toggleAnswer(element) {
    // Check if the clicked question is already active
    const isActive = element.classList.contains('active');

    // Remove 'active' class from all questions and answers
    let questions = document.querySelectorAll('.question');
    questions.forEach(q => {
        q.classList.remove('active');
        q.querySelector('.answer').style.maxHeight = '0';
    });

    // If the clicked question was not already active, toggle 'active' class and show its answer
    if (!isActive) {
        element.classList.add('active');
        let answer = element.querySelector('.answer');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}
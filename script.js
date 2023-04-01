document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('#inputField');
    const responseField = document.querySelector('#responseField');
    const submitButton = document.querySelector('#submitButton');

    const previousQuestions = [
        { question: "Qual é a capital do Brasil?", answer: "Brasília" },
        // Adicione mais perguntas e respostas aqui
    ];

    submitButton.addEventListener('click', () => {
        const question = inputField.value;

        const foundQuestion = previousQuestions.find(q => q.question.toLowerCase() === question.toLowerCase());

        if (foundQuestion) {
            responseField.innerText = foundQuestion.answer;
        } else {
            responseField.innerText = "Desculpe, não temos essa resposta no momento.";
        }
    });
});

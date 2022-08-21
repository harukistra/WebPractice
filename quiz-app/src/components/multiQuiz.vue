<template>
  <div id="quizz">
    <div id="start-button-area">
      <button id="start-button" v-on:click="reloadQuiz(quiznum)">
        {{ starttext }}
      </button>
    </div>
    <div id="quiz-text"></div>
    <div id="question-area">
      <div id="question"></div>
    </div>
    <div id="button-area">
      <button id="choice-1" v-on:click="choose(0)"></button>
      <button id="choice-2" v-on:click="choose(1)"></button>
      <button id="choice-3" v-on:click="choose(2)"></button>
    </div>

    <div id="feedback-area"></div>
    <div id="nextbutton-area">
      <button id="next-button" v-on:click="nextquiz()"></button>
    </div>
  </div>
</template>

<script>
const quiztext = document.getElementById("quiz-text")
const question = document.getElementById("question")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback-area")
const nextbutton = document.getElementById("next-button")
let quiznum = 0

export default {
  data() {
    return {
      starttext: "are you ready?",
      choices: [
        {
          quiz: "答えはどれでしょう？",
          text: "Here comes the question.",
          choices: [
            {
              text: "おすし",
              feedback: "残念、お寿司ではございません。",
              isCorrect: false,
            },
            {
              text: "すめし",
              feedback: "正解、酢飯って独特な美味しさがありませんか？",
              isCorrect: true,
            },
            {
              text: "さしみ",
              feedback: "残念、そっちではありません！！",
              isCorrect: false,
            },
          ],
        },
        {
          quiz: "答えはどれでしょう？",
          text: "Here comes the question.",
          choices: [
            {
              text: "おすし",
              feedback: "残念、お寿司ではございません。",
              isCorrect: false,
            },
            {
              text: "すめし",
              feedback: "正解、酢飯って独特な美味しさがありませんか？",
              isCorrect: true,
            },
            {
              text: "さしみ",
              feedback: "残念、そっちではありません！！",
              isCorrect: false,
            },
          ],
        },
        {
          quiz: "答えはどれでしょう？",
          text: "Here comes the question.",
          choices: [
            {
              text: "おすし",
              feedback: "残念、お寿司ではございません。",
              isCorrect: false,
            },
            {
              text: "すめし",
              feedback: "正解、酢飯って独特な美味しさがありませんか？",
              isCorrect: true,
            },
            {
              text: "さしみ",
              feedback: "残念、そっちではありません！！",
              isCorrect: false,
            },
          ],
        },
      ],
    }
  },
  methods: {
    reloadQuiz(quiznum) {
      const quiz = this.choices[quiznum]
      quiztext.textContent = "Q" + quiz.text
      question.textContent = quiz.quiz
      choice1.textContent = quiz.choices[0].text
      choice2.textContent = quiz.choices[1].text
      choice3.textContent = quiz.choices[2].text
      feedback.textContent = ""

      nextbutton.classList.add("hidden")
    },
    choose(choicenum) {
      const choice = this.choices[quiznum].choices[choicenum]
      feedback.textContent = choice.feedback

      if (choice.isCorrect) {
        if (quiznum < this.choices.length - 1) {
          nextbutton.classList.remove("hidden")
        }
      }
    },
    nextquiz() {
      quiznum += 1
      this.reloadQuiz(quiznum)
      if (quiznum > 2) {
        quiztext.textContent = "the end !!!"
      }
    },
  },
}
</script>

<style></style>

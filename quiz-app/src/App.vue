<template>
  <div class="question-area">
    <quizApp />
  </div>
</template>

<script>
// import multiQuiz from "@/components/multiQuiz.vue"
import quizApp from "@/components/quiz-app.vue"

export default {
  components: {
    quizApp: quizApp,
},

  data() {
    return {
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
    }
  },
}
</script>

<style></style>

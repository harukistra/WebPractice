<template id="all">
<div id="black-bg"></div>
<div class="startBtn-area"> <!-- これを押すとplayがfalseとなり、開始される。 -->
    <div 
    id="startBtn"
    v-if="play"
    v-on:click="startGame()">{{ start }}</div>
    <div v-else></div>
</div>

<div id="app" v-if="play"></div> <!-- playがtrueの間は非表示、falseで表示-->
<div id="app" v-else>

    <!-- 問題番号が2以下の時、クイズを表示。3になるとendを表示 -->
    <h2 id="quiz-sentence" v-if="quiznum < quizzes.length-1">
    Q{{ quiznum+1 }}. {{ quizzes[quiznum].text }}</h2>  
    <h2 id="quiz-sentence" v-else>{{ end }}<br>
    正解数は{{ count }}/{{ quizzes.length - 1}}</h2>


    <!-- 回答を押すとisActiveがfalseに変わり、押せなくなる。代わりにnextボタンを表示 -->
    <h3 id="question">{{ quizzes[quiznum].sentence }}</h3>
    <div class="container">
        <div id="choiceBtn"       
        v-for="(choice, i) in quizzes[quiznum].choices"
        v-bind:key="i"
        v-on:click="choiced(choice)"
        v-if="isActive">
        {{ choice.text }}
        </div>
        <div id="choicebutton" v-else></div>
       
    <!-- 回答を押すと表示される。これを押すと再びisActiveがtrueになり消え、次の問へ -->
    </div>
    <div id="feedback">{{ feedback }}</div>
    <div id="nextBtn" v-bind:class="{nextBtn:isActive}">
        <button 
         v-on:click="reloadQuiz()">{{ next }}</button>
    </div>

    <div id="result" 
    v-if="quiznum == 3"
    v-on:click="startGame()"
    >{{ gohome }}</div>
</div>
</template>

<script>

export default {
    data() {
        return {
            feedback: "",     //正解か不正解を返すもの
            quiznum: 0,       //問題番号
            count: 0,                      //正解数のカウント
            next: "next",              //ボタンの上の表示
            isActive: true,          //表示するか否かを決める指標
            play: true,  
            start: "click to start",    
            end: "終了！",              //最後に表示するもの
            gohome: "return to start",
            quizzes: [                 //クイズの内容
                {
                text: "⓵⓶⓷ = ?",
                sentence: "〇〇⓵〇〇⓶〇⓷〇〇〇〇〇 = !",
                choices: [
                    {
                        text: "a: たにし",
                        isCorrect: false,
                        feedback: "残念",
                    },
                    {
                        text: "b: すめし",
                        isCorrect: true,
                        feedback: "正解",
                    },
                    {
                        text: "c: たこす",
                        isCorrect: false,
                        feedback: "残念",
                    },
                ],
            },
            {
                text: "⓵⓶⓷⓸⓺ = ?",
                sentence: "S⓵⓹W⓹F⓺  JF⓵⓶⓵JJ⓶⓺⓸N⓷  ⓺⓺⓶(F)W",
                choices: [
                    {
                        text: "MacBook",
                        isCorrect: false,
                        feedback: "残念",
                    },
                    {
                        text: "Windows",
                        isCorrect: true,
                        feedback: "正解",
                    },
                    {
                        text: "Saizeria",
                        isCorrect: false,
                        feedback: "残念",
                    },
                ],
            },
            {
                text: " F - O = ?",
                sentence: "H + N = O, F + N = S, N + O = P",
                choices: [
                    {
                        text: "F",
                        isCorrect: false,
                        feedback: "残念",
                    },
                    {
                        text: "G",
                        isCorrect: false,
                        feedback: "残念",
                    },
                    {
                        text: "H",
                        isCorrect: true,
                        feedback: "正解",
                    },
                ],
            },
            {}, //空の余分な要素を追加
            ]
        }
    },

    methods: {
        choiced(choice) {
            this.feedback = choice.feedback
            console.log(choice.isCorrect)
            this.isActive = !this.isActive
            if(choice.isCorrect) {
                this.count += 1      
            }
        },
        reloadQuiz() {
            // nextbutton.classList.remove('show')
            this.isActive = !this.isActive
            this.quiznum += 1
            this.feedback = ""
        },
        startGame() {
            this.count = 0
            this.quiznum = 0
            this.play = !this.play
        }
    }, 

}
</script>

<style>

#black-bg {
    background-color: #000;
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    z-index: -10;
}
.startBtn-area {
    box-shadow: 0 3px 10px rgba(32, 72, 182, 0.5);
}
.startBtn-area:hover {
    cursor: pointer;
}
#startBtn {
    visibility: visible;
    background-color: aliceblue;
    text-align: center;
    margin-right: 40%;
    margin-left: 40%;
    margin-top: 10%;
    box-shadow: 0 3px 10px rgba(57, 99, 177, 0.5);
}
#app {
    font-family:  serif;
    /* background-color: #000; */
    width: 100%;
    height: 100vh;
}

#quiz-sentence {
    margin-top: 30px;
    text-align: center;
    background-color: aliceblue;
    padding: 0%;
    margin-right: 40%;
    margin-left: 40%;
    border-radius: 100px;

}
#question {
    margin-top: 100px;
    text-align: center;
    background-color: aliceblue;
    font-size: 2.0rem;
    margin-right: 10%;
    margin-left: 10%;
    border-radius: 100px;

}
.container {
    margin-top: 100px;
    text-align: center;
    display: block;
    margin-right: 40%;
    margin-left: 40%;
    
}
#choiceBtn {
    font-family: serif;
    justify-content: space-between;
    background-color: aliceblue;
    margin: 2% 2%;
    border-radius: 100px;
}
#choiceBtn:hover {
    cursor: pointer;
}
.choicebutton {
    visibility: visible;
}
.choicebutton.isActive {
    visibility: hidden;
}

#feedback {
    text-align: center;
    background-color: aliceblue;
    margin-right: 40%;
    margin-left: 40%;
    border-radius: 100px;
}

#nextBtn {
    margin-top: 5%;
    text-align: center;
}
.nextBtn {
    text-align: center;
    padding-right: 30%;
    padding-left: 30%;
    visibility: hidden;
}
.nextBtn.isActive {
    visibility: visible;
}


#result {
    background-color: aliceblue;
    visibility: visible;
    text-align: center;
    margin-right: 40%;
    margin-left: 40%;
    border-radius: 100px;
}
#result:hover {
    cursor: pointer;
}
</style>
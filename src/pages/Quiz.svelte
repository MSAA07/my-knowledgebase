<script>
  import { quizQuestions } from '../data/quiz.js';
  import { router } from '../stores/router.js';

  let started = false;
  let currentIndex = 0;
  let selectedIndex = null;
  let score = 0;
  let showScore = false;

  const totalQuestions = quizQuestions.length;

  $: currentQuestion = quizQuestions[currentIndex];
  $: isAnswered = selectedIndex !== null;
  $: correctIndex = currentQuestion?.correctIndex ?? -1;

  function startQuiz() {
    started = true;
  }

  function selectAnswer(index) {
    if (isAnswered) return;
    selectedIndex = index;
    if (index === correctIndex) {
      score += 1;
    }
  }

  function nextQuestion() {
    if (!isAnswered) return;
    if (currentIndex < totalQuestions - 1) {
      currentIndex += 1;
      selectedIndex = null;
    } else {
      showScore = true;
    }
  }

  function redoQuiz() {
    started = true;
    currentIndex = 0;
    selectedIndex = null;
    score = 0;
    showScore = false;
  }

  function returnHome() {
    router.navigate('/');
  }
</script>

<div class="quiz">
  <section class="quiz-hero">
    <h1 class="quiz-title">Q&A Quiz</h1>
    <p class="quiz-subtitle">Test your IT project management knowledge in a few minutes.</p>
    {#if !started}
      <button class="primary-button" type="button" on:click={startQuiz}>
        Start the Quiz
      </button>
    {/if}
  </section>

  {#if started}
    {#if showScore}
      <section class="score-card">
        <h2 class="score-title">You scored {score} / {totalQuestions}</h2>
        <p class="score-subtitle">Want to try again or return home?</p>
        <div class="score-actions">
          <button class="secondary-button" type="button" on:click={redoQuiz}>
            Redo Quiz
          </button>
          <button class="ghost-button" type="button" on:click={returnHome}>
            Return Home
          </button>
        </div>
      </section>
    {:else}
      <section class="question-wrapper">
        <div class="question-progress">
          Question {currentIndex + 1} of {totalQuestions}
        </div>

        {#key currentQuestion.id}
          <div class="question-card">
            <h2 class="question-text">{currentQuestion.question}</h2>
            <div class="answer-grid">
              {#each currentQuestion.options as option, index}
                <button
                  type="button"
                  class="answer-button"
                  class:selected={selectedIndex === index}
                  class:correct={isAnswered && index === correctIndex}
                  class:incorrect={isAnswered && selectedIndex === index && index !== correctIndex}
                  disabled={isAnswered}
                  on:click={() => selectAnswer(index)}
                >
                  {option}
                </button>
              {/each}
            </div>

            {#if isAnswered}
              <details class="explanation" open>
                <summary>Explanation</summary>
                <p>{currentQuestion.explanation}</p>
              </details>
            {/if}
          </div>
        {/key}

        <div class="question-actions">
          <button class="primary-button" type="button" disabled={!isAnswered} on:click={nextQuestion}>
            {currentIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </section>
    {/if}
  {/if}
</div>

<style>
  .quiz {
    animation: fadeIn 0.5s ease;
  }

  .quiz-hero {
    text-align: center;
    padding: 3rem 1rem 2rem;
  }

  .quiz-title {
    font-size: 2.6rem;
    font-weight: 800;
    margin: 0 0 0.5rem;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .quiz-subtitle {
    margin: 0 0 1.5rem;
    color: var(--color-text-secondary);
  }

  .primary-button,
  .secondary-button,
  .ghost-button {
    font-weight: 600;
    border-radius: 999px;
    padding: 0.65rem 1.6rem;
    border: 1px solid transparent;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }

  .primary-button {
    background: var(--gradient-accent);
    color: var(--color-bg);
  }

  .primary-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .secondary-button {
    background: var(--color-surface);
    color: var(--color-text);
    border-color: var(--color-border);
  }

  .ghost-button {
    background: transparent;
    color: var(--color-text-secondary);
    border-color: var(--color-border);
  }

  .primary-button:focus-visible,
  .secondary-button:focus-visible,
  .ghost-button:focus-visible,
  .answer-button:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  .question-wrapper {
    padding: 0 1rem 4rem;
  }

  .question-progress {
    text-align: center;
    font-size: 0.9rem;
    color: var(--color-text-tertiary);
    margin-bottom: 1rem;
  }

  .question-card {
    background: var(--color-surface);
    border-radius: 1rem;
    border: 1px solid var(--color-border);
    padding: 2rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    animation: slideIn 0.35s ease;
  }

  .question-text {
    margin: 0 0 1.5rem;
    font-size: 1.4rem;
  }

  .answer-grid {
    display: grid;
    gap: 0.75rem;
  }

  .answer-button {
    text-align: left;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    color: var(--color-text);
    padding: 0.85rem 1rem;
    border-radius: 0.75rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .answer-button:hover:not(:disabled) {
    border-color: var(--color-accent);
    transform: translateY(-2px);
  }

  .answer-button.correct {
    border-color: rgba(34, 197, 94, 0.8);
    background: rgba(34, 197, 94, 0.18);
    box-shadow: 0 0 18px rgba(34, 197, 94, 0.35);
  }

  .answer-button.incorrect {
    border-color: rgba(248, 113, 113, 0.8);
    background: rgba(248, 113, 113, 0.15);
  }

  .answer-button.selected.correct {
    transform: scale(1.02);
  }

  .explanation {
    margin-top: 1.5rem;
    padding: 1rem 1.25rem;
    border-radius: 0.75rem;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
  }

  .explanation summary {
    cursor: pointer;
    color: var(--color-text);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .question-actions {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .score-card {
    margin: 2rem auto 4rem;
    max-width: 520px;
    text-align: center;
    background: var(--color-surface);
    border-radius: 1rem;
    border: 1px solid var(--color-border);
    padding: 2.5rem 2rem;
  }

  .score-title {
    margin: 0 0 0.75rem;
    font-size: 2rem;
  }

  .score-subtitle {
    margin: 0 0 2rem;
    color: var(--color-text-secondary);
  }

  .score-actions {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 640px) {
    .quiz-title {
      font-size: 2rem;
    }

    .question-card {
      padding: 1.5rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .quiz,
    .question-card {
      animation: none;
    }

    .answer-button,
    .primary-button,
    .secondary-button,
    .ghost-button {
      transition: none;
    }
  }
</style>

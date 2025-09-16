<script>
  import { fly, slide } from 'svelte/transition';
  import { Configuration, Answer } from './configuration';
  import Anser from './answer.svelte';

  let index = $state(0); // 当前页码
  let data = $state([]); // 答案出现次数

  const showAnswer = $derived(index === Configuration.length); // 是否显示答案
  const current = $derived(Configuration[index]); // 当前问题
  const answer = $derived.by(() =>
    Array.from(new Set(data)).map((key) => Answer[key])
  );

  // 下一页
  const next = () => {
    if (index === 0) index += 1;
  };

  // 点击答案
  const click = (value) => {
    data.push(value);
    index += 1;
  };

  // 重置
  const reset = () => {
    data = [];
    index = 0;
  };
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
{#if current}
  {#key index}
    <div
      class="container"
      style:background-image="url({current.background})"
      onclick={next}
    >
      <div class="title" in:fly={{ x: -100, duration: 500 }}>
        {current.title}
      </div>
      {#if index > 0 && current?.options?.length > 0}
        <div class="question" in:slide={{ duration: 400 }}>
          {#each current.options as option, i}
            <span
              class="option"
              style="animation-delay: {i * 0.1}s"
              ontouchend={() => click(option.value)}
            >
              {option.title}
            </span>
            <br />
          {/each}
        </div>
      {/if}
    </div>
  {/key}
{/if}
{#if showAnswer}
  <Anser {answer} onReset={reset} />
{/if}

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :global {
    .container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .title {
      font-size: 24px;
      color: white;
      margin: 100px 43px 75px 43px;
      font-weight: 500;
    }

    .section {
      margin-bottom: 23px;
    }

    .description {
      margin-left: 43px;
      font-size: 18px;
    }

    .question {
      margin-left: 43px;
    }

    .option {
      display: inline-block;
      padding: 6px 0;
      cursor: pointer;
      opacity: 0;
      animation: fadeInUp 0.5s forwards;
      transition: all 0.3s ease-in-out;
    }

    .option:active {
      position: relative;
      color: gray;
      top: 2px;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
    }
  }
</style>

<script>
  import { fly, slide } from 'svelte/transition';
  import { Configuration, Answer } from './configuration';
  import Anser from './answer.svelte';

  const ending = 5; // 结束页码

  let index = $state(0); // 当前页码
  let data = $state([]); // 答案出现次数
  let showAnswer = $state(false); // 是否显示答案

  const showEnding = $derived(index === ending);
  const current = $derived(Configuration[index]); // 当前问题

  // 答案
  const answer = $derived.by(() =>
    Array.from(new Set(data)).map((key) => Answer[key])
  );

  // 结算内容
  const endingCurrent = $derived.by(
    () =>
      showEnding &&
      Array.from(new Set(data))
        .sort()
        .map((key) => current.options.filter(({ value }) => value === key))
        .flat()
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

  // 预览答案
  const preview = () => {
    showAnswer = true;
  };

  // 重置
  const reset = () => {
    data = [];
    index = 0;
    showAnswer = false;
  };
</script>

{#if current && !showAnswer}
  {#key index}
    <div
      class="container"
      style:background-image="url({current.background})"
      ontouchend={next}
    >
      <div class="title" in:fly={{ x: -100, duration: 500 }}>
        {current.title}
      </div>
      {#if index > 0 && current?.options?.length > 0 && !showEnding}
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
      <!-- 结算页 -->
      {#if showEnding}
        <div class="question" in:slide={{ duration: 400 }}>
          {#each endingCurrent as option, i}
            <span class="option-plain" style="animation-delay: {i * 0.1}s">
              {option.title}
            </span>
            <br />
          {/each}
        </div>
        <div class="preview">
          <span ontouchend={preview}>查看详情 </span>
        </div>
      {/if}
    </div>
  {/key}
{/if}
<Anser show={showAnswer} {answer} onReset={reset} />

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
      position: relative;
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

    .option-plain {
      display: inline-block;
      padding: 6px 0;
      opacity: 0;
      animation: fadeInUp 0.5s forwards;
    }

    .option:active {
      position: relative;
      color: #ff7200;
      top: 2px;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
    }

    .preview {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 24px;
      font-weight: 500;
      text-decoration: underline;
    }
  }
</style>

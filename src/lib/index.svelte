<script>
  import { fly, slide } from 'svelte/transition';
  import { Configuration, Answer } from './configuration';
  import Anser from './answer.svelte';

  let index = $state(0); // 当前页码
  let data = $state([]); // 答案出现次数
  let imagesPreloaded = $state(false); // 图片是否预加载完成

  // 预加载所有背景图片
  const preloadImages = () => {
    const imagePaths = [
      ...Configuration.map((item) => item.background),
      ...Object.values(Answer).map((item) => item.background)
    ];

    let loadedCount = 0;
    const totalImages = imagePaths.length;

    imagePaths.forEach((path) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          imagesPreloaded = true;
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          imagesPreloaded = true;
        }
      };
      img.src = path;
    });
  };

  // 组件挂载时开始预加载图片
  $effect(() => {
    preloadImages();
  });

  const showAnswer = $derived(index === Configuration.length); // 是否显示答案
  const current = $derived(Configuration[index]); // 当前问题
  const answer = $derived.by(() => {
    return Array.from(new Set(data)).map((key) => Answer[key]);
  });

  // 下一页
  const next = () => {
    if (index === 0) index += 1;
  };

  // 点击答案
  const click = (value) => {
    data.push(value);
    index += 1;
  };
</script>

<!-- 显示加载状态 -->
{#if !imagesPreloaded}
  <div class="loading">
    <p>加载中...</p>
  </div>
{/if}

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
{#if current && imagesPreloaded}
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
              onclick={() => click(option.value)}
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
{#if showAnswer && imagesPreloaded}
  <Anser {answer} />
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

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 18px;
    color: white;
    background-color: #242424;
  }

  :global {
    .container {
      display: flex;
      flex-direction: column;
      height: 100vh;
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
    }
  }
</style>

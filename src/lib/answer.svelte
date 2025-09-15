<script>
  import { fly } from 'svelte/transition';

  let { answer = [] } = $props();
  let index = $state(0);
  let previousIndex = $state(0);

  // 预加载所有答案背景图片
  $effect(() => {
    if (answer.length > 0) {
      answer.forEach((item) => {
        const img = new Image();
        img.src = item.background;
      });
    }
  });

  let current = $derived.by(() => {
    if (index < answer.length) return answer[index];
    else return answer[answer.length - 1];
  });

  $effect(() => {
    const interval = setInterval(() => {
      previousIndex = index;
      index += 1;
      if (index >= answer.length) {
        clearInterval(interval);
        index = answer.length - 1;
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

{#key index}
  <div
    class="container"
    style:background-image="url({current.background})"
    in:fly={{ y: 100, duration: 600 }}
    out:fly={{ y: -100, duration: 600 }}
  >
    <div class="title section" in:fly={{ x: -50, duration: 500, delay: 200 }}>
      {current.title}
    </div>
    <div class="description" in:fly={{ x: 50, duration: 500, delay: 400 }}>
      {current.description}
    </div>
  </div>
{/key}

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
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
    color: white;
    font-size: 18px;
  }
</style>

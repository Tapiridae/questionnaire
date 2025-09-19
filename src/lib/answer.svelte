<script>
  import { fly, fade } from 'svelte/transition';
  import CountImage from '/count.jpg';

  let { answer = [], onReset, show } = $props();
  let index = $state(0);

  const end = $derived(index >= answer.length); // 是否结束

  const current = $derived.by(() => {
    if (index < answer.length) return answer[index];
    else return answer[answer.length - 1];
  });

  const next = () => {
    index += 1;
    // if (index >= answer.length) {
    //   onReset();
    //   index = 0;
    // }
  };
</script>

{#if show}
  {#if !end}
    {#key index}
      <div
        class="container"
        style:background-image="url({current.background})"
        ontouchend={next}
        in:fly={{ y: 100, duration: 600 }}
        out:fade
      >
        <div
          class="title section ending-text"
          in:fly={{ x: -50, duration: 500, delay: 200 }}
        >
          {current.title}
        </div>
        <div class="content" in:fly={{ y: 50, duration: 500, delay: 400 }}>
          <p>{current.content.title}</p>
          <p>{current.content.description}</p>
        </div>
      </div>
    {/key}
  {:else}
    <div
      class="container"
      style:background-image="url({CountImage})"
      in:fly={{ y: 100, duration: 600 }}
      out:fade
    >
      <div class="end-title" in:fly={{ y: -50, duration: 500, delay: 200 }}>
        谢谢参与
      </div>
    </div>
  {/if}
{/if}

<style>
  .content {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    padding: 2rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .content p:nth-child(1) {
    font-size: 24px;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .content p:nth-child(2) {
    font-size: 14px;
    margin-bottom: 2rem;
  }

  .end-title {
    display: flex;
    justify-content: center;
    margin-top: 80px;
    align-items: start;
    width: 100%;
    height: 100%;
    font-size: 32px;
    font-weight: 500;
  }
</style>

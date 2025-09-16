<script>
  import { fly, fade } from 'svelte/transition';

  let { answer = [], onReset } = $props();
  let index = $state(0);

  let current = $derived.by(() => {
    if (index < answer.length) return answer[index];
    else return answer[answer.length - 1];
  });

  const next = () => {
    index += 1;
    if (index >= answer.length) {
      onReset();
      index = 0;
    }
  };
</script>

{#key index}
  <div
    class="container"
    style:background-image="url({current.background})"
    ontouchend={next}
    in:fly={{ y: 100, duration: 600 }}
    out:fade
  >
    <div class="title section" in:fly={{ x: -50, duration: 500, delay: 200 }}>
      {current.title}
    </div>
    <div class="description" in:fly={{ x: 50, duration: 500, delay: 400 }}>
      {current.description}
    </div>
  </div>
{/key}

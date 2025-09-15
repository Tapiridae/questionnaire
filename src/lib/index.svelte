<script>
  let index = $state(0);

  const increment = () => {
    index += 1;
  };
</script>

<button onclick={increment}>
  currentPage is {index}
</button>

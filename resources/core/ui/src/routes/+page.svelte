<script lang="ts">
    import { onMount } from "svelte";

  onMount(() => {
    window.mango.event.emitPlayer("Auth:Something");
  })
</script>

<p>Root page</p>
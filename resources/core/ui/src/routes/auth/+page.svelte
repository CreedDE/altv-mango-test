<script lang="ts">
    import { onMount } from "svelte";

  onMount(async () => {
    window.mango.event.emitPlayer("Auth:Something");
  })
</script>

<div>
  <p>Auth Page from SvelteKit</p>
</div>
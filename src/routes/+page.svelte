<script>
  import PageTitle from '$lib/components/ui-elements/PageTitle.svelte'
  import StatusPill from '$lib/components/ui-elements/StatusPill.svelte'
  import FloatingLabel from '$lib/components/ui-elements/FloatingLabelInputBox.svelte'

  let values = {}

  function receiveEvent({ detail }) {
    values[detail.name] = detail.value
  }

  let firstName = ''
</script>
<PageTitle>
  Welcome to Expenser
</PageTitle>

<StatusPill status="in process" />
<p>Expenser is an expense reporting app that you'll build &mdash; all while learning Svelte and SvelteKit.</p>

<!-- <FloatingLabel name="first-name" label="First name" on:first-name={receiveEvent}/> -->
<!-- <FloatingLabel name="last-name" label="Last name" on:last-name={receiveEvent}/> -->

<FloatingLabel name="first-name" label="First name" bind:myValue={firstName}/>

{#each Object.entries(values) as [key, value]}
{key} :: {value} <br />
{/each}

firstName: {firstName}
<script>
  export let status

  $: className = status.replace(' ', '-')
</script>

<div class='pill {className}'>{status}</div>

<style>
  .pill {
    display: inline-block;
    border-radius: 50px;
    border: none;
    text-align: center;
    padding: 0 14px 4px 14px;
    height: 22px;
    line-height: 22px;
    font-variant: small-caps;
  }

  .in-process {
    background-color: #9A2FAE;
    color: white;
  }

  .submitted {
    background-color: #42B15B;
    color: white;
  }

  .paid {
    background-color: #1FAAF1;
    color:black
  }

  .needs-review {
    background-color: red;
    color: white;
  }
</style>
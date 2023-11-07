<script>
  import PageTitle from '$lib/components/ui-elements/PageTitle.svelte'
  import ExpenseStatusForm from './ExpenseStatusForm.svelte'
  export let data
  const { expenseItemStatuses } = data

  // TODO
  function newReason() {
    alert('new reason')
  }

  // TODO
  function editReason(id) {
    // get the appropriate expoenseItemStatus
    const foundExpenseItemStatus = expenseItemStatuses.find(expenseItemStatus => expenseItemStatus.id == id)
    alert(foundExpenseItemStatus.description)

  }
</script>

<PageTitle>
  Expense Report Item Statuses <img class="lg-icon" src="../ui-images/add.png" alt="Add" on:click={newReason}/>
</PageTitle>

<div class="grid-container">
 <!-- Existing expense item statuses -->
  <div class="border-black border-3">
    {#each expenseItemStatuses as expenseItemStatus}
      <p class="expense-item" class:inactive = {!expenseItemStatus.active} on:click={() => editReason(expenseItemStatus.id)}>{expenseItemStatus.description}</p>
    {/each}
  </div>
 
  <div class="border-black border-3">
    <ExpenseStatusForm />
  </div>
</div>

<style>
  img.lg-icon {
    display: inline;
    width: 2rem;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    width: 80%;
    border: 1px solid pink;
  }

  .expense-item:hover {
    cursor: pointer;
  }

  .inactive {
    color: silver;
  }

  .inactive:hover {
    cursor: none;
  }

  .inactive::before {
    content: "";
    display: inline-block;
    width: 1rem; /* or the size of your image */
    height: 1rem; /* or the size of your image */
    margin-left: -1.5rem;
    margin-right: 8px;
    background-image: url('../ui-images/blocked.png');
    background-size: cover; /* ensures the image covers the entire content area */
    background-repeat: no-repeat;
  }

  .lg-icon:hover {
    cursor: pointer;
  }

</style>
<script>
  export let name
  export let id = name
  export let label
  export let required = false
  export let myValue
  let inputSize = 20
</script>

<div class="input-wrapper">
  <input type="text" id={id} name={name} bind:value={myValue} placeholder=" " on:input={e => inputSize = Math.max(myValue.length, 20)} size={inputSize} required={required}/>

  <label for="{name}">{label}</label>
</div>

<style>
  /* Styles for floating label */
.input-wrapper {
  position: relative;
  margin-bottom: 2rem;
}

.input-wrapper input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 8px 12px; /* Adjust padding here */
  font-size: 16px;
  border-radius: 4px;
  transition: all 0.3s;
}

.input-wrapper input:not(:placeholder-shown) + label,
.input-wrapper input:focus + label {
  top: -12px;
  font-size: .7rem;
  color: #333;
  width: auto;
}

.input-wrapper label {
  position: absolute;
  left: 12px;
  top: 50%; /* To center it vertically */
  transform: translateY(-50%); /* To center it vertically */
  padding: 0 5px;
  background: #fff;
  transition: all 0.3s;
  pointer-events: none; /* So clicks pass through to the input */
  color: #888;
  font-size: .8rem;
}

/* This makes sure that the label floats when there's content in the input */

.input-wrapper input:not(:placeholder-shown) + label {
  top: 0;
  transform: translateY(-100%);
  font-size: .6rem;
  width: auto;
}

input[type="text"] {
  width: auto;
}
</style>
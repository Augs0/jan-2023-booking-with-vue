<template>
  <section>
    <h1>Welcome to Pansy Tours!</h1>
    <h2>Book a tour with one of our guides</h2>
    <div>
      <form method="POST">
        <label for="name">Name</label>
        <input id="name" type="text" />
        <label for="tour">Tour</label>
        <select name="tour" id="tour">
          <option value="tour one">Tour One</option>
          <option value="tour two">Tour Two</option>
          <option value="tour three">Tour Three</option>
        </select>
        <label for="guide">Guide</label>
        <select name="tour" id="tour">
          <option value="guide one">Guide One</option>
          <option value="guide two">Guide Two</option>
          <option value="guide three">Guide Three</option>
        </select>
      </form>
    </div>
  </section>
</template>

<style scoped>
h2 {
  font-size: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  transform: skewX(5deg);
}

form input,
form select {
  margin: 1rem;
  padding: 20px;
  font-size: 20px;
}

form label {
  background-color: black;
  width: max-content;
  padding: 5px;
  font-size: 1.3rem;
}

div {
  background-color: #c060a1;
  max-width: 80%;
  margin: 1rem auto;
  transform: skewX(-5deg);
}

@media (min-width: 768px) {
  form {
    transform: skewX(10deg);
  }
  div {
    background-color: #c060a1;
    max-width: 80%;
    margin: 1rem auto;
    transform: skewX(-10deg);
  }
}
</style>

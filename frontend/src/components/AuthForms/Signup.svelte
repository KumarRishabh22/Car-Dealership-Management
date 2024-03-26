<script>
  let email = "";
  let password = "";

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Make a POST request to the backend API endpoint for user registration
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      // Extract the JSON data from the response
      const data = await response.json();

      // Handle the registration response
      console.log('Signup successful:', data);

      // Redirect the user to the login page
      window.location.href = '/login';
    } catch (error) {
      console.error('Error signing up:', error);
      // Display an error message to the user
      alert('Failed to sign up. Please try again.');
    }
  };
</script>

<h2>Signup</h2>
<form on:submit={handleSubmit}>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" bind:value={email} required>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" bind:value={password} required>
  <button type="submit">Signup</button>
</form>

<style>
  form {
    max-width: 300px;
    margin: 0 auto;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button[type="submit"] {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background-color: #0056b3;
  }
</style>

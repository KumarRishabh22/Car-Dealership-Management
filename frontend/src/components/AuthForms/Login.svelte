<script>
  let email = "";
  let password = "";

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Make a POST request to the backend API endpoint for user authentication
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to login');
      }

      // Extract the JSON data from the response
      const data = await response.json();

      // Handle the authentication response
      console.log('Login successful:', data);

      // Redirect the user to the appropriate dashboard based on their role
      if (data.role === 'user') {
        window.location.href = '/user-dashboard'; // Redirect to user dashboard
      } else if (data.role === 'dealer') {
        window.location.href = '/dealer-dashboard'; // Redirect to dealer dashboard
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Display an error message to the user
      alert('Failed to login. Please try again.');
    }
  };
</script>

<h2>Login</h2>
<form on:submit={handleSubmit}>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" bind:value={email} required>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" bind:value={password} required>
  <button type="submit">Login</button>
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

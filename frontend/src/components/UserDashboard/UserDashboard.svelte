<script>
  let ownedVehicles = [];

  // Function to fetch user's owned vehicles from the backend
  const fetchOwnedVehicles = async () => {
    try {
      // Make a GET request to the backend API endpoint to fetch owned vehicles
      const response = await fetch('http://localhost:3000/api/user/vehicles', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include authentication token if required
          // 'Authorization': `Bearer ${token}`
        }
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to fetch owned vehicles');
      }

      // Extract the JSON data from the response
      const data = await response.json();

      // Update the ownedVehicles array with the fetched data
      ownedVehicles = data.ownedVehicles;
    } catch (error) {
      console.error('Error fetching owned vehicles:', error);
    }
  };

  // Initial fetch of user's owned vehicles
  fetchOwnedVehicles();
</script>

<h2>User Dashboard</h2>

{#if ownedVehicles.length > 0}
  <h3>Owned Vehicles</h3>
  <ul>
    {#each ownedVehicles as vehicle}
      <li>{vehicle.name} - {vehicle.model}</li>
    {/each}
  </ul>
{:else}
  <p>No vehicles owned</p>
{/if}

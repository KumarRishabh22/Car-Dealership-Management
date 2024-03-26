<script>
  let inventory = [];

  // Function to fetch dealer's inventory from the backend
  const fetchInventory = async () => {
    try {
      // Make a GET request to the backend API endpoint to fetch inventory
      const response = await fetch('http://localhost:3000/api/dealer/inventory', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include authentication token if required
          // 'Authorization': `Bearer ${token}`
        }
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to fetch inventory');
      }

      // Extract the JSON data from the response
      const data = await response.json();

      // Update the inventory with the fetched data
      inventory = data.inventory;
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  // Initial fetch of dealer's inventory
  fetchInventory();
</script>

<h2>Dealer Dashboard</h2>

{#if inventory.length > 0}
  <h3>Inventory</h3>
  <ul>
    {#each inventory as car}
      <li>{car.name} - {car.model} ({car.price})</li>
    {/each}
  </ul>
{:else}
  <p>No inventory available</p>
{/if}

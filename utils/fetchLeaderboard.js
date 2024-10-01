const fetch = require('node-fetch');

const fetchLeaderboardData = async () => {
    try {
        const response = await fetch(`https://backend.saweria.co/widgets/leaderboard/all`, {
            headers: {
                'Stream-Key': 'b0fc98333cc6becdd18dceef7687ff82', 
                'Content-Type': 'application/json' 
            }
        });

        if (!response.ok) {
            const errorMessage = await response.text(); 
            console.error(`Response Error (${response.status}):`, errorMessage);
            throw new Error(`Failed to fetch data: ${response.statusText} (${response.status}) - ${errorMessage}`);
        }

        return await response.json(); // Parse the JSON response
    } catch (error) {
        // Log the error and rethrow
        console.error('Error fetching leaderboard data:', error.message);
        throw new Error(`Failed to fetch leaderboard data: ${error.message}`);
    }
};

module.exports = { fetchLeaderboardData };

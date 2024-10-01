

const fetchLeaderboardData = async () => {
    try {
        const response = await fetch(`https://backend.saweria.co/widgets/leaderboard/all`, {
            headers: {
                'Stream-Key': 'b0fc98333cc6becdd18dceef7687ff82',
            }
        });
        if (!response.ok) {
            const errorMessage = await response.text(); 
            console.error(`Response Error (${response.status}):`, errorMessage);
            throw new Error(`Failed to fetch data: ${response.statusText} (${response.status}) - ${errorMessage}`);
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Failed to fetch leaderboard data: ${error.message}`);
    }
};


module.exports = { fetchLeaderboardData };
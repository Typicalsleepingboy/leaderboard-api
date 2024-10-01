

const fetchLeaderboardData = async () => {
    try {
        const response = await fetch(`https://backend.saweria.co/widgets/leaderboard/all`, {
            headers: {
                'Stream-Key': 'b0fc98333cc6becdd18dceef7687ff82',
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error('Error fetching top donors:', error.message);
        return [];
    }
}


module.exports = { fetchLeaderboardData };
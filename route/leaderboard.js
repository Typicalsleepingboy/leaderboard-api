const { fetchLeaderboardData } = require('../utils/fetchLeaderboard');

module.exports = async (req, res) => {
    try {
        const data = await fetchLeaderboardData();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching leaderboard data:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};
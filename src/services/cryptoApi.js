const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchCryptoData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`);

        if(!response.ok){
            throw new Error('Failed to fetch cryptocurrency data');
        }

        return await response.json();
    }
    catch (error){
        console.error(error);
        throw error;
    }
};
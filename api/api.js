import axios from "axios";

const downloadData = async (responseCount) => {
      try {
            const response = await axios.get(`https://randomuser.me/api/`, {
                  params: {
                        results: responseCount,
                  },
            });
            return response.data.results;
      } catch (error) {
            console.error("Failed to fetch data:", error);
            return null;
      }
};

export default downloadData;

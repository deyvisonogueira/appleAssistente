import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const getPythonData = async (query) => {
    try {
      const response = await axios.post("https://flaskapigoogleaiif-eza9cmdkd9bbcmbx.eastus-01.azurewebsites.net/api", {
        consulta: query
      },
      {
        headers: {
            'Authorization': apiKey
        }
        }
    );
      console.log(response.data);
      return response.data.mensagem;
    } catch (error) {
      console.error(error);
    }
  };

export default getPythonData; 
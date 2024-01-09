import axios from "axios";
import { useEffect, useState } from "react";

const StudentScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTitle();
  }, []);

  const getTitle = async () => {
    try {
      const response = await axios.get(
        "https://socheangdev-fri-api.vercel.app/api/product/all"
      );
      const data = response.data;
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Products: {products.length}</h1>
          {/* Render your products or other components here */}
        </div>
      )}
    </div>
  );
};

export default StudentScreen;

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
        <div className="products">
          <h1>Products: {products.length}</h1>
          {/* Render your products or other components here */}
          <div>
            {products.map((item, index) => {
              return (
                <div key={index.id}>
                  <div>{item.id}</div>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                  <div>{item.price}</div>
                  <div>{item.rating}</div>
                  <div>{item.images}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentScreen;

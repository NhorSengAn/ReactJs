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
      <div className="products">
        <h1>Products</h1>
        {/* Render your products or components here */}{" "}
        <div>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Rate</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.rating}</td>
                  <td>
                    <img src={item.image} alt={item.title} width="100" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentScreen;

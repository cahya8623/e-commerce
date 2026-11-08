import "./Product.css";
import { useEffect, useState } from "react";
export default function Product() {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  console.log(data);

  function Prev() {
    if (pageNumber <= 1) return;
    setStartIndex(startIndex - 2);
    setEndIndex(endIndex - 2);
    setPageNumber(pageNumber - 1);
  }
  function Next() {
    if (pageNumber > data.length || endIndex >= data.length) return;
    setStartIndex(startIndex + 2);
    setEndIndex(endIndex + 2);
    setPageNumber(pageNumber + 1);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        setData(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="card-container">
      <div className="cards">
        {data.slice(startIndex, endIndex).map((data) => (
          <div className="card">
            <img src={data.images[0]} alt="product image" />
            <div className="text-product">
              <p className="title">{data.title}</p>
              <p className="price">${data.price}</p>
              {Array.from({ length: data.reviews[0].rating }, (_, index) => (
                <span key={index}>⭐</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button id="prev" onClick={Prev}>
          Prev
        </button>
        <p>{pageNumber}</p>
        <button id="next" onClick={Next}>
          Next
        </button>
      </div>
    </div>
  );
}

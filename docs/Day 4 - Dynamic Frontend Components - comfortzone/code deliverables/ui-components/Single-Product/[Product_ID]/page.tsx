import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

function SingleProduct() {

    // -------------------  get product id from param -------------------------

  const { ProductItem }: any = useParams();

//   -----------------------  states for data handling -------------------------

  const [product, setProduct] = useState<
    | []
    | [
        {
          name: string;
          imagePath: string;
          category: string;
          price: number;
          description: string;
          _id: string;
        }
      ]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

//   ------------------------- function for fetching products --------------------------

  async function getProduct() {
    try {
      const res = await fetch(`/api/product/${ProductItem}`);
      const data = await res.json();
      if (data.length) {
        if (data.statusbar == 404) {
          setError("not found");
        } else {
          setProduct(data);
        }
      }
      console.log("data", data);
    } catch (err) {
      console.log(err);
      setError("error");
    }
  }

//  -------------------------- useEffect for fatch data on render --------------------------

  useEffect(() => {
    getProduct();
  }, []);

//   ----------------------------  ui render --------------------------------

  return (
    <div className="single-product-main">
      <div className="">
        {isLoading ? (
          <div className="skeleton">loading...</div>
        ) : (
          <div className="product-img"></div>
        )}
      </div>
      <div className="">
        <div className="poppins-thin">
          {isLoading ? (
            <div className="skeleton">loading...</div>
          ) : (
            <h2 className="product-name">{product[0]?.name}</h2>
          )}
        </div>
        <div>
          {isLoading ? (
            <div className="skeleton">loading...</div>
          ) : (
            <h3 className="product-price">
              Rs. {product[0]?.price}.00
            </h3>
          )}
        </div>
        <div className="product-review">
          <div className="rating-rating">
            {isLoading ? <div className="skeleton">loading...</div> : <Rating></Rating>}
          </div>
          {isLoading ? (
            <div className="skeleton">loading...</div>
          ) : (
            <div className="customer-reviews">
              0 Customer Reviews
            </div>
          )}
        </div>
        <div>
          {isLoading ? (
            <div className="skeleton">loading...</div>
          ) : (
            <p className="product-description">
              {product[0]?.description}
            </p>
          )}
        </div>

        {isLoading ? (
          <div className="skeleton">loading...</div>
        ) : (
          <div>
            <div className="button-section">
                <button
                  className="decreament-btn"
                >
                  -
                </button>
                <div className="text-lg">{quantity}</div>
                <button
                  className="increament-btn"
                >
                  +
                </button>
              </div>
              <button
                className="add-to-cart-btn"
              >
                Add To Cart
              </button>
        
          </div>
        )}
      </div>
    </div>
  );
}

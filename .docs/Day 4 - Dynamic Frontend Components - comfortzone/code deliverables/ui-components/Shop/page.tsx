import { useState } from "react";
import { Suspense } from "react";

export default function ShopApp() {
  return (
    <Suspense>
      <ShopPage></ShopPage>
    </Suspense>
  );
}

function ShopPage() {

  // ----------------------   category and search params -------------------------------

  const router = useRouter();
  const param = useSearchParams();
  const category = param?.get("category");
  const search = param?.get("search");

  // --------------------------- states for data fetching -------------------------------

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<[] | [[]]>([]);
  const [tempArr, setTempArr] = useState<[] | [[]]>([]);
  const [error, setError] = useState("");

  // ---------------------------- state for pagination  -----------------------------------

  const [pagination, setPagination] = useState<number>(0);

  // -----  function for fecthing products and get category and search params -------

  async function getProducts() {
    let url;
    if (category) {
      url = `/api/allProduct/?category=${category}`;
    } else {
      url = "/api/allProduct";
    }
    const res: any = await fetch(url);
    let data = await res.json();
    if (search) {
      data = data.filter((v: any) =>
        v.name.toLowerCase().includes(search.toLowerCase())
      );
      if (!data.length) {
        data = { statusbar: 404, err: "not found" };
      }
    }
    if (data.statusbar == 500) {
      setError("error");
    } else if (data.statusbar == 404) {
      setError("not found");
    } else {
      if (data.length) {
        setTempArr(data);
        setError("");
      }
    }
  }

  //  ----------- useEffects for fetch data on render or state updates --------------------

  useEffect(() => {
    if (tempArr.length) {
      const item = [...tempArr];
      const arr: any = [];
      for (let i = 0; i < item.length; i += show) {
        const subArr = item.slice(i, i + show);
        arr.push(subArr);
      }
      setProduct(arr);
      setIsLoading(false);
    }
  }, [tempArr]);

  useEffect(() => {
    getProducts();
  }, []);

  //  ------------------------------ ui render -----------------------------------------
  return (
    <div className="container">
      <div className="product-main">
        {error == "not found" ? (
          <div className="error-page">
            <div className="not-found-error">
              <NotFound size={120}></NotFound>
              <h3 className="text-2xl">Not Found</h3>
            </div>
          </div>
        ) : !isLoading ? (
          product[pagination]?.map((v: any) => (
            <div
              onClick={() => router.push(`/Product/${v._id}`)}
              key={v._id}
              className="prduct-card"
            >
              <div className="img-section">
                <Image src={v.imagePath} alt="image"></Image>
              </div>
              <div className="product-name">
                {v.name.length > 19 ? v.name.slice(0, 19) + "..." : v.name}
              </div>
              <div className="product-price">Rs : {v.price}</div>
            </div>
          ))
        ) : (
          <div className="loading">
            <div>loading...</div>
          </div>
        )}
      </div>
    </div>
  );
}

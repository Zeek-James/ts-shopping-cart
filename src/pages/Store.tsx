import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export const Store = () => {
  return (
    <div className="">
      <h1>Store</h1>
      <div className="store__Items__Container">
        {storeItems.map((item) => (
          <div key={item.id} className="item__Container">
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

export default function Home() {
  let items = useSelector((store) => store.items);

  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item}></HomeItem>
        ))}
      </div>
    </main>
  );
}

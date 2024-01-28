import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

const ShopProduct: React.FC = () => {
  const products = [
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
    {
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hardware",
      title: "Power Drill Set",
      price: "$89.99",
    },
  ];

  return (
    <>
      <div className="w-full h-full max-w-[1200px] m-auto my-20">
        <div className="divider divider-start text-xl font-black">
          Shop Products
        </div>
        <div className="grid grid-cols-4 gap-9 my-20">
          {products.map((item, index) => (
            <div
              key={index}
              className="card card-compact w-full bg-base-100 shadow-xl"
            >
              <figure>
                <img src={item.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>{item.category}</p>
                <h2 className="card-title">{item.title}!</h2>
                <p>{item.price}</p>
                <div className="flex flex-row w-full justify-between gap-1 items-center">
                  <button className="btn btn-md flex-grow bg-btnprimary text-white">
                    Add to Cart
                  </button>
                  <button className="btn btn-md btn-ghost">
                    <HeartIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopProduct;

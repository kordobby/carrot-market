import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-14 px-10 grid gap-10 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="flex justify-between my-2 
              // first:bg-blue-50 
              // last:bg-blue-50
              // only:bg-red-500
              odd:bg-blue-50
              even:bg-yellow-500"
            >
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li className="bg-red-500 py-2 empty:hidden" key={i}>
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div
          className="w-2/4 mx-auto mt-5 bg-blue-500 text-white p-3 text-center rounded-xl
        hover:bg-teal-500 hover:text-black
        active:bg-yellow-500 focus:text-red-500
        cursor-pointer"
        >
          Checkout
        </div>
      </div>
      {/* 2nd div */}
      <div className="group bg-white overflow-hidden rounded-3xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white">
          <div className="flex items-end  relative -top-16 justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className=" group-hover:bg-red-300 h-24 w-24 bg-gray-200 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">Texas, USA</span>
          </div>
        </div>
      </div>
      {/* 3rd div */}
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>💛 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 cursor-pointer focus:ring-2 ring-offset-1 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-1 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-1 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg p-1.5 bg-blue-200 flex justify-center items-center aspect-square text-xl text-gray-500 w-8">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg p-1.5 bg-blue-200 flex justify-center items-center aspect-square text-xl text-gray-500 w-8">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <span>$450</span>
            <button className="bg-blue-500 text-center text-white py-2 px-8 text-xs rounded-xl">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

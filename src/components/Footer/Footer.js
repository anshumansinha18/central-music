import React from "react";

export default function Footer() {
  return (
    <footer className="flex bg-slate-600 text-white h-[200px] py-10 px-14 flex-col sm:flex-row sm:justify-between">
      <div className="flex gap-10 justify-center">
        <div>
          <p className="h-1 w-16 bg-white mb-2"></p>
          <p className="font-bold">My Account</p>
          <p>Overview</p>
          <p>Order History</p>
          <p>Wishlist</p>
          <p>Account Information</p>
        </div>
        <div className="sm:block hidden">
          <p className="h-1 w-16 bg-white mb-2"></p>
          <p className="font-bold">Store</p>
          <p>Security Notice</p>
          <p>Location & Hours</p>
          <p>Rentals</p>
          <p>Privacy Notice</p>
        </div>
      </div>
      <div className="flex items-end">
        <div className="">
          <div className="sm:block hidden text-2xl">
            <span className="font-bold">Central</span>Music
          </div>
          <div>{/* icons */}</div>
        </div>
      </div>
    </footer>
  );
}

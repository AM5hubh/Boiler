import React, { useContext, useState } from "react";
// import axios from 'axios';
import CarouselComponent from "../CarouselComponent/CarouselComponent.jsx";
import { UserContext } from "../../../context/userContext.jsx";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="p-4">
        <CarouselComponent />
        <section className="mt-8 text-center">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-4 text-lg">
            This is a sample homepage created using React and Tailwind CSS.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;

// {user ? (
//   <div>
//     <h1>Welcome, {user.fullname}!</h1>
//     <p>Email: {user.email}</p>
//   </div>
// ) : (
//   <h1>Loading user data...</h1>
// )}

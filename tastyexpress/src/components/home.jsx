import React from "react";


const Home = () => {
    return (
        <>

         <section className="banner">
         <nav>
    <ul class="menuItems">
      <li><a href='#' data-item='Home'>Home</a></li>
      <li><a href='#' data-item='About'>About</a></li>
      <li><a href='#' data-item='Projects'>Projects</a></li>
      <li><a href='#' data-item='Blog'>Blog</a></li>
      <li><a href='#' data-item='Contact'>Contact</a></li>
    </ul>
  </nav>
          <div className="banner_text">
            <h2>Welcome to </h2> <br />
            <h2>TastyExpress</h2>
          </div>
         </section>
        </>
    );
};

export default Home;
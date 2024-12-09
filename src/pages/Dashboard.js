
// import React from "react";
// import "../assets/styles/Dashboard.css"; 

// const Dashboard = () => {
//   return (
//     <div className="dashboard-page">
    
//       <header className="dashboard-header">
//         <div className="logo">OneClick</div>
//         <nav>
//           <a href="#get10">Get $10</a>
//           <a href="#book-task">Book a Task</a>
//           <a href="#my-tasks">My Tasks</a>
//           <a href="#account">Account</a>
//         </nav>
//       </header>

      
//       <main>
   
//         <section className="search-section">
//           <h1>Book Your Next Task</h1>
//           <input
//             type="text"
//             placeholder="Describe one task, e.g., fix the hole in my wall"
//           />
//           <div className="task-categories">
//             {[
              
//               "Moving",
//               "Truck Assisted Help Moving",
//               "Furniture Assembly",
//               "General Mounting",
//               "Cleaning",
//               "See More",
//             ].map((category, index) => (
//               <button key={index} className="category-button">
//                 {category}
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Featured Section */}
//         {/* <section className="featured-section">
//           <h2>Taskers recommended for you</h2>
//           <p>⭐ 1.1+ Million Reviews</p>
//           <img src="ikea-partner-logo.png" alt="IKEA Partner Logo" />

//           <div className="tasker-cards">
//             {[
//               {
//                 name: "Mahendra S.",
//                 completedTasks: 3452,
//                 rating: 5.0,
//                 skills: [
//                   "Minor Home Repairs for $76.39/hr",
//                   "Furniture Assembly for $68.55/hr",
//                   "Wall Repair for $68.13/hr",
//                 ],
//               },
//               {
//                 name: "Igam M.",
//                 completedTasks: 499,
//                 rating: 5.0,
//                 skills: [
//                   "Furniture Assembly for $55.55/hr",
//                   "General Mounting for $71.30/hr",
//                   "Yard Work for $42.32/hr",
//                 ],
//               },
//               {
//                 name: "Edward F.",
//                 completedTasks: 1253,
//                 rating: 5.0,
//                 skills: [
//                   "General Mounting for $71.30/hr",
//                   "Minor Home Repairs for $70.20/hr",
//                   "Furniture Assembly for $57.77/hr",
//                 ],
//               },
//             ].map((tasker, index) => (
//               <div key={index} className="tasker-card">
//                 <h3>{tasker.name}</h3>
//                 <p>{tasker.completedTasks} Completed Tasks</p>
//                 <p>⭐ {tasker.rating} ({tasker.completedTasks} reviews)</p>
//                 <ul>
//                   {tasker.skills.map((skill, idx) => (
//                     <li key={idx}>{skill}</li>
//                   ))}
//                 </ul>
//                 <button>View Tasker Profile</button>
//               </div>
//             ))}
//           </div>
//         </section> */}
//         <section className="featured-section">
//   <h2>Taskers recommended for you</h2>
//   <p>⭐ 1.1+ Million Reviews</p>
//   <img src="ikea-partner-logo.png" alt="IKEA Partner Logo" />

//   <div className="tasker-cards">
//     {[
//       {
//         name: "Mahendra S.",
//         completedTasks: 3452,
//         rating: 5.0,
//         skills: [
//           "Minor Home Repairs for ₹76.39/hr",
//           "Furniture Assembly for ₹68.55/hr",
//           "Wall Repair for ₹68.13/hr",
//         ],
//         image: "profile1.jpg", // Add profile image path here
//       },
//       {
//         name: "Igam M.",
//         completedTasks: 499,
//         rating: 5.0,
//         skills: [
//           "Furniture Assembly for ₹55.55/hr",
//           "General Mounting for ₹71.30/hr",
//           "Yard Work for ₹42.32/hr",
//         ],
//         image: "profile2.jpg", // Add profile image path here
//       },
//       {
//         name: "Edward F.",
//         completedTasks: 1253,
//         rating: 5.0,
//         skills: [
//           "General Mounting for ₹71.30/hr",
//           "Minor Home Repairs for ₹70.20/hr",
//           "Furniture Assembly for ₹57.77/hr",
//         ],
//         image: "profile3.jpg", // Add profile image path here
//       },
//     ].map((tasker, index) => (
//       <div key={index} className="tasker-card">
//         <div className="tasker-image">
//           <img src={tasker.image} alt={tasker.name} />
//         </div>
//         <h3>{tasker.name}</h3>
//         <p>{tasker.completedTasks} Completed Tasks</p>
//         <p>⭐ {tasker.rating} ({tasker.completedTasks} reviews)</p>
//         <ul>
//           {tasker.skills.map((skill, idx) => (
//             <li key={idx}>{skill}</li>
//           ))}
//         </ul>
//         <button>View Tasker Profile</button>
//       </div>
//     ))}
//   </div>
// </section>

//       </main>

//       {/* Footer */}
//       <footer>
//         <div className="footer-section">
//           <div className="social-links">
//             <h4>Follow us!</h4>
//             <a href="#">Facebook</a>
//             <a href="#">Twitter</a>
//             <a href="#">Instagram</a>
//           </div>
//           <div className="footer-links">
//             <h4>Discover</h4>
//             <a href="#">Become a Tasker</a>
//             <a href="#">Services by City</a>
//             <a href="#">Services Nearby</a>
//           </div>
//           <div className="app-links">
//             <h4>Download our App</h4>
//             <a href="#">App Store</a>
//             <a href="#">Google Play</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import "../assets/styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="logo">OneClick</div>
        <nav>
          <a href="#get10">Get $10</a>
          <a href="#book-task">Book a Task</a>
          <a href="#my-tasks">My Tasks</a>
          <a href="#account">Account</a>
        </nav>
      </header>

      <main>
        <section className="search-section">
          <h1>Book Your Next Task</h1>
          <input
            type="text"
            placeholder="Describe one task, e.g., fix the hole in my wall"
          />
          <div className="task-categories">
            {[
              "Moving",
              "Truck Assisted Help Moving",
              "Furniture Assembly",
              "General Mounting",
              "Cleaning",
              "See More",
            ].map((category, index) => (
              <button key={index} className="category-button">
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="featured-section">
          <h2>Taskers recommended for you</h2>
          <p>⭐ 1.1+ Million Reviews</p>
          <img src="ikea-partner-logo.png" alt="IKEA Partner Logo" />

          <div className="tasker-cards">
            {[
              {
                name: "Mahendra S.",
                completedTasks: 3452,
                rating: 5.0,
                skills: [
                  "Minor Home Repairs for ₹76.39/hr",
                  "Furniture Assembly for ₹68.55/hr",
                  "Wall Repair for ₹68.13/hr",
                ],
                image: "profile1.jpg",
              },
              {
                name: "Igam M.",
                completedTasks: 499,
                rating: 5.0,
                skills: [
                  "Furniture Assembly for ₹55.55/hr",
                  "General Mounting for ₹71.30/hr",
                  "Yard Work for ₹42.32/hr",
                ],
                image: "profile2.jpg",
              },
              {
                name: "Edward F.",
                completedTasks: 1253,
                rating: 5.0,
                skills: [
                  "General Mounting for ₹71.30/hr",
                  "Minor Home Repairs for ₹70.20/hr"
                ],
                  image: "profile3.jpg",
              },
            ].map((tasker, index) => (
              <div key={index} className="tasker-card">
                <div className="tasker-image">
                  <img src={tasker.image} alt={tasker.name} />
                </div>
                <h3>{tasker.name}</h3>
                <p>{tasker.completedTasks} Completed Tasks</p>
                <p>⭐ {tasker.rating} ({tasker.completedTasks} reviews)</p>
                
                  {tasker.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                <br />
                <button>View Tasker Profile</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-section">
          <div className="social-links">
            <h4>Follow us!</h4>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
          <div className="footer-links">
            <h4>Discover</h4>
            <a href="#">Become a Tasker</a>
            <a href="#">Services by City</a>
            <a href="#">Services Nearby</a>
          </div>
          <div className="app-links">
            <h4>Download our App</h4>
            <a href="#">App Store</a>
            <a href="#">Google Play</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;


import React from "react";
import { Link } from "react-router-dom"; // Assuming React Router is used
import "../assets/styles/admin.css";

const AdminPanel = () => {
  const services = [
    "Dog Walking",
    "Baby Care",
    "Pet Care",
    "Workout Trainer",
    "Tutors",
    "Beauty Service",
    "Massage Service",
    "Home Cleaning",
    "Gardening",
    "Laundry Service",
    "Pest Control",
    "AC Repair",
    "Car Wash",
    "Plumbers",
  ];

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <h2>Your Logo</h2>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/services">Provider Services</Link></li>
          <li><Link to="/admin/customers">Customers</Link></li>
          <li><Link to="/admin/providers">Providers</Link></li>
          <li><Link to="/admin/incomplete">Incomplete Registration</Link></li>
          <li><Link to="/admin/chat">Live Chat</Link></li>
        </ul>
      </nav>

      <main className="dashboard-content">
        <header className="header">
          <h1>Dashboard Summary</h1>
        </header>
        <section className="cards">
          {[
            { title: "Total Revenue", value: "$0", color: "blue" },
            { title: "Complete Orders", value: "0", color: "green" },
            { title: "Cancelled Orders", value: "0", color: "red" },
            { title: "Total Orders", value: "0", color: "yellow" },
          ].map((card, index) => (
            <div key={index} className={`card ${card.color}`}>
              <h3>{card.title}</h3>
              <p>{card.value}</p>
            </div>
          ))}
        </section>

        <section className="services">
          <h2>Total Order of Services</h2>
          <div className="service-grid">
            {services.map((service, index) => (
              <div key={index} className="service">
                {service} <p>0</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;

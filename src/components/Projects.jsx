import React from "react";
import Level from "./Level";

export default function Projects({ onBack, onViewDetails }) {
  const projects = [
    {
      name: "Job Portal Platform",
      tech: "React.js • Node.js • Express.js • MongoDB • Redux • Search & Filter",
      status: "COMPLETED",
      description: [
        "Developed comprehensive job portal connecting employers with potential candidates.",
        "Implemented advanced search and filter functionality by category, salary range, and location.",
        "Built application tracking system allowing candidates to monitor their job application status.",
      ],
    },
    {
      name: "HeyThere! - Real-Time Chat Application",
      tech: "React.js • Node.js • Express.js • MongoDB • Socket.io • Authentication",
      status: "COMPLETED",
      description: [
        "Developed real-time messaging platform supporting one-on-one and group communications.",
        "Implemented WebSocket connections using Socket.io for instant message delivery.",
        "Built user authentication system with profile customization capabilities.",
      ],
    },
    {
      name: "NeoShop - E-Commerce Web Application",
      tech: "React.js • Node.js • Express.js • MongoDB • Redux • Stripe API • Tailwind CSS • JWT • bcrypt",
      status: "IN PROGRESS",
      description: [
        "Built fully functional e-commerce platform with product listings, shopping cart, and secure checkout.",
        "Created responsive design with Tailwind CSS ensuring optimal user experience across devices.",
        "Developed admin dashboard for product management and integrated Stripe payment gateway.",
      ],
    },

    {
      name: "MockMate - Smart Interview Prep App",
      tech: "React.js • Node.js • Express.js • MongoDB • Socket.io • WebRTC • OpenAI API • Whisper API • Authentication",
      status: "BETA",
      description: [
        "Developed an AI-powered mock interview platform enabling real-time Q&A with a virtual interviewer.",
        "Integrated speech-to-text (Whisper API) for capturing user responses and GPT for generating adaptive interview questions and feedback.",
        "Implemented WebRTC + Socket.io for real-time interview simulation with voice-based interactions.",
        "Built feedback system providing automated evaluation reports on clarity, content quality, and confidence.",
      ],
    },
  ];

  return (
    <Level id="projects" num="2" title="PROJECTS" onBack={onBack}>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className="project-cartridge cursor-pointer hover:scale-105 transition"
            onClick={() => onViewDetails(p)} // 🔥 pass project up
          >
            <div className="cartridge-body">
              <div className="cartridge-label">{p.name}</div>
              <div className="cartridge-tech">{p.tech}</div>
              <div
                className={`cartridge-status ${p.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {p.status}
              </div>
            </div>
            <div className="insert-slot"></div>
          </div>
        ))}
      </div>
    </Level>
  );
}

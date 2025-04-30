// // import React from "react";

// // function App() {
// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.heading}>Eye Detection System</h1>
// //       <p style={styles.description}>
// //         This system detects eyes in real-time using computer vision.
// //       </p>
// //       <button style={styles.button} onClick={() => alert("Eye Detection Started!")}>
// //         Start Detection
// //       </button>
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     textAlign: "center",
// //     padding: "50px",
// //     backgroundColor: "#f4f4f4",
// //     height: "100vh",
// //   },
// //   heading: {
// //     color: "#333",
// //     fontSize: "2rem",
// //   },
// //   description: {
// //     color: "#666",
// //     fontSize: "1.2rem",
// //     marginBottom: "20px",
// //   },
// //   button: {
// //     padding: "10px 20px",
// //     fontSize: "1rem",
// //     backgroundColor: "#007BFF",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //   },
// // };

// // export default App;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [eyeState, setEyeState] = useState("Unknown");
//   const [detecting, setDetecting] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (detecting) {
//       interval = setInterval(fetchEyeState, 1000); // Call API every second
//     } else {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [detecting]);

//   const fetchEyeState = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:5000/detect-eyes");
//       const data = await response.json();
//       setEyeState(data.eye_state);
//     } catch (error) {
//       console.error("Error detecting eyes:", error);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Real-Time Eye Detection</h1>
//       <p style={styles.status}>
//         Eye Status:{" "}
//         <span style={eyeState === "Closed" ? styles.closed : styles.open}>
//           {eyeState}
//         </span>
//       </p>
//       <button style={styles.button} onClick={() => setDetecting(!detecting)}>
//         {detecting ? "Stop Detection" : "Start Detection"}
//       </button>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: "center",
//     padding: "50px",
//     backgroundColor: "#f4f4f4",
//     height: "100vh",
//   },
//   heading: {
//     color: "#333",
//     fontSize: "2rem",
//   },
//   status: {
//     fontSize: "1.5rem",
//     marginBottom: "20px",
//   },
//   closed: {
//     color: "red",
//     fontWeight: "bold",
//   },
//   open: {
//     color: "green",
//     fontWeight: "bold",
//   },
//   button: {
//     padding: "10px 20px",
//     fontSize: "1rem",
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default App;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [eyeState, setEyeState] = useState("Unknown");
//   const [detecting, setDetecting] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     let interval;
//     if (detecting) {
//       fetchEyeState(); // Fetch immediately
//       interval = setInterval(fetchEyeState, 1000); // Call API every second
//     } else {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [detecting]);

//   const fetchEyeState = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:5000/detect-eyes");
//       if (!response.ok) {
//         throw new Error("Failed to get eye state");
//       }
//       const data = await response.json();
//       setEyeState(data.eye_state);
//       setError(""); // Clear previous errors
//     } catch (error) {
//       console.error("Error detecting eyes:", error);
//       setError("Failed to connect to backend. Make sure Flask is running.");
//       setDetecting(false); // Stop detecting if the backend fails
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Real-Time Eye Detection</h1>
//       {error ? (
//         <p style={styles.error}>{error}</p>
//       ) : (
//         <p style={styles.status}>
//           Eye Status:{" "}
//           <span style={eyeState === "Closed" ? styles.closed : styles.open}>
//             {eyeState}
//           </span>
//         </p>
//       )}
//       <button style={styles.button} onClick={() => setDetecting(!detecting)}>
//         {detecting ? "Stop Detection" : "Start Detection"}
//       </button>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: "center",
//     padding: "50px",
//     backgroundColor: "#f4f4f4",
//     height: "100vh",
//   },
//   heading: {
//     color: "#333",
//     fontSize: "2rem",
//   },
//   status: {
//     fontSize: "1.5rem",
//     marginBottom: "20px",
//   },
//   closed: {
//     color: "red",
//     fontWeight: "bold",
//   },
//   open: {
//     color: "green",
//     fontWeight: "bold",
//   },
//   button: {
//     padding: "10px 20px",
//     fontSize: "1rem",
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   error: {
//     color: "red",
//     fontSize: "1.2rem",
//   },
// };

// export default App;


import React, { useState, useEffect } from "react";

function App() {
  const [eyeState, setEyeState] = useState("Unknown");
  const [detecting, setDetecting] = useState(false);

  useEffect(() => {
    let interval;
    if (detecting) {
      interval = setInterval(fetchEyeState, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [detecting]);

  const fetchEyeState = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/detect-eyes");
      const data = await response.json();
      setEyeState(data.eye_state);
    } catch (error) {
      console.error("Error detecting eyes:", error);
    }
  };

  const handleStopDetection = async () => {
    setDetecting(false);
    setEyeState("Unknown");
    try {
      await fetch("http://127.0.0.1:5000/stop-alarm", { method: "POST" }); // New API to stop alarm
    } catch (error) {
      console.error("Error stopping alarm:", error);
    }
  };
  



  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Real-Time Eye Detection</h1>
      <p style={styles.status}>Eye Status: 
        <span 
          style={eyeState === "Closed" ? styles.closed : styles.open}>
          {eyeState}
        </span>
      </p>
      <button style={styles.button} onClick={() => setDetecting(!detecting)}>
        {detecting ? "🔴 Stop Detection" : "🟢 Start Detection"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
    color: "#fff",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  status: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  closed: {
    color: "#ff4d4d",
    padding: "8px 12px",
    backgroundColor: "rgba(255, 0, 0, 0.2)",
    borderRadius: "8px",
  },
  open: {
    color: "#00ff7f",
    padding: "8px 12px",
    backgroundColor: "rgba(0, 255, 127, 0.2)",
    borderRadius: "8px",
  },
  button: {
    padding: "12px 25px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    backgroundColor: "#ffcc00",
    color: "#333",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default App;
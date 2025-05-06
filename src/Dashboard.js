import React, { useState } from "react";
import "./Dashboard.css";
import { Bar, Line, Pie, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  RadarController,
  BarController,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  RadarController,
  BarController
);

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  // Data for various charts that change based on the selected year
  const getTeamPerformanceData = (year) => {
    switch (year) {
      case 2023:
        return {
          labels: ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore", "Delhi Capitals", "Kolkata Knight Riders"],
          datasets: [
            {
              label: "Total Wins",
              data: [6, 4, 5, 3, 2], // Data for 2023
              backgroundColor: "#3498db",
            },
          ],
        };
      case 2024:
        return {
          labels: ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore", "Delhi Capitals", "Kolkata Knight Riders"],
          datasets: [
            {
              label: "Total Wins",
              data: [7, 5, 4, 2, 3], // Data for 2024
              backgroundColor: "#3498db",
            },
          ],
        };
      default:
        return {
          labels: ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore", "Delhi Capitals", "Kolkata Knight Riders"],
          datasets: [
            {
              label: "Total Wins",
              data: [5, 3, 4, 2, 3], // Default data for 2025
              backgroundColor: "#3498db",
            },
          ],
        };
    }
  };

  const getPlayerPerformanceData = (year) => {
    switch (year) {
      case 2023:
        return {
          labels: ["Rohit Sharma", "Virat Kohli", "David Warner", "MS Dhoni", "AB de Villiers"],
          datasets: [
            {
              label: "Batting Average",
              data: [42.1, 48.7, 36.8, 45.2, 50.0], // Data for 2023
              borderColor: "#e74c3c",
              backgroundColor: "rgba(231, 76, 60, 0.2)",
              tension: 0.4,
            },
          ],
        };
      case 2024:
        return {
          labels: ["Rohit Sharma", "Virat Kohli", "David Warner", "MS Dhoni", "AB de Villiers"],
          datasets: [
            {
              label: "Batting Average",
              data: [46.4, 52.3, 40.5, 47.2, 51.8], // Data for 2024
              borderColor: "#e74c3c",
              backgroundColor: "rgba(231, 76, 60, 0.2)",
              tension: 0.4,
            },
          ],
        };
      default:
        return {
          labels: ["Rohit Sharma", "Virat Kohli", "David Warner", "MS Dhoni", "AB de Villiers"],
          datasets: [
            {
              label: "Batting Average",
              data: [45.6, 51.2, 38.4, 42.5, 48.0], // Default data for 2025
              borderColor: "#e74c3c",
              backgroundColor: "rgba(231, 76, 60, 0.2)",
              tension: 0.4,
            },
          ],
        };
    }
  };

  const getMatchResultsData = (year) => {
    switch (year) {
      case 2023:
        return {
          labels: ["Match 1", "Match 2", "Match 3", "Match 4", "Match 5"],
          datasets: [
            {
              label: "Mumbai Indians Wins",
              data: [1, 0, 1, 1, 0], // Data for 2023
              backgroundColor: "#2ecc71",
            },
            {
              label: "Chennai Super Kings Wins",
              data: [0, 1, 0, 1, 1], // Data for 2023
              backgroundColor: "#f39c12",
            },
          ],
        };
      case 2024:
        return {
          labels: ["Match 1", "Match 2", "Match 3", "Match 4", "Match 5"],
          datasets: [
            {
              label: "Mumbai Indians Wins",
              data: [1, 1, 0, 1, 1], // Data for 2024
              backgroundColor: "#2ecc71",
            },
            {
              label: "Chennai Super Kings Wins",
              data: [0, 1, 1, 0, 1], // Data for 2024
              backgroundColor: "#f39c12",
            },
          ],
        };
      default:
        return {
          labels: ["Match 1", "Match 2", "Match 3", "Match 4", "Match 5"],
          datasets: [
            {
              label: "Mumbai Indians Wins",
              data: [1, 1, 0, 1, 1], // Default data for 2025
              backgroundColor: "#2ecc71",
            },
            {
              label: "Chennai Super Kings Wins",
              data: [0, 1, 1, 0, 1], // Default data for 2025
              backgroundColor: "#f39c12",
            },
          ],
        };
    }
  };

  // New Visualizations: Added Line chart for Runs, Pie chart for Team Distribution, and Radar chart for Overall Team Performance.
  const getTotalRunsData = (year) => {
    switch (year) {
      case 2023:
        return {
          labels: ["Match 1", "Match 2", "Match 3", "Match 4", "Match 5"],
          datasets: [
            {
              label: "Mumbai Indians",
              data: [180, 200, 150, 190, 220], // Data for 2023
              borderColor: "#3498db",
              backgroundColor: "rgba(52, 152, 219, 0.2)",
              fill: true,
            },
          ],
        };
      case 2024:
        return {
          labels: ["Match 1", "Match 2", "Match 3", "Match 4", "Match 5"],
          datasets: [
            {
              label: "Mumbai Indians",
              data: [210, 250, 190, 230, 260], // Data for 2024
              borderColor: "#3498db",
              backgroundColor: "rgba(52, 152, 219, 0.2)",
              fill: true,
            },
          ],
        };
      default:
        return {
          labels: ["Match 1", "Match 2", "Match 3", "Match 4", "Match 5"],
          datasets: [
            {
              label: "Mumbai Indians",
              data: [200, 230, 180, 210, 250], // Default data for 2025
              borderColor: "#3498db",
              backgroundColor: "rgba(52, 152, 219, 0.2)",
              fill: true,
            },
          ],
        };
    }
  };

  // Pie Chart showing team distribution
  const getTeamDistributionData = (year) => {
    switch (year) {
      case 2023:
        return {
          labels: ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore", "Delhi Capitals", "Kolkata Knight Riders"],
          datasets: [
            {
              label: "Team Distribution",
              data: [30, 25, 20, 15, 10], // Data for 2023
              backgroundColor: ["#2980b9", "#f39c12", "#8e44ad", "#27ae60", "#e74c3c"],
            },
          ],
        };
      case 2024:
        return {
          labels: ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore", "Delhi Capitals", "Kolkata Knight Riders"],
          datasets: [
            {
              label: "Team Distribution",
              data: [32, 23, 19, 17, 9], // Data for 2024
              backgroundColor: ["#2980b9", "#f39c12", "#8e44ad", "#27ae60", "#e74c3c"],
            },
          ],
        };
      default:
        return {
          labels: ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore", "Delhi Capitals", "Kolkata Knight Riders"],
          datasets: [
            {
              label: "Team Distribution",
              data: [35, 20, 18, 16, 11], // Default data for 2025
              backgroundColor: ["#2980b9", "#f39c12", "#8e44ad", "#27ae60", "#e74c3c"],
            },
          ],
        };
    }
  };

  return (
    <div className="dashboard">
      <h2>IPL Dashboard {selectedYear}</h2>

      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
      >
        <option value={2023}>2023</option>
        <option value={2024}>2024</option>
        <option value={2025}>2025</option>
      </select>

      <div className="charts">
        <div className="chart">
          <h3>Team Performance - Total Wins</h3>
          <Bar data={getTeamPerformanceData(selectedYear)} />
        </div>

        <div className="chart">
          <h3>Player Performance - Batting Average</h3>
          <Line data={getPlayerPerformanceData(selectedYear)} />
        </div>

        <div className="chart">
          <h3>Match Results - Wins by Teams</h3>
          <Pie data={getMatchResultsData(selectedYear)} />
        </div>

        <div className="chart">
          <h3>Total Runs in the Season</h3>
          <Line data={getTotalRunsData(selectedYear)} />
        </div>

        <div className="chart">
          <h3>Team Distribution</h3>
          <Pie data={getTeamDistributionData(selectedYear)} />
        </div>

        <div className="chart">
          <h3>Overall Team Performance</h3>
          <Radar data={getTeamPerformanceData(selectedYear)} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ArcElement,
  Legend,
  Tooltip
);

const Dashboard = () => {
  const lineChartData = {
    labels: ["6/30/2024", "7/6/2024", "7/13/2024", "7/21/2024"],
    datasets: [
      {
        label: "Orders",
        data: [4, 3, 2, 1],
        borderColor: "#ff8c00",
        backgroundColor: "#ff8c00",
        borderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: "#ff8c00",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Sales",
        data: [1404, 800, 400, 0],
        borderColor: "#00ced1",
        backgroundColor: "#00ced1",
        borderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: "#00ced1",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true,
          color: "#e5e7eb",
        },
        ticks: {
          color: "#6b7280",
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: true,
          color: "#e5e7eb",
        },
        ticks: {
          beginAtZero: true,
          stepSize: 0.4,
          color: "#6b7280",
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 15,
          font: {
            size: 12,
          },
          color: "#6b7280",
          padding: 15,
        },
      },
    },
  };

  const pieChartData = {
    labels: ["WooCommerce Store", "Shopify Store"],
    datasets: [
      {
        label: "Portion of Sales",
        data: [44.2, 55.8],
        backgroundColor: ["#ff8c00", "#00ced1"],
        hoverOffset: 4,
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 15,
          font: {
            size: 12,
          },
          color: "#6b7280",
          padding: 15,
        },
      },
    },
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 bg-gray-50 overflow-auto">
        <div className="p-0 bg-gray-50 flex flex-col gap-6">
          <div className="bg-[#f5f5f5] w-full pt-3 pl-3 h-[50px]">
            <h1 className="bg-white text-[#A878EA] font-semibold w-[140px] h-[39px] text-left pl-3 pt-1 rounded-t-lg">
              Dashboard
            </h1>
          </div>
          <div className="flex flex-col  lg:flex-row gap-6 p-4">
            <div className="bg-white rounded-lg shadow-lg lg:p-6 p-2 flex-1 lg:h-[80vh]">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="lg:text-lg text-sm font-semibold text-gray-800">
                  Sales vs Orders
                </h2>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="text-gray-400"
                />
              </div>
              <div className="my-4 w-full border-t border-gray-300" />
              <div className="w-full h-64">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg lg:p-6 p-2 flex-1 lg:h-[80vh]">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="lg:text-lg text-sm font-semibold text-gray-800">
                  Portion of Sales
                </h2>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="text-gray-400"
                />
              </div>
              <div className="my-4 w-full border-t border-gray-300" />
              <div className="w-full h-64">
                <Pie data={pieChartData} options={pieChartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

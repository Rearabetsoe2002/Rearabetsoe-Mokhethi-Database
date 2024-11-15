// src/components/ProductBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProductBarChart = ({ products }) => {
    const data = {
        labels: products.map(product => product.name),  // Product names
        datasets: [
            {
                label: 'Product Quantity',
                data: products.map(product => product.quantity), // Corresponding quantities
                backgroundColor: 'rgba(255, 99, 132, 0.6)',  // Bar color
                borderColor: 'rgba(255, 99, 132, 1)',        // Bar border color
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                ticks: {
                    color: 'black', // Set x-axis text color to black
                },
                title: {
                    display: true,
                    text: 'Products',
                    color: 'black', // x-axis title color
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'black', // Set y-axis text color to black
                },
                title: {
                    display: true,
                    text: 'Quantity',
                    color: 'black', // y-axis title color
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: 'black', // Legend text color
                },
            },
            tooltip: {
                titleColor: 'black', // Tooltip title text color
                bodyColor: 'black',  // Tooltip body text color
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default ProductBarChart;

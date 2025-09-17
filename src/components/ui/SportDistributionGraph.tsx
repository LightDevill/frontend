import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface Athlete {
  name: string;
  sport: string;
  position?: string;
  region?: string;
  level?: string;
  score?: number;
  verified?: boolean;
  image?: string;
  stats?: Record<string, any>;
  progress?: string;
  lastUpdate?: string;
  status?: string;
}

interface SportDistributionGraphProps {
  athletes: Athlete[];
  className?: string;
}

export const SportDistributionGraph: React.FC<SportDistributionGraphProps> = ({ athletes, className = '' }) => {
  // Count athletes by sport
  const sportCounts: Record<string, number> = {};
  athletes.forEach(athlete => {
    if (athlete.sport) {
      if (sportCounts[athlete.sport]) {
        sportCounts[athlete.sport]++;
      } else {
        sportCounts[athlete.sport] = 1;
      }
    }
  });
  
  // Ensure we have at least one sport category
  if (Object.keys(sportCounts).length === 0) {
    sportCounts['No Data'] = 1;
  }

  // Prepare data for the pie chart
  const labels = Object.keys(sportCounts);
  const counts = Object.values(sportCounts);

  // Define colors for the pie chart
  const backgroundColors = [
    'rgba(54, 162, 235, 0.7)',   // Blue
    'rgba(255, 99, 132, 0.7)',    // Red
    'rgba(255, 206, 86, 0.7)',    // Yellow
    'rgba(75, 192, 192, 0.7)',    // Green
    'rgba(153, 102, 255, 0.7)',   // Purple
    'rgba(255, 159, 64, 0.7)',    // Orange
    'rgba(199, 199, 199, 0.7)',   // Gray
  ];

  const borderColors = [
    'rgba(54, 162, 235, 1)',      // Blue
    'rgba(255, 99, 132, 1)',      // Red
    'rgba(255, 206, 86, 1)',      // Yellow
    'rgba(75, 192, 192, 1)',      // Green
    'rgba(153, 102, 255, 1)',     // Purple
    'rgba(255, 159, 64, 1)',      // Orange
    'rgba(199, 199, 199, 1)',     // Gray
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Athletes by Sport',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.chart.data.datasets[0].data.reduce((a: number, b: number) => a + b, 0);
            const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        data: counts,
        backgroundColor: backgroundColors.slice(0, labels.length),
        borderColor: borderColors.slice(0, labels.length),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={`h-64 ${className}`}>
      <Pie options={options} data={data} />
    </div>
  );
};
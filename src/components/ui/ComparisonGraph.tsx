import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface TrackedAthlete {
  name: string;
  sport: string;
  progress: string;
  lastUpdate: string;
  status: string;
  image: string;
}

interface ComparisonGraphProps {
  athletes: TrackedAthlete[];
  className?: string;
}

export const ComparisonGraph: React.FC<ComparisonGraphProps> = ({ athletes, className = '' }) => {
  // Extract progress percentage values from the progress strings (e.g., '+12%' -> 12)
  const progressValues = athletes.map(athlete => {
    const progressStr = athlete.progress || '0%';
    return parseInt(progressStr.replace(/[^0-9]/g, '')) || 0;
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Athlete Progress Comparison',
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
            return `Progress: ${athletes[context.dataIndex].progress}`;
          },
          afterLabel: function(context: any) {
            return `Status: ${athletes[context.dataIndex].status}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Progress (%)',
          font: {
            weight: 'bold' as const,
          },
        },
        ticks: {
          callback: function(value: any) {
            return value + '%';
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Athletes',
          font: {
            weight: 'bold' as const,
          },
        },
      },
    },
  };

  const data = {
    labels: athletes.map(athlete => athlete.name),
    datasets: [
      {
        label: 'Progress',
        data: progressValues,
        backgroundColor: athletes.map(athlete => {
          switch (athlete.status) {
            case 'Rising':
              return 'rgba(34, 197, 94, 0.7)'; // Green
            case 'Improving':
              return 'rgba(59, 130, 246, 0.7)'; // Blue
            case 'Stable':
              return 'rgba(107, 114, 128, 0.7)'; // Gray
            default:
              return 'rgba(59, 130, 246, 0.7)'; // Default blue
          }
        }),
        borderColor: athletes.map(athlete => {
          switch (athlete.status) {
            case 'Rising':
              return 'rgb(22, 163, 74)'; // Darker green
            case 'Improving':
              return 'rgb(37, 99, 235)'; // Darker blue
            case 'Stable':
              return 'rgb(75, 85, 99)'; // Darker gray
            default:
              return 'rgb(37, 99, 235)'; // Default darker blue
          }
        }),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={`h-64 ${className}`}>
      <Bar options={options} data={data} />
    </div>
  );
};
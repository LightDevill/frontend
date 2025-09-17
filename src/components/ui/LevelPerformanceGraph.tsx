import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface Athlete {
  name: string;
  sport?: string;
  position?: string;
  region?: string;
  level?: string;
  score?: number;
  verified?: boolean;
  image?: string;
  stats?: Record<string, any>;
}

interface LevelPerformanceGraphProps {
  athletes: Athlete[];
  className?: string;
}

export const LevelPerformanceGraph: React.FC<LevelPerformanceGraphProps> = ({ athletes, className = '' }) => {
  // Group athletes by level and calculate average scores
  const levelGroups: Record<string, { count: number, totalScore: number }> = {};
  
  athletes.forEach(athlete => {
    if (athlete.level && typeof athlete.score === 'number') {
      if (!levelGroups[athlete.level]) {
        levelGroups[athlete.level] = { count: 0, totalScore: 0 };
      }
      levelGroups[athlete.level].count += 1;
      levelGroups[athlete.level].totalScore += athlete.score;
    }
  });

  // Ensure we have at least one level category
  if (Object.keys(levelGroups).length === 0) {
    levelGroups['No Data'] = { count: 1, totalScore: 0 };
  }

  // Calculate average scores by level
  const levels = Object.keys(levelGroups);
  const averageScores = levels.map(level => {
    const group = levelGroups[level];
    return group.count > 0 ? group.totalScore / group.count : 0;
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
        text: 'Average Performance by Level',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: averageScores.length > 0 ? Math.max(0, Math.min(...averageScores) - 5) : 0,
        max: averageScores.length > 0 ? Math.max(...averageScores) + 5 : 100,
        title: {
          display: true,
          text: 'Average Score',
          font: {
            weight: 'bold' as const,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Athlete Level',
          font: {
            weight: 'bold' as const,
          },
        },
      },
    },
  };

  const data = {
    labels: levels,
    datasets: [
      {
        label: 'Average Score',
        data: averageScores,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgb(75, 192, 192)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  return (
    <div className={`h-64 ${className}`}>
      <Line options={options} data={data} />
    </div>
  );
};
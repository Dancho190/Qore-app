'use client';

import { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './page.css';

type ChartType = 'publications' | 'satisfaction' | 'tuition' | 'employment';

interface University {
  id: string;
  name: string;
  shortName: string;
}

const universities: University[] = [
  { id: 'nazarbayev', name: 'Nazarbayev University', shortName: 'NU' },
  { id: 'kbtu', name: 'Kazakh-British Technical University', shortName: 'KBTU' },
  { id: 'kimep', name: 'KIMEP University', shortName: 'KIMEP' },
  { id: 'satbayev', name: 'Satbayev University', shortName: 'Satbayev' },
  { id: 'kaznu', name: 'Al-Farabi KazNU', shortName: 'KazNU' },
  { id: 'iitu', name: 'IITU', shortName: 'IITU' },
];

const publicationsData = [
  { name: 'NU', publications: 450 },
  { name: 'KBTU', publications: 180 },
  { name: 'KIMEP', publications: 95 },
  { name: 'Satbayev', publications: 320 },
  { name: 'KazNU', publications: 410 },
  { name: 'IITU', publications: 125 },
];

const satisfactionData = [
  { subject: 'Teaching', NU: 95, KBTU: 88, KIMEP: 85, Satbayev: 82, KazNU: 90, IITU: 87 },
  { subject: 'Facilities', NU: 98, KBTU: 85, KIMEP: 90, Satbayev: 80, KazNU: 88, IITU: 83 },
  { subject: 'Research', NU: 96, KBTU: 82, KIMEP: 78, Satbayev: 85, KazNU: 92, IITU: 80 },
  { subject: 'Career Support', NU: 92, KBTU: 88, KIMEP: 92, Satbayev: 78, KazNU: 85, IITU: 85 },
  { subject: 'Campus Life', NU: 90, KBTU: 87, KIMEP: 95, Satbayev: 82, KazNU: 88, IITU: 84 },
];

const tuitionData = [
  { year: '2020', NU: 8500, KBTU: 5500, KIMEP: 6000, Satbayev: 4500, KazNU: 3500, IITU: 4000 },
  { year: '2021', NU: 8700, KBTU: 5700, KIMEP: 6200, Satbayev: 4700, KazNU: 3600, IITU: 4200 },
  { year: '2022', NU: 8900, KBTU: 5900, KIMEP: 6400, Satbayev: 4900, KazNU: 3700, IITU: 4400 },
  { year: '2023', NU: 9200, KBTU: 6100, KIMEP: 6600, Satbayev: 5100, KazNU: 3800, IITU: 4600 },
  { year: '2024', NU: 9500, KBTU: 6300, KIMEP: 6800, Satbayev: 5300, KazNU: 3900, IITU: 4800 },
  { year: '2025', NU: 9800, KBTU: 6500, KIMEP: 7000, Satbayev: 5500, KazNU: 4000, IITU: 5000 },
];

const employmentData = [
  { year: '2020', NU: 92, KBTU: 85, KIMEP: 88, Satbayev: 82, KazNU: 87, IITU: 84 },
  { year: '2021', NU: 93, KBTU: 86, KIMEP: 89, Satbayev: 83, KazNU: 88, IITU: 85 },
  { year: '2022', NU: 94, KBTU: 87, KIMEP: 90, Satbayev: 84, KazNU: 89, IITU: 86 },
  { year: '2023', NU: 95, KBTU: 88, KIMEP: 91, Satbayev: 85, KazNU: 90, IITU: 87 },
  { year: '2024', NU: 96, KBTU: 89, KIMEP: 92, Satbayev: 86, KazNU: 91, IITU: 88 },
  { year: '2025', NU: 97, KBTU: 90, KIMEP: 93, Satbayev: 87, KazNU: 92, IITU: 89 },
];

const comparisonTableData = [
  {
    university: 'Nazarbayev University',
    entRequirement: 120,
    studentRatio: '8:1',
    internationalPercent: 13,
    scholarships: 'Full & Partial',
  },
  {
    university: 'KBTU',
    entRequirement: 110,
    studentRatio: '12:1',
    internationalPercent: 5,
    scholarships: 'Partial',
  },
  {
    university: 'KIMEP',
    entRequirement: 105,
    studentRatio: '10:1',
    internationalPercent: 8,
    scholarships: 'Full & Partial',
  },
  {
    university: 'Satbayev University',
    entRequirement: 105,
    studentRatio: '15:1',
    internationalPercent: 4,
    scholarships: 'Partial',
  },
  {
    university: 'Al-Farabi KazNU',
    entRequirement: 100,
    studentRatio: '18:1',
    internationalPercent: 7,
    scholarships: 'Partial',
  },
  {
    university: 'IITU',
    entRequirement: 105,
    studentRatio: '14:1',
    internationalPercent: 4,
    scholarships: 'Partial',
  },
];

export default function ComparePage() {
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>(['nazarbayev', 'kbtu', 'kaznu']);
  const [activeChart, setActiveChart] = useState<ChartType>('publications');

  const toggleUniversity = (id: string) => {
    setSelectedUniversities((prev) =>
      prev.includes(id) ? prev.filter((u) => u !== id) : [...prev, id]
    );
  };

  const getFilteredData = (data: any[], key: string) => {
    return data.map((item) => {
      const filtered: any = {};
      Object.keys(item).forEach((k) => {
        if (k === 'name' || k === 'year' || k === 'subject') {
          filtered[k] = item[k];
        } else {
          const uni = universities.find((u) => u.shortName === k);
          if (uni && selectedUniversities.includes(uni.id)) {
            filtered[k] = item[k];
          }
        }
      });
      return filtered;
    });
  };

  const renderChart = () => {
    const chartProps = {
      data: [] as any[],
      margin: { top: 20, right: 30, left: 20, bottom: 20 },
    };

    switch (activeChart) {
      case 'publications':
        chartProps.data = publicationsData.filter((item) => {
          const uni = universities.find((u) => u.shortName === item.name);
          return uni && selectedUniversities.includes(uni.id);
        });
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartProps.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
              <XAxis dataKey="name" stroke="#10b981" />
              <YAxis stroke="#10b981" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  border: '1px solid #10b981',
                  borderRadius: '8px',
                  color: '#ffffff',
                }}
              />
              <Bar dataKey="publications" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'satisfaction':
        chartProps.data = getFilteredData(satisfactionData, 'subject');
        return (
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={chartProps.data}>
              <PolarGrid stroke="rgba(255, 255, 255, 0.2)" />
              <PolarAngleAxis dataKey="subject" stroke="#10b981" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="rgba(255, 255, 255, 0.3)" />
              {selectedUniversities.map((uniId) => {
                const uni = universities.find((u) => u.id === uniId);
                if (!uni) return null;
                return (
                  <Radar
                    key={uniId}
                    name={uni.shortName}
                    dataKey={uni.shortName}
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.3}
                  />
                );
              })}
              <Legend
                wrapperStyle={{ color: '#ffffff' }}
                iconType="circle"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  border: '1px solid #10b981',
                  borderRadius: '8px',
                  color: '#ffffff',
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        );

      case 'tuition':
        chartProps.data = getFilteredData(tuitionData, 'year');
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartProps.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
              <XAxis dataKey="year" stroke="#10b981" />
              <YAxis stroke="#10b981" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  border: '1px solid #10b981',
                  borderRadius: '8px',
                  color: '#ffffff',
                }}
              />
              <Legend
                wrapperStyle={{ color: '#ffffff' }}
                iconType="line"
              />
              {selectedUniversities.map((uniId) => {
                const uni = universities.find((u) => u.id === uniId);
                if (!uni) return null;
                return (
                  <Line
                    key={uniId}
                    type="monotone"
                    dataKey={uni.shortName}
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ fill: '#10b981', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
        );

      case 'employment':
        chartProps.data = getFilteredData(employmentData, 'year');
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartProps.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
              <XAxis dataKey="year" stroke="#10b981" />
              <YAxis stroke="#10b981" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  border: '1px solid #10b981',
                  borderRadius: '8px',
                  color: '#ffffff',
                }}
              />
              <Legend
                wrapperStyle={{ color: '#ffffff' }}
                iconType="square"
              />
              {selectedUniversities.map((uniId, index) => {
                const uni = universities.find((u) => u.id === uniId);
                if (!uni) return null;
                const colors = ['#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#022c22'];
                return (
                  <Area
                    key={uniId}
                    type="monotone"
                    dataKey={uni.shortName}
                    stackId="1"
                    stroke={colors[index % colors.length]}
                    fill={colors[index % colors.length]}
                    fillOpacity={0.6}
                  />
                );
              })}
            </AreaChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <div className="compare-page">
      <Header />

      <section className="compare-hero">
        <div className="hero-content">
          <h1 className="hero-title">University Comparison</h1>
          <p className="hero-subtitle">Compare top universities in Kazakhstan side by side</p>
          
          <div className="university-selector">
            <label className="selector-label">Select Universities to Compare:</label>
            <div className="university-checkboxes">
              {universities.map((uni) => (
                <label key={uni.id} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedUniversities.includes(uni.id)}
                    onChange={() => toggleUniversity(uni.id)}
                    className="checkbox-input"
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">{uni.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="charts-section">
        <div className="section-container">
          <div className="chart-tabs">
            <button
              className={`chart-tab ${activeChart === 'publications' ? 'active' : ''}`}
              onClick={() => setActiveChart('publications')}
            >
              Research Publications
            </button>
            <button
              className={`chart-tab ${activeChart === 'satisfaction' ? 'active' : ''}`}
              onClick={() => setActiveChart('satisfaction')}
            >
              Satisfaction Scores
            </button>
            <button
              className={`chart-tab ${activeChart === 'tuition' ? 'active' : ''}`}
              onClick={() => setActiveChart('tuition')}
            >
              Tuition Trends
            </button>
            <button
              className={`chart-tab ${activeChart === 'employment' ? 'active' : ''}`}
              onClick={() => setActiveChart('employment')}
            >
              Employment Rates
            </button>
          </div>

          <div className="chart-container">
            <div className={`chart-wrapper ${activeChart}`}>
              {renderChart()}
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-table-section">
        <div className="section-container">
          <h2 className="section-title">Detailed Comparison</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>University</th>
                  <th>ENT Requirement</th>
                  <th>Student:Faculty Ratio</th>
                  <th>International %</th>
                  <th>Scholarships</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTableData.map((row, index) => (
                  <tr key={index}>
                    <td className="university-name">{row.university}</td>
                    <td>{row.entRequirement}+</td>
                    <td>{row.studentRatio}</td>
                    <td>{row.internationalPercent}%</td>
                    <td>{row.scholarships}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

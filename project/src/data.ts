import { TrafficingData, PredictiveMetrics, NewsItem } from './types';

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Major Trafficking Network Disrupted in Southeast Asia',
    description: 'Law enforcement agencies successfully dismantled a trafficking network operating across multiple countries, rescuing 45 victims.',
    source: 'International Police Organization',
    date: '2024-03-15',
    url: '#',
    category: 'success'
  },
  {
    id: '2',
    title: 'New Online Recruitment Tactics Identified',
    description: 'Authorities warn of sophisticated social media schemes targeting young women with fake job opportunities.',
    source: 'Regional Security Council',
    date: '2024-03-10',
    url: '#',
    category: 'alert'
  },
  {
    id: '3',
    title: 'Prevention Program Shows Promising Results',
    description: 'Community awareness initiative leads to 30% increase in early reporting of suspicious activities.',
    source: 'National Anti-Trafficking Coalition',
    date: '2024-03-05',
    url: '#',
    category: 'info'
  }
];

export const monthlyData: TrafficingData[] = [
  {
    month: 'Jan 2024',
    incidents: 245,
    preventionScore: 65,
    platformDistribution: {
      facebook: 85,
      instagram: 65,
      twitter: 45,
      tiktok: 30,
      other: 20
    },
    riskFactors: [
      { category: 'Job Offers', count: 120 },
      { category: 'Travel Opportunities', count: 75 },
      { category: 'Modeling Scams', count: 50 }
    ],
    locations: [
      { region: 'North America', count: 95 },
      { region: 'Europe', count: 75 },
      { region: 'Asia', count: 45 },
      { region: 'Other', count: 30 }
    ]
  },
  {
    month: 'Feb 2024',
    incidents: 198,
    preventionScore: 72,
    platformDistribution: {
      facebook: 70,
      instagram: 55,
      twitter: 38,
      tiktok: 25,
      other: 10
    },
    riskFactors: [
      { category: 'Job Offers', count: 95 },
      { category: 'Travel Opportunities', count: 60 },
      { category: 'Modeling Scams', count: 43 }
    ],
    locations: [
      { region: 'North America', count: 80 },
      { region: 'Europe', count: 60 },
      { region: 'Asia', count: 38 },
      { region: 'Other', count: 20 }
    ]
  },
  {
    month: 'Mar 2024',
    incidents: 167,
    preventionScore: 78,
    platformDistribution: {
      facebook: 55,
      instagram: 45,
      twitter: 37,
      tiktok: 20,
      other: 10
    },
    riskFactors: [
      { category: 'Job Offers', count: 82 },
      { category: 'Travel Opportunities', count: 45 },
      { category: 'Modeling Scams', count: 40 }
    ],
    locations: [
      { region: 'North America', count: 65 },
      { region: 'Europe', count: 50 },
      { region: 'Asia', count: 32 },
      { region: 'Other', count: 20 }
    ]
  },
  {
    month: 'Apr 2024',
    incidents: 143,
    preventionScore: 83,
    platformDistribution: {
      facebook: 45,
      instagram: 40,
      twitter: 33,
      tiktok: 15,
      other: 10
    },
    riskFactors: [
      { category: 'Job Offers', count: 70 },
      { category: 'Travel Opportunities', count: 38 },
      { category: 'Modeling Scams', count: 35 }
    ],
    locations: [
      { region: 'North America', count: 55 },
      { region: 'Europe', count: 45 },
      { region: 'Asia', count: 28 },
      { region: 'Other', count: 15 }
    ]
  }
];

export const predictiveMetrics: PredictiveMetrics[] = [
  {
    category: 'Online Recruitment',
    current: 156,
    predicted: 102,
    riskLevel: 'high',
    preventionMeasures: [
      'Enhanced profile screening',
      'Automated pattern detection',
      'Community reporting system'
    ]
  },
  {
    category: 'Suspicious Profiles',
    current: 289,
    predicted: 187,
    riskLevel: 'medium',
    preventionMeasures: [
      'AI-powered account verification',
      'Behavioral analysis',
      'Cross-platform tracking'
    ]
  },
  {
    category: 'Exploitation Posts',
    current: 134,
    predicted: 89,
    riskLevel: 'high',
    preventionMeasures: [
      'Content moderation',
      'Keyword filtering',
      'Image recognition'
    ]
  },
  {
    category: 'Suspicious Networks',
    current: 78,
    predicted: 45,
    riskLevel: 'critical',
    preventionMeasures: [
      'Network analysis',
      'Pattern recognition',
      'Coordination with authorities'
    ]
  }
];

export const interventionStats = {
  totalReports: 578,
  resolvedCases: 423,
  pendingInvestigations: 98,
  preventionRate: 73,
  responseTime: {
    critical: '2 hours',
    high: '12 hours',
    medium: '24 hours',
    low: '48 hours'
  },
  successfulInterventions: 245,
  platformBreakdown: {
    facebook: 35,
    instagram: 28,
    twitter: 22,
    tiktok: 10,
    other: 5
  }
};

export const keywordAnalysis = [
  {
    category: 'Job Related',
    keywords: ['modeling opportunity', 'quick money', 'travel job', 'no experience needed'],
    frequency: 456,
    riskLevel: 'high'
  },
  {
    category: 'Travel Related',
    keywords: ['free travel', 'work abroad', 'international opportunities', 'visa arranged'],
    frequency: 289,
    riskLevel: 'high'
  },
  {
    category: 'Financial',
    keywords: ['easy money', 'quick cash', 'high paying', 'immediate payment'],
    frequency: 345,
    riskLevel: 'medium'
  },
  {
    category: 'Documentation',
    keywords: ['passport help', 'visa assistance', 'document processing', 'work permit'],
    frequency: 167,
    riskLevel: 'critical'
  }
];
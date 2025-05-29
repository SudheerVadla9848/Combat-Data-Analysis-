export interface SocialMediaData {
  platform: string;
  incidents: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  keywords: string[];
  location: string;
  timestamp: string;
}

export interface ReportData {
  id: string;
  type: 'suspicious_activity' | 'potential_victim' | 'trafficking_network';
  description: string;
  evidence: string[];
  status: 'pending' | 'investigating' | 'resolved';
  timestamp: string;
  priority: 'low' | 'medium' | 'high';
}

export interface TrafficingData {
  month: string;
  incidents: number;
  preventionScore: number;
  platformDistribution: {
    [key: string]: number;
  };
  riskFactors: {
    category: string;
    count: number;
  }[];
  locations: {
    region: string;
    count: number;
  }[];
}

export interface PredictiveMetrics {
  category: string;
  current: number;
  predicted: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  preventionMeasures: string[];
}

export interface KeywordAnalysis {
  category: string;
  keywords: string[];
  frequency: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
}

export interface InterventionStats {
  totalReports: number;
  resolvedCases: number;
  pendingInvestigations: number;
  preventionRate: number;
  responseTime: {
    critical: string;
    high: string;
    medium: string;
    low: string;
  };
  successfulInterventions: number;
  platformBreakdown: {
    [key: string]: number;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  source: string;
  date: string;
  url: string;
  category: 'alert' | 'success' | 'info';
}
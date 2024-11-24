import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Importing Button component

import { _tasks, _posts, _timeline } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsNews } from '../analytics-news';
import { AnalyticsTasks } from '../analytics-tasks';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        {/* <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Weekly sales"
            percent={2.6}
            total={714000}
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [22, 8, 35, 50, 82, 84, 77, 12],
            }}
          />
        </Grid> */}

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits
            title="Chart Representation"
            chart={{
              series: [
                { label: 'Data Transfer Compliance', value: 2500 },
                { label: 'AI Model Validation', value: 2500 },
                { label: 'Risk Assessment', value: 1500 },
                { label: 'Compliance Reporting', value: 1000 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsWebsiteVisits
            title="Compliance Metrics by Region"
            subheader="(Insights into cross-border compliance)"
            chart={{
              categories: ['North America', 'Europe', 'Asia-Pacific', 'South America', 'Africa'],
              series: [
                { name: 'Compliance Accuracy (%)', data: [95, 92, 88, 90, 85] },
                { name: 'Non-Compliant Cases Detected', data: [120, 98, 140, 110, 160] },
                { name: 'Processing Time (Seconds)', data: [10, 12, 15, 13, 18] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsConversionRates
            title="Compliance Metrics Across Regions"
            subheader="(Year-over-Year Insights)"
            chart={{
              categories: ['North America', 'Europe', 'Asia-Pacific', 'South America', 'Africa'],
              series: [
                { name: '2023', data: [90, 88, 82, 85, 80] },
                { name: '2024', data: [95, 92, 88, 90, 85] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentSubject
            title="Regional Compliance Metrics"
            chart={{
              categories: ['North America', 'Europe', 'Asia-Pacific', 'South America', 'Africa'],
              series: [
                { name: 'Compliance Accuracy (%)', data: [95, 92, 88, 90, 85] },
                { name: 'Non-Compliant Cases Detected', data: [120, 98, 140, 110, 160] },
                { name: 'Processing Time (Seconds)', data: [10, 12, 15, 13, 18] },
              ],
            }}
          />
        </Grid>

        {/* Compliance Button */}
        <Grid xs={12}>
          <Button
            variant="contained"
            color="primary"
            href="https://compliencechecklist.netlify.app/" 
            sx={{ mt: 2 }}
          >
            Compliance
          </Button>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}

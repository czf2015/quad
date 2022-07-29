import * as charts from "@/components/Chart";

import {
  // AreaChartOutlined,
  // FileTextOutlined,
  CheckSquareOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
  RadarChartOutlined,
  FileMarkdownOutlined,
  PercentageOutlined,
  TagsOutlined,
  PhoneOutlined,
  SnippetsOutlined,
  MailOutlined,
  LinkOutlined,
  MenuOutlined,
  // NumberOutlined,
  PaperClipOutlined,
  StarOutlined,
  DotChartOutlined,
  HeatMapOutlined,
  // CalendarOutlined,
  DashboardOutlined,
  FontColorsOutlined,
  CheckOutlined,
} from "@ant-design/icons";

export const components = {
  ...charts,
};

export const icons = {
  // 基础类别
  Text: FontColorsOutlined,
  Check: CheckOutlined,
  Attachment: PaperClipOutlined,
  Link: LinkOutlined,
  Mail: MailOutlined,
  Phone: PhoneOutlined,
  Tags: TagsOutlined,
  Percent: PercentageOutlined,
  Markdown: FileMarkdownOutlined,
  // 图表类别
  BarChart: BarChartOutlined,
  LineChart: LineChartOutlined,
  PieChart: PieChartOutlined,
  RadarChart: RadarChartOutlined,
  ScatterChart: DotChartOutlined,
  GuageChart: DashboardOutlined,
  HeatmapChart: HeatMapOutlined,
};

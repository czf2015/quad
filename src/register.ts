import * as charts from "@/components/Chart";
import DataTable from "./components/DataTable";
import {
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
  RadarChartOutlined,
  FileMarkdownOutlined,
  PercentageOutlined,
  TagsOutlined,
  PhoneOutlined,
  MailOutlined,
  LinkOutlined,
  PaperClipOutlined,
  DotChartOutlined,
  HeatMapOutlined,
  DashboardOutlined,
  FontColorsOutlined,
  CheckOutlined,
} from "@ant-design/icons";

export const components = {
  ...charts,
  DataTable,
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

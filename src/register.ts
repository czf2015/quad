import * as charts from "@/components/Chart";
import DataTable from "./components/DataTable";
import Form from "./components/Form";
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
  FormOutlined,
} from "@ant-design/icons";

export const components = {
  ...charts,
  DataTable,
  Form,
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
  Form: FormOutlined,
  // 图表类别
  BarChart: BarChartOutlined,
  LineChart: LineChartOutlined,
  PieChart: PieChartOutlined,
  RadarChart: RadarChartOutlined,
  ScatterChart: DotChartOutlined,
  GuageChart: DashboardOutlined,
  HeatmapChart: HeatMapOutlined,
};

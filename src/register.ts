import * as charts from "@/components/Chart";
import DataTable from "@/components/DataTable";
import Modal from "@/components/Modal";
import Drawer from "@/components/Drawer";
import Form from "@/components/Form/Wrapper";
import Button from "@/components/Button";
import ColorPicker from "./components/ColorPicker";
import ColorGradient from "./components/ColorGradient";
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
  Modal,
  Drawer,
  Button,
  ColorPicker,
  ColorGradient,
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

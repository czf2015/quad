import * as charts from "@/components/Chart";
import CustomizeChart from '@/components/Chart/CustomizeChart'
import CustomizeForm from '@/components/Form/Wrapper'
import DataTable from "@/components/DataTable";
import Modal from "@/components/Modal";
import Drawer from "@/components/Drawer";
import Form from "@/components/Form/Wrapper";
import Button from "@/components/Button";
import ColorPicker from "@/components/ColorPicker";
import ColorGradient from "@/components/ColorGradient";
import DragBlock from "@/components/DragWrapper";
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
  CustomizeChart,
  DataTable,
  CustomizeForm,
  Form,
  Modal,
  Drawer,
  Button,
  ColorPicker,
  ColorGradient,
  DragBlock,
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

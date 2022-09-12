import * as charts from "@/components/Chart";
import CustomizeChart from '@/components/Chart/CustomizeChart'
import CustomizeForm from '@/components/Form/CustomizeForm'
import DataTable from "@/components/DataTable";
import Modal from "@/components/Modal";
import Drawer from "@/components/Drawer";
import Form from "@/components/Form/CustomizeForm";
import Button from "@/components/Button";
import ColorPicker from "@/components/ColorPicker";
import ColorGradient from "@/components/ColorGradient";
import DragBlock from "@/components/DragWrapper";
import Text from '@/components/Form/partials/InputText'
import FormItem from '@/components/FormItem'
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
  // form
  CustomizeForm,
  Form,
  FormItem,
  Text: FormItem,
  Number: FormItem,
  Check: FormItem,
  Radio: FormItem,
  Multiple: FormItem,
  Date: FormItem,
  Attachment: FormItem,
  Rate: FormItem,
  Kind: FormItem,
  Link: FormItem,
  Mail: FormItem,
  Phone: FormItem,
  Join: FormItem,
  Tags: FormItem,
  Percent: FormItem,
  RichText: FormItem,
  Markdown: FormItem,
  ColorPicker: FormItem,
  ColorGradient: FormItem,
  // 
  Modal,
  Drawer,
  Button,
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

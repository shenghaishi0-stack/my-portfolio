interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '智能物流看板',
    description: `企业级物流管理全栈系统，已稳定部署至生产环境。支持 2000+ 订单批量异步导入，100+ 快递公司实时追踪，JWT 权限管控与完整操作审计。
    采用异步队列 + 服务器扩容解决大并发批量处理难题，Docker 打包、Nginx 反向代理实现 Windows 服务器稳定部署。
    【技术栈】React 19 / NestJS / TypeScript / MySQL / Redis / BullMQ / Recharts / Docker / Nginx`,
    imgSrc: '/static/images/logistics-dashboard.svg',
    href: '/blog/logistics-dashboard',
  },
  {
    title: '智能家居智控系统',
    description: `基于 ESP32 + Home Assistant + Three.js 的开放式智能家居控制系统，荣获青少年创新大赛奖项。
    支持三维房屋可视化控制界面、AI 语音本地部署、人脸/指纹多模态身份识别、Node-RED 低代码自动化。
    打破品牌封闭壁垒，兼容米家/涂鸦/Aqara等主流平台，单设备成本控制在30元以内。
    【技术栈】ESP32-S3 / Home Assistant / MQTT / Three.js / OpenCV / Node-RED / MCP Server`,
    imgSrc: '/static/images/smart-home-ui.png',
    href: '/blog/smart-home-system',
  },
  {
    title: 'ESP32-P4 工业流体监控系统',
    description: `基于 ESP32-P4 双核 400MHz 的工业级管道流体实时监控系统，已稳定部署至 3 个工厂、连续运行 30 天以上。
    独立完成硬件接口设计、固件开发与 LVGL 7 英寸触摸屏 HMI（ESP_Brookesia + 电容触控），将进口同类产品成本降低 60%。
    核心亮点：ADC 多采样中值滤波（单次 16 采样取中值）使工业电磁干扰下精度稳定在 ±1%；
    四模式控制逻辑（定时 / 快捷 / 手动 / 自动）+ 液位阈值联动自动控制；
    任务调度优化 + DMA 传输将 CPU 占用从 60%+ 压降至 30% 以下，异常告警响应 <5 秒。
    【技术栈】ESP32-P4 / ESP-IDF / FreeRTOS / LVGL / ADC Oneshot / RS485 Modbus / 电容式液位传感器`,
    imgSrc: '/static/images/fluid-monitor.jpg',
    href: '/blog/fluid-monitor-system',
  },
  {
    title: 'IoT 教学沙盘',
    description: `100×100cm 四分区 IoT 教学演示沙盘，涵盖温室大棚、智能路灯、水库监测、中控系统四大场景。
    ESP32 统一控制，支持手动/自动双模式运行，配有完整实验教程。
    【技术栈】ESP32 / 传感器融合 / 继电器控制 / OLED显示`,
    imgSrc: '/static/images/iot-sandbox.jpg',
    href: '',
  },
  {
    title: '企业智能家居网关',
    description: `为江西宇瑞数字科技公司开发的商用智能家居网关产品，实现多协议设备统一接入与管理。
    支持米家、涂鸦等主流协议对接，本地化部署保障数据隐私安全。
    【技术栈】ESP32-S3 / ESP-IDF / FreeRTOS / MQTT / WebSocket`,
    imgSrc: '/static/images/enterprise-gateway.jpg',
    href: '',
  },
]

export default projectsData

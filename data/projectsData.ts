interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '智能家居网关系统',
    description: `基于 ESP32-S3 + MQTT + FreeRTOS 的智能家居统一控制网关，支持 Home Assistant 平台。
    实现 WiFi/BLE 设备统一接入、本地化控制、语音助手对接，支持 50+ 设备同时在线，响应时间 <100ms。
    【技术栈】ESP32-S3 / ESP-IDF v5.2 / FreeRTOS / MQTT / Home Assistant`,
    imgSrc: '/static/images/smart-home.jpg',
    href: 'https://github.com/shenghaishi0-stack/smart-home-gateway',
  },
  {
    title: 'ESP32-P4 流体监控系统',
    description: `面向工业场景的管道流体实时监测系统，采用 ESP32-P4 双核 400MHz 主控，RS485 Modbus 通信。
    支持 16 路传感器同时采集，精度 0.1%，异常告警响应 <5 秒，已在 3 个工厂部署。
    【技术栈】ESP32-P4 / RS485 / Modbus / 腾讯云IoT / Web Dashboard`,
    imgSrc: '/static/images/fluid-monitor.jpg',
    href: '',
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

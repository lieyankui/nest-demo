import { Module } from "@nestjs/common";
import { StatusMonitorModule } from "nestjs-status-monitor";
import { monitorConfig } from './monitor.config';

@Module({
    imports: [StatusMonitorModule.forRoot(monitorConfig)]
})
export class MonitorModule {}
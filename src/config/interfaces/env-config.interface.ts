export interface EnvConfig {
  mysql_host: string;
  mysql_port: string;
  mysql_database: string;
  mysql_username: string;
  mysql_password: string;
  logger_level: string;
  logger_log_dir: string;
  server_port: string;
  server_prefix: string;
  monitor_prefix: string;
  monitor_socket_prefix: string;
}

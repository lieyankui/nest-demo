/*
 * @Author: yongkui.he yongkui.he@easystack.cn
 * @Date: 2022-09-20 16:39:13
 * @LastEditors: yongkui.he yongkui.he@easystack.cn
 * @LastEditTime: 2022-09-20 17:11:34
 * @FilePath: \nest-demo\src\swagger.ts
 * @Description: Set swagger related configuration
 * Copyright (c) 2022 by Yokry, All Rights Reserved.
 */
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app) {
  const swaggerOptions = new DocumentBuilder()
    .setTitle('nest-demo api document')
    .setDescription('nest-demo api docuemnt')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);
}

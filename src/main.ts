import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestApplicationOptions } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const nestApplicationOptions: NestApplicationOptions = {
    cors: {
      origin: true,
      preflightContinue: false,
    },
  };


  const app = await NestFactory.create(AppModule, nestApplicationOptions);
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('API Linda Sonrisa')
    .setDescription('Api Rest de Linda Sonrisa')
    .setVersion('1.0')
    .addTag(process.env.NAME)
    .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer',
    })
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);


  await app.listen(AppModule.port);
}
bootstrap();

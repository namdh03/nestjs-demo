import { Injectable } from '@nestjs/common';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';

import fs from 'fs';
import { diskStorage } from 'multer';
import path, { join } from 'path';

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  getRootPath = () => {
    return process.cwd();
  };

  ensureExists(targetDirectory: string) {
    try {
      fs.mkdirSync(targetDirectory, { recursive: true });
      console.log('Directory successfully created, or it already exists.');
    } catch (error) {
      console.error('Failed to create directory:', error);
    }
  }

  createMulterOptions(): MulterModuleOptions {
    return {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const folder = (req?.headers?.folder_type ?? 'default') as string;

          this.ensureExists(`public/images/${folder}`);

          cb(null, join(this.getRootPath(), `public/images/${folder}`));
        },
        filename: (req, file, cb) => {
          //get image extension
          const extName = path.extname(file.originalname);

          //get image's name (without extension)
          const baseName = path.basename(file.originalname, extName);

          const finalName = `${baseName}-${Date.now()}${extName}`;

          cb(null, finalName);
        },
      }),
    };
  }
}

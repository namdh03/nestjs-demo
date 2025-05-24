import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
      fileFilter: (req, file, cb) => {
        const allowedFileTypes = ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx'];
        const fileExtension = file.originalname.split('.').pop()?.toLowerCase();
        const isValidFileType = fileExtension ? allowedFileTypes.includes(fileExtension) : false;

        if (!isValidFileType) {
          cb(new HttpException('Invalid file type', HttpStatus.UNPROCESSABLE_ENTITY), false);
        } else cb(null, true);
      },
      limits: {
        fileSize: 1024 * 1024 * 2, // 2MB
      },
    };
  }
}

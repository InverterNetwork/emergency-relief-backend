import cryptojs from 'crypto-js';

import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { isString } from 'class-validator';
import { Observable } from 'rxjs';

import { cryptoConfig } from '@src/libs/configs/src';

@Injectable()
export class DecryptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    let encryptedBody: string;
    if (!request || !request.body || !isString(request.body)) {
      encryptedBody = '';
    } else {
      encryptedBody = request.body;
    }
    try {
      const decrypted = cryptojs.AES.decrypt(encryptedBody, cryptoConfig.cryptoKey);
      const body = decrypted.toString(cryptojs.enc.Utf8);

      request.body = JSON.parse(body);
    } catch (error) {
      request.body = {};
    }

    return next.handle();
  }
}

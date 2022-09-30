/*
 * @Author: yongkui.he yongkui.he@easystack.cn
 * @Date: 2022-09-27 10:36:29
 * @LastEditors: yongkui.he yongkui.he@easystack.cn
 * @LastEditTime: 2022-09-28 19:43:49
 * @FilePath: \nest-demo\src\utils\bcrypt.util.ts
 * @Description: 密码加密解密
 * Copyright (c) 2022 by Yokry, All Rights Reserved.
 */
import * as bcrypt from 'bcrypt';
import {
  scryptSync,
  createCipheriv,
  createDecipheriv,
  randomBytes,
} from 'crypto';

const saltRounds = 10;
const algorithm = 'aes-256-gcm';
const hexEncoding = 'hex';
const utf8Encoding = 'utf8';
const splitChar = ['@', '#', '|', '$', '*', '^', '(', ')'];

// 密码加密
export function bEncrypt(pwd, rounds?: number): Promise<string> {
  if (!pwd) {
    return null;
  }
  return bcrypt.hash(pwd, rounds || saltRounds);
}

// 获取盐
export function genSalt(rounds?: number): string {
  return bcrypt.genSaltSync(rounds || saltRounds);
}

/**
 * @description: 比较初始密码和加密后的密码
 * @param {string} pwd 初始密码
 * @param {string} encryptedPwd 加密后的密码
 * @return {boolean} 初始密码和加密后的密码是否相同
 */
export function compare(pwd: string, encryptedPwd: string): Promise<boolean> {
  return bcrypt.compare(pwd, encryptedPwd);
}

export function getKey(password: string, salt: string) {
  return scryptSync(password, salt, 32);
}

function getSplitChar() {
  const index = Math.floor(Math.random() * splitChar.length);
  return splitChar[index];
}

function concatWithSplitChar(arr: Array<string>): string {
  return arr.reduce((prev, next) => {
    return `${prev}${getSplitChar()}${next}`;
  }, '');
}

/**
 * @description: 密码加密 （可以解密）
 * @param {string} pwd 加密前的密码
 * @return {string} 加密后的密码
 */
export function cEncrypt(pwd: string): string {
  const key = randomBytes(32);
  const keyStr = key.toString(hexEncoding);
  const iv = randomBytes(16);
  const ivStr = iv.toString(hexEncoding);
  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = `${cipher.update(
    pwd,
    utf8Encoding,
    hexEncoding,
  )}${cipher.final(hexEncoding)}`;
  const authTag = cipher.getAuthTag().toString(hexEncoding);
  // encrypted = [encrypted, keyStr, ivStr, authTag].join('|');
  encrypted = concatWithSplitChar([encrypted, keyStr, ivStr, authTag]);
  // console.log('encrypted: ', encrypted);
  return encrypted;
}

export function cEncrypt2(pwd: string) {
  const key = randomBytes(32);
  const keyStr = key.toString(hexEncoding);
  const iv = randomBytes(16);
  const ivStr = iv.toString(hexEncoding);
  const cipher = createCipheriv('aes-256-ccm', key, iv);
  let encrypted = `${cipher.update(
    pwd,
    utf8Encoding,
    hexEncoding,
  )}${cipher.final(hexEncoding)}`;
  // const authTag = cipher.getAuthTag().toString(hexEncoding);
  encrypted = [encrypted, keyStr, ivStr].join('|');
  return encrypted;
}

/**
 * @description: 密码解密
 * @param {string} encryptedPwd 经过cEncrypt方法加密的密码
 * @return {*} 明文密码
 */
export function cDecrypt(encryptedPwd: string): string {
  const [encrypted, keyStr, ivStr, authTag] = encryptedPwd
    .split(/[@#|$*^()]/)
    .filter((item) => !!item);
  // console.log('ivStr: ', ivStr);
  // console.log('keyStr: ', keyStr);
  const key = Buffer.from(keyStr, hexEncoding);
  const iv = Buffer.from(ivStr, hexEncoding);
  const decipher = createDecipheriv(algorithm, key, iv);
  decipher.setAuthTag(Buffer.from(authTag, hexEncoding));
  let decrypted = `${decipher.update(
    encrypted,
    hexEncoding,
    utf8Encoding,
  )}${decipher.final(utf8Encoding)}`;
  return decrypted;
}

export function cDecrypt2(encryptedPwd: string) {
  const [encrypted, keyStr, ivStr] = encryptedPwd.split('|');
  const key = Buffer.from(keyStr, hexEncoding);
  const iv = Buffer.from(ivStr, hexEncoding);
  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = `${decipher.update(
    encrypted,
    hexEncoding,
    utf8Encoding,
  )}${decipher.final(utf8Encoding)}`;

  return decrypted;
}

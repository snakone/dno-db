import { InjectionToken } from '@angular/core';

export interface ModuleConfig {
  KEY: string;
}

export interface StorageConfig extends ModuleConfig {
}

export const STORAGE_CONSTANTS: StorageConfig = {
  KEY: 'dno-db',
};

export class Storage {
  [key: string]: string;

  constructor() {
    this["theme"] = 'light';
  }
}

export let STORAGE_CONFIG = new InjectionToken<StorageConfig>('storage.config');
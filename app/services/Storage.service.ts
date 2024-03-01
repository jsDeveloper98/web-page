class StorageS {
  get<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export const StorageService = new StorageS();

interface data {
  [key: string]: any
}

export class Storage {
  private data: data = {};

  private generateId() { // 16 characters long hex string.
    return new Array(5)
      .fill(null)
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('')
      .concat(new Date().getTime().toString(16));
  }

  public get(id: string): any {
    return this.data[id];
  }

  public find(): any[] {
    const data: any[] = [];
    Object.keys(this.data).forEach((key) => { data.push(this.data[key]); });
    return data;
  }

  public save(data: any): void {
    const id = this.generateId();
    data.id = id;
    this.data[id] = data;
  }

  public delete(id: string): void {
    delete this.data[id];
  }
}

export type Query = { [key: string]: string };
export type Book = {
  id?: string,
  src: string,
  cover?: string,
  metadata: {
    title: string,
    creator: string,
    description?: string,
    pubdate?: string,
    publisher?: string,
    identifier: string,
    language?: string,
    rights?: string,
    modified_date?: string,
    layout?: string,
    orientation?: string,
    flow?: string,
    viewport?: string,
    media_active_class?: string,
    spread?: string,
    direction?: string,
  }
};

interface Data {
  [key: string]: Book
}

export class Storage {
  private data: Data = {};

  constructor() { this.init(); }

  private init(): void {
    const data = localStorage.getItem('data');
    if (!data) localStorage.setItem('data', JSON.stringify({}));
    else this.data = JSON.parse(data);
  }

  private add(key: string, value: Book): void {
    this.data[key] = value;
    localStorage.setItem('data', JSON.stringify(this.data));
  }

  private generateId(): string { // 16 characters long hex string.
    return new Array(5)
      .fill(null)
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('')
      .concat(new Date().getTime().toString(16));
  }

  public get(id: string): Book {
    return this.data[id];
  }

  public find(query?: Query): Book[] {
    const result: Book[] = [];
    Object.keys(this.data).forEach((key) => {
      if (!query) result.push(this.data[key]); // Return all the results.
      else { // Match the query
        const queryKeys = Object.keys(query);
        const match = queryKeys.map((queryKey) => {
          const value = queryKey.split('.').reduce((acc: any, val) => acc[val], this.data[key]);
          return value === query[queryKey]
        } );
        if (match.every(value => value === true)) result.push(this.data[key]);
      }
    });
    return result;
  }

  public save(data: Book): Book {
    const id = this.generateId();
    data.id = id;
    this.add(id, data);
    return data;
  }

  public delete(id: string): void {
    //
  }
}

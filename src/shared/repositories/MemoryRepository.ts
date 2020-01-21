import { IMapper } from '../IMapper'

export type model = {
  id: string;
}

export interface MemoryRepository<T extends model, K extends model> {
  items: K[];
  mapper: IMapper<T, K>;
}

export class MemoryRepository<T extends model, K extends model> {
  constructor(items: K[], mapper: IMapper<T, K>) {
    this.items = items;
    this.mapper = mapper;
  }

  async get() {
    return this.items.map(e => this.mapper.toDomain(e));
  }

  async getById(id: string) {
    const item = this.items.find(e => id === e.id);
    return item && this.mapper.toDomain(item);
  }

  async save(item: T) {
    const serializedItem = this.mapper.toDTO(item);
    this.items = [...this.items.filter(e => serializedItem.id !== e.id), serializedItem];
  }

  async delete(id: string) {
    this.items = this.items.filter(e => id !== e.id);
  }

  async exists(input: T) {
    return Boolean(this.items.find(e => e.id === input.id));
  }
}
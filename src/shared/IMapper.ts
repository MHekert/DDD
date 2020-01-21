export interface IMapper<T, K> {
  toDomain(data: K): T;
  toDTO(data: T): K
}
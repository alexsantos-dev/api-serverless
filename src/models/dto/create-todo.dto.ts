export class TodoCreateDto {
  title!: string

  constructor(title: string) {
    this.title = title
  }
}

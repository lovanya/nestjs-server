import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn() id: ObjectID;

  @Column() firstName: string;

  @Column() lastName: string;

  @Column() age: number;

  @Column() sex: string;

  @Column() phone: string;

  @Column() address: string;

  @Column() isMarried: boolean;
}

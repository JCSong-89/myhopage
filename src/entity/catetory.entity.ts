import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Board } from "./board.entity";

@Entity({
  name: "categories",
})
export class Category {
  @PrimaryColumn({
    primary: true,
    unique: true,
  })
  id!: number;

  @Column()
  name!: string;

  @Column()
  type!: boolean;

  @OneToMany(() => Board, (board) => board.category)
  @JoinColumn()
  board!: Board;
}

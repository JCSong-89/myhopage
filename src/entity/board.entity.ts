import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Category } from "./catetory.entity";

@Entity({
  name: "boards",
})
export class Board {
  @PrimaryColumn({
    primary: true,
    unique: true,
  })
  id!: number;

  @Column()
  title!: string;

  @Column({ type: "longtext" })
  content!: boolean;

  @ManyToOne(() => Category, (catetory) => catetory.board, {
    primary: true,
  })
  category!: Category;
}

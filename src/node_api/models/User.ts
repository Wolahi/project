import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToMany,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Role } from "./Role";

@Entity("User")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  userName: string;

  @ManyToOne((type) => Role)
  @JoinColumn({ name: "role" })
  role: number;
}

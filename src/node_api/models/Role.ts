import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity("Role")
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;
}

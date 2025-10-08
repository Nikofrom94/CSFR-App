import { ExecFileSyncOptionsWithBufferEncoding } from "child_process"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany } from "typeorm"
import { Ability } from "./Ability"

@Entity()
export class FocusAbilities {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()

    @UpdateDateColumn()

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities: Ability[]

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities_to_choose: Ability[]

}

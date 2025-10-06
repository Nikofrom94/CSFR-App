import { ExecFileSyncOptionsWithBufferEncoding } from "child_process"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany } from "typeorm"
import { Ability } from "./Ability"

@Entity()
export class CharacterType {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()

    @UpdateDateColumn()

    @Column("varchar", { length: 50 })
    name: string

    @Column("int")
    might_start

    @Column("int")
    speed_start

    @Column("int")
    intellect_start

    @Column("int")
    might_edge_start

    @Column("int")
    speed_edge_start

    @Column("int")
    intellect_edge_start

    @Column({type: "int", default: "2"})
    cyphers_start

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities_tier1: Ability[]

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities_tier2: Ability[]

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities_tier3: Ability[]

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities_tier4: Ability[]

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities_tier5: Ability[]

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities_tier6: Ability[]
}
